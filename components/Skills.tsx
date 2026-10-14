'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  TrendingUp,
  LineChart,
  Code2,
  Workflow,
  Sparkles,
  Database,
  CheckCircle2,
  ShieldCheck
} from 'lucide-react';
import type { TelemetryMetric } from '@/lib/types';

interface SkillsProps {
  metrics: TelemetryMetric[];
}

function Counter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    setDisplay(value);
  }, [value]);

  return (
    <motion.span
      key={display}
      initial={{ opacity: 0.5, y: 4 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {display.toLocaleString()}{suffix}
    </motion.span>
  );
}

export default function Skills({ metrics }: SkillsProps) {
  const skillCategories = [
    {
      title: 'Finance & Capital Markets',
      icon: <TrendingUp className="text-champagne" size={18} />,
      badge: 'NISM V-A Certified',
      description: 'Comprehensive grounding in mutual fund architectures, financial statement valuation, and investment dynamics.',
      skills: [
        'Mutual Funds (NISM V-A)',
        'Financial Analysis',
        'Valuation Principles',
        'Portfolio Fundamentals',
        'Risk & Return Modeling',
        'Asset Allocation'
      ]
    },
    {
      title: 'Business Intelligence & Analytics',
      icon: <LineChart className="text-techblue" size={18} />,
      badge: 'Executive Dashboards',
      description: 'Translating complex datasets into decision-support visuals with Power BI and Advanced Excel.',
      skills: [
        'Power BI & DAX',
        'Advanced Excel (Solver, XLOOKUP)',
        'Tableau Storytelling',
        'Relational Data Modeling',
        'KPI Architecture',
        'Executive Reporting'
      ]
    },
    {
      title: 'Data Science & Development',
      icon: <Code2 className="text-emerald-400" size={18} />,
      badge: 'Predictive Modeling',
      description: 'Building statistical pipelines, logistic regression classifiers, and lightweight analytical apps.',
      skills: [
        'Python (Pandas, NumPy)',
        'SQL (PostgreSQL, MySQL)',
        'Scikit-learn',
        'Logistic Regression',
        'Streamlit Web Apps',
        'R Statistical Analysis'
      ]
    },
    {
      title: 'Behavioral Insights & Automation',
      icon: <Workflow className="text-purple-400" size={18} />,
      badge: 'Process Architecture',
      description: 'Connecting empirical human psychological research with digital marketing and sales automation workflows.',
      skills: [
        'Empirical Survey Design',
        'Distress Data Analysis (110 Respondents)',
        'CRM Workflows (The100x Digital)',
        'Lead Funnel Automation',
        'Audience Psychology',
        'Operational Pipeline Logic'
      ]
    }
  ];

  return (
    <section id="skills" className="relative py-24 sm:py-32 bg-matte">
      {/* Background illumination */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-techblue/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="section-wrap relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs tracking-widest text-champagne uppercase mb-3">
              <span className="w-6 h-[1px] bg-champagne" />
              <span>02 / TELEMETRY & CAPABILITIES</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl tracking-tight text-white">
              Engineered Competencies &amp;<br />
              <span className="gradient-champagne">Verified System Metrics.</span>
            </h2>
          </div>
          <p className="text-silver text-sm max-w-md leading-relaxed">
            A structured, honest evaluation of technical disciplines, database-backed portfolio metrics, and analytical tools.
          </p>
        </div>

        {/* Telemetry Metric Cards Grid (Supabase Live / IndexedDB Local-first) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.id}
              className="glass-panel p-6 relative overflow-hidden flex flex-col justify-between min-h-[175px] group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              {/* Card Header */}
              <div className="flex items-center justify-between text-silver/70 text-[11px] font-mono tracking-wider">
                <span>{metric.label}</span>
                <span className="text-champagne/70 font-semibold">0{i + 1}</span>
              </div>

              {/* Metric Value */}
              <div className="my-3">
                <div className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight">
                  <Counter value={metric.value} suffix={metric.suffix} />
                </div>
              </div>

              {/* Metric Detail */}
              <p className="text-xs text-silver/80 line-clamp-2 leading-relaxed">
                {metric.detail}
              </p>

              {/* Subtle top indicator line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-champagne/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Note on Telemetry Data Integrity */}
        <div className="flex items-center gap-2.5 text-xs text-silver/60 bg-surface/40 border border-white/[0.06] rounded-lg px-4 py-3 mb-16">
          <ShieldCheck size={16} className="text-champagne shrink-0" />
          <span>
            <strong>Data Integrity Note:</strong> Metrics reflect verified educational and project milestones stored in Supabase with IndexedDB fallback. These represent portfolio instrumentation rather than financial market trading feeds.
          </span>
        </div>

        {/* Skills Matrix 4-Column / 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              className="p-7 rounded-2xl bg-charcoal/80 border border-white/[0.08] hover:border-champagne/30 transition-all flex flex-col justify-between group"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-surface border border-white/10 group-hover:border-champagne/40 transition-colors">
                      {cat.icon}
                    </div>
                    <h3 className="font-display font-bold text-lg text-white">
                      {cat.title}
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-white/[0.05] border border-white/10 text-champagne-light">
                    {cat.badge}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-silver/80 leading-relaxed mb-6">
                  {cat.description}
                </p>
              </div>

              {/* Skills Tags List */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.06]">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1.5 text-[11px] font-medium px-3 py-1.5 rounded-md bg-surface/90 text-silver-light border border-white/[0.08] hover:border-champagne/40 hover:text-white transition-colors"
                  >
                    <span className="w-1 h-1 rounded-full bg-champagne" />
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
