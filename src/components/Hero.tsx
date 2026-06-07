"use client";

import React from "react";

export default function Hero() {
    const handleScrollToTerminal = () => {
        document.getElementById("terminal-section")?.scrollIntoView({ behavior: "smooth" });
    };
    const handleScrollToGames = () => {
        document.getElementById("games-showcase")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            className="relative flex flex-col items-center justify-center text-center overflow-hidden bg-[#050505]"
            style={{ minHeight: "100svh", paddingTop: "96px", paddingBottom: "80px" }}
        >
            {/* Grid background */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(99,102,241,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.07) 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                }}
            />
            {/* Center glow */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: "radial-gradient(ellipse 55% 45% at 50% 55%, rgba(99,102,241,0.1) 0%, transparent 70%)",
                }}
            />

            <div className="relative z-10 flex flex-col items-center" style={{ gap: "28px", maxWidth: "900px", width: "100%", margin: "0 auto", padding: "0 24px" }}>

                {/* Status badge */}
                <div
                    style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        padding: "6px 14px",
                        border: "1px solid rgba(255,255,255,0.1)",
                        background: "rgba(255,255,255,0.03)",
                    }}
                >
                    <div
                        style={{
                            width: "6px",
                            height: "6px",
                            borderRadius: "50%",
                            background: "#10b981",
                            animation: "pulse 2s infinite",
                        }}
                    />
                    <span
                        style={{
                            fontFamily: "'JetBrains Mono', monospace",
                            fontSize: "10px",
                            color: "#a5b4fc",
                            letterSpacing: "0.22em",
                            textTransform: "uppercase",
                        }}
                    >
                        V1.0.4-ALPHA · System Loaded
                    </span>
                </div>

                {/* Headline */}
                <h1
                    style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: "clamp(44px, 8vw, 88px)",
                        fontWeight: 800,
                        color: "#ffffff",
                        letterSpacing: "-0.03em",
                        lineHeight: 0.95,
                        textTransform: "uppercase",
                        margin: 0,
                    }}
                >
                    Creators Lab{" "}
                    <span
                        style={{
                            background: "linear-gradient(135deg, #9D4EDD 0%, #6366f1 55%, #818cf8 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                        }}
                    >
                        by COSQ
                    </span>
                </h1>

                {/* Rule */}
                <div style={{ width: "64px", height: "1px", background: "rgba(255,255,255,0.12)" }} />

                {/* Subtitle */}
                <p
                    style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "11px",
                        color: "#666",
                        letterSpacing: "0.1em",
                        lineHeight: 1.9,
                        textTransform: "uppercase",
                        maxWidth: "560px",
                        margin: 0,
                    }}
                >
                    Your partner in gaming excellence — building the infrastructure for the next generation of competitive icons.
                </p>

                {/* Buttons */}
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center", paddingTop: "8px" }}>
                    <button
                        onClick={handleScrollToTerminal}
                        style={{
                            padding: "12px 32px",
                            background: "#6366f1",
                            color: "#fff",
                            fontFamily: "'JetBrains Mono', monospace",
                            fontSize: "11px",
                            fontWeight: 700,
                            letterSpacing: "0.14em",
                            textTransform: "uppercase",
                            border: "none",
                            cursor: "pointer",
                            outline: "none",
                            transition: "background 0.2s, box-shadow 0.2s",
                        }}
                        onMouseEnter={e => {
                            (e.currentTarget as HTMLElement).style.background = "#4f46e5";
                            (e.currentTarget as HTMLElement).style.boxShadow = "0 0 24px rgba(99,102,241,0.4)";
                        }}
                        onMouseLeave={e => {
                            (e.currentTarget as HTMLElement).style.background = "#6366f1";
                            (e.currentTarget as HTMLElement).style.boxShadow = "none";
                        }}
                    >
                        Launch Terminal
                    </button>
                    <button
                        onClick={handleScrollToGames}
                        style={{
                            padding: "12px 32px",
                            background: "transparent",
                            color: "#ccc",
                            fontFamily: "'JetBrains Mono', monospace",
                            fontSize: "11px",
                            fontWeight: 700,
                            letterSpacing: "0.14em",
                            textTransform: "uppercase",
                            border: "1px solid rgba(255,255,255,0.14)",
                            cursor: "pointer",
                            outline: "none",
                            transition: "border-color 0.2s, color 0.2s",
                        }}
                        onMouseEnter={e => {
                            (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.35)";
                            (e.currentTarget as HTMLElement).style.color = "#fff";
                        }}
                        onMouseLeave={e => {
                            (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.14)";
                            (e.currentTarget as HTMLElement).style.color = "#ccc";
                        }}
                    >
                        View Games
                    </button>
                </div>
            </div>

            {/* Scroll cue */}
            <div
                style={{
                    position: "absolute",
                    bottom: "28px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "10px",
                    opacity: 0.3,
                }}
            >
                <span
                    style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "9px",
                        letterSpacing: "0.3em",
                        color: "#999",
                        textTransform: "uppercase",
                    }}
                >
                    Scroll
                </span>
                <div
                    style={{
                        width: "1px",
                        height: "36px",
                        background: "linear-gradient(to bottom, #6366f1, transparent)",
                    }}
                />
            </div>
        </section>
    );
}
