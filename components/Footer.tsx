'use client';

import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-matte border-t border-white/[0.08] py-16">
      <div className="section-wrap">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-white/[0.06]">
          {/* Brand & Credo */}
          <div>
            <a href="#home" className="inline-block focus:outline-none">
              <span className="font-display font-extrabold text-2xl tracking-tighter text-white">
                ADITHYA<span className="text-champagne">.</span>R
              </span>
            </a>
            <p className="text-xs text-silver/70 font-mono mt-1.5 max-w-sm">
              Finance × Business Analytics × Data Science × Psychology
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/adithya-r-wc/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-surface hover:bg-white/[0.08] text-silver hover:text-white border border-white/10 hover:border-champagne/40 transition-colors"
              aria-label="Adithya R. LinkedIn Profile"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="https://github.com/AR20031959?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-surface hover:bg-white/[0.08] text-silver hover:text-white border border-white/10 hover:border-champagne/40 transition-colors"
              aria-label="Adithya R. GitHub Repositories"
            >
              <Github size={16} />
            </a>
            <a
              href="mailto:adithyaramadoss@gmail.com?subject=Portfolio%20Enquiry%20-%20Adithya%20R."
              className="p-2.5 rounded-lg bg-surface hover:bg-white/[0.08] text-silver hover:text-white border border-white/10 hover:border-champagne/40 transition-colors"
              aria-label="Send direct email to adithyaramadoss@gmail.com"
            >
              <Mail size={16} />
            </a>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-surface hover:bg-white/[0.08] text-xs font-mono text-silver hover:text-white border border-white/10 hover:border-champagne/40 transition-colors ml-2"
              aria-label="Back to top of page"
            >
              <span>TOP</span>
              <ArrowUp size={13} />
            </button>
          </div>
        </div>

        {/* Footer Navigation & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 text-xs text-silver/60">
          <nav className="flex flex-wrap items-center gap-5">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-champagne transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="font-mono text-[11px]">
            © {currentYear} ADITHYA R. · ALL RIGHTS RESERVED
          </div>
        </div>
      </div>
    </footer>
  );
}
