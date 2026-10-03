"use client";

// Must be a client component so the type check below sees `window` in the browser.
// Runs during HTML parsing on hard loads. text/plain on the client avoids React's
// "script tag while rendering" dev warning; suppressHydrationWarning covers the type mismatch.
export function InlineScript({ html }: { html: string }) {
  return (
    <script
      type={typeof window === "undefined" ? "text/javascript" : "text/plain"}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
