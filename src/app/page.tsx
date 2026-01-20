import Hero from "@/components/Hero";
import GamesSection from "@/components/GamesSection";
import ServicesPreview from "@/components/ServicesPreview";
import StatsSection from "@/components/StatsSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <main>
      <Hero />
      <GamesSection />
      <ServicesPreview />
      <StatsSection />
      <CTASection />
    </main>
  );
}
