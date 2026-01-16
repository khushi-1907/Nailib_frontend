import Navbar from "@/components/Navbar";
import Hero from "@/components/hero";
import StatsSection from "@/components/MovingStatsSection";
import CardsSection from "@/components/CardsSection";


export default function HomePage() {
  return (
    <main className="min-h-screen bg-deep-navy">
      <Navbar />
      <Hero />
      <StatsSection />
      <CardsSection />
    </main>
  );
}
