import type { CSSProperties } from "react";

// Inline CSS custom properties, e.g. vars({ "--min": "300px" }) for .grid.
export const vars = (v: Record<`--${string}`, string>, style: CSSProperties = {}): CSSProperties => ({ ...v, ...style } as CSSProperties);
