import type { Metadata } from "next";
import Container from "@/components/Container";
import Section from "@/components/Section";
import { SITE_URL } from "@/lib/site-url";

export function generateMetadata(): Metadata {
  return {
    title: "Resume",
    alternates: { canonical: "/resume" },
    description:
      "View or download Abdul Kaleem's resume: 15+ years of principal UX and product design across enterprise SaaS, AI-assisted workflows, and operational platforms.",
    openGraph: {
      title: "Resume | Abdul Kaleem",
      description:
        "View or download Abdul Kaleem's resume: 15+ years of principal UX and product design across enterprise SaaS, AI-assisted workflows, and operational platforms.",
      type: "profile",
      url: new URL("/resume", SITE_URL),
      siteName: "Abdul Kaleem — UX Portfolio",
      images: ["/opengraph-image"],
    },
    twitter: {
      card: "summary_large_image",
      title: "Resume | Abdul Kaleem",
      description:
        "View or download Abdul Kaleem's resume: 15+ years of principal UX and product design across enterprise SaaS, AI-assisted workflows, and operational platforms.",
      images: ["/opengraph-image"],
    },
  };
}

export default function ResumePage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <Section className="flex min-h-[60svh] items-center">
        <Container>
          <div className="max-w-reading">
            <p className="text-caption font-medium uppercase tracking-wide text-accent-text">
              Resume
            </p>
            <h1 className="mt-tight font-display text-title tracking-tight">
              Principal UX / Product Designer
            </h1>
            <p className="mt-wide text-body-lg text-text-muted">
              15+ years designing enterprise SaaS platforms, data-intensive
              systems, and complex operational workflows. My recent work
              focuses on AI-assisted products across supply chain, finance,
              and analytics.
            </p>
            <a
              href="/Abdul_Kaleem_Principal_UX_Product_Designer.pdf"
              download
              className="mt-wide inline-flex min-h-control items-center justify-center gap-tight rounded-control bg-accent px-button-x py-button-y text-small font-medium text-accent-contrast transition-[filter] duration-motion ease-editorial hover:brightness-90"
            >
              Download PDF
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                className="size-icon"
              >
                <path d="M12 3v12m0 0 4-4m-4 4-4-4M5 17v3h14v-3" />
              </svg>
            </a>
          </div>
        </Container>
      </Section>
    </main>
  );
}
