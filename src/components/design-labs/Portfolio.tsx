"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Sparkles } from "lucide-react";
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
    <div className="design-labs-theme min-h-screen bg-[#0a0a0a] text-[#e5e2e1]">
      {/* Header */}
      <nav className="sticky top-0 z-[100] bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src={cosqLogo.src} alt="Logo" className="w-10 h-10 object-contain" />
            <span className="text-xl font-bold tracking-tight text-gradient">DESIGN LABS SHOWCASE</span>
          </div>
          <button 
            onClick={onBack} 
            className="group flex items-center gap-2 text-sm font-bold text-gray-300 hover:text-white transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-[#ff69b4] focus-visible:outline-none"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-24 pb-16 bg-[#050505]">
        <div className="container-centered text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-none bg-[#9D4EDD]/15 border border-[#9D4EDD]/30 text-purple-200 text-xs font-mono uppercase tracking-widest mb-8"
          >
            <Sparkles className="w-3 h-3 text-[#ff69b4]" /> The Curated Archive
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-extrabold mb-8 text-white tracking-tighter"
          >
            Proof of <br /> <span className="bg-gradient-to-r from-[#9D4EDD] to-[#ff69b4] bg-clip-text text-transparent italic font-extrabold">Innovation.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto mb-12 font-medium"
          >
            Explore our most impactful case studies and experiments across disciplines.
          </motion.p>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-none text-xs font-mono tracking-wider uppercase transition-all cursor-pointer hover:scale-[1.02] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-[#ff69b4] focus-visible:outline-none ${
                  filter === cat
                    ? "bg-[#ff69b4] text-white shadow-lg shadow-[#ff69b4]/20 font-bold"
                    : "bg-[#0b0b0c] border border-outline-variant/15 text-gray-400 hover:text-white hover:border-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-48 pt-16 bg-[#0a0a0a]">
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
                className="group flex flex-col bg-[#0b0b0c] border border-outline-variant/10 p-4 hover:border-[#ff69b4]/20 transition-all duration-300"
              >
                <div className={`relative overflow-hidden aspect-[4/3] bg-gradient-to-br ${project.color} mb-8 border border-outline-variant/10`}>
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/35 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform scale-95 group-hover:scale-100">
                    <button className="w-14 h-14 rounded-full bg-white text-gray-900 flex items-center justify-center shadow-2xl cursor-pointer hover:scale-105 transition-transform">
                      <ExternalLink className="w-6 h-6" />
                    </button>
                  </div>
                  <div className="absolute top-4 left-4 px-3 py-1.5 bg-black/30 backdrop-blur-md text-white text-[9px] font-mono uppercase tracking-widest border border-white/20">
                    {project.category}
                  </div>
                </div>
                <div className="px-2 text-left space-y-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#ff69b4] transition-colors uppercase tracking-wider">{project.title}</h3>
                  <p className="text-xs text-gray-300 leading-relaxed font-medium">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="py-24 text-center">
              <h3 className="text-2xl font-bold text-gray-400">Nothing to show here yet.</h3>
              <button 
                onClick={() => setFilter("All")} 
                className="mt-4 text-[#ff69b4] font-bold hover:underline cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 bg-[#050505] text-center border-t border-outline-variant/10">
        <div className="container-centered space-y-6">
          <h2 className="text-white text-4xl md:text-5xl font-extrabold uppercase tracking-tight">
            Have a Bold <br /> <span className="bg-gradient-to-r from-[#9D4EDD] to-[#ff69b4] bg-clip-text text-transparent italic font-extrabold">Project?</span>
          </h2>
          <div className="pt-4">
            <button 
              onClick={onBack} 
              className="px-8 py-3.5 bg-[#ff69b4] hover:bg-[#ff85c2] text-white font-mono text-xs font-bold tracking-widest uppercase transition-all hover:shadow-[0_0_20px_rgba(255,105,180,0.4)] cursor-pointer hover:scale-[1.02] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-[#ff69b4] focus-visible:outline-none"
            >
              Start the Conversation
            </button>
          </div>
          <p className="pt-12 text-gray-500 text-[9px] font-mono uppercase tracking-widest">
            © 2026 DESIGN LABS SHOWCASE BY COSQ
          </p>
        </div>
      </footer>
    </div>
  );
}
