import React from 'react';
import { ArrowLeft, Briefcase, Clock, Target, Zap, Sparkles, ExternalLink, ChevronRight, BookOpen, Lightbulb, BarChart3, ArrowRight } from 'lucide-react';
import { type Project } from '../data/projects';

interface CaseStudyPageProps {
  project: Project;
  onBack: () => void;
}

export const CaseStudyPage: React.FC<CaseStudyPageProps> = ({ project, onBack }) => {
  const cs = project.caseStudy;

  return (
    <div className="relative z-10 min-h-screen">
      {/* Sticky Back Bar */}
      <div className="sticky top-0 z-50 border-b border-white/5 bg-[#121221]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
          <button
            onClick={onBack}
            className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-[#ccc3d8] transition-all hover:bg-white/10 hover:text-white backdrop-blur-md"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back</span>
          </button>
          <div className="flex items-center gap-2">
            <span className="rounded-full border border-[#7c3aed]/30 bg-[#7c3aed]/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#c4b5fd]">
              Case Study
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#d2bbff]">
              {project.category === 'uiux' ? 'UI/UX' : 'CMS'}
            </span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
        {/* Hero Section */}
        <section className="mb-16">
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 text-sm text-[#8b7ffc]">
              <Briefcase className="h-4 w-4" />
              <span className="font-medium">{cs.role}</span>
            </div>
            <span className="text-[#4a4455]">•</span>
            <div className="flex items-center gap-2 text-sm text-[#8b7ffc]">
              <Clock className="h-4 w-4" />
              <span className="font-medium">{cs.duration}</span>
            </div>
          </div>
          <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            {project.title}
          </h1>
          <p className="mb-8 max-w-3xl text-lg leading-relaxed text-[#a8a2b5]">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="mb-8 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-[#d2bbff]"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Hero Image */}
          <div className="overflow-hidden rounded-2xl border border-[#7c3aed]/20 shadow-[0_0_40px_rgba(124,58,237,0.15)]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto"
              referrerPolicy="no-referrer"
              fetchPriority="high"
              decoding="sync"
            />
          </div>
        </section>

        {/* Quick Stats */}
        <section className="mb-16 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {cs.impactMetrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-2xl border border-white/5 bg-[#18182b]/60 p-6 backdrop-blur-sm"
            >
              <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-[#8b7ffc]/70">{metric.label}</p>
              <p className="mb-2 text-3xl font-extrabold text-[#d2bbff]">{metric.value}</p>
              <p className="text-sm text-[#a8a2b5]">{metric.description}</p>
            </div>
          ))}
        </section>

        {/* Problem Statement */}
        <section className="mb-16">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-950/30 border border-red-500/20">
              <Target className="h-5 w-5 text-[#ffb0cd]" />
            </div>
            <h2 className="text-2xl font-bold text-white">The Problem</h2>
          </div>
          <div className="rounded-2xl border border-red-500/10 bg-red-950/10 p-6 sm:p-8">
            <p className="text-base leading-relaxed text-[#ccc3d8]">{cs.problemStatement}</p>
          </div>
        </section>

        {/* Challenge Highlight */}
        <section className="mb-16">
          <div className="rounded-2xl border border-[#ffb0cd]/15 bg-[#1e1b4b]/20 p-6 sm:p-8">
            <div className="mb-3 flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-[#ffb0cd]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#ffb0cd]">Key Challenge</span>
            </div>
            <p className="text-base leading-relaxed text-[#ccc3d8]">{cs.challenge}</p>
          </div>
        </section>

        {/* Solution */}
        <section className="mb-16">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-950/30 border border-[#7c3aed]/30">
              <Lightbulb className="h-5 w-5 text-[#c4b5fd]" />
            </div>
            <h2 className="text-2xl font-bold text-white">The Solution</h2>
          </div>
          <div className="rounded-2xl border border-[#7c3aed]/15 bg-[#1e1b4b]/15 p-6 sm:p-8">
            <p className="mb-6 text-base leading-relaxed text-[#ccc3d8]">{cs.solutionApproach}</p>
            <div className="flex flex-wrap gap-2">
              {cs.keyFeatures.map((feature) => (
                <span
                  key={feature}
                  className="rounded-full border border-[#7c3aed]/20 bg-[#7c3aed]/10 px-3 py-1.5 text-xs font-medium text-[#c4b5fd]"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Design Process */}
        <section className="mb-16">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1e1b4b]/50 border border-[#7c3aed]/20">
              <BookOpen className="h-5 w-5 text-[#8b7ffc]" />
            </div>
            <h2 className="text-2xl font-bold text-white">Design Process</h2>
          </div>
          <div className="space-y-6">
            {cs.processSteps.map((step, index) => (
              <div
                key={step.phase}
                className="group relative rounded-2xl border border-white/5 bg-[#18182b]/40 p-6 transition-all duration-300 hover:border-[#7c3aed]/30 hover:bg-[#18182b]/60"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
                  {/* Phase Number & Label */}
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#7c3aed] to-[#3626ce] text-lg font-bold text-white shadow-[0_0_15px_rgba(124,58,237,0.3)]">
                      {index + 1}
                    </div>
                  </div>
                  {/* Content */}
                  <div className="flex-grow">
                    <div className="mb-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#8b7ffc]">
                      {step.phase}
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-[#e3e0f7]">{step.title}</h3>
                    <p className="mb-4 text-sm leading-relaxed text-[#a8a2b5]">{step.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {step.deliverables.map((d) => (
                        <span
                          key={d}
                          className="rounded-lg border border-white/5 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-[#ccc3d8]"
                        >
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* User Flow Diagram */}
        <section className="mb-16">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-950/30 border border-emerald-500/20">
              <BarChart3 className="h-5 w-5 text-[#34d399]" />
            </div>
            <h2 className="text-2xl font-bold text-white">End-to-End User Flow</h2>
          </div>

          {/* Flow Diagram */}
          <div className="overflow-x-auto rounded-2xl border border-white/5 bg-[#18182b]/40 p-6 sm:p-8">
            <div className="flex min-w-max items-start gap-0">
              {cs.userFlow.map((flowStep, index) => (
                <React.Fragment key={flowStep.step}>
                  {/* Step Card */}
                  <div className="flex w-48 flex-shrink-0 flex-col items-center">
                    {/* Step Circle */}
                    <div className="relative mb-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#7c3aed] to-[#3626ce] text-lg font-bold text-white shadow-[0_0_25px_rgba(124,58,237,0.4)]">
                        {flowStep.step}
                      </div>
                      {/* Pulse ring */}
                      <div className="absolute inset-0 animate-ping rounded-full bg-[#7c3aed]/20" style={{ animationDuration: `${2 + index * 0.3}s` }} />
                    </div>
                    {/* Label */}
                    <h4 className="mb-2 text-center text-sm font-bold text-[#e3e0f7]">
                      {flowStep.label}
                    </h4>
                    {/* Description */}
                    <p className="text-center text-[11px] leading-relaxed text-[#a8a2b5]">
                      {flowStep.description}
                    </p>
                  </div>

                  {/* Connector Arrow */}
                  {index < cs.userFlow.length - 1 && (
                    <div className="flex flex-shrink-0 items-center self-center pt-0 -mt-14">
                      <div className="h-[2px] w-6 bg-gradient-to-r from-[#7c3aed] to-[#7c3aed]/40" />
                      <ChevronRight className="h-4 w-4 -ml-1 text-[#7c3aed]" />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Vertical Flow for Mobile */}
          <div className="mt-6 block sm:hidden space-y-4">
            {cs.userFlow.map((flowStep, index) => (
              <div key={`mobile-${flowStep.step}`} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#7c3aed] to-[#3626ce] text-sm font-bold text-white">
                    {flowStep.step}
                  </div>
                  {index < cs.userFlow.length - 1 && (
                    <div className="mt-2 h-full w-[2px] bg-gradient-to-b from-[#7c3aed]/40 to-transparent" />
                  )}
                </div>
                <div className="pb-4">
                  <h4 className="mb-1 text-sm font-bold text-[#e3e0f7]">{flowStep.label}</h4>
                  <p className="text-xs leading-relaxed text-[#a8a2b5]">{flowStep.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Outcome */}
        <section className="mb-16">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-950/30 border border-emerald-500/20">
              <Zap className="h-5 w-5 text-[#22c55e]" />
            </div>
            <h2 className="text-2xl font-bold text-white">Outcome & Impact</h2>
          </div>
          <div className="rounded-2xl border border-emerald-500/10 bg-emerald-950/10 p-6 sm:p-8">
            <p className="text-lg font-semibold leading-relaxed text-[#34d399]">{cs.outcome}</p>
          </div>
        </section>

        {/* Lessons Learned */}
        <section className="mb-16">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-950/30 border border-amber-500/20">
              <Lightbulb className="h-5 w-5 text-amber-400" />
            </div>
            <h2 className="text-2xl font-bold text-white">Lessons Learned</h2>
          </div>
          <div className="rounded-2xl border border-amber-500/10 bg-amber-950/10 p-6 sm:p-8">
            <p className="text-base leading-relaxed text-[#ccc3d8]">{cs.lessonsLearned}</p>
          </div>
        </section>

        {/* CTA Footer */}
        <section className="rounded-3xl border border-[#7c3aed]/20 bg-gradient-to-br from-[#1e1b4b]/60 to-[#121221] p-8 text-center sm:p-12">
          <h3 className="mb-3 text-2xl font-bold text-white">Interested in a similar project?</h3>
          <p className="mb-6 text-sm text-[#a8a2b5]">Let's discuss how I can help bring your vision to life.</p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            {project.link && project.link !== '#' && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#7c3aed] px-8 py-3.5 text-sm font-semibold text-white shadow-[0_0_25px_rgba(124,58,237,0.4)] transition-all hover:bg-[#6d28d9] hover:shadow-[0_0_35px_rgba(124,58,237,0.6)]"
              >
                <span>View Live Project</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
            <button
              onClick={onBack}
              className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-3.5 text-sm font-semibold text-[#ccc3d8] transition-all hover:bg-white/10 hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Projects</span>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};
