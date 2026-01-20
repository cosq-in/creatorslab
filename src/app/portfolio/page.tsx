"use client";
import PageHeader from "@/components/PageHeader";
import { useState } from 'react';

const projects = [
    { title: 'Arc Raiders Launch Campaign', cat: ['campaigns', 'games'], icon: '🚀', meta: 'Campaign • Q4 2025', desc: 'Coordinated a multi-creator launch campaign reaching 5M+ gamers across Twitch and YouTube.', stats: ['5M+ Reach', '50+ Creators', '2M Views'] },
    { title: 'Marvel Rivals Tournament', cat: ['campaigns', 'games'], icon: '🦸', meta: 'Esports Event • 2025', desc: 'Managed media coverage for a major Marvel Rivals tournament with top-tier content creators.', stats: ['100K+ Viewers', '30 Teams', '$50K Prize'] },
    { title: 'StreamerX Growth Story', cat: ['creators'], icon: '⭐', meta: 'Creator Success • 6 Months', desc: 'Helped a small streamer grow from 1K to 50K followers with strategic content and branding.', stats: ['5000% Growth', '50K Followers', 'Partnered'] },
    { title: 'Arknights Content Series', cat: ['games'], icon: '🏰', meta: 'Content Strategy • 2025', desc: 'Created a comprehensive guide series that became the #1 resource for Arknights players.', stats: ['1M+ Views', '50 Episodes', 'Top Guides'] },
    { title: 'Valorant VCT Coverage', cat: ['campaigns', 'games'], icon: '🎯', meta: 'Esports Coverage • 2025', desc: 'Provided comprehensive tournament coverage and analysis for the Valorant Champions Tour.', stats: ['3M+ Reach', 'Daily Updates', '20+ Analysts'] },
    { title: 'Influencer Collective', cat: ['creators'], icon: '💜', meta: 'Community Project • Ongoing', desc: 'Built a network of 100+ gaming influencers collaborating on cross-promotion and content.', stats: ['100+ Members', '20M+ Reach', 'Active'] },
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
                            <div key={index} className="portfolio-item pixel-card">
                                <div className="portfolio-image">
                                    <div className="portfolio-placeholder">{project.icon}</div>
                                </div>
                                <div className="portfolio-content">
                                    <h3>{project.title}</h3>
                                    <p className="portfolio-meta">{project.meta}</p>
                                    <p>{project.desc}</p>
                                    <div className="portfolio-stats">
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
