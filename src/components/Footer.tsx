"use client";

import React from "react";

export default function Footer() {
    return (
        <footer className="w-full py-12 bg-[#050505] border-t border-outline-variant/10 text-left">
            <div className="flex flex-col md:flex-row justify-between items-center px-6 lg:px-margin-desktop max-w-container-max mx-auto gap-8 w-full">
                {/* Left Side */}
                <div className="flex flex-col gap-2">
                    <div className="font-headline-md text-2xl font-bold text-white tracking-tighter uppercase">
                        COSQ LABS
                    </div>
                </div>

                {/* Center Links */}
                <div className="flex flex-wrap justify-center gap-6 md:gap-10 font-mono text-[10px] uppercase tracking-wider">
                    <a
                        className="text-gray-400 hover:text-white transition-colors"
                        href="#"
                    >
                        Privacy Policy
                    </a>
                    <a
                        className="text-gray-400 hover:text-white transition-colors"
                        href="#"
                    >
                        Terms of Service
                    </a>
                    <a
                        className="text-gray-400 hover:text-white transition-colors"
                        href="#"
                    >
                        Brand Guidelines
                    </a>
                    <a
                        className="text-gray-400 hover:text-white transition-colors"
                        href="#"
                    >
                        Investor Relations
                    </a>
                </div>

                {/* Right Side */}
                <div className="font-mono text-[9px] uppercase tracking-widest text-gray-500 text-center md:text-right max-w-xs">
                    © 2026 COSQ LABS. ALL RIGHTS RESERVED. OPERATING UNDER DIGITAL CRAFTSMANSHIP PROTOCOLS.
                </div>
            </div>
        </footer>
    );
}
