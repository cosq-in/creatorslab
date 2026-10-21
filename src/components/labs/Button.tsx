"use client";

import Link from "next/link";
import { useState, type CSSProperties, type MouseEventHandler, type ReactNode } from "react";

interface ButtonProps {
    variant?: "primary" | "alt";
    href?: string;
    onClick?: MouseEventHandler<HTMLElement>;
    style?: CSSProperties;
    className?: string;
    children: ReactNode;
}

// CosQ design-system button: presses into its hard shadow. Internal hrefs use
// next/link, external ones a plain <a>, and no href renders a <button>.
export default function Button({ variant = "primary", href, onClick, style, className, children }: ButtonProps) {
    const [pressed, setPressed] = useState(false);
    const alt = variant === "alt";
    const s: CSSProperties = {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        minHeight: 54,
        padding: "0 26px",
        border: "4px solid var(--cosq-purple)",
        borderRadius: 4,
        background: alt ? "#fff" : "var(--cosq-pink)",
        color: alt ? "var(--cosq-pink)" : "#fff",
        font: "400 20px var(--font-display)",
        textTransform: "uppercase",
        letterSpacing: 1,
        boxShadow: pressed ? "0 0 0 var(--cosq-purple)" : "var(--shadow-hard)",
        transform: pressed ? "translate(6px,6px)" : "none",
        cursor: "pointer",
        textDecoration: "none",
        transition: "transform .08s,box-shadow .08s",
        marginRight: 6,
        marginBottom: 6,
        ...style,
    };
    const props = {
        style: s,
        className,
        onClick,
        onMouseDown: () => setPressed(true),
        onMouseUp: () => setPressed(false),
        onMouseLeave: () => setPressed(false),
    };
    if (href?.startsWith("/")) return <Link href={href} {...props}>{children}</Link>;
    if (href) return <a href={href} {...props}>{children}</a>;
    return <button type="button" {...props}>{children}</button>;
}
