import Link from "next/link";

export default function Hero() {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero-content">
                    <h1 className="pixel-title glitch" data-text="CREATORS LAB by CosQ">CREATORS LAB by CosQ</h1>
                    <p className="hero-subtitle">🎮 Gaming, Streaming &amp; Short-Form Content 🎮</p>
                    <p className="hero-description">
                        Empowering gamers, streamers, and everyday creators &mdash; from competitive esports rosters to your next Instagram Reel or YouTube Short.
                    </p>
                    <div className="hero-buttons">
                        <Link href="/services" className="pixel-button primary">Explore Services</Link>
                        <Link href="/contact" className="pixel-button secondary">Get Started</Link>
                    </div>
                </div>
                <div className="hero-graphic">
                    <div className="lab-container">
                        <div className="beaker pulse">🧪</div>
                        <div className="atoms">⚛️</div>
                        <div className="stars">✨</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
