import Button from "@/components/labs/Button";
import { OPEN_ROLES, TEAM } from "@/data/labs";

export default function TeamPage() {
    return (
        <>
            <section className="wrap" style={{ paddingTop: 56, paddingBottom: 24 }}>
                <div className="grid">
                    {TEAM.map(([name, role, desc]) => (
                        <div key={name} className="card">
                            <div style={{ width: 64, height: 64, border: "4px solid var(--cosq-purple)", background: "var(--cosq-pink)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", font: "400 30px var(--font-display)", marginBottom: 14, transform: "rotate(-3deg)" }}>{name[0]}</div>
                            <h3 style={{ font: "400 21px/1.1 var(--font-display)", margin: "0 0 6px" }}>{name}</h3>
                            <div style={{ font: "700 15px var(--font-body)", color: "var(--cosq-pink)", marginBottom: 8 }}>{role}</div>
                            <p style={{ fontSize: 15, lineHeight: 1.5 }}>{desc}</p>
                        </div>
                    ))}
                </div>
            </section>
            <section className="band pink open-bottom" style={{ marginTop: 56 }}>
                <div className="inner stack-on-phone">
                    <h2 className="h2 on-pink">Join the lab</h2>
                    <p style={{ font: "500 18px/1.5 var(--font-body)", color: "#fff", maxWidth: 600, marginBottom: 24 }}>
                        We&apos;re always looking for people who obsess over great content as much as we do, whether that&apos;s a 40-minute VOD or a 9-second Short.
                    </p>
                    <h3 style={{ font: "400 20px var(--font-display)", color: "#fff", margin: "0 0 12px" }}>Open positions</h3>
                    <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 24 }}>
                        {OPEN_ROLES.map(r => <div key={r} className="card flat" style={{ padding: "12px 16px", font: "600 16px var(--font-body)" }}>{r}</div>)}
                    </div>
                    <Button variant="alt" href="/contact">Apply now</Button>
                </div>
            </section>
        </>
    );
}
