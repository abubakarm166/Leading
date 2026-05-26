"use client";

import { useEffect, useState } from "react";

/**
 * Renders `fallback` on the server and first client paint, then `children` after mount.
 * Avoids hydration mismatches for UI that should only exist in the browser.
 */
export function ClientOnly({
  children,
  fallback = null,
}: {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return fallback;
  }

  return children;
}
