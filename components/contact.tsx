'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Send, Mail, Github, Linkedin, Instagram, Twitter, CircleCheck as CheckCircle, Loader as Loader2 } from 'lucide-react';

import { ScrollAnimation } from './scroll-animation';

const socialLinks = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/nino-2', color: 'hover:text-white' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/opeyemi-morgan/', color: 'hover:text-[#0077B5]' },
  { icon: Instagram, label: 'Instagram', href: 'https://instagram.com/nino_techh', color: 'hover:text-[#E1306C]' },
  { icon: Twitter, label: 'X / Twitter', href: 'https://x.com/ninotechh', color: 'hover:text-[#1DA1F2]' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formEl = e.currentTarget;

    if (!form.name || !form.email || !form.message) {
      setError('Please fill in all fields.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const formData = new FormData(formEl);

      formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "");
      formData.append('subject', 'New Portfolio Message');


      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();
      console.log(data);

      if (data.success) {
        setSuccess(true);
        setForm({ name: '', email: '', message: '' });
        formEl.reset();
      } else {
        setError(data.message || 'Something went wrong.');
      }
    } catch (err) {
      setError('Network error. Try again.');
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 dark:block hidden" style={{
        background: 'linear-gradient(180deg, #0a0a1a 0%, #06044a 50%, #0a0a1a 100%)',
      }} />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-96 h-96 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #00BFFF, transparent)' }} />
        <div className="absolute bottom-0 right-1/3 w-64 h-64 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #040281, transparent)' }} />
      </div>

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <ScrollAnimation className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#00BFFF]/50" />
            <span className="text-sm font-semibold tracking-widest uppercase text-[#00BFFF]">Contact</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#00BFFF]/50" />
          </div>
          <h2 className="text-4xl md:text-5xl font-medium lg:semibold dark:text-white text-[#040281] mb-4">
            Let's Build Something
            <span
              className="block"
              style={{
                background: 'linear-gradient(135deg, #040281, #00BFFF)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Together
            </span>
          </h2>
          <p className=" text-base lg:text-lg dark:text-white/60 text-slate-500 max-w-lg mx-auto">
            Got a project in mind? Whether it's a brand identity, a web app, or both. I'm ready.
          </p>
        </ScrollAnimation>

        <div className="grid md:grid-cols-5 gap-10 lg:gap-16 items-start">
          <ScrollAnimation delay={0.1} className="md:col-span-2">
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold dark:text-white text-[#040281] mb-4">Get In Touch</h3>
                <Link
                  href="mailto:opeyemimorgan3@gmail.com"
                  className="flex items-center gap-3 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#040281] to-[#00BFFF] flex items-center justify-center flex-shrink-0">
                    <Mail size={16} className="text-white" />
                  </div>
                  <span className="dark:text-white/70 text-slate-600 text-sm group-hover:text-[#00BFFF] transition-colors duration-200">
                        opeyemimorgan3@gmail.com
                  </span>
                </Link>
              </div>

              <div>
                <h3 className="text-sm font-semibold tracking-widest uppercase dark:text-white/40 text-slate-400 mb-4">Follow Me</h3>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map(({ icon: Icon, label, href, color }) => (
                    <Link
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className={`w-11 h-11 rounded-2xl dark:bg-white/5 bg-slate-100 border dark:border-white/10 border-slate-200 flex items-center justify-center dark:text-white/50 text-slate-500 ${color} hover:border-[#00BFFF]/30 hover:scale-110 transition-all duration-200`}
                    >
                      <Icon size={17} />
                    </Link>
                  ))}
                </div>
              </div>

              <div className="dark:bg-white bg-[#040281]/3 rounded-2xl p-5 border dark:border-white/8 border-[#040281]/10">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-sm font-semibold dark:text-black text-[#040281]">Available for Projects</span>
                </div>
                <p className="text-sm dark:text-slate-500 text-slate-500 leading-relaxed">
                  Currently accepting new clients for Q2 2026. Let's connect!
                </p>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={0.2} className="md:col-span-3">
            <div className="dark:bg-white/8 bg-white rounded-3xl p-8 border dark:border-white/8 border-slate-200 shadow-xl shadow-black/5">
              {success ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center text-center py-8"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center mb-4">
                    <CheckCircle size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold dark:text-[#040281] text-[#040281] mb-2">Message Sent!</h3>
                  <p className="dark:text-slate-500 text-slate-500 text-sm mb-6">
                    Thanks for reaching out. I'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSuccess(false)}
                    className="text-sm text-[#00BFFF] hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold dark:text-slate-700 text-slate-700 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Opeyemi Morgan"
                        className="w-full px-4 py-3 rounded-xl dark:bg-slate-50 bg-slate-50 border dark:border-slate-200 border-slate-200 dark:text-slate-900 text-slate-900 placeholder:dark:text-slate-400 placeholder:text-slate-400 text-sm focus:outline-none focus:border-[#00BFFF] focus:ring-2 focus:ring-[#00BFFF]/20 transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold dark:text-slate-700 text-slate-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="opeyemi@gmail.com"
                        className="w-full px-4 py-3 rounded-xl dark:bg-slate-50 bg-slate-50 border dark:border-slate-200 border-slate-200 dark:text-slate-900 text-slate-900 placeholder:dark:text-slate-400 placeholder:text-slate-400 text-sm focus:outline-none focus:border-[#00BFFF] focus:ring-2 focus:ring-[#00BFFF]/20 transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold dark:text-slate-700 text-slate-700 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell me about your project..."
                      className="w-full px-4 py-3 rounded-xl dark:bg-slate-50 bg-slate-50 border dark:border-slate-200 border-slate-200 dark:text-slate-900 text-slate-900 placeholder:dark:text-slate-400 placeholder:text-slate-400 text-sm focus:outline-none focus:border-[#00BFFF] focus:ring-2 focus:ring-[#00BFFF]/20 transition-all duration-200 resize-none"
                    />
                  </div>

                  {error && (
                    <p className="text-sm text-red-400">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#040281] to-[#00BFFF] text-white font-bold text-base hover:shadow-[0_0_30px_rgba(0,191,255,0.3)] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed hover:scale-[1.02]"
                  >
                    {loading ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
