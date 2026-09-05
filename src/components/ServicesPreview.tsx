import Link from "next/link";

const SERVICES = [
    { icon: "📱", title: "Social Media Management", desc: "Grow your audience across all platforms with expert strategies" },
    { icon: "🎬", title: "Content Production", desc: "Professional video editing, thumbnails, and branding" },
    { icon: "📊", title: "Analytics & Growth", desc: "Data-driven insights to optimize your content strategy" },
    { icon: "🤝", title: "Brand Partnerships", desc: "Connect with brands and maximize sponsorship opportunities" },
];

export default function ServicesPreview() {
    return (
        <section className="content-section">
            <div className="container">
                <h2 className="section-title center">🔬 What We Do</h2>
                <div className="services-grid">
                    {SERVICES.map((s) => (
                        <div key={s.title} className="service-box pixel-card">
                            <div className="service-icon">{s.icon}</div>
                            <h3>{s.title}</h3>
                            <p>{s.desc}</p>
                        </div>
                    ))}
                </div>
                <div className="cta-center">
                    <Link href="/services" className="pixel-button primary">View All Services</Link>
                </div>
            </div>
        </section>
    );
}
