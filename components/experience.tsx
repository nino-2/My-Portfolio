'use client';

import { motion } from 'framer-motion';
import { ScrollAnimation } from './scroll-animation';
import { Briefcase, GraduationCap } from 'lucide-react';

const experiences = [
  {
    type: 'work',
    title: 'Graphic Designer',
    company: 'WOY Immigration Service',
    period: 'Jan 2026 — Present',
    description: 'Creating brand and visual design assets for an immigration consultancy, covering social media graphics, marketing materials and brand communication.',
    skills: ['Adobe Photoshop', 'Canva', 'Brand Design'],
  },
  {
    type: 'work',
    title: 'Full Stack Developer',
    company: 'Olybe Enterprise',
    period: 'Oct 2025 — Present',
    description: 'Building and maintaining the Olybe food delivery marketing website targeting pre-launch audiences in Makurdi, Benue State. Conducted a full site audit, rewrote content with locally grounded language and designed Nigerian food category mockups for a mobile-first experience.',
    skills: ['Next.js', 'Tailwind CSS', 'TypeScript', 'React'],
  },
  {
    type: 'work',
    title: 'Full Stack Developer',
    company: 'Freelance',
    period: 'Jun 2025 — Present',
    description: 'Building full-stack MERN applications for clients across e-commerce, healthcare and professional services. Creating and consuming RESTful APIs, managing MongoDB schemas and working directly with clients to gather requirements and deliver iteratively.',
    skills: ['React', 'Node.js', 'MongoDB', 'Express.js', 'TypeScript'],
  },
  {
    type: 'work',
    title: 'Frontend Developer',
    company: 'BaskLiving',
    period: 'Dec 2024 — May 2025',
    description: 'Built and maintained React based responsive interfaces for property listings, search and student onboarding flows. Integrated frontend components with backend REST APIs and prioritised performance, accessibility and reusable component architecture.',
    skills: ['React', 'JavaScript', 'Tailwind CSS', 'REST APIs'],
  },
  {
    type: 'work',
    title: 'Frontend Developer Intern',
    company: 'Learncity Technologies',
    period: 'Aug 2023 — Aug 2024',
    description: 'Built static and interactive pages converting Figma designs into responsive mobile-first layouts. Gained hands-on experience with Git version control and Agile development workflows in a team environment.',
    skills: ['HTML', 'CSS', 'JavaScript', 'Git', 'Figma'],
  },
  {
    type: 'education',
    title: 'B.Sc. Computer Science',
    company: 'Tai Solarin University of Education',
    period: '2018 — 2023',
    description: 'Graduated with Second Class Upper Honours (2:1) in Computer Science.',
    skills: ['Data Structures and Algorithms', 'Database Management', 'Computer Networking'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="container mx-auto px-4 max-w-4xl">
        <ScrollAnimation>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-sm font-semibold tracking-widest uppercase text-[#00BFFF]">Career</span>
            <div className="h-px flex-1 max-w-xs bg-gradient-to-r from-[#00BFFF]/50 to-transparent" />
          </div>
          <h2 className="text-4xl md:text-5xl font-medium lg:semibold dark:text-white text-[#040281] mb-4">
            Experience & Education
          </h2>
          <p className="text-lg dark:text-white/60 text-slate-500 max-w-xl mb-16">
            A timeline of my professional journey building digital products and brands.
          </p>
        </ScrollAnimation>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px dark:bg-white/10 bg-slate-200" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <ScrollAnimation key={i} delay={i * 0.1}>
                <div className="relative flex gap-8 group">
                  <div className={`relative z-10 w-16 h-16 rounded-2xl flex-shrink-0 flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 ${
                    exp.type === 'work'
                      ? 'bg-gradient-to-br from-[#040281] to-[#00BFFF] shadow-[#040281]/20'
                      : 'dark:bg-[#0d1040] bg-white dark:border-[#00BFFF]/30 border-slate-200 border shadow-[#040281]/10'
                  }`}>
                    {exp.type === 'work' ? (
                      <Briefcase size={22} className="text-white" />
                    ) : (
                      <GraduationCap size={22} className="dark:text-[#00BFFF] text-[#040281]" />
                    )}
                  </div>

                  <div className="flex-1 pb-2">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <div>
                        <h3 className="text-xl font-bold dark:text-white text-[#040281]">{exp.title}</h3>
                        <p className="text-[#00BFFF] font-semibold text-sm">{exp.company}</p>
                      </div>
                      <span className="text-sm dark:text-white/40 text-slate-400 font-medium shrink-0 dark:bg-white/5 bg-slate-100 px-3 py-1 rounded-full">
                        {exp.period}
                      </span>
                    </div>

                    <p className="dark:text-white/60 text-slate-600 text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs px-2.5 py-1 rounded-full dark:bg-[#040281]/30 bg-[#040281]/5 dark:text-[#00BFFF] text-[#040281] border dark:border-[#040281]/40 border-[#040281]/10"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
