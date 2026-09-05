"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, Gamepad2 } from "lucide-react";

interface SplashGateProps {
    onSelect: (choice: "design" | "creators") => void;
}

const SplashGate: React.FC<SplashGateProps> = ({ onSelect }) => {
    const [currentTime, setCurrentTime] = useState("");
    const [transitioningTo, setTransitioningTo] = useState<"design" | "creators" | null>(null);

    useEffect(() => {
        const updateClock = () => {
            const now = new Date();
            setCurrentTime(
                now.toLocaleTimeString("en-US", {
                    hour12: false,
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                    timeZone: "UTC",
                }) + " UTC"
            );
        };
        updateClock();
        const timer = setInterval(updateClock, 1000);
        return () => clearInterval(timer);
    }, []);

    const handleChoice = (choice: "design" | "creators") => {
        if (transitioningTo) return;
        setTransitioningTo(choice);
        setTimeout(() => onSelect(choice), 400);
    };

    return (
        <div
            style={{
                height: "100dvh",
                width: "100vw",
                position: "relative",
                overflow: "hidden",
                background: "linear-gradient(135deg, var(--bg-dark) 0%, #0f0523 100%)",
                display: "flex",
                flexDirection: "column",
            }}
        >
            {/* Header */}
            <header
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "16px 24px",
                    zIndex: 20,
                }}
            >
                <span className="pixel-text" style={{ fontSize: "0.9rem", color: "var(--text-light)" }}>
                    🧪 COSQ
                </span>
                <span
                    style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "10px",
                        letterSpacing: "0.15em",
                        color: "var(--text-muted)",
                        opacity: 0.7,
                    }}
                >
                    {currentTime || "00:00:00 UTC"}
                </span>
            </header>

            {/* Instruction */}
            <p
                style={{
                    textAlign: "center",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "11px",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "var(--text-muted)",
                    margin: "4px 0 0",
                    opacity: transitioningTo ? 0 : 0.8,
                    transition: "opacity 0.3s",
                }}
            >
                Choose Your Lab
            </p>

            {/* Two-panel chooser */}
            <main
                className="splash-panels"
                style={{
                    flex: 1,
                    display: "flex",
                    minHeight: 0,
                }}
            >
                <SplashPanel
                    icon="🧪"
                    title={<>DIGITAL<br />LABS</>}
                    tagline="Web design, branding & product studio for ambitious brands."
                    buttonLabel="Enter Digital Labs"
                    ButtonIcon={ArrowRight}
                    accent="var(--secondary-color)"
                    glow="rgba(157,78,221,0.35)"
                    fading={transitioningTo === "creators"}
                    shrinking={transitioningTo === "design"}
                    onClick={() => handleChoice("design")}
                />
                <SplashPanel
                    icon="🎮"
                    title={<>CREATORS<br />LAB</>}
                    tagline="Gaming, streaming & short-form content — management for creators of every size."
                    buttonLabel="Enter Creators Lab"
                    ButtonIcon={Gamepad2}
                    accent="var(--primary-color)"
                    glow="rgba(255,105,180,0.35)"
                    fading={transitioningTo === "design"}
                    shrinking={transitioningTo === "creators"}
                    onClick={() => handleChoice("creators")}
                />
            </main>

            <style>{`
                @media (max-width: 900px) {
                    .splash-panels { flex-direction: column; }
                }
            `}</style>
        </div>
    );
};

function SplashPanel({
    icon,
    title,
    tagline,
    buttonLabel,
    ButtonIcon,
    accent,
    glow,
    fading,
    shrinking,
    onClick,
}: {
    icon: string;
    title: React.ReactNode;
    tagline: string;
    buttonLabel: string;
    ButtonIcon: React.ElementType;
    accent: string;
    glow: string;
    fading: boolean;
    shrinking: boolean;
    onClick: () => void;
}) {
    const [hov, setHov] = useState(false);

    return (
        <section
            onMouseEnter={() => setHov(true)}
            onMouseLeave={() => setHov(false)}
            onClick={onClick}
            style={{
                flex: 1,
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "20px",
                padding: "40px 24px",
                cursor: "pointer",
                textAlign: "center",
                borderTop: "1px solid rgba(157,78,221,0.15)",
                background: hov
                    ? `radial-gradient(circle at 50% 50%, ${glow} 0%, transparent 70%)`
                    : "transparent",
                opacity: fading ? 0 : 1,
                transform: shrinking ? "scale(0.92)" : "scale(1)",
                transition: "opacity 0.35s ease, transform 0.35s ease, background 0.4s ease",
            }}
        >
            <div style={{ fontSize: "3.5rem", animation: "float 3s ease-in-out infinite" }}>{icon}</div>

            <h1
                className="pixel-title"
                style={{
                    fontSize: "clamp(1.3rem, 3.5vw, 2.2rem)",
                    color: accent,
                    lineHeight: 1.4,
                    margin: 0,
                    textShadow: `4px 4px 0px ${hov ? "rgba(0,0,0,0.5)" : "rgba(0,0,0,0.3)"}`,
                }}
            >
                {title}
            </h1>

            <p
                style={{
                    maxWidth: "320px",
                    fontSize: "0.95rem",
                    color: "var(--text-muted)",
                    lineHeight: 1.6,
                    margin: 0,
                }}
            >
                {tagline}
            </p>

            <button
                className="pixel-button"
                style={{
                    marginTop: "8px",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    background: accent,
                    borderColor: accent,
                }}
            >
                {buttonLabel} <ButtonIcon size={16} />
            </button>
        </section>
    );
}

export default SplashGate;
