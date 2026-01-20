"use client";
import PageHeader from "@/components/PageHeader";
import { useState } from 'react';

export default function ContactPage() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("submitting");

        const form = e.currentTarget;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        // Add configuration fields for FormSubmit
        const payload = {
            ...data,
            _cc: "soham@cosq.in,info@cosq.in",
            _subject: "New Submission from Creators Lab Website",
            _template: "table",
            _captcha: "false"
        };

        try {
            const response = await fetch("https://formsubmit.co/ajax/marketing@cosq.in", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                setStatus("success");
                form.reset();
                setTimeout(() => setStatus("idle"), 5000);
            } else {
                setStatus("error");
            }
        } catch (error) {
            console.error("Form submission error:", error);
            setStatus("error");
        }
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

                            {status !== "success" ? (
                                <form onSubmit={handleSubmit} className="contact-form">
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="name">Name *</label>
                                            <input type="text" id="name" name="name" className="pixel-input" required placeholder="Your name" disabled={status === "submitting"} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">Email *</label>
                                            <input type="email" id="email" name="email" className="pixel-input" required placeholder="your@email.com" disabled={status === "submitting"} />
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="discord">Discord (Optional)</label>
                                            <input type="text" id="discord" name="discord" className="pixel-input" placeholder="username#1234" disabled={status === "submitting"} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="platform">Primary Platform *</label>
                                            <select id="platform" name="platform" className="pixel-select" required defaultValue="" disabled={status === "submitting"}>
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
                                        <select id="service" name="service" className="pixel-select" required defaultValue="" disabled={status === "submitting"}>
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
                                        <textarea id="message" name="message" className="pixel-textarea" rows={6} required placeholder="What are you hoping to achieve? What challenges are you facing? Any specific goals?" disabled={status === "submitting"}></textarea>
                                    </div>

                                    <button type="submit" className="pixel-button primary large" disabled={status === "submitting"}>
                                        {status === "submitting" ? "Sending... ⏳" : "Send Message 🚀"}
                                    </button>
                                    <p className="form-note">We typically respond within 24 hours!</p>
                                    {status === "error" && <p style={{ color: '#ff4444', textAlign: 'center', marginTop: '1rem' }}>❌ Something went wrong. Please try again later.</p>}
                                </form>
                            ) : (
                                <div className="form-success" style={{ textAlign: 'center', padding: '2rem' }}>
                                    <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎉</div>
                                    <h3 style={{ color: 'var(--accent-color)', marginBottom: '1rem' }}>Message Sent Successfully!</h3>
                                    <p>Thanks for reaching out! We&apos;ll check your message and get back to you within 24 hours.</p>
                                    <button
                                        onClick={() => setStatus("idle")}
                                        className="pixel-button secondary small"
                                        style={{ marginTop: '2rem' }}
                                    >
                                        Send Another Message
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* Contact Info */}
                        <div className="contact-info">
                            <div className="info-card pixel-card">
                                <h3>📧 Marketing & General</h3>
                                <p><a href="mailto:marketing@cosq.in">marketing@cosq.in</a></p>
                                <p className="info-note">For general inquiries</p>
                            </div>

                            <div className="info-card pixel-card">
                                <h3>💼 Business & Founder</h3>
                                <p><a href="mailto:soham@cosq.in">soham@cosq.in</a></p>
                                <p className="info-note">Soham (Founder)</p>
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
