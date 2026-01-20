import PageHeader from "@/components/PageHeader";

export default function TeamPage() {
    return (
        <main>
            <PageHeader title="Our Team 👥" subtitle="Meet the masterminds" />
            <section className="content-section">
                <div className="container">
                    <div className="team-grid">
                        <div className="pixel-card team-member">
                            <div className="member-avatar">👨‍🔬</div>
                            <h3>Dr. Disrespect (Just kidding)</h3>
                            <p className="member-role">Head Scientist</p>
                        </div>
                        <div className="pixel-card team-member">
                            <div className="member-avatar">👩‍💻</div>
                            <h3>The Coder</h3>
                            <p className="member-role">Tech Lead</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
