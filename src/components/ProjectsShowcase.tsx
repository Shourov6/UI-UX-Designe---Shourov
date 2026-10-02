import React, { useMemo, useState } from 'react';
import { ArrowUpRight, ExternalLink, Sparkles, ArrowRight, Briefcase, Clock, Target, Zap } from 'lucide-react';
import { projects, type Project } from '../data/projects';

interface ProjectsShowcaseProps {
  limit?: number;
  onViewAll?: () => void;
  onCaseStudy?: (project: Project) => void;
  title?: string;
}

export const ProjectsShowcase: React.FC<ProjectsShowcaseProps> = ({ limit, onViewAll, onCaseStudy, title = "Selected UI/UX work" }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'uiux' | 'cms'>('all');


  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  const displayedProjects = limit ? filteredProjects.slice(0, limit) : filteredProjects;

  const renderProjectLink = (project: Project) => {
    const target = project.link && project.link !== '#' ? '_blank' : undefined;
    const rel = target ? 'noreferrer noopener' : undefined;

    return (
      <a
        href={project.link}
        target={target}
        rel={rel}
        className="inline-flex items-center gap-2 text-xs font-semibold text-[#d2bbff] transition-all duration-200 hover:text-white"
      >
        <span>{project.link === '#' ? 'View Details' : 'View Project'}</span>
        <ExternalLink className="h-3.5 w-3.5" />
      </a>
    );
  };

  return (
    <section id="work" aria-label="Projects showcase" className="relative z-10 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-6">
          <div className="flex flex-col items-center justify-center text-center relative">
            <img 
              src="/images/anime/showcase.jpg" 
              alt="Showcase Hero" 
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-full mx-auto mb-6 border-2 border-[#7c3aed]/40 object-cover shadow-[0_0_25px_rgba(124,58,237,0.25)] animate-fade-in-up" 
            />
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#7c3aed]/40 bg-[#1e1b4b]/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#d2bbff]">
              <Sparkles className="h-3.5 w-3.5 text-[#ffb0cd]" />
              <span>Real Work</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-[#e3e0f7] sm:text-4xl md:text-5xl">
              {title}
            </h2>
          </div>

          <div className="flex flex-col items-center justify-center gap-3">
            <a
              href="https://shourov1.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#7c3aed]/70 bg-gradient-to-r from-[#7c3aed]/90 to-[#3626ce]/90 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-[0_0_28px_rgba(124,58,237,0.35)] transition-all duration-200 hover:scale-[1.02] hover:shadow-[0_0_35px_rgba(124,58,237,0.55)]"
            >
              <span>Full Stack &amp; AI Projects</span>
              <ExternalLink className="h-4 w-4" />
            </a>
            <p className="max-w-2xl text-center text-sm text-[#ccc3d8]">
              A curated collection of product, AI, and full-stack builds focused on real-world impact, clean systems, and polished user experiences.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {[['all', 'All work'], ['uiux', 'UI/UX design'], ['cms', 'CMS websites']].map(([key, label]) => {
              const isActive = activeFilter === key;

              return (
                <button
                  key={key}
                  onClick={() => setActiveFilter(key as 'all' | 'uiux' | 'cms')}
                  className={`relative rounded-full px-4 py-2 text-xs font-medium transition-all duration-200 focus:outline-none sm:text-sm ${isActive
                      ? 'text-white'
                      : 'border border-white/5 bg-white/5 text-[#ccc3d8] hover:bg-white/10 hover:text-white'
                    }`}
                >
                  {isActive && (
                    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#7c3aed] to-[#3626ce] shadow-[0_0_15px_rgba(124,58,237,0.5)]" />
                  )}
                  <span className="relative z-10">{label}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {displayedProjects.map((project) => (
            <article

              key={project.id}
              className="group relative overflow-hidden rounded-[1.6rem] border border-[#4a4455]/40 bg-[#121221]/80 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#7c3aed]/70 hover:shadow-[0_25px_70px_rgba(124,58,237,0.18)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#7c3aed]/8 via-transparent to-[#1e1b4b]/15" />

              <div className="relative overflow-hidden aspect-[16/11] bg-[#18182b]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121221] via-[#121221]/15 to-transparent" />


              </div>

              <div className="relative p-5">
                <span className="mb-3 inline-block rounded-full border border-[#7c3aed]/30 bg-[#7c3aed]/10 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.15em] text-[#c4b5fd]">
                  {project.category === 'uiux' ? 'UI/UX Design' : 'CMS Development'}
                </span>
                <h3 className="mb-3 text-xl font-bold text-[#e3e0f7]">{project.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-[#ccc3d8]">{project.description}</p>

                {/* Case Study Section - Clickable */}
                <button
                  onClick={() => onCaseStudy?.(project)}
                  className="mb-5 w-full cursor-pointer rounded-xl border border-[#7c3aed]/20 bg-[#1e1b4b]/30 p-4 text-left transition-all duration-300 hover:border-[#7c3aed]/50 hover:bg-[#1e1b4b]/50 hover:shadow-[0_0_20px_rgba(124,58,237,0.1)]"
                >
                  <div className="mb-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex h-5 w-5 items-center justify-center rounded-md bg-[#7c3aed]/20">
                        <Target className="h-3 w-3 text-[#c4b5fd]" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#c4b5fd]">Case Study</span>
                    </div>
                    <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-[#8b7ffc] transition-colors group-hover:text-white">
                      Read more <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-start gap-2">
                      <Briefcase className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-[#8b7ffc]" />
                      <div>
                        <p className="text-[10px] font-medium uppercase tracking-wider text-[#8b7ffc]/70">Role</p>
                        <p className="text-[12px] font-medium text-[#d2bbff]">{project.caseStudy.role}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Clock className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-[#8b7ffc]" />
                      <div>
                        <p className="text-[10px] font-medium uppercase tracking-wider text-[#8b7ffc]/70">Duration</p>
                        <p className="text-[12px] font-medium text-[#d2bbff]">{project.caseStudy.duration}</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 space-y-2">
                    <div className="flex items-start gap-2">
                      <Zap className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-[#22c55e]" />
                      <div>
                        <p className="text-[10px] font-medium uppercase tracking-wider text-[#22c55e]/70">Outcome</p>
                        <p className="text-[12px] leading-relaxed text-[#ccc3d8]">{project.caseStudy.outcome}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Sparkles className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-[#ffb0cd]" />
                      <div>
                        <p className="text-[10px] font-medium uppercase tracking-wider text-[#ffb0cd]/70">Challenge</p>
                        <p className="text-[12px] leading-relaxed text-[#ccc3d8]">{project.caseStudy.challenge}</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-center gap-2 rounded-lg border border-[#7c3aed]/20 bg-[#7c3aed]/10 py-2 text-[11px] font-semibold text-[#c4b5fd] transition-colors hover:bg-[#7c3aed]/20">
                    <span>Read Full Case Study</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </button>

                <div className="mb-5 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={`${project.id}-${tech}`}
                      className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-[#d2bbff]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between border-t border-white/10 pt-4">
                  {renderProjectLink(project)}
                  {project.githubLink && project.githubLink !== '#' ? (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-[#a7b4ff] transition-opacity hover:opacity-80"
                    >
                      GitHub
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>

        {limit && filteredProjects.length > limit && onViewAll && (
          <div className="mt-16 text-center">
            <button
              onClick={onViewAll}
              className="inline-flex items-center gap-2 rounded-full bg-[#1e1b4b] border border-[#7c3aed]/40 px-8 py-3.5 text-sm font-semibold text-[#e3e0f7] transition-all hover:bg-[#7c3aed] hover:border-[#7c3aed] hover:shadow-[0_0_20px_rgba(124,58,237,0.4)]"
            >
              <span>View All Projects</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );

};
