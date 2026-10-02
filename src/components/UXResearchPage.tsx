import React from 'react';
import { ArrowLeft, Search, Target, Users, BarChart, CheckCircle2, ChevronRight, FileText, Zap, Compass, LayoutTemplate, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';

interface UXResearchPageProps {
  onBack: () => void;
  onExploreUIDesign?: () => void;
}

export const UXResearchPage: React.FC<UXResearchPageProps> = ({ onBack, onExploreUIDesign }) => {
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
              UX Research
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
            className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#7c3aed] to-[#3626ce] shadow-[0_0_30px_rgba(124,58,237,0.4)]"
          >
            <Search className="h-8 w-8 text-white" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-6 text-4xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl"
          >
            UX Research
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto max-w-3xl text-xl font-medium leading-relaxed text-[#c4b5fd] sm:text-2xl"
          >
            Understanding people, uncovering problems, and turning insights into meaningful product experiences.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-16 w-full overflow-hidden rounded-3xl border border-white/10 shadow-[0_0_50px_rgba(124,58,237,0.15)] relative aspect-[21/9]"
          >
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
              alt="UX Research Process" 
              className="h-full w-full object-cover"
              fetchPriority="high"
              decoding="sync"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121221] via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-6 left-6 max-w-xl text-left">
              <p className="text-sm font-semibold uppercase tracking-wider text-[#a7b4ff] mb-2">The Foundation</p>
              <p className="text-lg text-white">Understanding users must always precede designing solutions.</p>
            </div>
          </motion.div>
        </section>

        {/* SECTION 02 — What is UX Research? */}
        <section className="mb-32 grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#7c3aed]">
              <Compass className="h-4 w-4" />
              <span>Core Philosophy</span>
            </div>
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">What is UX Research?</h2>
            <p className="mb-6 text-lg leading-relaxed text-[#ccc3d8]">
              User Experience Research isn't just about asking people what they want. It is the systematic investigation of user behaviors, needs, and motivations through observation techniques, task analysis, and other feedback methodologies.
            </p>
            <p className="mb-6 text-lg leading-relaxed text-[#ccc3d8]">
              While many teams rush to build solutions based on assumptions, proper research identifies the <em>actual</em> problems that need solving. It bridges the gap between what businesses want to achieve, what technology can support, and what users genuinely need.
            </p>
            <div className="rounded-2xl border border-[#7c3aed]/20 bg-[#7c3aed]/5 p-6">
              <p className="text-sm font-medium italic text-[#d2bbff]">
                "If I had an hour to solve a problem, I'd spend 55 minutes thinking about the problem and 5 minutes thinking about solutions." — Albert Einstein
              </p>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { title: 'Removes Guesswork', text: 'Replaces internal debates with objective, user-driven data.' },
              { title: 'Identifies Real Pain', text: 'Finds the actual friction points causing drop-offs.' },
              { title: 'De-risks Investment', text: 'Ensures we build the right thing before coding starts.' },
              { title: 'Uncovers Opportunity', text: 'Reveals unmet needs that competitors are missing.' }
            ].map((item, i) => (
              <div key={i} className="rounded-2xl border border-white/5 bg-[#18182b]/60 p-6 backdrop-blur-sm">
                <Target className="mb-4 h-6 w-6 text-[#a7b4ff]" />
                <h3 className="mb-2 font-bold text-white">{item.title}</h3>
                <p className="text-sm leading-relaxed text-[#a8a2b5]">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 03 — Research Methodologies */}
        <section className="mb-32">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">Research Methodologies</h2>
            <p className="mx-auto max-w-2xl text-lg text-[#ccc3d8]">
              A balanced research strategy requires both qualitative depth and quantitative scale. Here is how I approach gathering comprehensive insights.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Qualitative */}
            <div className="rounded-3xl border border-[#ffb0cd]/20 bg-gradient-to-br from-[#ffb0cd]/5 to-transparent p-8 sm:p-10">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#ffb0cd]/20 text-[#ffb0cd]">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-white">Qualitative Research</h3>
              <p className="mb-8 text-[#ccc3d8]">Explores the "Why" and "How". This helps us understand underlying motivations, frustrations, and mental models.</p>
              <ul className="space-y-4">
                {[
                  ['User Interviews', 'Deep-dive conversations to uncover attitudes and experiences.'],
                  ['Contextual Inquiry', 'Observing users in their natural environment.'],
                  ['Usability Testing', 'Evaluating how easily users can complete specific tasks.'],
                  ['Card Sorting', 'Understanding how users categorize information.']
                ].map(([title, desc], i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-[#ffb0cd]" />
                    <div>
                      <strong className="block text-white">{title}</strong>
                      <span className="text-sm text-[#a8a2b5]">{desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quantitative */}
            <div className="rounded-3xl border border-[#34d399]/20 bg-gradient-to-br from-[#34d399]/5 to-transparent p-8 sm:p-10">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#34d399]/20 text-[#34d399]">
                <BarChart className="h-6 w-6" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-white">Quantitative Research</h3>
              <p className="mb-8 text-[#ccc3d8]">Measures the "What" and "How Many". This provides statistical confidence and tracks behavior at scale.</p>
              <ul className="space-y-4">
                {[
                  ['Surveys & Questionnaires', 'Gathering structured feedback from a large user base.'],
                  ['Analytics Review', 'Analyzing drop-offs, user flows, and engagement metrics.'],
                  ['Heatmaps & Tracking', 'Visualizing where users click, move, and scroll.'],
                  ['A/B Testing', 'Comparing performance between different design variations.']
                ].map(([title, desc], i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-[#34d399]" />
                    <div>
                      <strong className="block text-white">{title}</strong>
                      <span className="text-sm text-[#a8a2b5]">{desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 04 — My UX Research Process */}
        <section className="mb-32">
          <div className="mb-12">
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">My Research Process</h2>
            <p className="max-w-2xl text-lg text-[#ccc3d8]">
              A structured, repeatable methodology ensures that insights are reliable, actionable, and directly tied to business outcomes.
            </p>
          </div>

          <div className="relative space-y-8 before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[#7c3aed] before:via-[#3626ce] before:to-transparent">
            {[
              {
                step: '01',
                title: 'Discovery & Problem Definition',
                desc: 'I start by aligning with stakeholders to understand business objectives, existing challenges, and formulating core research questions.'
              },
              {
                step: '02',
                title: 'Research Planning',
                desc: 'Defining target user segments, selecting appropriate methodologies, drafting interview scripts, and establishing clear success metrics.'
              },
              {
                step: '03',
                title: 'User Research & Data Collection',
                desc: 'Conducting the actual research—running usability tests, interviewing participants, deploying surveys, and analyzing behavioral data.'
              },
              {
                step: '04',
                title: 'Analysis & Synthesis',
                desc: 'Processing raw data through affinity mapping to identify recurring patterns, group observations, and extract meaningful insights.'
              },
              {
                step: '05',
                title: 'User Personas & Journey Mapping',
                desc: 'Developing research-backed personas and mapping pain points across the end-to-end user experience.'
              },
              {
                step: '06',
                title: 'Recommendations & Validation',
                desc: 'Translating findings into actionable design recommendations and validating assumptions before moving into UI design.'
              }
            ].map((item, index) => (
              <div key={item.step} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-4 border-[#121221] bg-gradient-to-br from-[#7c3aed] to-[#3626ce] font-bold text-white shadow-[0_0_15px_rgba(124,58,237,0.5)] md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 ml-0 md:ml-0">
                  {item.step}
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] rounded-2xl border border-white/5 bg-[#18182b]/80 p-6 backdrop-blur-sm transition-all hover:border-[#7c3aed]/40 hover:bg-[#18182b] ml-4 md:ml-0">
                  <h3 className="mb-2 text-xl font-bold text-white">{item.title}</h3>
                  <p className="text-[#a8a2b5] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 05 — Research Techniques & Tools */}
        <section className="mb-32 rounded-3xl border border-[#7c3aed]/20 bg-gradient-to-br from-[#1e1b4b]/40 to-[#121221] p-8 sm:p-12">
          <h2 className="mb-10 text-3xl font-bold text-white text-center">Techniques & Tools</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { tool: 'Figma & FigJam', desc: 'For collaborative research documentation, affinity mapping, and visualizing user journeys.' },
              { tool: 'Google Analytics', desc: 'Extracting behavioral insights, drop-off rates, and quantitative user patterns.' },
              { tool: 'Heatmaps & Sessions', desc: 'Using tools like Hotjar to observe real interaction patterns and scroll depth.' },
              { tool: 'Surveys & Forms', desc: 'Deploying structured questionnaires via Typeform or Google Forms for scale.' },
              { tool: 'User Interviews', desc: 'Recording and analyzing qualitative feedback using structured interview scripts.' },
              { tool: 'Competitor Benchmarking', desc: 'Evaluating market alternatives to identify industry standards and opportunities.' }
            ].map((item, i) => (
              <div key={i} className="rounded-2xl bg-[#121221] p-6 border border-white/5">
                <h3 className="mb-2 text-lg font-bold text-[#c4b5fd]">{item.tool}</h3>
                <p className="text-sm text-[#a8a2b5] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 06 — Research Deliverables */}
        <section className="mb-32">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">Research Deliverables</h2>
            <p className="mx-auto max-w-2xl text-lg text-[#ccc3d8]">
              The outputs of a research engagement are tangible, actionable artifacts that guide the entire product team.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: FileText, title: 'Research Plans', desc: 'Structured methodologies and goals.' },
              { icon: Users, title: 'User Personas', desc: 'Data-backed archetypes of target users.' },
              { icon: Compass, title: 'Journey Maps', desc: 'Visualizing the end-to-end experience.' },
              { icon: MessageSquare, title: 'Empathy Maps', desc: 'Understanding user thoughts and feelings.' },
              { icon: Zap, title: 'Pain Point Analysis', desc: 'Prioritized list of critical friction areas.' },
              { icon: Target, title: 'Usability Reports', desc: 'Findings from direct user testing.' },
              { icon: LayoutTemplate, title: 'Wireframe Concepts', desc: 'Early structural solutions to tested problems.' },
              { icon: CheckCircle2, title: 'Actionable Insights', desc: 'Direct recommendations for UI design.' }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-start rounded-2xl border border-white/5 bg-[#18182b]/40 p-6 transition-all hover:bg-[#18182b]/80">
                <item.icon className="mb-4 h-6 w-6 text-[#8b7ffc]" />
                <h3 className="mb-2 font-bold text-white">{item.title}</h3>
                <p className="text-xs text-[#a8a2b5] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 07 — Why UX Research Matters */}
        <section className="mb-32">
          <div className="rounded-3xl bg-gradient-to-r from-[#7c3aed]/10 to-[#3626ce]/10 border border-[#7c3aed]/20 p-8 sm:p-16 text-center">
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">The Bottom Line Impact</h2>
            <p className="mx-auto mb-12 max-w-3xl text-lg leading-relaxed text-[#ccc3d8]">
              Skipping research to save time is a false economy. UX research prevents the expensive mistake of building a product perfectly, only to realize it's the wrong product. It aligns product decisions with actual user needs, improves retention, and uncovers opportunities for genuine innovation.
            </p>
            <div className="grid gap-6 sm:grid-cols-3">
              <div>
                <p className="text-4xl font-extrabold text-[#d2bbff] mb-2">100x</p>
                <p className="text-sm text-[#a8a2b5]">Cheaper to fix problems during research than after development</p>
              </div>
              <div>
                <p className="text-4xl font-extrabold text-[#d2bbff] mb-2">ROI</p>
                <p className="text-sm text-[#a8a2b5]">Directly improves conversion and customer retention</p>
              </div>
              <div>
                <p className="text-4xl font-extrabold text-[#d2bbff] mb-2">Clarity</p>
                <p className="text-sm text-[#a8a2b5]">Aligns stakeholders around objective user data</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION - My Thoughts */}
        <section className="mb-32">
          <div className="rounded-3xl border border-[#7c3aed]/30 bg-[#1e1b4b]/40 p-8 sm:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 h-full w-2/3 sm:w-1/2 opacity-20 sm:opacity-30 pointer-events-none [mask-image:linear-gradient(to_left,black,transparent)]">
              <img src="/images/ux_research_anime.jpg" alt="UX Research Anime Character" className="h-full w-full object-cover object-center" />
            </div>
            <div className="relative z-10">
              <div className="mb-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#d2bbff]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#7c3aed]" />
                Personal Note
              </div>
              <h2 className="mb-6 text-3xl font-bold text-white">My Thoughts on Research</h2>
              <div className="max-w-3xl relative mt-8">
                <span className="absolute -left-4 -top-8 text-8xl text-[#7c3aed]/50 font-serif leading-none" aria-hidden="true">&ldquo;</span>
                <div className="space-y-6 text-xl leading-relaxed text-[#e3e0f7] italic relative z-10 pl-6 sm:pl-10 border-l-2 border-[#7c3aed]/30">
                  <p>
                    To me, UX Research is the most humbling part of the design process. It is the moment where assumptions are stripped away, and we are forced to confront reality. 
                  </p>
                  <p>
                    I've seen countless teams rush into Figma to design beautiful solutions for problems that don't actually exist. The true value of research isn't just in finding out what color a button should be—it's about discovering if the user even needs the button in the first place. When done right, research transforms design from a guessing game into a targeted strategy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 08 — Final Takeaway / CTA */}
        <section className="text-center pb-12">
          <h2 className="mb-6 text-3xl font-bold text-white">Ready to turn insights into interfaces?</h2>
          <p className="mb-8 text-lg text-[#ccc3d8]">
            Great research sets the foundation, but great UI design brings it to life.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {onExploreUIDesign && (
              <button 
                onClick={onExploreUIDesign}
                className="inline-flex items-center gap-2 rounded-full bg-[#7c3aed] px-8 py-4 text-sm font-bold text-white transition-all hover:bg-[#6d28d9] hover:shadow-[0_0_30px_rgba(124,58,237,0.4)]"
              >
                Explore My UI Design Process
                <ChevronRight className="h-4 w-4" />
              </button>
            )}
            <button 
              onClick={onBack}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-bold text-white transition-all hover:bg-white/10"
            >
              View Case Studies
            </button>
          </div>
        </section>

      </article>
    </div>
  );
};
