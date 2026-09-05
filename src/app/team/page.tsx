import PageHeader from "@/components/PageHeader";
import PixelNavbar from "@/components/PixelNavbar";
import PixelFooter from "@/components/PixelFooter";
import Link from "next/link";

export default function TeamPage() {
    return (
        <>
            <PixelNavbar />
            <main>
            <PageHeader title="Our Team 👥" subtitle="Meet the visionaries behind the lab" />
            <section className="content-section">
                <div className="container">
                    <div className="team-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--spacing-md)' }}>
                        {/* Member 1 */}
                        <div className="pixel-card team-member" style={{ textAlign: 'center' }}>
                            <div className="member-avatar" style={{ fontSize: '4rem', marginBottom: 'var(--spacing-sm)' }}>📣</div>
                            {/* TODO: Upload real photo to /public/team/soham.jpg and use <Image> */}
                            <h3 style={{ color: 'var(--primary-color)', marginBottom: 'var(--spacing-xs)' }}>Soham Patel</h3>
                            <p className="member-role" style={{ color: 'var(--accent-color)', fontWeight: 'bold', marginBottom: 'var(--spacing-sm)' }}>PR &amp; Marketing</p>
                            <p style={{ color: 'var(--text-muted)' }}>Co-founder of Creators Lab and the voice behind our brand partnerships and press. Soham keeps the agency&apos;s story sharp and our creators&apos; names in the right rooms.</p>
                        </div>

                        {/* Member 2 */}
                        <div className="pixel-card team-member" style={{ textAlign: 'center' }}>
                            <div className="member-avatar" style={{ fontSize: '4rem', marginBottom: 'var(--spacing-sm)' }}>🖥️</div>
                            {/* TODO: Upload real photo to /public/team/harshit.jpg and use <Image> */}
                            <h3 style={{ color: 'var(--primary-color)', marginBottom: 'var(--spacing-xs)' }}>Harshit Agarwal</h3>
                            <p className="member-role" style={{ color: 'var(--accent-color)', fontWeight: 'bold', marginBottom: 'var(--spacing-sm)' }}>Backend</p>
                            <p style={{ color: 'var(--text-muted)' }}>Co-founder and the engineer behind the systems that keep Creators Lab running. Harshit builds the infrastructure so the rest of the team can move fast.</p>
                        </div>

                        {/* Member 3 */}
                        <div className="pixel-card team-member" style={{ textAlign: 'center' }}>
                            <div className="member-avatar" style={{ fontSize: '4rem', marginBottom: 'var(--spacing-sm)' }}>📋</div>
                            {/* TODO: Upload real photo to /public/team/snehasis.jpg and use <Image> */}
                            <h3 style={{ color: 'var(--primary-color)', marginBottom: 'var(--spacing-xs)' }}>Snehasis Ghosh</h3>
                            <p className="member-role" style={{ color: 'var(--accent-color)', fontWeight: 'bold', marginBottom: 'var(--spacing-sm)' }}>Production Manager</p>
                            <p style={{ color: 'var(--text-muted)' }}>Founder of Creators Lab. Snehasis keeps every shoot, edit, and campaign on schedule — making sure ambitious ideas actually ship on time.</p>
                        </div>

                        {/* Member 4 */}
                        <div className="pixel-card team-member" style={{ textAlign: 'center' }}>
                            <div className="member-avatar" style={{ fontSize: '4rem', marginBottom: 'var(--spacing-sm)' }}>🎬</div>
                            {/* TODO: Upload real photo to /public/team/pritam.jpg and use <Image> */}
                            <h3 style={{ color: 'var(--primary-color)', marginBottom: 'var(--spacing-xs)' }}>Pritam Das</h3>
                            <p className="member-role" style={{ color: 'var(--accent-color)', fontWeight: 'bold', marginBottom: 'var(--spacing-sm)' }}>Production Executive</p>
                            <p style={{ color: 'var(--text-muted)' }}>On the ground for every production, handling the logistics that make a shoot day run smoothly from call time to wrap.</p>
                        </div>

                        {/* Member 5 */}
                        <div className="pixel-card team-member" style={{ textAlign: 'center' }}>
                            <div className="member-avatar" style={{ fontSize: '4rem', marginBottom: 'var(--spacing-sm)' }}>🧮</div>
                            {/* TODO: Upload real photo to /public/team/ayush.jpg and use <Image> */}
                            <h3 style={{ color: 'var(--primary-color)', marginBottom: 'var(--spacing-xs)' }}>Ayush</h3>
                            <p className="member-role" style={{ color: 'var(--accent-color)', fontWeight: 'bold', marginBottom: 'var(--spacing-sm)' }}>Accountant</p>
                            <p style={{ color: 'var(--text-muted)' }}>Keeps the numbers honest and the budgets realistic, so creators get paid on time and the agency stays healthy.</p>
                        </div>

                        {/* Member 6 */}
                        <div className="pixel-card team-member" style={{ textAlign: 'center' }}>
                            <div className="member-avatar" style={{ fontSize: '4rem', marginBottom: 'var(--spacing-sm)' }}>✏️</div>
                            {/* TODO: Upload real photo to /public/team/randeep.jpg and use <Image> */}
                            <h3 style={{ color: 'var(--primary-color)', marginBottom: 'var(--spacing-xs)' }}>Randeep Singh</h3>
                            <p className="member-role" style={{ color: 'var(--accent-color)', fontWeight: 'bold', marginBottom: 'var(--spacing-sm)' }}>Design &amp; In-House Mangaka</p>
                            <p style={{ color: 'var(--text-muted)' }}>Splits his time between brand design work and illustrating original manga-style characters in-house — including art behind our anime community projects.</p>
                        </div>

                        {/* Member 7 */}
                        <div className="pixel-card team-member" style={{ textAlign: 'center' }}>
                            <div className="member-avatar" style={{ fontSize: '4rem', marginBottom: 'var(--spacing-sm)' }}>📱</div>
                            {/* TODO: Upload real photo to /public/team/hargun.jpg and use <Image> */}
                            <h3 style={{ color: 'var(--primary-color)', marginBottom: 'var(--spacing-xs)' }}>Hargun Singh</h3>
                            <p className="member-role" style={{ color: 'var(--accent-color)', fontWeight: 'bold', marginBottom: 'var(--spacing-sm)' }}>UI/UX Designer</p>
                            <p style={{ color: 'var(--text-muted)' }}>Designs the interfaces creators actually use, obsessing over the small details that make a product feel effortless.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Join The Team */}
            <section className="content-section alt-bg">
                <div className="container">
                    <div className="join-team-box pixel-card">
                        <h2 className="gradient-heading">Join The Lab 🧪</h2>
                        <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                            We&apos;re always looking for people who obsess over great content as much as we do &mdash; whether that&apos;s a 40-minute VOD or a 9-second Short.
                        </p>
                        <h3>Open Positions</h3>
                        <ul className="positions-list">
                            <li>🎬 Short-Form Video Editor (Reels / Shorts / TikTok)</li>
                            <li>📊 Growth & Analytics Strategist</li>
                            <li>💬 Community Manager (Discord-fluent)</li>
                        </ul>
                        <Link href="/contact" className="pixel-button primary">Apply Now</Link>
                    </div>
                </div>
            </section>
            </main>
            <PixelFooter />
        </>
    );
}
