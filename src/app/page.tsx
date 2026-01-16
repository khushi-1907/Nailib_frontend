import Navbar from "@/components/Navbar";
import Hero from "@/components/hero";
import StatsSection from "../components/MovingStatsSection";


export default function HomePage() {
  return (
    <main className="min-h-screen bg-deep-navy">
      <Navbar />
      <Hero />
      <StatsSection />
    </main>
  );
}
