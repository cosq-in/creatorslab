const STATS = [
    { number: "2+", label: "Creators" },
    { number: "5k+", label: "Total Reach" },
    { number: "1+", label: "Campaigns" },
    { number: "24/7", label: "Support" },
];

export default function StatsSection() {
    return (
        <section className="stats-section">
            <div className="container">
                <div className="stats-grid">
                    {STATS.map((s) => (
                        <div key={s.label} className="stat-box">
                            <div className="stat-number">{s.number}</div>
                            <div className="stat-label">{s.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
