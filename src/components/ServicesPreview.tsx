"use client";

import React, { useState, useEffect } from "react";
import { FlaskConical, Terminal } from "lucide-react";

const SIMULATED_LINES = [
    "Syncing telemetry data from global nodes...",
    "Decrypting competitor strategies...",
    "Calibrating neon luminescence levels...",
    "Establishing connection to Discord Matrix...",
    "Injecting performance enhancers to UI layer...",
    "Status: ELITE OPERATIONAL READY."
];

export default function ServicesPreview() {
    const [logs, setLogs] = useState<string[]>([
        "Initializing Creators Lab Interface...",
        "[SUCCESS] Neural link established.",
        "[LOADING] Valorant Protocol V3.2...",
        "> Fetching roster status...",
        "@TENZ_PROTO: ONLINE",
        "@SHROUD_PROTO: STANDBY",
        "[WARNING] System temperature rising. Fans at 100%."
    ]);

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setLogs(prev => {
                const nextLogs = [...prev, `[SYSTEM] ${SIMULATED_LINES[index % SIMULATED_LINES.length]}`];
                if (nextLogs.length > 11) {
                    nextLogs.splice(4, 1); // remove older log lines to prevent infinite height
                }
                return nextLogs;
            });
            index++;
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="creator-system" className="py-24 bg-[#050505] px-6 lg:px-margin-desktop max-w-container-max mx-auto space-y-16 border-t border-outline-variant/10">
            {/* The Creator Core System Row */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                {/* Left Side Info */}
                <div className="lg:col-span-7 bg-[#0b0b0c] border border-outline-variant/10 p-8 flex flex-col justify-between text-left relative overflow-hidden group">
                    <div className="space-y-6">
                        <h3 className="font-display-xl text-3xl md:text-5xl font-extrabold leading-tight text-white uppercase">
                            THE CREATOR
                            <br />
                            <span className="bg-gradient-to-r from-[#9D4EDD] to-[#6366f1] bg-clip-text text-transparent">
                                CORE SYSTEM
                            </span>
                        </h3>
                        <p className="font-sans text-sm text-gray-300 leading-relaxed max-w-xl">
                            Our proprietary analytics engine tracks performance across every frame, every click, and every interaction. We provide the hardware and the data to turn potential into dominance.
                        </p>
                    </div>

                    {/* Stats Row */}
                    <div className="grid grid-cols-3 gap-4 border-t border-outline-variant/10 pt-8 mt-12">
                        <div>
                            <span className="font-mono text-white text-2xl md:text-3xl font-extrabold block">99.9%</span>
                            <span className="font-mono text-[10px] uppercase tracking-wider text-gray-400 font-medium block mt-2">
                                UPTIME RELIABILITY
                            </span>
                        </div>
                        <div>
                            <span className="font-mono text-white text-2xl md:text-3xl font-extrabold block">2ms</span>
                            <span className="font-mono text-[10px] uppercase tracking-wider text-gray-400 font-medium block mt-2">
                                AVG LATENCY
                            </span>
                        </div>
                        <div>
                            <span className="font-mono text-white text-2xl md:text-3xl font-extrabold block">24/7</span>
                            <span className="font-mono text-[10px] uppercase tracking-wider text-gray-400 font-medium block mt-2">
                                ADMIN SUPPORT
                            </span>
                        </div>
                    </div>
                </div>

                {/* Right Side Stacked Cards */}
                <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
                    {/* Talent Incubation Card */}
                    <div className="bg-[#0b0b0c] border border-[#9D4EDD]/35 p-6 flex flex-col justify-center text-left flex-1 relative overflow-hidden group">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-2 bg-[#9D4EDD]/10 border border-[#9D4EDD]/20 text-[#9D4EDD]">
                                <FlaskConical className="w-6 h-6" />
                            </div>
                            <h4 className="font-display-lg text-lg font-bold text-white uppercase">Talent Incubation</h4>
                        </div>
                        <p className="font-sans text-xs text-gray-300 leading-relaxed">
                            Customized growth paths for rising stars in the competitive gaming scene.
                        </p>
                    </div>

                    {/* Studio Protocol Card */}
                    <div className="bg-[#0b0b0c] border border-outline-variant/10 p-6 flex flex-col justify-center text-left flex-1 relative overflow-hidden group">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-2 bg-white/5 border border-white/10 text-white">
                                <Terminal className="w-6 h-6" />
                            </div>
                            <h4 className="font-display-lg text-lg font-bold text-white uppercase">Studio Protocol</h4>
                        </div>
                        <p className="font-sans text-xs text-gray-300 leading-relaxed">
                            Access to ultra-high-end production, broadcast, and streaming facilities.
                        </p>
                    </div>
                </div>
            </div>

            {/* Terminal Section (Full-width below the core system) */}
            <div id="terminal-section" className="bg-[#050505] border border-outline-variant/15 p-6 md:p-8 font-mono text-xs leading-relaxed relative text-left">
                {/* Traffic Lights */}
                <div className="flex gap-2 mb-6 border-b border-outline-variant/10 pb-4">
                    <div className="w-3 h-3 rounded-full bg-[#ef4444]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#f59e0b]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#10b981]"></div>
                </div>
                {/* Terminal Outputs */}
                <div className="text-zinc-400 space-y-1 font-mono">
                    {logs.map((log, index) => {
                        let colorClass = "text-zinc-400";
                        if (log.startsWith("[WARNING]")) {
                            colorClass = "text-[#f59e0b]";
                        } else if (log.startsWith("[SUCCESS]")) {
                            colorClass = "text-[#10b981]";
                        } else if (log.startsWith(">")) {
                            colorClass = "text-white";
                        } else if (log.startsWith("@")) {
                            colorClass = "text-[#6366f1]";
                        }
                        return (
                            <p key={index} className={`${colorClass} font-mono`}>
                                {log}
                            </p>
                        );
                    })}
                    <p className="animate-pulse text-white font-mono">_</p>
                </div>
            </div>
        </section>
    );
}
