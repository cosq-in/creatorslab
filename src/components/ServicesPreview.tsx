"use client";

import React, { useState, useEffect } from "react";
import { FlaskConical, Terminal } from "lucide-react";

const MONO: React.CSSProperties = { fontFamily: "'JetBrains Mono', monospace" };
const DISPLAY: React.CSSProperties = { fontFamily: "'Outfit', sans-serif" };
const INTER: React.CSSProperties = { fontFamily: "'Inter', sans-serif" };

const SIMULATED_LINES = [
    "Syncing telemetry data from global nodes...",
    "Decrypting competitor strategies...",
    "Calibrating neon luminescence levels...",
    "Establishing connection to Discord Matrix...",
    "Injecting performance enhancers to UI layer...",
    "Status: ELITE OPERATIONAL READY.",
];

export default function ServicesPreview() {
    const [logs, setLogs] = useState<string[]>([
        "Initializing Creators Lab Interface...",
        "[SUCCESS] Neural link established.",
        "[LOADING] Valorant Protocol V3.2...",
        "> Fetching roster status...",
        "@TENZ_PROTO: ONLINE",
        "@SHROUD_PROTO: STANDBY",
        "[WARNING] System temperature rising. Fans at 100%.",
    ]);

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setLogs(prev => {
                const next = [...prev, `[SYSTEM] ${SIMULATED_LINES[index % SIMULATED_LINES.length]}`];
                return next.length > 12 ? next.slice(next.length - 12) : next;
            });
            index++;
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section
            id="creator-system"
            style={{
                background: "#050505",
                borderTop: "1px solid rgba(255,255,255,0.05)",
                padding: "80px 24px",
            }}
        >
            <div style={{ maxWidth: "1440px", margin: "0 auto" }}>

                {/* Section eyebrow */}
                <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "48px" }}>
                    <span style={{ ...MONO, fontSize: "10px", color: "#a5b4fc", letterSpacing: "0.28em", textTransform: "uppercase", opacity: 0.7 }}>
                        Creator Infrastructure
                    </span>
                    <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.05)" }} />
                </div>

                {/* Main 2-col grid */}
                <div
                    className="grid gap-4 mb-4"
                    style={{ gridTemplateColumns: "repeat(12, 1fr)" }}
                >
                    {/* Left: Core System card */}
                    <div
                        className="col-span-12 lg:col-span-7"
                        style={{
                            background: "#0a0a0b",
                            border: "1px solid rgba(255,255,255,0.07)",
                            padding: "40px 40px 36px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            minHeight: "360px",
                        }}
                    >
                        <div style={{ marginBottom: "32px" }}>
                            <h3 style={{
                                ...DISPLAY,
                                fontSize: "clamp(28px, 3.5vw, 44px)",
                                fontWeight: 800,
                                color: "#fff",
                                letterSpacing: "-0.03em",
                                lineHeight: 1,
                                textTransform: "uppercase",
                                margin: "0 0 20px 0",
                            }}>
                                The Creator
                                <br />
                                <span style={{
                                    background: "linear-gradient(135deg, #9D4EDD 0%, #6366f1 100%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                }}>
                                    Core System
                                </span>
                            </h3>
                            <p style={{
                                ...INTER,
                                fontSize: "14px",
                                color: "#888",
                                lineHeight: 1.75,
                                maxWidth: "480px",
                                margin: 0,
                            }}>
                                Our proprietary analytics engine tracks performance across every frame, every click, and every interaction. We provide the hardware and the data to turn potential into dominance.
                            </p>
                        </div>

                        {/* Stats */}
                        <div style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(3, 1fr)",
                            gap: "24px",
                            paddingTop: "28px",
                            borderTop: "1px solid rgba(255,255,255,0.06)",
                        }}>
                            {[
                                { val: "99.9%", label: "Uptime Reliability" },
                                { val: "2ms",   label: "Avg Latency" },
                                { val: "24/7",  label: "Admin Support" },
                            ].map(({ val, label }) => (
                                <div key={label}>
                                    <span style={{ ...MONO, fontSize: "clamp(20px, 2.5vw, 28px)", fontWeight: 800, color: "#fff", display: "block", marginBottom: "6px" }}>
                                        {val}
                                    </span>
                                    <span style={{ ...MONO, fontSize: "9px", color: "#555", letterSpacing: "0.15em", textTransform: "uppercase", display: "block" }}>
                                        {label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Two service cards stacked */}
                    <div className="col-span-12 lg:col-span-5 flex flex-col gap-4">
                        <ServiceCard
                            Icon={FlaskConical}
                            iconColor="#9D4EDD"
                            iconBg="rgba(157,78,221,0.1)"
                            iconBorder="rgba(157,78,221,0.2)"
                            borderColor="rgba(157,78,221,0.25)"
                            hoverBorder="rgba(157,78,221,0.5)"
                            title="Talent Incubation"
                            body="Customized growth paths for rising stars in the competitive gaming scene."
                        />
                        <ServiceCard
                            Icon={Terminal}
                            iconColor="#aaa"
                            iconBg="rgba(255,255,255,0.04)"
                            iconBorder="rgba(255,255,255,0.1)"
                            borderColor="rgba(255,255,255,0.07)"
                            hoverBorder="rgba(255,255,255,0.18)"
                            title="Studio Protocol"
                            body="Access to ultra-high-end production, broadcast, and streaming facilities."
                        />
                    </div>
                </div>

                {/* Terminal */}
                <div
                    id="terminal-section"
                    style={{
                        background: "#080808",
                        border: "1px solid rgba(255,255,255,0.07)",
                        padding: "24px 28px",
                    }}
                >
                    {/* Header bar */}
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        paddingBottom: "16px",
                        marginBottom: "16px",
                        borderBottom: "1px solid rgba(255,255,255,0.05)",
                    }}>
                        <div style={{ display: "flex", gap: "6px" }}>
                            <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#ef4444" }} />
                            <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#f59e0b" }} />
                            <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#10b981" }} />
                        </div>
                        <span style={{ ...MONO, fontSize: "9px", color: "#444", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                            cosq-labs ~ terminal
                        </span>
                    </div>

                    {/* Log lines */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "4px", minHeight: "180px" }}>
                        {logs.map((log, i) => {
                            let color = "#555";
                            if (log.startsWith("[WARNING]")) color = "#f59e0b";
                            else if (log.startsWith("[SUCCESS]")) color = "#10b981";
                            else if (log.startsWith(">")) color = "#e5e5e5";
                            else if (log.startsWith("@")) color = "#818cf8";
                            else if (log.startsWith("[SYSTEM]")) color = "#666";
                            return (
                                <p key={i} style={{ ...MONO, fontSize: "11px", color, lineHeight: "1.6", margin: 0 }}>
                                    {log}
                                </p>
                            );
                        })}
                        <p style={{ ...MONO, fontSize: "11px", color: "#fff", margin: 0, animation: "pulse 1s step-end infinite" }}>▋</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ServiceCard({
    Icon, iconColor, iconBg, iconBorder, borderColor, hoverBorder, title, body
}: {
    Icon: React.ElementType;
    iconColor: string;
    iconBg: string;
    iconBorder: string;
    borderColor: string;
    hoverBorder: string;
    title: string;
    body: string;
}) {
    const [hovered, setHovered] = React.useState(false);

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                flex: 1,
                background: "#0a0a0b",
                border: `1px solid ${hovered ? hoverBorder : borderColor}`,
                padding: "28px 32px",
                transition: "border-color 0.25s",
            }}
        >
            <div style={{ display: "flex", alignItems: "flex-start", gap: "18px" }}>
                <div style={{
                    width: "40px",
                    height: "40px",
                    minWidth: "40px",
                    background: iconBg,
                    border: `1px solid ${iconBorder}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "2px",
                }}>
                    <Icon size={18} style={{ color: iconColor }} />
                </div>
                <div>
                    <h4 style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: "15px",
                        fontWeight: 700,
                        color: "#fff",
                        textTransform: "uppercase",
                        letterSpacing: "0.04em",
                        margin: "0 0 8px 0",
                    }}>
                        {title}
                    </h4>
                    <p style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "13px",
                        color: "#666",
                        lineHeight: 1.7,
                        margin: 0,
                    }}>
                        {body}
                    </p>
                </div>
            </div>
        </div>
    );
}
