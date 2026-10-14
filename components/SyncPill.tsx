'use client';
import { motion } from 'framer-motion';
import { Radio, WifiOff, Database, Loader2 } from 'lucide-react';
import type { ReactNode } from 'react';

export default function SyncPill({ state }: { state: 'connecting' | 'live' | 'offline' | 'demo' }) {
  const config: Record<typeof state, { label: string; icon: ReactNode; dotClass: string; borderClass: string; textClass: string }> = {
    connecting: {
      label: 'Connecting Sync Engine',
      icon: <Loader2 size={12} className="animate-spin text-silver" />,
      dotClass: 'bg-silver animate-pulse',
      borderClass: 'border-white/10 bg-surface/70',
      textClass: 'text-silver'
    },
    live: {
      label: 'Supabase Live Realtime',
      icon: <Radio size={12} className="text-emerald-400" />,
      dotClass: 'bg-emerald-400 shadow-[0_0_8px_#34d399]',
      borderClass: 'border-emerald-500/25 bg-emerald-950/20',
      textClass: 'text-emerald-200'
    },
    offline: {
      label: 'IndexedDB Offline Cache',
      icon: <WifiOff size={12} className="text-amber-400" />,
      dotClass: 'bg-amber-400 shadow-[0_0_8px_#fbbf24]',
      borderClass: 'border-amber-500/25 bg-amber-950/20',
      textClass: 'text-amber-200'
    },
    demo: {
      label: 'Local First Mode · Ready',
      icon: <Database size={12} className="text-champagne" />,
      dotClass: 'bg-champagne shadow-[0_0_8px_#c6ae82]',
      borderClass: 'border-champagne/30 bg-surface/80',
      textClass: 'text-champagne-light'
    }
  };

  const c = config[state] || config.demo;

  return (
    <motion.div
      layout
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-[11px] font-mono tracking-wide backdrop-blur-md transition-all duration-300 ${c.borderClass} ${c.textClass}`}
      initial={{ opacity: 0, y: 4 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      title={c.label}
    >
      <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${c.dotClass}`} />
      <span className="shrink-0">{c.icon}</span>
      <span className="whitespace-nowrap font-medium">{c.label}</span>
    </motion.div>
  );
}
