"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowLeft, Briefcase, Clock, MapPin, Send, IndianRupee, Sparkles, Globe } from "lucide-react";
import cosqLogo from "@/assets/design-labs/9b7838d4ff4793e150de59dc4cda78b5c3207879.png";

interface CareersPageProps {
  onBack: () => void;
}

export function CareersPage({ onBack }: CareersPageProps) {
  const [selectedPosition, setSelectedPosition] = useState<any>(null);
  const [applicationData, setApplicationData] = useState({
    name: "",
    email: "",
    phone: "",
    portfolio: "",
    resume: "",
    coverLetter: ""
  });

  const positions = [
    {
      id: 1,
      title: "Senior Brand Designer",
      type: "Full-time",
      location: "Mumbai / Remote",
      experience: "5+ years",
      salary: "₹18-24 LPA",
      category: "Design",
      description: "We&apos;re looking for a visionary designer to lead brand creation for global tech and luxury clients. You will be responsible for end-to-end identity systems.",
      requirements: [
        "Mastery of Adobe CC & Figma",
        "Strong portfolio of brand identity work",
        "Experience leading design teams",
        "Excellent presentation skills"
      ]
    },
    {
      id: 2,
      title: "UI/UX Design Lead",
      type: "Full-time",
      location: "Mumbai, India",
      experience: "4-6 years",
      salary: "₹15-20 LPA",
      category: "Product",
      description: "Lead the design of intuitive digital products. You&apos;ll work closely with product managers and engineers to craft seamless experiences.",
      requirements: [
        "Deep understanding of user-centered design",
        "Proven UI/UX track record",
        "Experience with design systems",
        "Prototyping mastery"
      ]
    },
    {
      id: 3,
      title: "Motion Graphics Artist",
      type: "Contract",
      location: "Remote",
      experience: "3+ years",
      salary: "₹8-12 LPA",
      category: "Creative",
      description: "Bring static designs to life with compelling motion graphics. You&apos;ll create assets for social media, digital ads, and web experiences.",
      requirements: [
        "Advanced After Effects & C4D",
        "Strong sense of timing and motion",
        "Storyboarding ability",
        "Creative problem solving"
      ]
    }
  ];

  const handleApply = (position: any) => {
    setSelectedPosition(position);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToPositions = () => {
    setSelectedPosition(null);
  };

  const handleInputChange = (field: string, value: string) => {
    setApplicationData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you! Application for ${selectedPosition.title} received. Our talent team will contact you soon.`);
    handleBackToPositions();
  };

  return (
    <div className="design-labs-theme min-h-screen bg-[#0a0a0a] text-[#e5e2e1]">
      {/* Header */}
      <nav className="sticky top-0 z-[100] bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src={cosqLogo.src} alt="Logo" className="w-10 h-10 object-contain" />
            <span className="text-xl font-bold tracking-tight text-gradient">DESIGN LABS CAREERS</span>
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

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-[#050505]">
        <div className="container-centered text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-none bg-[#9D4EDD]/15 border border-[#9D4EDD]/30 text-purple-200 text-xs font-mono uppercase tracking-widest mb-8"
          >
            <Sparkles className="w-3 h-3 text-[#ff69b4]" /> Join the Vision
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-extrabold mb-8 text-white tracking-tighter"
          >
            Build the <span className="bg-gradient-to-r from-[#9D4EDD] to-[#ff69b4] bg-clip-text text-transparent italic font-extrabold">Future of Design.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            We&apos;re searching for rebels, visionaries, and meticulous crafters to define the next era of visual identity.
          </motion.p>
        </div>
      </section>

      <section className="pb-32 pt-16 bg-[#0a0a0a]">
        <div className="container-centered">
          {!selectedPosition ? (
            <div className="max-w-4xl mx-auto space-y-8">
              {positions.map((pos, i) => (
                <motion.div
                  key={pos.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-[#0b0b0c] border border-outline-variant/15 p-8 md:p-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 group text-left hover:border-[#ff69b4]/20 transition-all duration-300"
                >
                  <div className="flex-1 space-y-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="px-3 py-1 bg-[#9D4EDD]/15 border border-[#9D4EDD]/30 text-purple-200 text-[9px] font-mono uppercase tracking-wider font-semibold">
                        {pos.category}
                      </span>
                      <span className="text-gray-400 text-xs flex items-center gap-1 font-mono">
                        <MapPin className="w-3.5 h-3.5 text-[#ff69b4]" /> {pos.location}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-[#ff69b4] transition-colors uppercase tracking-wider">{pos.title}</h3>
                    <p className="text-sm text-gray-300 leading-relaxed max-w-xl font-medium">{pos.description}</p>
                  </div>
                  <div className="flex flex-col items-stretch md:items-end gap-4 min-w-[200px] w-full md:w-auto">
                    <div className="text-left md:text-right">
                      <div className="text-xl font-bold text-white font-mono">{pos.salary}</div>
                      <div className="text-[10px] text-gray-400 uppercase font-mono tracking-wider mt-1">{pos.type}</div>
                    </div>
                    <button
                      onClick={() => handleApply(pos)}
                      className="px-6 py-3 bg-[#ff69b4] hover:bg-[#ff85c2] text-white font-mono text-xs font-bold tracking-widest uppercase transition-all hover:shadow-[0_0_15px_rgba(255,105,180,0.3)] cursor-pointer hover:scale-[1.02] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-[#ff69b4] focus-visible:outline-none"
                    >
                      Apply Now
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-5xl mx-auto text-left"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                {/* Job Details */}
                <div className="lg:col-span-2">
                  <button onClick={handleBackToPositions} className="flex items-center gap-2 text-[#ff69b4] font-mono text-xs uppercase tracking-wider mb-8 hover:underline cursor-pointer focus-visible:ring-2 focus-visible:ring-[#ff69b4] focus-visible:outline-none">
                    <ArrowLeft className="w-4 h-4" /> Back to job list
                  </button>
                  <h2 className="text-4xl md:text-5xl font-extrabold text-white uppercase tracking-tight">{selectedPosition.title}</h2>
                  <div className="flex flex-wrap gap-6 mb-12 py-6 border-y border-outline-variant/10 font-mono text-xs text-gray-300">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#ff69b4]" /> {selectedPosition.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#ff69b4]" /> {selectedPosition.type}
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-[#ff69b4]" /> {selectedPosition.experience}
                    </div>
                  </div>

                  <div className="space-y-12 mb-16">
                    <div>
                      <h4 className="text-xl font-bold text-white uppercase tracking-wider mb-4">Role Description</h4>
                      <p className="text-gray-300 leading-relaxed text-sm font-medium">{selectedPosition.description}</p>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white uppercase tracking-wider mb-4">Requirements</h4>
                      <ul className="space-y-4">
                        {selectedPosition.requirements.map((req: string, i: number) => (
                          <li key={i} className="flex items-start gap-3 text-gray-300 font-medium text-sm">
                            <span className="w-1.5 h-1.5 mt-2 bg-[#ff69b4] rounded-full flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Application Form */}
                <div className="lg:col-span-1">
                  <div className="bg-[#0b0b0c] border border-outline-variant/15 p-8 sticky top-[120px] rounded-none">
                    <h3 className="text-xl font-bold mb-8 text-gradient uppercase tracking-wider">Application</h3>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label className="block text-xs font-mono font-bold uppercase tracking-wider text-gray-300 mb-2.5">Full Name</label>
                        <input
                          required
                          className="w-full bg-[#050505] border border-outline-variant/15 text-white rounded-none px-4 py-3 text-sm font-medium focus:border-[#ff69b4] focus:ring-2 focus:ring-[#ff69b4]/50 focus:outline-none transition-all"
                          type="text"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono font-bold uppercase tracking-wider text-gray-300 mb-2.5">Email Address</label>
                        <input
                          required
                          className="w-full bg-[#050505] border border-outline-variant/15 text-white rounded-none px-4 py-3 text-sm font-medium focus:border-[#ff69b4] focus:ring-2 focus:ring-[#ff69b4]/50 focus:outline-none transition-all"
                          type="email"
                          placeholder="your@email.com"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono font-bold uppercase tracking-wider text-gray-300 mb-2.5">Portfolio URL</label>
                        <input
                          required
                          className="w-full bg-[#050505] border border-outline-variant/15 text-white rounded-none px-4 py-3 text-sm font-medium focus:border-[#ff69b4] focus:ring-2 focus:ring-[#ff69b4]/50 focus:outline-none transition-all"
                          type="url"
                          placeholder="https://..."
                        />
                      </div>
                      <button type="submit" className="w-full py-4 bg-[#ff69b4] hover:bg-[#ff85c2] text-white font-mono text-xs font-bold tracking-widest uppercase transition-all hover:shadow-[0_0_15px_rgba(255,105,180,0.3)] flex items-center justify-center cursor-pointer hover:scale-[1.02] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-[#ff69b4] focus-visible:outline-none">
                        Submit Application <Send className="ml-2 w-4 h-4" />
                      </button>
                    </form>
                    <p className="mt-8 text-center text-[9px] font-mono text-gray-500 uppercase tracking-widest">Powered by COSQ Universe</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Perks Section */}
      <section className="py-24 bg-[#050505] border-t border-outline-variant/10">
        <div className="container-centered text-center mb-16 space-y-4">
          <h2 className="text-4xl font-extrabold text-white uppercase tracking-tight">Why Design with Us?</h2>
          <p className="text-gray-300 max-w-xl mx-auto text-sm leading-relaxed font-medium">We offer more than just a job; we offer a creative laboratory where you can experiment, fail, and succeed at the highest level.</p>
        </div>
        <div className="container-centered grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#0a0a0a] border border-outline-variant/15 p-10 text-center hover:border-[#ff69b4]/20 transition-all duration-300">
            <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-6">
              <IndianRupee className="text-[#ff69b4] w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-white uppercase tracking-wider mb-2">Premium Pay</h4>
            <p className="text-[9px] text-gray-400 font-mono uppercase tracking-wider font-semibold">Top Tier Industry Standards</p>
          </div>
          <div className="bg-[#0a0a0a] border border-outline-variant/15 p-10 text-center hover:border-[#ff69b4]/20 transition-all duration-300">
            <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-6">
              <Globe className="text-[#ff69b4] w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-white uppercase tracking-wider mb-2">Remote-First</h4>
            <p className="text-[9px] text-gray-400 font-mono uppercase tracking-wider font-semibold">Work from Anywhere</p>
          </div>
          <div className="bg-[#0a0a0a] border border-outline-variant/15 p-10 text-center hover:border-[#ff69b4]/20 transition-all duration-300">
            <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-6">
              <Sparkles className="text-[#ff69b4] w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-white uppercase tracking-wider mb-2">Creative Cloud+</h4>
            <p className="text-[9px] text-gray-400 font-mono uppercase tracking-wider font-semibold">All Tools Provided</p>
          </div>
        </div>
      </section>
    </div>
  );
}
