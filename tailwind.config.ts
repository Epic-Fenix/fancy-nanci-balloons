import type { Config } from "tailwindcss";

/**
 * Fancy Nanci Balloons — configuración de tema boutique.
 *
 * El proyecto usa Tailwind CSS v4, cuya fuente de verdad para el tema es
 * el bloque `@theme` en `src/app/globals.css`. Este archivo se mantiene por
 * compatibilidad y documentación: la paleta `brand` aquí refleja exactamente
 * las variables `--color-brand-*` definidas en el CSS y se enlaza mediante la
 * directiva `@config` en globals.css.
 */
const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx,mdx}",
    "./src/components/**/*.{ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          cream: "#FAF7F2", // fondo boutique suave
          sand: "#EFE9DF", // tarjetas y bordes sutiles
          champagne: "#D4AF37", // dorado / detalles elegantes
          blush: "#F4E3E1", // tono rosa pastel empolvado
          slate: "#2C2A29", // texto principal de alto contraste
          muted: "#7A7571", // texto secundario
        },
      },
    },
  },
  plugins: [],
};

export default config;
