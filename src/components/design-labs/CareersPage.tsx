"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowLeft, Briefcase, Users, Clock, MapPin, Send, IndianRupee, Sparkles, Globe } from "lucide-react";
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
      description: "We're looking for a visionary designer to lead brand creation for global tech and luxury clients. You will be responsible for end-to-end identity systems.",
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
      description: "Lead the design of intuitive digital products. You'll work closely with product managers and engineers to craft seamless experiences.",
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
      description: "Bring static designs to life with compelling motion graphics. You'll create assets for social media, digital ads, and web experiences.",
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
    <div className="design-labs-theme">
      {/* Header */}
      <nav className="sticky top-0 z-[100] bg-white/70 backdrop-blur-xl border-b border-purple-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src={cosqLogo.src} alt="Logo" className="w-10 h-10 object-contain" />
            <span className="text-xl font-black tracking-tight text-gradient">DESIGN LABS CAREERS</span>
          </div>
          <button onClick={onBack} className="group flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-purple-600 transition-colors">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-white to-purple-50/30">
        <div className="container-centered text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 text-purple-700 text-xs font-black uppercase tracking-widest mb-8"
          >
            <Sparkles className="w-3 h-3" /> Join the Vision
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mb-8"
          >
            Build the <span className="text-gradient">Future of Design.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed"
          >
            We're searching for rebels, visionaries, and meticulous crafters to define the next era of visual identity.
          </motion.p>
        </div>
      </section>

      <section className="pb-32">
        <div className="container-centered">
          {!selectedPosition ? (
            <div className="max-w-4xl mx-auto space-y-8">
              {positions.map((pos, i) => (
                <motion.div
                  key={pos.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-8 md:p-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 group"
                >
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="px-3 py-1 rounded-full bg-purple-50 text-purple-600 text-[10px] font-black uppercase tracking-widest leading-none">
                        {pos.category}
                      </span>
                      <span className="text-gray-400 text-xs flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> {pos.location}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black mb-4 group-hover:text-purple-600 transition-colors">{pos.title}</h3>
                    <p className="text-gray-500 text-sm line-clamp-2 max-w-xl">{pos.description}</p>
                  </div>
                  <div className="flex flex-col items-end gap-4 min-w-[200px]">
                    <div className="text-right">
                      <div className="text-sm font-black text-gray-900">{pos.salary}</div>
                      <div className="text-xs text-gray-400 uppercase font-bold tracking-wider">{pos.type}</div>
                    </div>
                    <button
                      onClick={() => handleApply(pos)}
                      className="btn-primary w-full md:w-auto"
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
              className="max-w-5xl mx-auto"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                {/* Job Details */}
                <div className="lg:col-span-2">
                  <button onClick={handleBackToPositions} className="flex items-center gap-2 text-purple-600 font-bold mb-8 text-sm">
                    <ArrowLeft className="w-4 h-4" /> Back to job list
                  </button>
                  <h2 className="text-4xl md:text-5xl font-black mb-6">{selectedPosition.title}</h2>
                  <div className="flex flex-wrap gap-6 mb-12 py-6 border-y border-purple-50">
                    <div className="flex items-center gap-2 text-sm font-bold text-gray-500">
                      <MapPin className="w-4 h-4 text-purple-600" /> {selectedPosition.location}
                    </div>
                    <div className="flex items-center gap-2 text-sm font-bold text-gray-500">
                      <Clock className="w-4 h-4 text-purple-600" /> {selectedPosition.type}
                    </div>
                    <div className="flex items-center gap-2 text-sm font-bold text-gray-500">
                      <Briefcase className="w-4 h-4 text-purple-600" /> {selectedPosition.experience}
                    </div>
                  </div>

                  <div className="space-y-12 mb-16">
                    <div>
                      <h4 className="text-xl font-black mb-4">Role Description</h4>
                      <p className="text-gray-500 leading-relaxed text-lg">{selectedPosition.description}</p>
                    </div>
                    <div>
                      <h4 className="text-xl font-black mb-4">Requirements</h4>
                      <ul className="space-y-4">
                        {selectedPosition.requirements.map((req: string, i: number) => (
                          <li key={i} className="flex items-start gap-3 text-gray-500 font-semibold group">
                            <span className="w-2 h-2 mt-2 bg-purple-600 rounded-full group-hover:scale-150 transition-transform" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Application Form */}
                <div className="lg:col-span-1">
                  <div className="glass-card p-10 sticky top-[120px]">
                    <h3 className="text-2xl font-black mb-8 text-gradient">Application</h3>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Full Name</label>
                        <input
                          required
                          className="w-full bg-purple-50/50 border border-purple-100 rounded-xl px-4 py-3 text-sm font-semibold focus:border-purple-600 focus:bg-white transition-all outline-none"
                          type="text"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Email Address</label>
                        <input
                          required
                          className="w-full bg-purple-50/50 border border-purple-100 rounded-xl px-4 py-3 text-sm font-semibold focus:border-purple-600 focus:bg-white transition-all outline-none"
                          type="email"
                          placeholder="your@email.com"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Portfolio URL</label>
                        <input
                          required
                          className="w-full bg-purple-50/50 border border-purple-100 rounded-xl px-4 py-3 text-sm font-semibold focus:border-purple-600 focus:bg-white transition-all outline-none"
                          type="url"
                          placeholder="https://..."
                        />
                      </div>
                      <button type="submit" className="btn-primary w-full py-4 uppercase tracking-widest text-xs font-black">
                        Submit Application <Send className="ml-2 w-4 h-4" />
                      </button>
                    </form>
                    <p className="mt-8 text-center text-[10px] font-bold text-gray-400 uppercase tracking-widest">Powered by COSQ Universe</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Perks Section */}
      <section className="section-spacer bg-gray-50">
        <div className="container-centered text-center mb-16">
          <h2 className="text-4xl font-black mb-4">Why Design with Us?</h2>
          <p className="text-gray-500 max-w-xl mx-auto">We offer more than just a job; we offer a creative laboratory where you can experiment, fail, and succeed at the highest level.</p>
        </div>
        <div className="container-centered grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card p-10 text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex-center mx-auto mb-6">
              <IndianRupee className="text-purple-600 w-5 h-5" />
            </div>
            <h4 className="text-lg font-black mb-2">Premium Pay</h4>
            <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Top Tier Industry Standards</p>
          </div>
          <div className="glass-card p-10 text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex-center mx-auto mb-6">
              <Globe className="text-purple-600 w-5 h-5" />
            </div>
            <h4 className="text-lg font-black mb-2">Remote-First</h4>
            <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Work from Anywhere</p>
          </div>
          <div className="glass-card p-10 text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex-center mx-auto mb-6">
              <Sparkles className="text-purple-600 w-5 h-5" />
            </div>
            <h4 className="text-lg font-black mb-2">Creative Cloud+</h4>
            <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">All Tools Provided</p>
          </div>
        </div>
      </section>
    </div>
  );
}
