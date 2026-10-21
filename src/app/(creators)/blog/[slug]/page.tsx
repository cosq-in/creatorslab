import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getPostBySlug } from "@/data/blog-posts";

export function generateStaticParams() {
    return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    if (!post) return { title: "Post Not Found: Creators Lab" };
    return {
        title: `${post.title}: Creators Lab Blog`,
        description: post.excerpt,
    };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    if (!post) notFound();

    return (
        <section className="wrap" style={{ maxWidth: 760, paddingTop: 48, paddingBottom: 80 }}>
            <Link href="/blog" className="back-link">← All posts</Link>
            <div className="eyebrow" style={{ fontSize: 12, margin: "24px 0 10px" }}>{post.category} · {post.date} · {post.readTime}</div>
            <h2 style={{ font: "400 clamp(28px,4vw,44px)/1.05 var(--font-display)", margin: "0 0 20px" }}>{post.title}</h2>
            <p style={{ font: "600 20px/1.5 var(--font-body)", marginBottom: 24 }}>{post.excerpt}</p>
            {post.body.map((t, i) => (
                <p key={i} style={{ fontSize: 18, lineHeight: 1.7, marginBottom: 18 }}>{t}</p>
            ))}
        </section>
    );
}
