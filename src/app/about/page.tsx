import PageHeader from "@/components/PageHeader";

export default function AboutPage() {
    return (
        <main>
            <PageHeader title="About Us 🧪" subtitle="We are the scientists of success" />

            {/* Mission Section */}
            <section className="content-section">
                <div className="container">
                    <div className="two-col-layout">
                        <div className="col-graphic">
                            <div className="mission-graphic">
                                <div className="emoji-stack">
                                    <div className="emoji-item">🧬</div>
                                    <div className="emoji-item">📈</div>
                                    <div className="emoji-item">🎮</div>
                                    <div className="emoji-item">❤️</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-text">
                            <h2 className="section-title">Our Mission</h2>
                            <p className="pixel-text" style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>EMPOWERING CREATORS.</p>
                            <p>Content creation is a lonely road. Burnout is real, algorithms are confusing, and monetization is hard. We exist to solve these problems.</p>
                            <p><strong>Our purpose</strong> is to provide the infrastructure, strategy, and support that allows creators to do what they do best: create. We handle the business, the data, and the tech so you can handle the community.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="content-section alt-bg">
                <div className="container">
                    <h2 className="section-title center">Core Values</h2>
                    <div className="values-grid">
                        <div className="value-card pixel-card">
                            <div className="value-icon">🤝</div>
                            <h3>Authenticity First</h3>
                            <p>We believe that numbers follow real connections. We never sacrifice your voice for a quick view.</p>
                        </div>
                        <div className="value-card pixel-card">
                            <div className="value-icon">🧪</div>
                            <h3>Data Driven</h3>
                            <p>We don't guess. We test. Every strategy is backed by analytics and market research.</p>
                        </div>
                        <div className="value-card pixel-card">
                            <div className="value-icon">🚀</div>
                            <h3>Creator Centric</h3>
                            <p>You are the talent. You are the boss. We are just the pit crew keeping the engine running.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
