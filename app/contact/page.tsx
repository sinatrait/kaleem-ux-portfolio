import type { Metadata } from "next";
import Container from "@/components/Container";
import CopyEmailButton from "@/components/CopyEmailButton";
import Section from "@/components/Section";
import TextLink from "@/components/TextLink";
import { SITE_URL } from "@/lib/site-url";

export function generateMetadata(): Metadata {
  return {
    title: "Contact",
    alternates: { canonical: "/contact" },
    description:
      "Contact Abdul Kaleem about principal UX and product design opportunities, enterprise SaaS, or AI-assisted workflows.",
    openGraph: {
      title: "Contact | Abdul Kaleem",
      description:
        "Contact Abdul Kaleem about principal UX and product design opportunities, enterprise SaaS, or AI-assisted workflows.",
      type: "website",
      url: new URL("/contact", SITE_URL),
      siteName: "Abdul Kaleem — UX Portfolio",
      images: ["/opengraph-image"],
    },
    twitter: {
      card: "summary_large_image",
      title: "Contact | Abdul Kaleem",
      description:
        "Contact Abdul Kaleem about principal UX and product design opportunities, enterprise SaaS, or AI-assisted workflows.",
      images: ["/opengraph-image"],
    },
  };
}

export default function ContactPage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <Section className="flex min-h-[72svh] items-center">
        <Container>
          <div className="grid gap-section lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div className="max-w-reading">
              <p className="text-caption font-medium uppercase tracking-wide text-text-muted">
                Contact
              </p>
              <h1 className="mt-tight font-display text-display font-light leading-[0.98] tracking-tight">
                Let&apos;s design something
                <br />
                <span className="italic text-accent-text">worth using.</span>
              </h1>
              <p className="mt-wide max-w-reading text-body-lg text-text-muted">
                I&apos;d love to hear about a specific product challenge,
                research question, or collaboration you have in mind.
              </p>
            </div>

            <div className="border-y border-border py-wide">
              <div>
                <p className="text-caption font-medium uppercase tracking-wide text-text-muted">
                  Email
                </p>
                <a
                  href="mailto:abdul.kaleem@gmail.com"
                  className="mt-tight block break-all font-display text-subheading tracking-tight text-text underline decoration-border underline-offset-4 transition-colors duration-motion ease-editorial hover:text-accent-text"
                >
                  abdul.kaleem@gmail.com
                </a>
                <CopyEmailButton />
              </div>
              <nav
                aria-label="Contact links"
                className="mt-wide flex flex-wrap gap-step"
              >
                <TextLink
                  href="https://www.linkedin.com/in/abdulkaleem/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn →
                </TextLink>
                <TextLink href="/resume">Resume →</TextLink>
              </nav>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
