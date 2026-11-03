import Link from "next/link";
import Container from "@/components/Container";
import Section from "@/components/Section";
import TextLink from "@/components/TextLink";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found",
  description: "The requested page could not be found.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Page not found | Abdul Kaleem",
    description: "The requested page could not be found.",
    images: ["/opengraph-image"],
  },
};

const homeLinkClass =
  "inline-flex min-h-control items-center justify-center gap-tight rounded-control bg-accent px-button-x py-button-y text-small font-medium text-accent-contrast transition-[filter] duration-motion ease-editorial hover:brightness-90";

export default function NotFound() {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="flex min-h-[60vh] items-center"
    >
      <Section className="w-full">
        <Container>
          <p className="text-caption font-medium uppercase tracking-wide text-accent-text">
            404 · Page not found
          </p>
          <h1 className="mt-tight max-w-reading font-display text-title tracking-tight">
            This page isn&apos;t here.
          </h1>
          <p className="mt-tight max-w-reading text-body-lg text-text-muted">
            The page may have moved, or the link may be out of date.
          </p>
          <div className="mt-wide flex flex-wrap items-center gap-wide">
            <Link href="/" className={homeLinkClass}>
              Back home
            </Link>
            <TextLink href="/#work">Explore the work</TextLink>
          </div>
        </Container>
      </Section>
    </main>
  );
}
