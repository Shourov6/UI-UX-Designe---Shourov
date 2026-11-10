import React, { useMemo, useState, useEffect } from 'react';
import { ExternalLink, Sparkles, ArrowRight, Briefcase, Clock, Target, Zap, Eye, X } from 'lucide-react';
import { projects, type Project, type ProjectCategory, categoryLabels } from '../data/projects';

interface ProjectsShowcaseProps {
  limit?: number;
  onViewAll?: () => void;
  onCaseStudy?: (project: Project) => void;
  title?: string;
}

export const ProjectsShowcase: React.FC<ProjectsShowcaseProps> = ({ limit, onViewAll, onCaseStudy, title = "Selected UI/UX work" }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | ProjectCategory>('all');
  const [previewProject, setPreviewProject] = useState<Project | null>(null);

  // Close preview modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setPreviewProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent background scrolling when preview modal is active
  useEffect(() => {
    if (previewProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [previewProject]);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  const displayedProjects = limit ? filteredProjects.slice(0, limit) : filteredProjects;

  const filterOptions: { key: 'all' | ProjectCategory; label: string }[] = [
    { key: 'all', label: 'All' },
    { key: 'app', label: 'App' },
    { key: 'website', label: 'Website' },
    { key: 'dashboard', label: 'Dashboard' },
    { key: 'landing-page', label: 'Landing page' },
  ];

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
            {filterOptions.map(({ key, label }) => {
              const isActive = activeFilter === key;

              return (
                <button
                  key={key}
                  onClick={() => setActiveFilter(key)}
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
              className="group relative flex flex-col justify-between overflow-hidden rounded-[1.6rem] border border-[#4a4455]/40 bg-[#121221]/80 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#7c3aed]/70 hover:shadow-[0_25px_70px_rgba(124,58,237,0.18)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#7c3aed]/8 via-transparent to-[#1e1b4b]/15 pointer-events-none" />

              {/* Cover Image — Clickable to open Preview */}
              <div
                onClick={() => setPreviewProject(project)}
                className="relative overflow-hidden aspect-[16/11] bg-[#18182b] cursor-pointer group/img"
                role="button"
                tabIndex={0}
                aria-label={`Open preview for ${project.title}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setPreviewProject(project);
                  }
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-contain transition-transform duration-700 ease-out group-hover/img:scale-105"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121221] via-transparent to-transparent opacity-60 group-hover/img:opacity-30 transition-opacity" />

                {/* Subtle Hover Overlay with Preview Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-all duration-300 bg-black/45 backdrop-blur-[2px]">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-[#121221]/90 px-4 py-2 text-xs font-semibold text-white shadow-2xl transform translate-y-2 group-hover/img:translate-y-0 transition-transform">
                    <Eye className="h-4 w-4 text-[#c4b5fd]" />
                    <span>Click to Preview</span>
                  </span>
                </div>
              </div>

              <div className="relative p-5 flex flex-col flex-grow justify-between">
                <div>
                  <span className="mb-3 inline-block rounded-full border border-[#7c3aed]/30 bg-[#7c3aed]/10 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.15em] text-[#c4b5fd]">
                    {categoryLabels[project.category] || project.category}
                  </span>
                  <h3 className="mb-3 text-xl font-bold text-[#e3e0f7]">{project.title}</h3>
                  <p className="mb-4 text-sm leading-relaxed text-[#ccc3d8]">{project.description}</p>

                  {/* Case Study Section with Side-by-Side Action Buttons */}
                  <div className="mb-5 rounded-xl border border-[#7c3aed]/20 bg-[#1e1b4b]/30 p-4 transition-all duration-300 hover:border-[#7c3aed]/40 hover:bg-[#1e1b4b]/45">
                    <div className="mb-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="flex h-5 w-5 items-center justify-center rounded-md bg-[#7c3aed]/20">
                          <Target className="h-3 w-3 text-[#c4b5fd]" />
                        </div>
                        <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#c4b5fd]">Case Study</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => onCaseStudy?.(project)}
                        className="inline-flex items-center gap-1 text-[10px] font-semibold text-[#8b7ffc] transition-colors hover:text-white cursor-pointer"
                      >
                        Details <ArrowRight className="h-3 w-3" />
                      </button>
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

                    {/* Side-by-Side Buttons: Read Full Case Study + View Project */}
                    <div className="mt-4 grid grid-cols-2 gap-2.5">
                      <button
                        type="button"
                        onClick={() => onCaseStudy?.(project)}
                        className="flex items-center justify-center gap-1.5 rounded-lg border border-[#7c3aed]/30 bg-[#7c3aed]/15 py-2.5 px-2 text-[11px] font-semibold text-[#c4b5fd] transition-all hover:bg-[#7c3aed]/30 hover:border-[#7c3aed]/60 hover:text-white hover:shadow-[0_0_15px_rgba(124,58,237,0.3)] cursor-pointer"
                      >
                        <span>Case Study</span>
                        <ArrowRight className="h-3.5 w-3.5 shrink-0" />
                      </button>

                      {project.link && project.link !== '#' ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="flex items-center justify-center gap-1.5 rounded-lg border border-white/10 bg-white/5 py-2.5 px-2 text-[11px] font-semibold text-white transition-all hover:bg-white/15 hover:border-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] cursor-pointer"
                        >
                          <span>View Project</span>
                          <ExternalLink className="h-3.5 w-3.5 shrink-0 text-[#c4b5fd]" />
                        </a>
                      ) : (
                        <button
                          type="button"
                          onClick={() => onCaseStudy?.(project)}
                          className="flex items-center justify-center gap-1.5 rounded-lg border border-white/10 bg-white/5 py-2.5 px-2 text-[11px] font-semibold text-[#ccc3d8] transition-all hover:bg-white/15 hover:text-white cursor-pointer"
                        >
                          <span>View Details</span>
                          <ArrowRight className="h-3.5 w-3.5 shrink-0" />
                        </button>
                      )}
                    </div>
                  </div>

                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={`${project.id}-${tech}`}
                        className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-[#d2bbff]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {project.githubLink && project.githubLink !== '#' && (
                  <div className="flex items-center justify-end border-t border-white/10 pt-3 mt-auto">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-[#a7b4ff] hover:text-white transition-colors inline-flex items-center gap-1"
                    >
                      <span>GitHub</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                )}
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

      {/* ========================================================
          FULL-SCREEN PREVIEW LIGHTBOX MODAL
          ======================================================== */}
      {previewProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in"
          onClick={() => setPreviewProject(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative flex flex-col max-h-[92vh] w-full max-w-5xl overflow-hidden rounded-2xl border border-white/15 bg-[#121221] shadow-[0_0_60px_rgba(0,0,0,0.8)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Bar */}
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5 bg-[#18182b]/90 backdrop-blur-md">
              <div className="flex items-center gap-3 min-w-0 pr-4">
                <span className="shrink-0 rounded-full border border-[#7c3aed]/30 bg-[#7c3aed]/20 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#c4b5fd]">
                  {categoryLabels[previewProject.category] || previewProject.category}
                </span>
                <h3 className="truncate text-sm sm:text-base font-bold text-white">
                  {previewProject.title}
                </h3>
              </div>

              <div className="flex items-center gap-2.5 shrink-0">
                {previewProject.link && previewProject.link !== '#' && (
                  <a
                    href={previewProject.link}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-[#7c3aed]/40 bg-[#7c3aed]/20 px-3 py-1.5 text-xs font-semibold text-[#c4b5fd] hover:bg-[#7c3aed]/35 hover:text-white transition-all shadow-[0_0_12px_rgba(124,58,237,0.25)]"
                  >
                    <span>View Project</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
                <button
                  onClick={() => setPreviewProject(null)}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-[#a8a2b5] hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
                  aria-label="Close preview"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Modal Image Viewport */}
            <div className="relative flex-1 overflow-auto p-4 sm:p-6 flex items-center justify-center bg-[#0d0d1c]">
              <img
                src={previewProject.image}
                alt={previewProject.title}
                className="max-h-[68vh] w-auto max-w-full rounded-xl object-contain shadow-2xl border border-white/5"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Modal Bottom Action Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 px-5 py-3 bg-[#18182b]/70">
              <p className="text-xs text-[#a8a2b5] hidden sm:block">
                Press <kbd className="rounded border border-white/10 bg-white/5 px-1.5 py-0.5 text-[10px] font-mono text-[#ccc3d8]">Esc</kbd> or click outside to close
              </p>
              <div className="flex items-center gap-2.5 ml-auto">
                <button
                  type="button"
                  onClick={() => {
                    const p = previewProject;
                    setPreviewProject(null);
                    onCaseStudy?.(p);
                  }}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-[#ccc3d8] hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
                >
                  <span>Read Full Case Study</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
                {previewProject.link && previewProject.link !== '#' && (
                  <a
                    href={previewProject.link}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1.5 rounded-lg bg-[#7c3aed] px-4 py-2 text-xs font-semibold text-white hover:bg-[#6d28d9] transition-all shadow-[0_0_15px_rgba(124,58,237,0.35)]"
                  >
                    <span>Open Live Link</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
