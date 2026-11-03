import type { Metadata } from "next";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Container from "@/components/Container";
import Prose from "@/components/Prose";
import Section from "@/components/Section";
import Tag from "@/components/Tag";
import TextLink from "@/components/TextLink";
import ThemeToggle from "@/components/ThemeToggle";
import { SITE_URL } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "Style Guide",
  alternates: { canonical: "/style-guide" },
  description: "Portfolio design system and component reference.",
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "Style Guide | Abdul Kaleem",
    description: "Portfolio design system and component reference.",
    url: new URL("/style-guide", SITE_URL),
    siteName: "Abdul Kaleem — UX Portfolio",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Style Guide | Abdul Kaleem",
    description: "Portfolio design system and component reference.",
    images: ["/opengraph-image"],
  },
};

const typeSamples = [
  ["Display", "text-display", "A considered point of view.", "font-display"],
  ["Title", "text-title", "Designing for people.", "font-display"],
  ["Heading", "text-heading", "A useful change.", "font-display"],
  ["Subheading", "text-subheading", "Details make the difference.", "font-display"],
  ["Large body", "text-body-lg", "Make complex things feel simple.", "font-text"],
  [
    "Body",
    "text-body",
    "Thoughtful digital products begin with understanding the people who use them.",
    "font-text",
  ],
  ["Small", "text-small", "Product design · Research · Strategy", "font-text"],
  ["Caption", "text-caption", "Selected work, 2022–2026", "font-text"],
];

const accents = [
  { label: "A · Default", className: "bg-accent-option-a" },
  { label: "B", className: "bg-accent-option-b" },
  { label: "C", className: "bg-accent-option-c" },
];

const themes = [
  { name: "Light theme", className: "theme-preview-light" },
  { name: "Dark theme", className: "theme-preview-dark" },
];

export default function StyleGuidePage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <Section className="pb-0 pt-wide">
        <Container>
          <p className="text-caption font-medium uppercase tracking-wide text-accent-text">
            Portfolio design system
          </p>
          <h1 className="mt-tight font-display text-title tracking-tight">
            Style guide
          </h1>
          <p className="mt-tight max-w-reading text-body-lg text-text-muted">
            Editorial type, quiet surfaces, and purposeful color.
          </p>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2
            id="accent-options"
            className="font-display text-heading tracking-tight"
          >
            Accent options
          </h2>
          <p className="mt-tight text-body text-text-muted">
            Option A is applied by default.
          </p>
          <div className="mt-wide grid gap-tight sm:grid-cols-3">
            {accents.map((accent) => (
              <div
                key={accent.label}
                className="flex items-center gap-tight rounded-card border border-border bg-surface-raised p-tight"
              >
                <span
                  aria-hidden="true"
                  className={`size-control shrink-0 rounded-pill ${accent.className}`}
                />
                <span className="text-small font-medium">{accent.label}</span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {themes.map((theme) => (
        <section
          key={theme.name}
          aria-labelledby={`preview-${theme.className}`}
          className={`${theme.className} border-y border-border`}
        >
          <Section>
            <Container>
              <div className="flex flex-wrap items-center justify-between gap-tight">
                <h2
                  id={`preview-${theme.className}`}
                  className="font-display text-heading tracking-tight"
                >
                  {theme.name}
                </h2>
                <ThemeToggle />
              </div>

              <div className="mt-section">
                <p className="text-caption font-medium uppercase tracking-wide text-text-muted">
                  Type scale
                </p>
                <div className="mt-wide grid gap-wide">
                  {typeSamples.map(([label, className, sample, fontClass]) => (
                    <div
                      key={label}
                      className="grid gap-tight border-b border-border pb-step last:border-b-0 sm:grid-cols-[10rem_1fr]"
                    >
                      <p className="text-small text-text-muted">{label}</p>
                      <p className={`${className} ${fontClass}`}>{sample}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-section">
                <p className="text-caption font-medium uppercase tracking-wide text-text-muted">
                  Components
                </p>
                <div className="mt-wide grid gap-wide lg:grid-cols-2">
                  <Card>
                    <div className="flex flex-wrap items-center gap-tight">
                      <Tag variant="accent">Featured</Tag>
                      <Tag>Case study</Tag>
                    </div>
                    <h3 className="mt-wide font-display text-subheading tracking-tight">
                      A card with room to breathe.
                    </h3>
                    <p className="mt-tight text-body text-text-muted">
                      A clear hierarchy makes every detail easier to find.
                    </p>
                    <div className="mt-wide flex flex-wrap items-center gap-tight">
                      <Button>Primary</Button>
                      <Button variant="secondary">Secondary</Button>
                      <Button variant="ghost">Ghost</Button>
                    </div>
                    <div className="mt-wide">
                      <TextLink href="#prose-example">Read the case study</TextLink>
                    </div>
                  </Card>

                  <Card id="prose-example">
                    <p className="mb-tight text-caption font-medium uppercase tracking-wide text-text-muted">
                      Prose
                    </p>
                    <Prose>
                      <h3>Writing with clarity</h3>
                      <p>
                        Explain the work in a way that respects the reader&apos;s
                        time. Keep context, decisions, and outcomes connected.
                      </p>
                      <blockquote>
                        Good design makes the useful feel natural.
                      </blockquote>
                      <p>
                        <a href="#accent-options">Explore the accent options</a>{" "}
                        or add a little <code>inline code</code>.
                      </p>
                      <ul>
                        <li>Start with the problem.</li>
                        <li>Show how the work made a difference.</li>
                      </ul>
                    </Prose>
                  </Card>
                </div>
              </div>
            </Container>
          </Section>
        </section>
      ))}
    </main>
  );
}
