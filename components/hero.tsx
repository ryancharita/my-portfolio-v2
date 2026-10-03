import type { CSSProperties } from "react";
import { hero, profile } from "@/content/profile";

const button =
  "inline-flex items-center justify-center rounded-sm px-4 py-2.5 text-small transition-colors duration-150 ease-out";

// Staggered entrance on load; step i starts i × 90ms after the first.
const enter = "motion-safe:animate-enter";
const step = (i: number) => ({ "--i": i }) as CSSProperties;

export function Hero() {
  return (
    <section id="home">
      <div className="mx-auto flex max-w-[1120px] flex-col items-start gap-8 px-6 pt-24 pb-24 sm:px-8 sm:pt-32">
        <p
          className={`${enter} inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent-soft px-3 py-1 font-mono text-eyebrow uppercase text-accent`}
          style={step(0)}
        >
          <span className="relative flex size-1.5">
            <span className="absolute inset-0 rounded-full bg-accent motion-safe:animate-ping-slow" />
            <span className="relative size-1.5 rounded-full bg-accent shadow-accent-glow" />
          </span>
          {profile.status}
        </p>

        <div className="flex flex-col gap-4">
          <h1
            className={`${enter} text-[40px]/[44px] font-bold tracking-tight text-ink sm:text-display`}
            style={step(1)}
          >
            {profile.name}
          </h1>
          <p className={`${enter} max-w-2xl text-lead text-ink-muted`} style={step(2)}>
            {hero.lead.map((segment, i) =>
              "tech" in segment ? (
                <span key={i} className="font-semibold text-ink">
                  {segment.text}
                </span>
              ) : (
                segment.text
              ),
            )}
          </p>
        </div>

        <div className={`${enter} flex flex-wrap gap-3`} style={step(3)}>
          <a
            href={hero.actions.primary.href}
            className={`${button} bg-ink text-surface hover:bg-ink-muted`}
          >
            {hero.actions.primary.label}
          </a>
          <a
            href={hero.actions.secondary.href}
            className={`${button} border border-line-strong text-ink hover:bg-surface-overlay`}
          >
            {hero.actions.secondary.label}
          </a>
        </div>

        <dl className="grid w-full max-w-2xl grid-cols-1 border-t border-line sm:grid-cols-3 sm:divide-x sm:divide-line">
          {hero.stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`${enter} flex flex-col gap-1 border-b border-line py-4 sm:border-b-0 sm:px-6 sm:first:pl-0`}
              style={step(4 + i)}
            >
              <dt className="font-mono text-stat-label uppercase text-ink-faint">
                {stat.label}
              </dt>
              <dd className="text-card-title text-ink">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
