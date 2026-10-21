"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Chip from "@/components/labs/Chip";
import { QCHAN_GALLERY, QCHAN_OUTFITS, QCHAN_PIPELINE, QCHAN_PROFILE, QCHAN_SHEET, QCHAN_STATS } from "@/data/labs";
import { vars } from "@/lib/cssVars";

const PHASES = ["All", "Concept", "3D Build", "Props"] as const;

export default function QChanCaseStudy() {
    const [phase, setPhase] = useState<(typeof PHASES)[number]>("All");
    const [open, setOpen] = useState<number | null>(null);
    const frames = QCHAN_GALLERY.filter(g => phase === "All" || g.phase === phase);
    const current = open != null ? frames[open] : null;
    const step = (d: number) => setOpen(i => (i == null ? i : (i + d + frames.length) % frames.length));

    useEffect(() => {
        if (open == null) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpen(null);
            if (e.key === "ArrowLeft") step(-1);
            if (e.key === "ArrowRight") step(1);
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    });

    return (
        <>
            <section className="wrap" style={{ paddingTop: 40 }}>
                <Link href="/digital-labs/portfolio" className="back-link">← Back to portfolio</Link>
                <div className="grid" style={vars({ "--min": "420px", "--gap": "48px" }, { marginTop: 28, alignItems: "start" })}>
                    <div style={{ border: "6px solid var(--cosq-pink)", boxShadow: "var(--shadow-hard)", background: "#fff", transform: "rotate(-1deg)" }}>
                        <img src={QCHAN_SHEET} alt="Q-Chan character sheet" style={{ display: "block", width: "100%" }} />
                        <div style={{ padding: "14px 18px", borderTop: "4px solid var(--cosq-purple)", display: "flex", justifyContent: "space-between", gap: 12, alignItems: "center" }}>
                            <div>
                                <div style={{ font: "400 15px var(--font-display)", textTransform: "uppercase" }}>Official Character Sheet</div>
                                <div style={{ fontSize: 13 }}>Illustration by Suna Mi · @ph4forms</div>
                            </div>
                            <span style={{ font: "400 13px var(--font-display)", color: "var(--cosq-pink)" }}>2024</span>
                        </div>
                    </div>
                    <div>
                        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
                            <Chip>Original Character · COSQ Mascot</Chip>
                            <Chip color="var(--cosq-purple)">2D + 3D · VRChat-ready</Chip>
                        </div>
                        <h2 style={{ font: "400 clamp(56px,8vw,96px)/0.9 var(--font-display)", color: "var(--cosq-pink)", textShadow: "4px 4px 0 var(--cosq-purple)", margin: "0 0 12px" }}>Q-Chan</h2>
                        <div style={{ font: "italic 700 clamp(20px,2.4vw,28px) var(--font-body)", marginBottom: 20 }}>Lawless Girl in a Lawless World.</div>
                        <p style={{ fontSize: 17, lineHeight: 1.6, marginBottom: 24 }}>
                            Q-Chan is the official mascot of COSQ, a 172cm original character designed from scratch: hand-illustrated character sheet, full 3D model built in Blender, rigged for VRChat and MMD, with a custom prop belt designed in Blender. She embodies the chaotic creative spirit of the Odisha cosplay and gaming community.
                        </p>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(110px,1fr))", gap: 12, marginBottom: 24 }}>
                            {QCHAN_STATS.map(([n, label]) => (
                                <div key={label} style={{ border: "4px solid var(--cosq-purple)", padding: "12px 14px" }}>
                                    <div style={{ font: "400 28px/1 var(--font-display)", color: "var(--cosq-pink)" }}>{n}</div>
                                    <div style={{ font: "700 12px var(--font-body)", textTransform: "uppercase", marginTop: 6 }}>{label}</div>
                                </div>
                            ))}
                        </div>
                        {QCHAN_PROFILE.map(([k, v]) => (
                            <div key={k} style={{ display: "flex", justifyContent: "space-between", gap: 16, padding: "10px 0", borderBottom: "3px solid var(--cosq-pink-light)" }}>
                                <span style={{ font: "400 12px var(--font-display)", textTransform: "uppercase" }}>{k}</span>
                                <span style={{ font: "600 15px var(--font-body)", textAlign: "right" }}>{v}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="wrap" style={{ paddingTop: 72, paddingBottom: 24 }}>
                <h3 className="h3">Design language · Outfit system</h3>
                <div className="grid fill" style={vars({ "--gap": "20px" })}>
                    {QCHAN_OUTFITS.map(([name, desc]) => (
                        <div key={name} className="card flat" style={{ padding: 20 }}>
                            <div style={{ font: "400 18px var(--font-display)", textTransform: "uppercase", color: "var(--cosq-pink)", marginBottom: 8 }}>{name}</div>
                            <p style={{ fontSize: 15, lineHeight: 1.5 }}>{desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="band pink" style={{ marginTop: 56 }}>
                <div className="inner">
                    <h3 className="h2 on-pink" style={{ marginBottom: 28 }}>Sketch to 3D</h3>
                    <div className="grid" style={vars({ "--min": "240px", "--gap": "24px" })}>
                        {QCHAN_PIPELINE.map(([stepNo, phaseName, tool, desc]) => (
                            <div key={stepNo} className="card" style={{ padding: 22 }}>
                                <div style={{ font: "400 36px/1 var(--font-display)", color: "var(--cosq-pink)" }}>{stepNo}</div>
                                <div style={{ font: "400 13px var(--font-display)", textTransform: "uppercase", margin: "12px 0 4px" }}>{phaseName}</div>
                                <div style={{ font: "700 15px var(--font-body)", marginBottom: 8 }}>{tool}</div>
                                <p style={{ fontSize: 14, lineHeight: 1.5 }}>{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="wrap" style={{ paddingTop: 72, paddingBottom: 72 }}>
                <h3 className="h3">Process archive · {QCHAN_GALLERY.length} frames</h3>
                <div className="filters" style={{ marginBottom: 28 }}>
                    {PHASES.map(p => (
                        <button key={p} type="button" className={`filter${phase === p ? " on" : ""}`} onClick={() => { setPhase(p); setOpen(null); }}>
                            {p === "All" ? "All" : `${p} (${QCHAN_GALLERY.filter(g => g.phase === p).length})`}
                        </button>
                    ))}
                </div>
                <div className="grid fill qchan-gallery" style={vars({ "--min": "250px", "--gap": "20px" })}>
                    {frames.map((g, i) => (
                        <button key={g.src} type="button" onClick={() => setOpen(i)} style={{ cursor: "pointer", border: "4px solid var(--cosq-purple)", background: "#fff", boxShadow: "var(--shadow-hard)", padding: 0, textAlign: "left", font: "inherit", color: "inherit" }}>
                            <div style={{ aspectRatio: "4/3", overflow: "hidden", position: "relative" }}>
                                <div style={{ width: "100%", height: "100%", background: `url("${g.src}") center/cover no-repeat` }} />
                                <span style={{ position: "absolute", top: 8, left: 8, font: "400 11px var(--font-display)", textTransform: "uppercase", background: "var(--cosq-pink)", color: "#fff", border: "2px solid var(--cosq-purple)", padding: "2px 8px" }}>{g.phase}</span>
                            </div>
                            <div style={{ padding: "10px 12px", fontSize: 13, lineHeight: 1.4 }}>{g.label}</div>
                        </button>
                    ))}
                </div>
            </section>

            {current && (
                <div onClick={() => setOpen(null)} role="dialog" aria-label={current.label} style={{ position: "fixed", inset: 0, zIndex: 90, background: "rgba(62,15,87,.92)", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
                    <button type="button" aria-label="Previous" onClick={e => { e.stopPropagation(); step(-1); }} style={{ position: "absolute", left: 20, cursor: "pointer", font: "400 36px var(--font-display)", color: "#fff", padding: 12, background: "none", border: 0, zIndex: 1 }}>‹</button>
                    <div onClick={e => e.stopPropagation()} style={{ maxWidth: "90vw", display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
                        <div style={{ width: "min(84vw,900px)", height: "78vh", border: "6px solid var(--cosq-pink)", background: `#fff url("${current.src}") center/contain no-repeat` }} />
                        <div style={{ font: "400 16px var(--font-display)", color: "#fff", textTransform: "uppercase", textAlign: "center" }}>{current.label} · {open! + 1} / {frames.length}</div>
                    </div>
                    <button type="button" aria-label="Next" onClick={e => { e.stopPropagation(); step(1); }} style={{ position: "absolute", right: 20, cursor: "pointer", font: "400 36px var(--font-display)", color: "#fff", padding: 12, background: "none", border: 0, zIndex: 1 }}>›</button>
                </div>
            )}
        </>
    );
}
