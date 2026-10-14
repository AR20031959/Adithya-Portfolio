'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowUpRight,
  ChevronDown,
  ChevronUp,
  Github,
  Code2,
  TrendingUp,
  Brain,
  Workflow,
  ExternalLink,
  Sparkles,
  Layers,
  CheckCircle2,
  Clock
} from 'lucide-react';
import type { PortfolioProject } from '@/lib/types';

interface ProjectsProps {
  projects: PortfolioProject[];
}

// Authentic metadata enrichment mapped by project ID
const projectMetadata: Record<
  string,
  {
    status: 'In Development' | 'Completed';
    statusColor: string;
    problem: string;
    solution: string;
    highlights: string[];
    icon: React.ReactNode;
  }
> = {
  'finsight-ai': {
    status: 'In Development',
    statusColor: 'text-amber-300 bg-amber-950/40 border-amber-500/30',
    problem: 'Financial reports, prospectus filings, and market data are excessively complex for retail investors and novice advisors.',
    solution: 'Designed an AI-assisted financial copilot combining natural language queries with structured market analysis tools.',
    highlights: ['Multi-platform Flutter architecture', 'Python backend processing', 'Contextual financial summarization'],
    icon: <TrendingUp className="text-champagne" size={20} />
  },
  'mental-health-research': {
    status: 'Completed',
    statusColor: 'text-emerald-300 bg-emerald-950/40 border-emerald-500/30',
    problem: 'Subjective mental health distress lacked empirical quantification across varied demographic segments.',
    solution: 'Formulated a comprehensive survey instrument, gathered and statistically analysed data from 110 participants, and synthesized actionable visual presentations.',
    highlights: ['110 participant sample size', 'Empirical statistical modeling', 'Visual narrative synthesis'],
    icon: <Brain className="text-techblue" size={20} />
  },
  'marketing-automation': {
    status: 'Completed',
    statusColor: 'text-emerald-300 bg-emerald-950/40 border-emerald-500/30',
    problem: 'Manual lead handoffs between digital marketing campaigns and sales personnel led to delays and lead attrition.',
    solution: 'Engineered CRM automation pipelines at The100x Digital that automatically route, score, and initiate follow-ups with leads.',
    highlights: ['The100x Digital Internship project', 'Automated sales funnels', 'Reduced response turnaround time'],
    icon: <Workflow className="text-purple-400" size={20} />
  },
  'power-bi-analytics': {
    status: 'Completed',
    statusColor: 'text-emerald-300 bg-emerald-950/40 border-emerald-500/30',
    problem: 'Fragmented operational records obscured executive visibility into performance bottlenecks and margins.',
    solution: 'Architected relational data models and dynamic DAX metrics to produce interactive decision-support executive dashboards.',
    highlights: ['Multi-table DAX data modeling', 'Dynamic scenario tracking', 'High-impact executive visual UX'],
    icon: <Layers className="text-champagne" size={20} />
  },
  'titanic-model': {
    status: 'Completed',
    statusColor: 'text-emerald-300 bg-emerald-950/40 border-emerald-500/30',
    problem: 'Machine learning classification concepts are often treated as black boxes without interactive parameter testing.',
    solution: 'Built a logistic regression classification pipeline with an intuitive Streamlit interface enabling dynamic probability exploration.',
    highlights: ['Scikit-learn logistic regression', 'Streamlit interactive UI', 'Feature importance transparency'],
    icon: <Code2 className="text-emerald-400" size={20} />
  },
  'movie-reservation': {
    status: 'Completed',
    statusColor: 'text-emerald-300 bg-emerald-950/40 border-emerald-500/30',
    problem: 'Seating reservation engines require strict relational transaction integrity to prevent race conditions and double bookings.',
    solution: 'Developed a relational PHP & MySQL reservation portal implementing transaction locking and seating state logic.',
    highlights: ['Relational schema design', 'XAMPP development environment', 'Transactional seat-booking logic'],
    icon: <CheckCircle2 className="text-silver-light" size={20} />
  }
};

export default function Projects({ projects }: ProjectsProps) {
  const [filter, setFilter] = useState<'all' | 'featured' | 'completed' | 'dev'>('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredProjects = useMemo(() => {
    return projects
      .slice()
      .sort((a, b) => a.sort_order - b.sort_order)
      .filter((p) => {
        const meta = projectMetadata[p.id];
        if (filter === 'featured') return p.featured;
        if (filter === 'completed') return meta?.status === 'Completed';
        if (filter === 'dev') return meta?.status === 'In Development';
        return true;
      });
  }, [projects, filter]);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="projects" className="relative py-24 sm:py-32 bg-charcoal border-y border-white/[0.06]">
      {/* Background glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-champagne/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="section-wrap relative z-10">
        {/* Section Header & Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs tracking-widest text-champagne uppercase mb-3">
              <span className="w-6 h-[1px] bg-champagne" />
              <span>03 / APPLIED WORK &amp; RESEARCH</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl tracking-tight text-white">
              Ideas Engineered into<br />
              <span className="gradient-champagne">Measurable Reality.</span>
            </h2>
          </div>

          {/* Interactive Filters */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-xl bg-surface/70 border border-white/[0.08] backdrop-blur-md self-start md:self-auto">
            {(
              [
                { id: 'all', label: 'All Projects' },
                { id: 'featured', label: 'Featured' },
                { id: 'completed', label: 'Completed' },
                { id: 'dev', label: 'In Progress' }
              ] as const
            ).map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium tracking-wide transition-all ${
                  filter === tab.id
                    ? 'bg-champagne text-matte font-bold shadow-md'
                    : 'text-silver hover:text-white hover:bg-white/[0.05]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {filteredProjects.map((project, idx) => {
            const meta = projectMetadata[project.id] || {
              status: 'Completed',
              statusColor: 'text-emerald-300 bg-emerald-950/40 border-emerald-500/30',
              problem: 'Complex domain workflow requiring structured problem solving.',
              solution: project.description,
              highlights: ['Verified project implementation'],
              icon: <Sparkles className="text-champagne" size={20} />
            };

            const isExpanded = expandedId === project.id;

            return (
              <motion.article
                layout
                key={project.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  project.featured
                    ? 'bg-gradient-to-b from-surface/90 to-panel/90 border-champagne/30 shadow-[0_10px_30px_rgba(198,174,130,0.06)]'
                    : 'bg-surface/70 border-white/[0.08] hover:border-white/[0.18]'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: idx * 0.05, duration: 0.5 }}
              >
                <div className="p-6 sm:p-7 flex flex-col justify-between h-full">
                  {/* Top Bar: Category & Status */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="font-mono text-[10px] tracking-wider text-silver uppercase font-semibold">
                      {project.category}
                    </span>
                    <span
                      className={`inline-flex items-center gap-1.5 text-[10px] font-mono px-2 py-0.5 rounded-full border ${meta.statusColor}`}
                    >
                      {meta.status === 'In Development' ? <Clock size={10} /> : <CheckCircle2 size={10} />}
                      {meta.status}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-start gap-3.5 mb-3">
                    <div className="p-2.5 rounded-xl bg-charcoal border border-white/10 shrink-0 mt-0.5">
                      {meta.icon}
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg sm:text-xl text-white group-hover:text-champagne transition-colors">
                        {project.title}
                      </h3>
                      {project.featured && (
                        <span className="inline-block mt-0.5 text-[9px] font-mono uppercase tracking-widest text-champagne">
                          Featured Initiative
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Concise Description */}
                  <p className="text-xs sm:text-sm text-silver/80 leading-relaxed mb-5 min-h-[50px]">
                    {project.description}
                  </p>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.stack.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono px-2.5 py-1 rounded bg-matte/80 text-silver border border-white/[0.06]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Expandable Details Drawer */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden pt-4 border-t border-white/[0.08] mb-5 space-y-3.5 text-xs text-silver"
                      >
                        <div>
                          <strong className="text-white block font-mono text-[11px] uppercase tracking-wider mb-1">
                            Problem Addressed:
                          </strong>
                          <p className="text-silver/90 leading-relaxed">{meta.problem}</p>
                        </div>
                        <div>
                          <strong className="text-white block font-mono text-[11px] uppercase tracking-wider mb-1">
                            Engineered Approach:
                          </strong>
                          <p className="text-silver/90 leading-relaxed">{meta.solution}</p>
                        </div>
                        <div>
                          <strong className="text-white block font-mono text-[11px] uppercase tracking-wider mb-1">
                            Key Highlights:
                          </strong>
                          <ul className="list-disc list-inside space-y-1 text-silver/80">
                            {meta.highlights.map((h, i) => (
                              <li key={i}>{h}</li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Card Bottom: Toggle and External Link */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/[0.06] mt-auto">
                    <button
                      onClick={() => toggleExpand(project.id)}
                      className="inline-flex items-center gap-1.5 text-xs font-mono tracking-wider text-silver hover:text-champagne transition-colors"
                      aria-expanded={isExpanded}
                    >
                      <span>{isExpanded ? 'COLLAPSE' : 'INSPECT DETAILS'}</span>
                      {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    </button>

                    {project.href ? (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] text-white border border-white/10 hover:border-champagne/40 transition-all"
                        aria-label={`Open repository for ${project.title}`}
                      >
                        <span>View Project</span>
                        <ArrowUpRight size={13} className="text-champagne" />
                      </a>
                    ) : (
                      <span className="text-[11px] font-mono text-silver/50">
                        Documentation on Request
                      </span>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
