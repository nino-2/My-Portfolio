'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Download, Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4"
    >
      <div
        className={`w-full max-w-5xl rounded-2xl px-5 py-3 transition-all duration-300 ${
          scrolled
            ? 'dark:glass-dark glass-light shadow-lg shadow-black/10 dark:shadow-black/40'
            : 'dark:glass-dark glass-light'
        }`}
      >
        <div className="flex items-center justify-between">
          <Link href="/" onClick={() => handleNavClick('#home')} className="flex items-center gap-2 group">
            {/* <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-[#040281] to-[#00BFFF] flex items-center justify-center shadow-md group-hover:shadow-[0_0_20px_rgba(0,191,255,0.4)] transition-shadow duration-300">
              <span className="text-white font-bold text-lg leading-none">N</span>

            </div> */}
            <Image
              src="/ninotech-logo.webp"
              alt="Nino Technologies Logo"
              width={36}
              height={36} />

            
            <span className="font-bold text-base dark:text-white text-[#040281] tracking-tight hidden sm:block">
              Nino Technologies
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="px-3 py-1.5 text-sm font-medium dark:text-white/70 text-slate-600 hover:dark:text-white hover:text-[#040281] rounded-lg hover:dark:bg-white/5 hover:bg-[#040281]/5 transition-all duration-200"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="/Opeyemi_Resume.pdf"
              download
              className="hidden md:flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold bg-gradient-to-r from-[#040281] to-[#00BFFF] text-white hover:shadow-[0_0_20px_rgba(0,191,255,0.35)] transition-all duration-200 hover:scale-105"
            >
              <Download size={14} />
              Resume
            </a>

            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="w-9 h-9 rounded-xl flex items-center justify-center dark:bg-white/5 bg-slate-100 hover:dark:bg-white/10 hover:bg-slate-200 transition-all duration-200"
                aria-label="Toggle theme"
              >
                <AnimatePresence mode="wait">
                  {theme === 'dark' ? (
                    <motion.div
                      key="sun"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Sun size={16} className="text-[#00BFFF]" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Moon size={16} className="text-[#040281]" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            )}

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden w-9 h-9 rounded-xl flex items-center justify-center dark:bg-white/5 bg-slate-100"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X size={16} className="dark:text-white text-slate-700" />
              ) : (
                <Menu size={16} className="dark:text-white text-slate-700" />
              )}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden overflow-hidden"
            >
              <div className="pt-3 pb-1 border-t dark:border-white/10 border-slate-200 mt-3 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className="w-full text-left px-3 py-2.5 text-sm font-medium dark:text-white/80 text-slate-700 hover:dark:text-white hover:text-[#040281] rounded-lg hover:dark:bg-white/5 hover:bg-slate-100 transition-all duration-200"
                  >
                    {link.label}
                  </button>
                ))}
                <a
                  href="/Opeyemi_Resume.pdf"
                  download
                  className="mt-2 flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-[#040281] to-[#00BFFF] text-white"
                >
                  <Download size={14} />
                  Download Resume
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
