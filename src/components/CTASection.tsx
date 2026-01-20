import Link from 'next/link';

export default function CTASection() {
    return (
        <section className="cta-section">
            <div className="container">
                <div className="cta-content">
                    <h2>Ready to Level Up? 🚀</h2>
                    <p>Join the Creators Lab family and transform your content creation journey!</p>
                    <Link href="/contact" className="pixel-button primary large">Start Your Journey</Link>
                </div>
            </div>
        </section>
    );
}
