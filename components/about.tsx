'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ScrollAnimation } from './scroll-animation';

const skills = [
  'React', 'Next.js', 'Node.js', 'MongoDB',
  'Figma', 'Brand Identity', 'Canva', 'WordPress',
  'TypeScript', 'Tailwind CSS', 'Express.js', 'Adobe Suite',
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 dark:block hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-5" style={{ background: 'radial-gradient(circle, #00BFFF, transparent)' }} />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full opacity-5" style={{ background: 'radial-gradient(circle, #040281, transparent)' }} />
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <ScrollAnimation className="flex items-center gap-3 mb-16">
          <span className="text-sm font-semibold tracking-widest uppercase text-[#00BFFF]">About Me</span>
          <div className="h-px flex-1 max-w-xs bg-gradient-to-r from-[#00BFFF]/50 to-transparent" />
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <ScrollAnimation direction="left" delay={0.1}>
            <div className="relative">
              <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#040281]/20 to-[#00BFFF]/10 z-10 rounded-3xl" />
                <Image
                  src="/morgan.jpg"
                  alt="Morgan Opeyemi"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 w-32 h-32 rounded-2xl bg-gradient-to-br from-[#040281] to-[#00BFFF] flex flex-col items-center justify-center shadow-xl shadow-[#040281]/30">
                <span className="text-white font-bold text-3xl">3+</span>
                <span className="text-white/80 text-xs text-center leading-tight mt-1">Years<br/>Experience</span>
              </div>
              <div className="absolute -top-5 -left-5 w-24 h-24 rounded-2xl dark:bg-[#0d1040]/80 bg-white border dark:border-[#00BFFF]/20 border-[#040281]/10 flex flex-col items-center justify-center shadow-lg">
                <span className="font-bold text-2xl dark:text-white text-[#040281]">20+</span>
                <span className="dark:text-white/60 text-slate-500 text-xs text-center leading-tight mt-1">Projects<br/>Delivered</span>
              </div>
            </div>
          </ScrollAnimation>

          <div>
            <ScrollAnimation delay={0.2}>
              <h2 className="text-4xl md:text-5xl font-medium lg:semibold dark:text-white text-[#040281] leading-tight mb-6">
                Where Code
                <span
                  style={{
                    background: 'linear-gradient(135deg, #040281, #00BFFF)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {' '}Meets{' '}
                </span>
                Design
              </h2>
            </ScrollAnimation>

            <ScrollAnimation delay={0.3}>
              <p className=" text-base lg:text-lg dark:text-white/70 text-slate-600 leading-relaxed mb-6">
                I'm <strong className="dark:text-white text-[#040281]">Opeyemi Morgan</strong>, a Full-Stack Developer and Brand Designer with a passion for crafting digital products that are both functional and visually compelling.
              </p>
              <p className="text-base dark:text-white text-slate-500 leading-relaxed mb-8">
                With expertise across code and design, I work with startups and businesses to build their digital presence from the ground up. I believe great products live at the intersection of beautiful design and solid engineering.
              </p>
            </ScrollAnimation>

            <ScrollAnimation delay={0.4}>
              <div className="mb-8">
                <h3 className="text-sm font-semibold tracking-widest uppercase dark:text-white/50 text-slate-400 mb-4">Skills & Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, i) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.05, duration: 0.4 }}
                      className="px-3 py-1.5 rounded-full text-sm font-medium dark:bg-white/5 bg-[#040281]/5 dark:text-white/80 text-[#040281] border dark:border-white/10 border-[#040281]/15 hover:border-[#00BFFF]/50 hover:dark:text-[#00BFFF] hover:text-[#040281] transition-all duration-200"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={0.5}>
              <div className="flex gap-6">
                <div className="text-center">
                  <div className="text-3xl font-extrabold dark:text-white text-[#040281]">20+</div>
                  <div className="text-sm dark:text-white/50 text-slate-500 mt-1">Projects</div>
                </div>
                <div className="w-px dark:bg-white/10 bg-slate-200" />
                <div className="text-center">
                  <div className="text-3xl font-extrabold dark:text-white text-[#040281]">15+</div>
                  <div className="text-sm dark:text-white/50 text-slate-500 mt-1">Clients</div>
                </div>
                <div className="w-px dark:bg-white/10 bg-slate-200" />
                <div className="text-center">
                  <div className="text-3xl font-extrabold dark:text-white text-[#040281]">3+</div>
                  <div className="text-sm dark:text-white/50 text-slate-500 mt-1">Years Exp.</div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
}
