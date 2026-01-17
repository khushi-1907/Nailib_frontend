import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import UniversitiesSection from "@/components/UniversitiesSection";
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
      <UniversitiesSection />
      <EducatorShowcase />
      <CardsSection />
      <Testimonial />
      <PricingSection />
      <Footer />
    </main>
  );
}
