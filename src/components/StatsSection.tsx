"use client";

import React from "react";
import { TrendingUp } from "lucide-react";

export default function StatsSection() {
    return (
        <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-stack-xl py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
                {/* Active Creators */}
                <div className="glass-panel p-6 flex flex-col gap-4 group hover:border-tertiary/50 transition-colors">
                    <span className="font-code-sm text-caption text-tertiary uppercase font-mono tracking-wider">
                        Active Creators
                    </span>
                    <div className="flex items-baseline gap-2">
                        <span className="font-display-xl text-4xl lg:text-5xl font-bold text-white">1,248</span>
                        <span className="font-caption text-xs text-on-secondary-container font-mono">+12%</span>
                    </div>
                    <div className="h-1.5 w-full bg-surface-container-highest overflow-hidden">
                        <div className="h-full bg-tertiary w-[75%] shadow-[0_0_10px_#c0c1ff]"></div>
                    </div>
                </div>

                {/* Reach (Monthly) */}
                <div className="glass-panel p-6 flex flex-col gap-4 group hover:border-secondary-fixed-dim/50 transition-colors">
                    <span className="font-code-sm text-caption text-secondary-fixed-dim uppercase font-mono tracking-wider">
                        Reach (Monthly)
                    </span>
                    <div className="flex items-baseline gap-2">
                        <span className="font-display-xl text-4xl lg:text-5xl font-bold text-white">45.2M</span>
                        <span className="font-caption text-xs text-on-secondary-container font-mono">+8.4%</span>
                    </div>
                    <div className="h-1.5 w-full bg-surface-container-highest overflow-hidden">
                        <div className="h-full bg-secondary-fixed-dim w-[48%] shadow-[0_0_10px_#51ffad]"></div>
                    </div>
                </div>

                {/* Campaign ROI */}
                <div className="glass-panel p-6 flex flex-col gap-4 group hover:border-on-tertiary-container/50 transition-colors">
                    <span className="font-code-sm text-caption text-on-tertiary-container uppercase font-mono tracking-wider">
                        Campaign ROI
                    </span>
                    <div className="flex items-baseline gap-2">
                        <span className="font-display-xl text-4xl lg:text-5xl font-bold text-white">4.2x</span>
                        <TrendingUp className="text-on-tertiary-container w-[18px] h-[18px]" />
                    </div>
                    <div className="h-1.5 w-full bg-surface-container-highest overflow-hidden">
                        <div className="h-full bg-on-tertiary-container w-[62%] shadow-[0_0_10px_#6669f4]"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
