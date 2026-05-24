"use client";

import React from "react";
import { ChevronLeft, ChevronRight, Grid, Share2, Zap, Sliders } from "lucide-react";

export default function GamesSection() {
    const cartridges = [
        {
            id: "001_PROTO",
            title: "VALORANT",
            tag: "TACTICAL PROTOCOL",
            themeColor: "border-[#9D4EDD]",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDVLRY6XtUsRwrSrgNENmgPerfbOvQGlMFJuPj0uNopIvFJBDH_eoKRG9-FTFjtXhEzFEr1HaNWBuNVpPnkgb8Mce27edoxyEbfZ0WqQ4XYUUdFwNTyTdAAuhJDkA1yqeOzrL2psHGmgCB2_TzSrzLSc7ZZ9bV8RInK2Ic8qtsvsta8tbCCdW_6aKt50UtvECa-IGPvqy8KB0-KxNTo3-XLbGRfQxTBxQAvsPCc_bJ7cA_CGgQCKJ55PD5A0Q_UPHPcRAui9mAGM5c",
            icon: Grid,
        },
        {
            id: "002_PROTO",
            title: "MARVEL RIVALS",
            tag: "HERO PROTOCOL",
            themeColor: "border-[#9D4EDD]",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBb2ArEE38oLHump2oM_S1nR22geu36quG-rcJ3aH-VHBoitSXunTJRht6gf7fCBFZfaykc6yCQWjN3qtEHm4Ihw-h4jYwOylLvBTozunGHrxgPycjY8NcO05F-CJiR9F_x29LadhAvOQbAERhZgEOTOVTcgNgJbv2Nb9HVB9_dK3MwIoiW0C7CNRdJH4a-o0MgllySNCtOe6EHewye7Qzvj4AwjXPWut6xR4OAFQMdTSY-0acVtXfF-_FZ3SrF5Zn4Bu8bo1Jsnag",
            icon: Share2,
        },
        {
            id: "003_PROTO",
            title: "APEX LEGENDS",
            tag: "MOVEMENT PROTOCOL",
            themeColor: "border-[#9D4EDD]",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD6u7LAT25_-1b-lWtOCKPbMnZs8PC4VyrfnqnVxCr2kcsCJ6EA_6nIYde_sToyVF03uIgI7-hJ4HTuV7_0yedIRrDaNtWHwXl9l__CBMR9k2IuNdczJaxeYuiCGkRL4R2hn41F4r9rov_QZGvxbGuNy9r1dDFsNnyzRd86h3qbxXH7IozJr-QrfrNsGYyCc-64N5GIEjLH38w1orX3RYRG0sgW-uwhKjeETcuVVYx77kFr-JZmI5sxU_rZ1Hb6Xt3QIE26dD3exDg",
            icon: Zap,
        },
        {
            id: "004_PROTO",
            title: "THE FINALS",
            tag: "DESTRUCTION PROTOCOL",
            themeColor: "border-[#9D4EDD]",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBg8WEYdcKN8zVWcTkdNBlnd7yt5Z2PeyeSq2Z7Yc6koJPbSxBAX5ArAvSqOZSuT4ymi9YLh0qKCBxkVeAmg_uTy6qBg68anTNX5DoEszDCL5g1cNwJYQqd-v6ovSQyQYY1WQ3TiHDhXMo8A-BXrw5zg2ZiNsyQZH8Z5NsW5fBEPtzAJf14UV92aKmpzPwkiacG3fzy2d3fiGY-BepmtQmJjcHB7b2NTKHmLn2f_PHmqH4ausq3wLTl6NBIqgptWFKV7vtiFIhQUX4",
            icon: Sliders,
        }
    ];

    return (
        <section id="games-showcase" className="py-24 bg-[#050505] px-6 lg:px-margin-desktop max-w-container-max mx-auto border-t border-outline-variant/10">
            {/* Header Section */}
            <div className="flex justify-between items-end mb-12">
                <div className="text-left">
                    <h2 className="font-display-lg text-lg font-bold text-white uppercase tracking-[0.2em]">
                        GAMES SHOWCASE
                    </h2>
                    <p className="font-mono text-[10px] text-gray-400 uppercase tracking-widest mt-1">
                        ACTIVE PROTOCOLS FOR MAJOR COMPETITIVE TITLES
                    </p>
                </div>
                {/* Carousel Navigation Buttons */}
                <div className="flex gap-2 text-white">
                    <button className="w-8 h-8 rounded-none border border-outline-variant/20 hover:border-white hover:bg-white/5 transition-all flex items-center justify-center cursor-pointer">
                        <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button className="w-8 h-8 rounded-none border border-outline-variant/20 hover:border-white hover:bg-white/5 transition-all flex items-center justify-center cursor-pointer">
                        <ChevronRight className="w-4 h-4" />
                    </button>
                </div>
            </div>

            {/* static Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {cartridges.map((cartridge) => {
                    const IconComponent = cartridge.icon;
                    return (
                        <div 
                            key={cartridge.id} 
                            className="bg-[#0b0b0c] border border-outline-variant/15 p-4 flex flex-col group hover:border-[#9D4EDD]/45 transition-all duration-300 relative select-none rounded-none"
                        >
                            {/* Top Left Label */}
                            <div className="absolute top-2 left-2 z-20 px-2 py-0.5 bg-[#050505]/80 border border-outline-variant/20 text-[9px] font-mono text-[#a5b4fc] tracking-wider uppercase">
                                {cartridge.id}
                            </div>
                            
                            {/* Image Container */}
                            <div className="aspect-[4/5] bg-surface-container-highest flex-grow flex items-center justify-center border border-outline-variant/10 overflow-hidden relative mb-4">
                                <img
                                    alt={cartridge.title}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                                    src={cartridge.image}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                            </div>
                            
                            {/* Title & Metadata */}
                            <div className="text-left space-y-1">
                                <h3 className="font-display-lg text-lg font-bold text-white tracking-wider">
                                    {cartridge.title}
                                </h3>
                                <div className="flex justify-between items-center pt-1 border-t border-outline-variant/10">
                                    <span className="font-mono text-[9px] text-[#a5b4fc] tracking-wider">
                                        {cartridge.tag}
                                    </span>
                                    <IconComponent className="w-3.5 h-3.5 text-zinc-500 group-hover:text-[#9D4EDD] transition-colors" />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
