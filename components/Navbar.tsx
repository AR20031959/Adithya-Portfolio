'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Mail } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = totalScroll > 0 ? (window.scrollY / totalScroll) * 100 : 0;
      setScrollProgress(currentProgress);
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Scroll progress bar */}
      <div className="fixed top-0 left-0 right-0 h-[2px] z-50 bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-champagne via-champagne-light to-techblue transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-matte/85 backdrop-blur-xl border-b border-white/[0.07] py-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
            : 'bg-transparent py-5 border-b border-transparent'
        }`}
      >
        <div className="section-wrap flex items-center justify-between">
          {/* Brand Wordmark */}
          <a
            href="#home"
            className="group flex items-center gap-2.5 focus:outline-none"
            aria-label="Adithya R. Portfolio Home"
          >
            <span className="font-display font-extrabold text-xl sm:text-2xl tracking-tighter text-silver-light group-hover:text-white transition-colors">
              ADITHYA<span className="text-champagne">.</span>R
            </span>
            <span className="hidden md:inline-block text-[10px] font-mono tracking-widest text-silver/60 uppercase border-l border-white/10 pl-2.5 py-0.5">
              MBA · Finance & Analytics
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 px-3 py-1.5 rounded-full bg-surface/50 border border-white/[0.06] backdrop-blur-md">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`relative px-3.5 py-1.5 text-[12px] font-medium tracking-wide rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-silver hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-white/[0.08] border border-champagne/30 rounded-full"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Right Header Actions */}
          <div className="flex items-center gap-3">
            <a
              href="mailto:adithyaramadoss@gmail.com?subject=Portfolio%20Enquiry%20-%20Adithya%20R."
              className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.09] text-silver-light border border-white/10 hover:border-champagne/40 transition-all duration-200"
              aria-label="Email Adithya R."
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
              <Mail size={13} className="text-champagne" />
              <span>Get in touch</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 rounded-lg text-silver hover:text-white bg-surface/70 border border-white/10 hover:border-champagne/30 transition-colors"
              aria-label={menuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[62px] z-30 lg:hidden bg-charcoal/95 backdrop-blur-2xl border-b border-white/10 shadow-2xl p-6"
          >
            <div className="section-wrap flex flex-col gap-2">
              {navItems.map((item, idx) => {
                const isActive = activeSection === item.href.replace('#', '');
                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.03 }}
                    className={`flex items-center justify-between py-2.5 px-3 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-champagne bg-champagne/10 border-l-2 border-champagne'
                        : 'text-silver hover:text-white hover:bg-white/[0.04]'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight size={14} className="opacity-40" />
                  </motion.a>
                );
              })}
              <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-2.5">
                <a
                  href="mailto:adithyaramadoss@gmail.com?subject=Portfolio%20Enquiry%20-%20Adithya%20R."
                  onClick={() => setMenuOpen(false)}
                  className="btn-primary w-full text-center text-xs py-3"
                >
                  <Mail size={14} /> Send an Email
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
