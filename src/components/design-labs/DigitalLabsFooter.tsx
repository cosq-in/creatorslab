import Link from "next/link";

export default function DigitalLabsFooter() {
    return (
        <footer className="pixel-footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-col">
                        <h4>🧪 Digital Labs</h4>
                        <p style={{ color: "var(--text-muted)" }}>
                            The design &amp; product studio arm of COSQ — brand identity, UI/UX, and content strategy for ambitious teams.
                        </p>
                    </div>

                    <div className="footer-col">
                        <h4>Explore</h4>
                        <ul>
                            <li><Link href="/digital-labs/portfolio">Portfolio</Link></li>
                            <li><Link href="/digital-labs/careers">Careers</Link></li>
                            <li><Link href="/">Creators Lab</Link></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Start a Project</h4>
                        <ul>
                            <li><Link href="/digital-labs/submit-project">Submit a Brief</Link></li>
                            <li><a href="mailto:marketing@cosq.in">marketing@cosq.in</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Connect</h4>
                        <ul>
                            <li><a href="mailto:marketing@cosq.in">Email</a></li>
                            <li><a href="#">Instagram</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2026 Digital Labs by COSQ. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
