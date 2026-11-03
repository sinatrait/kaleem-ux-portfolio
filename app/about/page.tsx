import Image from "next/image";
import type { Metadata } from "next";
import Container from "@/components/Container";
import Section from "@/components/Section";
import TextLink from "@/components/TextLink";
import { SITE_URL } from "@/lib/site-url";

export function generateMetadata(): Metadata {
  return {
    title: "About",
    alternates: { canonical: "/about" },
    description:
      "Learn about Abdul Kaleem's 15+ years of UX and product design experience across enterprise SaaS platforms and complex workflows.",
    openGraph: {
      title: "About | Abdul Kaleem",
      description:
        "Learn about Abdul Kaleem's 15+ years of UX and product design experience across enterprise SaaS platforms and complex workflows.",
      type: "profile",
      url: new URL("/about", SITE_URL),
      siteName: "Abdul Kaleem — UX Portfolio",
      images: ["/opengraph-image"],
    },
    twitter: {
      card: "summary_large_image",
      title: "About | Abdul Kaleem",
      description:
        "Learn about Abdul Kaleem's 15+ years of UX and product design experience across enterprise SaaS platforms and complex workflows.",
      images: ["/opengraph-image"],
    },
  };
}

const experience = [
  {
    role: "Specialist UX Designer",
    company: "SOULAX (formerly Citridot Solutions)",
    years: "June 2024 — Present",
    highlights:
      "AI-assisted work across predictive analytics, trailer inventory, quote generation, lien registration and search, and inspection dashboards.",
  },
  {
    role: "Specialist UX Designer",
    company: "Persistent Systems",
    years: "May 2020 — June 2024",
    highlights:
      "Kyndryl Bridge, Kyndryl Solution Library, ENPF Mobile App, and Beatflow workflow automation.",
  },
  {
    role: "Senior UI/UX Designer",
    company: "Actifio (acquired by Google)",
    years: "November 2010 — May 2020",
    highlights:
      "Enterprise SaaS backup and disaster recovery for Google Cloud and hybrid workloads; contributed to the product design system.",
  },
  {
    role: "UX Designer",
    company: "W2Software / StatSchedules",
    years: "May 2004 — September 2010",
    highlights:
      "STAT Enterprise Scheduling for healthcare, including redesign of patient appointment workflows.",
  },
];

export default function AboutPage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <Section>
        <Container>
          <div className="grid gap-section lg:grid-cols-[minmax(16rem,0.7fr)_minmax(0,1.3fr)] lg:items-start">
            <figure className="relative mx-auto order-2 aspect-[4/5] w-full max-w-sm overflow-hidden bg-surface lg:sticky lg:top-32 lg:order-1">
              <Image
                src="/casestudies/Rehrig%20vision/SP%20-%20Home.png"
                alt="Service-provider home screen from the Rehrig Vision operations platform"
                fill
                sizes="(max-width: 1024px) 80vw, 35vw"
                className="object-cover"
              />
              <figcaption className="sr-only">
                Product interface from my enterprise UX design work.
              </figcaption>
            </figure>

            <div className="order-1 max-w-reading lg:order-2">
              <p className="text-caption font-medium uppercase tracking-wide text-accent-text">
                A little about me
              </p>
              <h1 className="mt-tight font-display text-title font-light tracking-tight">
                I design enterprise systems
                <br />
                <span className="italic text-accent-text">
                  that people can use with confidence.
                </span>
              </h1>
              <div className="mt-wide space-y-step text-body-lg leading-relaxed text-text-muted">
                <p>
                  I&apos;m Abdul Kaleem, a Principal UX and Product Designer
                  with 15+ years of experience creating enterprise SaaS
                  platforms, data-intensive products, and complex operational
                  workflows.
                </p>
                <p>
                  My recent work focuses on AI-assisted workflows across
                  supply chain, finance, and analytics. I partner with product
                  and engineering teams to turn intricate business logic into
                  clear, scalable experiences.
                </p>
              </div>

              <div className="mt-section">
                <h2 className="font-display text-heading tracking-tight">
                  Experience
                </h2>
                <ol className="mt-wide divide-y divide-border border-y border-border">
                  {experience.map((item) => (
                    <li
                      key={`${item.role}-${item.years}`}
                      className="flex flex-col gap-tight py-step sm:flex-row sm:items-baseline sm:justify-between"
                    >
                      <div>
                        <h3 className="text-body font-medium">{item.role}</h3>
                        <p className="text-small text-text-muted">
                          {item.company}
                        </p>
                        <p className="mt-tight max-w-reading text-small text-text-muted">
                          {item.highlights}
                        </p>
                      </div>
                      <p className="text-small text-text-muted">{item.years}</p>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="mt-section">
                <h2 className="font-display text-heading tracking-tight">
                  Skills &amp; tools
                </h2>
                <p className="mt-tight text-body text-text-muted">
                  Enterprise UX · SaaS product design · Complex workflows ·
                  AI-assisted interfaces · Information architecture ·
                  Interaction design · Design systems · Data visualization ·
                  UX strategy · Usability optimization · Figma · HTML/CSS
                </p>
              </div>

              <nav
                aria-label="About page links"
                className="mt-wide flex flex-wrap gap-step"
              >
                <TextLink href="mailto:abdul.kaleem@gmail.com">Email</TextLink>
                <TextLink
                  href="https://www.linkedin.com/in/abdulkaleem/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </TextLink>
                <TextLink href="/resume">Resume</TextLink>
              </nav>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
