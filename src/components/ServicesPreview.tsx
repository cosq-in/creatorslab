import Link from 'next/link';

export default function ServicesPreview() {
    const services = [
        { icon: '📱', title: 'Social Media Management', desc: 'Grow your audience across all platforms with expert strategies' },
        { icon: '🎬', title: 'Content Production', desc: 'Professional video editing, thumbnails, and branding' },
        { icon: '📊', title: 'Analytics & Growth', desc: 'Data-driven insights to optimize your content strategy' },
        { icon: '🤝', title: 'Brand Partnerships', desc: 'Connect with brands and maximize sponsorship opportunities' },
    ];

    return (
        <section className="services-preview">
            <div className="container">
                <h2 className="section-title">🔬 What We Do</h2>
                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-box pixel-card">
                            <div className="service-icon">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.desc}</p>
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
