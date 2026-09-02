const SITE_URL = "https://www.fancynanciballoons.com";

/**
 * Structured data (Schema.org LocalBusiness) for local SEO.
 * Rendered as a JSON-LD script tag.
 */
export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Fancy Nanci Balloons",
    description:
      "Luxury balloon styling, organic arches, and party equipment rentals in Whittier and Southern California.",
    image: `${SITE_URL}/portfolio/logo.jpg`,
    logo: `${SITE_URL}/portfolio/logo.jpg`,
    url: SITE_URL,
    telephone: "+51939719872",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
      addressRegion: "CA",
      addressLocality: "Whittier",
    },
    areaServed: ["Whittier", "Los Angeles County", "Orange County"],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "14",
    },
    sameAs: ["https://instagram.com/fancy_nanci_balloons"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
