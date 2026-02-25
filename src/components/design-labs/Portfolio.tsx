"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Filter, Sparkles } from "lucide-react";
import cosqLogo from "@/assets/design-labs/9b7838d4ff4793e150de59dc4cda78b5c3207879.png";
import { useState } from "react";

interface PortfolioProps {
  onBack: () => void;
}

export function Portfolio({ onBack }: PortfolioProps) {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Branding", "UI/UX", "Content", "3D"];

  const projects = [
    {
      title: "Lumina Tech Rebrand",
      category: "Branding",
      description: "A complete identity overhaul for a silicon valley unicorn, focusing on geometric minimalism and light-speed aesthetics.",
      color: "from-blue-600 to-indigo-700"
    },
    {
      title: "Verve Mobile OS",
      category: "UI/UX",
      description: "Next-gen operating system interface focused on spatial awareness and fluid micro-gestures.",
      color: "from-purple-600 to-pink-700"
    },
    {
      title: "Nebula 3D Series",
      category: "3D",
      description: "A series of abstract 3D environments representing the digital consciousness.",
      color: "from-orange-500 to-red-700"
    },
    {
      title: "Synth Audio Campaign",
      category: "Content",
      description: "High-impact social media campaign for premium audio gear, featuring bespoke 3D motion graphics.",
      color: "from-emerald-500 to-teal-700"
    },
    {
      title: "Apex Gaming Hub",
      category: "UI/UX",
      description: "Competitive gaming platform designed for millisecond response times and visual dominance.",
      color: "from-violet-600 to-fuchsia-800"
    },
    {
      title: "Origin Organic",
      category: "Branding",
      description: "Premium packaging and brand system for a high-end organic skincare line.",
      color: "from-amber-400 to-orange-600"
    }
  ];

  const filteredProjects = filter === "All" ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="design-labs-theme">
      {/* Header */}
      <nav className="sticky top-0 z-[100] bg-white/70 backdrop-blur-xl border-b border-purple-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src={cosqLogo.src} alt="Logo" className="w-10 h-10 object-contain" />
            <span className="text-xl font-black tracking-tight text-gradient">DESIGN LABS SHOWCASE</span>
          </div>
          <button onClick={onBack} className="group flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-purple-600 transition-colors">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-white to-purple-50/20">
        <div className="container-centered text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 text-purple-700 text-xs font-black uppercase tracking-widest mb-8"
          >
            <Sparkles className="w-3 h-3" /> The Curated Archive
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mb-8"
          >
            Proof of <br /> <span className="text-gradient">Innovation.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-500 max-w-2xl mx-auto mb-12"
          >
            Explore our most impactful case studies and experiments across disciplines.
          </motion.p>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat, i) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-black transition-all ${filter === cat
                    ? "bg-purple-600 text-white shadow-lg shadow-purple-200"
                    : "bg-white border border-purple-100 text-gray-400 hover:border-purple-300"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-48">
        <div className="container-centered">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="group flex flex-col"
              >
                <div className={`relative overflow-hidden rounded-[32px] aspect-[4/3] bg-gradient-to-br ${project.color} mb-8 shadow-xl shadow-purple-50`}>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                  <div className="absolute inset-0 flex-center opacity-0 group-hover:opacity-100 transition-all transform scale-90 group-hover:scale-100">
                    <button className="w-16 h-16 rounded-full bg-white text-gray-900 flex-center shadow-2xl">
                      <ExternalLink className="w-7 h-7" />
                    </button>
                  </div>
                  <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest border border-white/20">
                    {project.category}
                  </div>
                </div>
                <div className="px-2">
                  <h3 className="text-2xl font-black mb-3 group-hover:text-purple-600 transition-colors uppercase tracking-tight">{project.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="py-24 text-center">
              <h3 className="text-2xl font-black text-gray-300">Nothing to show here yet.</h3>
              <button onClick={() => setFilter("All")} className="mt-4 text-purple-600 font-bold">Reset Filters</button>
            </div>
          )}
        </div>
      </section>

      {/* Footer (Simplified) */}
      <footer className="py-24 bg-gray-900 text-center">
        <div className="container-centered">
          <h2 className="text-white text-4xl md:text-5xl font-black mb-8">Have a Bold <br /> <span className="text-gradient">Project?</span></h2>
          <button className="btn-primary py-4 px-12">Start the Conversation</button>
          <p className="mt-12 text-gray-600 text-[10px] font-black uppercase tracking-widest">© 2026 DESIGN LABS SHOWCASE BY COSQ</p>
        </div>
      </footer>
    </div>
  );
}
