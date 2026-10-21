"use client";

import { useState } from "react";
import { CREATOR_FILTERS, CREATOR_PROJECTS, TESTIMONIALS } from "@/data/labs";
import { vars } from "@/lib/cssVars";

export default function CreatorsPortfolio() {
    const [filter, setFilter] = useState("all");
    const projects = CREATOR_PROJECTS.filter(p => filter === "all" || p.cat.includes(filter));
    return (
        <>
            <section className="wrap" style={{ paddingTop: 56, paddingBottom: 24 }}>
                <div className="filters">
                    {CREATOR_FILTERS.map(f => (
                        <button key={f} type="button" className={`filter${filter === f ? " on" : ""}`} onClick={() => setFilter(f)}>
                            {f === "all" ? "All projects" : f}
                        </button>
                    ))}
                </div>
                <div className="grid fill" style={vars({ "--min": "340px" })}>
                    {projects.map(p => (
                        <div key={p.title} className="card" style={{ padding: 22, display: "flex", flexDirection: "column", gap: 8 }}>
                            <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
                                <span className="eyebrow" style={{ fontSize: 12 }}>{p.workType}</span>
                                <span style={{ font: "700 13px var(--font-body)" }}>{p.client}</span>
                            </div>
                            <h3 style={{ font: "400 22px/1.1 var(--font-display)" }}>{p.title}</h3>
                            <div style={{ font: "600 13px var(--font-body)" }}>{p.meta}</div>
                            <p style={{ fontSize: 15, lineHeight: 1.5, flex: 1 }}>{p.desc}</p>
                            <div style={{ font: "600 13px var(--font-body)" }}>Tools: {p.tools}</div>
                            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", paddingTop: 10, borderTop: "3px solid var(--cosq-pink-light)" }}>
                                {p.stats.map(s => <span key={s} className="tag-pink" style={{ padding: "4px 10px" }}>{s}</span>)}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <section className="band purple open-bottom" style={{ marginTop: 48 }}>
                <div className="inner">
                    <h2 className="h2 on-purple" style={{ marginBottom: 28 }}>What creators say</h2>
                    <div className="grid" style={vars({ "--min": "280px", "--gap": "24px" })}>
                        {TESTIMONIALS.map(([quote, name, role]) => (
                            <div key={name} className="card flat pink-border">
                                <p style={{ fontSize: 17, lineHeight: 1.55, marginBottom: 16 }}>“{quote}”</p>
                                <div style={{ font: "700 16px var(--font-body)" }}>{name}</div>
                                <div style={{ fontSize: 14 }}>{role}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
