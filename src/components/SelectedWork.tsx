import React, { useState } from 'react';
import { ExternalLink, Sparkles, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { caseStudies } from '../data/portfolioData';
import { CaseStudy } from '../types';
import { TiltCard } from './TiltCard';
import { AnimatedCounter } from './AnimatedCounter';

interface SelectedWorkProps {
  onSelectCaseStudy: (study: CaseStudy) => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({ onSelectCaseStudy }) => {
  const [filter, setFilter] = useState<'all' | 'FinTech' | 'Enterprise' | 'AI / Health' | 'SaaS'>('all');

  const filteredStudies = caseStudies.filter((study) => {
    if (filter === 'all') return true;
    return study.category === filter;
  });

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'FinTech', label: 'FinTech' },
    { id: 'Enterprise', label: 'Enterprise Systems' },
    { id: 'AI / Health', label: 'AI & Health' },
    { id: 'SaaS', label: 'SaaS Platform' },
  ];

  return (
    <section id="work" aria-label="Selected Work" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1e1b4b]/60 border border-[#7c3aed]/40 text-[#d2bbff] text-xs font-semibold uppercase tracking-wider mb-3"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#ffb0cd]" />
              <span>Proven Impact</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#e3e0f7] tracking-tight"
            >
              Selected Work
            </motion.h2>
          </div>

          {/* Filter Chips with Animated Active Pill */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const isActive = filter === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setFilter(cat.id as any)}
                  className={`relative px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer focus:outline-none ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-[#ccc3d8] bg-white/5 hover:bg-white/10 hover:text-white border border-white/5'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeFilterPill"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-[#7c3aed] to-[#3626ce] shadow-[0_0_15px_rgba(124,58,237,0.5)]"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Bento Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredStudies.map((study, index) => {
              const isFeature = study.featured;
              const colSpan = isFeature ? 'md:col-span-12 lg:col-span-7' : 'md:col-span-12 lg:col-span-5';

              return (
                <motion.div
                  layout
                  key={study.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={colSpan}
                >
                  <TiltCard
                    maxTilt={5}
                    onClick={() => onSelectCaseStudy(study)}
                    className="h-full rounded-2xl bg-[#121221]/80 backdrop-blur-xl border border-[#4a4455]/40 hover:border-[#7c3aed]/70 transition-all duration-300 group cursor-pointer flex flex-col justify-between"
                  >
                    {/* Image Preview Container */}
                    <div className="relative aspect-video sm:aspect-[16/10] overflow-hidden rounded-t-2xl bg-[#18182b]">
                      <img
                        src={study.thumbnail}
                        alt={study.title}
                        className="w-full h-full object-cover object-top filter contrast-105 group-hover:scale-105 transition-transform duration-700 ease-out"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#121221] via-[#121221]/30 to-transparent" />

                      {/* Top Badges */}
                      <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#121221]/80 backdrop-blur-md text-[#d2bbff] border border-white/10">
                          {study.category}
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#121221]/80 backdrop-blur-md text-[#958da1] border border-white/10">
                          {study.year}
                        </span>
                      </div>

                      {/* Primary Impact Metric Pill with Live Animated Counter */}
                      <div className="absolute bottom-4 left-4 z-10">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#1e1b4b]/90 border border-[#7c3aed]/50 text-white shadow-[0_4px_16px_rgba(0,0,0,0.4)] backdrop-blur-md">
                          <span className="text-xs font-medium text-[#ccc3d8]">{study.metrics[0].label}:</span>
                          <span className="text-sm font-bold text-[#d2bbff] font-mono">
                            <AnimatedCounter value={study.metrics[0].value} />
                          </span>
                        </div>
                      </div>

                      {/* Floating Expand Icon Circle */}
                      <div className="absolute bottom-4 right-4 z-10 w-10 h-10 rounded-full bg-[#7c3aed] text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-[0_0_20px_rgba(124,58,237,0.7)]">
                        <ArrowUpRight className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-[#e3e0f7] group-hover:text-[#d2bbff] transition-colors mb-2 flex items-center justify-between">
                          <span>{study.title}</span>
                        </h3>
                        <p className="text-sm text-[#ccc3d8] line-clamp-2 leading-relaxed mb-6 font-normal">
                          {study.subtitle}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5">
                          {study.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-white/5 text-[#ccc3d8] border border-white/5"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Case study CTA link */}
                        <span className="text-xs font-semibold text-[#d2bbff] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                          <span>Read Case Study</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
