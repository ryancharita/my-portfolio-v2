import { experience, type TimelineEntry } from "@/content/profile";
import { SectionHeader } from "@/components/section-header";

export function Experience() {
  return (
    <section id="about">
      <div className="mx-auto max-w-[1120px] px-6 pb-24 sm:px-8">
        <SectionHeader
          eyebrow={experience.eyebrow}
          title={experience.title}
          intro={experience.intro}
        />
        <Timeline entries={experience.roles} />

        <p className="mt-12 mb-4 font-mono text-eyebrow uppercase text-ink-faint">
          {experience.education.eyebrow}
        </p>
        <Timeline entries={experience.education.entries} />
      </div>
    </section>
  );
}

function Timeline({ entries }: { entries: TimelineEntry[] }) {
  return (
    <ol className="border-b border-line">
      {entries.map((entry) => (
        <li
          key={`${entry.org}-${entry.title}`}
          className="reveal grid gap-2 border-t border-line py-6 sm:grid-cols-[200px_1fr] sm:gap-8"
        >
          <p className="font-mono text-code uppercase text-ink-faint sm:pt-1">{entry.dates}</p>
          <div className="flex flex-col gap-1">
            <h3 className="text-card-title text-ink">
              {entry.title}
              <span className="font-normal text-ink-muted"> · {entry.org}</span>
            </h3>
            {entry.summary && <p className="text-body text-ink-muted">{entry.summary}</p>}
          </div>
        </li>
      ))}
    </ol>
  );
}
