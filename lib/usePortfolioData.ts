'use client';
import { useCallback, useEffect, useState } from 'react';
import { getSupabase } from './supabase';
import { portfolioDb } from './db';
import { seedMetrics, seedProjects } from './seed';
import type { PortfolioProject, TelemetryMetric } from './types';

type SyncState = 'connecting' | 'live' | 'offline' | 'demo';

export function usePortfolioData() {
  const [projects, setProjects] = useState<PortfolioProject[]>(seedProjects);
  const [metrics, setMetrics] = useState<TelemetryMetric[]>(seedMetrics);
  const [syncState, setSyncState] = useState<SyncState>('connecting');
  const [lastSync, setLastSync] = useState<string | null>(null);

  const loadCache = useCallback(async () => {
    try {
      if (!portfolioDb) return;
      const [p, m] = await Promise.all([
        portfolioDb.projects.toArray(),
        portfolioDb.metrics.toArray()
      ]);
      if (p?.length) setProjects(p);
      if (m?.length) setMetrics(m);
    } catch {
      /* Seed data remains available if IndexedDB is unavailable or blocked. */
    }
  }, []);

  const refresh = useCallback(async () => {
    const isOnline = typeof navigator !== 'undefined' ? navigator.onLine : true;
    if (!isOnline) {
      setSyncState('offline');
      return;
    }

    const supabase = getSupabase();
    if (!supabase) {
      setSyncState('demo');
      return;
    }

    try {
      const [p, m] = await Promise.all([
        supabase.from('projects').select('*').order('sort_order'),
        supabase.from('telemetry_metrics').select('*').order('id')
      ]);

      if (p.error) throw p.error;
      if (m.error) throw m.error;

      const nextProjects = (p.data ?? []) as PortfolioProject[];
      const nextMetrics = (m.data ?? []) as TelemetryMetric[];

      if (nextProjects.length) {
        setProjects(nextProjects);
        await portfolioDb?.projects.bulkPut(nextProjects);
      }
      if (nextMetrics.length) {
        setMetrics(nextMetrics);
        await portfolioDb?.metrics.bulkPut(nextMetrics);
      }

      setLastSync(new Date().toISOString());
      setSyncState('live');
    } catch (error) {
      console.warn('Portfolio sync unavailable; using local cache.', error);
      await loadCache();
      const currentOnline = typeof navigator !== 'undefined' ? navigator.onLine : true;
      setSyncState(currentOnline ? 'demo' : 'offline');
    }
  }, [loadCache]);

  useEffect(() => {
    let active = true;
    const goOnline = () => { if (active) void refresh(); };
    const goOffline = () => { if (active) setSyncState('offline'); };

    void (async () => {
      await loadCache();
      if (active) await refresh();
    })();

    window.addEventListener('online', goOnline);
    window.addEventListener('offline', goOffline);

    const supabase = getSupabase();
    let channel: ReturnType<NonNullable<typeof supabase>['channel']> | null = null;

    if (supabase) {
      channel = supabase.channel('portfolio-live-updates')
        .on('postgres_changes', { event: '*', schema: 'public', table: 'projects' }, () => {
          if (active) void refresh();
        })
        .on('postgres_changes', { event: '*', schema: 'public', table: 'telemetry_metrics' }, () => {
          if (active) void refresh();
        })
        .subscribe((status) => {
          if (!active) return;
          if (status === 'SUBSCRIBED') setSyncState('live');
          if (status === 'CHANNEL_ERROR' || status === 'TIMED_OUT') {
            const currentOnline = typeof navigator !== 'undefined' ? navigator.onLine : true;
            setSyncState(currentOnline ? 'demo' : 'offline');
          }
        });
    }

    return () => {
      active = false;
      window.removeEventListener('online', goOnline);
      window.removeEventListener('offline', goOffline);
      if (channel && supabase) {
        void supabase.removeChannel(channel);
      }
    };
  }, [loadCache, refresh]);

  return { projects, metrics, syncState, lastSync, refresh };
}
