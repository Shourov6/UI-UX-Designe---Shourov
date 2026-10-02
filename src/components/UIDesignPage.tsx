import React from 'react';
import { ArrowLeft, Palette, Layers, Type, MousePointerClick, Smartphone, Eye, Columns, Component, MonitorSmartphone, Code2, CheckCircle2, ChevronRight, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';

interface UIDesignPageProps {
  onBack: () => void;
  onExploreUXResearch?: () => void;
}

export const UIDesignPage: React.FC<UIDesignPageProps> = ({ onBack, onExploreUXResearch }) => {
  return (
    <div className="relative z-10 min-h-screen pb-24 text-[#e3e0f7]">
      {/* Sticky Back Bar */}
      <div className="sticky top-0 z-50 border-b border-white/5 bg-[#121221]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <button
            onClick={onBack}
            className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-[#ccc3d8] transition-all hover:bg-white/10 hover:text-white backdrop-blur-md"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </button>
          <div className="flex items-center gap-2">
            <span className="rounded-full border border-[#7c3aed]/30 bg-[#7c3aed]/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#c4b5fd]">
              Service Details
            </span>
            <span className="hidden sm:inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#d2bbff]">
              UI Design
            </span>
          </div>
        </div>
      </div>

      <article className="mx-auto max-w-6xl px-4 pt-16 sm:px-6">
        
        {/* SECTION 01 — Hero / Introduction */}
        <section className="mb-24 flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#19c5c3] to-[#3626ce] shadow-[0_0_30px_rgba(25,197,195,0.4)]"
          >
            <Palette className="h-8 w-8 text-white" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-6 text-4xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl"
          >
            UI Design
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto max-w-3xl text-xl font-medium leading-relaxed text-[#c4b5fd] sm:text-2xl"
          >
            Transforming ideas and complex requirements into intuitive, accessible, and visually engaging digital experiences.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-16 w-full overflow-hidden rounded-3xl border border-white/10 shadow-[0_0_50px_rgba(25,197,195,0.15)] relative aspect-[21/9]"
          >
            {/* Visual representation of UI Design, using an abstract tech/UI composition */}
            <img 
              src="https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop" 
              alt="UI Design Composition" 
              className="h-full w-full object-cover"
              fetchPriority="high"
              decoding="sync"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121221] via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-6 left-6 max-w-xl text-left">
              <p className="text-sm font-semibold uppercase tracking-wider text-[#19c5c3] mb-2">The Interface</p>
              <p className="text-lg text-white">Where logic meets aesthetics to form a seamless experience.</p>
            </div>
          </motion.div>
        </section>

        {/* SECTION 02 — What is UI Design? */}
        <section className="mb-32">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">What is UI Design?</h2>
              <p className="mb-6 text-lg leading-relaxed text-[#ccc3d8]">
                User Interface (UI) Design is the visual manifestation of a product's underlying logic. It encompasses everything a user interacts with on a screen—from typography and color palettes to spacing, buttons, and animations.
              </p>
              <p className="mb-6 text-lg leading-relaxed text-[#ccc3d8]">
                While UX determines how a product <em>works</em>, UI determines how it <em>looks and feels</em>. However, effective UI design is never just about making things pretty. It is about utilizing layout, contrast, and hierarchy to guide users effortlessly toward their goals, bridging the gap between visual aesthetics and genuine usability.
              </p>
            </div>
            <div className="rounded-3xl border border-[#19c5c3]/20 bg-gradient-to-br from-[#19c5c3]/10 to-transparent p-8 sm:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-20"><Columns className="w-32 h-32 text-[#19c5c3]" /></div>
              <h3 className="mb-4 text-xl font-bold text-white relative z-10">More than just pixels</h3>
              <ul className="space-y-4 relative z-10">
                <li className="flex items-start gap-3 text-[#ccc3d8]">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-[#19c5c3]" />
                  <span>Reduces cognitive load through consistent patterns.</span>
                </li>
                <li className="flex items-start gap-3 text-[#ccc3d8]">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-[#19c5c3]" />
                  <span>Builds instant brand trust and credibility.</span>
                </li>
                <li className="flex items-start gap-3 text-[#ccc3d8]">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-[#19c5c3]" />
                  <span>Ensures WCAG accessibility for all users.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 03 — Core UI Design Principles */}
        <section className="mb-32">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">Core UI Design Principles</h2>
            <p className="mx-auto max-w-2xl text-lg text-[#ccc3d8]">
              Beautiful interfaces are built on a foundation of timeless design principles.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Layers, title: 'Visual Hierarchy', desc: 'Guiding user attention naturally through intentional sizing, contrast, and placement.' },
              { icon: Component, title: 'Consistency', desc: 'Maintaining predictable patterns and reusable components to reduce learning curves.' },
              { icon: Type, title: 'Typography', desc: 'Improving readability and communicating information hierarchy effectively.' },
              { icon: Palette, title: 'Color & Contrast', desc: 'Creating visual clarity, setting emotional context, and ensuring accessibility.' },
              { icon: Columns, title: 'Spacing & Layout', desc: 'Organizing content with purposeful whitespace to create breathing room and balance.' },
              { icon: Eye, title: 'Accessibility', desc: 'Designing inclusive interfaces that accommodate users with different abilities.' },
              { icon: MousePointerClick, title: 'Feedback & Interaction', desc: 'Making interface responses immediate, understandable, and predictable.' }
            ].map((principle, i) => (
              <div key={i} className="rounded-2xl border border-white/5 bg-[#18182b]/60 p-8 hover:border-[#19c5c3]/30 transition-colors">
                <principle.icon className="mb-4 h-8 w-8 text-[#19c5c3]" />
                <h3 className="mb-3 text-lg font-bold text-white">{principle.title}</h3>
                <p className="text-sm text-[#a8a2b5] leading-relaxed">{principle.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 04 — My UI Design Process */}
        <section className="mb-32">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">My Design Workflow</h2>
            <p className="mx-auto max-w-2xl text-lg text-[#ccc3d8]">
              From initial wireframes to developer-ready specifications, my process is systematic and highly iterative.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            {[
              { num: '01', title: 'Requirements & Architecture', desc: 'Understanding product goals, organizing content, and defining navigation structures before designing.' },
              { num: '02', title: 'Wireframing', desc: 'Establishing layout, content placement, and functional structure through low-fidelity sketches.' },
              { num: '03', title: 'Visual Direction', desc: 'Defining typography, color palettes, spacing systems, and the overall design language.' },
              { num: '04', title: 'High-Fidelity UI', desc: 'Transforming structural wireframes into polished, detailed, and pixel-perfect interfaces.' },
              { num: '05', title: 'Design Systems', desc: 'Creating reusable components, variants, and design tokens for scalable consistency.' },
              { num: '06', title: 'Prototyping & Handoff', desc: 'Connecting screens to demonstrate flows and preparing heavily documented specs for developers.' }
            ].map((step, index) => (
              <div key={index} className="flex gap-6 rounded-2xl border border-[#7c3aed]/10 bg-[#1e1b4b]/20 p-6">
                <div className="flex text-3xl font-extrabold text-[#7c3aed]/30">{step.num}</div>
                <div>
                  <h3 className="mb-2 text-xl font-bold text-white">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-[#ccc3d8]">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 05 — Design Systems & Components */}
        <section className="mb-32">
          <div className="rounded-3xl border border-[#7c3aed]/20 bg-[#121221] p-8 sm:p-12 lg:flex lg:gap-12 lg:items-center">
            <div className="lg:w-1/2">
              <h2 className="mb-6 text-3xl font-bold text-white">Design Systems & Components</h2>
              <p className="mb-6 text-lg text-[#ccc3d8] leading-relaxed">
                I do not design isolated screens; I build scalable design systems. A robust design system serves as the single source of truth for both design and engineering teams.
              </p>
              <ul className="mb-8 space-y-3 text-[#a8a2b5]">
                <li><strong className="text-white">Tokens:</strong> Centralized typography scales, color palettes, and spacing rules.</li>
                <li><strong className="text-white">Components:</strong> Reusable buttons, inputs, and cards built with Figma Auto Layout.</li>
                <li><strong className="text-white">Variants:</strong> Defined hover, active, disabled, and error states for every element.</li>
              </ul>
              <div className="inline-flex items-center gap-2 rounded-lg bg-[#7c3aed]/20 px-4 py-2 text-sm font-semibold text-[#d2bbff]">
                <Component className="h-4 w-4" /> Component-Driven Architecture
              </div>
            </div>
            <div className="mt-10 lg:mt-0 lg:w-1/2 rounded-2xl border border-white/10 bg-[#18182b] p-6 shadow-2xl">
              {/* Abstract Design System Visual */}
              <div className="space-y-4">
                <div className="h-8 w-1/3 rounded bg-gradient-to-r from-[#7c3aed] to-[#3626ce]" />
                <div className="flex gap-4">
                  <div className="h-10 w-24 rounded-full bg-[#19c5c3] shadow-[0_0_15px_rgba(25,197,195,0.4)]" />
                  <div className="h-10 w-24 rounded-full border border-white/20 bg-transparent" />
                </div>
                <div className="grid grid-cols-4 gap-2 pt-4 border-t border-white/10">
                  <div className="h-12 rounded bg-[#7c3aed]" />
                  <div className="h-12 rounded bg-[#3626ce]" />
                  <div className="h-12 rounded bg-[#19c5c3]" />
                  <div className="h-12 rounded bg-[#e3e0f7]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 06 — Responsive & Accessible Design */}
        <section className="mb-32">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="order-2 lg:order-1 flex justify-center gap-4">
              <div className="flex flex-col items-center gap-2">
                <MonitorSmartphone className="h-16 w-16 text-[#ccc3d8]" />
                <span className="text-xs uppercase tracking-wider text-[#a8a2b5]">Adaptive</span>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="mb-6 text-3xl font-bold text-white">Responsive & Accessible</h2>
              <p className="mb-6 text-lg text-[#ccc3d8] leading-relaxed">
                An interface must function flawlessly across every device—from 4K desktop monitors to small mobile screens. I utilize flexible grids and responsive layouts to ensure visual consistency everywhere.
              </p>
              <p className="text-lg text-[#ccc3d8] leading-relaxed">
                Furthermore, I design with WCAG accessibility guidelines in mind. This means ensuring proper color contrast ratios, legible typography sizing, and touch-friendly interaction targets so that the product is inclusive for everyone.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 07 — Prototyping & Micro-interactions */}
        <section className="mb-32 text-center">
          <h2 className="mb-6 text-3xl font-bold text-white">Prototyping & Micro-interactions</h2>
          <p className="mx-auto max-w-3xl text-lg text-[#ccc3d8] leading-relaxed mb-12">
            Static screens can't convey the feel of a digital product. I build interactive prototypes to demonstrate user flows, navigation transitions, and purposeful micro-interactions like hover effects and loading states. This brings the design to life and clarifies intent before development begins.
          </p>
        </section>

        {/* SECTION 08 — UI Design Deliverables */}
        <section className="mb-32">
          <h2 className="mb-10 text-3xl font-bold text-white text-center">Design Deliverables</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'High-Fidelity Screens', desc: 'Pixel-perfect UI ready for implementation.' },
              { title: 'Responsive Layouts', desc: 'Desktop, tablet, and mobile variations.' },
              { title: 'Design System Library', desc: 'Figma files with organized tokens and components.' },
              { title: 'Interactive Prototypes', desc: 'Clickable models demonstrating complex flows.' },
              { title: 'Developer Handoff Specs', desc: 'Detailed annotations on spacing, behavior, and CSS.' },
              { title: 'Information Architecture', desc: 'Sitemaps and structured navigation logic.' }
            ].map((item, i) => (
              <div key={i} className="rounded-2xl border border-white/5 bg-[#18182b]/40 p-6 flex items-start gap-4 hover:bg-[#18182b]/80 transition-colors">
                <Code2 className="h-6 w-6 text-[#19c5c3] shrink-0" />
                <div>
                  <h3 className="mb-1 font-bold text-white">{item.title}</h3>
                  <p className="text-xs text-[#a8a2b5] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION - My Thoughts */}
        <section className="mb-32">
          <div className="rounded-3xl border border-[#19c5c3]/30 bg-[#0b1835]/40 p-8 sm:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 h-full w-2/3 sm:w-1/2 opacity-20 sm:opacity-30 pointer-events-none [mask-image:linear-gradient(to_left,black,transparent)]">
              <img src="/images/ui_design_anime.jpg" alt="UI Design Anime Character" className="h-full w-full object-cover object-center" />
            </div>
            <div className="relative z-10">
              <div className="mb-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#a7b4ff]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#19c5c3]" />
                Personal Note
              </div>
              <h2 className="mb-6 text-3xl font-bold text-white">My Thoughts on UI Design</h2>
              <div className="max-w-3xl relative mt-8">
                <span className="absolute -left-4 -top-8 text-8xl text-[#19c5c3]/50 font-serif leading-none" aria-hidden="true">&ldquo;</span>
                <div className="space-y-6 text-xl leading-relaxed text-[#e3e0f7] italic relative z-10 pl-6 sm:pl-10 border-l-2 border-[#19c5c3]/30">
                  <p>
                    I strongly believe that aesthetics and usability are not competing forces—they are two sides of the same coin. A beautiful interface that is difficult to use is just a painting, while an ugly interface that works perfectly still fails to build trust.
                  </p>
                  <p>
                    My goal with UI design is to create a sense of inevitability. When a user looks at a screen I've designed, the next action should feel obvious, natural, and effortless. Good UI design respects the user's time and cognitive load by removing friction and replacing it with clarity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 09 & 10 — Why It Matters & CTA */}
        <section className="mb-24 rounded-3xl bg-gradient-to-br from-[#121221] to-[#1e1b4b] border border-[#7c3aed]/20 p-8 sm:p-16 text-center">
          <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">Why Good UI Design Matters</h2>
          <p className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-[#ccc3d8]">
            A premium interface drastically lowers cognitive load, builds instant credibility, and ensures users can accomplish their goals without frustration. When aesthetics and usability are balanced perfectly, the interface disappears, and the user experience takes over.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={onBack}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#19c5c3] to-[#3626ce] px-8 py-4 text-sm font-bold text-white transition-all hover:shadow-[0_0_30px_rgba(25,197,195,0.4)]"
            >
              View UI Design Case Studies
            </button>
            {onExploreUXResearch && (
              <button 
                onClick={onExploreUXResearch}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-bold text-white transition-all hover:bg-white/10"
              >
                Explore UX Research Process <ChevronRight className="h-4 w-4" />
              </button>
            )}
          </div>
        </section>

      </article>
    </div>
  );
};
