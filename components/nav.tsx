"use client";

import { useEffect, useState } from "react";
import { nav, profile } from "@/content/profile";
import { ThemeToggle } from "@/components/theme-toggle";

const sectionIds = nav.map((item) => item.id);

export function Nav() {
  const active = useActiveSection(sectionIds);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-surface-raised/85 backdrop-blur">
      <nav className="mx-auto flex h-14 max-w-[1120px] items-center justify-between px-6 sm:px-8">
        <a href="#home" className="rounded-sm text-small font-bold text-ink" aria-label={profile.name}>
          {profile.initials}
        </a>
        <ul className="flex items-center">
          {nav.map((item) => {
            const isActive = active === item.id;
            return (
              // RJ already links home, so Home is dropped on phones to fit the theme toggle.
              <li key={item.id} className={item.id === "home" ? "hidden sm:block" : undefined}>
                <a
                  href={`#${item.id}`}
                  aria-current={isActive ? "location" : undefined}
                  className={`relative flex items-center gap-1.5 rounded-sm px-2.5 py-1.5 text-small transition-colors duration-150 ease-out hover:bg-surface-overlay sm:px-3 ${
                    isActive ? "text-ink" : "text-ink-muted hover:text-ink"
                  }`}
                >
                  {isActive && <span aria-hidden className="size-1 rounded-full bg-accent" />}
                  {item.label}
                </a>
              </li>
            );
          })}
          <li className="ml-2 border-l border-line pl-2">
            <ThemeToggle className="inline-flex size-8 items-center justify-center rounded-sm text-ink-muted transition-colors duration-150 ease-out hover:bg-surface-overlay hover:text-ink" />
          </li>
        </ul>
      </nav>
    </header>
  );
}

/** Id of the section crossing the band ~40% down the viewport. */
function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    // The last section is too short to reach the band, so activate it at the bottom of the page.
    const onScroll = () => {
      const atBottom = innerHeight + scrollY >= document.documentElement.scrollHeight - 8;
      if (atBottom) setActive(ids[ids.length - 1]);
    };
    addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      removeEventListener("scroll", onScroll);
    };
  }, [ids]);

  return active;
}
