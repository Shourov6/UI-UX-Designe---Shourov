import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Star, MessageSquare, Quote } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { testimonials } from '../data/portfolioData';
import { TiltCard } from './TiltCard';

export const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5200);
    return () => window.clearInterval(timer);
  }, []);

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section id="testimonials" aria-label="Client Endorsements" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1e1b4b]/60 border border-[#7c3aed]/40 text-[#d2bbff] text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#ffb0cd]" />
            <span>Colleague & Client Endorsements</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#e3e0f7] tracking-tight mb-4"
          >
            Trusted by Product Teams
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg text-[#ccc3d8]"
          >
            Feedback on velocity, architectural clarity, and design craftsmanship.
          </motion.p>
        </div>

        {/* Testimonial carousel */}
        <div className="relative mx-auto max-w-4xl">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeTestimonial.id}
              initial={{ opacity: 0, x: 42 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -42 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <TiltCard
                maxTilt={6}
                className="p-8 sm:p-10 rounded-3xl bg-[#121221]/80 backdrop-blur-xl border border-[#4a4455]/40 hover:border-[#7c3aed]/60 transition-all duration-300 min-h-[310px] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    {/* Stars */}
                    <div className="flex items-center gap-1 text-[#ffb0cd]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <Quote className="w-6 h-6 text-[#7c3aed]/40" />
                  </div>

                  <p className="text-base sm:text-lg text-[#ccc3d8] leading-relaxed mb-8 italic font-normal">
                    "{activeTestimonial.quote}"
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10 flex items-center gap-4">
                  <img
                    src={activeTestimonial.avatar}
                    alt={activeTestimonial.author}
                    className="w-12 h-12 rounded-full object-cover border border-[#7c3aed]/50 shadow-[0_0_10px_rgba(124,58,237,0.3)]"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <div className="text-sm font-bold text-[#e3e0f7]">{activeTestimonial.author}</div>
                    <div className="text-xs text-[#958da1]">
                      {activeTestimonial.role}, <span className="text-[#d2bbff]">{activeTestimonial.company}</span>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          </AnimatePresence>
          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center gap-2" aria-label="Choose testimonial">
              {testimonials.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Show testimonial ${index + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${index === activeIndex ? 'w-8 bg-[#d2bbff] shadow-[0_0_10px_rgba(210,187,255,0.7)]' : 'w-2 bg-white/20 hover:bg-white/40'}`}
                />
              ))}
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveIndex((activeIndex - 1 + testimonials.length) % testimonials.length)}
                aria-label="Previous testimonial"
                className="w-9 h-9 rounded-full border border-white/10 text-[#ccc3d8] hover:border-[#d2bbff]/60 hover:text-white transition-colors flex items-center justify-center"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setActiveIndex((activeIndex + 1) % testimonials.length)}
                aria-label="Next testimonial"
                className="w-9 h-9 rounded-full border border-white/10 text-[#ccc3d8] hover:border-[#d2bbff]/60 hover:text-white transition-colors flex items-center justify-center"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
