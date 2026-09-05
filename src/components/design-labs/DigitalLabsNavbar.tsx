"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_LINKS = [
    { href: "/digital-labs", label: "Home" },
    { href: "/digital-labs/portfolio", label: "Portfolio" },
    { href: "/digital-labs/careers", label: "Careers" },
    { href: "/digital-labs/submit-project", label: "Submit a Project" },
];

export default function DigitalLabsNavbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    return (
        <nav className="pixel-nav">
            <div className="nav-container">
                <Link href="/digital-labs" className="logo" onClick={() => setIsOpen(false)}>
                    <span className="pixel-text">🧪 DIGITAL LABS</span>
                </Link>

                <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
                    {NAV_LINKS.map(({ href, label }) => (
                        <li key={href}>
                            <Link
                                href={href}
                                className={pathname === href ? "active" : ""}
                                onClick={() => setIsOpen(false)}
                            >
                                {label}
                            </Link>
                        </li>
                    ))}
                    <li>
                        <Link href="/" onClick={() => setIsOpen(false)}>Creators Lab ⇄</Link>
                    </li>
                </ul>

                <div
                    className={`hamburger ${isOpen ? "active" : ""}`}
                    onClick={() => setIsOpen((v) => !v)}
                    role="button"
                    tabIndex={0}
                    aria-label="Toggle menu"
                    aria-expanded={isOpen}
                    onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") setIsOpen((v) => !v);
                    }}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    );
}
