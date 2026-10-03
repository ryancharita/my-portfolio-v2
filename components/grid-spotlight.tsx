"use client";

import { useEffect, useRef } from "react";

/**
 * Mint glow on the page grid that follows the pointer. Rendered as a direct child of <body>
 * so it shares the body grid's origin. Fine pointers only, off for reduced motion.
 */
export function GridSpotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    const area = el?.parentElement;
    if (!el || !area) return;
    if (!matchMedia("(pointer: fine) and (prefers-reduced-motion: no-preference)").matches) return;

    let frame = 0;
    let pointer: { x: number; y: number } | null = null;

    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (!pointer) return;
        const rect = area.getBoundingClientRect();
        // Write CSS variables directly: no React re-render per mouse move.
        el.style.setProperty("--x", `${pointer.x - rect.left}px`);
        el.style.setProperty("--y", `${pointer.y - rect.top}px`);
        el.style.opacity = "1";
      });
    };
    const move = (e: PointerEvent) => {
      pointer = { x: e.clientX, y: e.clientY };
      update();
    };
    const leave = () => {
      pointer = null;
      el.style.opacity = "0";
    };

    area.addEventListener("pointermove", move);
    area.addEventListener("pointerleave", leave);
    // Scrolling moves the page under a still pointer, so keep the glow under it.
    addEventListener("scroll", update, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      area.removeEventListener("pointermove", move);
      area.removeEventListener("pointerleave", leave);
      removeEventListener("scroll", update);
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
