// basePath is not applied to next/image src or plain URLs, so prefix public/ paths here.
export function asset(path: string) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}
