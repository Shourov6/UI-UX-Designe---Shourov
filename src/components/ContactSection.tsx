import React, { useState } from 'react';
import { Mail, CheckCircle2, Copy, Phone, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('asrshourov999@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" aria-label="Contact Information" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center w-full"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1e1b4b]/60 border border-[#7c3aed]/40 text-[#d2bbff] text-xs font-semibold uppercase tracking-wider mb-4">
            <Mail className="w-3.5 h-3.5 text-[#ffb0cd]" />
            <span>Let's Talk</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#e3e0f7] tracking-tight mb-4">
            Let’s create together.
          </h2>

          <p className="text-sm sm:text-base text-[#ccc3d8] leading-relaxed mb-10 font-normal max-w-xl text-center">
            I’m available for UI/UX design projects and CMS website work, from early ideas to polished,
            easy-to-manage experiences.
          </p>

          {/* Quick Email Pill */}
          <div className="p-6 rounded-2xl bg-[#121221]/90 border border-[#4a4455]/40 mb-10 backdrop-blur-xl w-full max-w-md shadow-xl hover:shadow-[0_0_30px_rgba(124,58,237,0.15)] transition-shadow">
            <div className="text-xs text-[#958da1] uppercase tracking-wider mb-4 font-medium">
              Direct Inquiries
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <a
                href="mailto:asrshourov999@gmail.com"
                className="font-mono text-sm sm:text-lg font-semibold text-[#d2bbff] hover:underline truncate"
              >
                asrshourov999@gmail.com
              </a>

              <button
                onClick={handleCopyEmail}
                className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-[#ccc3d8] hover:text-white border border-white/10 flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
              >
                {copiedEmail ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-[#34d399]" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-[#ccc3d8]">
            <div className="flex items-center gap-3"><Phone className="h-5 w-5 text-[#d2bbff]" /><span>01705-249560</span></div>
            <div className="flex items-center gap-3"><MapPin className="h-5 w-5 text-[#d2bbff]" /><span>Dhaka, Bangladesh</span></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
