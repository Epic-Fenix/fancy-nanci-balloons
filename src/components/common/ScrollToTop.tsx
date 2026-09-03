"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Forces the viewport to the top on initial mount and on every route change,
 * and disables the browser's automatic scroll restoration so dedicated pages
 * (e.g. /quote) always open at their header instead of a retained position.
 */
export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
