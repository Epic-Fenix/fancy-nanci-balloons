/**
 * Frequently asked questions for Fancy Nanci Balloons (Southern California).
 */
export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  {
    id: "book-advance",
    question: "How far in advance should I book?",
    answer:
      "We recommend booking 2–4 weeks in advance. Weekend dates fill up quickly, especially during peak season, so the earlier you reach out, the better we can secure your spot.",
  },
  {
    id: "delivery-setup",
    question: "Do you offer delivery and on-site setup?",
    answer:
      "Yes! We handle delivery, professional on-site installation, and post-event pickup throughout Whittier and neighboring counties — so you can focus on enjoying your celebration.",
  },
  {
    id: "service-areas",
    question: "What areas do you serve?",
    answer:
      "We proudly serve Whittier, Los Angeles County, Orange County, the Inland Empire, and surrounding areas. Not sure if we reach you? Just ask and we'll confirm.",
  },
  {
    id: "sanitized",
    question: "Are tables, chairs, and bounce houses sanitized?",
    answer:
      "Absolutely. All rental furniture and equipment goes through a strict cleaning and sanitizing protocol before every single event.",
  },
  {
    id: "weather",
    question: "How do outdoor installations hold up with the California weather?",
    answer:
      "We use professional-grade, biodegradable balloons built to withstand California heat, and every outdoor structure is properly weighted and secured for a safe, lasting display.",
  },
  {
    id: "secure-date",
    question: "How do I secure my date?",
    answer:
      "A 50% deposit secures your date. We coordinate the details directly with you via WhatsApp or the inquiry form to lock everything in.",
  },
];
