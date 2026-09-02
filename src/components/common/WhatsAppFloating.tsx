import { MessageCircle } from "lucide-react";

import { WHATSAPP_PHONE } from "@/lib/whatsapp";

const DEFAULT_MESSAGE =
  "¡Hola Fancy Nanci Balloons! 🎈 Me gustaría más información para mi evento.";

/**
 * Botón flotante de WhatsApp fijado en la esquina inferior derecha.
 * Incluye una micro-interacción de escala + pulso al pasar el cursor.
 */
export default function WhatsAppFloating() {
  const href = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
    DEFAULT_MESSAGE,
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="group wa-safe fixed right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-lg shadow-black/20 ring-1 ring-black/5 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-black/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-champagne"
    >
      <span className="absolute inset-0 -z-10 rounded-full bg-[#25D366] opacity-70 transition-transform duration-700 group-hover:animate-ping" />
      <MessageCircle className="h-6 w-6 transition-transform duration-300 group-hover:rotate-12" />
      <span className="hidden text-sm font-medium sm:inline">WhatsApp</span>
    </a>
  );
}
