# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Project

Portfolio site (v2) for Ryan Joshua Charita, full stack developer. Next.js 16.3, React 19.2, TypeScript, Tailwind CSS v4. `app/page.tsx` is still `create-next-app` boilerplate and is expected to be replaced.

## Design system

**Read `docs/design-system.md` before building or styling any UI.** It defines the voice, tokens, page layout, section content and component patterns (hero, status pill, project card, timeline, contact panel). The rules that are easiest to get wrong:

- Dark-first. Mint `accent` is the only colour, used once or twice per screen. The primary button is inverted (`bg-ink text-surface`), not mint.
- Depth comes from 1px `border-line` borders, never shadows. Card hover changes the border to `line-strong`; nothing lifts or bounces. Transitions are 150ms ease on colour and border.
- Geist Mono is only for uppercase, tracked labels (`eyebrow`, `stat-label`, `code`), never for paragraphs.
- Copy: first person, specific, numbers over adjectives, verb CTAs. No emoji, exclamation marks or "passionate".
- Icons: Lucide-style 1.5px-stroke line icons in `currentColor`.

The tokens are already wired into Tailwind in `app/globals.css`, so use the token utilities instead of raw colours or arbitrary values:

- Colours: `bg-surface`, `bg-surface-raised`, `bg-surface-overlay`, `border-line`, `border-line-strong`, `text-ink`, `text-ink-muted`, `text-ink-faint`, `text-accent`, `bg-accent-soft`, `text-on-accent`
- Type: `text-display`, `text-headline`, `text-title`, `text-card-title`, `text-lead`, `text-body`, `text-small`, and with `font-mono uppercase`: `text-eyebrow`, `text-stat-label`, `text-code`. Each sets size, line height, weight and tracking. `display` drops to 40px under 640px, so add that responsive override yourself.
- Radius: `rounded-sm` (8px), `rounded-lg` (16px), `rounded-full`
- Effects: `shadow-accent-glow` (status dot only), `shadow-focus-ring` (applied globally on `:focus-visible`)
- Spacing: the design system's `space-N` is Tailwind's default scale (`space-3` = `gap-3` = 12px)

## Commands

The package manager is **pnpm** (`pnpm-lock.yaml`, `packageManager` field). Don't use npm/yarn; they would create a second lockfile.

- `pnpm dev`: dev server at http://localhost:3000
- `pnpm build`: production build (also runs type-checking)
- `pnpm start`: serve the production build
- `pnpm lint`: ESLint (flat config in `eslint.config.mjs`, using `eslint-config-next` core-web-vitals + typescript). Lint one file with `pnpm lint app/page.tsx`
- `pnpm exec tsc --noEmit`: type-check without building

No test framework is set up yet.

## Next.js version caveat

This Next.js version is newer than most training data. Before using any Next.js API or convention, check the bundled docs in `node_modules/next/dist/docs/` (`01-app/` covers the App Router this project uses). One example already in the code: `app/layout.tsx` types its props with the globally generated `LayoutProps<"/">` helper instead of a hand-written props type. Route types are generated into `.next/types` and `.next/dev/types`, which are included by `tsconfig.json`.

## Architecture

- **App Router only**: routes live in `app/`. `app/layout.tsx` is the root layout and loads the Geist / Geist Mono fonts via `next/font/google` as CSS variables (`--font-geist-sans`, `--font-geist-mono`).
- **Tailwind v4, CSS-first config**: there is no `tailwind.config.*`. Tailwind is loaded through `@import "tailwindcss"` in `app/globals.css` and the `@tailwindcss/postcss` plugin. Theme-dependent values (colours, shadows) are raw CSS variables set under `:root, [data-theme="dark"]` and `[data-theme="light"]`, then exposed as utilities through `@theme inline`. Static tokens (type scale, radius) live in a plain `@theme` block. Add new tokens there, not in a JS config.
- **Theming**: the theme is chosen by `data-theme` on `<html>` (set to `dark` in `app/layout.tsx`), not by `prefers-color-scheme`. Because the tokens swap per theme, components rarely need Tailwind's `dark:` variant, and that variant is not wired to `data-theme`.
- **Path alias**: `@/*` resolves to the repo root (e.g. `@/app/...`).
- Static assets go in `public/`.
