import { VALUES } from "@/data/labs";
import { vars } from "@/lib/cssVars";

export default function AboutPage() {
    return (
        <>
            <section className="wrap" style={{ paddingTop: 64, paddingBottom: 24 }}>
                <div className="eyebrow" style={{ fontSize: 14, marginBottom: 12 }}>Empowering creators</div>
                <h2 className="h2 plain" style={{ marginBottom: 20 }}>Our mission</h2>
                <p style={{ fontSize: 19, lineHeight: 1.65, maxWidth: 760, marginBottom: 16 }}>
                    Content creation is a lonely road. Burnout is real, algorithms are confusing, and monetization is hard. We exist to solve these problems, whether you&apos;re grinding ranked on stream or cutting your next Reel.
                </p>
                <p style={{ fontSize: 19, lineHeight: 1.65, maxWidth: 760 }}>
                    <strong>Our purpose</strong> is to provide the infrastructure, strategy, and support that allows creators to do what they do best: create. We handle the business, the data, and the tech so you can handle the community.
                </p>
            </section>
            <section className="band purple open-bottom" style={{ marginTop: 56 }}>
                <div className="inner">
                    <h2 className="h2 on-purple" style={{ marginBottom: 28 }}>Core values</h2>
                    <div className="grid" style={vars({ "--min": "280px", "--gap": "24px" })}>
                        {VALUES.map(([title, desc]) => (
                            <div key={title} className="card flat pink-border">
                                <h3 style={{ font: "400 22px/1.1 var(--font-display)", margin: "0 0 10px" }}>{title}</h3>
                                <p style={{ fontSize: 17, lineHeight: 1.5 }}>{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
