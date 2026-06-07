"use client";

import React from "react";
import { ChevronLeft, ChevronRight, Grid, Share2, Zap, Sliders } from "lucide-react";

const SECTION_PADDING = { padding: "80px 24px" };
const MAX_W = { maxWidth: "1440px", margin: "0 auto" };

export default function GamesSection() {
    const cartridges = [
        { id: "001", title: "VALORANT",      tag: "TACTICAL PROTOCOL",     image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDVLRY6XtUsRwrSrgNENmgPerfbOvQGlMFJuPj0uNopIvFJBDH_eoKRG9-FTFjtXhEzFEr1HaNWBuNVpPnkgb8Mce27edoxyEbfZ0WqQ4XYUUdFwNTyTdAAuhJDkA1yqeOzrL2psHGmgCB2_TzSrzLSc7ZZ9bV8RInK2Ic8qtsvsta8tbCCdW_6aKt50UtvECa-IGPvqy8KB0-KxNTo3-XLbGRfQxTBxQAvsPCc_bJ7cA_CGgQCKJ55PD5A0Q_UPHPcRAui9mAGM5c", Icon: Grid },
        { id: "002", title: "MARVEL RIVALS", tag: "HERO PROTOCOL",         image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBb2ArEE38oLHump2oM_S1nR22geu36quG-rcJ3aH-VHBoitSXunTJRht6gf7fCBFZfaykc6yCQWjN3qtEHm4Ihw-h4jYwOylLvBTozunGHrxgPycjY8NcO05F-CJiR9F_x29LadhAvOQbAERhZgEOTOVTcgNgJbv2Nb9HVB9_dK3MwIoiW0C7CNRdJH4a-o0MgllySNCtOe6EHewye7Qzvj4AwjXPWut6xR4OAFQMdTSY-0acVtXfF-_FZ3SrF5Zn4Bu8bo1Jsnag", Icon: Share2 },
        { id: "003", title: "APEX LEGENDS",  tag: "MOVEMENT PROTOCOL",     image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD6u7LAT25_-1b-lWtOCKPbMnZs8PC4VyrfnqnVxCr2kcsCJ6EA_6nIYde_sToyVF03uIgI7-hJ4HTuV7_0yedIRrDaNtWHwXl9l__CBMR9k2IuNdczJaxeYuiCGkRL4R2hn41F4r9rov_QZGvxbGuNy9r1dDFsNnyzRd86h3qbxXH7IozJr-QrfrNsGYyCc-64N5GIEjLH38w1orX3RYRG0sgW-uwhKjeETcuVVYx77kFr-JZmI5sxU_rZ1Hb6Xt3QIE26dD3exDg", Icon: Zap },
        { id: "004", title: "THE FINALS",    tag: "DESTRUCTION PROTOCOL",  image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBg8WEYdcKN8zVWcTkdNBlnd7yt5Z2PeyeSq2Z7Yc6koJPbSxBAX5ArAvSqOZSuT4ymi9YLh0qKCBxkVeAmg_uTy6qBg68anTNX5DoEszDCL5g1cNwJYQqd-v6ovSQyQYY1WQ3TiHDhXMo8A-BXrw5zg2ZiNsyQZH8Z5NsW5fBEPtzAJf14UV92aKmpzPwkiacG3fzy2d3fiGY-BepmtQmJjcHB7b2NTKHmLn2f_PHmqH4ausq3wLTl6NBIqgptWFKV7vtiFIhQUX4", Icon: Sliders },
    ];

    return (
        <section
            id="games-showcase"
            style={{
                ...SECTION_PADDING,
                background: "#050505",
                borderTop: "1px solid rgba(255,255,255,0.05)",
            }}
        >
            <div style={{ ...MAX_W, paddingLeft: "24px", paddingRight: "24px" }}>

                {/* Header */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "40px" }}>
                    <div>
                        <p style={{
                            fontFamily: "'JetBrains Mono', monospace",
                            fontSize: "10px",
                            color: "#a5b4fc",
                            letterSpacing: "0.28em",
                            textTransform: "uppercase",
                            marginBottom: "8px",
                            opacity: 0.7,
                        }}>
                            Active Protocols
                        </p>
                        <h2 style={{
                            fontFamily: "'Outfit', sans-serif",
                            fontSize: "clamp(20px, 2.5vw, 28px)",
                            fontWeight: 700,
                            color: "#fff",
                            letterSpacing: "-0.02em",
                            textTransform: "uppercase",
                            margin: 0,
                        }}>
                            Games Showcase
                        </h2>
                    </div>
                    <div style={{ display: "flex", gap: "6px" }}>
                        {[ChevronLeft, ChevronRight].map((Icon, i) => (
                            <button
                                key={i}
                                style={{
                                    width: "36px",
                                    height: "36px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    border: "1px solid rgba(255,255,255,0.1)",
                                    background: "transparent",
                                    color: "#888",
                                    cursor: "pointer",
                                    outline: "none",
                                    transition: "border-color 0.2s, color 0.2s",
                                }}
                                onMouseEnter={e => {
                                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.3)";
                                    (e.currentTarget as HTMLElement).style.color = "#fff";
                                }}
                                onMouseLeave={e => {
                                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
                                    (e.currentTarget as HTMLElement).style.color = "#888";
                                }}
                            >
                                <Icon size={16} />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Cards */}
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
                    gap: "16px",
                }}>
                    {cartridges.map(({ id, title, tag, image, Icon }) => (
                        <GameCard key={id} id={id} title={title} tag={tag} image={image} Icon={Icon} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function GameCard({ id, title, tag, image, Icon }: {
    id: string;
    title: string;
    tag: string;
    image: string;
    Icon: React.ElementType;
}) {
    const [hovered, setHovered] = React.useState(false);

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                background: "#0a0a0b",
                border: `1px solid ${hovered ? "rgba(157,78,221,0.45)" : "rgba(255,255,255,0.07)"}`,
                padding: "12px",
                display: "flex",
                flexDirection: "column",
                cursor: "pointer",
                position: "relative",
                transition: "border-color 0.3s, box-shadow 0.3s",
                boxShadow: hovered ? "0 0 24px rgba(157,78,221,0.1)" : "none",
            }}
        >
            {/* ID badge */}
            <div style={{
                position: "absolute",
                top: "10px",
                left: "10px",
                zIndex: 2,
                padding: "2px 8px",
                background: "rgba(0,0,0,0.75)",
                border: "1px solid rgba(255,255,255,0.1)",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "9px",
                color: "#a5b4fc",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
            }}>
                {id}
            </div>

            {/* Image */}
            <div style={{ aspectRatio: "4/5", overflow: "hidden", position: "relative", background: "#111", marginBottom: "12px" }}>
                <img
                    src={image}
                    alt={title}
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        filter: hovered ? "grayscale(0%)" : "grayscale(80%)",
                        transform: hovered ? "scale(1.04)" : "scale(1)",
                        transition: "filter 0.5s ease, transform 0.5s ease",
                    }}
                />
                <div style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%)",
                }} />
            </div>

            {/* Text */}
            <div style={{ padding: "0 2px" }}>
                <h3 style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "15px",
                    fontWeight: 700,
                    color: "#fff",
                    letterSpacing: "-0.01em",
                    margin: "0 0 8px 0",
                }}>
                    {title}
                </h3>
                <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingTop: "8px",
                    borderTop: "1px solid rgba(255,255,255,0.06)",
                }}>
                    <span style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "9px",
                        color: "#a5b4fc",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        opacity: 0.8,
                    }}>
                        {tag}
                    </span>
                    <Icon
                        size={14}
                        style={{
                            color: hovered ? "#9D4EDD" : "#444",
                            transition: "color 0.3s",
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
