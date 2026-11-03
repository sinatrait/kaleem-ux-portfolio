export type MdxHeading = {
  id: string;
  title: string;
};

export function headingId(title: string) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\p{L}\p{N}\s-]/gu, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export function getMdxHeadings(source: string): MdxHeading[] {
  return Array.from(source.matchAll(/^##\s+(.+?)\s*#*\s*$/gm), ([, title]) => ({
    id: headingId(title),
    title,
  }));
}
