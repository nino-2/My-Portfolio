'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { ScrollAnimation } from './scroll-animation';

const designPreviews = [
  {
    title: 'Lumera Skincare',
    type: 'Brand Identity',
    image: '/lumera_cover.jpg',
  },
  {
    title: 'Tidemint',
    type: 'Visual System',
    image: '/tidemint_cover.jpg',
  },
  {
    title: 'Transigo',
    type: 'Brand Strategy',
    image: '/transigo_cover.jpg',
  },
];

export default function DesignPortfolio() {
  return (
    <section id="design" className="relative py-24 md:py-32 overflow-hidden">
      <div
        className="absolute inset-0 dark:opacity-100 opacity-0 transition-opacity duration-300"
        style={{
          background: 'linear-gradient(135deg, #040281 0%, #06044a 30%, #0a0a1a 60%, #040281 100%)',
        }}
      />
      <div
        className="absolute inset-0 dark:opacity-0 opacity-100 transition-opacity duration-300"
        style={{
          background: 'linear-gradient(135deg, #f0f4ff 0%, #ffffff 50%, #e8f0ff 100%)',
        }}
      />

      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full dark:opacity-10 opacity-5" style={{ background: 'radial-gradient(circle, #00BFFF, transparent)' }} />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full dark:opacity-10 opacity-5" style={{ background: 'radial-gradient(circle, #040281, transparent)' }} />
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center mb-16">
          <div>
            <ScrollAnimation>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-sm font-semibold tracking-widest uppercase text-[#00BFFF]">Design Work</span>
                <div className="h-px flex-1 max-w-xs bg-gradient-to-r from-[#00BFFF]/50 to-transparent" />
              </div>
              <h2 className="text-4xl md:text-5xl font-medium lg:semibold dark:text-white text-[#040281] leading-tight mb-6">
                Where Strategy
                <br />
                <span
                  style={{
                    background: 'linear-gradient(135deg, #040281, #00BFFF)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Meets Aesthetics
                </span>
              </h2>
              <p className=" text-base lg:text-lg dark:text-white text-slate-600 leading-relaxed mb-8">
                My design work spans brand identities, visual systems, and creative direction. Every project starts with a question: what story should this brand tell?
              </p>
              <Link
                href="https://behance.net/morganopeyemi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-[#040281] to-[#00BFFF] text-white font-semibold lg:font-bold text-base hover:shadow-[0_0_30px_rgba(0,191,255,0.35)] transition-all duration-200 hover:scale-105"
              >
                Explore Behance Portfolio
                <ExternalLink size={16} />
              </Link>
            </ScrollAnimation>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {designPreviews.slice(0, 2).map((item, i) => (
              <ScrollAnimation key={item.title} delay={0.1 + i * 0.1} direction={i % 2 === 0 ? 'up' : 'down'}>
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-lg"
                  style={{ aspectRatio: i === 0 ? '4/5' : '4/3' }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 300px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="text-[#00BFFF] text-xs font-semibold tracking-wider uppercase mb-1">{item.type}</div>
                    <div className="text-white font-bold text-base">{item.title}</div>
                  </div>
                </motion.div>
              </ScrollAnimation>
            ))}
          </div>
        </div>

        <ScrollAnimation delay={0.3}>
          <div className="relative rounded-3xl overflow-hidden h-64 group cursor-pointer">
            <Image
              src={designPreviews[2].image}
              alt={designPreviews[2].title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 1200px"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
            <div className="absolute inset-0 flex items-center px-10">
              <div>
                <div className="text-[#00BFFF] text-sm font-semibold tracking-wider uppercase mb-2">{designPreviews[2].type}</div>
                <div className="text-white font-bold text-2xl md:text-3xl mb-4">{designPreviews[2].title}</div>
                <Link
                  href="https://behance.net/morganopeyemi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white border border-white/30 px-4 py-2 rounded-xl hover:bg-white/10 transition-all duration-200"
                >
                  View on Behance
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
