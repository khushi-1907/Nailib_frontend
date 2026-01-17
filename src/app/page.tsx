import Navbar from "@/components/Navbar";
import Hero from "@/components/hero";
import StatsSection from "@/components/MovingStatsSection";
import CardsSection from "@/components/CardsSection";
import EducatorShowcase from "@/components/EducatorShowcase";


export default function HomePage() {
  return (
    <main className="min-h-screen bg-deep-navy">
      <Navbar />
      <Hero />
      <StatsSection />
      <CardsSection />
      <EducatorShowcase />
    </main>
  );
}
