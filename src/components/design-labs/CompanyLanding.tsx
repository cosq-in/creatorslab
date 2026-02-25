"use client";

import { motion } from "framer-motion";
import { Palette, Briefcase, Users, Sparkles, ArrowRight, Mail, Phone, MapPin, Globe } from "lucide-react";
import cosqLogo from "@/assets/design-labs/9b7838d4ff4793e150de59dc4cda78b5c3207879.png";

interface CompanyLandingProps {
  onNavigate: (section: string) => void;
}

export function CompanyLanding({ onNavigate }: CompanyLandingProps) {
  const services = [
    { icon: Palette, title: "Brand Identity", description: "Crafting unique visual languages that resonate with your audience." },
    { icon: Sparkles, title: "UI/UX Design", description: "Designing intuitive digital experiences for web and mobile platforms." },
    { icon: Briefcase, title: "Content Strategy", description: "Strategic marketing materials that drive engagement and growth." },
    { icon: Users, title: "Creative Direction", description: "Shaping the artistic vision of your brand across all touchpoints." }
  ];

  const stats = [
    { label: "Projects Delivered", value: "250+" },
    { label: "Global Clients", value: "80+" },
    { label: "Design Awards", value: "12" },
    { label: "Years Excellence", value: "8" }
  ];

  return (
    <div className="design-labs-theme">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-white/70 backdrop-blur-xl border-b border-purple-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src={cosqLogo.src} alt="Logo" className="w-10 h-10 object-contain" />
            <div>
              <span className="text-xl font-extrabold tracking-tight text-gradient">DESIGN LABS</span>
              <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400">by COSQ</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => onNavigate("portfolio")} className="text-sm font-semibold hover:text-purple-600 transition-colors">Portfolio</button>
            <button onClick={() => onNavigate("careers")} className="text-sm font-semibold hover:text-purple-600 transition-colors">Careers</button>
            <button
              onClick={() => (window as any).location.reload()}
              className="text-xs font-bold text-gray-400 hover:text-gray-600 tracking-wider"
            >
              EXIT
            </button>
            <button onClick={() => onNavigate("submit-project")} className="btn-primary text-sm">
              Start Project
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 overflow-hidden bg-[radial-gradient(circle_at_top_right,_var(--dl-bg-muted)_0%,_#ffffff_100%)]">
        <div className="container-centered flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-6 px-4 py-1.5 rounded-full border border-purple-100 bg-purple-50/50 text-purple-600 text-xs font-bold tracking-widest uppercase"
          >
            Pioneering Visual Excellence
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black mb-8 max-w-4xl"
          >
            We Design the <span className="text-gradient">Unknown.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-500 max-w-2xl mb-12 leading-relaxed"
          >
            A world-class creative house dedicated to transforming bold ideas into iconic brand experiences. Minimalist by design, maximalist by impact.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button onClick={() => onNavigate("submit-project")} className="btn-primary py-4 px-10 text-lg">
              Launch Your Brand <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button onClick={() => onNavigate("portfolio")} className="px-10 py-4 rounded-full border-2 border-purple-100 font-bold hover:bg-purple-50 transition-all">
              View Showcase
            </button>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-12 mt-32 w-full max-w-4xl border-t border-purple-50 pt-16"
          >
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-black text-gray-900 mb-1">{stat.value}</div>
                <div className="text-xs uppercase tracking-widest font-bold text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-spacer bg-white">
        <div className="container-centered">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-black mb-6">Mastering Every <br /> <span className="text-gradient">Creative Dimension.</span></h2>
              <p className="text-gray-500">From digital products to architectural branding, our diverse expertise ensures a cohesive and powerful market presence.</p>
            </div>
            <button onClick={() => onNavigate("portfolio")} className="group flex items-center font-bold text-purple-600 gap-2">
              Explore All Services <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="glass-card p-10 flex flex-col items-start"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex-center mb-8 shadow-lg shadow-purple-200">
                  <service.icon className="text-white w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-sm text-gray-500 mb-6">{service.description}</p>
                <button className="mt-auto text-xs font-black uppercase text-purple-600 tracking-wider">Learn More</button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Section/CTA */}
      <section className="section-spacer relative overflow-hidden">
        <div className="absolute inset-0 bg-gray-900 z-0" />
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] z-1" />

        <div className="container-centered relative z-10">
          <div className="glass-card bg-white/5 border-white/10 p-12 md:p-24 text-center">
            <h2 className="text-white text-5xl md:text-7xl font-black mb-8">Ready to <span className="text-gradient">Ascend?</span></h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto mb-12">Join the elite brands that have redefined their industry through our creative vision.</p>
            <div className="flex flex-wrap justify-center gap-6">
              <button onClick={() => onNavigate("submit-project")} className="btn-primary py-5 px-12 text-xl">
                Partner With Us
              </button>
              <button onClick={() => onNavigate("careers")} className="px-12 py-5 rounded-full border-2 border-white/20 text-white font-bold hover:bg-white/10 transition-all">
                Join our Team
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="container-centered">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-3 mb-8">
                <img src={cosqLogo.src} alt="Logo" className="w-10 h-10 object-contain grayscale" />
                <span className="text-xl font-black text-gray-900">DESIGN LABS</span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">Defining the next era of visual identity. Part of the COSQ universe.</p>
            </div>

            <div>
              <h4 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-8">Navigation</h4>
              <ul className="space-y-4">
                <li><button onClick={() => onNavigate("portfolio")} className="text-sm font-semibold hover:text-purple-600">Our Work</button></li>
                <li><button onClick={() => onNavigate("careers")} className="text-sm font-semibold hover:text-purple-600">Careers</button></li>
                <li><button onClick={() => onNavigate("home")} className="text-sm font-semibold hover:text-purple-600">Vision</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-8">Connect</h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-sm font-semibold text-gray-600"><Mail className="w-4 h-4" /> hello@creatorslab.com</li>
                <li className="flex items-center gap-3 text-sm font-semibold text-gray-600"><Phone className="w-4 h-4" /> +91 999 888 7777</li>
                <li className="flex items-center gap-3 text-sm font-semibold text-gray-600"><Globe className="w-4 h-4" /> creatorslab.com/design</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-8">Studio</h4>
              <p className="text-sm font-semibold text-gray-600 flex items-start gap-3"><MapPin className="w-4 h-4 mt-1" /> Skyview Creative Hub, <br /> Mumbai, MH 400001</p>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-400 font-bold tracking-wider uppercase">© 2026 DESIGN LABS BY COSQ. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-8 text-xs font-bold text-gray-400 uppercase tracking-widest">
              <span>Privacy</span>
              <span>Terms</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
