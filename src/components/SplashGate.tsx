"use client";

import React, { useState, useEffect, useRef } from "react";
import { Radio, Cpu, Menu, ArrowRight, Zap } from "lucide-react";

interface SplashGateProps {
    onSelect: (choice: "design" | "creators") => void;
}

const SplashGate: React.FC<SplashGateProps> = ({ onSelect }) => {
    const [currentTime, setCurrentTime] = useState("");
    const [hoveredSide, setHoveredSide] = useState<"digital" | "creators" | null>(null);
    const [transitioningTo, setTransitioningTo] = useState<"design" | "creators" | null>(null);

    const labsContentRef = useRef<HTMLDivElement>(null);
    const creatorsContentRef = useRef<HTMLDivElement>(null);

    // Dynamic clock updating in UTC
    useEffect(() => {
        const updateClock = () => {
            const now = new Date();
            const timeStr = now.toLocaleTimeString("en-US", {
                hour12: false,
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                timeZone: "UTC",
            }) + " UTC";
            setCurrentTime(timeStr);
        };
        updateClock();
        const timer = setInterval(updateClock, 1000);
        return () => clearInterval(timer);
    }, []);

    // 3D Parallax effect on mouse move
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (transitioningTo) return;

            const x = (e.clientX / window.innerWidth - 0.5) * 10;
            const y = (e.clientY / window.innerHeight - 0.5) * 10;

            if (labsContentRef.current && creatorsContentRef.current) {
                labsContentRef.current.style.transform = `translate3d(${x * -0.3}px, ${y * -0.3}px, 20px)`;
                creatorsContentRef.current.style.transform = `translate3d(${x * 0.3}px, ${y * 0.3}px, 20px)`;
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [transitioningTo]);

    // Handle portal entrance selection with liquid animation delay
    const handleChoice = (choice: "design" | "creators") => {
        if (transitioningTo) return;
        setTransitioningTo(choice);
        setTimeout(() => {
            onSelect(choice);
        }, 1200); // Matches the animation duration in CSS
    };

    return (
        <div className="bg-background-portal text-on-surface font-body-md overflow-hidden selection:bg-primary-container selection:text-on-primary-container h-[100dvh] w-screen relative select-none">
            {/* System Header */}
            <header className="fixed top-0 left-0 w-full z-[100] flex justify-between items-center px-margin-mobile lg:px-margin-desktop h-16 bg-background-portal/40 backdrop-blur-lg border-b border-outline-variant/10">
                <div className="flex items-center gap-3">
                    <span className="font-headline-md text-[18px] lg:text-[20px] font-bold tracking-tighter text-on-surface uppercase">
                        COSQ LABS
                    </span>
                    <div className="hidden sm:flex items-center gap-2 text-secondary-fixed-dim font-label-caps text-[10px] opacity-80">
                        <span className="flex items-center gap-1">
                            <Radio className="w-3 h-3 text-secondary-fixed-dim" />
                            LINK
                        </span>
                        <span className="flex items-center gap-1">
                            <Cpu className="w-3 h-3 text-secondary-fixed-dim" />
                            24%
                        </span>
                    </div>
                </div>
                <div className="flex items-center gap-4 font-label-caps text-[10px] text-secondary-fixed-dim">
                    <span className="hidden sm:block" id="current-time">
                        {currentTime || "00:00:00 UTC"}
                    </span>
                    <button className="hover:text-primary transition-colors cursor-pointer flex items-center justify-center">
                        <Menu className="w-6 h-6 text-secondary-fixed-dim" />
                    </button>
                </div>
            </header>

            {/* Liquid Boundary (Responsive Divider) */}
            <div
                className={`metaball-boundary ${transitioningTo ? "expanded" : ""}`}
                style={
                    !transitioningTo
                        ? ({
                               "--metaball-left":
                                   hoveredSide === "digital"
                                       ? "58%"
                                       : hoveredSide === "creators"
                                       ? "42%"
                                       : "50%",
                               "--metaball-top":
                                   hoveredSide === "digital"
                                       ? "58%"
                                       : hoveredSide === "creators"
                                       ? "42%"
                                       : "50%",
                           } as React.CSSProperties)
                        : {}
                }
            >
                <div
                    className={`liquid-wave-1 ${
                        transitioningTo === "design" ? "expanding-digital" : ""
                    }`}
                />
                <div
                    className={`liquid-wave-2 ${
                        transitioningTo === "creators" ? "expanding-creators" : ""
                    }`}
                />
            </div>

            {/* Main Split Portal (Responsive Stack/Split) */}
            <main className="relative h-[100dvh] w-screen flex flex-col lg:flex-row overflow-hidden perspective-container bg-transparent z-10">
                {/* Section: Wing 01 - Digital Labs */}
                <section
                    className="relative h-1/2 lg:h-full lg:w-1/2 group cursor-pointer transition-all duration-700 ease-in-out border-b lg:border-b-0 lg:border-r border-outline-variant/10 z-10 overflow-hidden"
                    id="digital-labs"
                    onMouseEnter={() => setHoveredSide("digital")}
                    onMouseLeave={() => setHoveredSide(null)}
                    onClick={() => handleChoice("design")}
                >
                    <div className="absolute inset-0 opacity-20 pointer-events-none transition-transform duration-700 group-hover:scale-105">
                        <img
                            alt="Data architecture background"
                            className="w-full h-full object-cover grayscale brightness-50"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7UlxmaaZetlbNTQqUIhjJNOd82LFabs51C-58j1IcGrp-XGpBVQ3HvIUbb8BkjZqWSjF0jamvBEZFvtHXqn7kNFKUIXF4PMZCQo90T7TVlblFO9yJH6Bp3j-ZoaALJRbXG-rSrmQ4Ngo5vuXYXgsCTdNXis1aH7mSdGhbaR2Bv5OgNY_oUGxC2bBHhn2sPfC65EEi4BQ-e_S_tszA6QLefILZ50XSQsKH5hHig5I12nZmaeoTuyAwtmtKabEAzqLNKhTgxNIU9vQ"
                        />
                    </div>
                    <div className="scanline-overlay absolute inset-0 z-10 opacity-10" />

                    {/* Content */}
                    <div
                        className="relative z-20 h-full flex flex-col justify-end lg:justify-center items-center pb-12 lg:pb-0 px-6 text-center space-y-3 floating-element"
                        id="labs-content"
                        ref={labsContentRef}
                    >
                        <span className="font-label-caps text-[10px] text-tertiary-fixed tracking-[0.4em] uppercase opacity-80">
                            WING // 01
                        </span>
                        <h1 className="font-display-lg text-[32px] lg:text-[48px] text-on-surface leading-tight glitch-hover drop-shadow-2xl uppercase">
                            DIGITAL
                            <br className="lg:hidden" /> LABS
                        </h1>
                        <p className="font-body-md text-[14px] text-gray-300 max-w-xs mx-auto">
                            Architectural digital craftsmanship and high-fidelity rendering.
                        </p>
                        <div className="pt-4 lg:pt-8">
                            <button className="px-6 py-3 bg-transparent border border-secondary-fixed-dim text-secondary-fixed-dim font-label-caps text-[11px] active:bg-secondary-fixed-dim active:text-background hover:bg-secondary-fixed-dim/10 transition-all duration-200 flex items-center gap-2 backdrop-blur-sm cursor-pointer">
                                INITIALIZE CORE{" "}
                                <ArrowRight className="w-[18px] h-[18px] text-secondary-fixed-dim" />
                            </button>
                        </div>
                    </div>

                    {/* Deco */}
                    <div className="absolute left-4 top-20 z-20 flex flex-col gap-1 font-code-sm text-[9px] text-zinc-500">
                        <span>X: 42.091</span>
                        <span>Y: -71.223</span>
                    </div>
                </section>

                {/* Section: Sector 02 - Creators Lab */}
                <section
                    className="relative h-1/2 lg:h-full lg:w-1/2 group cursor-pointer transition-all duration-700 ease-in-out z-10 overflow-hidden"
                    id="creators-lab"
                    onMouseEnter={() => setHoveredSide("creators")}
                    onMouseLeave={() => setHoveredSide(null)}
                    onClick={() => handleChoice("creators")}
                >
                    <div className="absolute inset-0 opacity-20 pointer-events-none transition-transform duration-700 group-hover:scale-105">
                        <img
                            alt="Gaming environment background"
                            className="w-full h-full object-cover grayscale brightness-50"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBT25TBsZR1ZClphu_M1mTuNMAdEU8Zjk7KCi-NuJfXeaOs7qBzaGrwPN5chaHEg23dzANIJBcZKa0qzKbR0yKX2FH6fexF_rOcbv0oSiQqPv6NXx-7Ph7fAvk7T-Oo9D0BbV6CGYN7rs-A9Y_BLQuCwaWMT9esMIVsie6cqbjpZCinq-kHuXgR2ahCY-46hCBi2lhG8u5Km7c-K59zJO1qypXIDMnaRczEJqjed4yHU7NuGFUAMIVblHPgCZXuP_9HqzQTUhBDPJs"
                        />
                    </div>
                    <div className="scanline-overlay absolute inset-0 z-10 opacity-10" />

                    {/* Content */}
                    <div
                        className="relative z-20 h-full flex flex-col justify-start lg:justify-center items-center pt-12 lg:pt-0 px-6 text-center space-y-3 floating-element"
                        id="creators-content"
                        ref={creatorsContentRef}
                    >
                        <span className="font-label-caps text-[10px] text-primary-fixed tracking-[0.4em] uppercase opacity-80">
                            SECTOR // 02
                        </span>
                        <h1 className="font-display-lg text-[32px] lg:text-[48px] text-primary leading-tight glitch-hover drop-shadow-2xl uppercase">
                            CREATORS
                            <br className="lg:hidden" /> LAB
                        </h1>
                        <p className="font-body-md text-[14px] text-gray-300 max-w-xs mx-auto">
                            Immersive play and digital streaming culture.
                        </p>
                        <div className="pt-4 lg:pt-8">
                            <button className="px-6 py-3 bg-[#ff69b4] text-[#131313] font-label-caps text-[11px] font-bold shadow-[0_0_15px_rgba(255,105,180,0.3)] active:scale-95 hover:brightness-110 transition-all duration-200 flex items-center gap-2 cursor-pointer">
                                ENTER STUDIO{" "}
                                <Zap className="w-[18px] h-[18px] text-[#131313]" />
                            </button>
                        </div>
                    </div>

                    {/* Deco */}
                    <div className="absolute right-4 bottom-24 lg:bottom-4 z-20 flex flex-col gap-1 font-code-sm text-[9px] text-zinc-500 text-right">
                        <span>PING: 12ms</span>
                        <span>BUF: OPT</span>
                    </div>
                </section>
            </main>

            {/* Footer Overlay */}
            <footer className="fixed bottom-0 left-0 w-full z-50 p-margin-mobile lg:px-margin-desktop lg:pb-6 pointer-events-none flex flex-col gap-4">
                <div className="flex justify-between items-end">
                    <div className="pointer-events-auto bg-surface-container-lowest/90 backdrop-blur-md p-3 border border-outline-variant/20 max-w-[180px]">
                        <div className="flex items-center gap-2 mb-1">
                            <div className="w-1.5 h-1.5 rounded-full bg-secondary-fixed shadow-[0_0_8px_#51ffad] animate-pulse"></div>
                            <span className="font-label-caps text-[9px] text-secondary-fixed">
                                LIVE_FEED
                            </span>
                        </div>
                        <p className="font-code-sm text-[9px] text-zinc-400 leading-tight font-mono">
                            V1.0.4-ALPHA
                            <br />
                            <span className="text-secondary-fixed">ENCRYPTED_OK</span>
                        </p>
                    </div>
                    <div className="pointer-events-auto flex flex-col items-end gap-3">
                        <div className="flex gap-4 font-label-caps text-[10px] text-zinc-400 bg-background-portal/60 p-2 backdrop-blur-sm font-mono">
                            <a
                                className="hover:text-primary active:text-primary transition-colors"
                                href="#"
                            >
                                X
                            </a>
                            <a
                                className="hover:text-primary active:text-primary transition-colors"
                                href="#"
                            >
                                IG
                            </a>
                            <a
                                className="hover:text-primary active:text-primary transition-colors"
                                href="#"
                            >
                                DC
                            </a>
                        </div>
                        <div className="h-8 w-24 bg-surface-container-low/80 backdrop-blur-sm border border-outline-variant/10 p-1.5 flex items-center justify-between">
                            <span className="font-label-caps text-[9px] text-zinc-400 font-mono">
                                PWR
                            </span>
                            <div className="flex gap-0.5">
                                <div className="w-1 h-3 bg-secondary-fixed"></div>
                                <div className="w-1 h-3 bg-secondary-fixed"></div>
                                <div className="w-1 h-3 bg-secondary-fixed"></div>
                                <div className="w-1 h-3 bg-secondary-fixed/30"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default SplashGate;
