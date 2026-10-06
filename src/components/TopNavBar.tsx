import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { AnimatePresence, motion, useScroll, useSpring } from 'motion/react';

interface TopNavBarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const TopNavBar: React.FC<TopNavBarProps> = ({ activeSection, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll Progress Bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 64);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'work', label: 'Work' },
    { id: 'about', label: 'About' },
    { id: 'process', label: 'Process' },
  ];

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <>
      {/* Top Neon Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#7c3aed] via-[#d2bbff] to-[#ffb0cd] origin-left z-[60] shadow-[0_0_12px_rgba(124,58,237,0.8)]"
        style={{ scaleX }}
      />

      <motion.header
        id="main-nav"
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 25 }}
        className={`fixed left-1/2 top-4 z-50 -translate-x-1/2 transition-[width] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${scrolled ? 'w-[min(92%,780px)]' : 'w-[min(94%,920px)]'
          }`}
      >
        <nav
          aria-label="Global Navigation"
          className={`flex w-full items-center justify-between rounded-full border transition-[padding,background-color,box-shadow,border-color,backdrop-filter] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${scrolled
              ? 'border-white/15 bg-[#08132c]/72 px-3 py-2 shadow-[0_16px_45px_rgba(0,0,0,0.35)] backdrop-blur-2xl'
              : 'border-transparent bg-transparent px-4 py-2.5 shadow-none backdrop-blur-0'
            }`}
        >
          {/* Brand Logo / Monogram with subtle 3D spin on hover */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleLinkClick('hero')}
            className="text-lg font-bold text-[#e3e0f7] tracking-tight flex items-center gap-2.5 group cursor-pointer focus:outline-none"
          >
            <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-tr from-[#7c3aed] to-[#3626ce] text-sm font-bold text-white shadow-[0_0_12px_rgba(124,58,237,0.6)] transition-all duration-300 group-hover:shadow-[0_0_18px_rgba(210,187,255,0.8)]">
              S
            </span>
            <span className="font-semibold text-[0.95rem] sm:text-base">Shourov</span>
          </motion.button>

          {/* Desktop Navigation Links */}
          <div className="relative hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`relative rounded-full px-3.5 py-1.5 text-[0.85rem] font-medium transition-colors duration-200 focus:outline-none cursor-pointer ${isActive ? 'text-[#e3e0f7] font-semibold' : 'text-[#958da1] hover:text-[#e3e0f7]'
                    }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-1 left-3 right-3 h-0.5 rounded-full bg-[#d2bbff] shadow-[0_0_10px_#d2bbff]"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Trailing Actions */}
          <div className="flex items-center gap-2">
            <motion.button
              whileHover={{ scale: 1.04, filter: 'brightness(1.1)' }}
              whileTap={{ scale: 0.96 }}
              onClick={() => handleLinkClick('contact')}
              className="ml-2 hidden items-center gap-1.5 rounded-full bg-[#7c3aed] px-4 py-2 text-xs font-semibold text-white shadow-[0_0_15px_rgba(124,58,237,0.4)] transition-all duration-200 hover:shadow-[0_0_22px_rgba(168,85,247,0.6)] sm:inline-flex"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </motion.button>

            {/* Mobile contact icon */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => handleLinkClick('contact')}
              className="sm:hidden w-8 h-8 rounded-full bg-[#7c3aed] text-white flex items-center justify-center shadow-[0_0_10px_rgba(124,58,237,0.5)] cursor-pointer"
              aria-label="Contact"
            >
              <ArrowRight className="w-4 h-4" />
            </motion.button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 rounded-full text-[#ccc3d8] hover:text-white focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Drawer with smooth animation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden px-6 pt-2 pb-6 border-t border-white/10 rounded-b-3xl bg-[#121221]/95 backdrop-blur-2xl flex flex-col gap-3"
            >
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{ delay: index * 0.04 }}
                  onClick={() => handleLinkClick(link.id)}
                  className={`text-left py-2 px-3 rounded-xl text-sm font-medium transition-all ${activeSection === link.id
                      ? 'bg-[#7c3aed]/20 text-[#d2bbff] font-semibold border border-[#7c3aed]/30'
                      : 'text-[#ccc3d8] hover:bg-white/5'
                    }`}
                >
                  {link.label}
                </motion.button>
              ))}
              <button
                onClick={() => handleLinkClick('contact')}
                className="w-full mt-2 py-2.5 rounded-xl bg-gradient-to-r from-[#7c3aed] to-[#3626ce] text-white text-center text-sm font-semibold flex items-center justify-center gap-2"
              >
                <ArrowRight className="w-4 h-4" />
                <span>Get in Touch</span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};
