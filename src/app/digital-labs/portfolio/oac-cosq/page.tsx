import Link from "next/link";
import Chip from "@/components/labs/Chip";
import {
    OAC_ACTIVATIONS, OAC_BENEFITS, OAC_BRIEF, OAC_COLLABS, OAC_DELIVERABLES, OAC_HALLOWEEN,
    OAC_META, OAC_SPONSORS, OAC_STATS, OAC_TAGS, OAC_TIMELINE,
} from "@/data/labs";
import { vars } from "@/lib/cssVars";

const H = { font: "400 34px/1 var(--font-display)", color: "var(--cosq-pink)" };
const HL = { font: "700 12px var(--font-body)", textTransform: "uppercase" as const };

export default function OacCaseStudy() {
    return (
        <>
            <section className="wrap" style={{ paddingTop: 40 }}>
                <Link href="/digital-labs/portfolio" className="back-link">← Back to portfolio</Link>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap", margin: "28px 0 20px" }}>
                    <Chip>Case study · 2020–2026</Chip>
                    <Chip color="var(--cosq-purple)">30 Nov 2024 · Dream City Resort, Bhubaneswar</Chip>
                </div>
                <h2 style={{ font: "400 clamp(40px,6.5vw,88px)/0.95 var(--font-display)", color: "var(--cosq-pink)", textShadow: "4px 4px 0 var(--cosq-purple)", margin: "0 0 20px" }}>
                    From a Quora post to Odisha&apos;s biggest cosplay festival.
                </h2>
                <p style={{ fontSize: 19, lineHeight: 1.6, maxWidth: 700, marginBottom: 32 }}>
                    Digital Labs designed everything for CosQ: the brand, the brochure, the event identity, the sponsorship deck. This is the story of how one community went from pandemic WhatsApp groups to 5,000+ attendees in 4 years.
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 32, marginBottom: 36 }}>
                    {OAC_META.map(([k, v]) => (
                        <div key={k}>
                            <div className="eyebrow" style={{ fontSize: 12 }}>{k}</div>
                            <div style={{ font: "700 17px var(--font-body)" }}>{v}</div>
                        </div>
                    ))}
                </div>
                <div className="grid" style={vars({ "--min": "200px", "--gap": "20px" })}>
                    {OAC_STATS.map(([n, label]) => (
                        <div key={label} className="card" style={{ padding: 18, boxShadow: "var(--shadow-hard)" }}>
                            <div className="stat-n" style={{ fontSize: 38 }}>{n}</div>
                            <div className="stat-label" style={{ fontSize: 13 }}>{label}</div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="band purple" style={{ marginTop: 64, padding: "88px 32px", textAlign: "center", backgroundImage: "radial-gradient(var(--cosq-pink) 2px,transparent 2.5px)", backgroundSize: "28px 28px" }}>
                <div style={{ font: "400 13px var(--font-display)", letterSpacing: 3, color: "#fff", textTransform: "uppercase", marginBottom: 12 }}>Odisha&apos;s Biggest Cosplay Event</div>
                <div style={{ font: "400 clamp(72px,14vw,160px)/0.9 var(--font-display)", color: "#fff", textShadow: "6px 6px 0 var(--cosq-pink)" }}>CosQ</div>
                <div style={{ font: "400 15px var(--font-display)", letterSpacing: 4, color: "#fff", marginTop: 16 }}>2024 · BHUBANESWAR</div>
                <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap", marginTop: 28 }}>
                    {OAC_TAGS.map(t => <span key={t} className="pill" style={{ padding: "5px 12px" }}>{t}</span>)}
                </div>
            </section>

            <section className="wrap" style={{ paddingTop: 80, paddingBottom: 24 }}>
                <div className="eyebrow" style={{ marginBottom: 12 }}>Campaign event · October 2024</div>
                <h3 className="h2 plain" style={{ marginBottom: 20 }}>CosQ Halloween Party</h3>
                <div className="grid" style={vars({ "--min": "420px", "--gap": "40px" })}>
                    <div>
                        <p style={{ fontSize: 17, lineHeight: 1.65, marginBottom: 16 }}>
                            CosQ&apos;s first public event. A controlled explosion, to prove the brand could fill a room. Before the grand November festival, Digital Labs ran a campaign event to build hype and test the brand in the wild. The CosQ Halloween Party at Azzuro Club (Bhubaneswar&apos;s premium sky lounge) was designed as a Trick or Treat: a spooky night for the anime, cosplay, comics, pop culture, and gaming community.
                        </p>
                        <p style={{ fontSize: 17, lineHeight: 1.65, marginBottom: 20 }}>
                            Over 200 attendees showed up. The event poster, ticket artwork, and social media carousel were entirely designed by Digital Labs and posted to @the.cosq. Ticketing through Showmates. 354+ Instagram likes on the launch post.
                        </p>
                        <div style={{ display: "flex", gap: 28, flexWrap: "wrap" }}>
                            <div><div style={H}>200+</div><div style={HL}>Attendees</div></div>
                            <div><div style={H}>₹299</div><div style={HL}>Entry ticket</div></div>
                            <div><div style={H}>3–9PM</div><div style={HL}>Duration</div></div>
                        </div>
                    </div>
                    <div style={{ border: "4px solid var(--cosq-purple)" }}>
                        {OAC_HALLOWEEN.map(([k, v]) => <div key={k} className="kv"><span>{k}</span><span>{v}</span></div>)}
                    </div>
                </div>
            </section>

            <section className="wrap" style={{ paddingTop: 56, paddingBottom: 56 }}>
                <h3 className="h3" style={{ marginBottom: 28 }}>The journey · 2020 to 2026</h3>
                <div>
                    {OAC_TIMELINE.map(([year, title, desc]) => (
                        <div key={year} className="oac-timeline-row">
                            <div style={{ font: "400 24px/1 var(--font-display)", color: "var(--cosq-pink)" }}>{year}</div>
                            <div>
                                <h4 style={{ font: "400 20px/1.1 var(--font-display)", margin: "0 0 8px" }}>{title}</h4>
                                <p style={{ fontSize: 16, lineHeight: 1.55, maxWidth: 720 }}>{desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="band pink">
                <div className="inner grid" style={vars({ "--min": "420px", "--gap": "48px" })}>
                    <div>
                        <div style={{ font: "400 13px var(--font-display)", textTransform: "uppercase", color: "#fff", marginBottom: 12 }}>The brief</div>
                        <h3 style={{ font: "400 clamp(30px,4vw,48px)/1.05 var(--font-display)", color: "#fff", textShadow: "3px 3px 0 var(--cosq-purple)", margin: "0 0 20px" }}>Build an entire event universe from scratch.</h3>
                        <p style={{ font: "500 17px/1.65 var(--font-body)", color: "#fff", marginBottom: 16 }}>
                            Odisha Anime Club approached Digital Labs to design every visual touchpoint for CosQ 2024: from the event logo and mascot character to a 15-page sponsorship brochure, social media kit, and multi-tier partnership deck targeted at national brands and media houses.
                        </p>
                        <p style={{ font: "500 17px/1.65 var(--font-body)", color: "#fff" }}>The ask: make it feel like it belonged in Tokyo, not just Bhubaneswar. Make it loud. Make it real.</p>
                    </div>
                    <div style={{ background: "#fff", border: "4px solid var(--cosq-purple)", boxShadow: "var(--shadow-hard)" }}>
                        {OAC_BRIEF.map(([k, v]) => <div key={k} className="kv" style={{ padding: "14px 18px" }}><span>{k}</span><span>{v}</span></div>)}
                    </div>
                </div>
            </section>

            <section className="wrap" style={{ paddingTop: 72, paddingBottom: 24 }}>
                <h3 className="h3" style={{ marginBottom: 24 }}>Event universe · CosQ activations</h3>
                <div className="grid fill" style={vars({ "--min": "320px", "--gap": "20px" })}>
                    {OAC_ACTIVATIONS.map(([title, desc]) => (
                        <div key={title} className="card flat" style={{ padding: 20 }}>
                            <div style={{ font: "400 18px var(--font-display)", textTransform: "uppercase", color: "var(--cosq-pink)", marginBottom: 8 }}>{title}</div>
                            <p style={{ fontSize: 15, lineHeight: 1.5 }}>{desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="wrap" style={{ paddingTop: 56, paddingBottom: 24 }}>
                <div className="eyebrow" style={{ marginBottom: 10 }}>Designed deliverable · Sponsorship architecture</div>
                <h3 style={{ font: "400 clamp(26px,3.4vw,40px)/1.1 var(--font-display)", margin: "0 0 16px", maxWidth: 720 }}>A tiered partnership system worthy of national brands.</h3>
                <p style={{ fontSize: 17, lineHeight: 1.6, maxWidth: 680, marginBottom: 28 }}>
                    Digital Labs designed the full sponsorship deck, four main tiers plus specialist partner categories, that OAC used to pitch brands like Viz Media, PVR INOX, and The AniLyst Podcast.
                </p>
                <div className="grid" style={vars({ "--min": "420px", "--gap": "40px" })}>
                    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                        {OAC_SPONSORS.map(([name, tier, price]) => (
                            <div key={name} className="card" style={{ padding: "14px 18px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
                                <div>
                                    <div className="eyebrow" style={{ fontSize: 12 }}>{tier}</div>
                                    <div style={{ font: "700 17px var(--font-body)" }}>{name}</div>
                                </div>
                                <div style={{ font: "400 20px var(--font-display)" }}>{price}</div>
                            </div>
                        ))}
                    </div>
                    <div>
                        <div style={{ font: "400 14px var(--font-display)", textTransform: "uppercase", marginBottom: 12 }}>Golden Gyoza tier benefits</div>
                        {OAC_BENEFITS.map((label, i) => (
                            <div key={label} style={{ display: "flex", gap: 14, padding: "10px 0", borderBottom: "3px solid var(--cosq-pink-light)", font: "600 15px var(--font-body)" }}>
                                <span style={{ font: "400 13px var(--font-display)", color: "var(--cosq-pink)", minWidth: 24 }}>{String(i + 1).padStart(2, "0")}</span>
                                {label}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="wrap" style={{ paddingTop: 56, paddingBottom: 56 }}>
                <h3 className="h3">Brand collaboration network</h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 48 }}>
                    {OAC_COLLABS.map(c => <span key={c} style={{ border: "4px solid var(--cosq-purple)", padding: "8px 16px", font: "700 15px var(--font-body)" }}>{c}</span>)}
                </div>
                <h3 className="h3">Deliverables</h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                    {OAC_DELIVERABLES.map(c => (
                        <span key={c} style={{ background: "var(--cosq-pink)", color: "#fff", border: "3px solid var(--cosq-purple)", padding: "6px 14px", font: "400 13px var(--font-display)", textTransform: "uppercase" }}>{c}</span>
                    ))}
                </div>
            </section>
        </>
    );
}
