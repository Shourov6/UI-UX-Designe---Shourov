import React from 'react';
import { ArrowLeft, Rocket, Briefcase, Cpu, Code2, PenTool, Workflow, Target, FileCheck2, Lightbulb, Users, CheckCircle2, ChevronRight, Layers, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';

interface ProductDesignPageProps {
  onBack: () => void;
  onExploreUXResearch?: () => void;
  onExploreUIDesign?: () => void;
}

export const ProductDesignPage: React.FC<ProductDesignPageProps> = ({ onBack, onExploreUXResearch, onExploreUIDesign }) => {
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
              Product Design
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
            className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#f59e0b] to-[#ea580c] shadow-[0_0_30px_rgba(245,158,11,0.4)]"
          >
            <Rocket className="h-8 w-8 text-white" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-6 text-4xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl"
          >
            Product Design
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto max-w-3xl text-xl font-medium leading-relaxed text-[#fcd34d] sm:text-2xl"
          >
            End-to-end strategic design linking business goals, technical constraints, and user needs.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-16 w-full overflow-hidden rounded-3xl border border-white/10 shadow-[0_0_50px_rgba(245,158,11,0.15)] relative aspect-[21/9]"
          >
            <img 
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop" 
              alt="Product Design Strategy" 
              className="h-full w-full object-cover"
              fetchPriority="high"
              decoding="sync"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121221] via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-6 left-6 max-w-xl text-left">
              <p className="text-sm font-semibold uppercase tracking-wider text-[#fcd34d] mb-2">The Big Picture</p>
              <p className="text-lg text-white">Bringing a digital product to life from ambiguity to launch.</p>
            </div>
          </motion.div>
        </section>

        {/* SECTION 02 — The Intersection */}
        <section className="mb-32">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">The Product Intersection</h2>
            <p className="mx-auto max-w-3xl text-lg text-[#ccc3d8] leading-relaxed">
              Unlike traditional design roles that focus on a single piece of the puzzle, Product Design looks at the entire lifecycle. It requires operating at the critical intersection of three domains.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-blue-500/20 bg-gradient-to-b from-blue-500/10 to-transparent p-8 text-center hover:border-blue-500/40 transition-all">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/20 text-blue-400">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-white">Desirability</h3>
              <p className="text-sm text-[#a8a2b5]">What do users actually want and need? (UX Research & Empathy)</p>
            </div>
            <div className="rounded-2xl border border-amber-500/20 bg-gradient-to-b from-amber-500/10 to-transparent p-8 text-center hover:border-amber-500/40 transition-all">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-amber-500/20 text-amber-400">
                <Briefcase className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-white">Viability</h3>
              <p className="text-sm text-[#a8a2b5]">Does this solve a core business problem and drive revenue? (Strategy)</p>
            </div>
            <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-b from-emerald-500/10 to-transparent p-8 text-center hover:border-emerald-500/40 transition-all">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                <Cpu className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-white">Feasibility</h3>
              <p className="text-sm text-[#a8a2b5]">Can engineering realistically build and scale this? (Technical Specs)</p>
            </div>
          </div>
        </section>

        {/* SECTION 03 — The Holistic Process */}
        <section className="mb-32">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">The End-to-End Process</h2>
              <p className="mb-6 text-lg leading-relaxed text-[#ccc3d8]">
                A successful product is never designed in a silo. My process integrates continuous feedback loops with stakeholders, engineering teams, and end-users to ensure we are building the right thing, the right way.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f59e0b]/20 text-[#f59e0b] font-bold">1</div>
                  <div>
                    <h4 className="text-lg font-bold text-white">Strategy & MVP Scoping</h4>
                    <p className="text-sm text-[#a8a2b5] leading-relaxed">Aligning on KPIs, defining the core value proposition, and ruthlessly trimming features to launch a lean Minimum Viable Product.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#7c3aed]/20 text-[#c4b5fd] font-bold">2</div>
                  <div>
                    <h4 className="text-lg font-bold text-white">Research & Discovery</h4>
                    <p className="text-sm text-[#a8a2b5] leading-relaxed">Validating assumptions through user interviews and market analysis before writing any code.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#19c5c3]/20 text-[#19c5c3] font-bold">3</div>
                  <div>
                    <h4 className="text-lg font-bold text-white">UI/UX Execution</h4>
                    <p className="text-sm text-[#a8a2b5] leading-relaxed">Mapping user journeys, building wireframes, creating design systems, and polishing the final interface.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#34d399]/20 text-[#34d399] font-bold">4</div>
                  <div>
                    <h4 className="text-lg font-bold text-white">Handoff & Iteration</h4>
                    <p className="text-sm text-[#a8a2b5] leading-relaxed">Working side-by-side with developers, conducting Design QA, and tracking post-launch analytics.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative rounded-3xl border border-white/5 bg-[#18182b] p-8 shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10"><Workflow className="w-48 h-48 text-white" /></div>
              <h3 className="mb-6 text-xl font-bold text-white relative z-10">From Idea to Reality</h3>
              <div className="space-y-4 relative z-10">
                <div className="rounded-xl border border-white/10 bg-[#121221] p-4 flex items-center gap-4">
                  <Lightbulb className="text-amber-400 h-6 w-6" />
                  <div className="flex-1">
                    <div className="h-2 w-1/3 bg-white/20 rounded mb-2"></div>
                    <div className="h-2 w-2/3 bg-white/10 rounded"></div>
                  </div>
                </div>
                <div className="flex justify-center"><div className="h-6 w-px bg-white/20"></div></div>
                <div className="rounded-xl border border-white/10 bg-[#121221] p-4 flex items-center gap-4">
                  <PenTool className="text-purple-400 h-6 w-6" />
                  <div className="flex-1">
                    <div className="h-2 w-1/2 bg-white/20 rounded mb-2"></div>
                    <div className="h-2 w-3/4 bg-white/10 rounded"></div>
                  </div>
                </div>
                <div className="flex justify-center"><div className="h-6 w-px bg-white/20"></div></div>
                <div className="rounded-xl border border-white/10 bg-[#121221] p-4 flex items-center gap-4">
                  <Code2 className="text-emerald-400 h-6 w-6" />
                  <div className="flex-1">
                    <div className="h-2 w-1/4 bg-white/20 rounded mb-2"></div>
                    <div className="h-2 w-1/2 bg-white/10 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 04 — Product Deliverables */}
        <section className="mb-32">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">Key Artifacts & Deliverables</h2>
            <p className="mx-auto max-w-2xl text-lg text-[#ccc3d8]">
              Product Design spans the entire lifecycle, producing strategic and tactical assets.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Target, title: 'Product Roadmaps', desc: 'Strategic feature prioritization and MVP scoping.' },
              { icon: Layers, title: 'User Stories', desc: 'Translating needs into actionable development tasks.' },
              { icon: Workflow, title: 'Process Flows', desc: 'Mapping complex system architecture and logic.' },
              { icon: FileCheck2, title: 'Design Specs', desc: 'Comprehensive handoff documentation for QA.' }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-start rounded-2xl border border-white/5 bg-[#18182b]/40 p-6 transition-all hover:bg-[#18182b]/80">
                <item.icon className="mb-4 h-6 w-6 text-[#fcd34d]" />
                <h3 className="mb-2 font-bold text-white">{item.title}</h3>
                <p className="text-xs text-[#a8a2b5] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 05 — Why Product Design Matters */}
        <section className="mb-32">
          <div className="rounded-3xl border border-[#f59e0b]/20 bg-gradient-to-br from-[#1e1b4b]/60 to-[#121221] p-8 sm:p-12 lg:p-16 text-center">
            <h2 className="mb-8 text-3xl font-bold text-white sm:text-4xl">The Business Value</h2>
            <div className="grid gap-8 sm:grid-cols-3">
              <div className="flex flex-col items-center">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white/5 border border-white/10">
                  <Rocket className="h-6 w-6 text-[#fcd34d]" />
                </div>
                <h3 className="mb-2 font-bold text-white">Speed to Market</h3>
                <p className="text-sm text-[#a8a2b5] leading-relaxed">Reduces development waste by aligning cross-functional teams early and validating through prototypes.</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white/5 border border-white/10">
                  <CheckCircle2 className="h-6 w-6 text-[#fcd34d]" />
                </div>
                <h3 className="mb-2 font-bold text-white">De-risks Development</h3>
                <p className="text-sm text-[#a8a2b5] leading-relaxed">Ensures we are building the right thing before writing a single expensive line of code.</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white/5 border border-white/10">
                  <Briefcase className="h-6 w-6 text-[#fcd34d]" />
                </div>
                <h3 className="mb-2 font-bold text-white">Drives Metrics</h3>
                <p className="text-sm text-[#a8a2b5] leading-relaxed">Directly connects interface improvements to key business KPIs like retention and conversion.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION - My Thoughts */}
        <section className="mb-32">
          <div className="rounded-3xl border border-[#f59e0b]/30 bg-[#1e1b4b]/40 p-8 sm:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 h-full w-2/3 sm:w-1/2 opacity-20 sm:opacity-30 pointer-events-none [mask-image:linear-gradient(to_left,black,transparent)]">
              <img src="/images/product_design_anime.jpg" alt="Product Design Anime Character" className="h-full w-full object-cover object-center" />
            </div>
            <div className="relative z-10">
              <div className="mb-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#fcd34d]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#f59e0b]" />
                Personal Note
              </div>
              <h2 className="mb-6 text-3xl font-bold text-white">My Thoughts on Product Design</h2>
              <div className="max-w-3xl relative mt-8">
                <span className="absolute -left-4 -top-8 text-8xl text-[#f59e0b]/50 font-serif leading-none" aria-hidden="true">&ldquo;</span>
                <div className="space-y-6 text-xl leading-relaxed text-[#e3e0f7] italic relative z-10 pl-6 sm:pl-10 border-l-2 border-[#f59e0b]/30">
                  <p>
                    Product design is ultimately about trade-offs. It's the art of balancing what users desperately want with what the business needs to survive, and what engineering can realistically build by next quarter.
                  </p>
                  <p>
                    I've learned that the best product designers aren't just pixel-pushers; they are facilitators. We translate complex business requirements into human-centered experiences. A great product isn't one that has every feature imaginable—it's one that solves a specific problem so elegantly that users can't imagine going back to the old way of doing things.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 06 — CTA */}
        <section className="text-center pb-12">
          <h2 className="mb-6 text-3xl font-bold text-white">See the process in action</h2>
          <p className="mb-8 text-lg text-[#ccc3d8]">
            Product design is built upon strong foundations of research and interface design.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {onExploreUXResearch && (
              <button 
                onClick={onExploreUXResearch}
                className="inline-flex items-center gap-2 rounded-full bg-[#7c3aed] px-8 py-4 text-sm font-bold text-white transition-all hover:bg-[#6d28d9] hover:shadow-[0_0_30px_rgba(124,58,237,0.4)]"
              >
                Explore UX Research <ChevronRight className="h-4 w-4" />
              </button>
            )}
            {onExploreUIDesign && (
              <button 
                onClick={onExploreUIDesign}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-bold text-white transition-all hover:bg-white/10"
              >
                Explore UI Design <ChevronRight className="h-4 w-4" />
              </button>
            )}
          </div>
        </section>

      </article>
    </div>
  );
};
