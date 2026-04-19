'use client';

import Link from 'next/link';
import { Github, Linkedin, Instagram, Twitter, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/nino-2' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/opeyemi-morgan/' },
  { icon: Instagram, label: 'Instagram', href: 'https://instagram.com/nino_techh' },
  { icon: Twitter, label: 'X / Twitter', href: 'https://x.com/ninotechh' },
];

function handleScroll(href: string) {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

export default function Footer() {
  return (
    <footer className="relative dark:bg-[#06044a]/30 bg-slate-50 border-t dark:border-white/8 border-slate-200">
      <div className="container mx-auto px-4 max-w-6xl py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#040281] to-[#00BFFF] flex items-center justify-center">
                <span className="text-white font-bold text-lg">N</span>
              </div>
              <span className="font-bold text-base dark:text-white text-[#040281]">Nino Technologies</span>
            </div>
            <p className="text-sm dark:text-white/50 text-slate-500 leading-relaxed max-w-xs">
              Building digital products that work and brands that stick from anywehere to the world.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold dark:text-white text-[#040281] mb-4 tracking-wider uppercase">Navigation</h4>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleScroll(link.href)}
                  className="text-sm dark:text-white/50 text-slate-500 hover:text-[#00BFFF] transition-colors duration-200 text-left"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold dark:text-white text-[#040281] mb-4 tracking-wider uppercase">Connect</h4>
            <div className="flex gap-3 mb-4">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-xl dark:bg-white/5 bg-white border dark:border-white/10 border-slate-200 flex items-center justify-center dark:text-white/50 text-slate-500 hover:text-[#00BFFF] hover:border-[#00BFFF]/30 transition-all duration-200"
                >
                  <Icon size={15} />
                </Link>
              ))}
            </div>
            <Link
              href="mailto:opeyemimorgan3@gmail.com"
              className="text-sm text-[#00BFFF] hover:underline"
            >
              opeyemimorgan3@gmail.com
            </Link>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t dark:border-white/8 border-slate-200">
          <p className="text-sm dark:text-white/40 text-slate-400">
            Designed &amp; Built by Opeyemi Morgan &middot; Nino Technologies &copy; 2026
          </p>

          <motion.button
            onClick={() => handleScroll('#home')}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-sm dark:text-white/50 text-slate-500 hover:text-[#00BFFF] transition-colors duration-200"
          >
            Back to top
            <div className="w-7 h-7 rounded-full dark:bg-white/5 bg-slate-200 flex items-center justify-center">
              <ArrowUp size={12} />
            </div>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
