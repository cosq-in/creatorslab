"use client";

import { useState, type FormEvent } from "react";
import Button from "@/components/labs/Button";
import { PERKS, POSITIONS } from "@/data/labs";
import { submitForm, type SubmitStatus } from "@/lib/submitForm";
import { vars } from "@/lib/cssVars";

export default function Careers() {
    const [posId, setPosId] = useState<number | null>(null);
    const [status, setStatus] = useState<SubmitStatus>("idle");
    const pos = POSITIONS.find(p => p.id === posId);

    const openPosition = (id: number | null) => {
        setPosId(id);
        setStatus("idle");
        window.scrollTo(0, 0);
    };

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!pos) return;
        const form = e.currentTarget;
        setStatus("submitting");
        const ok = await submitForm(form, `Job application: ${pos.title}`, { position: pos.title });
        setStatus(ok ? "success" : "error");
        if (ok) form.reset();
    };

    return (
        <>
            <section className="wrap" style={{ paddingTop: 56, paddingBottom: 24 }}>
                {!pos ? (
                    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                        {POSITIONS.map(p => (
                            <div key={p.id} className="card careers-row">
                                <div style={{ flex: 1, minWidth: 260 }}>
                                    <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 10 }}>
                                        <span className="tag-pink">{p.category}</span>
                                        <span style={{ font: "600 14px var(--font-body)" }}>{p.location}</span>
                                    </div>
                                    <h3 style={{ font: "400 24px/1.1 var(--font-display)", margin: "0 0 8px" }}>{p.title}</h3>
                                    <p style={{ fontSize: 16, lineHeight: 1.5, maxWidth: 620 }}>{p.description}</p>
                                </div>
                                <div className="careers-side">
                                    <div style={{ font: "400 22px var(--font-display)" }}>{p.salary}</div>
                                    <div style={{ font: "700 12px var(--font-body)", textTransform: "uppercase", margin: "4px 0 12px" }}>{p.type}</div>
                                    <Button onClick={() => openPosition(p.id)}>Apply now</Button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <>
                        <button type="button" className="back-link" onClick={() => openPosition(null)}>← Back to positions</button>
                        <div className="grid" style={vars({ "--min": "380px", "--gap": "48px" }, { marginTop: 24, alignItems: "start" })}>
                            <div>
                                <h2 style={{ font: "400 clamp(30px,4vw,48px)/1 var(--font-display)", margin: "0 0 16px" }}>{pos.title}</h2>
                                <div style={{ font: "600 15px var(--font-body)", marginBottom: 24 }}>{pos.location} · {pos.type} · {pos.experience}</div>
                                <h4 style={{ font: "400 16px var(--font-display)", margin: "0 0 8px" }}>Role description</h4>
                                <p style={{ fontSize: 17, lineHeight: 1.6, marginBottom: 24 }}>{pos.description}</p>
                                <h4 style={{ font: "400 16px var(--font-display)", margin: "0 0 10px" }}>Requirements</h4>
                                {pos.requirements.map(r => (
                                    <div key={r} style={{ padding: "8px 0", borderBottom: "3px solid var(--cosq-pink-light)", font: "600 16px var(--font-body)" }}>{r}</div>
                                ))}
                            </div>
                            <form onSubmit={onSubmit} className="form" style={{ padding: 28, gap: 16 }}>
                                <h3 style={{ font: "400 20px var(--font-display)" }}>Application</h3>
                                <input required name="name" placeholder="Full name" aria-label="Full name" />
                                <input required type="email" name="email" placeholder="you@email.com" aria-label="Email" />
                                <input required type="url" name="portfolio" placeholder="Portfolio URL" aria-label="Portfolio URL" />
                                <button type="submit" className="form-submit" disabled={status === "submitting"}>
                                    {status === "submitting" ? "Sending…" : "Submit application"}
                                </button>
                                {status === "success" && <p className="form-status">Application received. Our team will be in touch soon.</p>}
                                {status === "error" && <p className="form-status error">That didn&apos;t send. Please try again, or email info@cosq.in.</p>}
                            </form>
                        </div>
                    </>
                )}
            </section>

            <section className="band pink open-bottom" style={{ marginTop: 56 }}>
                <div className="inner">
                    <h2 className="h2 on-pink">Why design with us?</h2>
                    <p style={{ font: "500 18px/1.5 var(--font-body)", color: "#fff", maxWidth: 520, marginBottom: 28 }}>
                        More than a job: a creative laboratory where you experiment, fail, and succeed at the highest level.
                    </p>
                    <div className="grid" style={vars({ "--min": "240px", "--gap": "20px" })}>
                        {PERKS.map(([title, sub]) => (
                            <div key={title} className="card">
                                <div style={{ font: "400 20px var(--font-display)", textTransform: "uppercase" }}>{title}</div>
                                <div style={{ font: "600 14px var(--font-body)", marginTop: 6 }}>{sub}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
