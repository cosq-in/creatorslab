"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
    };

    const navLinks = [
        { label: "Digital Labs", action: () => window.location.reload() },
        { label: "Portfolio",    action: () => scrollTo("games-showcase") },
        { label: "Roster",       action: () => scrollTo("creator-system") },
        { label: "Contact",      action: () => scrollTo("terminal-section") },
    ];

    const btnBase: React.CSSProperties = {
        fontFamily: "'Inter', sans-serif",
        fontSize: "11px",
        letterSpacing: "0.12em",
        border: "none",
        background: "none",
        padding: 0,
        cursor: "pointer",
        outline: "none",
    };

    return (
        <nav
            className="fixed top-0 w-full z-50 backdrop-blur-xl"
            style={{ backgroundColor: "rgba(5,5,5,0.95)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}
        >
            <div className="flex justify-between items-center h-16 lg:h-[72px] px-6 lg:px-12 xl:px-16 max-w-[1440px] mx-auto w-full">

                {/* Logo */}
                <div
                    onClick={() => window.location.reload()}
                    className="cursor-pointer select-none shrink-0"
                    style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: "20px",
                        fontWeight: 700,
                        lineHeight: 1,
                        letterSpacing: "-0.01em",
                        color: "#f0eef0",
                    }}
                >
                    COSQ LABS
                </div>

                {/* Center Links — desktop */}
                <div className="hidden md:flex gap-8 lg:gap-10 items-center">
                    {/* Active pill */}
                    <span
                        className="uppercase font-semibold"
                        style={{ ...btnBase, color: "#c0c1ff", borderBottom: "1px solid rgba(192,193,255,0.5)", paddingBottom: "2px" }}
                    >
                        Creators Lab
                    </span>

                    {navLinks.map(({ label, action }) => (
                        <button
                            key={label}
                            onClick={action}
                            className="uppercase font-semibold hover:text-white transition-colors"
                            style={{ ...btnBase, color: "#666" }}
                        >
                            {label}
                        </button>
                    ))}
                </div>

                {/* Right side */}
                <div className="flex items-center gap-3 shrink-0">
                    {/* Inquire CTA — hidden on small mobile */}
                    <button
                        onClick={() => scrollTo("terminal-section")}
                        className="hidden sm:block uppercase font-semibold hover:bg-white/5 transition-all active:scale-95"
                        style={{
                            ...btnBase,
                            border: "1px solid rgba(255,255,255,0.14)",
                            padding: "7px 18px",
                            color: "#e4e2e4",
                        }}
                    >
                        Inquire
                    </button>

                    {/* Hamburger */}
                    <button
                        onClick={() => setIsOpen(v => !v)}
                        className="hover:text-white transition-colors p-1"
                        style={{ ...btnBase, color: "#666", padding: "4px" }}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </div>

            {/* Mobile dropdown */}
            {isOpen && (
                <div
                    className="md:hidden flex flex-col gap-4 px-6 py-6"
                    style={{
                        backgroundColor: "#050505",
                        borderTop: "1px solid rgba(255,255,255,0.05)",
                        borderBottom: "1px solid rgba(255,255,255,0.05)",
                    }}
                >
                    <span
                        className="uppercase font-semibold text-left"
                        style={{ ...btnBase, color: "#c0c1ff", fontSize: "11px", letterSpacing: "0.12em" }}
                    >
                        Creators Lab
                    </span>
                    {navLinks.map(({ label, action }) => (
                        <button
                            key={label}
                            onClick={action}
                            className="uppercase font-semibold text-left hover:text-white transition-colors"
                            style={{ ...btnBase, color: "#555", fontSize: "11px", letterSpacing: "0.12em" }}
                        >
                            {label}
                        </button>
                    ))}
                    <button
                        onClick={() => { scrollTo("terminal-section"); }}
                        className="sm:hidden uppercase font-semibold text-left"
                        style={{ ...btnBase, color: "#e4e2e4", fontSize: "11px", letterSpacing: "0.12em" }}
                    >
                        Inquire
                    </button>
                </div>
            )}
        </nav>
    );
}
