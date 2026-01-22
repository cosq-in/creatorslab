import PageHeader from "@/components/PageHeader";
import Link from 'next/link';

export default function CreativeDesignPage() {
    return (
        <main>
            <PageHeader title="Creative Design 🎨" subtitle="Where art meets algorithm" />

            {/* Philosophy Section */}
            <section className="content-section">
                <div className="container">
                    <div className="two-col-layout">
                        <div className="col-text">
                            <h2 className="section-title">Our Philosophy</h2>
                            <p className="pixel-text" style={{ color: 'var(--accent-color)', marginBottom: '1rem' }}>PIXEL PERFECT. EVERY TIME.</p>
                            <p>We believe that design is not just about making things look good—it&apos;s about communication. In the fast-paced world of gaming and content creation, you have milliseconds to capture attention.</p>
                            <p>Our design language borrows from the retro aesthetics of 8-bit gaming while deploying modern design principles to create brands that feel both nostalgic and cutting-edge.</p>
                        </div>
                        <div className="col-graphic">
                            <div className="pixel-card" style={{ fontSize: '10rem', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '300px', width: '300px' }}>
                                🖌️
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services List Used */}
            <section className="content-section alt-bg">
                <div className="container">
                    <h2 className="section-title center">Design Services</h2>
                    <div className="services-grid">
                        <div className="service-box pixel-card">
                            <div className="service-icon">🎭</div>
                            <h3>Brand Identity</h3>
                            <p>Logo design, color palettes, and typography that define who you are.</p>
                        </div>
                        <div className="service-box pixel-card">
                            <div className="service-icon">📺</div>
                            <h3>Stream Graphics</h3>
                            <p>Overlays, alerts, and panels that make your broadcast professional.</p>
                        </div>
                        <div className="service-box pixel-card">
                            <div className="service-icon">👕</div>
                            <h3>Merch Design</h3>
                            <p>Apparel designs your community will actually want to wear.</p>
                        </div>
                        <div className="service-box pixel-card">
                            <div className="service-icon">🎞️</div>
                            <h3>Motion Graphics</h3>
                            <p>Intros, outros, and transitions to keep the energy high.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="content-section">
                <div className="container">
                    <h2 className="section-title center">The Creative Process</h2>
                    <div className="timeline">
                        <div className="timeline-item">
                            <div className="timeline-year">01</div>
                            <h3>Discovery</h3>
                            <p>We dive deep into your brand, audience, and goals to understand the "why".</p>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-year">02</div>
                            <h3>Concept</h3>
                            <p>We sketch, wireframe, and explore multiple directions before narrowing down.</p>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-year">03</div>
                            <h3>Polish</h3>
                            <p>Refining every pixel, adjusting colors, and ensuring everything is crisp.</p>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-year">04</div>
                            <h3>Delivery</h3>
                            <p>We hand over all assets in organization-ready formats, ready for deployment.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2>Ready to Visualize Your Brand?</h2>
                        <p>Let&apos;s create something iconic together.</p>
                        <Link href="/contact" className="pixel-button primary large">Start a Project</Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
