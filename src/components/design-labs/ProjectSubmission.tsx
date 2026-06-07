"use client";

import { useState } from "react";
import { ArrowLeft, Upload, Send } from "lucide-react";

interface ProjectSubmissionProps {
  onBack: () => void;
}

const MONO: React.CSSProperties = { fontFamily: "'JetBrains Mono', monospace" };
const DISPLAY: React.CSSProperties = { fontFamily: "'Space Grotesk', sans-serif" };

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "#080808",
  border: "1px solid rgba(255,255,255,0.09)",
  color: "#e5e2e1",
  padding: "12px 16px",
  fontSize: "14px",
  fontFamily: "'Space Grotesk', sans-serif",
  outline: "none",
  borderRadius: 0,
  transition: "border-color 0.2s",
  appearance: "none" as const,
};

const labelStyle: React.CSSProperties = {
  ...MONO,
  fontSize: "10px",
  fontWeight: 700,
  letterSpacing: "0.18em",
  textTransform: "uppercase" as const,
  color: "#666",
  display: "block",
  marginBottom: "8px",
};

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <label style={labelStyle}>{label}</label>
      {children}
    </div>
  );
}

export function ProjectSubmission({ onBack }: ProjectSubmissionProps) {
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    projectType: "",
    description: "",
  });

  const [focused, setFocused] = useState<string | null>(null);

  const set = (field: string, value: string) =>
    setFormData(prev => ({ ...prev, [field]: value }));

  const getFocusStyle = (name: string): React.CSSProperties => ({
    ...inputStyle,
    borderColor: focused === name ? "rgba(211,189,241,0.5)" : "rgba(255,255,255,0.09)",
    boxShadow: focused === name ? "0 0 0 1px rgba(211,189,241,0.15)" : "none",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Project blueprint received. Our lead architect will reach out within 24 hours.");
    onBack();
  };

  return (
    <div style={{ minHeight: "100vh", background: "#0a0a0a", color: "#e5e2e1" }}>

      {/* Nav */}
      <nav style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "rgba(10,10,10,0.95)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
        padding: "0 40px",
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        maxWidth: "100%",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{
            width: "24px", height: "24px",
            background: "rgba(211,189,241,0.15)",
            border: "1px solid rgba(211,189,241,0.3)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <div style={{ width: "8px", height: "8px", background: "#d3bdf1", borderRadius: "50%" }} />
          </div>
          <span style={{ ...MONO, fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#d3bdf1" }}>
            Initiate Project
          </span>
        </div>
        <button
          onClick={onBack}
          style={{
            display: "flex", alignItems: "center", gap: "8px",
            ...MONO, fontSize: "11px", color: "#666", letterSpacing: "0.1em",
            background: "none", border: "none", cursor: "pointer", outline: "none",
            textTransform: "uppercase", transition: "color 0.2s",
          }}
          onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "#e5e2e1")}
          onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "#666")}
        >
          <ArrowLeft size={14} />
          Back to Home
        </button>
      </nav>

      {/* Page layout: left column (info) + right column (form) */}
      <div style={{
        maxWidth: "1440px",
        margin: "0 auto",
        padding: "0 40px",
        display: "grid",
        gridTemplateColumns: "1fr 1.6fr",
        gap: "80px",
        alignItems: "start",
        minHeight: "calc(100vh - 60px)",
      }}
        className="flex-col-mobile"
      >

        {/* Left — info panel */}
        <div style={{ paddingTop: "80px", paddingBottom: "80px", position: "sticky", top: "80px" }}>
          {/* Eyebrow */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            padding: "5px 12px",
            border: "1px solid rgba(211,189,241,0.25)",
            background: "rgba(211,189,241,0.06)",
            marginBottom: "28px",
          }}>
            <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#00e292", boxShadow: "0 0 6px #00e292" }} />
            <span style={{ ...MONO, fontSize: "9px", letterSpacing: "0.3em", textTransform: "uppercase", color: "#d3bdf1" }}>
              The Design Lab
            </span>
          </div>

          {/* Headline */}
          <h1 style={{
            ...DISPLAY,
            fontSize: "clamp(36px, 4vw, 56px)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            lineHeight: 1,
            color: "#e5e2e1",
            margin: "0 0 12px 0",
          }}>
            Let&apos;s Create
          </h1>
          <h1 style={{
            ...DISPLAY,
            fontSize: "clamp(36px, 4vw, 56px)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            lineHeight: 1,
            fontStyle: "italic",
            background: "linear-gradient(135deg, #d3bdf1 0%, #9D4EDD 50%, #ffb0d0 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            margin: "0 0 32px 0",
          }}>
            Something Iconic.
          </h1>

          <p style={{
            ...DISPLAY,
            fontSize: "15px",
            color: "#555",
            lineHeight: 1.7,
            maxWidth: "380px",
            margin: "0 0 48px 0",
          }}>
            Tell us about your brand vision and we&apos;ll help you bring it to life with world-class design and technical precision.
          </p>

          {/* Three quick facts */}
          {[
            { label: "Response Time", value: "< 24 hrs" },
            { label: "Projects Delivered", value: "250+" },
            { label: "Satisfaction Rate", value: "99.2%" },
          ].map(({ label, value }) => (
            <div key={label} style={{
              display: "flex", justifyContent: "space-between", alignItems: "baseline",
              padding: "14px 0",
              borderBottom: "1px solid rgba(255,255,255,0.05)",
            }}>
              <span style={{ ...MONO, fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#444" }}>{label}</span>
              <span style={{ ...DISPLAY, fontSize: "18px", fontWeight: 700, color: "#e5e2e1" }}>{value}</span>
            </div>
          ))}
        </div>

        {/* Right — form */}
        <div style={{ paddingTop: "80px", paddingBottom: "80px" }}>
          <form
            onSubmit={handleSubmit}
            style={{
              background: "#0d0d0d",
              border: "1px solid rgba(255,255,255,0.07)",
              padding: "48px",
              display: "flex",
              flexDirection: "column",
              gap: "28px",
            }}
          >
            {/* Row 1 */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
              <Field label="Company Name">
                <input
                  required type="text" placeholder="E.g. Lumina Tech"
                  value={formData.companyName}
                  onChange={e => set("companyName", e.target.value)}
                  onFocus={() => setFocused("company")}
                  onBlur={() => setFocused(null)}
                  style={getFocusStyle("company")}
                />
              </Field>
              <Field label="Contact Person">
                <input
                  required type="text" placeholder="John Doe"
                  value={formData.contactName}
                  onChange={e => set("contactName", e.target.value)}
                  onFocus={() => setFocused("contact")}
                  onBlur={() => setFocused(null)}
                  style={getFocusStyle("contact")}
                />
              </Field>
            </div>

            {/* Row 2 */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
              <Field label="Email Address">
                <input
                  required type="email" placeholder="you@company.com"
                  value={formData.email}
                  onChange={e => set("email", e.target.value)}
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused(null)}
                  style={getFocusStyle("email")}
                />
              </Field>
              <Field label="What Are We Building?">
                <select
                  required
                  value={formData.projectType}
                  onChange={e => set("projectType", e.target.value)}
                  onFocus={() => setFocused("type")}
                  onBlur={() => setFocused(null)}
                  style={{ ...getFocusStyle("type"), color: formData.projectType ? "#e5e2e1" : "#444" }}
                >
                  <option value="" style={{ background: "#0d0d0d", color: "#888" }}>Select project type</option>
                  <option value="Branding" style={{ background: "#0d0d0d" }}>Brand Identity &amp; Logo</option>
                  <option value="UI/UX" style={{ background: "#0d0d0d" }}>UI/UX &amp; Web Design</option>
                  <option value="3D" style={{ background: "#0d0d0d" }}>3D &amp; Motion Graphics</option>
                  <option value="Full" style={{ background: "#0d0d0d" }}>Full Design Partnership</option>
                </select>
              </Field>
            </div>

            {/* Divider */}
            <div style={{ height: "1px", background: "rgba(255,255,255,0.05)" }} />

            {/* Textarea */}
            <Field label="Project Vision & Goals">
              <textarea
                required rows={6}
                placeholder="What's the story behind this project? What impact do you want to make?"
                value={formData.description}
                onChange={e => set("description", e.target.value)}
                onFocus={() => setFocused("desc")}
                onBlur={() => setFocused(null)}
                style={{ ...getFocusStyle("desc"), resize: "none", lineHeight: 1.7 }}
              />
            </Field>

            {/* Attachments */}
            <div style={{
              background: "#080808",
              border: "1px solid rgba(255,255,255,0.07)",
              padding: "20px 24px",
              display: "flex",
              alignItems: "center",
              gap: "20px",
            }}>
              <div style={{
                width: "40px", height: "40px", minWidth: "40px",
                background: "rgba(211,189,241,0.08)",
                border: "1px solid rgba(211,189,241,0.2)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <Upload size={16} style={{ color: "#d3bdf1" }} />
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ ...DISPLAY, fontSize: "13px", fontWeight: 700, color: "#e5e2e1", margin: "0 0 3px 0" }}>
                  Attachments
                </p>
                <p style={{ ...MONO, fontSize: "10px", color: "#444", letterSpacing: "0.05em", margin: 0 }}>
                  Briefs, moodboards, or current brand assets — Max 50MB
                </p>
              </div>
              <button
                type="button"
                style={{
                  ...MONO, fontSize: "10px", fontWeight: 700,
                  letterSpacing: "0.15em", textTransform: "uppercase",
                  padding: "8px 16px",
                  border: "1px solid rgba(255,255,255,0.15)",
                  color: "#aaa",
                  background: "transparent",
                  cursor: "pointer",
                  outline: "none",
                  transition: "border-color 0.2s, color 0.2s",
                  whiteSpace: "nowrap" as const,
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.4)";
                  (e.currentTarget as HTMLElement).style.color = "#fff";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.15)";
                  (e.currentTarget as HTMLElement).style.color = "#aaa";
                }}
              >
                Select Files
              </button>
            </div>

            {/* Divider */}
            <div style={{ height: "1px", background: "rgba(255,255,255,0.05)" }} />

            {/* Submit */}
            <button
              type="submit"
              style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: "12px",
                padding: "16px 32px",
                background: "#d3bdf1",
                color: "#0a0a0a",
                ...MONO, fontSize: "11px", fontWeight: 800,
                letterSpacing: "0.2em", textTransform: "uppercase",
                border: "none", cursor: "pointer", outline: "none",
                transition: "background 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = "#c4a8f0";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 24px rgba(211,189,241,0.3)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = "#d3bdf1";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              Transmit to Labs <Send size={14} />
            </button>

            <p style={{ ...MONO, fontSize: "9px", textAlign: "center", color: "#333", letterSpacing: "0.18em", textTransform: "uppercase", margin: 0 }}>
              Your data is secured by COSQ Systems.
            </p>
          </form>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .flex-col-mobile {
            grid-template-columns: 1fr !important;
            gap: 0 !important;
            padding: 0 24px !important;
          }
        }
      `}</style>
    </div>
  );
}
