# Ryan Joshua Charita — design system

The portfolio of Ryan Joshua Charita, a full stack developer with 6+ years building scalable, maintainable web applications. **Version 2 is a dark-first reboot**: a near-black page, one mint signal colour, Geist for words and Geist Mono for labels, and thin 1px borders instead of shadows. It should feel like a well-made developer tool: quiet, precise, and quick to scan. (Inspired by rezky.codes; v1 was the Playfair, mint-and-navy site.)

## Voice

- First person, direct, specific. Say what was built, for whom, and what it changed: "Payroll and HR for Philippine companies — the most complete HRMS in the country."
- Short labels in mono capitals above everything: `FEATURED WORK`, `CAPABILITIES`, `EXPERIENCE`.
- Numbers over adjectives: "6+ years", "3 production platforms", "Full stack".
- CTAs are verbs: "View projects", "Get in touch", "Copy email".
- Don't: hype, emoji, exclamation marks, "passionate".

## Colour

Dark is the default theme; light mirrors it.

- **Grounds:** `surface` for the page, `surface-raised` for cards and the nav, `surface-overlay` for hover and inputs. On dark, raised surfaces barely differ from the page, so **every card has a `line` border** (`border-hair`, 1px). Hover raises the border to `line-strong`.
- **Text:** `ink` for headings and the name, `ink-muted` for paragraphs and descriptions, `ink-faint` for mono labels and dates. All pass 4.5:1 on every surface in both themes.
- **Accent:** `accent` mint is the only colour. Use it for the status dot, the active nav marker, links on hover, a highlighted word, and the focus ring. One or two uses per screen. `accent-soft` is the ground behind the status pill and tech tags.
- The primary button is **inverted**, not mint: an `ink` fill with `surface` text. The secondary button is transparent with a `line-strong` border.

## Type

- **Geist** (`sans`): `display` 60px bold with -0.025em tracking for the name, `title` 30px for sections, `card-title` 18px, `lead` 20px for the hero intro, `body` 16px, `small` 14px for buttons and card text.
- **Geist Mono** (`mono`), always uppercase and widely tracked: `eyebrow` 11px above section titles, `stat-label` 10px above hero stats, `code` 13px for tech tags and dates.
- Inside the `lead`, tech names (React, Next.js, NestJS, PostgreSQL) are set in `ink` at weight 600, so the stack reads at a glance.
- Google Fonts: `family=Geist:wght@400;500;600;700&family=Geist+Mono:wght@400;500`.

## Layout and patterns

- **Page:** max width 1120px, `space-8` gutters (`space-6` on mobile), `space-24` between sections. Section header = `eyebrow` → `space-3` → `title` → `body` intro in `ink-muted`, then `space-12`.
- **Background grid:** a 1px `line` grid at `space-12` (48px) pitch across the whole page, set on the page background so it scrolls with the content. Cards, the nav and the contact panel sit on opaque `surface-raised` and cover it. On mouse and trackpad devices, a mint copy of the grid shows in a 220px circle around the pointer (the spotlight), anywhere on the page.
- **Hero:** status pill → name → lead → two buttons → a stats row of three (`stat-label` over a `card-title`-weight value), divided by hairlines.
- **Status pill:** `radius-full`, `accent-soft` fill, 1px accent border at 30%, a 6px `accent` dot with `accent-glow` and a slow ping ring, and the label `AVAILABLE FOR NEW PROJECTS` in `eyebrow` accent.
- **Project card:** `surface-raised`, `radius-lg`, 1px `line` border; a 16:10 screenshot on top (`radius-sm`), then `card-title`, two lines of `small` description in `ink-muted`, `code` tech tags, and a round ↗ icon button at the top-right of the text area. Cards sit three across with `space-4` gaps. On hover the border goes to `line-strong`, the screenshot zooms to 104% inside its frame, and the ↗ turns accent and nudges 2px up-right.
- **Timeline:** a two-column row per role — dates in `code`/`ink-faint` on the left, role, company and one line of impact on the right — divided by hairlines.
- **Contact panel:** a `radius-lg` bordered panel with a `headline`, a line of `body`, and buttons for email, GitHub and LinkedIn.

## Motion

Motion is quiet and one-directional. Things fade and settle into place; they never lift, bounce or loop for attention. For `prefers-reduced-motion: reduce`, all movement below is switched off and only the 150ms colour fades remain.

- **State changes:** 150ms ease for colour and border changes: links, buttons, nav items and card borders.
- **Hero entrance:** on load, the status pill, name, lead, buttons and each stat fade in one after another. Each one goes from 0 opacity, a 6px blur and 8px down to rest over 700ms on `ease-out-soft`, with 90ms between items.
- **Scroll reveal:** section headers, project cards, capability cards, timeline rows and the contact panel fade up 24px as they enter the viewport. The motion is tied to scroll position, not time, and finishes by 60% of the way in. Where the browser lacks scroll-driven animation, content simply appears.
- **Spotlight:** the pointer spotlight fades in over 500ms when the pointer enters the page and out when it leaves. It stays under the pointer while the page scrolls. It's mouse and trackpad only, never on touch screens.
- **Status dot:** a ring expands from the dot to 3× and fades out every 2.4s. It's the only looping motion on the page.
- **Hover:** inside a card, only its contents move (the screenshot zoom, the ↗ nudge, 300–500ms). The card itself stays put.
- **Don't:** lift cards on hover, add bounce or spring easing, animate layout or size, loop anything other than the status dot, or add motion that has no reduced-motion fallback.

## Imagery and icons

- Project cards use real product screenshots (Payruler, Fleet Management System, Fresh Clinics), cropped to 16:10.
- Icons are 1.5px-stroke line icons in `currentColor` (e.g. Lucide): arrow-up-right, github, linkedin, mail, copy.
- There is no logo mark. The nav carries the initials "RJ" in Geist 700, and the name is set in `display`.

## Content

Nav: Home, Work, About, Contact. Sections: Featured work (Payruler, Fleet Management System, Fresh Clinics), Capabilities (Frontend, Backend, Tools & Deployment), Experience & Education, Contact. Footer: email, GitHub, LinkedIn, résumé.

---

# Tokens

## Colour

Dark is the default theme. Light mirrors it.

| Token | Dark | Light | Usage |
| --- | --- | --- | --- |
| `surface` | `#050607` | `#fafafa` | Page background. Dark is the default theme. |
| `surface-raised` | `#0e1012` | `#ffffff` | Cards, the nav bar, the contact panel — always with a line border. |
| `surface-overlay` | `#16191c` | `#f1f2f3` | Hover state on cards and nav items, inputs, code blocks. |
| `line` | `#ffffff1a` | `#0b0d0e14` | 1px hairlines: card borders, section dividers, the background grid. Decorative only. |
| `line-strong` | `#3a3f44` | `#c9ced2` | Hover border on cards, secondary-button border, grid dots. Decorative (under 3:1) — input borders use ink-faint. |
| `ink` | `#f5f6f7` | `#0b0d0e` | Headings, the name, primary text, the primary button fill. On every surface (16:1+). |
| `ink-muted` | `#a0a4a8` | `#565c62` | Lead paragraph, card descriptions, inactive nav. On every surface and accent-soft (5.9:1+). |
| `ink-faint` | `#7d8287` | `#63696f` | Mono eyebrows, stat labels, dates, input borders. Smallest text that still passes: 4.5:1+ on every surface. |
| `accent` | `#5cf2c8` | `#08785a` | The one signal colour, mint: status dot, links on hover, active nav marker, focus ring, highlighted words. As text on any surface or accent-soft (4.8:1+). One or two uses per screen. |
| `accent-soft` | `#0e2a23` | `#dcf6ee` | Ground of the status pill and tech tags; text on it is accent or ink. |
| `on-accent` | `#04110d` | `#ffffff` | Text on an accent fill (rare: the contact CTA on hover). |
| `link` | = `accent` | = `accent` | Links — an alias of accent. |

## Typography

Font families:

- `sans`: Geist, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif
- `mono`: "Geist Mono", ui-monospace, "SF Mono", Menlo, monospace

### Sans (sans)

Geist (Google Fonts). Tight tracking on anything 30px and up.

| Style | Size / line height | Weight | Tracking | Sample | Usage |
| --- | --- | --- | --- | --- | --- |
| `display` | 60px / 60px | 700 | -0.025em | Ryan Joshua Charita | The name in the hero. Once. 40px under 640px wide. |
| `headline` | 36px / 40px | 600 | -0.025em | Have a product that needs building? | The contact-panel headline. |
| `title` | 30px / 36px | 600 | -0.025em | Selected work | Section titles, left-aligned under a mono eyebrow. |
| `card-title` | 18px / 28px | 600 | — | Payruler | Project names, timeline roles. |
| `lead` | 20px / 28px | 400 | — | Full stack developer with 6+ years building scalable, maintainable web applications. | Hero intro in ink-muted; tech names inside it in ink, weight 600. |
| `body` | 16px / 24px | 400 | — | A web-based system to manage and monitor taxi fleet operations in Cebu City. | Section intros and paragraphs, in ink-muted. |
| `small` | 14px / 20px | 500 | — | View projects | Buttons, nav links, card descriptions. |

### Mono (mono)

Geist Mono: the engineering voice. Labels only — never paragraphs.

| Style | Size / line height | Weight | Tracking | Sample | Usage |
| --- | --- | --- | --- | --- | --- |
| `eyebrow` | 11px / 16px | 500 | 0.3em | FEATURED WORK | Uppercase label above every section title and on the status pill; ink-faint, or accent on the pill. |
| `stat-label` | 10px / 14px | 500 | 0.2em | EXPERIENCE | Uppercase label over each hero stat, in ink-faint. |
| `code` | 13px / 20px | 400 | — | react · nestjs · postgres | Tech tags on cards, dates, inline code. |

## Spacing

4px base.

| Token | Value | Usage |
| --- | --- | --- |
| `space-1` | `4px` | Tag padding (vertical), icon gaps. |
| `space-2` | `8px` | Between tags; button padding (vertical) is 10px = space-2 + 2. |
| `space-3` | `12px` | Between eyebrow and title. |
| `space-4` | `16px` | Gap between cards; button padding (horizontal). |
| `space-6` | `24px` | Card padding; page gutter on mobile. |
| `space-8` | `32px` | Hero block spacing; page gutter on desktop. |
| `space-12` | `48px` | Background grid pitch; space under section headers. |
| `space-24` | `96px` | Between page sections. |

## Radius

Soft rectangles, pill accents.

| Token | Value | Usage |
| --- | --- | --- |
| `radius-sm` | `8px` | Buttons, nav items, inputs, card thumbnails. |
| `radius-lg` | `16px` | Project cards, the contact panel. |
| `radius-full` | `9999px` | Status pill, tech tags, the status dot, icon buttons. |

## Border

Hairlines carry the structure.

| Token | Value | Usage |
| --- | --- | --- |
| `border-hair` | `1px` | Every card, divider and the background grid. |

## Effects

No elevation on dark — borders do it. Two effects only.

| Token | Value | Usage |
| --- | --- | --- |
| `accent-glow` | dark: `0 0 12px 2px #5cf2c859`<br>light: `0 0 0 3px #08785a26` | The status dot in the 'Available for new projects' pill. |
| `focus-ring` | dark: `0 0 0 2px #050607, 0 0 0 4px #5cf2c8`<br>light: `0 0 0 2px #fafafa, 0 0 0 4px #08785a` | Keyboard focus: a 2px page-colour gap, then 2px accent. |

## Motion tokens

| Token | Value | Usage |
| --- | --- | --- |
| `ease-out-soft` | `cubic-bezier(0.2, 0.7, 0.2, 1)` | Entrances and hover movement: a fast start that settles gently. |
| `enter` | 700ms `ease-out-soft`, delay `--i` × 90ms | Hero entrance: from opacity 0, 6px blur and 8px down. |
| `reveal` | scroll-driven, entry 0–60% | Scroll reveal: from opacity 0 and 24px down. |
| `ping-slow` | 2.4s, `cubic-bezier(0, 0, 0.2, 1)`, infinite | The status dot ring: 1× at 60% opacity → 3× at 0. |

## CSS variables

Paste into a global stylesheet; toggle themes with `data-theme` on `<html>`.

```css
:root, [data-theme="dark"] {
  --surface: #050607;
  --surface-raised: #0e1012;
  --surface-overlay: #16191c;
  --line: #ffffff1a;
  --line-strong: #3a3f44;
  --ink: #f5f6f7;
  --ink-muted: #a0a4a8;
  --ink-faint: #7d8287;
  --accent: #5cf2c8;
  --accent-soft: #0e2a23;
  --on-accent: #04110d;
  --link: var(--accent);
}
[data-theme="light"] {
  --surface: #fafafa;
  --surface-raised: #ffffff;
  --surface-overlay: #f1f2f3;
  --line: #0b0d0e14;
  --line-strong: #c9ced2;
  --ink: #0b0d0e;
  --ink-muted: #565c62;
  --ink-faint: #63696f;
  --accent: #08785a;
  --accent-soft: #dcf6ee;
  --on-accent: #ffffff;
}
:root {
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;
  --space-12: 48px;
  --space-24: 96px;
  --radius-sm: 8px;
  --radius-lg: 16px;
  --radius-full: 9999px;
  --border-hair: 1px;
  --font-sans: Geist, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif;
  --font-mono: "Geist Mono", ui-monospace, "SF Mono", Menlo, monospace;
}
```
