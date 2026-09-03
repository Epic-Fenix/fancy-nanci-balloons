import type { Metadata } from "next";

import FAQSection from "@/components/sections/FAQSection";
import QuoteWizard from "@/components/sections/QuoteWizard/QuoteWizard";
import ServicesSection from "@/components/sections/ServicesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";

export const metadata: Metadata = {
  title: "Get a Quote | Fancy Nanci Balloons",
  description:
    "Tell us about your event in three quick steps and send your details straight to our team on WhatsApp. Luxury balloon styling & party rentals in Whittier, CA.",
  alternates: { canonical: "/quote" },
};

export default function QuotePage() {
  return (
    <main className="flex-1 bg-brand-cream pt-6">
      <QuoteWizard />
      <ServicesSection />
      <TestimonialsSection />
      <FAQSection />
    </main>
  );
}
