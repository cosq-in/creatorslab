"use client";

import { useEffect, useState, type MouseEvent } from "react";
import { useRouter } from "next/navigation";
import Burst, { BURST_MS, originFrom, type BurstOrigin } from "./Burst";
import { GATE_BEATS, WINGS, type Wing } from "@/data/labs";

const THREAD = "M -20 430 C 150 430 180 200 380 220 C 560 240 520 440 700 420 C 880 400 780 180 900 200 C 960 206 1000 230 1040 260";
const NODES = [[110, 430], [380, 220], [700, 420], [900, 200]];
const BEAT_MS = 2600;

// Splash at "/": four beats draw a thread across the comic background, then
// the visitor picks a wing.
export default function Gate() {
    const router = useRouter();
    const [beat, setBeat] = useState(0);
    const [burst, setBurst] = useState<BurstOrigin | null>(null);
    const choosing = beat === GATE_BEATS.length;

    useEffect(() => {
        router.prefetch(WINGS.design.home);
        router.prefetch(WINGS.creators.home);
    }, [router]);

    useEffect(() => {
        if (choosing || burst) return;
        const t = setInterval(() => setBeat(b => Math.min(b + 1, GATE_BEATS.length)), BEAT_MS);
        return () => clearInterval(t);
    }, [choosing, burst]);

    const advance = () => {
        if (!choosing && !burst) setBeat(b => b + 1);
    };

    const pick = (wing: Wing) => (e: MouseEvent) => {
        e.stopPropagation();
        if (burst) return;
        setBurst(originFrom(e, WINGS[wing].color));
        setTimeout(() => router.push(WINGS[wing].home), BURST_MS);
    };

    const dashOff = 1 - Math.min(1, (beat + 0.4) / 4.4);

    return (
        <div className="gate" onClick={advance}>
            <svg viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice" className="gate-svg" aria-hidden>
                <path d={THREAD} pathLength={1} fill="none" stroke="var(--cosq-pink-light)" strokeWidth={5} strokeDasharray="0.004 0.012" strokeLinecap="round" />
                <path d={THREAD} pathLength={1} fill="none" stroke="var(--cosq-purple)" strokeWidth={14} strokeLinecap="round" style={{ strokeDasharray: 1, strokeDashoffset: dashOff, transition: "stroke-dashoffset 1.8s ease-in-out" }} />
                <path d={THREAD} pathLength={1} fill="none" stroke="var(--cosq-pink)" strokeWidth={7} strokeLinecap="round" style={{ strokeDasharray: 1, strokeDashoffset: dashOff, transition: "stroke-dashoffset 1.8s ease-in-out" }} />
                {NODES.map(([x, y], i) => (
                    <circle key={i} cx={x} cy={y} r={beat >= i ? 16 : 0} fill="#fff" stroke="var(--cosq-purple)" strokeWidth={5} style={{ transition: "r .5s .9s" }} />
                ))}
            </svg>

            <div className="gate-brand">
                <img src="/icon.png" alt="CosQ" />
                <span>COSQ LABS</span>
            </div>
            <a className="gate-home" href="https://cosq.in" onClick={e => e.stopPropagation()}>cosq.in ↗</a>

            {GATE_BEATS.map((text, i) => (
                <div
                    key={text}
                    className="gate-beat"
                    aria-hidden={beat !== i}
                    style={{ opacity: beat === i ? 1 : 0, transform: `translateY(${beat === i ? 0 : beat > i ? -30 : 30}px)` }}
                >
                    <h1>{text}</h1>
                </div>
            ))}

            <div className="gate-choose" style={{ opacity: choosing ? 1 : 0, pointerEvents: choosing ? "auto" : "none" }}>
                <div className="gate-choose-title">
                    <h2>Two wings. Pick yours.</h2>
                </div>
                <div className="gate-wings">
                    <button type="button" className="gate-wing design" onClick={pick("design")}>
                        <span>WING 01</span>
                        <h3>Design Lab</h3>
                        <p>Premier design and marketing for everything. End to end.</p>
                    </button>
                    <button type="button" className="gate-wing creators" onClick={pick("creators")}>
                        <span>WING 02</span>
                        <h3>Creators Lab</h3>
                        <p>The best creators for brands. The best brands for creators.</p>
                    </button>
                </div>
            </div>

            {!choosing && !burst && (
                <button type="button" className="gate-skip" onClick={e => { e.stopPropagation(); setBeat(GATE_BEATS.length); }}>
                    Skip →
                </button>
            )}

            {burst && <Burst origin={burst} />}
        </div>
    );
}
