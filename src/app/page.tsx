"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Hero from "@/components/Hero";
import GamesSection from "@/components/GamesSection";
import EverydayCreatorsSection from "@/components/EverydayCreatorsSection";
import ServicesPreview from "@/components/ServicesPreview";
import StatsSection from "@/components/StatsSection";
import CTASection from "@/components/CTASection";
import PixelNavbar from "@/components/PixelNavbar";
import PixelFooter from "@/components/PixelFooter";
import SplashGate from "@/components/SplashGate";

export default function Home() {
  const router = useRouter();
  const [showSplash, setShowSplash] = useState(true);

  if (showSplash) {
    return (
      <SplashGate
        onSelect={(choice) => {
          if (choice === "design") {
            router.push("/digital-labs");
          } else {
            setShowSplash(false);
          }
        }}
      />
    );
  }

  return (
    <>
      <PixelNavbar />
      <main>
        <Hero />
        <GamesSection />
        <EverydayCreatorsSection />
        <ServicesPreview />
        <StatsSection />
        <CTASection />
      </main>
      <PixelFooter />
    </>
  );
}
