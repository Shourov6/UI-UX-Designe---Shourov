import React from 'react';
import {
  ArrowLeft,
  MapPin,
  Mail,
  Phone,
  Linkedin,
  Github,
  Globe,
  Briefcase,
  GraduationCap,
  Wrench,
  Award,
  Star,
  Download,
  ExternalLink,
  ChevronRight,
  Layers,
} from 'lucide-react';
import { motion } from 'motion/react';

interface ResumePageProps {
  onBack: () => void;
  onViewProjects: () => void;
  onCaseStudy?: (projectId: string) => void;
}

/* ─── Data ──────────────────────────────────────────────────────────────── */

const experiences = [
  {
    role: 'UI/UX Designer',
    company: 'Neeramoy Digital Service Ltd.',
    period: 'Jun 2026 – Oct 2026',
    type: 'Full-time · Onsite',
    color: '#34d399',
    bullets: [
      'Designed intuitive, accessible web and mobile interfaces from user flows to high-fidelity Figma prototypes, maintaining a consistent shared design system.',
      'Used AI tools (Claude, ChatGPT, Figma AI) to accelerate ideation and prototyping, refined with human judgment.',
      'Collaborated cross-functionally to translate business and user needs into usable, pixel-perfect layouts.',
    ],
  },
  {
    role: 'Full Stack Software Development Intern',
    company: "O'Dell Tech",
    period: 'Mar 2026 – May 2026',
    type: 'Internship · Onsite',
    color: '#60a5fa',
    bullets: [
      'Led UI/UX design for the development team, creating intuitive, user-friendly web application interfaces.',
      'Converted designs into responsive, accessible implementations, collaborating closely with developers to ensure accuracy and design quality.',
    ],
  },
  {
    role: 'Data Analyst (Intern)',
    company: 'Center for Career Development (CCD), Green University of Bangladesh',
    period: 'Jul 2025 – Mar 2026',
    type: 'Part-time · Onsite',
    color: '#c084fc',
    bullets: [
      'Gathered, analyzed, and maintained course curriculum data and academic databases, ensuring accurate and up-to-date records.',
      'Collaborated with faculty and staff to streamline curriculum management and support data-driven decisions.',
    ],
  },
  {
    role: 'Freelance – Wix Design & Development',
    company: 'Self-employed',
    period: '2022 – 2024',
    type: 'Freelance · Remote',
    color: '#f59e0b',
    bullets: [
      'Designed, built, and launched responsive, brand-consistent Wix websites for clients, managing each project end-to-end.',
      'Covered requirements gathering, wireframes, prototypes, and production-ready sites with user-centered layouts and visual branding.',
    ],
  },
];

const education = [
  {
    degree: 'B.Sc. in Computer Science & Engineering',
    institution: 'Green University of Bangladesh, Dhaka',
    period: '2022 – 2026',
    color: '#7c3aed',
  },
];

const skills = [
  {
    category: 'Design Tools',
    icon: '🎨',
    items: ['Figma', 'Canva'],
  },
  {
    category: 'AI-Assisted Design',
    icon: '🤖',
    items: ['Claude', 'ChatGPT', 'Figma AI'],
    note: 'Design reasoning, workflow generation, rapid prototyping',
  },
  {
    category: 'UI/UX Practices',
    icon: '🔬',
    items: [
      'User Research',
      'Wireframing',
      'Prototyping',
      'Usability Testing',
      'Design Systems',
      'Responsive Design',
      'Accessibility (WCAG)',
    ],
  },
  {
    category: 'Web Platforms / CMS',
    icon: '🌐',
    items: ['Wix', 'Webflow', 'Squarespace'],
  },
  {
    category: 'Front-End Coding',
    icon: '💻',
    items: ['HTML', 'CSS', 'JavaScript', 'React'],
  },
  {
    category: 'Languages',
    icon: '🌏',
    items: ['Bangla (Native)', 'English (Fluent)'],
  },
];

const extracurricular = [
  {
    title: 'President',
    org: 'Green University Club for Languages (GUCL)',
    period: 'Mar 2025 – Mar 2026',
    color: '#7c3aed',
    emoji: '🎙️',
    details: [
      'Led a 200+ member campus club focused on bilingual communication, debate, and public speaking.',
      'Organized 6+ inter-university language competitions and cultural exchange events.',
      'Managed a core committee of 12, overseeing budgets, scheduling, and event logistics.',
      'Drove a 40% membership growth and introduced a mentorship program pairing seniors with freshers.',
    ],
  },
  {
    title: 'Event Secretary',
    org: 'Social Services & Blood Donation Club',
    period: 'Jan 2024 – Dec 2024',
    color: '#ec4899',
    emoji: '🩸',
    details: [
      'Coordinated voluntary blood donation drives connecting students with Dhaka hospitals.',
      'Planned and executed social welfare events including campus cleanliness and awareness campaigns.',
      'Maintained records of 150+ donors and facilitated emergency blood requests across the university.',
    ],
  },
  {
    title: 'Event & Venue Management',
    org: 'GreenFest 2.0 — Annual University Cultural Festival',
    period: 'Nov 2025',
    color: '#f59e0b',
    emoji: '🎪',
    details: [
      'Managed venue setup, stage operations, and logistics for a 1,000+ attendee campus festival.',
      'Coordinated with 20+ student clubs, vendors, and security teams across a 2-day event.',
      'Oversaw real-time problem-solving for audio/visual setups, crowd management, and scheduling.',
    ],
  },
  {
    title: 'Volunteer',
    org: 'Multiple National & University Events',
    period: '2024 – 2025',
    color: '#06b6d4',
    emoji: '🤝',
    details: [
      'NAT (National Aptitude Test) 2024–25 — assisted in test facilitation and candidate coordination.',
      'GUB Internships Fair & Career Expo 2025 — guided students and managed exhibitor booths.',
      'Bangladesh Vision Summit 2024 — supported event operations and guest hospitality at a national policy forum.',
    ],
  },
];

const selectedProjects = [
  {
    name: 'ORBIT AI — Sovereign Enterprise AI Workspace',
    description:
      "Bangladesh's first sovereign enterprise AI workspace — 38+ screens spanning desktop and mobile with bilingual Bangla/English support, statutory NBR compliance dashboards, and document intelligence powered by Bangla-OCR.",
    tags: ['Enterprise', 'AI', 'Dashboard', 'Figma', '38+ Screens'],
    behanceUrl: 'https://www.behance.net/gallery/258314983/ORBIT-AI-Sovereign-Enterprise-AI-Workspace',
    isInternal: true,
    id: 'orbit-ai-design-system',
    highlight: true,
  },
  {
    name: 'NOVA Bank — Admin Dashboard UI/UX',
    description:
      'Comprehensive enterprise banking admin dashboard giving NOVA Bank\'s internal teams a centralized platform for managing customers, accounts, transactions, cards, KYC, and operations — built for scale and auditability.',
    tags: ['Dashboard', 'Fintech', 'Enterprise', 'Figma'],
    figmaUrl: 'https://figma.com/proto/DrAbTFlBenf7Pg7tutvbHg',
    isInternal: false,
    highlight: false,
  },
];

/* ─── Fade-in wrapper ───────────────────────────────────────────────────── */
const FadeIn: React.FC<{ children: React.ReactNode; delay?: number; className?: string }> = ({
  children,
  delay = 0,
  className = '',
}) => (
  <motion.div
    initial={{ opacity: 0, y: 22 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

/* ─── Section header ────────────────────────────────────────────────────── */
const SectionHeader: React.FC<{ icon: React.ReactNode; label: string; accent?: string }> = ({
  icon,
  label,
  accent = '#7c3aed',
}) => (
  <div className="flex items-center gap-3 mb-7">
    <div
      className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
      style={{ background: `${accent}22`, border: `1px solid ${accent}44` }}
    >
      {icon}
    </div>
    <h2 className="text-xl font-bold text-[#e3e0f7] tracking-tight">{label}</h2>
    <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
  </div>
);

/* ─── Main Component ────────────────────────────────────────────────────── */
export const ResumePage: React.FC<ResumePageProps> = ({ onBack, onViewProjects, onCaseStudy }) => {
  const handleDownloadPDF = async () => {
    try {
      const url = `${window.location.origin}/UI_UX_Shourov.pdf`;
      const res = await fetch(url);
      if (!res.ok) throw new Error('Failed to fetch PDF');
      const blob = await res.blob();
      const blobUrl = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = blobUrl;
      a.download = 'Shourov_UI_UX_Resume.pdf';
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(blobUrl), 5000);
    } catch {
      // fallback: open in new tab
      window.open(`${window.location.origin}/UI_UX_Shourov.pdf`, '_blank');
    }
  };

  return (
    <main className="relative z-10 min-h-screen">
      {/* ── Hero Header ─────────────────────────────────────────────────── */}
      <div className="relative overflow-hidden border-b border-white/[0.07]">
        {/* Background gradient blobs */}
        <div className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-[#7c3aed]/10 blur-[100px] pointer-events-none" />
        <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-[#06b6d4]/8 blur-[80px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-14">
          {/* Back button */}
          <motion.button
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={onBack}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-[#ccc3d8] transition-all hover:bg-white/10 hover:text-white backdrop-blur-md mb-10"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </motion.button>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            {/* Identity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1e1b4b]/60 border border-[#7c3aed]/40 text-[#d2bbff] text-xs font-semibold uppercase tracking-wider mb-4">
                <Star className="w-3.5 h-3.5 text-[#ffb0cd]" />
                <span>Résumé</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#e3e0f7] tracking-tight leading-none mb-1">
                Shourov
              </h1>
              <p className="text-lg sm:text-xl font-semibold text-[#7c3aed] tracking-wide mb-5">
                UI/UX Designer
              </p>

              {/* Contact row */}
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[#9893a5] text-sm">
                <a
                  href="tel:+8801705249560"
                  className="flex items-center gap-1.5 hover:text-[#d2bbff] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  +880 1705-249560
                </a>
                <a
                  href="mailto:asrshourov999@gmail.com"
                  className="flex items-center gap-1.5 hover:text-[#d2bbff] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  asrshourov999@gmail.com
                </a>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  Dhaka, Bangladesh
                </span>
              </div>

              {/* Links row */}
              <div className="flex flex-wrap items-center gap-3 mt-4">
                <a
                  href="https://linkedin.com/in/asr-shourov-6420912b8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0077b5]/15 border border-[#0077b5]/30 text-[#60a5fa] text-xs font-semibold hover:bg-[#0077b5]/25 transition-all"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/asrshourov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.07] border border-white/15 text-[#ccc3d8] text-xs font-semibold hover:bg-white/[0.12] transition-all"
                >
                  <Github className="w-3.5 h-3.5" />
                  GitHub
                </a>
                <a
                  href="https://www.behance.net/asrshourov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1769ff]/15 border border-[#1769ff]/30 text-[#93c5fd] text-xs font-semibold hover:bg-[#1769ff]/25 transition-all"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Behance
                </a>
                <a
                  href="https://ui-ux-designer-shourov.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#7c3aed]/15 border border-[#7c3aed]/30 text-[#d2bbff] text-xs font-semibold hover:bg-[#7c3aed]/25 transition-all"
                >
                  <Globe className="w-3.5 h-3.5" />
                  Portfolio
                </a>
              </div>
            </motion.div>

            {/* Download PDF button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="shrink-0"
            >
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={handleDownloadPDF}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#7c3aed] to-[#3626ce] px-5 py-2.5 text-sm font-bold text-white shadow-[0_0_20px_rgba(124,58,237,0.4)] hover:shadow-[0_0_28px_rgba(168,85,247,0.6)] transition-all cursor-pointer"
              >
                <Download className="w-4 h-4" />
                Download PDF
              </motion.button>
            </motion.div>
          </div>

          {/* Career Objective */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 p-5 rounded-2xl bg-[#1a1130]/60 border border-[#7c3aed]/25 backdrop-blur-sm"
          >
            <p className="text-[0.95rem] text-[#c8c0d8] leading-relaxed">
              UI/UX Designer experienced in turning user research into wireframes, prototypes, and high-fidelity web
              and mobile interfaces, with strong design-system and responsive design skills. Integrates AI tools
              (Claude, ChatGPT, Figma AI) to speed up ideation and prototyping while keeping design decisions
              human-led. Also delivers production-ready Wix and Webflow websites.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ── Body ────────────────────────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10">

        {/* ── Left column ─────────────────────────────────────────────── */}
        <div className="space-y-14">

          {/* Experience */}
          <FadeIn>
            <SectionHeader
              icon={<Briefcase className="w-4.5 h-4.5 text-[#34d399]" style={{ width: '1.1rem', height: '1.1rem' }} />}
              label="Experience"
              accent="#34d399"
            />
            <div className="relative pl-5">
              {/* Vertical line */}
              <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-[#34d399]/40 via-[#7c3aed]/30 to-transparent" />

              <div className="space-y-8">
                {experiences.map((exp, i) => (
                  <FadeIn key={i} delay={i * 0.06}>
                    <div className="relative">
                      {/* Timeline dot */}
                      <div
                        className="absolute -left-[22px] top-1.5 w-3 h-3 rounded-full border-2 border-[#121221]"
                        style={{ background: exp.color, boxShadow: `0 0 8px ${exp.color}` }}
                      />

                      <div className="rounded-2xl bg-[#161425]/70 border border-white/[0.07] p-5 hover:border-white/[0.14] transition-colors">
                        <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                          <div>
                            <h3 className="font-bold text-[#e3e0f7] text-base leading-tight">{exp.role}</h3>
                            <p className="text-sm text-[#9893a5] mt-0.5">{exp.company}</p>
                          </div>
                          <div className="text-right shrink-0">
                            <span
                              className="text-xs font-semibold px-2.5 py-0.5 rounded-full border"
                              style={{
                                color: exp.color,
                                borderColor: `${exp.color}44`,
                                background: `${exp.color}14`,
                              }}
                            >
                              {exp.type}
                            </span>
                            <p className="text-xs text-[#6b6478] mt-1 text-right">{exp.period}</p>
                          </div>
                        </div>
                        <ul className="space-y-1.5 mt-3">
                          {exp.bullets.map((b, j) => (
                            <li key={j} className="flex items-start gap-2 text-sm text-[#b0a8c0] leading-relaxed">
                              <ChevronRight
                                className="w-3.5 h-3.5 mt-0.5 shrink-0"
                                style={{ color: exp.color }}
                              />
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Selected Projects */}
          <FadeIn>
            <SectionHeader
              icon={<Layers className="w-4.5 h-4.5 text-[#c084fc]" style={{ width: '1.1rem', height: '1.1rem' }} />}
              label="Selected UI/UX Projects"
              accent="#c084fc"
            />
            <div className="space-y-4">
              {selectedProjects.map((proj, i) => (
                <FadeIn key={i} delay={i * 0.08}>
                  <div
                    className={`rounded-2xl border p-5 transition-all group ${
                      proj.highlight
                        ? 'bg-gradient-to-br from-[#1e1b4b]/80 to-[#161030]/80 border-[#7c3aed]/40 shadow-[0_0_30px_rgba(124,58,237,0.12)] hover:border-[#7c3aed]/70'
                        : 'bg-[#161425]/70 border-white/[0.07] hover:border-[#7c3aed]/25'
                    }`}
                  >
                    {proj.highlight && (
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#7c3aed]/25 border border-[#7c3aed]/50 text-[#d2bbff] text-[0.65rem] font-bold uppercase tracking-widest mb-3">
                        <Star className="w-2.5 h-2.5 text-[#ffb0cd]" />
                        Featured Work
                      </div>
                    )}
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <h3 className={`font-bold leading-tight mb-1.5 ${proj.highlight ? 'text-base text-[#e3e0f7]' : 'text-sm text-[#e3e0f7]'}`}>
                          {proj.name}
                        </h3>
                        <p className="text-[0.8rem] text-[#9893a5] leading-relaxed mb-3">{proj.description}</p>
                        <div className="flex flex-wrap gap-1.5">
                          {proj.tags.map((tag) => (
                            <span
                              key={tag}
                              className={`text-[0.68rem] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider border ${
                                proj.highlight
                                  ? 'bg-[#7c3aed]/20 border-[#7c3aed]/40 text-[#d2bbff]'
                                  : 'bg-[#7c3aed]/10 border-[#7c3aed]/20 text-[#c084fc]'
                              }`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex flex-col gap-1.5 shrink-0">
                        {proj.isInternal && (
                          <button
                            onClick={() => {
                              if (proj.id && onCaseStudy) {
                                onCaseStudy(proj.id);
                              } else {
                                onViewProjects();
                              }
                            }}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#7c3aed]/25 border border-[#7c3aed]/50 text-[#d2bbff] text-xs font-semibold hover:bg-[#7c3aed]/40 transition-all cursor-pointer"
                          >
                            <Layers className="w-3 h-3" />
                            Case Study
                          </button>
                        )}
                        {proj.behanceUrl && (
                          <a
                            href={proj.behanceUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1769ff]/15 border border-[#1769ff]/30 text-[#93c5fd] text-xs font-semibold hover:bg-[#1769ff]/25 transition-all"
                          >
                            <ExternalLink className="w-3 h-3" />
                            Behance
                          </a>
                        )}
                        {proj.figmaUrl && (
                          <a
                            href={proj.figmaUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#ff7262]/15 border border-[#ff7262]/30 text-[#fca5a5] text-xs font-semibold hover:bg-[#ff7262]/25 transition-all"
                          >
                            <ExternalLink className="w-3 h-3" />
                            Figma
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}

              {/* CTA to full projects page */}
              <FadeIn delay={0.2}>
                <button
                  onClick={onViewProjects}
                  className="w-full mt-1 py-3 rounded-2xl border border-dashed border-[#7c3aed]/35 text-[#9893a5] text-sm font-semibold hover:border-[#7c3aed]/65 hover:text-[#d2bbff] hover:bg-[#7c3aed]/8 transition-all flex items-center justify-center gap-2"
                >
                  <span>View all 13+ projects in portfolio</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </FadeIn>
            </div>
          </FadeIn>

          {/* Education */}
          <FadeIn>
            <SectionHeader
              icon={<GraduationCap className="w-4.5 h-4.5 text-[#60a5fa]" style={{ width: '1.1rem', height: '1.1rem' }} />}
              label="Education"
              accent="#60a5fa"
            />
            {education.map((edu, i) => (
              <div
                key={i}
                className="rounded-2xl bg-[#161425]/70 border border-white/[0.07] p-5 flex flex-wrap items-center justify-between gap-3"
              >
                <div>
                  <h3 className="font-bold text-[#e3e0f7] text-base">{edu.degree}</h3>
                  <p className="text-sm text-[#9893a5] mt-0.5">{edu.institution}</p>
                </div>
                <span
                  className="text-xs font-semibold px-2.5 py-0.5 rounded-full border"
                  style={{
                    color: edu.color,
                    borderColor: `${edu.color}44`,
                    background: `${edu.color}14`,
                  }}
                >
                  {edu.period}
                </span>
              </div>
            ))}
          </FadeIn>
        </div>

        {/* ── Right column (sidebar) ───────────────────────────────────── */}
        <div className="space-y-10">

          {/* Skills */}
          <FadeIn>
            <SectionHeader
              icon={<Wrench className="w-4.5 h-4.5 text-[#f59e0b]" style={{ width: '1.1rem', height: '1.1rem' }} />}
              label="Technical Skills"
              accent="#f59e0b"
            />
            <div className="space-y-4">
              {skills.map((group, i) => (
                <FadeIn key={i} delay={i * 0.05}>
                  <div className="rounded-xl bg-[#161425]/70 border border-white/[0.07] p-4">
                    <div className="flex items-center gap-2 mb-2.5">
                      <span className="text-base">{group.icon}</span>
                      <span className="text-xs font-bold text-[#9893a5] uppercase tracking-wider">
                        {group.category}
                      </span>
                    </div>
                    {group.note && (
                      <p className="text-[0.72rem] text-[#6b6478] italic mb-2">{group.note}</p>
                    )}
                    <div className="flex flex-wrap gap-1.5">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="text-[0.75rem] px-2.5 py-0.5 rounded-full bg-white/[0.05] border border-white/[0.1] text-[#c8c0d8] font-medium"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </FadeIn>

          {/* Extracurricular */}
          <FadeIn>
            <SectionHeader
              icon={<Award className="w-4.5 h-4.5 text-[#ec4899]" style={{ width: '1.1rem', height: '1.1rem' }} />}
              label="Leadership & Volunteering"
              accent="#ec4899"
            />
            <div className="space-y-4">
              {extracurricular.map((item, i) => (
                <FadeIn key={i} delay={i * 0.06}>
                  <div
                    className="rounded-2xl bg-[#161425]/70 border border-white/[0.07] p-4 hover:border-white/[0.14] transition-colors"
                    style={{ borderLeftWidth: 3, borderLeftColor: item.color }}
                  >
                    {/* Header row */}
                    <div className="flex items-start gap-3 mb-3">
                      <span className="text-xl mt-0.5 leading-none">{item.emoji}</span>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center justify-between gap-1">
                          <p className="text-sm font-bold" style={{ color: item.color }}>
                            {item.title}
                          </p>
                          <span className="text-[0.68rem] text-[#6b6478] font-medium">{item.period}</span>
                        </div>
                        <p className="text-[0.78rem] text-[#b0a8c0] leading-snug mt-0.5">{item.org}</p>
                      </div>
                    </div>
                    {/* Detail bullets */}
                    <ul className="space-y-1.5 pl-1">
                      {item.details.map((d, j) => (
                        <li key={j} className="flex items-start gap-2 text-[0.75rem] text-[#9893a5] leading-relaxed">
                          <span
                            className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                            style={{ background: item.color, opacity: 0.7 }}
                          />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>
              ))}
            </div>
          </FadeIn>

          {/* Quick Stats */}
          <FadeIn>
            <div className="rounded-2xl bg-gradient-to-br from-[#1e1b4b]/80 to-[#1a1130]/80 border border-[#7c3aed]/25 p-5">
              <p className="text-xs font-bold text-[#9893a5] uppercase tracking-wider mb-4">At a Glance</p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: 'Projects', value: '13+' },
                  { label: 'Experience', value: '2+ yrs' },
                  { label: 'Tools', value: 'Figma' },
                  { label: 'Platforms', value: 'Wix · Webflow' },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl bg-white/[0.04] border border-white/[0.07] p-3 text-center"
                  >
                    <p className="text-lg font-extrabold text-[#d2bbff]">{stat.value}</p>
                    <p className="text-[0.68rem] text-[#6b6478] mt-0.5">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* ── Footer CTA strip ─────────────────────────────────────────────── */}
      <div className="border-t border-white/[0.07] mt-4">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-[#e3e0f7]">Open to new opportunities</p>
            <p className="text-xs text-[#6b6478] mt-0.5">UI/UX roles · Product design · Freelance projects</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onViewProjects}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-[#7c3aed]/40 text-[#d2bbff] text-sm font-semibold hover:bg-[#7c3aed]/15 transition-all"
            >
              View Projects
              <ChevronRight className="w-4 h-4" />
            </button>
            <a
              href="mailto:asrshourov999@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-[#7c3aed] to-[#3626ce] text-white text-sm font-bold shadow-[0_0_16px_rgba(124,58,237,0.4)] hover:shadow-[0_0_24px_rgba(168,85,247,0.6)] transition-all"
            >
              <Mail className="w-4 h-4" />
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

