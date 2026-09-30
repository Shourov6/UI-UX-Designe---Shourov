import React from 'react';
import { Layers, Smartphone, Layout, Workflow, Sparkles, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { services } from '../data/portfolioData';
import { TiltCard } from './TiltCard';

export const ServicesSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers':
        return <Layers className="w-6 h-6 text-[#d2bbff]" />;
      case 'Smartphone':
        return <Smartphone className="w-6 h-6 text-[#ffb0cd]" />;
      case 'Layout':
        return <Layout className="w-6 h-6 text-[#d2bbff]" />;
      case 'Workflow':
        return <Workflow className="w-6 h-6 text-[#ffb0cd]" />;
      default:
        return <Layers className="w-6 h-6 text-[#d2bbff]" />;
    }
  };

  return (
    <section id="services" aria-label="Services & Capabilities" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1e1b4b]/60 border border-[#7c3aed]/40 text-[#d2bbff] text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#ffb0cd]" />
            <span>Core Capabilities</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#e3e0f7] tracking-tight mb-4"
          >
            UI/UX and CMS, thoughtfully delivered
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg text-[#ccc3d8]"
          >
            From user research to polished interfaces and flexible CMS websites, every detail is shaped around
            clarity, usefulness, and your brand.
          </motion.p>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TiltCard
                maxTilt={6}
                className="p-8 rounded-3xl bg-[#121221]/80 backdrop-blur-xl border border-[#4a4455]/40 hover:border-[#7c3aed]/60 transition-all duration-300 group h-full flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#1e1b4b] border border-[#7c3aed]/40 flex items-center justify-center group-hover:scale-110 group-hover:border-[#d2bbff] group-hover:shadow-[0_0_25px_rgba(124,58,237,0.5)] transition-all duration-300">
                      {getIcon(service.icon)}
                    </div>
                    <span className="font-mono text-xs text-[#958da1] px-3 py-1 rounded-full bg-white/5 border border-white/5">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#e3e0f7] group-hover:text-[#d2bbff] transition-colors mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#ccc3d8] leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10">
                  <div className="text-xs font-semibold text-[#958da1] uppercase tracking-wider mb-3">
                    Tangible Deliverables
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {service.deliverables.map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-white/5 text-[#ccc3d8] border border-white/5 group-hover:border-[#7c3aed]/30 transition-colors"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#34d399]" />
                        <span>{item}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
