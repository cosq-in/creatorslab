"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_LINKS = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/blog", label: "Blog" },
    { href: "/team", label: "Team" },
    { href: "/contact", label: "Contact" },
];

export default function PixelNavbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    return (
        <nav className="pixel-nav">
            <div className="nav-container">
                <Link href="/" className="logo" onClick={() => setIsOpen(false)}>
                    <span className="pixel-text">🧪 CREATORS LAB</span>
                </Link>

                <ul className={`nav-menu ${isOpen ? "active" : ""}`} id="navMenu">
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
                </ul>

                <div
                    className={`hamburger ${isOpen ? "active" : ""}`}
                    id="hamburger"
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
