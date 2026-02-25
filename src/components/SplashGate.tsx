"use client";

import React from "react";

interface SplashGateProps {
    onSelect: (choice: "design" | "creators") => void;
}

const SplashGate: React.FC<SplashGateProps> = ({ onSelect }) => {
    return (
        <div className="splash-gate">
            <div className="splash-side side-design" onClick={() => onSelect("design")}>
                <h1 className="splash-title">Design Labs</h1>
            </div>

            <div className="liquid-container">
                <svg
                    className="liquid-svg"
                    viewBox="0 0 100 1000"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        className="liquid-path"
                        d="M50,0 Q70,250 50,500 T50,1000"
                        fill="none"
                        stroke="white"
                        strokeWidth="0.5"
                        opacity="0.3"
                    />
                    <path
                        className="liquid-path"
                        d="M0,0 L50,0 Q70,250 50,500 T50,1000 L0,1000 Z"
                        fill="#1a0933"
                    />
                    <path
                        className="liquid-path"
                        style={{ animationDelay: "-2s" }}
                        d="M100,0 L50,0 Q30,250 50,500 T50,1000 L100,1000 Z"
                        fill="#2d1654"
                    />
                </svg>
            </div>

            <div
                className="splash-side side-creators"
                onClick={() => onSelect("creators")}
            >
                <h1 className="splash-title">Creators Lab</h1>
            </div>
        </div>
    );
};

export default SplashGate;
