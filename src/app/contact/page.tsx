"use client";
import PageHeader from "@/components/PageHeader";
import { useState } from 'react';

export default function ContactPage() {
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSuccess(true);
        setTimeout(() => setSuccess(false), 5000);
    };

    return (
        <main>
            <PageHeader title="Get in Touch 📬" subtitle="Let's create something amazing together!" />

            <section className="content-section">
                <div className="container">
                    <div className="contact-layout">
                        {/* Contact Form */}
                        <div className="contact-form-container pixel-card">
                            <h2>Send Us a Message 💌</h2>
                            {!success ? (
                                <form className="contact-form" onSubmit={handleSubmit}>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="name">Name *</label>
                                            <input type="text" id="name" name="name" className="pixel-input" required placeholder="Your name" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">Email *</label>
                                            <input type="email" id="email" name="email" className="pixel-input" required placeholder="your@email.com" />
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="discord">Discord (Optional)</label>
                                            <input type="text" id="discord" name="discord" className="pixel-input" placeholder="username#1234" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="platform">Primary Platform *</label>
                                            <select id="platform" name="platform" className="pixel-select" required defaultValue="">
                                                <option value="" disabled>Select platform</option>
                                                <option value="youtube">YouTube</option>
                                                <option value="twitch">Twitch</option>
                                                <option value="tiktok">TikTok</option>
                                                <option value="instagram">Instagram</option>
                                                <option value="twitter">Twitter</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="service">Service Interested In *</label>
                                        <select id="service" name="service" className="pixel-select" required defaultValue="">
                                            <option value="" disabled>Select a service</option>
                                            <option value="social-media">Social Media Management</option>
                                            <option value="content-production">Content Production</option>
                                            <option value="analytics">Analytics & Growth</option>
                                            <option value="brand-partnerships">Brand Partnerships</option>
                                            <option value="campaign">Campaign Management</option>
                                            <option value="coaching">Stream Coaching</option>
                                            <option value="consultation">General Consultation</option>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="message">Tell Us About Your Goals *</label>
                                        <textarea id="message" name="message" className="pixel-textarea" rows={6} required placeholder="What are you hoping to achieve? What challenges are you facing? Any specific goals?"></textarea>
                                    </div>

                                    <button type="submit" className="pixel-button primary large">Send Message 🚀</button>
                                    <p className="form-note">We typically respond within 24 hours!</p>
                                </form>
                            ) : (
                                <div className="form-success">
                                    <p>✅ Thanks for reaching out! We&apos;ll get back to you soon!</p>
                                </div>
                            )}
                        </div>

                        {/* Contact Info */}
                        <div className="contact-info">
                            <div className="info-card pixel-card">
                                <h3>📧 Email Us</h3>
                                <p><a href="mailto:hello@creatorslabbycosq.com">hello@creatorslabbycosq.com</a></p>
                                <p className="info-note">For general inquiries</p>
                            </div>

                            <div className="info-card pixel-card">
                                <h3>💼 Business Inquiries</h3>
                                <p><a href="mailto:business@creatorslabbycosq.com">business@creatorslabbycosq.com</a></p>
                                <p className="info-note">For partnerships & collaborations</p>
                            </div>

                            <div className="info-card pixel-card">
                                <h3>💬 Join Our Discord</h3>
                                <p><a href="#">discord.gg/creatorslab</a></p>
                                <p className="info-note">Connect with our community</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
