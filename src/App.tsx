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
import { CaseStudyPage } from './components/CaseStudyPage';
import { ServicePage } from './components/ServicePage';
import { ParticleNetwork } from './components/ParticleNetwork';
import { LoadingScreen } from './components/LoadingScreen';
import { type Project } from './data/projects';
import { ArrowLeft } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [currentView, setCurrentView] = useState<'home' | 'all-projects' | 'case-study' | 'service-page'>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedService, setSelectedService] = useState<'ux-research' | 'ui-design' | 'product-design' | null>(null);

  // Handle Browser History (Back/Forward buttons)
  useEffect(() => {
    // Set initial state if none exists
    if (!window.history.state) {
      window.history.replaceState({ view: 'home', payload: null }, '', window.location.pathname);
    }

    const handlePopState = (e: PopStateEvent) => {
      const state = e.state;
      if (state) {
        setCurrentView(state.view);
        if (state.view === 'case-study') setSelectedProject(state.payload);
        else if (state.view === 'service-page') setSelectedService(state.payload);
        else {
          setSelectedProject(null);
          setSelectedService(null);
        }
      } else {
        // Fallback to home if no state
        setCurrentView('home');
        setSelectedProject(null);
        setSelectedService(null);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (view: 'home' | 'all-projects' | 'case-study' | 'service-page', payload?: any) => {
    setCurrentView(view);
    if (view === 'case-study') setSelectedProject(payload);
    else if (view === 'service-page') setSelectedService(payload);
    else {
      setSelectedProject(null);
      setSelectedService(null);
    }
    window.scrollTo(0, 0);

    // Update history
    const state = { view, payload };
    let url = window.location.pathname;
    if (view !== 'home') {
      const id = payload?.id ? payload.id : (typeof payload === 'string' ? payload : '');
      url = `?view=${view}${id ? `&id=${id}` : ''}`;
    }
    window.history.pushState(state, '', url);
  };

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) return;

    const lenis = new Lenis({ lerp: 0.12, smoothWheel: true });
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
              onServiceClick={(id) => navigateTo('service-page', id)}
            />

            <ToolkitSection />

            <ProjectsShowcase 
              limit={6} 
              onViewAll={() => navigateTo('all-projects')} 
              onCaseStudy={(project) => navigateTo('case-study', project)} 
            />

            <AboutSection />

            <ProcessSection />

            <ContactSection />

          </main>

          {/* Footer */}
          <Footer onNavigate={scrollToSection} />
        </>
      ) : currentView === 'case-study' && selectedProject ? (
        <main className="relative z-10 min-h-screen flex flex-col">
          <CaseStudyPage
            project={selectedProject}
            onBack={() => navigateTo('home')}
          />
          <div className="mt-auto">
            <Footer onNavigate={(id) => {
              navigateTo('home');
              setTimeout(() => scrollToSection(id), 100);
            }} />
          </div>
        </main>
      ) : currentView === 'service-page' && selectedService ? (
        <main className="relative z-10 min-h-screen flex flex-col">
          <ServicePage
            serviceId={selectedService}
            onBack={() => navigateTo('home')}
            onNavigateToService={(id) => navigateTo('service-page', id)}
          />
          <div className="mt-auto">
            <Footer onNavigate={(id) => {
              navigateTo('home');
              setTimeout(() => scrollToSection(id), 100);
            }} />
          </div>
        </main>
      ) : (
        <main className="relative z-10 min-h-screen flex flex-col pt-12">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 mb-[-40px] relative z-20">
            <button
              onClick={() => navigateTo('home')}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-[#ccc3d8] transition-all hover:bg-white/10 hover:text-white backdrop-blur-md"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Home</span>
            </button>
          </div>
          
          <ProjectsShowcase 
            title="All Projects" 
            onCaseStudy={(project) => navigateTo('case-study', project)} 
          />
          
          <div className="mt-auto">
            <Footer onNavigate={(id) => {
              navigateTo('home');
              setTimeout(() => scrollToSection(id), 100);
            }} />
          </div>
        </main>
      )}

    </div>
  );
}
