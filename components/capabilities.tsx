import { capabilities } from "@/content/profile";
import { SectionHeader } from "@/components/section-header";

export function Capabilities() {
  return (
    <section id="capabilities">
      <div className="mx-auto max-w-[1120px] px-6 pb-24 sm:px-8">
        <SectionHeader
          eyebrow={capabilities.eyebrow}
          title={capabilities.title}
          intro={capabilities.intro}
        />
        <ul className="grid gap-4 md:grid-cols-3">
          {capabilities.groups.map((group, i) => (
            <li
              key={group.name}
              className="reveal flex flex-col gap-4 rounded-lg border border-line bg-surface-raised p-6 transition-colors duration-150 ease-out hover:border-line-strong"
            >
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-card-title text-ink">{group.name}</h3>
                <span className="font-mono text-code text-ink-faint">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <ul className="flex flex-col">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="border-t border-line py-2 text-small font-normal text-ink-muted"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
