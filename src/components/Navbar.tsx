"use client";

import React, { useState } from "react";
import { Menu } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
    };

    return (
        <nav className="fixed top-0 w-full z-50 backdrop-blur-xl border-b border-[#46464a]/10"
            style={{ backgroundColor: "rgba(11,11,12,0.85)" }}>
            <div className="flex justify-between items-center h-20 px-16 max-w-[1440px] mx-auto">

                {/* Logo */}
                <div
                    onClick={() => window.location.reload()}
                    className="cursor-pointer font-bold tracking-tight uppercase"
                    style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: "32px",
                        lineHeight: "40px",
                        letterSpacing: "-0.01em",
                        color: "#e4e2e4",
                    }}
                >
                    COSQ LABS
                </div>

                {/* Center Links */}
                <div className="hidden md:flex gap-12 items-center">
                    {/* Active — Creators Lab */}
                    <button
                        className="font-semibold tracking-wider uppercase pb-1"
                        style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "14px",
                            letterSpacing: "0.05em",
                            color: "#c0c1ff",
                            borderBottom: "2px solid #c0c1ff",
                        }}
                    >
                        Creators Lab
                    </button>

                    {[
                        { label: "Digital Labs", action: () => window.location.reload() },
                        { label: "Portfolio",    action: () => scrollTo("games-showcase") },
                        { label: "Roster",       action: () => scrollTo("creator-system") },
                        { label: "Contact",      action: () => scrollTo("terminal-section") },
                    ].map(({ label, action }) => (
                        <button
                            key={label}
                            onClick={action}
                            className="font-semibold tracking-wider uppercase transition-colors cursor-pointer hover:text-white"
                            style={{
                                fontFamily: "'Inter', sans-serif",
                                fontSize: "14px",
                                letterSpacing: "0.05em",
                                color: "#c7c6ca",
                            }}
                        >
                            {label}
                        </button>
                    ))}
                </div>

                {/* Right */}
                <div className="flex items-center gap-6">
                    <button
                        onClick={() => scrollTo("terminal-section")}
                        className="font-semibold tracking-wider uppercase transition-all hover:bg-[#1f1f21] active:scale-95 cursor-pointer"
                        style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "14px",
                            letterSpacing: "0.05em",
                            border: "1px solid rgba(70,70,74,0.35)",
                            padding: "8px 24px",
                            color: "#e4e2e4",
                            backgroundColor: "transparent",
                        }}
                    >
                        Inquire
                    </button>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="cursor-pointer text-[#e4e2e4] hover:text-white transition-colors"
                    >
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
            </div>

            {/* Mobile dropdown */}
            {isOpen && (
                <div
                    className="md:hidden border-b border-[#46464a]/10 px-6 py-4 flex flex-col gap-4"
                    style={{ backgroundColor: "#0b0b0c", fontFamily: "'Inter', sans-serif", fontSize: "12px" }}
                >
                    {[
                        { label: "Digital Labs", action: () => { window.location.reload(); } },
                        { label: "Portfolio",    action: () => scrollTo("games-showcase") },
                        { label: "Roster",       action: () => scrollTo("creator-system") },
                        { label: "Contact",      action: () => scrollTo("terminal-section") },
                    ].map(({ label, action }) => (
                        <button
                            key={label}
                            onClick={action}
                            className="text-left py-2 uppercase tracking-widest text-[#c7c6ca] hover:text-white cursor-pointer transition-colors"
                        >
                            {label}
                        </button>
                    ))}
                </div>
            )}
        </nav>
    );
}
