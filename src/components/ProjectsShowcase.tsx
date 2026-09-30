import React, { useMemo, useState } from 'react';
import { ArrowUpRight, ExternalLink, Sparkles, ArrowRight } from 'lucide-react';
import { projects, type Project } from '../data/projects';

interface ProjectsShowcaseProps {
  limit?: number;
  onViewAll?: () => void;
  title?: string;
}

export const ProjectsShowcase: React.FC<ProjectsShowcaseProps> = ({ limit, onViewAll, title = "Selected UI/UX work" }) => {
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
          <div className="flex flex-col items-center justify-center text-center">
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
                  className={`relative rounded-full px-4 py-2 text-xs font-medium transition-all duration-200 focus:outline-none sm:text-sm ${
                    isActive
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
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121221] via-[#121221]/15 to-transparent" />

                <div className="absolute left-4 top-4 flex items-center gap-2">
                  <span className="rounded-full border border-white/10 bg-[#121221]/75 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#d2bbff] backdrop-blur-sm">
                    UI/UX
                  </span>
                </div>

                <div className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#7c3aed] text-white shadow-[0_0_20px_rgba(124,58,237,0.7)] transition-all duration-300 group-hover:scale-110">
                  <ArrowUpRight className="h-5 w-5" />
                </div>
              </div>

              <div className="relative p-5">
                <h3 className="mb-3 text-xl font-bold text-[#e3e0f7]">{project.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-[#ccc3d8]">{project.description}</p>

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
