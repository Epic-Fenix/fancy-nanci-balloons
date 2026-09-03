"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

/**
 * Cleanly redirects legacy single-page hash links (e.g. /#galeria, /#cotizador)
 * to their dedicated routes. Runs only on the client, where the URL hash is
 * available (server-side redirects can't see the fragment).
 */
const HASH_MAP: Record<string, string> = {
  "#galeria": "/portfolio",
  "#portfolio": "/portfolio",
  "#rentals": "/rentals",
  "#academy": "/academy",
  "#cotizador": "/quote",
  "#services": "/quote",
  "#reviews": "/quote",
  "#faq": "/quote",
};

export default function HashRedirect() {
  const router = useRouter();

  useEffect(() => {
    const target = HASH_MAP[window.location.hash];
    if (target) router.replace(target);
  }, [router]);

  return null;
}
