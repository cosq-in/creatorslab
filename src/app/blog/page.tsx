import PageHeader from "@/components/PageHeader";

export default function BlogPage() {
    return (
        <main>
            <PageHeader title="Blog 📝" subtitle="Insights from the lab" />
            <section className="content-section">
                <div className="container">
                    <div className="blog-grid">
                        <div className="blog-card pixel-card">
                            <div className="blog-thumbnail">
                                <span className="blog-placeholder">📰</span>
                            </div>
                            <div className="blog-content">
                                <h3>The Future of Streaming</h3>
                                <p>Insights into 2026 trends...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
