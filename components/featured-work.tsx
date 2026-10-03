import Image from "next/image";
import { work, type Project } from "@/content/profile";
import { asset } from "@/lib/asset";
import { ArrowUpRight } from "@/components/icons";
import { SectionHeader } from "@/components/section-header";

export function FeaturedWork() {
  return (
    <section id="work" className="scroll-mt-8">
      <div className="mx-auto max-w-[1120px] px-6 pb-24 sm:px-8">
        <SectionHeader eyebrow={work.eyebrow} title={work.title} intro={work.intro} />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {work.projects.map((project) => (
            <li key={project.name}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-line bg-surface-raised p-2 transition-colors duration-150 ease-out hover:border-line-strong">
      <Image
        src={asset(project.image)}
        alt={`${project.name} screenshot`}
        width={1200}
        height={750}
        className="aspect-[16/10] w-full rounded-sm border border-line object-cover"
      />

      <div className="relative flex flex-1 flex-col gap-3 p-4">
        <div className="flex flex-col gap-1 pr-10">
          <h3 className="text-card-title text-ink">{project.name}</h3>
          <p className="line-clamp-2 text-small font-normal text-ink-muted">
            {project.description}
          </p>
        </div>

        <ul className="mt-auto flex flex-wrap gap-2">
          {project.tech.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-accent-soft px-2.5 py-1 font-mono text-code text-ink"
            >
              {tag}
            </li>
          ))}
        </ul>

        {project.href && (
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${project.name}`}
            className="absolute top-4 right-4 inline-flex size-8 items-center justify-center rounded-full border border-line-strong text-ink-muted transition-colors duration-150 ease-out hover:text-accent"
          >
            <ArrowUpRight className="size-4" />
          </a>
        )}
      </div>
    </article>
  );
}
