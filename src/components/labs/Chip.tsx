import type { CSSProperties, ReactNode } from "react";

export default function Chip({ color = "var(--cosq-pink)", children, style }: { color?: string; children: ReactNode; style?: CSSProperties }) {
    return (
        <span
            style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "4px 14px",
                border: "3px solid var(--cosq-purple)",
                borderRadius: 4,
                background: color,
                color: "#fff",
                font: "400 14px var(--font-display)",
                letterSpacing: 1,
                textTransform: "uppercase",
                transform: "skewX(-8deg)",
                ...style,
            }}
        >
            {children}
        </span>
    );
}
