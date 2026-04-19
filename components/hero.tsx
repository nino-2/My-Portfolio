'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ChevronRight } from 'lucide-react';

const techStack = [
  { name: 'HTML5', icon: '🌐' },
  { name: 'CSS3', icon: '🎨' },
  { name: 'JavaScript', icon: 'JS' },
  { name: 'Node.js', icon: '⬢' },
  { name: 'React', icon: '⚛' },
  { name: 'Next.js', icon: 'N' },
  { name: 'Tailwind CSS', icon: '💨' },
  { name: 'Express.js', icon: '⚡' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'Git', icon: '◎' },
  { name: 'GitHub', icon: '⊗' },
  { name: 'WordPress', icon: 'W' },
  { name: 'Figma', icon: '◈' },
  { name: 'Illustrator', icon: 'Ai' },
  { name: 'Photoshop', icon: 'Ps' },
];

const particles = Array.from({ length: 40 }, (_, i) => ({
  id: i,
  size: Math.random() * 4 + 2,
  x: Math.random() * 100,
  y: Math.random() * 100,
  duration: Math.random() * 20 + 15,
  delay: Math.random() * 10,
  opacity: Math.random() * 0.5 + 0.1,
}));

function handleScroll(href: string) {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #040281 0%, #06044a 40%, #0a0a1a 70%, #0d1033 100%)',
      }}
    >
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
            background: p.id % 3 === 0 ? '#00BFFF' : p.id % 3 === 1 ? '#ffffff' : '#6060ff',
            opacity: p.opacity,
          }}
          animate={{
            y: [0, -30, 10, -20, 0],
            x: [0, 15, -10, 20, 0],
            opacity: [p.opacity, p.opacity * 2, p.opacity * 0.5, p.opacity * 1.5, p.opacity],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(0, 191, 255, 0.15) 0%, transparent 50%),
                            radial-gradient(circle at 80% 20%, rgba(4, 2, 129, 0.3) 0%, transparent 50%),
                            radial-gradient(circle at 60% 80%, rgba(0, 191, 255, 0.1) 0%, transparent 40%)`,
        }}
      />

      <div className="relative z-10 container mx-auto px-4 text-center max-w-5xl pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00BFFF]/30 bg-[#00BFFF]/10 text-[#00BFFF] text-sm font-medium mb-12"
        >
        
          Available for new projects
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-white text-2xl md:text-3xl max-w-2xl font-medium lg:semibold mx-auto leading-relaxed mb-4"
        >
          Hi there, I'm Opeyemi Morgan
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl  md:text-7xl font-medium lg:semibold text-white leading-[1.05] tracking-tight mb-6"
        >  
          
           A Full-Stack Developer
          <br />
          <span
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #00BFFF 60%, #040281 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            & Brand Designer
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-white sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
        >
          I build products that work and brands that stick. From scalable web applications to bold visual identities. I turn ideas into digital experiences that look great and perform even better.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-20"
        >
          <button
            onClick={() => handleScroll('#projects')}
            className="flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-white text-[#040281] font-bold text-base hover:bg-white/90 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-200 hover:scale-105"
          >
            View My Work
            <ChevronRight size={16} />
          </button>
          <button
            onClick={() => handleScroll('#contact')}
            className="flex items-center gap-2 px-7 py-3.5 rounded-2xl border-2 border-white/40 text-white font-bold text-base hover:border-white hover:bg-white/10 transition-all duration-200 hover:scale-105"
          >
            Contact Me
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="relative overflow-hidden"
        >
          <div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, #040281, transparent)' }} />
          <div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, #0a0a1a, transparent)' }} />

          <div className="flex animate-scroll-left hide-scrollbar w-max">
            {[...techStack, ...techStack].map((tech, i) => (
              <div
                key={i}
                className="flex items-center gap-2 mx-2 px-4 py-2.5 rounded-full border border-white/15 bg-white/8 text-white/80 text-sm font-medium whitespace-nowrap hover:border-[#00BFFF]/50 hover:text-white transition-all duration-200"
                style={{ backdropFilter: 'blur(8px)' }}
              >
                <span className="font-bold text-[#00BFFF] text-xs">{tech.icon}</span>
                {tech.name}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.button
        onClick={() => handleScroll('#about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 hover:text-white/70 transition-colors duration-200"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.button>
    </section>
  );
}
