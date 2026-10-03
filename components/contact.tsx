import { contact, profile } from "@/content/profile";
import { CopyEmailButton } from "@/components/copy-email-button";
import { Github, Linkedin, Mail } from "@/components/icons";

const button =
  "inline-flex items-center justify-center gap-2 rounded-sm px-4 py-2.5 text-small transition-colors duration-150 ease-out";
const secondary = `${button} border border-line-strong text-ink hover:bg-surface-overlay`;

export function Contact() {
  return (
    <section id="contact">
      <div className="mx-auto max-w-[1120px] px-6 pb-24 sm:px-8">
        <div className="flex flex-col gap-8 rounded-lg border border-line bg-surface-raised p-6 sm:p-12">
          <div className="flex flex-col gap-3">
            <p className="font-mono text-eyebrow uppercase text-ink-faint">Contact</p>
            <h2 className="max-w-xl text-[30px]/[36px] font-semibold tracking-tight text-ink sm:text-headline">
              {contact.headline}
            </h2>
            <p className="max-w-xl text-body text-ink-muted">{contact.body}</p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={`mailto:${profile.email}`}
              className={`${button} bg-ink text-surface hover:bg-accent hover:text-on-accent`}
            >
              <Mail className="size-4" />
              Email me
            </a>
            <CopyEmailButton email={profile.email} className={secondary} />
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className={secondary}
            >
              <Github className="size-4" />
              GitHub
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={secondary}
            >
              <Linkedin className="size-4" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
