"use client";

import React from "react";

export default function Hero() {
    const handleScrollToTerminal = () => {
        const terminalEl = document.getElementById("terminal-section");
        if (terminalEl) {
            terminalEl.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handleScrollToGames = () => {
        const gamesEl = document.getElementById("games-showcase");
        if (gamesEl) {
            gamesEl.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="relative min-h-[900px] flex flex-col items-center justify-center text-center px-6 lg:px-margin-desktop py-24 bg-[#050505] overflow-hidden">
            {/* Background Grid Overlay */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
                <div 
                    className="w-full h-full"
                    style={{
                        backgroundImage: "linear-gradient(to right, rgba(99, 102, 241, 0.1) 1px, transparent 1px)",
                        backgroundSize: "40px 100%",
                    }}
                ></div>
            </div>
            
            <div className="relative z-10 max-w-4xl flex flex-col items-center space-y-8 mt-12">
                {/* System Loaded Tag */}
                <div className="font-mono text-xs text-[#a5b4fc] tracking-[0.25em] uppercase opacity-80">
                    V1.0.4-ALPHA // SYSTEM LOADED
                </div>
                
                {/* Main Heading */}
                <h1 className="font-display-xl text-5xl md:text-7xl lg:text-[84px] leading-tight font-extrabold text-white tracking-tighter">
                    CREATORS LAB <span className="bg-gradient-to-r from-[#9D4EDD] to-[#6366f1] bg-clip-text text-transparent font-bold">by COSQ</span>
                </h1>
                
                {/* Subtitle */}
                <p className="font-mono text-xs md:text-sm text-gray-300 max-w-3xl leading-relaxed tracking-wider uppercase">
                    YOUR PARTNER IN GAMING EXCELLENCE. WE BUILD THE INFRASTRUCTURE FOR THE NEXT GENERATION OF COMPETITIVE ICONS.
                </p>
                
                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <button 
                        onClick={handleScrollToTerminal}
                        className="px-8 py-3.5 bg-[#6366f1] hover:bg-[#4f46e5] text-white font-mono text-xs font-bold tracking-widest transition-all hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] active:scale-95 cursor-pointer"
                    >
                        LAUNCH TERMINAL
                    </button>
                    <button 
                        onClick={handleScrollToGames}
                        className="px-8 py-3.5 border border-white/20 hover:border-white text-white font-mono text-xs font-bold tracking-widest transition-all bg-transparent active:scale-95 cursor-pointer"
                    >
                        PROTOCOL DOCS
                    </button>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 flex flex-col items-center gap-4 opacity-40 hover:opacity-80 transition-opacity">
                <span className="font-mono text-[9px] tracking-[0.3em] text-on-surface-variant uppercase">
                    SCROLL TO INITIALIZE
                </span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-[#6366f1] to-transparent"></div>
            </div>
        </section>
    );
}
