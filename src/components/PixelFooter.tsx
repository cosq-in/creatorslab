import Link from "next/link";

export default function PixelFooter() {
    return (
        <footer className="pixel-footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-col">
                        <h4>🧪 Creators Lab</h4>
                        <p style={{ color: "var(--text-muted)" }}>
                            A media agency for gamers, streamers, and everyday creators — Reels, Shorts, and everything in between.
                        </p>
                    </div>

                    <div className="footer-col">
                        <h4>Company</h4>
                        <ul>
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="/team">Our Team</Link></li>
                            <li><Link href="/blog">Blog</Link></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Work</h4>
                        <ul>
                            <li><Link href="/services">Services</Link></li>
                            <li><Link href="/portfolio">Portfolio</Link></li>
                            <li><Link href="/creative-design">Creative Design</Link></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Get In Touch</h4>
                        <ul>
                            <li><Link href="/contact">Contact Us</Link></li>
                            <li><a href="mailto:marketing@cosq.in">marketing@cosq.in</a></li>
                            <li><a href="#">discord.gg/creatorslab</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2026 Creators Lab by CosQ. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
