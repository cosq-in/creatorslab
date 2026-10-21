"use client";

import { useEffect, useState } from "react";

export const BURST_MS = 1100;

export interface BurstOrigin {
    x: number;
    y: number;
    color: string;
}

// A circle of wing colour that grows from the click point to cover the
// screen. The caller navigates after BURST_MS; the arriving wing's header is
// the same colour, so the hand-off is seamless.
export default function Burst({ origin }: { origin: BurstOrigin }) {
    const [r, setR] = useState(0);
    useEffect(() => {
        const t = setTimeout(() => setR(160), 30);
        return () => clearTimeout(t);
    }, []);
    return (
        <div
            aria-hidden
            style={{
                position: "fixed",
                inset: 0,
                zIndex: 100,
                pointerEvents: "none",
                background: origin.color,
                clipPath: `circle(${r}vmax at ${origin.x}px ${origin.y}px)`,
                transition: "clip-path 1s cubic-bezier(.7,0,.3,1)",
            }}
        />
    );
}

export function originFrom(e: { clientX?: number; clientY?: number } | undefined, color: string): BurstOrigin {
    const x = e?.clientX ?? window.innerWidth / 2;
    const y = e?.clientY ?? window.innerHeight / 2;
    return { x, y, color };
}
