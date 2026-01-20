import Link from 'next/link';
import PageHeader from "@/components/PageHeader";

export default function ServicesPage() {
    return (
        <main>
            <PageHeader title="Our Services 🔬" subtitle="Complete solutions for content creators" />

            <section className="content-section">
                <div className="container">
                    <div className="services-detailed">
                        {/* Social Media Management */}
                        <div className="service-detail pixel-card">
                            <div className="service-header">
                                <div className="service-icon-large">📱</div>
                                <div>
                                    <h2>Social Media Management</h2>
                                    <p className="service-tagline">Grow your audience across all platforms</p>
                                </div>
                            </div>
                            <div className="service-body">
                                <p>Let us handle your social media presence while you focus on creating amazing content. We&apos;ll develop and execute strategies that engage your audience and grow your following.</p>
                                <h4>What&apos;s Included:</h4>
                                <ul className="service-features">
                                    <li>✓ Content calendar planning</li>
                                    <li>✓ Daily posting and engagement</li>
                                    <li>✓ Community management</li>
                                    <li>✓ Hashtag research and optimization</li>
                                </ul>
                                <div className="service-platforms">
                                    <span className="platform-badge">Twitter</span>
                                    <span className="platform-badge">Instagram</span>
                                    <span className="platform-badge">TikTok</span>
                                    <span className="platform-badge">Discord</span>
                                </div>
                            </div>
                        </div>

                        {/* Content Production */}
                        <div className="service-detail pixel-card">
                            <div className="service-header">
                                <div className="service-icon-large">🎬</div>
                                <div>
                                    <h2>Content Production</h2>
                                    <p className="service-tagline">Professional quality, every time</p>
                                </div>
                            </div>
                            <div className="service-body">
                                <p>Elevate your content with professional editing, eye-catching thumbnails, and cohesive branding that makes you stand out from the crowd.</p>
                                <h4>What&apos;s Included:</h4>
                                <ul className="service-features">
                                    <li>✓ Video editing and post-production</li>
                                    <li>✓ Custom thumbnail design</li>
                                    <li>✓ Stream overlay creation</li>
                                    <li>✓ Brand identity development</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2>Ready to Transform Your Content? 🚀</h2>
                        <p>Let&apos;s discuss which services are right for you!</p>
                        <Link href="/contact" className="pixel-button primary large">Schedule a Consultation</Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
