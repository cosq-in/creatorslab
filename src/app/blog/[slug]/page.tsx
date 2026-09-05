import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import PixelNavbar from "@/components/PixelNavbar";
import PixelFooter from "@/components/PixelFooter";
import { blogPosts, getPostBySlug } from "@/data/blog-posts";

export function generateStaticParams() {
    return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    if (!post) return { title: "Post Not Found — Creators Lab" };
    return {
        title: `${post.title} — Creators Lab Blog`,
        description: post.excerpt,
    };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    return (
        <>
            <PixelNavbar />
            <main>
                <PageHeader title={post.icon} subtitle={post.category} />

                <section className="content-section">
                    <div className="container" style={{ maxWidth: "800px" }}>
                        <Link href="/blog" className="read-more">&larr; Back to Blog</Link>

                        <h1 className="pixel-title" style={{ marginTop: "1.5rem", fontSize: "clamp(1.3rem, 3.5vw, 2rem)" }}>
                            {post.title}
                        </h1>
                        <p className="post-meta">{post.date} &middot; {post.readTime}</p>

                        <div className="post-tags" style={{ marginBottom: "2rem" }}>
                            {post.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                            {post.body.map((paragraph, i) => (
                                <p key={i} style={{ lineHeight: 1.8, color: "var(--text-light)" }}>{paragraph}</p>
                            ))}
                        </div>

                        <div className="pixel-card" style={{ marginTop: "3rem", textAlign: "center" }}>
                            <h3 style={{ color: "var(--primary-color)", marginBottom: "0.75rem" }}>Want help putting this into practice?</h3>
                            <p style={{ color: "var(--text-muted)", marginBottom: "1.5rem" }}>
                                Whether you&apos;re running an esports roster or growing a Shorts channel, our team can build the system for you.
                            </p>
                            <Link href="/contact" className="pixel-button primary">Get In Touch</Link>
                        </div>
                    </div>
                </section>
            </main>
            <PixelFooter />
        </>
    );
}
