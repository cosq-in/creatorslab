"use client";

import { useState } from "react";
import { ArrowLeft, ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";

interface QChanProps {
  onBack: () => void;
}

const MONO: React.CSSProperties = { fontFamily: "'JetBrains Mono', monospace" };
const DISPLAY: React.CSSProperties = { fontFamily: "'Space Grotesk', sans-serif" };

// ── Image data ────────────────────────────────────────────────────────────────

const CHAR_SHEET = "/design-labs/IMG_1810.JPG.jpeg";

const FOLDER_A = "/design-labs/WhatsApp Unknown 2026-06-07 at 7.00.13 AM/";
const FOLDER_B = "/design-labs/WhatsApp Unknown 2026-06-07 at 7.03.55 AM/";

type GalleryImage = { src: string; label: string; phase: string };

const GALLERY: GalleryImage[] = [
  // ── Concept / Ink ──────────────────────────────────────────────────────────
  { src: `${FOLDER_A}WhatsApp Image 2026-06-07 at 6.59.46 AM.jpeg`,    label: "Eye study — ink on tablet",         phase: "Concept" },
  { src: `${FOLDER_A}WhatsApp Image 2026-06-07 at 6.59.47 AM.jpeg`,    label: "Face + outfit pencil sketch",        phase: "Concept" },
  { src: `${FOLDER_A}WhatsApp Image 2026-06-07 at 6.59.48 AM.jpeg`,    label: "Back view — braid + spray cans",     phase: "Concept" },
  { src: `${FOLDER_B}WhatsApp Image 2026-06-07 at 6.59.58 AM (2).jpeg`,label: "Full figure sketch — suspenders",    phase: "Concept" },
  { src: `${FOLDER_B}WhatsApp Image 2026-06-07 at 7.00.06 AM.jpeg`,    label: "Action pose — star motif",           phase: "Concept" },

  // ── 3D Build ───────────────────────────────────────────────────────────────
  { src: `${FOLDER_A}WhatsApp Image 2026-06-07 at 6.59.45 AM.jpeg`,    label: "Face rig — heterochromia eyes",      phase: "3D Build" },
  { src: `${FOLDER_A}WhatsApp Image 2026-06-07 at 6.59.50 AM.jpeg`,    label: "Body rig — braid v1 (grey)",         phase: "3D Build" },
  { src: `${FOLDER_A}WhatsApp Image 2026-06-07 at 6.59.51 AM.jpeg`,    label: "Hair colour test — deep purple",     phase: "3D Build" },
  { src: `${FOLDER_A}WhatsApp Image 2026-06-07 at 6.59.52 AM.jpeg`,    label: "Full model — qipao alt outfit",      phase: "3D Build" },
  { src: `${FOLDER_B}WhatsApp Image 2026-06-07 at 6.59.57 AM.jpeg`,    label: "Final model — front, white uniform", phase: "3D Build" },
  { src: `${FOLDER_B}WhatsApp Image 2026-06-07 at 6.59.57 AM (1).jpeg`,label: "Full body — front with braid",        phase: "3D Build" },
  { src: `${FOLDER_B}WhatsApp Image 2026-06-07 at 6.59.58 AM.jpeg`,    label: "Back view — purple braid cascade",   phase: "3D Build" },
  { src: `${FOLDER_B}WhatsApp Image 2026-06-07 at 6.59.58 AM (1).jpeg`,label: "Close face — final render",          phase: "3D Build" },
  { src: `${FOLDER_B}WhatsApp Image 2026-06-07 at 6.59.59 AM.jpeg`,    label: "Side profile — full figure",         phase: "3D Build" },
  { src: `${FOLDER_B}WhatsApp Image 2026-06-07 at 7.00.00 AM.jpeg`,    label: "Side view — braid length",           phase: "3D Build" },
  { src: `${FOLDER_B}WhatsApp Image 2026-06-07 at 7.00.02 AM.jpeg`,    label: "Back — braided bun variant",         phase: "3D Build" },

  // ── Props & Polish ─────────────────────────────────────────────────────────
  { src: `${FOLDER_B}WhatsApp Image 2026-06-07 at 7.00.07 AM.jpeg`,    label: "Belt prop render — RGB grill + star badges", phase: "Props" },
  { src: `${FOLDER_B}WhatsApp Image 2026-06-07 at 7.00.09 AM.jpeg`,    label: "Blender — UV unwrap + body mesh",    phase: "Props" },
  { src: `${FOLDER_B}WhatsApp Image 2026-06-07 at 7.00.11 AM.jpeg`,    label: "Body sculpt — side proportions",     phase: "Props" },
  { src: `${FOLDER_B}WhatsApp Image 2026-06-07 at 7.00.13 AM.jpeg`,    label: "Blender — full rig with braid mesh", phase: "Props" },
];

const PHASES = ["All", "Concept", "3D Build", "Props"];

// ── Sub-components ─────────────────────────────────────────────────────────────

function SubNav({ onBack }: { onBack: () => void }) {
  return (
    <nav style={{
      position: "sticky", top: 0, zIndex: 100,
      background: "rgba(10,10,10,0.95)", backdropFilter: "blur(16px)",
      borderBottom: "1px solid rgba(255,255,255,0.05)",
      padding: "0 40px", height: "60px",
      display: "flex", alignItems: "center", justifyContent: "space-between",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <div style={{ width: "24px", height: "24px", background: "rgba(211,189,241,0.12)", border: "1px solid rgba(211,189,241,0.25)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: "8px", height: "8px", background: "#d3bdf1", borderRadius: "50%" }} />
        </div>
        <span style={{ ...MONO, fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#d3bdf1" }}>Q-Chan · Character Design</span>
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
        <ArrowLeft size={14} /> Back to Showcase
      </button>
    </nav>
  );
}

function StatBox({ value, label, accent }: { value: string; label: string; accent: string }) {
  return (
    <div style={{ padding: "20px 24px", background: "#0d0d0d", border: "1px solid rgba(255,255,255,0.06)", flex: 1, minWidth: "120px" }}>
      <div style={{ ...DISPLAY, fontSize: "clamp(24px, 2.5vw, 36px)", fontWeight: 800, color: accent, lineHeight: 1, marginBottom: "6px" }}>{value}</div>
      <div style={{ ...MONO, fontSize: "9px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#444" }}>{label}</div>
    </div>
  );
}

function TraitRow({ label, value, accent }: { label: string; value: string; accent?: string }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", padding: "13px 0", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
      <span style={{ ...MONO, fontSize: "9px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#444" }}>{label}</span>
      <span style={{ ...DISPLAY, fontSize: "14px", fontWeight: 600, color: accent || "#888" }}>{value}</span>
    </div>
  );
}

function Lightbox({ images, index, onClose, onPrev, onNext }: {
  images: GalleryImage[]; index: number;
  onClose: () => void; onPrev: () => void; onNext: () => void;
}) {
  const img = images[index];
  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 1000,
        background: "rgba(0,0,0,0.92)", backdropFilter: "blur(12px)",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}
    >
      <button onClick={e => { e.stopPropagation(); onPrev(); }} style={{
        position: "absolute", left: "24px",
        background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)",
        color: "#fff", cursor: "pointer", outline: "none",
        width: "48px", height: "48px", display: "flex", alignItems: "center", justifyContent: "center",
        transition: "background 0.2s",
      }}
        onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.12)")}
        onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.06)")}
      ><ChevronLeft size={20} /></button>

      <div onClick={e => e.stopPropagation()} style={{ display: "flex", flexDirection: "column", alignItems: "center", maxWidth: "90vw", maxHeight: "90vh" }}>
        <div style={{ position: "relative", maxHeight: "78vh", maxWidth: "80vw" }}>
          <img
            src={img.src} alt={img.label}
            style={{ maxHeight: "78vh", maxWidth: "80vw", objectFit: "contain", display: "block" }}
          />
        </div>
        <div style={{ marginTop: "16px", textAlign: "center" }}>
          <div style={{ ...DISPLAY, fontSize: "14px", fontWeight: 600, color: "#e5e2e1", marginBottom: "4px" }}>{img.label}</div>
          <div style={{ ...MONO, fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#444" }}>
            {index + 1} / {images.length} · {img.phase}
          </div>
        </div>
      </div>

      <button onClick={e => { e.stopPropagation(); onNext(); }} style={{
        position: "absolute", right: "24px",
        background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)",
        color: "#fff", cursor: "pointer", outline: "none",
        width: "48px", height: "48px", display: "flex", alignItems: "center", justifyContent: "center",
        transition: "background 0.2s",
      }}
        onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.12)")}
        onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.06)")}
      ><ChevronRight size={20} /></button>

      <button onClick={onClose} style={{
        position: "absolute", top: "20px", right: "20px",
        background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)",
        color: "#fff", cursor: "pointer", outline: "none",
        width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center",
      }}><X size={16} /></button>
    </div>
  );
}

function GalleryTile({ img, index, onOpen }: { img: GalleryImage; index: number; onOpen: (i: number) => void }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      onClick={() => onOpen(index)}
      style={{
        background: "#0d0d0d",
        border: `1px solid ${hov ? "rgba(211,189,241,0.35)" : "rgba(255,255,255,0.06)"}`,
        overflow: "hidden", cursor: "pointer",
        transition: "border-color 0.25s, transform 0.2s",
        transform: hov ? "translateY(-3px)" : "translateY(0)",
      }}
    >
      <div style={{ aspectRatio: "4/3", position: "relative", overflow: "hidden", background: "#111" }}>
        <img
          src={img.src} alt={img.label}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block",
            filter: hov ? "grayscale(0%)" : "grayscale(20%)",
            transition: "filter 0.3s, transform 0.3s",
            transform: hov ? "scale(1.04)" : "scale(1)",
          }}
        />
        <div style={{ position: "absolute", inset: 0, background: hov ? "rgba(0,0,0,0.15)" : "rgba(0,0,0,0.3)", transition: "background 0.3s" }} />
        <div style={{
          position: "absolute", top: "8px", left: "8px",
          ...MONO, fontSize: "8px", letterSpacing: "0.15em", textTransform: "uppercase",
          padding: "3px 8px", color: "#d3bdf1",
          background: "rgba(0,0,0,0.55)", backdropFilter: "blur(6px)",
          border: "1px solid rgba(211,189,241,0.2)",
        }}>{img.phase}</div>
        {hov && (
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ ...MONO, fontSize: "9px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#fff", background: "rgba(0,0,0,0.6)", padding: "6px 14px", border: "1px solid rgba(255,255,255,0.2)" }}>
              Enlarge
            </div>
          </div>
        )}
      </div>
      <div style={{ padding: "10px 12px 12px" }}>
        <p style={{ ...MONO, fontSize: "10px", color: "#555", lineHeight: 1.5, margin: 0 }}>{img.label}</p>
      </div>
    </div>
  );
}

// ── Main Component ─────────────────────────────────────────────────────────────

export function QChanCaseStudy({ onBack }: QChanProps) {
  const [phase, setPhase] = useState("All");
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const filtered = phase === "All" ? GALLERY : GALLERY.filter(g => g.phase === phase);

  const openLightbox = (i: number) => setLightboxIdx(i);
  const closeLightbox = () => setLightboxIdx(null);
  const prevImg = () => setLightboxIdx(p => p !== null ? (p - 1 + filtered.length) % filtered.length : null);
  const nextImg = () => setLightboxIdx(p => p !== null ? (p + 1) % filtered.length : null);

  return (
    <div style={{ minHeight: "100vh", background: "#0a0a0a", color: "#e5e2e1" }}>
      <SubNav onBack={onBack} />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section style={{ padding: "80px 40px 0", maxWidth: "1440px", margin: "0 auto" }}>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "32px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "5px 12px", border: "1px solid rgba(211,189,241,0.25)", background: "rgba(211,189,241,0.06)" }}>
            <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#00e292", boxShadow: "0 0 6px #00e292" }} />
            <span style={{ ...MONO, fontSize: "9px", letterSpacing: "0.3em", textTransform: "uppercase", color: "#d3bdf1" }}>Original Character · COSQ Mascot</span>
          </div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "5px 12px", border: "1px solid rgba(255,255,255,0.07)" }}>
            <span style={{ ...MONO, fontSize: "9px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#444" }}>2D Illustration + 3D Model + VRChat-Ready</span>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "start" }} className="qchan-hero-col">

          {/* Left — character sheet */}
          <div style={{ position: "sticky", top: "80px" }}>
            <div style={{
              background: "#0d0d0d", border: "1px solid rgba(211,189,241,0.15)",
              overflow: "hidden", position: "relative",
            }}>
              {/* Colour flash strip across top */}
              <div style={{ height: "3px", background: "linear-gradient(90deg, #ff0000, #ff7700, #ffff00, #00ff00, #0000ff, #8b00ff, #d3bdf1)" }} />
              <img
                src={CHAR_SHEET}
                alt="Q-Chan official character sheet by Susen mt"
                style={{ width: "100%", display: "block", objectFit: "contain" }}
              />
              <div style={{ padding: "16px 20px", borderTop: "1px solid rgba(255,255,255,0.05)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <div style={{ ...DISPLAY, fontSize: "13px", fontWeight: 700, color: "#e5e2e1", marginBottom: "2px" }}>Official Character Sheet</div>
                  <div style={{ ...MONO, fontSize: "9px", color: "#444", letterSpacing: "0.1em" }}>Illustration by Susen mt · @ph4forms</div>
                </div>
                <div style={{ ...MONO, fontSize: "9px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#d3bdf1", padding: "4px 10px", border: "1px solid rgba(211,189,241,0.2)" }}>2024</div>
              </div>
            </div>
          </div>

          {/* Right — info */}
          <div style={{ paddingTop: "4px" }}>
            <h1 style={{ ...DISPLAY, fontSize: "clamp(52px, 6vw, 88px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 0.9, color: "#e5e2e1", margin: "0 0 8px 0" }}>
              Q-Chan
            </h1>
            <div style={{ ...DISPLAY, fontSize: "clamp(18px, 2.5vw, 28px)", fontWeight: 400, fontStyle: "italic", background: "linear-gradient(135deg, #d3bdf1 0%, #a78bfa 50%, #f472b6 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", margin: "0 0 32px 0", lineHeight: 1.2 }}>
              Lawless Girl in a Lawless World.
            </div>

            <p style={{ ...DISPLAY, fontSize: "15px", color: "#555", lineHeight: 1.75, margin: "0 0 32px 0", maxWidth: "460px" }}>
              Q-Chan is the official mascot of COSQ — a 172cm original character designed from scratch:
              hand-illustrated character sheet, full 3D model built in Blender, rigged for VRChat and MMD,
              with a custom prop belt designed in Blender. She embodies the chaotic creative spirit of the Odisha cosplay and gaming community.
            </p>

            {/* Stat bar */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1px", background: "rgba(255,255,255,0.04)", marginBottom: "36px" }}>
              <StatBox value="172cm" label="Height" accent="#d3bdf1" />
              <StatBox value="2" label="Eye Colours" accent="#f472b6" />
              <StatBox value="3" label="Outfit Variants" accent="#a78bfa" />
              <StatBox value="3D" label="VRChat Ready" accent="#34d399" />
            </div>

            {/* Character traits */}
            <div style={{ ...MONO, fontSize: "10px", letterSpacing: "0.25em", textTransform: "uppercase", color: "#333", marginBottom: "16px" }}>Character Profile</div>
            <TraitRow label="Full Name" value="Q-Chan" />
            <TraitRow label="Archetype" value="Lawless Girl · Chaotic Creative" />
            <TraitRow label="Height" value="172 cm" />
            <TraitRow label="Eyes" value="Heterochromia — Pink (L) · Green (R)" accent="#f9a8d4" />
            <TraitRow label="Hair" value="Dark purple + rainbow streak (red/yellow/blue/green)" accent="#c084fc" />
            <TraitRow label="Signature Item" value="Bubble bead braid · spray cans on belt" />
            <TraitRow label="Shoes" value="Chunky platform sneakers — star motif" />
            <TraitRow label="Personality" value="Kinda clumsy · talks a lot · HA HA HA" />
            <TraitRow label="Illustrator" value="Susen mt" />
            <TraitRow label="3D Model" value="@ph4forms · VRoid Studio" />
            <TraitRow label="Client" value="COSQ / Odisha Anime Club" />
          </div>
        </div>
      </section>

      {/* ── OUTFIT BREAKDOWN ─────────────────────────────────────────────── */}
      <section style={{ padding: "80px 40px", maxWidth: "1440px", margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "48px" }}>
          <div style={{ height: "1px", flex: 1, background: "rgba(255,255,255,0.06)" }} />
          <span style={{ ...MONO, fontSize: "10px", letterSpacing: "0.3em", textTransform: "uppercase", color: "#444", whiteSpace: "nowrap" }}>Design Language · Outfit System</span>
          <div style={{ height: "1px", flex: 1, background: "rgba(255,255,255,0.06)" }} />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "8px" }}>
          {[
            { name: "Main Outfit",    desc: "Light blue relaxed overalls, white tee, red tie, suspenders with spray can holders. Belt with star buckle.",   accent: "#93c5fd" },
            { name: "Bead Braid",     desc: "Long braided ponytail woven with multi-colour bubble beads — red, green, yellow, teal — ending in a floral tie.", accent: "#d3bdf1" },
            { name: "Rainbow Streak", desc: "Short platinum-white hair with a signature 4-colour rainbow streak (red/yellow/blue/green) at the crown.",         accent: "#fbbf24" },
            { name: "Belt Prop",      desc: "Custom designed belt buckle — star side badges, RGB gradient grill at centre. 3D rendered in Blender.",            accent: "#f472b6" },
            { name: "Heterochromia",  desc: "Left eye: hot pink. Right eye: vivid green. Both with large diamond highlight reflecting her dual energy.",        accent: "#f9a8d4" },
            { name: "Alt: Qipao",     desc: "Red Chinese brocade qipao with black fur cuffs — an alternate outfit variant demonstrating costume versatility.",   accent: "#ef4444" },
          ].map(({ name, desc, accent }) => (
            <OutfitCard key={name} name={name} desc={desc} accent={accent} />
          ))}
        </div>
      </section>

      {/* ── PIPELINE ─────────────────────────────────────────────────────── */}
      <section style={{ background: "#0d0d0d", borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)", padding: "80px 40px" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "48px" }}>
            <div style={{ height: "1px", flex: 1, background: "rgba(255,255,255,0.06)" }} />
            <span style={{ ...MONO, fontSize: "10px", letterSpacing: "0.3em", textTransform: "uppercase", color: "#444", whiteSpace: "nowrap" }}>Creation Pipeline · From Sketch to 3D</span>
            <div style={{ height: "1px", flex: 1, background: "rgba(255,255,255,0.06)" }} />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1px", background: "rgba(255,255,255,0.04)" }} className="pipeline-col">
            {[
              { step: "01", phase: "Concept", tool: "Pencil + iPad", desc: "Character brief established. Eye studies, face structure, outfit silhouette, personality traits written into the design." },
              { step: "02", phase: "Illustration", tool: "Digital — Susen mt", desc: "Full character sheet: front/back/side views, expression study, hair colour chart, shoe detail, tagline." },
              { step: "03", phase: "3D Modelling", tool: "VRoid Studio", desc: "Character rigged in VRoid Studio from the reference sheet. Heterochromic eyes, platinum-white hair with braid, full t-pose rig." },
              { step: "04", phase: "Props + Polish", tool: "Blender + render", desc: "Belt prop designed and rendered. Alternate qipao outfit modelled. VRChat / MMD export pipeline set up." },
            ].map(({ step, phase: ph, tool, desc }) => (
              <div key={step} style={{ padding: "32px 28px", background: "#0d0d0d" }}>
                <div style={{ ...MONO, fontSize: "32px", fontWeight: 800, color: "rgba(211,189,241,0.12)", lineHeight: 1, marginBottom: "20px" }}>{step}</div>
                <div style={{ ...MONO, fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#d3bdf1", marginBottom: "8px" }}>{ph}</div>
                <div style={{ ...DISPLAY, fontSize: "14px", fontWeight: 700, color: "#e5e2e1", marginBottom: "10px" }}>{tool}</div>
                <p style={{ ...DISPLAY, fontSize: "13px", color: "#555", lineHeight: 1.65, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY ──────────────────────────────────────────────────────── */}
      <section style={{ padding: "80px 40px", maxWidth: "1440px", margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "32px" }}>
          <div style={{ height: "1px", flex: 1, background: "rgba(255,255,255,0.06)" }} />
          <span style={{ ...MONO, fontSize: "10px", letterSpacing: "0.3em", textTransform: "uppercase", color: "#444", whiteSpace: "nowrap" }}>Process Archive · {GALLERY.length} Frames</span>
          <div style={{ height: "1px", flex: 1, background: "rgba(255,255,255,0.06)" }} />
        </div>

        {/* Phase filter */}
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "32px" }}>
          {PHASES.map(p => (
            <button key={p} onClick={() => setPhase(p)} style={{
              ...MONO, fontSize: "10px", fontWeight: 700, letterSpacing: "0.15em",
              textTransform: "uppercase", padding: "7px 18px",
              background: phase === p ? "#d3bdf1" : "transparent",
              color: phase === p ? "#0a0a0a" : "#555",
              border: `1px solid ${phase === p ? "#d3bdf1" : "rgba(255,255,255,0.1)"}`,
              cursor: "pointer", outline: "none", transition: "all 0.2s",
            }}
              onMouseEnter={e => { if (phase !== p) { (e.currentTarget as HTMLElement).style.color = "#e5e2e1"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.3)"; } }}
              onMouseLeave={e => { if (phase !== p) { (e.currentTarget as HTMLElement).style.color = "#555"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)"; } }}
            >
              {p} {p !== "All" && <span style={{ color: phase === p ? "#0a0a0a66" : "#333" }}>({GALLERY.filter(g => g.phase === p).length})</span>}
            </button>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "12px" }}>
          {filtered.map((img, i) => (
            <GalleryTile key={img.src} img={img} index={i} onOpen={openLightbox} />
          ))}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section style={{ background: "#0d0d0d", borderTop: "1px solid rgba(255,255,255,0.05)", padding: "80px 40px" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
          <h2 style={{ ...DISPLAY, fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 800, letterSpacing: "-0.03em", color: "#e5e2e1", margin: "0 0 12px 0" }}>
            Need an original{" "}
            <span style={{ fontStyle: "italic", background: "linear-gradient(135deg, #d3bdf1, #f472b6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>character?</span>
          </h2>
          <p style={{ ...DISPLAY, fontSize: "15px", color: "#555", margin: "0 0 36px 0" }}>
            Digital Labs designs mascots, original characters, and 3D assets end-to-end — from brief to Blender.
          </p>
          <button onClick={onBack} style={{
            ...MONO, fontSize: "11px", fontWeight: 700, letterSpacing: "0.18em",
            textTransform: "uppercase", padding: "14px 36px",
            background: "#d3bdf1", color: "#0a0a0a",
            border: "none", cursor: "pointer", outline: "none",
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#c4a8f0"; (e.currentTarget as HTMLElement).style.boxShadow = "0 0 24px rgba(211,189,241,0.3)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#d3bdf1"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
          >Back to Showcase</button>
          <p style={{ ...MONO, fontSize: "9px", color: "#333", letterSpacing: "0.15em", textTransform: "uppercase", marginTop: "48px" }}>
            © 2026 Digital Labs by COSQ · Q-Chan designed by Susen mt · 3D by @ph4forms
          </p>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIdx !== null && (
        <Lightbox
          images={filtered}
          index={lightboxIdx}
          onClose={closeLightbox}
          onPrev={prevImg}
          onNext={nextImg}
        />
      )}

      <style>{`
        @media (max-width: 900px) {
          .qchan-hero-col { grid-template-columns: 1fr !important; gap: 40px !important; }
          .pipeline-col { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .pipeline-col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}

function OutfitCard({ name, desc, accent }: { name: string; desc: string; accent: string }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        padding: "24px 24px 28px",
        background: "#0d0d0d",
        border: `1px solid ${hov ? accent + "44" : "rgba(255,255,255,0.06)"}`,
        transition: "border-color 0.25s",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
        <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: accent, flexShrink: 0 }} />
        <span style={{ ...DISPLAY, fontSize: "14px", fontWeight: 700, color: hov ? accent : "#e5e2e1", transition: "color 0.2s" }}>{name}</span>
      </div>
      <p style={{ ...DISPLAY, fontSize: "13px", color: "#555", lineHeight: 1.65, margin: 0 }}>{desc}</p>
    </div>
  );
}
