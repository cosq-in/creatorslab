"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Instagram, Calendar, Users, TrendingUp, Award, Zap } from "lucide-react";

const MONO: React.CSSProperties = { fontFamily: "'JetBrains Mono', monospace" };
const DISPLAY: React.CSSProperties = { fontFamily: "'Space Grotesk', sans-serif" };

const SubNav = ({ title, backHref, backLabel = "Back to Home" }: { title: string; backHref: string; backLabel?: string }) => (
  <nav style={{
    position: "sticky", top: 0, zIndex: 100,
    background: "rgba(10,10,10,0.95)", backdropFilter: "blur(16px)",
    borderBottom: "1px solid rgba(157,78,221,0.05)",
    padding: "0 40px", height: "60px",
    display: "flex", alignItems: "center", justifyContent: "space-between",
  }}>
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <div style={{ width: "24px", height: "24px", background: "rgba(255,105,180,0.12)", border: "1px solid rgba(255,105,180,0.25)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ width: "8px", height: "8px", background: "#FF69B4", borderRadius: "50%" }} />
      </div>
      <span style={{ ...MONO, fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#FF69B4" }}>{title}</span>
    </div>
    <Link href={backHref} style={{
      display: "flex", alignItems: "center", gap: "8px",
      ...MONO, fontSize: "11px", color: "#645578", letterSpacing: "0.1em",
      textTransform: "uppercase", transition: "color 0.2s", textDecoration: "none",
    }}
      onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "var(--text-light)")}
      onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "#645578")}
    >
      <ArrowLeft size={14} /> {backLabel}
    </Link>
  </nav>
);

function StatPill({ value, label, accent }: { value: string; label: string; accent?: string }) {
  return (
    <div style={{ padding: "24px 28px", background: "var(--bg-card)", border: "1px solid rgba(157,78,221,0.06)", flex: 1, minWidth: "140px" }}>
      <div style={{ ...DISPLAY, fontSize: "clamp(28px, 3vw, 40px)", fontWeight: 800, letterSpacing: "-0.03em", color: accent || "#FF69B4", lineHeight: 1, marginBottom: "6px" }}>{value}</div>
      <div style={{ ...MONO, fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#4d4160" }}>{label}</div>
    </div>
  );
}

function TimelineNode({ year, title, desc, accent, last }: { year: string; title: string; desc: string; accent: string; last?: boolean }) {
  return (
    <div style={{ display: "flex", gap: "24px", position: "relative" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
        <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: accent, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1 }}>
          <span style={{ ...MONO, fontSize: "9px", fontWeight: 800, color: "var(--bg-dark)", letterSpacing: "0.05em" }}>{year}</span>
        </div>
        {!last && <div style={{ width: "1px", flex: 1, background: "rgba(157,78,221,0.06)", marginTop: "8px", minHeight: "60px" }} />}
      </div>
      <div style={{ paddingBottom: last ? 0 : "48px", paddingTop: "8px" }}>
        <h4 style={{ ...DISPLAY, fontSize: "16px", fontWeight: 700, color: "var(--text-light)", margin: "0 0 8px 0" }}>{title}</h4>
        <p style={{ ...DISPLAY, fontSize: "14px", color: "#645578", lineHeight: 1.65, margin: 0, maxWidth: "480px" }}>{desc}</p>
      </div>
    </div>
  );
}

function ActivityCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        padding: "24px 28px",
        background: "var(--bg-card)",
        border: `1px solid ${hov ? "rgba(255,105,180,0.25)" : "rgba(157,78,221,0.06)"}`,
        transition: "border-color 0.25s",
        display: "flex", gap: "16px", alignItems: "flex-start",
      }}
    >
      <div style={{ width: "36px", height: "36px", minWidth: "36px", background: "rgba(255,105,180,0.08)", border: "1px solid rgba(255,105,180,0.18)", display: "flex", alignItems: "center", justifyContent: "center", color: "#FF69B4" }}>
        {icon}
      </div>
      <div>
        <h4 style={{ ...DISPLAY, fontSize: "14px", fontWeight: 700, color: "var(--text-light)", margin: "0 0 6px 0" }}>{title}</h4>
        <p style={{ ...DISPLAY, fontSize: "13px", color: "#645578", lineHeight: 1.6, margin: 0 }}>{desc}</p>
      </div>
    </div>
  );
}

function SponsorBadge({ name, tier, price }: { name: string; tier: string; price: string }) {
  const colors: Record<string, string> = { gold: "#f59e0b", silver: "#9ca3af", bronze: "#b45309", special: "#FF69B4" };
  const c = colors[tier] || "#FF69B4";
  return (
    <div style={{ padding: "16px 20px", background: "var(--bg-card)", border: `1px solid ${c}22`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <div>
        <span style={{ ...MONO, fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase", color: c, display: "block", marginBottom: "4px" }}>{tier}</span>
        <span style={{ ...DISPLAY, fontSize: "14px", fontWeight: 700, color: "var(--text-light)" }}>{name}</span>
      </div>
      <span style={{ ...MONO, fontSize: "12px", fontWeight: 700, color: c }}>{price}</span>
    </div>
  );
}

function DeliverableTag({ label }: { label: string }) {
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "6px 14px", border: "1px solid rgba(255,105,180,0.2)", background: "rgba(255,105,180,0.04)" }}>
      <div style={{ width: "5px", height: "5px", background: "#FF69B4", borderRadius: "50%", flexShrink: 0 }} />
      <span style={{ ...MONO, fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#a294b8" }}>{label}</span>
    </div>
  );
}

// ─── Portfolio grid (landing) ───────────────────────────────────────────────

const GRID_PROJECTS = [
  {
    id: "q-chan",
    title: "Q-Chan",
    subtitle: "COSQ Original Character — 2D + VRoid Mascot Design",
    category: "Character Design",
    year: "2024",
    tags: ["Character Design", "3D"],
    preview: "/design-labs/WhatsApp Unknown 2026-06-07 at 7.03.55 AM/WhatsApp Image 2026-06-07 at 6.59.57 AM (1).jpeg",
    overlayGradient: "linear-gradient(to top, rgba(59,7,100,0.92) 0%, rgba(124,58,237,0.5) 50%, rgba(0,0,0,0.1) 100%)",
    accent: "#FF69B4",
    stats: "172cm OC · Heterochromia · VRoid Rigged",
    featured: true,
  },
  {
    id: "oac-cosq",
    title: "OAC × CosQ",
    subtitle: "Odisha Anime Club · Full Brand & Event Identity",
    category: "Event Design",
    year: "2024",
    tags: ["Branding", "Event", "Campaign"],
    preview: "/design-labs/brochure pdf.pdf",
    previewColor: "linear-gradient(135deg, #1a0033 0%, #4c1d95 50%, #FF69B4 100%)",
    overlayGradient: "linear-gradient(to top, rgba(26,0,51,0.95) 0%, rgba(76,29,149,0.55) 50%, rgba(0,0,0,0.1) 100%)",
    accent: "#FF69B4",
    stats: "5,000+ Attendees · 34+ Events · 4 Years",
    featured: true,
  },
  {
    id: "lumina",
    title: "Lumina Tech Rebrand",
    subtitle: "Silicon valley unicorn identity overhaul",
    category: "Branding",
    year: "2024",
    tags: ["Brand Identity", "Typography"],
    previewColor: "linear-gradient(135deg, #1d4ed8, #3730a3)",
    overlayGradient: "linear-gradient(to top, rgba(29,78,216,0.9) 0%, rgba(55,48,163,0.4) 60%, transparent 100%)",
    accent: "#818cf8",
    stats: "Complete identity system · 3 brand expressions",
  },
  {
    id: "verve",
    title: "Verve Mobile OS",
    subtitle: "Next-gen OS interface for spatial gestures",
    category: "UI/UX",
    year: "2023",
    tags: ["UI/UX", "Product"],
    previewColor: "linear-gradient(135deg, #7c3aed, #db2777)",
    overlayGradient: "linear-gradient(to top, rgba(124,58,237,0.9) 0%, rgba(219,39,119,0.4) 60%, transparent 100%)",
    accent: "#FF69B4",
    stats: "48 screens · Full design system",
  },
  {
    id: "nebula",
    title: "Nebula 3D Series",
    subtitle: "Abstract 3D environments for digital consciousness",
    category: "3D",
    year: "2024",
    tags: ["3D", "Motion"],
    previewColor: "linear-gradient(135deg, #ea580c, #b91c1c)",
    overlayGradient: "linear-gradient(to top, rgba(234,88,12,0.9) 0%, rgba(185,28,28,0.4) 60%, transparent 100%)",
    accent: "#fb923c",
    stats: "12-piece series · Motion exports",
  },
  {
    id: "synth",
    title: "Synth Audio Campaign",
    subtitle: "High-impact social campaign for premium audio gear",
    category: "Content",
    year: "2023",
    tags: ["Content", "Social"],
    previewColor: "linear-gradient(135deg, #059669, #0d9488)",
    overlayGradient: "linear-gradient(to top, rgba(5,150,105,0.9) 0%, rgba(13,148,136,0.4) 60%, transparent 100%)",
    accent: "#06FFA5",
    stats: "2.4M reach · 60+ assets",
  },
  {
    id: "apex",
    title: "Apex Gaming Hub",
    subtitle: "Competitive platform designed for visual dominance",
    category: "UI/UX",
    year: "2024",
    tags: ["UI/UX", "Gaming"],
    previewColor: "linear-gradient(135deg, #6d28d9, #a21caf)",
    overlayGradient: "linear-gradient(to top, rgba(109,40,217,0.9) 0%, rgba(162,28,175,0.4) 60%, transparent 100%)",
    accent: "#a78bfa",
    stats: "Web + mobile · Design system",
  },
  {
    id: "origin",
    title: "Origin Organic",
    subtitle: "Premium packaging for high-end skincare line",
    category: "Branding",
    year: "2023",
    tags: ["Packaging", "Brand"],
    previewColor: "linear-gradient(135deg, #d97706, #c2410c)",
    overlayGradient: "linear-gradient(to top, rgba(217,119,6,0.9) 0%, rgba(196,65,12,0.4) 60%, transparent 100%)",
    accent: "#fbbf24",
    stats: "8 SKUs · Retail + DTC packaging",
  },
];

export function PortfolioGrid() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Branding", "UI/UX", "Content", "3D", "Event Design", "Character Design"];
  const filtered = filter === "All" ? GRID_PROJECTS : GRID_PROJECTS.filter(p => p.tags.includes(filter) || p.category === filter);

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg-dark)", color: "var(--text-light)" }}>
      <SubNav title="Design Labs Showcase" backHref="/digital-labs" />

      {/* Hero */}
      <section style={{ padding: "80px 40px 48px", maxWidth: "1440px", margin: "0 auto" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "5px 12px", border: "1px solid rgba(255,105,180,0.25)", background: "rgba(255,105,180,0.06)", marginBottom: "28px" }}>
          <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#06FFA5", boxShadow: "0 0 6px #06FFA5" }} />
          <span style={{ ...MONO, fontSize: "9px", letterSpacing: "0.3em", textTransform: "uppercase", color: "#FF69B4" }}>The Curated Archive</span>
        </div>
        <h1 style={{ ...DISPLAY, fontSize: "clamp(40px, 6vw, 72px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1, color: "var(--text-light)", margin: "0 0 16px 0" }}>
          Proof of{" "}
          <span style={{ fontStyle: "italic", background: "linear-gradient(135deg, #FF69B4 0%, #9D4EDD 50%, #FF69B4 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            Innovation.
          </span>
        </h1>
        <p style={{ ...DISPLAY, fontSize: "16px", color: "#645578", lineHeight: 1.7, maxWidth: "520px", margin: "0 0 40px 0" }}>
          Case studies, campaigns, and brand systems across disciplines.
        </p>
        {/* Filters */}
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {categories.map(cat => (
            <button key={cat} onClick={() => setFilter(cat)} style={{
              ...MONO, fontSize: "10px", fontWeight: 700, letterSpacing: "0.15em",
              textTransform: "uppercase", padding: "8px 20px",
              background: filter === cat ? "#FF69B4" : "transparent",
              color: filter === cat ? "var(--bg-dark)" : "#645578",
              border: `1px solid ${filter === cat ? "#FF69B4" : "rgba(157,78,221,0.1)"}`,
              cursor: "pointer", outline: "none", transition: "all 0.2s",
            }}
              onMouseEnter={e => { if (filter !== cat) { (e.currentTarget as HTMLElement).style.borderColor = "rgba(157,78,221,0.3)"; (e.currentTarget as HTMLElement).style.color = "var(--text-light)"; } }}
              onMouseLeave={e => { if (filter !== cat) { (e.currentTarget as HTMLElement).style.borderColor = "rgba(157,78,221,0.1)"; (e.currentTarget as HTMLElement).style.color = "#645578"; } }}
            >{cat}</button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section style={{ padding: "0 40px 80px", maxWidth: "1440px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))", gap: "16px" }}>
          {filtered.map(project => (
            <GridCard
              key={project.id}
              project={project}
              href={
                project.id === "oac-cosq" ? "/digital-labs/portfolio/oac-cosq" :
                project.id === "q-chan"   ? "/digital-labs/portfolio/q-chan" :
                undefined
              }
            />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--bg-card)", borderTop: "1px solid rgba(157,78,221,0.05)", padding: "80px 40px" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
          <h2 style={{ ...DISPLAY, fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 800, letterSpacing: "-0.03em", color: "var(--text-light)", margin: "0 0 28px 0" }}>
            Have a Bold{" "}
            <span style={{ fontStyle: "italic", background: "linear-gradient(135deg, #FF69B4 0%, #9D4EDD 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Project?
            </span>
          </h2>
          <Link href="/digital-labs/submit-project" style={{
            display: "inline-block",
            ...MONO, fontSize: "11px", fontWeight: 700, letterSpacing: "0.18em",
            textTransform: "uppercase", padding: "14px 36px",
            background: "#FF69B4", color: "var(--bg-dark)",
            border: "none", cursor: "pointer", outline: "none", textDecoration: "none",
            transition: "background 0.2s, box-shadow 0.2s",
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#c4a8f0"; (e.currentTarget as HTMLElement).style.boxShadow = "0 0 24px rgba(255,105,180,0.3)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#FF69B4"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
          >Start the Conversation</Link>
          <p style={{ ...MONO, fontSize: "9px", color: "#3a2f4a", letterSpacing: "0.15em", textTransform: "uppercase", marginTop: "48px" }}>
            © 2026 Design Labs Showcase by COSQ
          </p>
        </div>
      </section>
    </div>
  );
}

function GridCard({ project, href }: { project: typeof GRID_PROJECTS[0]; href?: string }) {
  const [hov, setHov] = useState(false);
  const hasImage = !!project.preview;

  const cardStyle: React.CSSProperties = {
    display: "block",
    textDecoration: "none",
    background: "var(--bg-card)",
    border: `1px solid ${hov ? project.accent + "66" : "rgba(157,78,221,0.06)"}`,
    overflow: "hidden",
    cursor: href ? "pointer" : "default",
    transition: "border-color 0.3s, transform 0.25s, box-shadow 0.3s",
    transform: hov ? "translateY(-3px)" : "translateY(0)",
    boxShadow: hov && href ? `0 8px 32px ${project.accent}22` : "none",
  };

  const cardBody = (
    <>
      {/* Thumbnail */}
      <div style={{ aspectRatio: "16/9", position: "relative", overflow: "hidden", background: project.previewColor || "var(--bg-card)" }}>

        {/* Real photo for featured cards */}
        {hasImage && (
          <img
            src={project.preview}
            alt={project.title}
            style={{
              width: "100%", height: "100%", objectFit: "cover", display: "block",
              transform: hov ? "scale(1.06)" : "scale(1)",
              transition: "transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            }}
          />
        )}

        {/* Dot grid for non-photo cards */}
        {!hasImage && (
          <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 2px 2px, rgba(157,78,221,0.07) 1px, transparent 0)", backgroundSize: "20px 20px" }} />
        )}

        {/* Gradient overlay — always */}
        <div style={{
          position: "absolute", inset: 0,
          background: project.overlayGradient,
          opacity: hov ? 0.85 : 0.65,
          transition: "opacity 0.35s",
        }} />

        {/* Dark vignette on hover */}
        <div style={{ position: "absolute", inset: 0, background: hov ? "rgba(0,0,0,0.18)" : "transparent", transition: "background 0.3s" }} />

        {/* Category + year */}
        <div style={{ position: "absolute", top: "12px", left: "12px", right: "12px", display: "flex", justifyContent: "space-between", zIndex: 2 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "5px", padding: "3px 10px", background: "rgba(0,0,0,0.5)", backdropFilter: "blur(8px)", border: "1px solid rgba(157,78,221,0.12)" }}>
            <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: project.accent }} />
            <span style={{ ...MONO, fontSize: "8px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#fff" }}>{project.category}</span>
          </div>
          <span style={{ ...MONO, fontSize: "9px", color: "rgba(157,78,221,0.5)", padding: "3px 8px", background: "rgba(0,0,0,0.4)" }}>{project.year}</span>
        </div>

        {/* Title overlaid on gradient at bottom — for featured cards */}
        {project.featured && (
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "16px 16px 14px", zIndex: 2 }}>
            <div style={{ ...DISPLAY, fontSize: "22px", fontWeight: 800, letterSpacing: "-0.02em", color: "#fff", lineHeight: 1, textShadow: "0 2px 12px rgba(0,0,0,0.8)", marginBottom: "4px" }}>
              {project.title}
            </div>
            <div style={{ ...MONO, fontSize: "9px", letterSpacing: "0.12em", textTransform: "uppercase", color: project.accent }}>
              Featured Case Study
            </div>
          </div>
        )}

        {/* Hover CTA */}
        {href && (
          <div style={{
            position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center",
            opacity: hov ? 1 : 0, transition: "opacity 0.3s", zIndex: 3,
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "10px 24px", background: "rgba(157,78,221,0.92)" }}>
              <span style={{ ...MONO, fontSize: "10px", fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--bg-dark)" }}>View Case Study</span>
              <ExternalLink size={12} style={{ color: "var(--bg-dark)" }} />
            </div>
          </div>
        )}
      </div>

      {/* Text */}
      <div style={{ padding: "18px 20px 22px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "4px", marginBottom: "10px" }}>
          {project.tags.map(t => (
            <span key={t} style={{ ...MONO, fontSize: "8px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#4d4160", padding: "2px 8px", border: "1px solid rgba(157,78,221,0.06)" }}>{t}</span>
          ))}
        </div>
        <h3 style={{ ...DISPLAY, fontSize: "17px", fontWeight: 700, color: hov ? project.accent : "var(--text-light)", letterSpacing: "-0.01em", margin: "0 0 5px 0", transition: "color 0.25s" }}>
          {project.title}
        </h3>
        <p style={{ ...DISPLAY, fontSize: "13px", color: "#645578", lineHeight: 1.6, margin: "0 0 12px 0" }}>{project.subtitle}</p>
        <div style={{ ...MONO, fontSize: "9px", color: "#3a2f4a", letterSpacing: "0.1em", paddingTop: "11px", borderTop: "1px solid rgba(157,78,221,0.04)" }}>{project.stats}</div>
      </div>
    </>
  );

  if (href) {
    return (
      <Link href={href} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={cardStyle}>
        {cardBody}
      </Link>
    );
  }

  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={cardStyle}>
      {cardBody}
    </div>
  );
}

export function OACCaseStudy() {

  const timeline = [
    { year: "2020", title: "Origins in Lockdown", desc: "Odisha Anime Club is founded in February 2020 during COVID-19 to combat isolation and bring together anime fans across Odisha — the state's first and only anime club, born from a Quora post asking if one even existed.", accent: "#a78bfa" },
    { year: "2021", title: "Community Roots", desc: "Regular Discord events, anime quiz nights, and virtual meetups keep the community alive through the pandemic. The club builds a multi-platform presence across Instagram, Facebook, YouTube, Twitter, Threads, and Telegram.", accent: "#818cf8" },
    { year: "2022", title: "First Physical Events", desc: "Post-pandemic, OAC steps into the real world with in-person meetups, anime movie screenings, and cosplay participation. Chapter 01–03 format: Anime Events, Meetups & Screenings, Cosplay Events.", accent: "#c084fc" },
    { year: "2023", title: "AniMay — Collaboration Era", desc: "OAC's flagship AniMay event launches in collaboration with @funhub.odisha — private anime screenings, quiz competitions, games, and cosplay under one roof. The club earns national recognition in Otaku Mantra's coverage of Indian anime clubs.", accent: "#e879f9" },
    { year: "Feb '24", title: "Odisha Cosplay Community — A New Movement Begins", desc: "cos.labs unveils the Odisha Cosplay Community (OCC) — a joint venture between @odisha_anime_club_ and @odisha_pop_culture, built for cosplayers, by cosplayers. 226 likes. 31 comments. The secret was out.", accent: "#fb923c" },
    { year: "Oct '24", title: "Halloween Party — CosQ Launch Campaign", desc: "Digital Labs designs the CosQ Halloween Party campaign: event poster, social media kit, ticket graphics. 200+ attendees at Azzuro Club, Bhubaneswar — with @showmates.in ticketing, @odisha_anime_club_ as anime partner, and @odishacosplaycommunity as cosplay partner. The city's first taste of CosQ.", accent: "#ff6b35" },
    { year: "Nov '24", title: "CosQ — Odisha&apos;s Biggest Cosplay Event", desc: "The culmination of 4 years of community-building. Digital Labs designs the entire visual identity, brochure, brand system, and event collaterals for CosQ — a 5,000+ attendee festival at Dream City Resort, Bhubaneswar, on November 30, 2024.", accent: "#FF69B4" },
    { year: "2026", title: "Ichi-Go — Odisha's First Anime Festival of 2026", desc: "OAC scales to a full public anime festival format. Ichi-Go 2026, held on February 1 in Bhubaneswar, marks the next chapter — ticketed via District.in with its own dedicated Instagram presence @ichi_go_2026.", accent: "#FF69B4", last: true },
  ];

  const activities = [
    { icon: <Zap size={16} />, title: "LAN Gaming Arena", desc: "Lag-free PC & mobile gaming. Valorant, CSGO, Fortnite — competitive and casual zones for all skill levels." },
    { icon: <Award size={16} />, title: "Cosplay Contest", desc: "Cash prize competitions spanning Anitopia (anime), Mangaverse (manga), and Dramatica (live-action) persona categories." },
    { icon: <TrendingUp size={16} />, title: "Art & Manga Workshops", desc: "Professional-led sessions fusing traditional art with manga culture. Participants create their own multiverse characters." },
    { icon: <Users size={16} />, title: "Battle of the Bands + DJ", desc: "Live music performances, DJ sets, AMV editing competitions, and talent showcases: dance, mimicry, standup, drama." },
    { icon: <ExternalLink size={16} />, title: "Beyblade & Arcade Zone", desc: "Nostalgia unlocked. Spin, crash and clash with childhood memories in dedicated arcade and Beyblade battle zones." },
    { icon: <Instagram size={16} />, title: "VTubing Experiences", desc: "Cutting-edge virtual streamer setups letting attendees experience the VTuber format firsthand." },
  ];

  const sponsors = [
    { name: "Golden Gyoza", tier: "gold", price: "₹2,50,000" },
    { name: "Silver Sushi", tier: "silver", price: "₹1,50,000" },
    { name: "Bronze Bento", tier: "bronze", price: "₹1,00,000" },
    { name: "Special Partners", tier: "special", price: "₹50,000" },
  ];

  const collaborators = [
    "Otaku Army", "ComicSense", "Fans Army", "Drip Fuel", "Old Town", "The Merch Shop",
    "ZorolsHere Lost in Art", "Anime Kulture", "PVR INOX Pictures", "No in May", "Ani",
  ];

  const deliverables = [
    "Brand Identity System", "Sponsorship Brochure (15pp)", "Event Poster Series",
    "Social Media Kit", "Cosplay Character Mascot", "Merch Design Language",
    "Halloween Party Campaign", "Showmates Ticket Design", "Instagram Carousel Kit",
    "Sponsorship Deck (Viz Media)", "Event Map Illustration", "Stage Backdrop Graphics",
    "Digital Campaign Assets", "Post-Event Archive",
  ];

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg-dark)", color: "var(--text-light)" }}>
      <SubNav title="Case Study — OAC × CosQ" backHref="/digital-labs/portfolio" backLabel="Back to Portfolio" />

      {/* ── HERO ── */}
      <section style={{ padding: "80px 40px 0", maxWidth: "1440px", margin: "0 auto" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "32px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "5px 12px", border: "1px solid rgba(255,105,180,0.25)", background: "rgba(255,105,180,0.06)" }}>
            <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#06FFA5", boxShadow: "0 0 6px #06FFA5" }} />
            <span style={{ ...MONO, fontSize: "9px", letterSpacing: "0.3em", textTransform: "uppercase", color: "#FF69B4" }}>Case Study · 2020–2026</span>
          </div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "5px 12px", border: "1px solid rgba(157,78,221,0.08)", background: "transparent" }}>
            <Calendar size={10} style={{ color: "#645578" }} />
            <span style={{ ...MONO, fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#645578" }}>30 Nov 2024 · Dream City Resort, Bhubaneswar</span>
          </div>
        </div>

        <h1 style={{ ...DISPLAY, fontSize: "clamp(44px, 7vw, 96px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 0.95, color: "var(--text-light)", margin: "0 0 24px 0" }}>
          From a{" "}
          <span style={{ fontStyle: "italic", background: "linear-gradient(135deg, #a78bfa 0%, #FF69B4 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            Quora Post
          </span>
          <br />to{" "}
          <span style={{ fontStyle: "italic", background: "linear-gradient(135deg, #FF69B4 0%, #9D4EDD 50%, #FF69B4 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            Odisha&apos;s Biggest
          </span>
          <br />Cosplay Festival.
        </h1>

        <p style={{ ...DISPLAY, fontSize: "18px", color: "#645578", lineHeight: 1.7, maxWidth: "620px", margin: "0 0 48px 0" }}>
          Digital Labs designed everything for CosQ — the brand, the brochure, the event identity, the sponsorship deck.
          This is the story of how one community went from pandemic WhatsApp groups to 5,000+ attendees in 4 years.
        </p>

        {/* Client + scope pills */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", marginBottom: "64px" }}>
          {[
            { label: "Client", value: "Odisha Anime Club" },
            { label: "Project", value: "CosQ 2024" },
            { label: "Scope", value: "Full Brand + Event Design" },
            { label: "Studio", value: "Digital Labs by COSQ" },
          ].map(({ label, value }) => (
            <div key={label}>
              <div style={{ ...MONO, fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#4d4160", marginBottom: "4px" }}>{label}</div>
              <div style={{ ...DISPLAY, fontSize: "15px", fontWeight: 700, color: "var(--text-light)" }}>{value}</div>
            </div>
          ))}
        </div>

        {/* Hero stats bar */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1px", background: "rgba(157,78,221,0.04)", marginBottom: "0" }}>
          <StatPill value="5,000+" label="CosQ Expected Attendees" accent="#FF69B4" />
          <StatPill value="200+" label="Halloween Party Attendees" accent="#ff6b35" />
          <StatPill value="34+" label="Events Over 4 Years" accent="#a78bfa" />
          <StatPill value="12+" label="Brand Collaborators" accent="#FF69B4" />
        </div>
      </section>

      {/* ── FULL-WIDTH COVER IMAGE BAND ── */}
      <div style={{ width: "100%", height: "2px", background: "linear-gradient(90deg, #a78bfa, #FF69B4, #FF69B4)" }} />
      <div style={{
        width: "100%",
        background: "linear-gradient(135deg, #1a0033 0%, #2d0060 40%, #600030 80%, #1a0033 100%)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "80px 40px",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Dot grid texture */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,105,180,0.15) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }} />
        <div style={{ position: "relative", zIndex: 1, textAlign: "center", maxWidth: "900px" }}>
          <div style={{ ...MONO, fontSize: "11px", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(255,105,180,0.5)", marginBottom: "20px" }}>Odisha&apos;s Biggest Cosplay Event</div>
          <div style={{ ...DISPLAY, fontSize: "clamp(56px, 10vw, 120px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 0.9, color: "#fff", textShadow: "0 0 80px rgba(255,105,180,0.4)" }}>
            CosQ
          </div>
          <div style={{ ...MONO, fontSize: "13px", letterSpacing: "0.5em", textTransform: "uppercase", color: "rgba(157,78,221,0.35)", marginTop: "16px" }}>2024 · Bhubaneswar</div>
          <div style={{ display: "flex", gap: "8px", justifyContent: "center", flexWrap: "wrap", marginTop: "32px" }}>
            {["Cosplay", "LAN Gaming", "Manga Art", "Live Music", "Beyblade", "VTubing", "AMV Edit", "Battle of Bands"].map(tag => (
              <span key={tag} style={{ ...MONO, fontSize: "9px", letterSpacing: "0.18em", textTransform: "uppercase", padding: "5px 12px", background: "rgba(157,78,221,0.06)", border: "1px solid rgba(157,78,221,0.12)", color: "rgba(157,78,221,0.5)" }}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
      <div style={{ width: "100%", height: "2px", background: "linear-gradient(90deg, #FF69B4, #FF69B4, #a78bfa)" }} />

      {/* ── HALLOWEEN CAMPAIGN EVENT ── */}
      <section style={{ padding: "80px 40px", maxWidth: "1440px", margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "48px" }}>
          <div style={{ height: "1px", flex: 1, background: "rgba(157,78,221,0.06)" }} />
          <span style={{ ...MONO, fontSize: "10px", letterSpacing: "0.3em", textTransform: "uppercase", color: "#4d4160", whiteSpace: "nowrap" }}>Campaign Event · October 2024</span>
          <div style={{ height: "1px", flex: 1, background: "rgba(157,78,221,0.06)" }} />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", alignItems: "stretch" }} className="halloween-single-col">
          {/* Left — visual card */}
          <div style={{
            background: "linear-gradient(135deg, #0d0010 0%, #1a0033 40%, #2a0015 80%, #0d0010 100%)",
            border: "1px solid rgba(255,107,53,0.2)",
            padding: "48px 40px",
            display: "flex", flexDirection: "column", justifyContent: "space-between",
            position: "relative", overflow: "hidden", minHeight: "420px",
          }}>
            {/* spooky dot grid */}
            <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,107,53,0.12) 1px, transparent 0)", backgroundSize: "24px 24px" }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <div style={{ display: "flex", gap: "8px", alignItems: "center", marginBottom: "32px" }}>
                <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#ff6b35", boxShadow: "0 0 10px #ff6b35" }} />
                <span style={{ ...MONO, fontSize: "9px", letterSpacing: "0.3em", textTransform: "uppercase", color: "#ff6b35" }}>CosQ Halloween Party · Oct 29, 2024</span>
              </div>
              <div style={{ ...DISPLAY, fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 0.95, color: "#fff", marginBottom: "12px" }}>
                Halloween
              </div>
              <div style={{ ...DISPLAY, fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 0.95, fontStyle: "italic", background: "linear-gradient(135deg, #ff6b35, #FF69B4, #a855f7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", marginBottom: "28px" }}>
                Party.
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {["Anime", "Cosplay", "Comics", "Pop Culture", "Gaming"].map(t => (
                  <span key={t} style={{ ...MONO, fontSize: "9px", letterSpacing: "0.15em", textTransform: "uppercase", padding: "4px 10px", background: "rgba(255,107,53,0.1)", border: "1px solid rgba(255,107,53,0.25)", color: "#ff6b35" }}>{t}</span>
                ))}
              </div>
            </div>
            <div style={{ position: "relative", zIndex: 1, display: "flex", gap: "32px", marginTop: "40px" }}>
              <div>
                <div style={{ ...DISPLAY, fontSize: "28px", fontWeight: 800, color: "#ff6b35", lineHeight: 1 }}>200+</div>
                <div style={{ ...MONO, fontSize: "9px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#645578", marginTop: "4px" }}>Attendees</div>
              </div>
              <div>
                <div style={{ ...DISPLAY, fontSize: "28px", fontWeight: 800, color: "#a855f7", lineHeight: 1 }}>₹299</div>
                <div style={{ ...MONO, fontSize: "9px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#645578", marginTop: "4px" }}>Entry Ticket</div>
              </div>
              <div>
                <div style={{ ...DISPLAY, fontSize: "28px", fontWeight: 800, color: "#FF69B4", lineHeight: 1 }}>3–9PM</div>
                <div style={{ ...MONO, fontSize: "9px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#645578", marginTop: "4px" }}>Event Duration</div>
              </div>
            </div>
          </div>

          {/* Right — details */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            <div style={{ ...MONO, fontSize: "10px", letterSpacing: "0.3em", textTransform: "uppercase", color: "#4d4160", marginBottom: "20px" }}>The Launch Campaign</div>
            <h3 style={{ ...DISPLAY, fontSize: "clamp(22px, 3vw, 36px)", fontWeight: 800, letterSpacing: "-0.03em", color: "var(--text-light)", margin: "0 0 16px 0", lineHeight: 1.1 }}>
              CosQ&apos;s first public event. A controlled explosion — to prove the brand could fill a room.
            </h3>
            <p style={{ ...DISPLAY, fontSize: "15px", color: "#645578", lineHeight: 1.75, margin: "0 0 28px 0" }}>
              Before the grand November festival, Digital Labs ran a campaign event to build hype and test the brand in the wild. The CosQ Halloween Party at Azzuro Club (Bhubaneswar&apos;s premium sky lounge) was designed as a Trick or Treat — a spooky night for the anime, cosplay, comics, pop culture, and gaming community.
            </p>
            <p style={{ ...DISPLAY, fontSize: "15px", color: "#645578", lineHeight: 1.75, margin: "0 0 32px 0" }}>
              Over 200 attendees showed up. The event poster — dark purple gothic anime aesthetic, ticket artwork, and social media carousel — was entirely designed by Digital Labs and posted to @the.cosq. Ticketing through Showmates. 354+ Instagram likes on the launch post.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              {[
                { label: "Venue", value: "Azzuro Club (Ultra Sky Lounge), Bhubaneswar" },
                { label: "Date & Time", value: "29 Oct 2024 · 3PM – 9PM" },
                { label: "Ticketing Partner", value: "@showmates.in" },
                { label: "Marketing Partner", value: "@madket04" },
                { label: "Anime Partner", value: "@odisha_anime_club_" },
                { label: "Cosplay Partner", value: "@odishacosplaycommunity" },
                { label: "Ticket Price", value: "₹299 · 150 redeemable + 1 shot free (2 for girls)" },
              ].map(({ label, value }) => (
                <div key={label} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", padding: "12px 16px", background: "var(--bg-card)", gap: "20px", borderBottom: "1px solid rgba(157,78,221,0.03)" }}>
                  <span style={{ ...MONO, fontSize: "9px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#4d4160", flexShrink: 0 }}>{label}</span>
                  <span style={{ ...DISPLAY, fontSize: "12px", fontWeight: 600, color: "#786a8f", textAlign: "right" }}>{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section style={{ padding: "80px 40px", maxWidth: "1440px", margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "48px" }}>
          <div style={{ height: "1px", flex: 1, background: "rgba(157,78,221,0.06)" }} />
          <span style={{ ...MONO, fontSize: "10px", letterSpacing: "0.3em", textTransform: "uppercase", color: "#4d4160", whiteSpace: "nowrap" }}>The Journey · 2020 to 2026</span>
          <div style={{ height: "1px", flex: 1, background: "rgba(157,78,221,0.06)" }} />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 80px" }} className="timeline-single-col">
          <div>
            {timeline.slice(0, 4).map((t, i) => (
              <TimelineNode key={t.year} {...t} last={i === 3} />
            ))}
          </div>
          <div style={{ paddingTop: "80px" }}>
            {timeline.slice(4).map((t, i) => (
              <TimelineNode key={t.year} {...t} last={i === timeline.slice(4).length - 1} />
            ))}
          </div>
        </div>
      </section>

      {/* ── BRIEF SECTION ── */}
      <section style={{ background: "var(--bg-card)", borderTop: "1px solid rgba(157,78,221,0.05)", borderBottom: "1px solid rgba(157,78,221,0.05)", padding: "80px 40px" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "80px", alignItems: "start" }} className="brief-single-col">
          <div>
            <div style={{ ...MONO, fontSize: "10px", letterSpacing: "0.3em", textTransform: "uppercase", color: "#4d4160", marginBottom: "20px" }}>The Brief</div>
            <h2 style={{ ...DISPLAY, fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.05, color: "var(--text-light)", margin: "0 0 24px 0" }}>
              Build an entire event universe from{" "}
              <span style={{ fontStyle: "italic", background: "linear-gradient(135deg, #FF69B4, #FF69B4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                scratch.
              </span>
            </h2>
            <p style={{ ...DISPLAY, fontSize: "15px", color: "#645578", lineHeight: 1.75, margin: "0 0 24px 0" }}>
              Odisha Anime Club approached Digital Labs to design every visual touchpoint for CosQ 2024 — from the event logo and mascot character to a 15-page sponsorship brochure, social media kit, and multi-tier partnership deck targeted at national brands and media houses.
            </p>
            <p style={{ ...DISPLAY, fontSize: "15px", color: "#645578", lineHeight: 1.75, margin: 0 }}>
              The ask: make it feel like it belonged in Tokyo, not just Bhubaneswar. Make it loud. Make it real.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            {[
              { label: "Date", value: "November 30, 2024" },
              { label: "Venue", value: "Dream City Resort, Bhubaneswar" },
              { label: "Target Audience", value: "18–30 year olds, pop-culture community" },
              { label: "Expected Footfall", value: "5,000+ attendees" },
              { label: "Client Contact", value: "Harshit Agarwal, Co-Founder CosQ" },
              { label: "Media Partners", value: "The AniLyst Podcast, JioCinema" },
              { label: "Key Outreach", value: "Viz Media, PVR INOX Pictures, Otaku Army" },
            ].map(({ label, value }) => (
              <div key={label} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", padding: "14px 20px", background: "var(--bg-dark)", gap: "20px" }}>
                <span style={{ ...MONO, fontSize: "9px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#4d4160", flexShrink: 0 }}>{label}</span>
                <span style={{ ...DISPLAY, fontSize: "13px", fontWeight: 600, color: "#a294b8", textAlign: "right" }}>{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ACTIVITIES ── */}
      <section style={{ padding: "80px 40px", maxWidth: "1440px", margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "48px" }}>
          <div style={{ height: "1px", flex: 1, background: "rgba(157,78,221,0.06)" }} />
          <span style={{ ...MONO, fontSize: "10px", letterSpacing: "0.3em", textTransform: "uppercase", color: "#4d4160", whiteSpace: "nowrap" }}>Event Universe · CosQ Activations</span>
          <div style={{ height: "1px", flex: 1, background: "rgba(157,78,221,0.06)" }} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "8px" }}>
          {activities.map(a => <ActivityCard key={a.title} {...a} />)}
        </div>
      </section>

      {/* ── SPONSORSHIP ARCHITECTURE ── */}
      <section style={{ background: "var(--bg-card)", borderTop: "1px solid rgba(157,78,221,0.05)", borderBottom: "1px solid rgba(157,78,221,0.05)", padding: "80px 40px" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "48px" }}>
            <div style={{ height: "1px", flex: 1, background: "rgba(157,78,221,0.06)" }} />
            <span style={{ ...MONO, fontSize: "10px", letterSpacing: "0.3em", textTransform: "uppercase", color: "#4d4160", whiteSpace: "nowrap" }}>Designed Deliverable · Sponsorship Architecture</span>
            <div style={{ height: "1px", flex: 1, background: "rgba(157,78,221,0.06)" }} />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", alignItems: "start" }} className="sponsor-single-col">
            <div>
              <h3 style={{ ...DISPLAY, fontSize: "clamp(24px, 3vw, 40px)", fontWeight: 800, letterSpacing: "-0.03em", color: "var(--text-light)", margin: "0 0 16px 0" }}>
                A tiered partnership system worthy of national brands.
              </h3>
              <p style={{ ...DISPLAY, fontSize: "15px", color: "#645578", lineHeight: 1.7, margin: "0 0 32px 0" }}>
                Digital Labs designed the full sponsorship deck — four main tiers plus specialist partner categories — that OAC used to pitch brands like Viz Media, PVR INOX, and The AniLyst Podcast.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                {sponsors.map(s => <SponsorBadge key={s.name} {...s} />)}
              </div>
            </div>

            <div>
              <div style={{ ...MONO, fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#4d4160", marginBottom: "20px" }}>Golden Gyoza Tier Benefits</div>
              {[
                "Stage Presence (exclusive)", "Cosplayer Sponsorship", "Prominent Logo Placement",
                "Banner Ad Placement", "Live Stream Branding", "Sponsored Email Blast",
                "Branded Photo Booth", "VIP Badge Branding", "20×20ft Customised Stall",
              ].map((b, i) => (
                <div key={b} style={{ display: "flex", alignItems: "center", gap: "12px", padding: "11px 0", borderBottom: "1px solid rgba(157,78,221,0.04)" }}>
                  <span style={{ ...MONO, fontSize: "9px", color: "#3a2f4a", minWidth: "20px" }}>{String(i + 1).padStart(2, "0")}</span>
                  <span style={{ ...DISPLAY, fontSize: "13px", color: "#a294b8" }}>{b}</span>
                  <div style={{ marginLeft: "auto", width: "20px", height: "20px", borderRadius: "50%", background: "#f59e0b22", border: "1px solid #f59e0b55", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#f59e0b" }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── BRAND COLLABORATORS ── */}
      <section style={{ padding: "80px 40px", maxWidth: "1440px", margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "48px" }}>
          <div style={{ height: "1px", flex: 1, background: "rgba(157,78,221,0.06)" }} />
          <span style={{ ...MONO, fontSize: "10px", letterSpacing: "0.3em", textTransform: "uppercase", color: "#4d4160", whiteSpace: "nowrap" }}>Brand Collaboration Network</span>
          <div style={{ height: "1px", flex: 1, background: "rgba(157,78,221,0.06)" }} />
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          {collaborators.map(name => (
            <div key={name} style={{ padding: "10px 20px", background: "var(--bg-card)", border: "1px solid rgba(157,78,221,0.06)" }}>
              <span style={{ ...DISPLAY, fontSize: "13px", fontWeight: 600, color: "#786a8f" }}>{name}</span>
            </div>
          ))}
        </div>

        {/* AniLyst callout */}
        <div style={{ marginTop: "40px", padding: "32px 36px", background: "var(--bg-card)", border: "1px solid rgba(255,105,180,0.15)", display: "flex", gap: "24px", alignItems: "flex-start", flexWrap: "wrap" }}>
          <div style={{ width: "48px", height: "48px", minWidth: "48px", background: "linear-gradient(135deg, #a78bfa, #FF69B4)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ ...MONO, fontSize: "10px", fontWeight: 800, color: "#fff" }}>AL</span>
          </div>
          <div style={{ flex: 1, minWidth: "200px" }}>
            <div style={{ ...MONO, fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#FF69B4", marginBottom: "6px" }}>Media Partner</div>
            <h4 style={{ ...DISPLAY, fontSize: "16px", fontWeight: 700, color: "var(--text-light)", margin: "0 0 8px 0" }}>The AniLyst Podcast · JioCinema</h4>
            <p style={{ ...DISPLAY, fontSize: "13px", color: "#645578", lineHeight: 1.65, margin: 0 }}>
              YouTube&apos;s #1 ranked Indian Anime Podcast — first anime content creators with an OTT show on JioCinema. Featured Jason Paige (Pokémon theme voice), Sanket Mhatre, and Japanese Embassy representatives. CosQ outreach to Uday Singh (AniLyst) came through this partnership channel.
            </p>
          </div>
        </div>
      </section>

      {/* ── DELIVERABLES ── */}
      <section style={{ background: "var(--bg-card)", borderTop: "1px solid rgba(157,78,221,0.05)", borderBottom: "1px solid rgba(157,78,221,0.05)", padding: "80px 40px" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
          <div style={{ ...MONO, fontSize: "10px", letterSpacing: "0.3em", textTransform: "uppercase", color: "#4d4160", marginBottom: "20px" }}>What Digital Labs Delivered</div>
          <h2 style={{ ...DISPLAY, fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 800, letterSpacing: "-0.03em", color: "var(--text-light)", margin: "0 0 36px 0" }}>
            Every pixel.{" "}
            <span style={{ fontStyle: "italic", background: "linear-gradient(135deg, #FF69B4, #FF69B4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Every screen.
            </span>
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {deliverables.map(d => <DeliverableTag key={d} label={d} />)}
          </div>
        </div>
      </section>

      {/* ── INSTAGRAM EMBEDS ── */}
      <section style={{ padding: "80px 40px", maxWidth: "1440px", margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "48px" }}>
          <div style={{ height: "1px", flex: 1, background: "rgba(157,78,221,0.06)" }} />
          <span style={{ ...MONO, fontSize: "10px", letterSpacing: "0.3em", textTransform: "uppercase", color: "#4d4160", whiteSpace: "nowrap" }}>From the Feed · Campaign Posts</span>
          <div style={{ height: "1px", flex: 1, background: "rgba(157,78,221,0.06)" }} />
        </div>

        {/* Instagram embed grid — 2 columns */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", alignItems: "start" }} className="ig-single-col">

          {/* OCC Launch — Primary embed */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
              <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#fb923c", boxShadow: "0 0 6px #fb923c" }} />
              <span style={{ ...MONO, fontSize: "9px", letterSpacing: "0.25em", textTransform: "uppercase", color: "#fb923c" }}>OCC Launch · Feb 10, 2024 · @cos.labs</span>
            </div>
            <div style={{ background: "var(--bg-card)", border: "1px solid rgba(251,146,60,0.2)", overflow: "hidden" }}>
              <blockquote
                className="instagram-media"
                data-instgrm-captioned
                data-instgrm-permalink="https://www.instagram.com/p/C3LBvVYyu3C/?utm_source=ig_embed&amp;utm_campaign=loading"
                data-instgrm-version="14"
                style={{ background: "var(--bg-card)", border: 0, margin: 0, padding: 0, width: "100%", minWidth: "326px" }}
              />
            </div>
          </div>

          {/* Halloween Party embed */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
              <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#ff6b35", boxShadow: "0 0 6px #ff6b35" }} />
              <span style={{ ...MONO, fontSize: "9px", letterSpacing: "0.25em", textTransform: "uppercase", color: "#ff6b35" }}>Halloween Party · Oct 24, 2024 · @the.cosq</span>
            </div>
            <div style={{ background: "var(--bg-card)", border: "1px solid rgba(255,107,53,0.2)", overflow: "hidden" }}>
              <blockquote
                className="instagram-media"
                data-instgrm-captioned
                data-instgrm-permalink="https://www.instagram.com/p/DBghi4JS954/?utm_source=ig_embed&amp;utm_campaign=loading"
                data-instgrm-version="14"
                style={{ background: "var(--bg-card)", border: 0, margin: 0, padding: 0, width: "100%", minWidth: "326px" }}
              />
            </div>
          </div>
        </div>

        {/* Instagram embed script */}
        <InstagramScript />

        {/* Profile link cards row */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "8px", marginTop: "40px" }}>
          {[
            { handle: "@odisha_anime_club_", platform: "OAC Instagram", color: "linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)" },
            { handle: "@the.cosq", platform: "CosQ Instagram", color: "linear-gradient(135deg, #9D4EDD, #FF69B4)" },
            { handle: "@cos.labs", platform: "Cos.Labs · Design Feed", color: "linear-gradient(135deg, #ea580c, #fb923c)" },
            { handle: "@ichi_go_2026", platform: "Ichi-Go 2026", color: "linear-gradient(135deg, #1d4ed8, #7c3aed)" },
          ].map(({ handle, platform, color }) => (
            <a key={handle} href={`https://www.instagram.com/${handle.replace("@", "")}`} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
              <SocialCard handle={handle} platform={platform} color={color} />
            </a>
          ))}
        </div>
      </section>

      {/* ── OUTCOME ── */}
      <section style={{ background: "var(--bg-card)", borderTop: "1px solid rgba(157,78,221,0.05)", padding: "80px 40px" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }} className="outcome-single-col">
          <div>
            <div style={{ ...MONO, fontSize: "10px", letterSpacing: "0.3em", textTransform: "uppercase", color: "#4d4160", marginBottom: "20px" }}>The Outcome</div>
            <h2 style={{ ...DISPLAY, fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 800, letterSpacing: "-0.03em", color: "var(--text-light)", margin: "0 0 24px 0", lineHeight: 1.05 }}>
              A state-level movement, designed{" "}
              <span style={{ fontStyle: "italic", background: "linear-gradient(135deg, #FF69B4, #a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                end-to-end.
              </span>
            </h2>
            <p style={{ ...DISPLAY, fontSize: "15px", color: "#645578", lineHeight: 1.75, margin: 0 }}>
              CosQ went from concept to Odisha&apos;s largest cosplay event in a single edition. The brand system Digital Labs built gave OAC the visual credibility to pitch national partners including Viz Media, PVR INOX Pictures, and JioCinema&apos;s AniLyst Podcast — elevating what was once a community Discord server into a professionally designed cultural institution.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {[
              { metric: "National media outreach", detail: "Viz Media, JioCinema AniLyst, IGN India coverage" },
              { metric: "12 brand collaborators", detail: "From Otaku Army to PVR INOX Pictures" },
              { metric: "4-tier sponsorship system", detail: "₹25K to ₹2.5L — fully designed, pitched, and deployed" },
              { metric: "Ichi-Go 2026 secured", detail: "Odisha's first public anime festival of 2026, Feb 1, Bhubaneswar" },
            ].map(({ metric, detail }) => (
              <div key={metric} style={{ padding: "20px 24px", background: "var(--bg-dark)", border: "1px solid rgba(157,78,221,0.05)" }}>
                <div style={{ ...DISPLAY, fontSize: "14px", fontWeight: 700, color: "var(--text-light)", marginBottom: "6px" }}>{metric}</div>
                <div style={{ ...DISPLAY, fontSize: "13px", color: "#4d4160" }}>{detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: "80px 40px", maxWidth: "1440px", margin: "0 auto" }}>
        <h2 style={{ ...DISPLAY, fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 800, letterSpacing: "-0.03em", color: "var(--text-light)", margin: "0 0 12px 0" }}>
          Ready to build your{" "}
          <span style={{ fontStyle: "italic", background: "linear-gradient(135deg, #FF69B4 0%, #9D4EDD 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            movement?
          </span>
        </h2>
        <p style={{ ...DISPLAY, fontSize: "15px", color: "#645578", margin: "0 0 40px 0" }}>Digital Labs handles brand, event, and campaign design end-to-end.</p>
        <Link href="/digital-labs/submit-project" style={{
          display: "inline-block",
          ...MONO, fontSize: "11px", fontWeight: 700, letterSpacing: "0.18em",
          textTransform: "uppercase", padding: "14px 36px",
          background: "#FF69B4", color: "var(--bg-dark)",
          border: "none", cursor: "pointer", outline: "none", textDecoration: "none",
          transition: "background 0.2s, box-shadow 0.2s",
        }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.background = "#c4a8f0";
            (e.currentTarget as HTMLElement).style.boxShadow = "0 0 24px rgba(255,105,180,0.3)";
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.background = "#FF69B4";
            (e.currentTarget as HTMLElement).style.boxShadow = "none";
          }}
        >
          Start a Project
        </Link>
        <p style={{ ...MONO, fontSize: "9px", color: "#3a2f4a", letterSpacing: "0.15em", textTransform: "uppercase", marginTop: "48px" }}>
          © 2026 Digital Labs by COSQ · Case Study: Odisha Anime Club × CosQ
        </p>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .timeline-single-col { grid-template-columns: 1fr !important; }
          .brief-single-col { grid-template-columns: 1fr !important; gap: 40px !important; }
          .sponsor-single-col { grid-template-columns: 1fr !important; gap: 40px !important; }
          .outcome-single-col { grid-template-columns: 1fr !important; gap: 40px !important; }
          .halloween-single-col { grid-template-columns: 1fr !important; gap: 40px !important; }
          .ig-single-col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}

function InstagramScript() {
  return (
    <script
      async
      src="https://www.instagram.com/embed.js"
    />
  );
}

function SocialCard({ handle, platform, color }: { handle: string; platform: string; color: string }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        aspectRatio: "1",
        background: hov ? color : "var(--bg-card)",
        border: `1px solid ${hov ? "transparent" : "rgba(157,78,221,0.06)"}`,
        display: "flex", flexDirection: "column", justifyContent: "flex-end",
        padding: "16px", cursor: "pointer",
        transition: "background 0.3s, border-color 0.3s",
      }}
    >
      <Instagram size={20} style={{ color: hov ? "#fff" : "#3a2f4a", marginBottom: "8px", transition: "color 0.3s" }} />
      <div style={{ ...MONO, fontSize: "10px", fontWeight: 700, letterSpacing: "0.1em", color: hov ? "#fff" : "var(--text-light)", transition: "color 0.3s" }}>{handle}</div>
      <div style={{ ...MONO, fontSize: "9px", letterSpacing: "0.12em", color: hov ? "rgba(157,78,221,0.6)" : "#4d4160", textTransform: "uppercase", marginTop: "2px", transition: "color 0.3s" }}>{platform}</div>
    </div>
  );
}
