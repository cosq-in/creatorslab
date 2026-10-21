import Button from "@/components/labs/Button";
import { PLANS, SERVICES } from "@/data/labs";
import { vars } from "@/lib/cssVars";

const SUBHEAD = { font: "400 14px var(--font-display)", color: "var(--cosq-pink)", margin: "0 0 6px" };

export default function ServicesPage() {
    return (
        <>
            <section className="wrap" style={{ paddingTop: 56, paddingBottom: 24, display: "flex", flexDirection: "column", gap: 32 }}>
                {SERVICES.map(s => (
                    <div key={s.title} className="card" style={{ padding: 32 }}>
                        <h3 style={{ font: "400 28px/1.1 var(--font-display)", margin: "0 0 6px" }}>{s.title}</h3>
                        <div style={{ font: "700 17px var(--font-body)", color: "var(--cosq-pink)", marginBottom: 16 }}>{s.tagline}</div>
                        <p style={{ fontSize: 17, lineHeight: 1.6, marginBottom: 20, maxWidth: 760 }}>{s.body}</p>
                        <div className="grid" style={vars({ "--gap": "20px" }, { marginBottom: 20 })}>
                            <div>
                                <h4 style={SUBHEAD}>Target audience</h4>
                                <p style={{ fontSize: 15, lineHeight: 1.5 }}>{s.audience}</p>
                            </div>
                            <div>
                                <h4 style={SUBHEAD}>Value proposition</h4>
                                <p style={{ fontSize: 15, lineHeight: 1.5 }}>{s.value}</p>
                            </div>
                        </div>
                        <h4 style={{ font: "400 14px var(--font-display)", margin: "0 0 8px" }}>Scope of service</h4>
                        {s.scope.map(([k, v]) => (
                            <div key={k} style={{ padding: "6px 0", fontSize: 16 }}><strong>{k}:</strong> {v}</div>
                        ))}
                    </div>
                ))}
            </section>
            <section className="band pink" style={{ marginTop: 48 }}>
                <div className="inner">
                    <h2 className="h2 on-pink">Plans for every creator</h2>
                    <p style={{ font: "500 18px/1.5 var(--font-body)", color: "#fff", maxWidth: 620, marginBottom: 28 }}>
                        Whether you&apos;re just starting your first Shorts channel or running an established esports roster, there&apos;s a plan built for where you are.
                    </p>
                    <div className="grid" style={vars({ "--min": "280px" })}>
                        {PLANS.map(p => (
                            <div key={p.tier} className="card col stack-on-phone" style={{ gap: 12 }}>
                                <span style={{ font: "400 12px var(--font-display)", textTransform: "uppercase", color: "var(--cosq-pink)" }}>{p.badge}</span>
                                <div style={{ font: "400 26px var(--font-display)", textTransform: "uppercase" }}>{p.tier}</div>
                                {p.items.map(i => <div key={i} style={{ fontSize: 16, lineHeight: 1.4 }}>{i}</div>)}
                                <Button href="/contact">{p.cta}</Button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
