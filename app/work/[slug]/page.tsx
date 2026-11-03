import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import CaseStudyMdx from "@/components/CaseStudyMdx";
import Container from "@/components/Container";
import MetricsRow from "@/components/mdx/MetricsRow";
import Section from "@/components/Section";
import Tag from "@/components/Tag";
import TextLink from "@/components/TextLink";
import {
  getCaseStudies,
  getCaseStudyBySlug,
  sortCaseStudies,
} from "@/lib/case-studies";
import { getMdxHeadings } from "@/lib/mdx-headings";
import { SITE_URL } from "@/lib/site-url";

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const caseStudies = await getCaseStudies();
  return caseStudies.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = await getCaseStudyBySlug(slug);

  if (!caseStudy) {
    return {
      title: "Case study not found",
      description: "This case study could not be found.",
    };
  }

  return {
    title: caseStudy.title,
    description: caseStudy.summary,
    alternates: { canonical: `/work/${caseStudy.slug}` },
    openGraph: {
      type: "article",
      url: new URL(`/work/${caseStudy.slug}`, SITE_URL),
      siteName: "Abdul Kaleem — UX Portfolio",
      title: caseStudy.title,
      description: caseStudy.summary,
      images: [
        {
          url: caseStudy.coverImage,
          alt: caseStudy.coverAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: caseStudy.title,
      description: caseStudy.summary,
      images: [new URL(caseStudy.coverImage, SITE_URL)],
    },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const [caseStudy, allCaseStudies] = await Promise.all([
    getCaseStudyBySlug(slug),
    getCaseStudies(),
  ]);

  if (!caseStudy) {
    notFound();
  }

  const orderedCaseStudies = sortCaseStudies(allCaseStudies);
  const currentIndex = orderedCaseStudies.findIndex(
    (entry) => entry.slug === caseStudy.slug,
  );
  const previousCaseStudy =
    currentIndex > 0 ? orderedCaseStudies[currentIndex - 1] : undefined;
  const nextCaseStudy =
    currentIndex >= 0 && currentIndex < orderedCaseStudies.length - 1
      ? orderedCaseStudies[currentIndex + 1]
      : undefined;
  const headings = getMdxHeadings(caseStudy.content);

  return (
    <main id="main-content" tabIndex={-1}>
      <div className="relative aspect-[2/1] max-h-[44rem] min-h-64 w-full overflow-hidden bg-surface-raised sm:aspect-[2.4/1]">
        <Image
          src={caseStudy.coverImage}
          alt={caseStudy.coverAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <Section className="pb-0">
        <Container>
          <div className="max-w-reading">
            <TextLink href="/work">← Back to Work</TextLink>
            <h1 className="mt-wide font-display text-title tracking-tight">
              {caseStudy.title}
            </h1>
            <p className="mt-tight text-body-lg text-text-muted">
              {caseStudy.summary}
            </p>
            <dl className="mt-wide grid grid-cols-2 gap-step border-y border-border py-step sm:grid-cols-3">
              {caseStudy.client && (
                <div>
                  <dt className="text-caption text-text-muted">Client</dt>
                  <dd className="mt-tight text-small">{caseStudy.client}</dd>
                </div>
              )}
              {caseStudy.role && (
                <div>
                  <dt className="text-caption text-text-muted">Role</dt>
                  <dd className="mt-tight text-small">{caseStudy.role}</dd>
                </div>
              )}
              {caseStudy.year !== null && (
                <div>
                  <dt className="text-caption text-text-muted">Year</dt>
                  <dd className="mt-tight text-small">{caseStudy.year}</dd>
                </div>
              )}
            </dl>
            {caseStudy.tags.length > 0 && (
              <ul
                aria-label="Case study topics"
                className="mt-step flex flex-wrap gap-tight"
              >
                {caseStudy.tags.map((tag) => (
                  <li key={tag}>
                    <Tag>{tag}</Tag>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </Container>
      </Section>

      {caseStudy.metrics.length > 0 && (
        <Section className="pb-0">
          <Container>
            <div className="max-w-prose">
              <MetricsRow metrics={caseStudy.metrics} />
            </div>
          </Container>
        </Section>
      )}

      <Section>
        <Container>
          <div
            className={`grid gap-section ${
              headings.length > 0 ? "lg:grid-cols-[14rem_minmax(0,1fr)]" : ""
            }`}
          >
            {headings.length > 0 && (
              <aside className="hidden lg:block">
                <nav
                  aria-label="On this page"
                  className="sticky top-32 border-l border-border pl-step"
                >
                  <p className="mb-tight text-caption font-medium uppercase tracking-wide text-text-muted">
                    On this page
                  </p>
                  <ol className="space-y-tight">
                    {headings.map((heading) => (
                      <li key={heading.id}>
                        <a
                          className="text-small text-text-muted transition-colors duration-motion ease-editorial hover:text-text"
                          href={`#${heading.id}`}
                        >
                          {heading.title}
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              </aside>
            )}

            <article className="min-w-0">
              <CaseStudyMdx source={caseStudy.content} />
            </article>
          </div>
        </Container>
      </Section>

      <Section className="border-t border-border bg-surface-raised">
        <Container>
          <nav aria-label="More case studies">
            <div className="grid gap-wide sm:grid-cols-2">
              {previousCaseStudy ? (
                <Link
                  href={`/work/${previousCaseStudy.slug}`}
                  className="group rounded-card border border-border bg-surface p-card transition-colors duration-motion ease-editorial hover:bg-surface-raised"
                  prefetch={false}
                >
                  <span className="text-caption text-text-muted">
                    ← Previous case study
                  </span>
                  <span className="mt-tight block font-display text-subheading tracking-tight group-hover:text-accent-text">
                    {previousCaseStudy.title}
                  </span>
                </Link>
              ) : (
                <span />
              )}
              {nextCaseStudy && (
                <Link
                  href={`/work/${nextCaseStudy.slug}`}
                  className="group rounded-card border border-border bg-surface p-card text-left transition-colors duration-motion ease-editorial hover:bg-surface-raised sm:text-right"
                  prefetch={false}
                >
                  <span className="text-caption text-text-muted">
                    Next case study →
                  </span>
                  <span className="mt-tight block font-display text-subheading tracking-tight group-hover:text-accent-text">
                    {nextCaseStudy.title}
                  </span>
                </Link>
              )}
            </div>
            <div className="mt-wide text-center">
              <TextLink href="/work">View all work</TextLink>
            </div>
          </nav>
        </Container>
      </Section>
    </main>
  );
}
