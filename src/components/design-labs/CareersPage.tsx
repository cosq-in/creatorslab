"use client";

import { useState } from "react";
import { ArrowLeft, MapPin, Clock, Briefcase, Send, IndianRupee, Globe, Sparkles } from "lucide-react";

interface CareersPageProps {
  onBack: () => void;
}

const MONO: React.CSSProperties = { fontFamily: "'JetBrains Mono', monospace" };
const DISPLAY: React.CSSProperties = { fontFamily: "'Space Grotesk', sans-serif" };

const SubNav = ({ title, onBack }: { title: string; onBack: () => void }) => (
  <nav style={{
    position: "sticky", top: 0, zIndex: 100,
    background: "rgba(10,10,10,0.95)", backdropFilter: "blur(16px)",
    borderBottom: "1px solid rgba(255,255,255,0.05)",
    padding: "0 40px", height: "60px",
    display: "flex", alignItems: "center", justifyContent: "space-between",
  }}>
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <div style={{
        width: "24px", height: "24px",
        background: "rgba(211,189,241,0.12)",
        border: "1px solid rgba(211,189,241,0.25)",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <div style={{ width: "8px", height: "8px", background: "#d3bdf1", borderRadius: "50%" }} />
      </div>
      <span style={{ ...MONO, fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#d3bdf1" }}>
        {title}
      </span>
    </div>
    <button onClick={onBack} style={{
      display: "flex", alignItems: "center", gap: "8px",
      ...MONO, fontSize: "11px", color: "#555", letterSpacing: "0.1em",
      background: "none", border: "none", cursor: "pointer", outline: "none",
      textTransform: "uppercase", transition: "color 0.2s",
    }}
      onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "#e5e2e1")}
      onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "#555")}
    >
      <ArrowLeft size={14} /> Back to Home
    </button>
  </nav>
);

export function CareersPage({ onBack }: CareersPageProps) {
  const [selectedPosition, setSelectedPosition] = useState<any>(null);

  const positions = [
    {
      id: 1, title: "Senior Brand Designer", type: "Full-time",
      location: "Mumbai / Remote", experience: "5+ years", salary: "₹18–24 LPA",
      category: "Design",
      description: "We're looking for a visionary designer to lead brand creation for global tech and luxury clients. You will be responsible for end-to-end identity systems.",
      requirements: ["Mastery of Adobe CC & Figma", "Strong portfolio of brand identity work", "Experience leading design teams", "Excellent presentation skills"],
    },
    {
      id: 2, title: "UI/UX Design Lead", type: "Full-time",
      location: "Mumbai, India", experience: "4–6 years", salary: "₹15–20 LPA",
      category: "Product",
      description: "Lead the design of intuitive digital products. You'll work closely with product managers and engineers to craft seamless experiences.",
      requirements: ["Deep understanding of user-centered design", "Proven UI/UX track record", "Experience with design systems", "Prototyping mastery"],
    },
    {
      id: 3, title: "Motion Graphics Artist", type: "Contract",
      location: "Remote", experience: "3+ years", salary: "₹8–12 LPA",
      category: "Creative",
      description: "Bring static designs to life with compelling motion graphics. You'll create assets for social media, digital ads, and web experiences.",
      requirements: ["Advanced After Effects & C4D", "Strong sense of timing and motion", "Storyboarding ability", "Creative problem solving"],
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Application for ${selectedPosition.title} received. Our talent team will contact you soon.`);
    setSelectedPosition(null);
  };

  return (
    <div style={{ minHeight: "100vh", background: "#0a0a0a", color: "#e5e2e1" }}>
      <SubNav title="Design Labs Careers" onBack={onBack} />

      {/* Hero */}
      <section style={{ padding: "80px 40px 64px", maxWidth: "1440px", margin: "0 auto" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "5px 12px", border: "1px solid rgba(211,189,241,0.25)", background: "rgba(211,189,241,0.06)", marginBottom: "28px" }}>
          <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#00e292", boxShadow: "0 0 6px #00e292" }} />
          <span style={{ ...MONO, fontSize: "9px", letterSpacing: "0.3em", textTransform: "uppercase", color: "#d3bdf1" }}>Join the Vision</span>
        </div>

        <h1 style={{ ...DISPLAY, fontSize: "clamp(40px, 6vw, 72px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1, color: "#e5e2e1", margin: "0 0 16px 0" }}>
          Build the{" "}
          <span style={{ fontStyle: "italic", background: "linear-gradient(135deg, #d3bdf1 0%, #9D4EDD 50%, #ffb0d0 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            Future of Design.
          </span>
        </h1>
        <p style={{ ...DISPLAY, fontSize: "16px", color: "#555", lineHeight: 1.7, maxWidth: "560px", margin: 0 }}>
          We're searching for rebels, visionaries, and meticulous crafters to define the next era of visual identity.
        </p>
      </section>

      {/* Content */}
      <section style={{ padding: "0 40px 80px", maxWidth: "1440px", margin: "0 auto" }}>
        {!selectedPosition ? (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {positions.map(pos => (
              <div key={pos.id} style={{
                background: "#0d0d0d", border: "1px solid rgba(255,255,255,0.07)",
                padding: "32px 36px",
                display: "flex", justifyContent: "space-between", alignItems: "center",
                gap: "32px", flexWrap: "wrap",
                transition: "border-color 0.25s",
              }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderColor = "rgba(211,189,241,0.3)")}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)")}
              >
                <div style={{ flex: 1, minWidth: "280px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                    <span style={{ ...MONO, fontSize: "9px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", padding: "3px 8px", background: "rgba(211,189,241,0.1)", border: "1px solid rgba(211,189,241,0.2)", color: "#d3bdf1" }}>
                      {pos.category}
                    </span>
                    <span style={{ ...MONO, fontSize: "10px", color: "#444", display: "flex", alignItems: "center", gap: "4px" }}>
                      <MapPin size={11} /> {pos.location}
                    </span>
                  </div>
                  <h3 style={{ ...DISPLAY, fontSize: "clamp(18px, 2vw, 24px)", fontWeight: 800, color: "#e5e2e1", letterSpacing: "-0.02em", margin: "0 0 10px 0" }}>
                    {pos.title}
                  </h3>
                  <p style={{ ...DISPLAY, fontSize: "14px", color: "#555", lineHeight: 1.6, margin: 0, maxWidth: "600px" }}>
                    {pos.description}
                  </p>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "12px", minWidth: "160px" }}>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ ...MONO, fontSize: "18px", fontWeight: 800, color: "#e5e2e1" }}>{pos.salary}</div>
                    <div style={{ ...MONO, fontSize: "9px", color: "#444", letterSpacing: "0.18em", textTransform: "uppercase", marginTop: "4px" }}>{pos.type}</div>
                  </div>
                  <button onClick={() => setSelectedPosition(pos)} style={{
                    ...MONO, fontSize: "10px", fontWeight: 700, letterSpacing: "0.18em",
                    textTransform: "uppercase", padding: "10px 24px",
                    background: "transparent", border: "1px solid rgba(211,189,241,0.4)",
                    color: "#d3bdf1", cursor: "pointer", outline: "none",
                    transition: "all 0.2s",
                  }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.background = "#d3bdf1";
                      (e.currentTarget as HTMLElement).style.color = "#0a0a0a";
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.background = "transparent";
                      (e.currentTarget as HTMLElement).style.color = "#d3bdf1";
                    }}
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 380px", gap: "64px", alignItems: "start" }}>
            <div>
              <button onClick={() => setSelectedPosition(null)} style={{
                display: "flex", alignItems: "center", gap: "8px",
                ...MONO, fontSize: "10px", color: "#d3bdf1", letterSpacing: "0.12em",
                textTransform: "uppercase", background: "none", border: "none", cursor: "pointer",
                outline: "none", marginBottom: "32px",
              }}>
                <ArrowLeft size={14} /> Back to positions
              </button>
              <h2 style={{ ...DISPLAY, fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800, color: "#e5e2e1", letterSpacing: "-0.03em", margin: "0 0 24px 0" }}>
                {selectedPosition.title}
              </h2>
              <div style={{ display: "flex", gap: "24px", flexWrap: "wrap", padding: "20px 0", borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)", marginBottom: "40px" }}>
                {[
                  { Icon: MapPin, val: selectedPosition.location },
                  { Icon: Clock, val: selectedPosition.type },
                  { Icon: Briefcase, val: selectedPosition.experience },
                ].map(({ Icon, val }) => (
                  <span key={val} style={{ ...MONO, fontSize: "11px", color: "#666", display: "flex", alignItems: "center", gap: "6px" }}>
                    <Icon size={13} style={{ color: "#d3bdf1" }} /> {val}
                  </span>
                ))}
              </div>
              <div style={{ marginBottom: "32px" }}>
                <h4 style={{ ...DISPLAY, fontSize: "16px", fontWeight: 700, color: "#e5e2e1", textTransform: "uppercase", letterSpacing: "0.05em", margin: "0 0 12px 0" }}>Role Description</h4>
                <p style={{ ...DISPLAY, fontSize: "15px", color: "#666", lineHeight: 1.75, margin: 0 }}>{selectedPosition.description}</p>
              </div>
              <div>
                <h4 style={{ ...DISPLAY, fontSize: "16px", fontWeight: 700, color: "#e5e2e1", textTransform: "uppercase", letterSpacing: "0.05em", margin: "0 0 16px 0" }}>Requirements</h4>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                  {selectedPosition.requirements.map((req: string) => (
                    <li key={req} style={{ display: "flex", alignItems: "flex-start", gap: "12px", ...DISPLAY, fontSize: "14px", color: "#666" }}>
                      <span style={{ width: "6px", height: "6px", minWidth: "6px", borderRadius: "50%", background: "#d3bdf1", marginTop: "6px" }} />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Application form */}
            <div style={{ background: "#0d0d0d", border: "1px solid rgba(255,255,255,0.07)", padding: "36px", position: "sticky", top: "80px" }}>
              <h3 style={{ ...DISPLAY, fontSize: "16px", fontWeight: 700, color: "#e5e2e1", textTransform: "uppercase", letterSpacing: "0.05em", margin: "0 0 28px 0" }}>Application</h3>
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {[
                  { label: "Full Name", type: "text", placeholder: "Your full name" },
                  { label: "Email Address", type: "email", placeholder: "you@email.com" },
                  { label: "Portfolio URL", type: "url", placeholder: "https://..." },
                ].map(({ label, type, placeholder }) => (
                  <div key={label}>
                    <label style={{ ...MONO, fontSize: "9px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#555", display: "block", marginBottom: "8px" }}>{label}</label>
                    <input required type={type} placeholder={placeholder} style={{
                      width: "100%", background: "#080808", border: "1px solid rgba(255,255,255,0.08)",
                      color: "#e5e2e1", padding: "10px 14px", fontSize: "13px",
                      fontFamily: "'Space Grotesk', sans-serif", outline: "none", borderRadius: 0,
                    }} />
                  </div>
                ))}
                <button type="submit" style={{
                  ...MONO, fontSize: "10px", fontWeight: 800, letterSpacing: "0.18em",
                  textTransform: "uppercase", padding: "14px 24px",
                  background: "#d3bdf1", color: "#0a0a0a",
                  border: "none", cursor: "pointer", outline: "none",
                  display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
                  marginTop: "8px",
                }}>
                  Submit Application <Send size={13} />
                </button>
                <p style={{ ...MONO, fontSize: "9px", color: "#333", textAlign: "center", letterSpacing: "0.15em", textTransform: "uppercase", margin: 0 }}>Powered by COSQ Universe</p>
              </form>
            </div>
          </div>
        )}
      </section>

      {/* Perks */}
      <section style={{ background: "#0d0d0d", borderTop: "1px solid rgba(255,255,255,0.05)", padding: "80px 40px" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
          <div style={{ marginBottom: "48px" }}>
            <h2 style={{ ...DISPLAY, fontSize: "clamp(28px, 3vw, 40px)", fontWeight: 800, color: "#e5e2e1", letterSpacing: "-0.02em", margin: "0 0 12px 0" }}>Why Design with Us?</h2>
            <p style={{ ...DISPLAY, fontSize: "15px", color: "#555", lineHeight: 1.7, maxWidth: "480px", margin: 0 }}>
              We offer more than just a job — a creative laboratory where you experiment, fail, and succeed at the highest level.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "12px" }}>
            {[
              { Icon: IndianRupee, title: "Premium Pay", sub: "Top Tier Industry Standards" },
              { Icon: Globe, title: "Remote-First", sub: "Work from Anywhere" },
              { Icon: Sparkles, title: "Creative Cloud+", sub: "All Tools Provided" },
            ].map(({ Icon, title, sub }) => (
              <div key={title} style={{ background: "#0a0a0a", border: "1px solid rgba(255,255,255,0.06)", padding: "32px 28px" }}>
                <div style={{ width: "40px", height: "40px", background: "rgba(211,189,241,0.08)", border: "1px solid rgba(211,189,241,0.2)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
                  <Icon size={18} style={{ color: "#d3bdf1" }} />
                </div>
                <h4 style={{ ...DISPLAY, fontSize: "15px", fontWeight: 700, color: "#e5e2e1", margin: "0 0 6px 0", textTransform: "uppercase", letterSpacing: "0.04em" }}>{title}</h4>
                <p style={{ ...MONO, fontSize: "9px", color: "#444", letterSpacing: "0.15em", textTransform: "uppercase", margin: 0 }}>{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
