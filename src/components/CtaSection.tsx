import React from 'react';
import { Mail, ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface CtaSectionProps {
  onContactClick: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onContactClick }) => {
  return (
    <section aria-label="Call to Action" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-3xl p-8 sm:p-14 bg-gradient-to-br from-[#1e1b4b]/90 via-[#121221]/95 to-[#18182b] border border-[#7c3aed]/50 shadow-[0_20px_50px_-20px_rgba(124,58,237,0.4)] text-center overflow-hidden"
          animate={{ boxShadow: ['0 20px 50px -20px rgba(124,58,237,0.35)', '0 24px 70px -18px rgba(191,32,118,0.38)', '0 20px 50px -20px rgba(124,58,237,0.35)'] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        >
          {/* Internal ambient radial glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#7c3aed]/25 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#d2bbff] text-xs font-semibold uppercase tracking-wider mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#ffb0cd]" />
              <span>Open to Work</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#e3e0f7] tracking-tight mb-4">
              Got a project in mind?
            </h2>

            <p className="text-sm sm:text-base text-[#ccc3d8] leading-relaxed mb-8 font-normal">
              Whether you need a UI/UX design, a Figma prototype, or a responsive Wix or Webflow website —
              I'd love to hear about it. Let's build something great together.
            </p>

            <div className="flex flex-wrap justify-center items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: '0 0 35px rgba(124, 58, 237, 0.7)' }}
                whileTap={{ scale: 0.96 }}
                onClick={onContactClick}
                className="px-8 py-4 rounded-full bg-[#7c3aed] hover:bg-[#6d28d9] text-white text-sm sm:text-base font-semibold shadow-[0_0_25px_rgba(124,58,237,0.5)] transition-all duration-300 flex items-center gap-2 group cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.04, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                whileTap={{ scale: 0.96 }}
                href="mailto:asrshourov999@gmail.com"
                className="px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 text-[#e3e0f7] border border-white/10 text-sm sm:text-base font-semibold backdrop-blur-md transition-all duration-300 flex items-center gap-2 cursor-pointer"
              >
                <span>asrshourov999@gmail.com</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
