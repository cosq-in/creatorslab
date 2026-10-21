"use client";

import { useState, type FormEvent } from "react";
import { CONTACT_ROLES } from "@/data/labs";
import { submitForm, type SubmitStatus } from "@/lib/submitForm";
import { vars } from "@/lib/cssVars";

export default function ContactPage() {
    const [status, setStatus] = useState<SubmitStatus>("idle");

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        setStatus("submitting");
        const ok = await submitForm(form, "Creators Lab enquiry");
        setStatus(ok ? "success" : "error");
        if (ok) form.reset();
    };

    return (
        <section className="wrap grid" style={vars({ "--min": "380px", "--gap": "56px" }, { paddingTop: 56, paddingBottom: 80, alignItems: "start" })}>
            <div>
                <h2 className="h2" style={{ fontSize: "clamp(32px,4.4vw,52px)", marginBottom: 20 }}>Talk to Creators Lab</h2>
                <p style={{ fontSize: 18, lineHeight: 1.6, marginBottom: 20 }}>
                    Brand looking for creators, or creator looking for brands. Tell us where you are and we&apos;ll take it from there.
                </p>
                <div style={{ font: "700 17px var(--font-body)", marginBottom: 6 }}>info@cosq.in</div>
                <div style={{ font: "700 17px var(--font-body)" }}>@the.cosq on Instagram</div>
            </div>
            <form onSubmit={onSubmit} className="form">
                <input required name="name" placeholder="Your name" aria-label="Your name" />
                <input required type="email" name="email" placeholder="you@email.com" aria-label="Email" />
                <select required name="who" defaultValue="" aria-label="I am a">
                    <option value="">I am a...</option>
                    {CONTACT_ROLES.map(r => <option key={r}>{r}</option>)}
                </select>
                <textarea required name="msg" rows={5} placeholder="Tell us about your goals" aria-label="Your goals" />
                <button
                    type="submit"
                    className="form-submit"
                    disabled={status === "submitting"}
                    style={{ background: "var(--cosq-purple)", borderColor: "var(--cosq-pink)", boxShadow: "6px 6px 0 var(--cosq-purple-deep)" }}
                >
                    {status === "submitting" ? "Sending…" : "Send message"}
                </button>
                {status === "success" && <p className="form-status">Message sent. We&apos;ll get back to you soon.</p>}
                {status === "error" && <p className="form-status error">That didn&apos;t send. Please try again, or email info@cosq.in.</p>}
            </form>
        </section>
    );
}
