import React, { useState, useEffect } from 'react';
import { X, ChevronRight, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CaseStudy } from '../types';
import { AnimatedCounter } from './AnimatedCounter';

interface CaseStudyModalProps {
  study: CaseStudy | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ study, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'problem' | 'solution' | 'impact'>('overview');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (study) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [study, onClose]);

  if (!study) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop with smooth blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0c0c16]/80 backdrop-blur-xl cursor-pointer"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ type: 'spring', stiffness: 300, damping: 28 }}
          className="relative w-full max-w-4xl bg-[#121221] border border-[#4a4455]/50 rounded-3xl shadow-[0_25px_60px_-15px_rgba(124,58,237,0.5)] overflow-hidden my-auto max-h-[92vh] flex flex-col z-10"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#18182b]/60 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#7c3aed]/20 text-[#d2bbff] border border-[#7c3aed]/30">
                {study.category}
              </span>
              <span className="text-xs font-mono text-[#958da1]">Shipped {study.year}</span>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full text-[#ccc3d8] hover:text-white hover:bg-white/10 transition-colors focus:outline-none cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Content Body */}
          <div className="overflow-y-auto p-6 sm:p-8 space-y-8 flex-grow">
            {/* Title & Subtitle */}
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#e3e0f7] tracking-tight mb-2">
                {study.title}
              </h2>
              <p className="text-base sm:text-lg text-[#ccc3d8] font-normal leading-relaxed">
                {study.subtitle}
              </p>
            </div>

            {/* Hero Image Showcase with neon border */}
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-[#7c3aed]/30 shadow-[0_0_30px_rgba(124,58,237,0.25)]">
              <img
                src={study.thumbnail}
                alt={study.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121221] via-transparent to-transparent opacity-40" />
            </div>

            {/* Key Impact Stats Bar with Animated Counters */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {study.metrics.map((metric, i) => (
                <div
                  key={metric.label}
                  className="p-4 rounded-2xl bg-[#18182b]/80 border border-white/5 flex flex-col justify-center"
                >
                  <div className="text-xs text-[#958da1] uppercase tracking-wider mb-1">
                    {metric.label}
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#d2bbff] font-mono">
                    <AnimatedCounter value={metric.value} duration={1200 + i * 200} />
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Tabs */}
            <div className="flex border-b border-white/10 gap-4">
              {(['overview', 'problem', 'solution', 'impact'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-3 text-xs sm:text-sm font-semibold capitalize relative transition-colors cursor-pointer ${
                    activeTab === tab ? 'text-[#e3e0f7]' : 'text-[#958da1] hover:text-[#ccc3d8]'
                  }`}
                >
                  {tab}
                  {activeTab === tab && (
                    <motion.div
                      layoutId="modalActiveTab"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#d2bbff]"
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Tab Narrative Content */}
            <div className="text-sm sm:text-base text-[#ccc3d8] leading-relaxed">
              {activeTab === 'overview' && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-4"
                >
                  <p>{study.overview}</p>
                  <div className="pt-4">
                    <h4 className="text-xs font-semibold text-[#958da1] uppercase tracking-wider mb-3">
                      Technologies & Methods Deployed:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {study.tags.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 rounded-lg text-xs font-mono bg-white/5 border border-white/5 text-[#d2bbff]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'problem' && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-4"
                >
                  <div className="p-4 rounded-xl bg-red-950/20 border border-red-500/20 text-[#ffb0cd] text-xs uppercase font-semibold">
                    Core Architectural & User Friction
                  </div>
                  <p>{study.problem}</p>
                </motion.div>
              )}

              {activeTab === 'solution' && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-4"
                >
                  <div className="p-4 rounded-xl bg-purple-950/20 border border-[#7c3aed]/30 text-[#d2bbff] text-xs uppercase font-semibold">
                    Systemic Design Solution
                  </div>
                  <p>{study.solution}</p>
                </motion.div>
              )}

              {activeTab === 'impact' && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-4"
                >
                  <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/20 text-[#34d399] text-xs uppercase font-semibold">
                    Measurable Product Results
                  </div>
                  <p>{study.impact}</p>
                </motion.div>
              )}
            </div>
          </div>

          {/* Footer Action Bar */}
          <div className="px-6 py-4 border-t border-white/10 bg-[#18182b]/60 flex items-center justify-between">
            <button
              onClick={onClose}
              className="text-xs sm:text-sm font-semibold text-[#ccc3d8] hover:text-white flex items-center gap-1 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Portfolio</span>
            </button>
            <a
              href="mailto:ASRShourov999@gmail.com?subject=Inquiry regarding case study"
              className="px-5 py-2 rounded-full bg-[#7c3aed] hover:bg-[#6d28d9] text-white text-xs sm:text-sm font-semibold transition-all shadow-[0_0_15px_rgba(124,58,237,0.4)] flex items-center gap-2"
            >
              <span>Discuss Similar Project</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
