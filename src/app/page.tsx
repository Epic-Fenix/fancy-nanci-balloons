import BackToTop from "@/components/common/BackToTop";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import StickyNav from "@/components/common/StickyNav";
import WhatsAppFloating from "@/components/common/WhatsAppFloating";
import AcademySection from "@/components/sections/AcademySection";
import HeroSection from "@/components/sections/HeroSection";
import PortfolioGallery from "@/components/sections/PortfolioGallery";
import QuoteWizard from "@/components/sections/QuoteWizard/QuoteWizard";
import RentalsSection from "@/components/sections/RentalsSection";
import ReelsShowcase from "@/components/sections/ReelsShowcase";
import ServicesSection from "@/components/sections/ServicesSection";
import FAQSection from "@/components/sections/FAQSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <StickyNav />
      <main className="bg-brand-cream">
        <HeroSection />
        <ServicesSection />
        <div id="portfolio" className="scroll-mt-24" />
        <PortfolioGallery />
        <ReelsShowcase />
        <RentalsSection />
        <AcademySection />
        <QuoteWizard />
        <TestimonialsSection />
        <FAQSection />
      </main>
      <Footer />
      <WhatsAppFloating />
      <BackToTop />
    </>
  );
}
