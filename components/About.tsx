'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  GraduationCap,
  Award,
  Brain,
  TrendingUp,
  Database,
  Layers,
  MapPin,
  CheckCircle2,
  LineChart,
  Code2,
  ShieldCheck
} from 'lucide-react';

export default function About() {
  const pillars = [
    {
      icon: <TrendingUp className="text-champagne" size={20} />,
      title: 'Finance & Valuation',
      desc: 'Financial statement analysis, mutual funds, capital market structures, and investment dynamics grounded in NISM principles.'
    },
    {
      icon: <Brain className="text-techblue" size={20} />,
      title: 'Behavioral Psychology',
      desc: 'Examining cognitive biases, risk perceptions, and human motivation behind financial and commercial decisions.'
    },
    {
      icon: <Database className="text-emerald-400" size={20} />,
      title: 'Data Science & BI',
      desc: 'Transforming raw transactional datasets into predictive models and actionable Power BI executive dashboards.'
    },
    {
      icon: <Layers className="text-purple-400" size={20} />,
      title: 'Workflow Automation',
      desc: 'Designing end-to-end CRM pipelines and automated lead routing systems to eliminate operational friction.'
    }
  ];

  const certifications = [
    {
      id: 'nism',
      title: 'NISM-Series-V-A: Mutual Fund Distributors Certification',
      issuer: 'National Institute of Securities Markets (NISM)',
      period: 'Valid through July 2029',
      category: 'FINANCE · CAPITAL MARKETS',
      icon: <Award className="text-champagne" size={20} />,
      badgeClass: 'text-champagne-light bg-champagne/10 border-champagne/30',
      iconBg: 'bg-champagne/10 border-champagne/20',
      description: 'Comprehensive regulatory certification covering mutual fund structures, asset allocation, portfolio dynamics, and investor risk profiling.'
    },
    {
      id: 'data-analytics',
      title: 'Data Analytics Certification',
      issuer: 'ExcelR Solutions',
      period: '2023 — 2024',
      category: 'BUSINESS INTELLIGENCE · ANALYTICS',
      icon: <LineChart className="text-techblue" size={20} />,
      badgeClass: 'text-techblue bg-techblue/10 border-techblue/30',
      iconBg: 'bg-techblue/10 border-techblue/20',
      description: 'Applied certification in exploratory data analysis, data storytelling, KPI architectures, SQL querying, and executive visual reporting.'
    },
    {
      id: 'data-science',
      title: 'Data Science Certification',
      issuer: 'ExcelR Solutions',
      period: '2025 — 2026',
      category: 'DATA SCIENCE · MACHINE LEARNING',
      icon: <Code2 className="text-emerald-400" size={20} />,
      badgeClass: 'text-emerald-300 bg-emerald-950/40 border-emerald-500/30',
      iconBg: 'bg-emerald-950/40 border-emerald-500/20',
      description: 'Advanced curriculum covering predictive machine learning algorithms, statistical hypothesis testing, classification models, and Python ecosystems.'
    }
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32 bg-charcoal border-y border-white/[0.06]">
      {/* Subtle ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-champagne/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="section-wrap relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs tracking-widest text-champagne uppercase mb-3">
            <span className="w-6 h-[1px] bg-champagne" />
            <span>01 / THE PROFILE</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl tracking-tight text-white">
            Numbers Tell the Story.<br />
            <span className="gradient-champagne">People Give It Meaning.</span>
          </h2>
        </div>

        {/* Profile Grid: Left photo card, Right narrative and credentials */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Column: Portrait Frame */}
          <motion.div
            className="lg:col-span-5 flex flex-col items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
          >
            <div className="profile-frame-container w-full max-w-[380px]">
              <div className="profile-frame-inner aspect-[4/5] relative w-full">
                <Image
                  src="/adithya-profile.jpg"
                  alt="Adithya R. - Profile Portrait"
                  fill
                  sizes="(max-width: 768px) 100vw, 380px"
                  priority
                  className="object-cover object-top filter contrast-[1.03] transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white/90">
                  <div>
                    <h3 className="font-display font-bold text-lg text-white">Adithya R.</h3>
                    <p className="text-[11px] font-mono text-champagne-light flex items-center gap-1.5 mt-0.5">
                      <MapPin size={11} /> Chennai, India
                    </p>
                  </div>
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-black/60 border border-white/20 text-silver-light">
                    MBA &apos;27
                  </span>
                </div>
              </div>
            </div>

            {/* Accreditations Summary Box under portrait */}
            <div className="w-full max-w-[380px] mt-6 p-4 rounded-xl bg-surface/70 border border-white/[0.08] backdrop-blur-md">
              <div className="flex items-center justify-between gap-3 text-xs text-silver-light mb-2.5">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={16} className="text-champagne shrink-0" />
                  <span className="font-semibold text-white">Professional Accreditations</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-champagne/10 text-champagne border border-champagne/20">
                  3 Credentials
                </span>
              </div>
              <div className="space-y-1.5 text-[11px] text-silver/80 font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-champagne" />
                  <span className="truncate text-silver-light">NISM Series V-A (Mutual Funds)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-techblue" />
                  <span className="truncate text-silver-light">Data Analytics (ExcelR Solutions)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span className="truncate text-silver-light">Data Science (ExcelR Solutions)</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Narrative, Education & Strategic Pillars */}
          <motion.div
            className="lg:col-span-7 flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            {/* Biography Narrative */}
            <div className="space-y-4 text-silver text-base sm:text-lg leading-relaxed font-normal mb-10">
              <p>
                My background in <span className="text-white font-medium">Psychology</span> fundamentally shapes how I approach quantitative analytics. Pure mathematics reveals what is occurring, but behavioral insight unpacks <span className="text-champagne-light font-medium">why choices are made under uncertainty, risk, and cognitive pressure</span>.
              </p>
              <p>
                Currently pursuing an <span className="text-white font-medium">MBA in Finance & Business Analytics</span> at St. Joseph’s College of Engineering, I integrate financial theory with practical data science — deploying Python, SQL, Power BI, and automation workflows to convert unstructured signals into high-confidence business strategies.
              </p>
            </div>

            {/* Education Track Record Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {/* MBA Card */}
              <div className="p-5 rounded-xl bg-surface/60 border border-white/[0.08] hover:border-champagne/30 transition-all">
                <div className="flex items-center justify-between text-champagne mb-3">
                  <GraduationCap size={20} />
                  <span className="text-[10px] font-mono tracking-wider px-2 py-0.5 rounded bg-champagne/10 border border-champagne/20">
                    2025 — 2027
                  </span>
                </div>
                <h4 className="font-display font-bold text-base text-white">MBA</h4>
                <div className="text-xs text-champagne font-medium mt-0.5">Finance & Business Analytics</div>
                <div className="text-[11px] text-silver/80 mt-2">St. Joseph’s College of Engineering, Chennai</div>
              </div>

              {/* B.Sc Psychology Card */}
              <div className="p-5 rounded-xl bg-surface/60 border border-white/[0.08] hover:border-champagne/30 transition-all">
                <div className="flex items-center justify-between text-techblue mb-3">
                  <Brain size={20} />
                  <span className="text-[10px] font-mono tracking-wider px-2 py-0.5 rounded bg-techblue/10 border border-techblue/20">
                    2023 — 2025
                  </span>
                </div>
                <h4 className="font-display font-bold text-base text-white">B.Sc. Psychology</h4>
                <div className="text-xs text-techblue font-medium mt-0.5">Cognitive Foundations & Research</div>
                <div className="text-[11px] text-silver/80 mt-2">Hindustan College of Arts and Science</div>
              </div>
            </div>

            {/* 4 Pillars Grid */}
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-silver/60 mb-4 flex items-center gap-2">
                <CheckCircle2 size={13} className="text-champagne" />
                <span>Interdisciplinary Pillars</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {pillars.map((p, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-panel/50 border border-white/[0.06] hover:border-white/[0.15] transition-all flex flex-col justify-between"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-white/[0.04] border border-white/10 shrink-0">
                        {p.icon}
                      </div>
                      <h5 className="font-display font-semibold text-sm text-white">{p.title}</h5>
                    </div>
                    <p className="text-xs text-silver/80 leading-relaxed">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Dedicated 3-Card Certifications Section in About */}
        <motion.div
          className="mt-16 pt-12 border-t border-white/[0.08]"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 font-mono text-xs tracking-widest text-champagne uppercase mb-1.5">
                <Award size={14} className="text-champagne" />
                <span>Professional Certifications</span>
              </div>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                Industry Accreditations Across Finance, Analytics &amp; Data Science
              </h3>
            </div>
            <span className="text-[11px] font-mono text-silver/60 self-start sm:self-auto">
              3 Verified Industry Certifications
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {certifications.map((cert, idx) => (
              <motion.div
                key={cert.id}
                className="p-6 rounded-2xl bg-surface/70 border border-white/[0.08] hover:border-champagne/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_16px_36px_rgba(198,174,130,0.08)]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
              >
                <div>
                  {/* Category and Period Badge */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="font-mono text-[9px] tracking-wider text-silver/70 uppercase font-semibold">
                      {cert.category}
                    </span>
                    <span
                      className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full border whitespace-nowrap ${cert.badgeClass}`}
                    >
                      {cert.period}
                    </span>
                  </div>

                  {/* Icon and Title */}
                  <div className="flex items-start gap-3.5 mb-3">
                    <div
                      className={`p-2.5 rounded-xl border shrink-0 mt-0.5 group-hover:scale-105 transition-transform ${cert.iconBg}`}
                    >
                      {cert.icon}
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-base text-white group-hover:text-champagne-light transition-colors leading-snug">
                        {cert.title}
                      </h4>
                      <p className="text-xs text-champagne font-medium mt-1">
                        Issued by: {cert.issuer}
                      </p>
                    </div>
                  </div>

                  {/* Concise Description */}
                  <p className="text-xs text-silver/80 leading-relaxed mt-3">
                    {cert.description}
                  </p>
                </div>

                {/* Footer validation indicator */}
                <div className="mt-5 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-silver/60">
                  <span className="flex items-center gap-1.5 text-silver-light">
                    <CheckCircle2 size={12} className="text-emerald-400" />
                    <span>Verified Credential</span>
                  </span>
                  <span className="text-champagne font-semibold">0{idx + 1}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
