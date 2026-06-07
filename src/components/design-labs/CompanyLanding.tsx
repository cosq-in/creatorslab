"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Zap,
  Layers,
  Terminal,
  Globe,
  Mail,
  Share2,
  Menu,
  Hexagon,
  LayoutGrid,
} from "lucide-react";

interface CompanyLandingProps {
  onNavigate: (section: string) => void;
}

export function CompanyLanding({ onNavigate }: CompanyLandingProps) {
  const [sysTime, setSysTime] = useState("");

  // Live UTC clock
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setSysTime(now.toISOString().split("T")[1].split(".")[0] + " UTC");
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  // Mouse-follow radial for glass-panel cards
  const glassPanelRef = useRef<HTMLDivElement[]>([]);
  useEffect(() => {
    const panels = document.querySelectorAll<HTMLElement>(".dl-glass-panel");
    const handlers: Array<{ el: HTMLElement; move: (e: MouseEvent) => void; leave: () => void }> = [];
    panels.forEach((panel) => {
      const onMove = (e: MouseEvent) => {
        const rect = panel.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        panel.style.background = `radial-gradient(600px circle at ${x}px ${y}px, rgba(211,189,241,0.07), transparent 40%), rgba(26,9,51,0.4)`;
      };
      const onLeave = () => {
        panel.style.background = "rgba(26,9,51,0.4)";
      };
      panel.addEventListener("mousemove", onMove);
      panel.addEventListener("mouseleave", onLeave);
      handlers.push({ el: panel, move: onMove, leave: onLeave });
    });
    return () => {
      handlers.forEach(({ el, move, leave }) => {
        el.removeEventListener("mousemove", move);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  return (
    <div
      className="min-h-screen text-[#e5e2e1] overflow-x-hidden"
      style={{ backgroundColor: "#0a0a0a" }}
    >
      {/* CRT scanline overlay */}
      <div className="dl-crt-scanline" />

      {/* ── TERMINAL HEADER ─────────────────────────────────────────── */}
      <header
        className="fixed top-0 w-full z-[60] border-b border-white/[0.04] backdrop-blur-md"
        style={{ backgroundColor: "rgba(10,10,10,0.95)" }}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 h-10 flex items-center justify-between font-mono text-[10px] tracking-widest uppercase text-[#dcbfc9]/50">
          <div className="flex gap-6">
            <span>SYS_STATUS: OPTIMAL</span>
            <span>LATENCY: 12ms</span>
            <span>UPLINK: ACTIVE</span>
          </div>
          <div className="flex items-center gap-4">
            <span id="sys-clock">{sysTime || "00:00:00 UTC"}</span>
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ backgroundColor: "#00e292", boxShadow: "0 0 8px #00e292" }}
            />
          </div>
        </div>
      </header>

      {/* ── TOP NAV ──────────────────────────────────────────────────── */}
      <nav
        className="fixed top-10 w-full z-50 border-b border-white/[0.05] backdrop-blur-xl"
        style={{ backgroundColor: "rgba(10,10,10,0.92)" }}
      >
        <div className="flex justify-between items-center h-16 lg:h-[68px] px-6 lg:px-10 max-w-[1440px] mx-auto">
          {/* Logo */}
          <button
            onClick={() => window.location.reload()}
            className="font-bold text-white uppercase hover:opacity-80 transition-opacity cursor-pointer select-none shrink-0"
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "20px", letterSpacing: "-0.01em", border: "none", background: "none", outline: "none" }}
          >
            COSQ LABS
          </button>

          {/* Links */}
          <div className="hidden md:flex gap-8 lg:gap-10 items-center">
            <span
              className="font-mono text-[11px] tracking-widest uppercase cursor-pointer"
              style={{ color: "#d3bdf1", borderBottom: "1px solid rgba(211,189,241,0.5)", paddingBottom: "2px", fontFamily: "'JetBrains Mono', monospace" }}
            >
              Digital Labs
            </span>
            {[
              { label: "Creators Lab", action: () => window.location.reload() },
              { label: "Portfolio", action: () => onNavigate("portfolio") },
              { label: "Roster", action: () => onNavigate("careers") },
              { label: "Contact", action: () => onNavigate("submit-project") },
            ].map(({ label, action }) => (
              <button
                key={label}
                onClick={action}
                className="font-mono text-[11px] tracking-widest uppercase text-[#666] hover:text-white transition-colors cursor-pointer"
                style={{ fontFamily: "'JetBrains Mono', monospace", border: "none", background: "none", outline: "none", padding: 0 }}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onNavigate("submit-project")}
              className="hidden sm:block font-mono text-[11px] tracking-widest uppercase cursor-pointer active:scale-95 transition-all hover:bg-white/5"
              style={{
                padding: "7px 18px",
                border: "1px solid rgba(255,255,255,0.15)",
                color: "#e5e2e1",
                backgroundColor: "transparent",
                fontFamily: "'JetBrains Mono', monospace",
                outline: "none",
              }}
            >
              Inquire
            </button>
            <button
              className="text-[#666] cursor-pointer hover:text-white transition-colors p-1"
              onClick={() => window.location.reload()}
              style={{ border: "none", background: "none", outline: "none" }}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      {/* ── MAIN ─────────────────────────────────────────────────────── */}
      <main style={{ paddingTop: "calc(40px + 68px)" }}>

        {/* ── HERO ─────────────────────────────────────────────────── */}
        <section
          className="relative flex flex-col justify-center dl-hero-container"
          style={{ minHeight: "88vh", padding: "80px 40px 100px", maxWidth: "1440px", margin: "0 auto" }}
        >
          {/* Background image — right half */}
          <div className="absolute right-0 top-0 w-1/2 h-full -z-10 opacity-40">
            <img
              className="w-full h-full object-cover"
              alt="Abstract ultra-modern digital landscape — deep royal purple and obsidian black gradients"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2ApPZupBlvjJDV24Tcu0J7XhRQC2c9xnMQzcSpKH2z8hdcpKqTF5cmDKpqQsJ9C-mTbfEF4xvoWG7rEJRKEW7YwAfYY6gK71eHf99Z0i6JFK913gpeQa2YMyFUIzM2pg1_dTK1no1djUqvcoGqIRkwFhO9KgW9nQ1N4uuJL8p9TnoK-OXN6TbPBhGHuhP76jXXZOQA04dQgiqwOheAWxQe_ODT6CfXd1F9HMDbasGes0ru0G7oKMLpJb__maAbVOTvzadcq-59S8"
            />
          </div>

          {/* Hero text block */}
          <div className="max-w-4xl space-y-6 relative z-10">
            {/* Eyebrow */}
            <div className="flex items-center gap-4 text-[#4f3f6a]">
              <Hexagon className="w-5 h-5" />
              <span
                className="font-mono text-[12px] tracking-[0.3em] uppercase font-bold"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                VERSION 2.4.0 ALPHA
              </span>
            </div>

            {/* Headline */}
            <h1
              className="font-bold leading-none"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(56px, 6vw, 88px)",
                letterSpacing: "-0.04em",
                fontWeight: 700,
                color: "#e5e2e1",
              }}
            >
              We Design <br />
              the{" "}
              <span className="dl-unknown-gradient italic">Unknown.</span>
            </h1>

            {/* Body */}
            <p
              className="max-w-xl text-[#dcbfc9]"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "20px",
                lineHeight: "32px",
              }}
            >
              A hyper-focused digital laboratory crafting elite identities,
              immersive ecosystems, and the technical architecture of
              tomorrow&apos;s web.
            </p>

            {/* CTA buttons */}
            <div className="pt-6 flex gap-6 flex-wrap">
              <button
                onClick={() => onNavigate("submit-project")}
                className="flex items-center gap-2 font-mono text-[12px] tracking-widest uppercase transition-all hover:shadow-[0_0_20px_rgba(255,176,208,0.5)] cursor-pointer active:scale-95"
                style={{
                  padding: "20px 40px",
                  backgroundColor: "#ffb0d0",
                  color: "#63003d",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontWeight: 700,
                }}
              >
                INITIATE PROTOCOL <ArrowUpRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate("portfolio")}
                className="font-mono text-[12px] tracking-widest uppercase transition-all hover:bg-[#05ffa5] hover:text-[#003921] cursor-pointer active:scale-95"
                style={{
                  padding: "20px 40px",
                  border: "2px solid #05ffa5",
                  color: "#05ffa5",
                  backgroundColor: "transparent",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontWeight: 700,
                }}
              >
                VIEW ARCHIVE
              </button>
            </div>
          </div>

          {/* Bottom telemetry */}
          <div
            className="absolute bottom-10 left-10 flex items-center gap-12 font-mono text-[#dcbfc9]/40"
            style={{ fontSize: "14px", fontFamily: "'JetBrains Mono', monospace" }}
          >
            <div className="flex flex-col">
              <span style={{ color: "#dcbfc9" }}>LOC: 34.0522° N, 118.2437° W</span>
              <span>COSQ_CORE_OS</span>
            </div>
            <div className="w-px h-8 bg-[#564149]/30" />
            <div className="flex items-center gap-2">
              <Zap className="w-3.5 h-3.5" />
              <span>SYSTEMS ONLINE</span>
            </div>
          </div>
        </section>

        {/* ── STATS SECTION ────────────────────────────────────────── */}
        <section style={{ padding: "64px 40px", background: "#0d0d0d", borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
          <div className="max-w-[1440px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            {[
              { num: "250+", label: "Projects Deployed",  id: "001", color: "#ffb0d0", barW: "w-2/3" },
              { num: "80+",  label: "Global Clients",     id: "002", color: "#00e292", barW: "w-1/2" },
              { num: "12",   label: "Design Awards",      id: "003", color: "#d3bdf1", barW: "w-3/4" },
              { num: "08",   label: "Years Operating",    id: "004", color: "#e5e2e1", barW: "w-full" },
            ].map(({ num, label, id, color, barW }) => (
              <div key={id} className="dl-glass-panel p-6 relative group overflow-hidden">
                {/* Index */}
                <div
                  className="absolute top-0 right-0 p-2 font-mono text-[10px]"
                  style={{ color: "#8c0058", fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {id}
                </div>
                {/* Number */}
                <div
                  className="font-bold mb-2"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "48px",
                    lineHeight: "52px",
                    letterSpacing: "-0.02em",
                    color,
                  }}
                >
                  {num}
                </div>
                {/* Label */}
                <div
                  className="font-mono uppercase tracking-widest text-[11px] text-[#dcbfc9]"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {label}
                </div>
                {/* Progress bar */}
                <div className="mt-4 h-1 bg-[#564149]/20 w-full overflow-hidden">
                  <div
                    className={`h-full ${barW} group-hover:w-full transition-all duration-1000`}
                    style={{ backgroundColor: color }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── SERVICES / CAPABILITIES ──────────────────────────────── */}
        <section style={{ padding: "80px 40px", maxWidth: "1440px", margin: "0 auto" }}>
          {/* Section header */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="space-y-4">
              <h2
                className="font-mono text-[12px] uppercase tracking-[0.4em] font-bold"
                style={{ color: "#8c0058", fontFamily: "'JetBrains Mono', monospace" }}
              >
                CAPABILITIES
              </h2>
              <h3
                className="font-bold max-w-xl text-[#e5e2e1]"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "48px",
                  lineHeight: "52px",
                  letterSpacing: "-0.02em",
                }}
              >
                Forging the next evolution of digital presence.
              </h3>
            </div>
            <div
              className="font-mono text-[#dcbfc9]/60 max-w-xs text-right uppercase tracking-wider opacity-60"
              style={{ fontSize: "14px", fontFamily: "'JetBrains Mono', monospace" }}
            >
              We operate at the intersection of brutalist architecture and
              technical fluidity. Our services are tailored for the 0.1%.
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Brand Identity — col-span-2 */}
            <div
              className="col-span-1 md:col-span-2 group relative h-[500px] overflow-hidden border border-[#564149]/10"
              style={{ backgroundColor: "#1c1b1b" }}
            >
              <img
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-40"
                alt="Minimalist brand identity layout on dark granite"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRjObSgmgomG-fXO-JxWk_fGxMC5DmGDZEamSTlZUuQeap5eFUZ3RgV9WddGwViNaqlSkcb9XpYQfSaDRgxncY_0h5BwqtcYzGFhjsoWouooeHxn_Rkc4dW_UWVmRiCghC9ESgohtcE4Z0zkszEJ4Ksq7WtMW0D0cgD5wccY8TU3cobjOeoQDOyUyNaSzDY8i6oSLOqMRTcpvq19dCvs3JmWT4LWO6bo4c63yqaJNIzfRm-wvVT71rKR0HcuPIzzUT-CXMMIQkDcI"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to top, #0a0a0a, transparent)",
                }}
              />
              <div className="absolute bottom-0 left-0 p-6 w-full z-10">
                <div
                  className="font-mono text-[10px] uppercase tracking-widest mb-2 font-bold"
                  style={{ color: "#ffb0d0", fontFamily: "'JetBrains Mono', monospace" }}
                >
                  STRATEGY + AESTHETIC
                </div>
                <h4
                  className="font-bold mb-4 text-[#e5e2e1]"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "32px",
                    lineHeight: "40px",
                    letterSpacing: "0.02em",
                  }}
                >
                  Brand Identity
                </h4>
                <p
                  className="text-[#dcbfc9] max-w-sm mb-6"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "16px", lineHeight: "24px" }}
                >
                  Developing visual languages that command attention and define new
                  standards in digital luxury.
                </p>
                <button
                  onClick={() => onNavigate("portfolio")}
                  className="flex items-center gap-2 font-mono text-[12px] uppercase tracking-widest group-hover:gap-4 transition-all cursor-pointer text-[#e5e2e1]"
                  style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 700 }}
                >
                  EXPLORE SYSTEM <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* UI/UX */}
            <div
              className="group relative h-[500px] overflow-hidden border border-[#564149]/10"
              style={{ backgroundColor: "#1c1b1b" }}
            >
              <div
                className="absolute top-0 right-0 p-6 font-mono text-[#dcbfc9]/30"
                style={{ fontSize: "14px", fontFamily: "'JetBrains Mono', monospace" }}
              >
                MODULE_02
              </div>
              <div className="p-6 h-full flex flex-col justify-end">
                <div className="mb-auto pt-12">
                  <LayoutGrid className="w-10 h-10" style={{ color: "#00e292" }} />
                </div>
                <h4
                  className="font-bold mb-4 text-[#e5e2e1]"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "32px",
                    lineHeight: "40px",
                    letterSpacing: "0.02em",
                  }}
                >
                  UI/UX
                </h4>
                <p
                  className="text-[#dcbfc9] mb-6"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "16px", lineHeight: "24px" }}
                >
                  High-performance interfaces designed with mathematical precision
                  and human intuition.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["PROTOTYPING", "CORE_ARCHITECTURE"].map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 font-mono text-[10px] uppercase"
                      style={{
                        backgroundColor: "rgba(86,65,73,0.2)",
                        fontFamily: "'JetBrains Mono', monospace",
                        color: "#e5e2e1",
                        fontWeight: 700,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Content Strategy */}
            <div
              className="group relative h-[500px] overflow-hidden border border-[#564149]/10"
              style={{ backgroundColor: "#1c1b1b" }}
            >
              <div
                className="absolute top-0 right-0 p-6 font-mono text-[#dcbfc9]/30"
                style={{ fontSize: "14px", fontFamily: "'JetBrains Mono', monospace" }}
              >
                MODULE_03
              </div>
              <div className="p-6 h-full flex flex-col justify-end">
                <div className="mb-auto pt-12">
                  <Terminal className="w-10 h-10" style={{ color: "#d3bdf1" }} />
                </div>
                <h4
                  className="font-bold mb-4 text-[#e5e2e1]"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "32px",
                    lineHeight: "40px",
                    letterSpacing: "0.02em",
                  }}
                >
                  Content Strategy
                </h4>
                <p
                  className="text-[#dcbfc9] mb-6"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "16px", lineHeight: "24px" }}
                >
                  Hyper-relevant narratives and media assets designed for deep
                  conversion and impact.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["COPYWRITING", "VISUAL_NARRATIVE"].map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 font-mono text-[10px] uppercase"
                      style={{
                        backgroundColor: "rgba(86,65,73,0.2)",
                        fontFamily: "'JetBrains Mono', monospace",
                        color: "#e5e2e1",
                        fontWeight: 700,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Creative Direction — full width */}
            <div
              className="col-span-1 md:col-span-4 group relative h-[300px] overflow-hidden border border-[#564149]/10 mt-4"
              style={{ backgroundColor: "#353534" }}
            >
              {/* Ghost text watermark */}
              <div
                className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10"
                aria-hidden="true"
              >
                <span
                  className="font-bold leading-none whitespace-nowrap"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "20vw",
                    letterSpacing: "-0.04em",
                    color: "#e5e2e1",
                  }}
                >
                  CREATIVE DIRECTION
                </span>
              </div>
              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col md:flex-row justify-between items-center z-10">
                <div className="max-w-md">
                  <h4
                    className="font-bold text-[#e5e2e1] mb-3"
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "32px",
                      lineHeight: "40px",
                      letterSpacing: "0.02em",
                    }}
                  >
                    Creative Direction
                  </h4>
                  <p
                    className="text-[#dcbfc9]"
                    style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "20px", lineHeight: "32px" }}
                  >
                    Leading vision across multiple verticals to ensure cohesive,
                    boundary-pushing results.
                  </p>
                </div>
                <button
                  onClick={() => onNavigate("submit-project")}
                  className="mt-6 md:mt-0 font-mono text-[12px] uppercase tracking-widest transition-colors hover:text-[#0a0a0a] cursor-pointer active:scale-95"
                  style={{
                    padding: "16px 32px",
                    border: "1px solid #e5e2e1",
                    color: "#e5e2e1",
                    backgroundColor: "transparent",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontWeight: 700,
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#e5e2e1";
                    (e.currentTarget as HTMLButtonElement).style.color = "#0a0a0a";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.backgroundColor = "transparent";
                    (e.currentTarget as HTMLButtonElement).style.color = "#e5e2e1";
                  }}
                >
                  SCHEDULE AUDIT
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA SECTION ──────────────────────────────────────────── */}
        <section style={{ padding: "0 40px 80px", position: "relative", overflow: "hidden" }}>
          <div
            className="max-w-[1440px] mx-auto dl-glass-panel text-center relative z-10"
            style={{ border: "1px solid rgba(255,176,208,0.15)", padding: "80px 40px", display: "flex", flexDirection: "column", gap: "20px", alignItems: "center" }}
          >
            {/* Blur orbs */}
            <div
              className="absolute -top-10 -left-10 w-40 h-40 rounded-full pointer-events-none"
              style={{ backgroundColor: "rgba(255,176,208,0.1)", filter: "blur(100px)" }}
            />
            <div
              className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full pointer-events-none"
              style={{ backgroundColor: "rgba(5,255,165,0.08)", filter: "blur(100px)" }}
            />

            <h2
              className="font-bold text-[#e5e2e1]"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "48px",
                lineHeight: "52px",
                letterSpacing: "-0.02em",
              }}
            >
              Ready to build the future?
            </h2>
            <p
              className="text-[#dcbfc9] max-w-2xl mx-auto"
              style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "20px", lineHeight: "32px" }}
            >
              We are currently accepting new projects for Q3-Q4. Let&apos;s discuss
              your next breakthrough.
            </p>

            <div className="flex justify-center pt-8">
              <button
                onClick={() => onNavigate("submit-project")}
                className="group flex items-center gap-4 font-bold transition-all duration-500 cursor-pointer active:scale-95"
                style={{
                  padding: "24px 48px",
                  backgroundColor: "#e5e2e1",
                  color: "#131313",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "24px",
                  lineHeight: "32px",
                  letterSpacing: "-0.02em",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#ffb0d0";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#e5e2e1";
                }}
              >
                START A PROJECT
                <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* ── FOOTER ───────────────────────────────────────────────────── */}
      <footer
        style={{ backgroundColor: "#0a0a0a", borderTop: "1px solid rgba(255,255,255,0.05)", padding: "36px 40px" }}
      >
        <div className="flex flex-col md:flex-row justify-between items-center max-w-[1440px] mx-auto gap-5" style={{ flexWrap: "wrap" }}>
          {/* Left — logo + copyright on one line */}
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <div
              className="font-bold text-white uppercase"
              style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "18px", letterSpacing: "-0.01em" }}
            >
              COSQ LABS
            </div>
            <p
              className="font-mono uppercase"
              style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", letterSpacing: "0.15em", color: "#444" }}
            >
              © 2024 COSQ LABS. ALL RIGHTS RESERVED.
            </p>
          </div>

          {/* Centre links */}
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "24px 32px" }}>
            {["Privacy Policy", "Terms of Service", "Brand Guidelines", "Investor Relations"].map((link) => (
              <a
                key={link}
                href="#"
                className="font-mono uppercase transition-colors"
                style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", letterSpacing: "0.14em", color: "#444", textDecoration: "none" }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "#aaa")}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "#444")}
              >
                {link}
              </a>
            ))}
          </div>

          {/* Right icons */}
          <div style={{ display: "flex", gap: "20px" }}>
            {[Share2, Mail, Terminal].map((Icon, i) => (
              <a key={i} href="#" className="transition-colors" style={{ color: "#444" }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "#ffb0d0")}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "#444")}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
