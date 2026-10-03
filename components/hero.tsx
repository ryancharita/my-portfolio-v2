import { hero, profile } from "@/content/profile";

const button =
  "inline-flex items-center justify-center rounded-sm px-4 py-2.5 text-small transition-colors duration-150 ease-out";

export function Hero() {
  return (
    <section id="home" className="relative isolate">
      <div aria-hidden className="bg-grid absolute inset-0 -z-10" />

      <div className="mx-auto flex max-w-[1120px] flex-col items-start gap-8 px-6 pt-24 pb-24 sm:px-8 sm:pt-32">
        <p className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent-soft px-3 py-1 font-mono text-eyebrow uppercase text-accent">
          <span className="size-1.5 rounded-full bg-accent shadow-accent-glow motion-safe:animate-pulse" />
          {profile.status}
        </p>

        <div className="flex flex-col gap-4">
          <h1 className="text-[40px]/[44px] font-bold tracking-tight text-ink sm:text-display">
            {profile.name}
          </h1>
          <p className="max-w-2xl text-lead text-ink-muted">
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

        <div className="flex flex-wrap gap-3">
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
          {hero.stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col gap-1 border-b border-line py-4 sm:border-b-0 sm:px-6 sm:first:pl-0"
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
