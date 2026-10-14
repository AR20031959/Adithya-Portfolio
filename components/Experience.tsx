'use client';

import { motion } from 'framer-motion';
import {
  Briefcase,
  GraduationCap,
  Award,
  Calendar,
  MapPin,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: 'Marketing Automation & CRM Intern',
      type: 'INTERNSHIP',
      company: 'The100x Digital',
      location: 'Chennai, India',
      period: 'JUN 2026 — JUL 2026',
      description:
        'Engineered enterprise automation pipelines and CRM workflows, connecting digital marketing lead funnels with sales outreach and qualification pipelines.',
      skills: ['CRM Workflows', 'Automation Pipelines', 'Lead Routing', 'Conversion Analytics']
    },
    {
      role: 'Psychology Empirical Research Study',
      type: 'ACADEMIC RESEARCH',
      company: 'Hindustan College of Arts and Science',
      location: 'Chennai, India',
      period: 'JUN 2024 — AUG 2024',
      description:
        'Administered an empirical survey study measuring psychological distress across 110 participants. Conducted statistical data analysis and created presentation decks communicating behavioral conclusions.',
      skills: ['110 Respondents', 'Survey Methodology', 'Statistical Analysis', 'Data Visualization']
    }
  ];

  const education = [
    {
      degree: 'Master of Business Administration (MBA)',
      specialization: 'Finance & Business Analytics',
      institution: 'St. Joseph’s College of Engineering',
      location: 'Chennai, India',
      period: '2025 — 2027',
      status: 'Current Program',
      details:
        'Advanced study in financial modeling, equity and portfolio analysis, business intelligence, data governance, and strategic corporate decision-making.'
    },
    {
      degree: 'Bachelor of Science (B.Sc.)',
      specialization: 'Psychology',
      institution: 'Hindustan College of Arts and Science',
      location: 'Chennai, India',
      period: '2023 — 2025',
      status: 'Graduated',
      details:
        'Comprehensive foundations in human cognitive processes, experimental research design, behavioural statistics, and psychometric measurement.'
    }
  ];

  return (
    <section id="experience" className="relative py-24 sm:py-32 bg-matte">
      {/* Background illumination */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-champagne/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="section-wrap relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs tracking-widest text-champagne uppercase mb-3">
            <span className="w-6 h-[1px] bg-champagne" />
            <span>04 / TRACK RECORD &amp; ACADEMICS</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl tracking-tight text-white">
            Built Through Doing.<br />
            <span className="gradient-champagne">Grounded in Rigor.</span>
          </h2>
        </div>

        {/* Two-Column Grid: Left Experience, Right Education */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14">
          {/* Left Column: Hands-on Experience Timeline */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="flex items-center gap-2.5 mb-8">
              <div className="p-2 rounded-lg bg-surface border border-white/10 text-champagne">
                <Briefcase size={18} />
              </div>
              <h3 className="font-display font-bold text-xl text-white">
                Practical Experience
              </h3>
            </div>

            <div className="space-y-6 relative border-l border-white/10 pl-6 ml-4">
              {experiences.map((exp, idx) => (
                <motion.div
                  key={idx}
                  className="relative group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                >
                  {/* Timeline Node Dot */}
                  <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-matte border-2 border-champagne group-hover:bg-champagne transition-colors" />

                  <div className="p-6 rounded-2xl bg-charcoal/70 border border-white/[0.08] hover:border-champagne/30 transition-all">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="font-mono text-[10px] tracking-wider px-2 py-0.5 rounded bg-white/[0.05] border border-white/10 text-champagne">
                        {exp.period}
                      </span>
                      <span className="font-mono text-[10px] text-silver/60">
                        {exp.type}
                      </span>
                    </div>

                    <h4 className="font-display font-bold text-lg text-white">
                      {exp.role}
                    </h4>

                    <div className="text-xs text-silver font-medium mt-1 mb-3 flex items-center gap-2">
                      <span className="text-white">{exp.company}</span>
                      <span>·</span>
                      <span className="text-silver/70 flex items-center gap-1">
                        <MapPin size={11} /> {exp.location}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-silver/80 leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {exp.skills.map((s) => (
                        <span
                          key={s}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface text-silver-light border border-white/[0.06]"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Academic Credentials & Certifications */}
          <div id="education" className="lg:col-span-6 flex flex-col">
            <div className="flex items-center gap-2.5 mb-8">
              <div className="p-2 rounded-lg bg-surface border border-white/10 text-techblue">
                <GraduationCap size={18} />
              </div>
              <h3 className="font-display font-bold text-xl text-white">
                Education &amp; Credentials
              </h3>
            </div>

            <div className="space-y-6">
              {/* NISM Credential Spotlight Card */}
              <motion.div
                className="p-6 rounded-2xl bg-gradient-to-r from-surface/90 via-panel/80 to-charcoal border border-champagne/35 shadow-[0_10px_30px_rgba(198,174,130,0.08)]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-champagne/10 border border-champagne/30 text-champagne shrink-0">
                      <Award size={22} />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-champagne block">
                        Professional Certification
                      </span>
                      <h4 className="font-display font-bold text-lg text-white">
                        NISM Series V-A Certification
                      </h4>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-champagne/20 text-champagne-light border border-champagne/40 shrink-0">
                    VALID TO JUL 2029
                  </span>
                </div>
                <p className="text-xs text-silver/90 leading-relaxed mb-3">
                  Mutual Fund Distributors Certification issued by the National Institute of Securities Markets (NISM), affirming regulatory proficiency in investment instruments and fund mechanics.
                </p>
                <div className="text-[11px] font-mono text-champagne-light flex items-center gap-1.5">
                  <ShieldCheck size={14} className="text-emerald-400" />
                  <span>Verified Industry Credential</span>
                </div>
              </motion.div>

              {/* Degrees Cards */}
              {education.map((edu, idx) => (
                <motion.div
                  key={idx}
                  className="p-6 rounded-2xl bg-charcoal/70 border border-white/[0.08] hover:border-white/[0.18] transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ delay: 0.1 * (idx + 1), duration: 0.5 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.05] border border-white/10 text-silver">
                      {edu.period}
                    </span>
                    <span className="text-[10px] font-mono text-champagne">
                      {edu.status}
                    </span>
                  </div>

                  <h4 className="font-display font-bold text-lg text-white">
                    {edu.degree}
                  </h4>
                  <div className="text-xs font-semibold text-champagne-light mt-0.5 mb-1">
                    {edu.specialization}
                  </div>
                  <div className="text-xs text-silver/80 flex items-center gap-1 mb-3">
                    <MapPin size={11} /> {edu.institution} · {edu.location}
                  </div>

                  <p className="text-xs text-silver/80 leading-relaxed">
                    {edu.details}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
