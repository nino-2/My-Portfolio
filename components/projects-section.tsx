'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import { projects } from '@/lib/projects';
import { ScrollAnimation } from './scroll-animation';

type FilterType = 'all' | 'brand-design' | 'development' | 'wordpress';

const filters: { label: string; value: FilterType }[] = [
  { label: 'All', value: 'all' },
  { label: 'Brand Design', value: 'brand-design' },
  { label: 'Development', value: 'development' },
  { label: 'WordPress', value: 'wordpress' },
];

const categoryColors: Record<string, string> = {
  'brand-design': 'bg-rose-500/15 text-rose-400 border-rose-500/20',
  'development': 'bg-[#00BFFF]/15 text-[#00BFFF] border-[#00BFFF]/20',
  'wordpress': 'bg-amber-500/15 text-amber-400 border-amber-500/20',
};

const categoryColorsLight: Record<string, string> = {
  'brand-design': 'bg-rose-50 text-rose-600 border-rose-200',
  'development': 'bg-sky-50 text-sky-700 border-sky-200',
  'wordpress': 'bg-amber-50 text-amber-700 border-amber-200',
};

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  const filtered = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="absolute inset-0 dark:block hidden">
        <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full opacity-5 -translate-y-1/2" style={{ background: 'radial-gradient(circle, #00BFFF, transparent)' }} />
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <ScrollAnimation>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-sm font-semibold tracking-widest uppercase text-[#00BFFF]">Portfolio</span>
            <div className="h-px flex-1 max-w-xs bg-gradient-to-r from-[#00BFFF]/50 to-transparent" />
          </div>
          <h2 className="text-4xl md:text-5xl font-medium font-bold dark:text-white text-[#040281] mb-4">
            Selected Work
          </h2>
          <p className="text-lg dark:text-white/60 text-slate-500 max-w-xl mb-10">
            A curated selection of projects spanning branding, web development, and digital experiences.
          </p>
        </ScrollAnimation>

        <ScrollAnimation delay={0.1}>
          <div className="flex flex-wrap gap-2 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`relative px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeFilter === filter.value
                    ? 'bg-gradient-to-r from-[#040281] to-[#00BFFF] text-white shadow-lg shadow-[#040281]/20'
                    : 'dark:bg-white/5 bg-slate-100 dark:text-white/70 text-slate-600 hover:dark:bg-white/10 hover:bg-slate-200'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </ScrollAnimation>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="group relative rounded-3xl overflow-hidden dark:bg-[#0d1040]/60 bg-white border dark:border-white/8 border-slate-200/80 hover:border-[#00BFFF]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#040281]/10 hover:-translate-y-1"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className={`text-xs font-semibold px-3 py-1.5 rounded-full border backdrop-blur-sm ${categoryColors[project.category]}`}>
                      {project.categoryLabel}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold dark:text-white text-[#040281] mb-2 group-hover:text-[#00BFFF] transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-sm dark:text-white/60 text-slate-500 leading-relaxed mb-5 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tools.slice(0, 3).map((tool) => (
                      <span
                        key={tool}
                        className="text-xs px-2.5 py-1 rounded-full dark:bg-white/5 bg-slate-100 dark:text-white/50 text-slate-500"
                      >
                        {tool}
                      </span>
                    ))}
                    {project.tools.length > 3 && (
                      <span className="text-xs px-2.5 py-1 rounded-full dark:bg-white/5 bg-slate-100 dark:text-white/50 text-slate-500">
                        +{project.tools.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="flex items-center gap-1.5 text-sm font-semibold text-[#00BFFF] hover:gap-2.5 transition-all duration-200"
                    >
                      View Project
                      <ArrowRight size={14} />
                    </Link>
                    <div className="flex gap-2">
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                          className="w-8 h-8 rounded-full dark:bg-white/5 bg-slate-100 flex items-center justify-center hover:bg-[#00BFFF]/20 transition-colors duration-200">
                          <ExternalLink size={13} className="dark:text-white/50 text-slate-500" />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                          className="w-8 h-8 rounded-full dark:bg-white/5 bg-slate-100 flex items-center justify-center hover:bg-[#00BFFF]/20 transition-colors duration-200">
                          <Github size={13} className="dark:text-white/50 text-slate-500" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
