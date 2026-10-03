"use client";

import { useLayoutEffect } from "react";
import { Moon, Sun } from "@/components/icons";
import { THEME_KEY } from "@/lib/theme";

function readStored() {
  try {
    return localStorage.getItem(THEME_KEY);
  } catch {
    return null;
  }
}

export function ThemeToggle({ className }: { className?: string }) {
  // Dev Strict Mode remount resets <html> attributes; re-apply. No-op in production.
  useLayoutEffect(() => {
    const t = readStored();
    if (t === "light" || t === "dark") document.documentElement.setAttribute("data-theme", t);
  }, []);

  function toggle() {
    const root = document.documentElement;
    const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem(THEME_KEY, next);
    } catch {
      // Storage unavailable (private mode); the switch still applies for this visit.
    }
  }

  // Both icons render; CSS shows the one for the active theme, so SSR and client markup match.
  return (
    <button type="button" onClick={toggle} aria-label="Toggle light and dark theme" className={className}>
      <Sun className="size-4 light:hidden" />
      <Moon className="hidden size-4 light:block" />
    </button>
  );
}
