"use client";

import { useEffect, useRef } from "react";

/** Mint grid glow that follows the pointer across the hero. Fine pointers only, off for reduced motion. */
export function HeroSpotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    const area = el?.parentElement;
    if (!el || !area) return;
    if (!matchMedia("(pointer: fine) and (prefers-reduced-motion: no-preference)").matches) return;

    let frame = 0;
    const move = (e: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = area.getBoundingClientRect();
        // Write CSS variables directly: no React re-render per mouse move.
        el.style.setProperty("--x", `${e.clientX - rect.left}px`);
        el.style.setProperty("--y", `${e.clientY - rect.top}px`);
        el.style.opacity = "1";
      });
    };
    const leave = () => {
      el.style.opacity = "0";
    };

    area.addEventListener("pointermove", move);
    area.addEventListener("pointerleave", leave);
    return () => {
      cancelAnimationFrame(frame);
      area.removeEventListener("pointermove", move);
      area.removeEventListener("pointerleave", leave);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="bg-grid-spotlight pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-500"
    />
  );
}
