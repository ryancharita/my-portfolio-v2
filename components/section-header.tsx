type Props = {
  eyebrow: string;
  title: string;
  intro?: string;
};

export function SectionHeader({ eyebrow, title, intro }: Props) {
  return (
    <header className="mb-12 flex flex-col">
      <p className="font-mono text-eyebrow uppercase text-ink-faint">{eyebrow}</p>
      <h2 className="mt-3 text-title text-ink">{title}</h2>
      {intro && <p className="mt-3 max-w-2xl text-body text-ink-muted">{intro}</p>}
    </header>
  );
}
