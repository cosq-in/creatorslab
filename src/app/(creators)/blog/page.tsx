import Link from "next/link";
import { blogPosts } from "@/data/blog-posts";
import { vars } from "@/lib/cssVars";

export default function BlogPage() {
    return (
        <section className="wrap grid fill" style={vars({ "--min": "340px" }, { paddingTop: 56, paddingBottom: 72 })}>
            {blogPosts.map(p => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="card col" style={{ color: "var(--cosq-purple-deep)" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
                        <span className="tag-pink">{p.category}</span>
                        <span style={{ font: "700 12px var(--font-body)" }}>{p.featured ? "Featured" : ""}</span>
                    </div>
                    <h3 style={{ font: "400 21px/1.15 var(--font-display)" }}>{p.title}</h3>
                    <p style={{ fontSize: 15, lineHeight: 1.5, flex: 1 }}>{p.excerpt}</p>
                    <div style={{ font: "600 13px var(--font-body)" }}>{p.date} · {p.readTime}</div>
                </Link>
            ))}
        </section>
    );
}
