"use client";

import { useState } from "react";
import Link from "next/link";
import { DESIGN_CATEGORIES, DESIGN_PROJECTS, type DesignProject } from "@/data/labs";
import { vars } from "@/lib/cssVars";

const BGS = ["var(--cosq-pink)", "var(--cosq-purple)", "var(--cosq-pink-light)"];

function ProjectCard({ p, i }: { p: DesignProject; i: number }) {
    const body = (
        <>
            <div style={{ height: 200, position: "relative", background: BGS[i % 3], overflow: "hidden" }}>
                {p.img && <div style={{ position: "absolute", inset: 0, background: `url("${p.img}") center/cover no-repeat` }} />}
                <span style={{ position: "absolute", top: 12, left: 12, font: "400 12px var(--font-display)", textTransform: "uppercase", background: "#fff", border: "3px solid var(--cosq-purple)", padding: "3px 10px", color: "var(--cosq-purple-deep)" }}>{p.category}</span>
                <span style={{ position: "absolute", top: 12, right: 12, font: "400 12px var(--font-display)", color: "#fff", background: "var(--cosq-purple)", padding: "4px 10px" }}>{p.year}</span>
            </div>
            <div style={{ padding: 20, display: "flex", flexDirection: "column", gap: 8, flex: 1, color: "var(--cosq-purple-deep)" }}>
                <h3 style={{ font: "400 22px/1.1 var(--font-display)" }}>{p.title}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.45, flex: 1 }}>{p.subtitle}</p>
                <div style={{ font: "700 13px var(--font-body)", color: "var(--cosq-pink)", paddingTop: 10, borderTop: "3px solid var(--cosq-pink-light)" }}>{p.stats}</div>
                <div style={{ font: "400 13px var(--font-display)", textTransform: "uppercase", color: "var(--cosq-purple)" }}>{p.href ? "View case study →" : ""}</div>
            </div>
        </>
    );
    const style = { background: "#fff", border: "4px solid var(--cosq-purple)", boxShadow: "var(--shadow-hard)", display: "flex", flexDirection: "column" as const, overflow: "hidden" };
    return p.href ? <Link href={p.href} style={style}>{body}</Link> : <div style={style}>{body}</div>;
}

export default function DesignPortfolio() {
    const [filter, setFilter] = useState("All");
    const projects = DESIGN_PROJECTS.filter(p => filter === "All" || p.tags.includes(filter) || p.category === filter);
    return (
        <section className="wrap" style={{ paddingTop: 56, paddingBottom: 80 }}>
            <div className="filters">
                {DESIGN_CATEGORIES.map(c => (
                    <button key={c} type="button" className={`filter${filter === c ? " on" : ""}`} onClick={() => setFilter(c)}>{c}</button>
                ))}
            </div>
            <div className="grid fill" style={vars({ "--min": "340px" })}>
                {projects.map((p, i) => <ProjectCard key={p.id} p={p} i={i} />)}
            </div>
        </section>
    );
}
