import Link from 'next/link';

export default function Hero() {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero-content">
                    <h1 className="pixel-title glitch" data-text="CREATORS LAB by CosQ">CREATORS LAB by CosQ</h1>
                    <p className="hero-subtitle">🎮 Your Partner in Gaming Excellence 🎮</p>
                    <p className="hero-description">
                        Empowering gamers, streamers, influencers, and content creators to reach new heights!
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
