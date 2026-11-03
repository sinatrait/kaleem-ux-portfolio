import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

export type CaseStudyMetric = {
  label: string;
  value: string;
};

export type CaseStudy = {
  title: string;
  summary: string;
  slug: string;
  year: number | null;
  role: string;
  client: string;
  tags: string[];
  coverImage: string;
  coverAlt: string;
  featured: boolean;
  order: number;
  metrics: CaseStudyMetric[];
  draft: boolean;
};

export type CaseStudyDocument = CaseStudy & {
  content: string;
};

const CASE_STUDIES_DIRECTORY = path.join(
  process.cwd(),
  "content",
  "case-studies",
);
const DEFAULT_COVER_IMAGE = "/images/placeholder/case-study.svg";

function stringValue(value: unknown, fallback: string) {
  return typeof value === "string" && value.trim() ? value.trim() : fallback;
}

function numberValue(value: unknown): number | null {
  if (typeof value === "number" && Number.isFinite(value)) {
    return value;
  }
  if (typeof value === "string" && value.trim()) {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : null;
  }
  return null;
}

function slugFromFilename(filename: string) {
  return filename
    .replace(/\.mdx?$/i, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function normalizeCaseStudy(
  data: Record<string, unknown>,
  filename: string,
): CaseStudy {
  const fallbackSlug = slugFromFilename(filename);
  const normalizedSlug = stringValue(data.slug, fallbackSlug)
    .toLowerCase()
    .replace(/[^a-z0-9-]+/g, "-")
    .replace(/^-|-$/g, "");
  const slug = normalizedSlug || fallbackSlug || "case-study";
  const title = stringValue(
    data.title,
    fallbackSlug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ") || "Untitled case study",
  );
  const requestedCover = stringValue(data.coverImage, DEFAULT_COVER_IMAGE);
  const coverImage =
    requestedCover.startsWith("/") && !requestedCover.startsWith("//")
      ? requestedCover
      : DEFAULT_COVER_IMAGE;
  const tags = Array.isArray(data.tags)
    ? data.tags.filter((tag): tag is string => typeof tag === "string")
    : [];
  const metrics = Array.isArray(data.metrics)
    ? data.metrics.flatMap((metric): CaseStudyMetric[] => {
        if (typeof metric !== "object" || metric === null) {
          return [];
        }
        const values = metric as Record<string, unknown>;
        if (typeof values.label !== "string" || values.value === undefined) {
          return [];
        }
        return [
          {
            label: values.label,
            value: String(values.value),
          },
        ];
      })
    : [];

  return {
    title,
    summary: stringValue(data.summary, "A short project summary will go here."),
    slug,
    year: numberValue(data.year),
    role: stringValue(data.role, ""),
    client: stringValue(data.client, ""),
    tags,
    coverImage,
    coverAlt: stringValue(data.coverAlt, `${title} project cover`),
    featured: data.featured === true,
    order: numberValue(data.order) ?? Number.MAX_SAFE_INTEGER,
    metrics,
    draft: data.draft === true,
  };
}

async function readCaseStudyFiles(): Promise<CaseStudyDocument[]> {
  const filenames = (await readdir(CASE_STUDIES_DIRECTORY))
    .filter((filename) => /\.mdx?$/i.test(filename))
    .sort((left, right) => left.localeCompare(right));

  return Promise.all(
    filenames.map(async (filename) => {
      const source = await readFile(
        path.join(CASE_STUDIES_DIRECTORY, filename),
        "utf8",
      );
      const parsed = matter(source);
      return {
        ...normalizeCaseStudy(
          parsed.data as Record<string, unknown>,
          filename,
        ),
        content: parsed.content.trim(),
      };
    }),
  );
}

export async function getCaseStudies(): Promise<CaseStudy[]> {
  const documents = await readCaseStudyFiles();
  return documents.filter(({ draft }) => !draft);
}

export async function getCaseStudyBySlug(
  slug: string,
): Promise<CaseStudyDocument | undefined> {
  const documents = await readCaseStudyFiles();
  return documents.find((document) => document.slug === slug && !document.draft);
}

export function sortCaseStudies(caseStudies: CaseStudy[]) {
  return [...caseStudies].sort((left, right) => {
    if (left.year !== null && right.year !== null && left.year !== right.year) {
      return right.year - left.year;
    }
    if (left.year === null && right.year !== null) {
      return 1;
    }
    if (left.year !== null && right.year === null) {
      return -1;
    }
    return left.order - right.order || left.slug.localeCompare(right.slug);
  });
}
