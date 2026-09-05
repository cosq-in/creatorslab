import Link from "next/link";

export default function CTASection() {
    return (
        <section className="cta-section">
            <div className="container">
                <div className="cta-content">
                    <h2>Ready to Level Up? 🚀</h2>
                    <p>Esports org, solo streamer, or a creator posting your first Reel &mdash; join the Creators Lab family and turn content into a career.</p>
                    <Link href="/contact" className="pixel-button primary large">Start Your Journey</Link>
                </div>
            </div>
        </section>
    );
}
