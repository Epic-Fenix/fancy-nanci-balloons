import Footer from "@/components/common/Footer";
import BackToTop from "@/components/common/BackToTop";
import Navbar from "@/components/common/Navbar";
import WhatsAppFloating from "@/components/common/WhatsAppFloating";
import HeroSection from "@/components/sections/HeroSection";
import AcademySection from "@/components/sections/AcademySection";
import PortfolioGallery from "@/components/sections/PortfolioGallery";
import RentalsSection from "@/components/sections/RentalsSection";
import QuoteWizard from "@/components/sections/QuoteWizard/QuoteWizard";
import ServicesSection from "@/components/sections/ServicesSection";
import FAQSection from "@/components/sections/FAQSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-brand-cream">
        <HeroSection />
        <ServicesSection />
        <PortfolioGallery />
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
