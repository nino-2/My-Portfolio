import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { getProjectBySlug, projects } from '@/lib/projects';

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) return { title: 'Project Not Found' };
  return {
    title: `${project.title} — Nino Technologies`,
    description: project.description,
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  const categoryColors: Record<string, string> = {
    'brand-design': 'bg-rose-500/15 text-rose-400 border-rose-500/20',
    'development': 'bg-sky-500/15 text-sky-400 border-sky-500/20',
    'wordpress': 'bg-amber-500/15 text-amber-400 border-amber-500/20',
  };

  return (
    <main className="min-h-screen dark:bg-[#0a0a1a] bg-white">
      <div className="relative h-[55vh] min-h-[400px] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(4,2,129,0.6) 0%, rgba(10,10,26,0.9) 100%)' }}
        />
        <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16 max-w-5xl mx-auto w-full">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white mb-6 transition-colors duration-200 w-fit"
          >
            <ArrowLeft size={16} />
            Back to Projects
          </Link>
          <span className={`text-xs font-medium lg:font-semibold px-3 py-1.5 rounded-full border w-fit mb-3 ${categoryColors[project.category] || 'bg-white/10 text-white border-white/20'}`}>
            {project.categoryLabel}
          </span>
          <h1 className="text-4xl md:text-6xl font-medium lg:font-semibold text-white mb-3">{project.title}</h1>
          <p className="text-white/70 text-base lg:text-lg max-w-xl">{project.description}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-4xl py-16">
        <div className="flex flex-wrap gap-3 mb-12">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#040281] to-[#00BFFF] text-white font-semibold text-sm hover:shadow-[0_0_20px_rgba(0,191,255,0.3)] transition-all duration-200"
            >
              <ExternalLink size={14} />
              Live Site
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl dark:bg-white/5 bg-slate-100 dark:text-white text-slate-700 font-semibold text-sm border dark:border-white/10 border-slate-200 hover:border-[#00BFFF]/40 transition-all duration-200"
            >
              <Github size={14} />
              GitHub Repo
            </a>
          )}
          {project.behanceUrl && (
            <a
              href={project.behanceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl dark:bg-white/5 bg-slate-100 dark:text-white text-slate-700 font-semibold text-sm border dark:border-white/10 border-slate-200 hover:border-[#00BFFF]/40 transition-all duration-200"
            >
              <ExternalLink size={14} />
              View on Behance
            </a>
          )}
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-10">
            <div>
              <h2 className="text-xs font-semibold tracking-widest uppercase text-[#00BFFF] mb-3">Overview</h2>
              <p className="dark:text-white/75 text-slate-700 text-base leading-relaxed">{project.fullDescription}</p>
            </div>
            <div>
              <h2 className="text-xs font-semibold tracking-widest uppercase text-[#00BFFF] mb-3">The Problem</h2>
              <p className="dark:text-white/75 text-slate-700 text-base leading-relaxed">{project.problem}</p>
            </div>
            <div>
              <h2 className="text-xs font-semibold tracking-widest uppercase text-[#00BFFF] mb-3">The Solution</h2>
              <p className="dark:text-white/75 text-slate-700 text-base leading-relaxed">{project.solution}</p>
            </div>
          </div>

          <div>
            <div className="dark:bg-white/3 bg-slate-50 rounded-2xl p-6 border dark:border-white/8 border-slate-200 sticky top-24">
              <h3 className="text-xs font-semibold tracking-widest uppercase text-[#00BFFF] mb-4">Tools & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-sm px-3 py-1.5 rounded-full dark:bg-white/5 bg-white dark:text-white/80 text-slate-700 border dark:border-white/10 border-slate-200"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
