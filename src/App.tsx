import { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { TopNavBar } from './components/TopNavBar';
import { Hero } from './components/Hero';
import { ProjectsShowcase } from './components/ProjectsShowcase';
import { AboutSection } from './components/AboutSection';
import { ProcessSection } from './components/ProcessSection';

import { ToolkitSection } from './components/ToolkitSection';



import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CaseStudyModal } from './components/CaseStudyModal';
import { ParticleNetwork } from './components/ParticleNetwork';
import { LoadingScreen } from './components/LoadingScreen';
import { CaseStudy } from './types';
import { ArrowLeft } from 'lucide-react';


export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [currentView, setCurrentView] = useState<'home' | 'all-projects'>('home');

  useEffect(() => {

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) return;

    const lenis = new Lenis({ lerp: 0.08, smoothWheel: true });
    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const revealTargets = document.querySelectorAll<HTMLElement>('[data-reveal]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );

    revealTargets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  // Track active section on scroll
  useEffect(() => {
    const sections = ['hero', 'work', 'about', 'process', 'contact'];



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

  const scrollToSection = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#121221] text-[#e3e0f7] antialiased selection:bg-[#7c3aed] selection:text-[#ede0ff] relative overflow-x-hidden min-h-screen">
      <LoadingScreen />
      {/* Dynamic Animated Particle Constellation Canvas */}
      <ParticleNetwork />

      {/* Subtle Background Grid Texture */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.035] bg-[radial-gradient(#d2bbff_1px,transparent_1px)] [background-size:28px_28px]" />
      <div className="noise-overlay fixed inset-[-10%] pointer-events-none z-[1] opacity-[0.035]" />

      {/* Floating Top Navigation */}
      {currentView === 'home' && (
        <TopNavBar activeSection={activeSection} onNavigate={scrollToSection} />
      )}

      {currentView === 'home' ? (
        <>
          {/* Main Content Sections */}
          <main className="relative z-10">
            <Hero
              onExploreWork={() => scrollToSection('work')}
              onContact={() => scrollToSection('contact')}
            />

            <ToolkitSection />

            <ProjectsShowcase limit={6} onViewAll={() => { setCurrentView('all-projects'); window.scrollTo(0,0); }} />

            <AboutSection />

            <ProcessSection />

            <ContactSection />

          </main>

          {/* Footer */}
          <Footer onNavigate={scrollToSection} />
        </>
      ) : (
        <main className="relative z-10 min-h-screen flex flex-col pt-12">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 mb-[-40px] relative z-20">
            <button
              onClick={() => { setCurrentView('home'); window.scrollTo(0,0); }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-[#ccc3d8] transition-all hover:bg-white/10 hover:text-white backdrop-blur-md"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Home</span>
            </button>
          </div>
          
          <ProjectsShowcase title="All Projects" />
          
          <div className="mt-auto">
            <Footer onNavigate={(id) => {
              setCurrentView('home');
              setTimeout(() => scrollToSection(id), 100);
            }} />
          </div>
        </main>
      )}

      {/* Case Study Deep-Dive Slide-Over Modal */}
      <CaseStudyModal

        study={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
      />
    </div>
  );
}
