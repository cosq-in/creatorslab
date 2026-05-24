"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowLeft, Upload, Send, Sparkles } from "lucide-react";
import cosqLogo from "@/assets/design-labs/9b7838d4ff4793e150de59dc4cda78b5c3207879.png";

interface ProjectSubmissionProps {
  onBack: () => void;
}

export function ProjectSubmission({ onBack }: ProjectSubmissionProps) {
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    timeline: "",
    description: "",
    requirements: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! Your project blueprint has been received. Our lead architect will reach out within 24 hours.");
    onBack();
  };

  return (
    <div className="design-labs-theme min-h-screen bg-[#0a0a0a] text-[#e5e2e1]">
      {/* Header */}
      <nav className="sticky top-0 z-[100] bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src={cosqLogo.src} alt="Logo" className="w-10 h-10 object-contain" />
            <span className="text-xl font-bold tracking-tight text-gradient">INITIATE PROJECT</span>
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

      <section className="py-24 bg-[#0a0a0a]">
        <div className="container-centered max-w-4xl">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-none bg-[#9D4EDD]/15 border border-[#9D4EDD]/30 text-purple-200 text-xs font-mono uppercase tracking-widest mb-6"
            >
              <Sparkles className="w-3 h-3 text-[#ff69b4]" /> The Design Lab
            </motion.div>
            <h1 className="text-5xl font-extrabold text-white mb-6 tracking-tight">Let&apos;s Create <br /><span className="bg-gradient-to-r from-[#9D4EDD] to-[#ff69b4] bg-clip-text text-transparent italic font-extrabold">Something Iconic.</span></h1>
            <p className="text-gray-300 text-base font-medium">Tell us about your brand vision and we&apos;ll help you bring it to life with world-class design.</p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#0b0b0c] border border-outline-variant/15 p-8 md:p-16 rounded-none select-none text-left"
          >
            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-gray-300 mb-2.5">Company Name</label>
                  <input
                    required
                    className="w-full bg-[#050505] border border-outline-variant/15 text-white rounded-none px-4 py-3 text-sm font-medium focus:border-[#ff69b4] focus:ring-2 focus:ring-[#ff69b4]/50 focus:outline-none transition-all"
                    type="text"
                    placeholder="E.g. Lumina Tech"
                    value={formData.companyName}
                    onChange={(e) => handleInputChange("companyName", e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-gray-300 mb-2.5">Contact Person</label>
                  <input
                    required
                    className="w-full bg-[#050505] border border-outline-variant/15 text-white rounded-none px-4 py-3 text-sm font-medium focus:border-[#ff69b4] focus:ring-2 focus:ring-[#ff69b4]/50 focus:outline-none transition-all"
                    type="text"
                    placeholder="John Doe"
                    value={formData.contactName}
                    onChange={(e) => handleInputChange("contactName", e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-gray-300 mb-2.5">Email Address</label>
                  <input
                    required
                    className="w-full bg-[#050505] border border-outline-variant/15 text-white rounded-none px-4 py-3 text-sm font-medium focus:border-[#ff69b4] focus:ring-2 focus:ring-[#ff69b4]/50 focus:outline-none transition-all"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-gray-300 mb-2.5">What are we building?</label>
                  <select
                    required
                    className="w-full bg-[#050505] border border-outline-variant/15 text-white rounded-none px-4 py-3 text-sm font-medium focus:border-[#ff69b4] focus:ring-2 focus:ring-[#ff69b4]/50 focus:outline-none transition-all"
                    value={formData.projectType}
                    onChange={(e) => handleInputChange("projectType", e.target.value)}
                  >
                    <option value="" className="bg-[#0b0b0c]">Select project type</option>
                    <option value="Branding" className="bg-[#0b0b0c]">Brand Identity & Logo</option>
                    <option value="UI/UX" className="bg-[#0b0b0c]">UI/UX & Web Design</option>
                    <option value="3D" className="bg-[#0b0b0c]">3D & Motion Graphics</option>
                    <option value="Full" className="bg-[#0b0b0c]">Full Design Partnership</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-gray-300 mb-2.5">Project Vision & Goals</label>
                <textarea
                  required
                  rows={6}
                  className="w-full bg-[#050505] border border-outline-variant/15 text-white rounded-none px-4 py-3.5 text-sm font-medium focus:border-[#ff69b4] focus:ring-2 focus:ring-[#ff69b4]/50 focus:outline-none transition-all resize-none"
                  placeholder="What's the story behind this project? What impact do you want to make?"
                  value={formData.description}
                  onChange={(e) => handleInputChange("description", e.target.value)}
                />
              </div>

              <div className="bg-[#050505] rounded-none p-8 border border-outline-variant/10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                    <Upload className="w-5 h-5 text-[#ff69b4]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1 uppercase tracking-tight">Attachments</h4>
                    <p className="text-xs text-gray-400 mb-4 font-medium">Briefs, moodboards, or current brand assets (Max 50MB).</p>
                    <button type="button" className="text-xs font-mono font-bold text-white uppercase tracking-widest px-4 py-2 bg-transparent rounded-none border border-outline-variant/20 hover:border-white transition-colors cursor-pointer hover:scale-[1.02] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-[#ff69b4] focus-visible:outline-none">Select Files</button>
                  </div>
                </div>
              </div>

              <button 
                type="submit" 
                className="w-full py-4 bg-[#ff69b4] hover:bg-[#ff85c2] text-white font-mono text-xs font-bold tracking-widest uppercase transition-all hover:shadow-[0_0_20px_rgba(255,105,180,0.4)] flex items-center justify-center cursor-pointer hover:scale-[1.02] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-[#ff69b4] focus-visible:outline-none"
              >
                Transmit to Labs <Send className="ml-3 w-4 h-4" />
              </button>

              <p className="text-center text-[9px] font-mono text-gray-500 uppercase tracking-widest">Your data is secured by COSQ Systems.</p>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
