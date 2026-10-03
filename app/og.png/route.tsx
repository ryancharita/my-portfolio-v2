import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { hero, profile, site } from "@/content/profile";

// Social preview image, linked from metadata in app/layout.tsx.
// A route handler (not opengraph-image.tsx) so the static export writes a real `og.png`:
// GitHub Pages picks Content-Type from the extension, and crawlers reject octet-stream.
// force-static renders it once at build time (required by output: "export").
export const dynamic = "force-static";

const { ogImage } = site;

type Word = { text: string; tech: boolean; glue: boolean };

// Satori can't wrap text across mixed-weight spans, so lay the lead out word by word.
// `glue` joins a word to the previous one with no space (e.g. "React" + ",").
const leadWords: Word[] = hero.lead.flatMap((segment, i) => {
  const prev = hero.lead[i - 1]?.text ?? " ";
  const joinsPrev = !prev.endsWith(" ") && !segment.text.startsWith(" ");
  return segment.text
    .split(" ")
    .filter(Boolean)
    .map((text, j) => ({ text, tech: "tech" in segment, glue: j === 0 && joinsPrev }));
});

// next/font only ships WOFF2 to the browser; ImageResponse needs TTF/OTF.
const fonts = join(process.cwd(), "node_modules/geist/dist/fonts");
const [geistRegular, geistBold, geistMono] = await Promise.all([
  readFile(join(fonts, "geist-sans/Geist-Regular.ttf")),
  readFile(join(fonts, "geist-sans/Geist-Bold.ttf")),
  readFile(join(fonts, "geist-mono/GeistMono-Medium.ttf")),
]);

// Dark tokens from docs/design-system.md (CSS variables aren't available here).
const c = {
  surface: "#050607",
  line: "#ffffff1a",
  ink: "#f5f6f7",
  inkMuted: "#a0a4a8",
  inkFaint: "#7d8287",
  accent: "#5cf2c8",
  accentSoft: "#0e2a23",
};

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: c.surface,
          backgroundImage: `linear-gradient(to right, ${c.line} 1px, transparent 1px), linear-gradient(to bottom, ${c.line} 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
          fontFamily: "Geist",
          color: c.ink,
        }}
      >
        {/* Fade the grid toward the bottom, as on the hero. */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            backgroundImage: `linear-gradient(to bottom, transparent 20%, ${c.surface} 85%)`,
          }}
        />

        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              alignSelf: "flex-start",
              gap: 12,
              padding: "8px 18px",
              borderRadius: 9999,
              border: `1px solid ${c.accent}4d`,
              background: c.accentSoft,
              color: c.accent,
              fontFamily: "Geist Mono",
              fontSize: 18,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
            }}
          >
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: 9999,
                background: c.accent,
                boxShadow: `0 0 12px 2px ${c.accent}59`,
              }}
            />
            {profile.status}
          </div>

          <div style={{ fontSize: 96, fontWeight: 700, letterSpacing: "-0.025em", lineHeight: 1 }}>
            {profile.name}
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", maxWidth: 900, fontSize: 34, lineHeight: 1.4, color: c.inkMuted }}>
            {leadWords.map((word, i) => (
              <span
                key={i}
                style={{
                  // Space trails the word so wrapped lines start flush left.
                  marginRight: leadWords[i + 1] && !leadWords[i + 1].glue ? "0.27em" : 0,
                  ...(word.tech ? { color: c.ink, fontWeight: 700 } : {}),
                }}
              >
                {word.text}
              </span>
            ))}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 28,
            borderTop: `1px solid ${c.line}`,
            fontFamily: "Geist Mono",
            fontSize: 18,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: c.inkFaint,
          }}
        >
          <div style={{ display: "flex", gap: 36 }}>
            {hero.stats.map((stat) => (
              <span key={stat.label}>{stat.value}</span>
            ))}
          </div>
          <span style={{ letterSpacing: "0.02em", textTransform: "none", color: c.inkMuted }}>
            {site.host}
          </span>
        </div>
      </div>
    ),
    {
      width: ogImage.width,
      height: ogImage.height,
      fonts: [
        { name: "Geist", data: geistRegular, weight: 400, style: "normal" },
        { name: "Geist", data: geistBold, weight: 700, style: "normal" },
        { name: "Geist Mono", data: geistMono, weight: 500, style: "normal" },
      ],
    },
  );
}
