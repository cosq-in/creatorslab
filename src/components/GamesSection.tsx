const GAMES = [
    { icon: "🚀", title: "Arc Raiders", desc: "Epic sci-fi extraction shooter campaigns" },
    { icon: "🦸", title: "Marvel Rivals", desc: "Superhero team battle strategies" },
    { icon: "🏰", title: "Arknights", desc: "Tower defense content & guides" },
    { icon: "🎯", title: "Valorant", desc: "Tactical shooter esports coverage" },
];

export default function GamesSection() {
    return (
        <section id="games-showcase" className="games-section">
            <div className="container">
                <h2 className="section-title">🎯 Featured Games We Support</h2>
                <div className="games-grid">
                    {GAMES.map((game) => (
                        <div key={game.title} className="game-card pixel-card">
                            <div className="game-icon">{game.icon}</div>
                            <h3>{game.title}</h3>
                            <p>{game.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
