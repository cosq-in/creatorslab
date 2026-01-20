"use client";
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="pixel-footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-col">
                        <h4>🧪 Creators Lab</h4>
                        <p>Empowering the next generation of gaming content creators.</p>
                    </div>
                    <div className="footer-col">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="/services">Services</Link></li>
                            <li><Link href="/portfolio">Portfolio</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Connect</h4>
                        <ul>
                            <li><a href="#">Twitter</a></li>
                            <li><a href="#">Discord</a></li>
                            <li><a href="#">YouTube</a></li>
                            <li><a href="#">Twitch</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Newsletter</h4>
                        <p>Stay updated with gaming trends!</p>
                        <form className="newsletter-form" onSubmit={(e) => { e.preventDefault(); alert('Subscribed!'); }}>
                            <input type="email" placeholder="Your email" className="pixel-input" />
                            <button type="submit" className="pixel-button small">Subscribe</button>
                        </form>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2026 Creators Lab by CosQ. All rights reserved. Made with 💜 for gamers.</p>
                </div>
            </div>
        </footer>
    );
}
