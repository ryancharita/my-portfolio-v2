import { profile } from "@/content/profile";
import { ArrowUpRight, Github, Linkedin, Mail } from "@/components/icons";

const link =
  "inline-flex items-center gap-1.5 rounded-sm text-small font-normal text-ink-muted transition-colors duration-150 ease-out hover:text-accent";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-[1120px] flex-col gap-4 px-6 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="font-mono text-code text-ink-faint">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          <li>
            <a href={`mailto:${profile.email}`} className={link}>
              <Mail className="size-4" />
              Email
            </a>
          </li>
          <li>
            <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" className={link}>
              <Github className="size-4" />
              GitHub
            </a>
          </li>
          <li>
            <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" className={link}>
              <Linkedin className="size-4" />
              LinkedIn
            </a>
          </li>
          <li>
            <a href={profile.resume} target="_blank" rel="noopener noreferrer" className={link}>
              Résumé
              <ArrowUpRight className="size-4" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
