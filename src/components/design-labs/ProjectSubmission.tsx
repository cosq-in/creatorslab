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
    <div className="design-labs-theme min-h-screen bg-gray-50">
      {/* Header */}
      <nav className="sticky top-0 z-[100] bg-white/70 backdrop-blur-xl border-b border-purple-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src={cosqLogo.src} alt="Logo" className="w-10 h-10 object-contain" />
            <span className="text-xl font-black tracking-tight text-gradient">INITIATE PROJECT</span>
          </div>
          <button onClick={onBack} className="group flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-purple-600 transition-colors">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </button>
        </div>
      </nav>

      <section className="py-24">
        <div className="container-centered max-w-4xl">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 text-purple-700 text-xs font-black uppercase tracking-widest mb-6"
            >
              <Sparkles className="w-3 h-3" /> The Design Lab
            </motion.div>
            <h1 className="text-5xl font-black mb-6">Let's Create <br /><span className="text-gradient">Something Iconic.</span></h1>
            <p className="text-gray-500 text-lg">Tell us about your brand vision and we'll help you bring it to life with world-class design.</p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card bg-white p-8 md:p-16"
          >
            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Company Name</label>
                  <input
                    required
                    className="w-full bg-purple-50/30 border border-purple-100 rounded-xl px-4 py-4 text-sm font-bold focus:border-purple-600 focus:bg-white transition-all outline-none"
                    type="text"
                    placeholder="E.g. Lumina Tech"
                    value={formData.companyName}
                    onChange={(e) => handleInputChange("companyName", e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Contact Person</label>
                  <input
                    required
                    className="w-full bg-purple-50/30 border border-purple-100 rounded-xl px-4 py-4 text-sm font-bold focus:border-purple-600 focus:bg-white transition-all outline-none"
                    type="text"
                    placeholder="John Doe"
                    value={formData.contactName}
                    onChange={(e) => handleInputChange("contactName", e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Email Address</label>
                  <input
                    required
                    className="w-full bg-purple-50/30 border border-purple-100 rounded-xl px-4 py-4 text-sm font-bold focus:border-purple-600 focus:bg-white transition-all outline-none"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">What are we building?</label>
                  <select
                    required
                    className="w-full bg-purple-50/30 border border-purple-100 rounded-xl px-4 py-4 text-sm font-bold focus:border-purple-600 focus:bg-white transition-all outline-none appearance-none"
                    value={formData.projectType}
                    onChange={(e) => handleInputChange("projectType", e.target.value)}
                  >
                    <option value="">Select project type</option>
                    <option value="Branding">Brand Identity & Logo</option>
                    <option value="UI/UX">UI/UX & Web Design</option>
                    <option value="3D">3D & Motion Graphics</option>
                    <option value="Full">Full Design Partnership</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Project Vision & Goals</label>
                <textarea
                  required
                  rows={6}
                  className="w-full bg-purple-50/30 border border-purple-100 rounded-2xl px-6 py-5 text-sm font-bold focus:border-purple-600 focus:bg-white transition-all outline-none resize-none"
                  placeholder="What's the story behind this project? What impact do you want to make?"
                  value={formData.description}
                  onChange={(e) => handleInputChange("description", e.target.value)}
                />
              </div>

              <div className="bg-purple-50/50 rounded-2xl p-8 border border-purple-100">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-purple-200 flex-center flex-shrink-0">
                    <Upload className="w-5 h-5 text-purple-700" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black mb-1 uppercase tracking-tight">Attachments</h4>
                    <p className="text-xs text-gray-500 mb-4">Briefs, moodboards, or current brand assets (Max 50MB).</p>
                    <button type="button" className="text-xs font-black text-purple-600 uppercase tracking-widest px-4 py-2 bg-white rounded-lg border border-purple-200 hover:bg-purple-50 transition-colors">Select Files</button>
                  </div>
                </div>
              </div>

              <button type="submit" className="btn-primary w-full py-5 text-lg">
                Transmit to Labs <Send className="ml-3 w-5 h-5" />
              </button>

              <p className="text-center text-[10px] font-bold text-gray-400 uppercase tracking-widest">Your data is secured by COSQ Systems.</p>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
