import Navbar from "@/components/Navbar";
import Hero from "@/components/hero";
import StatsSection from "@/components/MovingStatsSection";
import CardsSection from "@/components/CardsSection";
import EducatorShowcase from "@/components/EducatorShowcase";
import Testimonial from "@/components/Testimonial";
import PricingSection from "@/components/Pricing";
import Footer from "@/components/Footer";


export default function HomePage() {
  return (
    <main className="min-h-screen bg-deep-navy">
      <Navbar />
      <Hero />
      <StatsSection />
      <CardsSection />
      <EducatorShowcase />
      <Testimonial />
      <PricingSection />
      <Footer />
    </main>
  );
}
