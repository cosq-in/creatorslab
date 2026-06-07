"use client";

import React from "react";
import { TrendingUp } from "lucide-react";

const MONO: React.CSSProperties = { fontFamily: "'JetBrains Mono', monospace" };
const DISPLAY: React.CSSProperties = { fontFamily: "'Outfit', sans-serif" };

export default function StatsSection() {
    const stats = [
        { label: "Active Creators", value: "1,248", delta: "+12%",  bar: 75, color: "#a5b4fc", glow: "#818cf8" },
        { label: "Monthly Reach",   value: "45.2M",  delta: "+8.4%", bar: 48, color: "#34d399", glow: "#10b981" },
        { label: "Campaign ROI",    value: "4.2×",   delta: null,    bar: 62, color: "#f472b6", glow: "#ec4899", icon: true },
    ];

    return (
        <section
            style={{
                borderTop: "1px solid rgba(255,255,255,0.05)",
                background: "#050505",
                padding: "64px 24px",
            }}
        >
            <div
                style={{
                    maxWidth: "1440px",
                    margin: "0 auto",
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                    gap: "16px",
                }}
            >
                {stats.map(({ label, value, delta, bar, color, glow, icon }) => (
                    <div
                        key={label}
                        style={{
                            background: "#0a0a0b",
                            border: "1px solid rgba(255,255,255,0.07)",
                            padding: "28px 28px 24px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "16px",
                        }}
                    >
                        {/* Label */}
                        <span style={{ ...MONO, fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase", color }}>
                            {label}
                        </span>

                        {/* Value row */}
                        <div style={{ display: "flex", alignItems: "baseline", gap: "10px" }}>
                            <span style={{
                                ...DISPLAY,
                                fontSize: "clamp(36px, 4vw, 48px)",
                                fontWeight: 800,
                                color: "#fff",
                                lineHeight: 1,
                                fontVariantNumeric: "tabular-nums",
                            }}>
                                {value}
                            </span>
                            {delta && (
                                <span style={{ ...MONO, fontSize: "10px", color: "#34d399", letterSpacing: "0.05em" }}>
                                    {delta}
                                </span>
                            )}
                            {icon && (
                                <TrendingUp size={16} style={{ color }} />
                            )}
                        </div>

                        {/* Bar */}
                        <div style={{ height: "2px", background: "rgba(255,255,255,0.06)", position: "relative", overflow: "hidden" }}>
                            <div
                                style={{
                                    position: "absolute",
                                    left: 0,
                                    top: 0,
                                    height: "100%",
                                    width: `${bar}%`,
                                    background: color,
                                    boxShadow: `0 0 8px ${glow}`,
                                }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
