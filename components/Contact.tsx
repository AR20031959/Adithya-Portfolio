'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Linkedin,
  Github,
  Copy,
  Check,
  ArrowUpRight,
  FileText,
  MapPin,
  MessageSquare
} from 'lucide-react';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = 'adithyaramadoss@gmail.com';
  const emailMailto = `mailto:${email}?subject=Portfolio%20Enquiry%20-%20Adithya%20R.`;

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  const contactChannels = [
    {
      title: 'Direct Email',
      value: email,
      label: 'Send Email Message',
      href: emailMailto,
      isExternal: false,
      icon: <Mail className="text-champagne" size={22} />,
      badge: 'Preferred Channel'
    },
    {
      title: 'LinkedIn Network',
      value: 'linkedin.com/in/adithya-r-wc',
      label: 'Open LinkedIn Profile',
      href: 'https://www.linkedin.com/in/adithya-r-wc/',
      isExternal: true,
      icon: <Linkedin className="text-techblue" size={22} />,
      badge: 'Professional Network'
    },
    {
      title: 'GitHub Repositories',
      value: 'github.com/AR20031959',
      label: 'View GitHub Code',
      href: 'https://github.com/AR20031959?tab=repositories',
      isExternal: true,
      icon: <Github className="text-emerald-400" size={22} />,
      badge: 'Open Source Code'
    }
  ];

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-charcoal border-t border-white/[0.06] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-champagne/[0.04] rounded-full filter blur-[140px] pointer-events-none" />

      <div className="section-wrap relative z-10 max-w-4xl mx-auto text-center">
        {/* Section Header */}
        <div className="inline-flex items-center gap-2 font-mono text-xs tracking-widest text-champagne uppercase mb-4">
          <span className="w-6 h-[1px] bg-champagne" />
          <span>05 / INITIATE CONTACT</span>
          <span className="w-6 h-[1px] bg-champagne" />
        </div>

        <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white mb-6">
          Good Work Starts With a<br />
          <span className="gradient-champagne">Meaningful Conversation.</span>
        </h2>

        <p className="text-silver text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-12">
          Interested in financial analytics, predictive modeling, automation pipelines, or an opportunity at the intersection of business and human behavior? I look forward to connecting.
        </p>

        {/* Primary Interactive Direct Actions */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <a
            href={emailMailto}
            className="btn-primary text-sm px-7 py-4"
            aria-label="Send email to Adithya R."
          >
            <Mail size={18} />
            <span>Send Direct Email</span>
            <ArrowUpRight size={16} />
          </a>

          <button
            onClick={handleCopyEmail}
            className="btn-secondary text-sm px-6 py-4 flex items-center gap-2.5"
            aria-label="Copy email address to clipboard"
          >
            {copied ? (
              <>
                <Check size={16} className="text-emerald-400" />
                <span className="text-emerald-300 font-medium">Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <Copy size={16} className="text-silver" />
                <span>Copy Email Address</span>
              </>
            )}
          </button>
        </div>

        {/* Channel Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-left mb-16">
          {contactChannels.map((ch, idx) => (
            <motion.a
              key={ch.title}
              href={ch.href}
              target={ch.isExternal ? '_blank' : undefined}
              rel={ch.isExternal ? 'noopener noreferrer' : undefined}
              className="p-6 rounded-2xl bg-surface/70 border border-white/[0.08] hover:border-champagne/40 transition-all flex flex-col justify-between group hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              aria-label={ch.label}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-charcoal border border-white/10 group-hover:border-champagne/40 transition-colors">
                    {ch.icon}
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="text-silver/50 group-hover:text-champagne transition-colors"
                  />
                </div>
                <span className="text-[10px] font-mono tracking-wider text-champagne block mb-1">
                  {ch.badge}
                </span>
                <h3 className="font-display font-bold text-base text-white group-hover:text-champagne-light transition-colors">
                  {ch.title}
                </h3>
              </div>
              <div className="mt-4 pt-3 border-t border-white/[0.06] text-xs font-mono text-silver/80 group-hover:text-white truncate">
                {ch.value}
              </div>
            </motion.a>
          ))}
        </div>

        {/* Location & Response Expectation */}
        <div className="inline-flex flex-wrap items-center justify-center gap-6 text-xs text-silver/60 pt-6 border-t border-white/[0.08]">
          <span className="flex items-center gap-1.5">
            <MapPin size={13} className="text-champagne" />
            <span>Based in Chennai, India</span>
          </span>
          <span>·</span>
          <span className="flex items-center gap-1.5">
            <MessageSquare size={13} className="text-emerald-400" />
            <span>Typical response within 24 hours</span>
          </span>
        </div>
      </div>
    </section>
  );
}
