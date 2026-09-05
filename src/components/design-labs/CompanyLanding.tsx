import Link from "next/link";
import { ArrowRight, ArrowUpRight, Zap, Terminal, LayoutGrid } from "lucide-react";

const STATS = [
  { number: "250+", label: "Projects Deployed" },
  { number: "80+", label: "Global Clients" },
  { number: "12", label: "Design Awards" },
  { number: "08", label: "Years Operating" },
];

export function CompanyLanding() {
  return (
    <>
      {/* ── HERO ────────────────────────────────────────────────────────── */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <p className="hero-subtitle">🧪 Version 2.4 · Web Design &amp; Product Studio 🧪</p>
            <h1 className="pixel-title glitch" data-text="We Design The Unknown.">We Design The Unknown.</h1>
            <p className="hero-description">
              A hyper-focused digital laboratory crafting elite brand identities, immersive ecosystems, and the technical architecture of tomorrow&apos;s web.
            </p>
            <div className="hero-buttons">
              <Link href="/digital-labs/submit-project" className="pixel-button primary" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                Initiate Project <ArrowUpRight size={16} />
              </Link>
              <Link href="/digital-labs/portfolio" className="pixel-button secondary">
                View Archive
              </Link>
            </div>
          </div>
          <div className="hero-graphic">
            <div className="lab-container">
              <div className="beaker pulse">🧪</div>
              <div className="atoms">⚛️</div>
              <div className="stars">✨</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ───────────────────────────────────────────────────────── */}
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

      {/* ── CAPABILITIES ────────────────────────────────────────────────── */}
      <section className="content-section">
        <div className="container">
          <h2 className="section-title center gradient-heading">🔬 Capabilities</h2>
          <p style={{ textAlign: "center", color: "var(--text-muted)", maxWidth: "560px", margin: "0 auto var(--spacing-lg)" }}>
            We operate at the intersection of bold identity design and technical fluidity. Every engagement is tailored, never templated.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "var(--spacing-md)" }} className="dl-capabilities-grid">
            <div className="pixel-card" style={{ gridColumn: "span 2" }}>
              <div className="service-icon">🎭</div>
              <h3 style={{ color: "var(--primary-color)" }}>Brand Identity</h3>
              <p>Developing visual languages that command attention and define new standards in digital presence — logo systems, colour, typography, and voice, built to survive contact with the real world.</p>
              <Link href="/digital-labs/portfolio" className="pixel-button secondary small" style={{ marginTop: "var(--spacing-sm)", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                Explore Work <ArrowRight size={14} />
              </Link>
            </div>

            <div className="pixel-card">
              <div className="service-icon"><LayoutGrid size={40} style={{ margin: "0 auto", color: "var(--accent-color)" }} /></div>
              <h3 style={{ color: "var(--primary-color)" }}>UI/UX</h3>
              <p>High-performance interfaces designed with precision and human intuition — prototyping through to core architecture.</p>
            </div>

            <div className="pixel-card">
              <div className="service-icon"><Terminal size={40} style={{ margin: "0 auto", color: "var(--secondary-color)" }} /></div>
              <h3 style={{ color: "var(--primary-color)" }}>Content Strategy</h3>
              <p>Hyper-relevant narratives and media assets designed for deep conversion and lasting impact — copywriting to visual narrative.</p>
            </div>

            <div className="pixel-card" style={{ gridColumn: "span 2", display: "flex", flexWrap: "wrap", gap: "var(--spacing-md)", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ maxWidth: "480px" }}>
                <h3 style={{ color: "var(--primary-color)" }}>Creative Direction</h3>
                <p style={{ margin: 0 }}>Leading vision across multiple verticals to ensure cohesive, boundary-pushing results from brief to delivery.</p>
              </div>
              <Link href="/digital-labs/submit-project" className="pixel-button primary" style={{ whiteSpace: "nowrap" }}>
                Schedule Audit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────── */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Build the Future? 🚀</h2>
            <p>We&apos;re currently accepting new projects for this quarter. Let&apos;s discuss your next breakthrough.</p>
            <Link href="/digital-labs/submit-project" className="pixel-button primary large" style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}>
              Start a Project <Zap size={18} />
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 700px) {
          .dl-capabilities-grid { grid-template-columns: 1fr !important; }
          .dl-capabilities-grid > * { grid-column: span 1 !important; }
        }
      `}</style>
    </>
  );
}
