"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import GamesSection from "@/components/GamesSection";
import ServicesPreview from "@/components/ServicesPreview";
import StatsSection from "@/components/StatsSection";
import CTASection from "@/components/CTASection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SplashGate from "@/components/SplashGate";
import DesignLabsApp from "@/components/design-labs/DesignLabsApp";
import "./design-labs.css";

export default function Home() {
  const [view, setView] = useState<"splash" | "design" | "creators">("splash");

  if (view === "splash") {
    return <SplashGate onSelect={(choice) => setView(choice)} />;
  }

  if (view === "design") {
    return (
      <main className="design-labs-theme">
        <DesignLabsApp />
      </main>
    );
  }

  return (
    <div className="bg-[#050505] text-[#e5e2e1] min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <GamesSection />
        <ServicesPreview />
      </main>
      <Footer />
    </div>
  );
}
