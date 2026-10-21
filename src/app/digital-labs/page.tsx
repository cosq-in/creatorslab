import Button from "@/components/labs/Button";
import { CAPABILITIES, MARKETING, STEPS } from "@/data/labs";
import { vars } from "@/lib/cssVars";

export default function DesignLabHome() {
    return (
        <>
            <section className="wrap" style={{ paddingTop: 72, paddingBottom: 24 }}>
                <h2 className="h2">One idea to the final post</h2>
                <p className="lead" style={{ maxWidth: 640, marginBottom: 32 }}>We design full campaigns and run them end to end.</p>
                <div className="grid">
                    {STEPS.map(([num, title, desc]) => (
                        <div key={num} className="card col">
                            <span style={{ font: "400 44px/1 var(--font-display)", color: "var(--cosq-pink)", textShadow: "2px 2px 0 var(--cosq-purple)" }}>{num}</span>
                            <h3 style={{ font: "400 24px/1.1 var(--font-display)" }}>{title}</h3>
                            <p style={{ fontSize: 17, lineHeight: 1.45 }}>{desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="wrap" style={{ paddingTop: 56, paddingBottom: 56 }}>
                <h3 className="h3" style={{ marginBottom: 8 }}>Capabilities</h3>
                <p style={{ fontSize: 17, maxWidth: 600, marginBottom: 24 }}>Bold identity design and technical fluidity. Every engagement is tailored, never templated.</p>
                <div className="grid" style={vars({ "--gap": "20px" })}>
                    {CAPABILITIES.map(([title, desc]) => (
                        <div key={title} className="card flat" style={{ padding: 20 }}>
                            <div style={{ font: "400 19px/1.1 var(--font-display)", textTransform: "uppercase", marginBottom: 8 }}>{title}</div>
                            <div style={{ fontSize: 15, lineHeight: 1.45 }}>{desc}</div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="band pink">
                <div className="inner">
                    <h2 className="h2 on-pink" style={{ marginBottom: 16 }}>How we market</h2>
                    <p className="lead on-color" style={{ maxWidth: 720, marginBottom: 32 }}>
                        Community-first campaigns for entertainment, gaming and pop-culture brands. Online and on the ground, planned together and measured at the end.
                    </p>
                    <div className="grid" style={vars({ "--min": "300px" })}>
                        {MARKETING.map(([tag, title, desc]) => (
                            <div key={title} className="card col">
                                <span className="eyebrow">{tag}</span>
                                <h4 style={{ font: "400 22px/1.1 var(--font-display)" }}>{title}</h4>
                                <p style={{ fontSize: 16, lineHeight: 1.5 }}>{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="wrap stack-on-phone" style={{ paddingTop: 72, paddingBottom: 72, display: "flex", flexWrap: "wrap", gap: 24, justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ maxWidth: 640 }}>
                    <h2 className="h2">Ready to build the future?</h2>
                    <p className="lead">We are accepting new projects this quarter. Let&apos;s discuss your next breakthrough.</p>
                </div>
                <Button href="/digital-labs/submit-project">Start a project</Button>
            </section>
        </>
    );
}
