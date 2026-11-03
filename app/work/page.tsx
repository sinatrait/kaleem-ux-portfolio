import type { Metadata } from "next";
import CaseStudyCard from "@/components/CaseStudyCard";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import { getCaseStudies, sortCaseStudies } from "@/lib/case-studies";
import { SITE_URL } from "@/lib/site-url";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Work",
    alternates: { canonical: "/work" },
    description:
      "Selected enterprise UX and product design projects by Abdul Kaleem, spanning AI-assisted workflows, supply chain, and financial services.",
    openGraph: {
      title: "Work | Abdul Kaleem",
      description:
        "Selected enterprise UX and product design projects by Abdul Kaleem, spanning AI-assisted workflows, supply chain, and financial services.",
      type: "website",
      url: new URL("/work", SITE_URL),
      siteName: "Abdul Kaleem — UX Portfolio",
      images: ["/opengraph-image"],
    },
    twitter: {
      card: "summary_large_image",
      title: "Work | Abdul Kaleem",
      description:
        "Selected enterprise UX and product design projects by Abdul Kaleem, spanning AI-assisted workflows, supply chain, and financial services.",
      images: ["/opengraph-image"],
    },
  };
}

export default async function WorkPage() {
  const caseStudies = sortCaseStudies(await getCaseStudies());

  return (
    <main id="main-content" tabIndex={-1}>
      <Section className="pb-0">
        <Container>
          <Reveal className="max-w-reading">
            <p className="text-caption font-medium uppercase tracking-wide text-accent-text">
              Selected work
            </p>
            <h1 className="mt-tight font-display text-title tracking-tight">
              Case studies
            </h1>
            <p className="mt-tight text-body-lg text-text-muted">
              Enterprise products and complex workflows, designed to make
              critical decisions clearer.
            </p>
          </Reveal>
        </Container>
      </Section>

      <Section>
        <Container>
          {caseStudies.length > 0 ? (
            <>
              <h2 className="sr-only">All case studies</h2>
              <div className="grid gap-step sm:grid-cols-2 lg:grid-cols-3">
                {caseStudies.map((caseStudy, index) => (
                  <Reveal
                    key={caseStudy.slug}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CaseStudyCard caseStudy={caseStudy} />
                  </Reveal>
                ))}
              </div>
            </>
          ) : (
            <div className="rounded-card border border-border bg-surface-raised px-card py-section text-center">
              <p className="font-display text-subheading tracking-tight">
                Case studies coming soon
              </p>
              <p className="mt-tight text-small text-text-muted">
                New work will be shared here.
              </p>
            </div>
          )}
        </Container>
      </Section>
    </main>
  );
}
