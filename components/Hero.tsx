'use client';

import { motion } from 'framer-motion';
import {
  ArrowDownRight,
  ArrowUpRight,
  FileText,
  Github,
  Linkedin,
  Mail,
  Brain,
  TrendingUp,
  Code2,
  Workflow,
  ChevronDown
} from 'lucide-react';
import type { Variants } from 'framer-motion';
import SyncPill from './SyncPill';

interface HeroProps {
  syncState: 'connecting' | 'live' | 'offline' | 'demo';
  lastSync: string | null;
}

export default function Hero({ syncState, lastSync }: HeroProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-matte"
    >
      {/* Background ambient lighting */}
      <div className="hero-glow-gold -top-20 -left-20" />
      <div className="hero-glow-blue top-1/3 -right-24" />
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

      <div className="section-wrap relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Hero Typography & Actions */}
        <motion.div
          className="lg:col-span-7 flex flex-col items-start"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Eyebrow / Disciplinary Tag */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface/80 border border-white/10 text-champagne text-[11px] font-mono tracking-wider uppercase mb-6 shadow-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-champagne animate-pulse" />
            <span>Finance × Analytics × Data Science × Psychology</span>
          </motion.div>

          {/* Primary Name */}
          <motion.h1
            variants={itemVariants}
            className="font-display font-extrabold text-4xl sm:text-6xl xl:text-7xl tracking-tight leading-[1.08] text-white mb-6"
          >
            ADITHYA R<span className="text-champagne">.</span>
            <span className="block mt-2 text-2xl sm:text-4xl xl:text-5xl font-semibold text-silver font-sans tracking-tight">
              Turning complex data into <span className="gradient-champagne">clearer decisions</span>.
            </span>
          </motion.h1>

          {/* Core Biography / Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-silver text-base sm:text-lg leading-relaxed max-w-2xl mb-8 font-normal"
          >
            MBA student at St. Joseph’s College of Engineering specializing in Finance and Business Analytics, with an undergraduate foundation in Psychology. I connect quantitative market rigor, predictive data science, and behavioral insight to drive strategic business outcomes.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto"
          >
            <a href="#projects" className="btn-primary w-full sm:w-auto">
              <span>View My Projects</span>
              <ArrowDownRight size={16} />
            </a>

            <a
              href="mailto:adithyaramadoss@gmail.com?subject=Resume%20Request%20-%20Adithya%20R."
              className="btn-secondary w-full sm:w-auto"
              title="Request or download resume PDF"
            >
              <FileText size={15} className="text-champagne" />
              <span>Download Resume</span>
            </a>
          </motion.div>

          {/* Social Links & Real-Time Sync Indicator */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-between gap-6 w-full pt-6 border-t border-white/[0.08]"
          >
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/adithya-r-wc/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-surface/70 hover:bg-surface text-silver hover:text-white border border-white/10 hover:border-champagne/40 transition-all"
                aria-label="Adithya R. LinkedIn Profile"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://github.com/AR20031959?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-surface/70 hover:bg-surface text-silver hover:text-white border border-white/10 hover:border-champagne/40 transition-all"
                aria-label="Adithya R. GitHub Repositories"
              >
                <Github size={16} />
              </a>
              <a
                href="mailto:adithyaramadoss@gmail.com?subject=Portfolio%20Enquiry%20-%20Adithya%20R."
                className="p-2.5 rounded-lg bg-surface/70 hover:bg-surface text-silver hover:text-white border border-white/10 hover:border-champagne/40 transition-all"
                aria-label="Send email to adithyaramadoss@gmail.com"
              >
                <Mail size={16} />
              </a>
              <span className="text-[11px] font-mono text-silver/60 pl-2">
                adithyaramadoss@gmail.com
              </span>
            </div>

            {/* Sync Pill with Supabase / IndexedDB status */}
            <div className="flex items-center gap-2.5">
              <SyncPill state={syncState} />
              {lastSync && (
                <span className="hidden sm:inline-block text-[10px] font-mono text-silver/50">
                  {new Date(lastSync).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              )}
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: Precision Engineered Orbital Telemetry */}
        <motion.div
          className="lg:col-span-5 relative flex items-center justify-center py-6"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative w-[340px] sm:w-[420px] h-[340px] sm:h-[420px] flex items-center justify-center">
            {/* Outer Orbital Ring */}
            <div className="absolute inset-0 rounded-full border border-white/[0.08] animate-[spin_80s_linear_infinite]" />
            {/* Middle Dashed Telemetry Ring */}
            <div className="absolute inset-8 rounded-full border border-dashed border-champagne/25 animate-[spin_50s_linear_infinite_reverse]" />
            {/* Inner Ring */}
            <div className="absolute inset-20 rounded-full border border-white/[0.12]" />

            {/* Center Core Monogram */}
            <div className="relative z-10 w-28 h-28 rounded-full bg-gradient-to-br from-panel via-charcoal to-matte border border-champagne/40 flex flex-col items-center justify-center shadow-[0_0_50px_rgba(198,174,130,0.15)] group">
              <span className="font-display font-black text-3xl tracking-tight text-white group-hover:text-champagne-light transition-colors">
                AR
              </span>
              <span className="text-[8px] font-mono tracking-widest text-champagne uppercase">
                STRATEGY
              </span>
              <div className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-matte shadow-[0_0_10px_#34d399]" />
            </div>

            {/* Orbiting Telemetry Indicator Nodes */}
            <motion.div
              className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1.5 rounded-md bg-surface/90 border border-white/15 text-[10px] font-mono tracking-wider text-silver-light shadow-xl backdrop-blur-md"
              whileHover={{ scale: 1.05 }}
            >
              <TrendingUp size={13} className="text-champagne" />
              <span>FINANCIAL MODELING</span>
            </motion.div>

            <motion.div
              className="absolute top-1/2 -right-4 -translate-y-1/2 flex items-center gap-2 px-3 py-1.5 rounded-md bg-surface/90 border border-white/15 text-[10px] font-mono tracking-wider text-silver-light shadow-xl backdrop-blur-md"
              whileHover={{ scale: 1.05 }}
            >
              <Brain size={13} className="text-techblue" />
              <span>BEHAVIORAL INSIGHTS</span>
            </motion.div>

            <motion.div
              className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1.5 rounded-md bg-surface/90 border border-white/15 text-[10px] font-mono tracking-wider text-silver-light shadow-xl backdrop-blur-md"
              whileHover={{ scale: 1.05 }}
            >
              <Code2 size={13} className="text-emerald-400" />
              <span>DATA SCIENCE & ML</span>
            </motion.div>

            <motion.div
              className="absolute top-1/2 -left-4 -translate-y-1/2 flex items-center gap-2 px-3 py-1.5 rounded-md bg-surface/90 border border-white/15 text-[10px] font-mono tracking-wider text-silver-light shadow-xl backdrop-blur-md"
              whileHover={{ scale: 1.05 }}
            >
              <Workflow size={13} className="text-purple-400" />
              <span>BI & AUTOMATION</span>
            </motion.div>

            {/* Geographic Coordinates Stamp */}
            <div className="absolute bottom-3 right-3 text-right font-mono text-[9px] text-silver/40 leading-tight">
              13°04&apos; N · 80°16&apos; E
              <br />
              CHENNAI, INDIA
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#about"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-silver/60 hover:text-champagne transition-colors"
        aria-label="Scroll to About section"
      >
        <span className="text-[9px] font-mono tracking-widest uppercase">Scroll</span>
        <ChevronDown size={14} className="animate-bounce" />
      </a>
    </section>
  );
}
