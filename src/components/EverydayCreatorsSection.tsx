import Link from "next/link";

const FEATURES = [
    { icon: "🎬", title: "Reels & Shorts Editing", desc: "Fast-turnaround vertical edits, captions, and hooks built for the first three seconds." },
    { icon: "✨", title: "Personal Brand Strategy", desc: "Find your niche, your voice, and a content pillar system that doesn't burn you out." },
    { icon: "💸", title: "Growth & Brand Deals", desc: "Posting cadence, trend tracking, and rate guidance so your next deal pays fairly." },
];

export default function EverydayCreatorsSection() {
    return (
        <section id="everyday-creators" className="content-section alt-bg">
            <div className="container">
                <h2 className="section-title center gradient-heading">📱 Built For Every Creator</h2>
                <p style={{ textAlign: "center", color: "var(--text-muted)", maxWidth: "620px", margin: "0 auto var(--spacing-lg)" }}>
                    No roster, no problem. Instagram Reels, YouTube Shorts, TikTok &mdash; if you&apos;re building an audience, we&apos;re built for you too.
                </p>

                <div className="service-platforms" style={{ justifyContent: "center", marginBottom: "var(--spacing-lg)" }}>
                    <span className="platform-badge">📸 Instagram Reels</span>
                    <span className="platform-badge">▶️ YouTube Shorts</span>
                    <span className="platform-badge">🎵 TikTok</span>
                </div>

                <div className="services-grid">
                    {FEATURES.map((f) => (
                        <div key={f.title} className="service-box pixel-card">
                            <div className="service-icon">{f.icon}</div>
                            <h3>{f.title}</h3>
                            <p>{f.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="cta-center">
                    <Link href="/services" className="pixel-button primary">See Creator Services</Link>
                </div>
            </div>
        </section>
    );
}
