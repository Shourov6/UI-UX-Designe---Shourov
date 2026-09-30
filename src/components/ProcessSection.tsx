import React, { useRef, useState } from 'react';
import { GitBranch, Clock, Sparkles } from 'lucide-react';
import { motion, useScroll, useSpring } from 'motion/react';
import { processSteps } from '../data/portfolioData';
import { TiltCard } from './TiltCard';

export const ProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: timelineRef, offset: ['start 80%', 'end 45%'] });
  const timelineProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <section id="process" aria-label="Design Process" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1e1b4b]/60 border border-[#7c3aed]/40 text-[#d2bbff] text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <GitBranch className="w-3.5 h-3.5 text-[#ffb0cd]" />
            <span>Design Process</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#e3e0f7] tracking-tight mb-4"
          >
            From first idea to polished experience
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg text-[#ccc3d8]"
          >
            A practical, collaborative process for turning real user needs into clear UI/UX and CMS experiences.
          </motion.p>
        </div>

        {/* Process Step Timeline Grid */}
        <div ref={timelineRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector glowing beam for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-[2px] -translate-y-8 bg-white/10 pointer-events-none z-0" />
          <motion.div
            className="hidden lg:block absolute top-1/2 left-8 right-8 h-[2px] -translate-y-8 origin-left bg-gradient-to-r from-[#7c3aed] via-[#d2bbff] to-[#bf2076] shadow-[0_0_12px_rgba(210,187,255,0.7)] pointer-events-none z-0"
            style={{ scaleX: timelineProgress }}
          />

          {processSteps.map((step, index) => {
            const isSelected = activeStep === index;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                onMouseEnter={() => setActiveStep(index)}
              >
                <TiltCard
                  maxTilt={8}
                  className={`p-6 sm:p-7 rounded-3xl bg-[#121221]/85 backdrop-blur-xl border transition-all duration-300 h-full flex flex-col justify-between relative z-10 cursor-pointer ${
                    isSelected
                      ? 'border-[#d2bbff] shadow-[0_15px_35px_-10px_rgba(124,58,237,0.4)]'
                      : 'border-[#4a4455]/40 hover:border-[#7c3aed]/50'
                  }`}
                >
                  <div>
                    {/* Step Number Badge */}
                    <div className="flex items-center justify-between mb-6">
                      <span
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center font-mono font-bold text-base transition-all duration-300 ${
                          isSelected
                            ? 'bg-gradient-to-tr from-[#7c3aed] to-[#3626ce] text-white shadow-[0_0_20px_rgba(124,58,237,0.7)]'
                            : 'bg-white/5 border border-white/10 text-[#d2bbff]'
                        }`}
                      >
                        {step.step}
                      </span>
                      <div className="flex items-center gap-1 text-xs font-mono text-[#958da1]">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{step.duration}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-[#e3e0f7] mb-2">{step.title}</h3>
                    <p className="text-xs sm:text-sm text-[#ccc3d8] leading-relaxed mb-6 font-normal">
                      {step.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <div className="text-[11px] font-semibold text-[#958da1] uppercase tracking-wider mb-2">
                      Key Artifacts:
                    </div>
                    <ul className="space-y-1.5">
                      {step.artifacts.map((art) => (
                        <li key={art} className="text-xs text-[#ccc3d8] flex items-center gap-2 font-mono">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#d2bbff]" />
                          <span>{art}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
