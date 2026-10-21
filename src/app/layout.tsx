import type { Metadata } from "next";
import { Bungee, Outfit } from "next/font/google";
import "./globals.css";
import "@/components/labs/labs.css";

const bungee = Bungee({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

// Same weights as the CosQ design system; 600 text resolves to 700 there too.
const outfit = Outfit({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "CosQ Labs: Design Lab & Creators Lab",
  description:
    "Two wings of CosQ. Design Lab: premier design and marketing, end to end. Creators Lab: the best creators for brands, the best brands for creators.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bungee.variable} ${outfit.variable}`}>
        {children}
      </body>
    </html>
  );
}
