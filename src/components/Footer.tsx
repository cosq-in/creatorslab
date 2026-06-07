"use client";

import React from "react";

export default function Footer() {
    const links = ["Privacy Policy", "Terms of Service", "Brand Guidelines", "Investor Relations"];

    return (
        <footer
            style={{
                background: "#050505",
                borderTop: "1px solid rgba(255,255,255,0.05)",
                padding: "36px 24px",
            }}
        >
            <div
                style={{
                    maxWidth: "1440px",
                    margin: "0 auto",
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "20px",
                }}
            >
                {/* Logo */}
                <div style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "18px",
                    fontWeight: 700,
                    color: "#f0eef0",
                    letterSpacing: "-0.01em",
                    textTransform: "uppercase",
                    userSelect: "none",
                }}>
                    COSQ LABS
                </div>

                {/* Links */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "24px 32px", justifyContent: "center" }}>
                    {links.map(link => (
                        <a
                            key={link}
                            href="#"
                            style={{
                                fontFamily: "'JetBrains Mono', monospace",
                                fontSize: "10px",
                                color: "#444",
                                letterSpacing: "0.14em",
                                textTransform: "uppercase",
                                textDecoration: "none",
                                transition: "color 0.2s",
                            }}
                            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "#aaa")}
                            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "#444")}
                        >
                            {link}
                        </a>
                    ))}
                </div>

                {/* Copyright */}
                <div style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "9px",
                    color: "#333",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                }}>
                    © 2026 COSQ LABS
                </div>
            </div>
        </footer>
    );
}
