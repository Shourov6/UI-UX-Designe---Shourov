import React from 'react';
import { User, Sparkles, Award, MapPin, Languages, GraduationCap, Briefcase, Mail, Phone, ExternalLink } from 'lucide-react';


import { motion } from 'motion/react';
import { TiltCard } from './TiltCard';
import { AnimatedCounter } from './AnimatedCounter';

export const AboutSection: React.FC = () => {
  const experiences = [
    {
      role: 'UI/UX Designer',
      company: 'Neeramoy Digital Service Ltd.',
      period: 'Jun 2026 – Present',
      type: 'Full-time · Onsite',
      typeColor: 'text-[#34d399] border-[#34d399]/40 bg-[#34d399]/10',
      dotColor: 'bg-[#34d399] shadow-[0_0_8px_#34d399]',
      bullets: [
        'Designing user-centered interfaces for digital service products, from wireframes through high-fidelity Figma prototypes.',
        'Collaborating with cross-functional teams to translate business and user requirements into intuitive, accessible layouts.',
        'Maintaining visual and interaction consistency across web and CMS-based deliverables.',
      ],
    },
    {
      role: 'Full Stack Software Development Intern',
      company: "O'Dell Tech",
      period: 'Mar 2026 – May 2026',
      type: 'Internship · Onsite',
      typeColor: 'text-[#60a5fa] border-[#60a5fa]/40 bg-[#60a5fa]/10',
      dotColor: 'bg-[#60a5fa] shadow-[0_0_8px_#60a5fa]',
      bullets: [
        'Led UI/UX design efforts for the development team, ensuring intuitive and user-friendly interfaces across web applications.',
        'Converted UI/UX designs into responsive, accessible web interfaces and collaborated closely with developers on implementation.',
      ],
    },
    {
      role: 'Freelance UI/UX Designer & Web Developer',
      company: 'Self-employed',
      period: 'Jul 2024 – Mar 2026',
      type: 'Freelance · Remote',
      typeColor: 'text-[#f59e0b] border-[#f59e0b]/40 bg-[#f59e0b]/10',
      dotColor: 'bg-[#f59e0b] shadow-[0_0_8px_#f59e0b]',
      bullets: [
        'Delivered end-to-end UI/UX design and Wix/Webflow development for clients across healthcare, education, and e-commerce sectors.',
        'Managed client briefs, wireframes, prototypes, and production-ready responsive websites independently.',
        'Built a strong portfolio of real-world projects demonstrating user research, visual design, and CMS development skills.',
      ],
    },
    {
      role: 'Data Analyst',
      company: 'Center for Career Development (CCD), Green University of Bangladesh',
      period: 'Jul 2025 – Mar 2026',
      type: 'Part-time · Onsite',
      typeColor: 'text-[#c084fc] border-[#c084fc]/40 bg-[#c084fc]/10',
      dotColor: 'bg-[#c084fc] shadow-[0_0_8px_#c084fc]',
      bullets: [
        'Gathered and analyzed course curriculum data, ensuring accuracy and up-to-date academic records.',
        'Maintained and updated academic databases, improving data consistency and accessibility for faculty and administrative teams.',
        'Collaborated with faculty and staff to streamline curriculum management and support data-driven decisions.',
      ],
    },
  ];

  const corePhilosophy = [
    {
      title: 'Precision Token Architecture',
      desc: 'Design tokens create a shared visual language that keeps every screen clear and consistent.',
    },
    {
      title: 'Performance & 60fps Motion',
      desc: 'Every micro-interaction should communicate state and orient the user without sacrificing speed.',
    },
    {
      title: 'Accessible by Default',
      desc: 'WCAG AA compliance, semantic hierarchy, and contrast ratios engineered into the foundation.',
    },
  ];

  return (
    <section id="about" aria-label="About Shourov" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 text-left max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1e1b4b]/60 border border-[#7c3aed]/40 text-[#d2bbff] text-xs font-semibold uppercase tracking-wider mb-3"
          >
            <User className="w-3.5 h-3.5 text-[#ffb0cd]" />
            <span>Designer Profile</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#e3e0f7] tracking-tight mb-6"
          >
            Designing experiences people understand and enjoy.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg text-[#ccc3d8] leading-relaxed"
          >
            I’m Shourov, a UI/UX Designer & CMS Specialist who creates intuitive interfaces and polished digital experiences,
            alongside flexible CMS websites for brands that want to look good and stay easy to manage. My
            approach brings together research, wireframing, prototyping, visual design, and careful iteration.
          </motion.p>
        </div>

        <div className="mb-16 grid grid-cols-1 gap-6 lg:grid-cols-[220px_1fr]">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative min-h-[250px] overflow-hidden rounded-3xl border border-[#7c3aed]/35 bg-[#121221]/80"
          >
            <img
              src="https://i.imgur.com/FuHguYi.png"
              alt="Shourov, UI/UX Designer and CMS Specialist"
              className="h-full w-full object-cover object-[58%_18%]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071126]/80 via-transparent to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-[#4a4455]/40 bg-[#121221]/80 p-6 backdrop-blur-xl sm:p-8"
          >
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-[#7c3aed]/40 bg-[#7c3aed]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#d2bbff]">
                SHOUROV
              </span>
              <span className="text-sm font-medium text-[#ccc3d8]">UI/UX Designer & CMS Specialist</span>
            </div>
            <div className="grid gap-5 text-sm text-[#ccc3d8] sm:grid-cols-2">
              <div className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#d2bbff]" /><span>Mirpur-10, Dhaka, Bangladesh</span></div>
              <div className="flex items-start gap-3"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#d2bbff]" /><span>asrshourov999@gmail.com</span></div>
              <div className="flex items-start gap-3"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#d2bbff]" /><span>+8801705-249560</span></div>
              <div className="flex items-start gap-3"><Languages className="mt-0.5 h-4 w-4 shrink-0 text-[#d2bbff]" /><span>English: High · Bangla: Native</span></div>
              
              <div className="flex items-start gap-3 sm:col-span-2">
                <GraduationCap className="mt-0.5 h-4 w-4 shrink-0 text-[#d2bbff]" />
                <div className="flex flex-col gap-1.5">
                  <span>B.Sc. in Computer Science & Engineering, Green University of Bangladesh (2022–2026)</span>
                  <span className="text-[#958da1] text-xs">HSC (Science), Gazipur City College (2018–2020)</span>
                  <span className="text-[#958da1] text-xs">SSC (Science), Pirojali Adarsha High School (2013–2018)</span>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:col-span-2">
                <Award className="mt-0.5 h-4 w-4 shrink-0 text-[#d2bbff]" />
                <span>UI/UX Design training · CMS training in Wix and Webflow</span>
              </div>

              <div className="flex items-start gap-3 sm:col-span-2 pt-2 border-t border-white/5">
                <ExternalLink className="mt-0.5 h-4 w-4 shrink-0 text-[#d2bbff]" />
                <div className="flex flex-wrap gap-4 font-medium">
                  <a href="#" className="text-[#a7b4ff] hover:text-white hover:underline transition-colors">LinkedIn</a>
                  <a href="#" className="text-[#a7b4ff] hover:text-white hover:underline transition-colors">GitHub</a>
                  <a href="#" className="text-[#a7b4ff] hover:text-white hover:underline transition-colors">Behance</a>
                </div>
              </div>
            </div>

          </motion.div>
        </div>

        {/* Philosophy & Experience Callout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Philosophy Points */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 p-8 rounded-3xl bg-[#121221]/80 backdrop-blur-xl border border-[#4a4455]/40 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 text-[#d2bbff] text-xs font-semibold uppercase tracking-wider mb-6">
                <Sparkles className="w-4 h-4 text-[#ffb0cd]" />
                <span>Foundational Methodology</span>
              </div>
              <div className="space-y-6">
                {corePhilosophy.map((phil, i) => (
                  <div key={phil.title} className="flex gap-4 group">
                    <span className="w-8 h-8 rounded-xl bg-[#7c3aed]/20 text-[#d2bbff] font-mono text-sm font-bold flex items-center justify-center shrink-0 border border-[#7c3aed]/30 group-hover:scale-110 transition-transform">
                      0{i + 1}
                    </span>
                    <div>
                      <h4 className="text-base font-semibold text-[#e3e0f7] mb-1 group-hover:text-[#d2bbff] transition-colors">
                        {phil.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#ccc3d8] leading-relaxed">{phil.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quick Experience Bio Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 p-8 rounded-3xl bg-gradient-to-br from-[#1e1b4b]/80 via-[#121221]/90 to-[#121221] border border-[#7c3aed]/40 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#7c3aed] to-[#bf2076] flex items-center justify-center text-white shadow-[0_0_20px_rgba(124,58,237,0.5)]">
                  <Award className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#d2bbff]">
                  UI/UX focus
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#e3e0f7] mb-3">Thoughtful by design</h3>
              <p className="text-xs sm:text-sm text-[#ccc3d8] leading-relaxed mb-6 font-normal">
                I turn complex requirements into calm, useful interfaces. Every flow, state, and edge case is
                considered early so people can move through a product with confidence.
              </p>
            </div>

            <div className="space-y-3 pt-6 border-t border-white/10">
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#958da1]">Preferred stack:</span>
                <span className="font-mono text-[#d2bbff]">Figma · Webflow · Wix · Squarespace</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#958da1]">Time zone:</span>
                <span className="font-mono text-[#ccc3d8]">UTC+6 (Flexible US / EU overlap)</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 rounded-3xl border border-[#4a4455]/40 bg-[#121221]/75 p-6 backdrop-blur-xl sm:p-8"
        >
          <div className="mb-7 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#d2bbff]">
            <Briefcase className="h-4 w-4 text-[#ffb0cd]" />
            <span>Professional Experience</span>
          </div>

          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-[#7c3aed]/60 via-[#bf2076]/40 to-transparent hidden sm:block" />

            <div className="space-y-8">
              {experiences.map((exp, idx) => (
                <motion.div
                  key={exp.company + exp.period}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="sm:pl-8 relative"
                >
                  {/* Timeline dot */}
                  <span className={`absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full ${exp.dotColor} ring-2 ring-[#121221] hidden sm:block`} />

                  <div className="rounded-2xl border border-[#4a4455]/35 bg-[#0e0d1c]/60 p-5 hover:border-[#7c3aed]/40 transition-colors duration-300">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <h4 className="text-sm font-bold text-[#e3e0f7]">{exp.role}</h4>
                        <p className="text-xs text-[#d2bbff] mt-0.5 font-medium">{exp.company}</p>
                      </div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className={`text-[10px] font-semibold px-2.5 py-1 rounded-full border ${exp.typeColor}`}>
                          {exp.type}
                        </span>
                        <span className="text-[10px] text-[#958da1] font-mono">{exp.period}</span>
                      </div>
                    </div>
                    <ul className="space-y-1.5">
                      {exp.bullets.map((b, bi) => (
                        <li key={bi} className="text-xs text-[#958da1] leading-relaxed flex gap-2">
                          <span className="mt-1.5 w-1 h-1 rounded-full bg-[#7c3aed]/60 shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>


      </div>
    </section>
  );
};
