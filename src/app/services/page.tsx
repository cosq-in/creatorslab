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
                                <p>Let us handle your social media presence while you focus on creating amazing content. We use data-driven strategies to ensure your brand reaches its maximum potential.</p>

                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--spacing-md)', marginTop: 'var(--spacing-md)' }}>
                                    <div>
                                        <h4 style={{ color: 'var(--accent-color)' }}>Target Audience</h4>
                                        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Streamers, Esports Orgs, and Game Developers looking to build loyal communities.</p>
                                    </div>
                                    <div>
                                        <h4 style={{ color: 'var(--accent-color)' }}>Value Proposition</h4>
                                        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Increase engagement by 40% on average and free up 15+ hours of your week.</p>
                                    </div>
                                </div>

                                <h4>Scope of Service:</h4>
                                <ul className="service-features">
                                    <li>✓ <strong>Strategy:</strong> Content calendar & trend analysis</li>
                                    <li>✓ <strong>Execution:</strong> Daily posting & community interaction</li>
                                    <li>✓ <strong>Growth:</strong> Viral campaign management</li>
                                    <li>✓ <strong>Analytics:</strong> Monthly detailed reports</li>
                                </ul>
                                <div className="service-platforms" style={{ marginTop: '1rem' }}>
                                    <span className="platform-badge">Twitter/X</span>
                                    <span className="platform-badge">Instagram</span>
                                    <span className="platform-badge">TikTok</span>
                                    <span className="platform-badge">Discord</span>
                                    <span className="platform-badge">LinkedIn</span>
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

                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--spacing-md)', marginTop: 'var(--spacing-md)' }}>
                                    <div>
                                        <h4 style={{ color: 'var(--accent-color)' }}>Target Audience</h4>
                                        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>YouTubers and Content Creators aiming for premium production value.</p>
                                    </div>
                                    <div>
                                        <h4 style={{ color: 'var(--accent-color)' }}>Value Proposition</h4>
                                        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Higher CTRs with custom thumbnails and increased retention via professional editing.</p>
                                    </div>
                                </div>

                                <h4>Scope of Service:</h4>
                                <ul className="service-features">
                                    <li>✓ <strong>Video:</strong> 4K editing, color grading, sound design</li>
                                    <li>✓ <strong>Graphics:</strong> Thumbnails, overlays, channel art</li>
                                    <li>✓ <strong>Shorts:</strong> Repurposing long-form content for TikTok/Reels</li>
                                    <li>✓ <strong>Branding:</strong> Logo design and motion graphics</li>
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
