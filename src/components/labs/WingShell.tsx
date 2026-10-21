"use client";

import { useEffect, useState, type MouseEvent, type ReactNode } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Button from "./Button";
import Chip from "./Chip";
import Burst, { BURST_MS, originFrom, type BurstOrigin } from "./Burst";
import { WINGS, type Wing } from "@/data/labs";

// The tab that owns a path: case studies belong to Portfolio, posts to Blog.
function activeTab(wing: Wing, path: string) {
    const tabs = WINGS[wing].tabs.map(([href]) => href as string);
    if (tabs.includes(path)) return path;
    return tabs.filter(t => t !== WINGS[wing].home && path.startsWith(t + "/")).sort((a, b) => b.length - a.length)[0];
}

// Shared frame for every page of a wing: coloured nav + hero, page content,
// footer. Mounted once per wing entry, so the hero animates in on arrival.
export default function WingShell({ wing, children }: { wing: Wing; children: ReactNode }) {
    const w = WINGS[wing];
    const other: Wing = wing === "design" ? "creators" : "design";
    const path = usePathname();
    const router = useRouter();
    const [shown, setShown] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [burst, setBurst] = useState<BurstOrigin | null>(null);

    useEffect(() => {
        const t = setTimeout(() => setShown(true), 60);
        return () => clearTimeout(t);
    }, []);

    const isHome = path === w.home;
    const active = activeTab(wing, path);
    const titles = w.titles as Record<string, readonly [string, string]>;
    const [heading, sub] = isHome ? [w.heading, w.sub] : titles[path] ?? titles[active ?? ""] ?? ["", ""];

    const switchWing = (e: MouseEvent) => {
        if (burst) return;
        setBurst(originFrom(e, WINGS[other].color));
        setTimeout(() => router.push(WINGS[other].home), BURST_MS);
    };

    const fade = (delay: number) => ({
        opacity: shown ? 1 : 0,
        transform: `translateY(${shown ? 0 : 28}px)`,
        transition: `opacity .7s ${delay}s, transform .7s ${delay}s`,
    });

    return (
        <div className={`wing wing-${wing}`}>
            <div className="wing-top" style={{ background: w.color }}>
                <nav className="wing-nav" style={{ opacity: shown ? 1 : 0 }}>
                    <Link href={w.home} className="wing-brand">
                        <img src="/icon.png" alt="CosQ" />
                        <span>{w.name}</span>
                    </Link>
                    <button
                        type="button"
                        className="wing-menu-toggle"
                        aria-expanded={menuOpen}
                        aria-controls="wing-tabs"
                        onClick={() => setMenuOpen(o => !o)}
                    >
                        {menuOpen ? "Close" : "Menu"}
                    </button>
                    <div id="wing-tabs" className={`wing-tabs${menuOpen ? " is-open" : ""}`} onClick={() => setMenuOpen(false)}>
                        {w.tabs.map(([href, label]) => (
                            <Link key={href} href={href} className={`wing-tab${active === href ? " is-active" : ""}`}>
                                {label}
                            </Link>
                        ))}
                        <button type="button" className="wing-switch" onClick={switchWing}>
                            {w.otherName} →
                        </button>
                    </div>
                </nav>
                <div className={`wing-hero${isHome ? " is-home" : ""}`}>
                    <div style={fade(0.15)}>
                        <Chip color="var(--cosq-purple)">{w.tag}</Chip>
                    </div>
                    <h1 style={fade(0.3)}>{heading}</h1>
                    <p style={fade(0.45)}>{sub}</p>
                    {isHome && (
                        <div className="wing-ctas" style={{ opacity: shown ? 1 : 0, transition: "opacity .7s .6s" }}>
                            <Button variant="alt" href={w.cta1.href}>{w.cta1.label}</Button>
                            <Button href={w.cta2.href}>{w.cta2.label}</Button>
                        </div>
                    )}
                </div>
            </div>

            <main>{children}</main>

            <footer className="wing-footer" style={{ background: w.color }}>
                <div className="wing-footer-row">
                    <div>
                        <h2>Let&apos;s make it an event</h2>
                        <p>CosQ Entertainment, founded by the former leaders and core admin team of Odisha Anime Club.</p>
                    </div>
                    <div className="wing-footer-ctas">
                        <Button variant="alt" href="mailto:info@cosq.in">info@cosq.in</Button>
                        <Button href="https://instagram.com/the.cosq">@the.cosq</Button>
                    </div>
                </div>
                <div className="wing-copy">© 2026 CosQ. All rights reserved.</div>
            </footer>

            {burst && <Burst origin={burst} />}
        </div>
    );
}
