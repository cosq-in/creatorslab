"use client";
import { useState } from "react";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import PixelNavbar from "@/components/PixelNavbar";
import PixelFooter from "@/components/PixelFooter";
import { blogPosts } from "@/data/blog-posts";

const CATEGORIES = ["All", "Shorts & Reels", "Gaming", "Growth", "Creator Life", "Industry"];

export default function BlogPage() {
    const [category, setCategory] = useState("All");

    const featured = blogPosts.find((p) => p.featured);
    const rest = blogPosts.filter((p) => !p.featured);
    const filtered = category === "All" ? rest : rest.filter((p) => p.category === category);

    return (
        <>
            <PixelNavbar />
            <main>
            <PageHeader title="Blog 📝" subtitle="Insights from the lab — for gamers, streamers, and everyday creators" />

            <section className="content-section">
                <div className="container">
                    {featured && (
                        <Link href={`/blog/${featured.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
                            <div className="featured-post pixel-card">
                                <span className="post-badge">Featured</span>
                                <div>
                                    <div className="post-category">{featured.category}</div>
                                    <h2>{featured.title}</h2>
                                    <p className="post-meta">{featured.date} &middot; {featured.readTime}</p>
                                    <p className="post-excerpt">{featured.excerpt}</p>
                                    <div className="post-tags">
                                        {featured.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                                    </div>
                                    <span className="read-more">Read More →</span>
                                </div>
                                <div className="post-image">
                                    <span className="post-placeholder">{featured.icon}</span>
                                </div>
                            </div>
                        </Link>
                    )}

                    <div className="blog-categories">
                        {CATEGORIES.map((c) => (
                            <button
                                key={c}
                                className={`category-btn ${category === c ? "active" : ""}`}
                                onClick={() => setCategory(c)}
                            >
                                {c}
                            </button>
                        ))}
                    </div>

                    <div className="blog-grid">
                        {filtered.map((post) => (
                            <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
                                <div className="blog-card pixel-card" style={{ height: "100%", display: "flex", flexDirection: "column" }}>
                                    <div className="blog-thumbnail">
                                        <span className="blog-placeholder">{post.icon}</span>
                                    </div>
                                    <div className="blog-content" style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                                        <div className="post-category" style={{ marginBottom: "0.4rem" }}>{post.category}</div>
                                        <h3>{post.title}</h3>
                                        <p style={{ flex: 1 }}>{post.excerpt}</p>
                                        <p className="portfolio-meta" style={{ marginBottom: "0.75rem" }}>{post.date} &middot; {post.readTime}</p>
                                        <span className="read-more">Read More →</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <section className="content-section alt-bg">
                <div className="container">
                    <div className="newsletter-box pixel-card">
                        <h2 className="gradient-heading">Never Miss a Drop 📬</h2>
                        <p style={{ color: "var(--text-muted)" }}>Growth tips, Reels & Shorts breakdowns, and gaming industry news &mdash; straight to your inbox, twice a month.</p>
                        <form
                            className="newsletter-signup"
                            onSubmit={(e) => e.preventDefault()}
                        >
                            <input type="email" required placeholder="your@email.com" className="pixel-input large" aria-label="Email address" />
                            <button type="submit" className="pixel-button primary">Subscribe</button>
                        </form>
                        <p className="newsletter-note">No spam. Unsubscribe anytime.</p>
                    </div>
                </div>
            </section>
            </main>
            <PixelFooter />
        </>
    );
}
