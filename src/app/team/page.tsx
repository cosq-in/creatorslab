import PageHeader from "@/components/PageHeader";

export default function TeamPage() {
    return (
        <main>
            <PageHeader title="Our Team 👥" subtitle="Meet the visionaries behind the lab" />
            <section className="content-section">
                <div className="container">
                    <div className="team-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--spacing-md)' }}>
                        {/* Member 1 */}
                        <div className="pixel-card team-member" style={{ textAlign: 'center' }}>
                            <div className="member-avatar" style={{ fontSize: '4rem', marginBottom: 'var(--spacing-sm)' }}>👩‍🔬</div>
                            {/* TODO: Upload real photo to /public/team/sarah.jpg and use <Image> */}
                            <h3 style={{ color: 'var(--primary-color)', marginBottom: 'var(--spacing-xs)' }}>Sarah Jenkins</h3>
                            <p className="member-role" style={{ color: 'var(--accent-color)', fontWeight: 'bold', marginBottom: 'var(--spacing-sm)' }}>Creative Director</p>
                            <p style={{ color: 'var(--text-muted)' }}>Over 10 years of experience in digital storytelling and brand identity. Sarah leads our creative vision with passion.</p>
                        </div>

                        {/* Member 2 */}
                        <div className="pixel-card team-member" style={{ textAlign: 'center' }}>
                            <div className="member-avatar" style={{ fontSize: '4rem', marginBottom: 'var(--spacing-sm)' }}>👨‍💻</div>
                            {/* TODO: Upload real photo to /public/team/mike.jpg and use <Image> */}
                            <h3 style={{ color: 'var(--primary-color)', marginBottom: 'var(--spacing-xs)' }}>Mike Chen</h3>
                            <p className="member-role" style={{ color: 'var(--accent-color)', fontWeight: 'bold', marginBottom: 'var(--spacing-sm)' }}>Lead Developer</p>
                            <p style={{ color: 'var(--text-muted)' }}>A chaotic good coder who turns coffee into clean, scalable websites. Mike ensures our tech stack is bulletproof.</p>
                        </div>

                        {/* Member 3 */}
                        <div className="pixel-card team-member" style={{ textAlign: 'center' }}>
                            <div className="member-avatar" style={{ fontSize: '4rem', marginBottom: 'var(--spacing-sm)' }}>🎨</div>
                            {/* TODO: Upload real photo to /public/team/alex.jpg and use <Image> */}
                            <h3 style={{ color: 'var(--primary-color)', marginBottom: 'var(--spacing-xs)' }}>Alex Rivera</h3>
                            <p className="member-role" style={{ color: 'var(--accent-color)', fontWeight: 'bold', marginBottom: 'var(--spacing-sm)' }}>Senior Designer</p>
                            <p style={{ color: 'var(--text-muted)' }}>Master of pixels and vectors. Alex crafts the stunning visuals that give Creator Labs its unique aesthetic.</p>
                        </div>

                        {/* Member 4 */}
                        <div className="pixel-card team-member" style={{ textAlign: 'center' }}>
                            <div className="member-avatar" style={{ fontSize: '4rem', marginBottom: 'var(--spacing-sm)' }}>📈</div>
                            {/* TODO: Upload real photo to /public/team/jess.jpg and use <Image> */}
                            <h3 style={{ color: 'var(--primary-color)', marginBottom: 'var(--spacing-xs)' }}>Jessica Lee</h3>
                            <p className="member-role" style={{ color: 'var(--accent-color)', fontWeight: 'bold', marginBottom: 'var(--spacing-sm)' }}>Marketing Strategist</p>
                            <p style={{ color: 'var(--text-muted)' }}>Data-driven but creatively led. Jessica ensures your content reaches the right audience at the right time.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
