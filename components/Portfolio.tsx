'use client';

import { useState, useEffect } from 'react';
import { usePortfolioData } from '@/lib/usePortfolioData';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Experience from './Experience';
import Contact from './Contact';
import Footer from './Footer';

export default function Portfolio() {
  const { projects, metrics, syncState, lastSync } = usePortfolioData();
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-matte text-white relative selection:bg-champagne/30 selection:text-white">
      {/* Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Hero Section */}
      <Hero syncState={syncState} lastSync={lastSync} />

      {/* About Section */}
      <About />

      {/* Skills & Telemetry Dashboard */}
      <Skills metrics={metrics} />

      {/* Selected Applied Projects */}
      <Projects projects={projects} />

      {/* Track Record & Education */}
      <Experience />

      {/* Direct Contact & Networking */}
      <Contact />

      {/* Executive Footer */}
      <Footer />
    </main>
  );
}
