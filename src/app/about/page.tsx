import PageHeader from "@/components/PageHeader";

export default function AboutPage() {
    return (
        <main>
            <PageHeader title="About Us 🧪" subtitle="We are the scientists of success" />
            <section className="content-section">
                <div className="container">
                    <div className="pixel-card" style={{ padding: '2rem', textAlign: 'center' }}>
                        <h2>Mission Control</h2>
                        <p>At Creators Lab by CosQ, we are dedicated to extracting the full potential of every creator. Through rigorous testing and proven formulas, we elevate your content game.</p>
                    </div>
                </div>
            </section>
        </main>
    );
}
