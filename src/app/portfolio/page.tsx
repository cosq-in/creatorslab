"use client";
import PageHeader from "@/components/PageHeader";
import { useState } from 'react';

const projects = [
    {
        title: 'Arc Raiders Launch Campaign',
        cat: ['campaigns', 'games'],
        icon: '🚀',
        client: 'Embark Studios',
        workType: 'Launch Strategy',
        toolsUsed: ['Twitch', 'YouTube', 'Discord'],
        meta: 'Campaign • Q4 2025',
        desc: 'Coordinated a massive multi-creator launch campaign reaching over 5 million unique gamers. We managed the entire lifecycle from creator selection to analytics reporting.',
        stats: ['5M+ Reach', '50+ Creators', '2M Views']
    },
    {
        title: 'Marvel Rivals Tournament',
        cat: ['campaigns', 'games'],
        icon: '🦸',
        client: 'NetEase Games',
        workType: 'Esports Event',
        toolsUsed: ['OBS', 'Twitter', 'Twitch'],
        meta: 'Esports Event • 2025',
        desc: 'Managed end-to-end media coverage for the "Clash of Rivals" tournament. Our team handled live social updates, highlight reel production, and creator coordination.',
        stats: ['100K+ Viewers', '30 Teams', '$50K Prize']
    },
    {
        title: 'StreamerX Growth Story',
        cat: ['creators'],
        icon: '⭐',
        client: 'StreamerX',
        workType: 'Channel Growth',
        toolsUsed: ['Analytics', 'Branding', 'Coaching'],
        meta: 'Creator Success • 6 Months',
        desc: 'Partnered with an up-and-coming variety streamer to overhaul their brand identity. Implemented data-driven content strategies that resulted in explosive growth.',
        stats: ['5000% Growth', '50K Followers', 'Partnered']
    },
    {
        title: 'Arknights Content Series',
        cat: ['games'],
        icon: '🏰',
        client: 'Yostar',
        workType: 'Content Production',
        toolsUsed: ['Premiere Pro', 'After Effects', 'Photoshop'],
        meta: 'Content Strategy • 2025',
        desc: 'Produced a 50-episode deep-dive strategy series. This project established the client as the go-to source for high-quality, educational game content.',
        stats: ['1M+ Views', '50 Episodes', 'Top Guides']
    },
    {
        title: 'Valorant VCT Coverage',
        cat: ['campaigns', 'games'],
        icon: '🎯',
        client: 'Riot Games',
        workType: 'Live Coverage',
        toolsUsed: ['Twitter API', 'Live Blog', 'Photography'],
        meta: 'Esports Coverage • 2025',
        desc: 'Provided real-time comprehensive tournament coverage. Our live team pushed updates faster than any other outlet, capturing key moments as they happened.',
        stats: ['3M+ Reach', 'Daily Updates', '20+ Analysts']
    },
    {
        title: 'Influencer Collective',
        cat: ['creators'],
        icon: '💜',
        client: 'Internal Project',
        workType: 'Community Building',
        toolsUsed: ['Discord', 'Notion', 'Zapier'],
        meta: 'Community Project • Ongoing',
        desc: 'Built a proprietary network of 100+ vetted gaming influencers. This collective facilitates seamless cross-promotion and collaborative content opportunities.',
        stats: ['100+ Members', '20M+ Reach', 'Active']
    },
];

export default function PortfolioPage() {
    const [filter, setFilter] = useState('all');

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(p => p.cat.includes(filter));

    return (
        <main>
            <PageHeader title="Our Portfolio 🏆" subtitle="Successful campaigns and happy creators" />

            <section className="content-section">
                <div className="container">
                    <div className="portfolio-filters">
                        {['all', 'campaigns', 'creators', 'games'].map(f => (
                            <button
                                key={f}
                                className={`filter-btn ${filter === f ? 'active' : ''}`}
                                onClick={() => setFilter(f)}
                                style={{ textTransform: 'capitalize' }}
                            >
                                {f === 'all' ? 'All Projects' : f}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            <section className="content-section">
                <div className="container">
                    <div className="portfolio-grid">
                        {filteredProjects.map((project, index) => (
                            <div key={index} className="portfolio-item pixel-card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                                <div className="portfolio-image" style={{ position: 'relative' }}>
                                    <div className="portfolio-placeholder">{project.icon}</div>
                                    <div style={{ position: 'absolute', top: '10px', right: '10px', background: 'var(--bg-card)', padding: '0.2rem 0.5rem', border: '1px solid var(--border-color)', fontSize: '0.8rem', color: 'var(--accent-color)' }}>
                                        {project.client}
                                    </div>
                                </div>
                                <div className="portfolio-content" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                                    <div style={{ marginBottom: '0.5rem' }}>
                                        <span style={{ fontSize: '0.8rem', color: 'var(--primary-color)', textTransform: 'uppercase', fontWeight: 'bold' }}>{project.workType}</span>
                                    </div>
                                    <h3>{project.title}</h3>
                                    <p className="portfolio-meta" style={{ marginBottom: '1rem' }}>{project.meta}</p>
                                    <p style={{ marginBottom: '1.5rem', flex: 1 }}>{project.desc}</p>

                                    <div style={{ marginBottom: '1rem' }}>
                                        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.3rem' }}>Tools Used:</div>
                                        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                            {project.toolsUsed.map((tool, i) => (
                                                <span key={i} style={{ fontSize: '0.7rem', border: '1px solid var(--text-muted)', padding: '0.1rem 0.4rem', borderRadius: '4px' }}>{tool}</span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="portfolio-stats" style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1rem', marginTop: 'auto' }}>
                                        {project.stats.map((stat, i) => (
                                            <span key={i} className="stat-badge">{stat}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
