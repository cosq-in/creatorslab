"use client";

import { useState } from "react";
import Button from "@/components/labs/Button";
import { CHANNELS, CREATOR_STATS, EVERYDAY, FOR_BRANDS, FOR_CREATORS, GAMES, PLATFORMS } from "@/data/labs";
import { vars } from "@/lib/cssVars";

export default function CreatorsLabHome() {
    const [tab, setTab] = useState<"brands" | "creators">("brands");
    const items = tab === "brands" ? FOR_BRANDS : FOR_CREATORS;

    return (
        <>
            <section className="wrap" style={{ paddingTop: 72, paddingBottom: 24 }}>
                <h2 className="h2">Both sides of the deal</h2>
                <div className="stack-on-phone" style={{ display: "flex", gap: 12, flexWrap: "wrap", margin: "20px 0 28px" }}>
                    <Button variant={tab === "brands" ? "primary" : "alt"} onClick={() => setTab("brands")}>For brands</Button>
                    <Button variant={tab === "brands" ? "alt" : "primary"} onClick={() => setTab("creators")}>For creators</Button>
                </div>
                <div className="grid">
                    {items.map(([num, title, desc]) => (
                        <div key={num} className="card col" style={{ border: "6px solid var(--cosq-pink)" }}>
                            <span style={{ font: "400 14px var(--font-display)", color: "var(--cosq-pink)" }}>{num}</span>
                            <h3 style={{ font: "400 22px/1.1 var(--font-display)" }}>{title}</h3>
                            <p style={{ fontSize: 17, lineHeight: 1.45 }}>{desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="wrap" style={{ paddingTop: 64, paddingBottom: 24 }}>
                <h3 className="h3">Featured games we support</h3>
                <div className="grid" style={vars({ "--min": "240px", "--gap": "20px" })}>
                    {GAMES.map(([title, desc]) => (
                        <div key={title} className="card" style={{ padding: 20 }}>
                            <div style={{ font: "400 20px var(--font-display)", textTransform: "uppercase", color: "var(--cosq-pink)", marginBottom: 6 }}>{title}</div>
                            <div style={{ fontSize: 15, lineHeight: 1.45 }}>{desc}</div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="band purple" style={{ marginTop: 64 }}>
                <div className="inner">
                    <h2 className="h2 on-purple">Built for every creator</h2>
                    <p className="lead on-color" style={{ maxWidth: 620, marginBottom: 20 }}>
                        No roster, no problem. Instagram Reels, YouTube Shorts, TikTok: if you&apos;re building an audience, we&apos;re built for you too.
                    </p>
                    <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 28 }}>
                        {PLATFORMS.map(p => <span key={p} className="pill">{p}</span>)}
                    </div>
                    <div className="grid" style={vars({ "--gap": "24px" })}>
                        {EVERYDAY.map(([title, desc]) => (
                            <div key={title} className="card flat pink-border" style={{ padding: 22 }}>
                                <h4 style={{ font: "400 20px/1.1 var(--font-display)", margin: "0 0 8px" }}>{title}</h4>
                                <p style={{ fontSize: 16, lineHeight: 1.5 }}>{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="wrap" style={{ paddingTop: 72, paddingBottom: 24 }}>
                <h3 className="h3">How the campaigns run</h3>
                <div className="grid" style={vars({ "--gap": "24px" })}>
                    {CHANNELS.map(([title, desc]) => (
                        <div key={title} className="card flat" style={{ padding: 22 }}>
                            <h4 style={{ font: "400 20px/1.1 var(--font-display)", margin: "0 0 8px" }}>{title}</h4>
                            <p style={{ fontSize: 16, lineHeight: 1.5 }}>{desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="wrap" style={{ paddingTop: 48, paddingBottom: 24 }}>
                <div className="grid" style={vars({ "--min": "200px", "--gap": "20px" })}>
                    {CREATOR_STATS.map(([n, label]) => (
                        <div key={label} className="card" style={{ padding: 20 }}>
                            <div className="stat-n">{n}</div>
                            <div className="stat-label">{label}</div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="wrap stack-on-phone" style={{ paddingTop: 56, paddingBottom: 72, display: "flex", flexWrap: "wrap", gap: 24, justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ maxWidth: 620 }}>
                    <h2 className="h2">Ready to level up?</h2>
                    <p className="lead">Esports org, solo streamer, or a creator posting your first Reel: join the Creators Lab family and turn content into a career.</p>
                </div>
                <Button href="/contact">Start your journey</Button>
            </section>
        </>
    );
}
