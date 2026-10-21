"use client";

import { useState, type FormEvent } from "react";
import { PROJECT_TYPES } from "@/data/labs";
import { submitForm, type SubmitStatus } from "@/lib/submitForm";
import { vars } from "@/lib/cssVars";

export default function StartAProject() {
    const [status, setStatus] = useState<SubmitStatus>("idle");

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        setStatus("submitting");
        const ok = await submitForm(form, "New Project Brief: Design Lab");
        setStatus(ok ? "success" : "error");
        if (ok) form.reset();
    };

    return (
        <section className="wrap grid" style={vars({ "--min": "380px", "--gap": "56px" }, { paddingTop: 56, paddingBottom: 80, alignItems: "start" })}>
            <div>
                <h2 className="h2" style={{ fontSize: "clamp(32px,4.4vw,52px)", marginBottom: 20 }}>Let&apos;s create something iconic.</h2>
                <p style={{ fontSize: 18, lineHeight: 1.6, marginBottom: 28 }}>
                    Tell us about your brand vision and we&apos;ll help you bring it to life with world-class design and technical precision.
                </p>
                <div style={{ display: "flex", justifyContent: "space-between", padding: "14px 0", borderBottom: "3px solid var(--cosq-pink-light)" }}>
                    <span style={{ font: "400 13px var(--font-display)", textTransform: "uppercase" }}>Response time</span>
                    <span style={{ font: "700 18px var(--font-body)" }}>&lt; 24 hrs</span>
                </div>
            </div>
            <form onSubmit={onSubmit} className="form">
                <input required name="company" placeholder="Company name" aria-label="Company name" />
                <input required name="contact" placeholder="Contact person" aria-label="Contact person" />
                <input required type="email" name="email" placeholder="you@company.com" aria-label="Email" />
                <select required name="type" defaultValue="" aria-label="Project type">
                    <option value="">What are we building?</option>
                    {PROJECT_TYPES.map(t => <option key={t}>{t}</option>)}
                </select>
                <textarea required name="vision" rows={6} placeholder="Project vision and goals" aria-label="Project vision and goals" />
                <button type="submit" className="form-submit" disabled={status === "submitting"}>
                    {status === "submitting" ? "Sending…" : "Send to Design Lab"}
                </button>
                {status === "success" && <p className="form-status">Brief received. We&apos;ll reply within 24 hours.</p>}
                {status === "error" && <p className="form-status error">That didn&apos;t send. Please try again, or email info@cosq.in.</p>}
            </form>
        </section>
    );
}
