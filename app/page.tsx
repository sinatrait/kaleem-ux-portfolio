import Link from "next/link";
import CaseStudyCard from "@/components/CaseStudyCard";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import TextLink from "@/components/TextLink";
import { getCaseStudies } from "@/lib/case-studies";
import { SITE_URL } from "@/lib/site-url";

const primaryLinkClass =
  "inline-flex min-h-control items-center justify-center border border-text bg-text px-button-x py-button-y text-small font-medium text-surface transition-colors duration-motion ease-editorial hover:bg-surface hover:text-text";

const secondaryLinkClass =
  "inline-flex min-h-control items-center justify-center border border-border bg-surface px-button-x py-button-y text-small font-medium text-text transition-colors duration-motion ease-editorial hover:border-text";

export default async function Home() {
  const allCaseStudies = await getCaseStudies();
  const caseStudies = allCaseStudies
    .filter((caseStudy) => caseStudy.featured)
    .sort((left, right) => left.order - right.order || left.slug.localeCompare(right.slug))
    .slice(0, 3);

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Abdul Kaleem",
    jobTitle: "Principal UX / Product Designer",
    url: SITE_URL.toString(),
    image: new URL("/images/placeholder/portrait.svg", SITE_URL).toString(),
    email: "abdul.kaleem@gmail.com",
    sameAs: ["https://www.linkedin.com/in/abdulkaleem/"],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema).replace(/</g, "\\u003c"),
        }}
      />
      <main id="main-content" tabIndex={-1}>
      <Section className="flex min-h-[76svh] items-center">
        <Container>
          <Reveal className="max-w-[62rem]">
            <div className="mb-wide flex flex-wrap items-center gap-tight text-caption font-medium uppercase tracking-wide text-text-muted">
              <span>Principal UX / Product Designer</span>
              <span aria-hidden="true" className="h-px w-8 bg-accent" />
              <span>15+ Years Experience</span>
            </div>
            <h1 className="font-display text-display font-light leading-[0.98] tracking-tight">
              Designing systems
              <br />
              <span className="italic text-accent-text">that make complexity</span>
              <br />
              feel effortless.
            </h1>
            <p className="mt-wide max-w-prose text-body-lg text-text-muted">
              I design enterprise AI and SaaS experiences that make complex
              workflows clear and actionable for the people who depend on them.
            </p>
            <div className="mt-wide flex flex-wrap gap-tight">
              <Link className={primaryLinkClass} href="#work">
                View selected work <span aria-hidden="true" className="ml-tight">↓</span>
              </Link>
              <Link className={secondaryLinkClass} href="#contact">
                Get in touch
              </Link>
            </div>
            <dl className="mt-section grid max-w-3xl grid-cols-2 gap-wide border-t border-border pt-wide sm:grid-cols-3">
              <div>
                <dt className="font-display text-heading leading-none">15+</dt>
                <dd className="mt-tight text-caption text-text-muted">
                  Years designing enterprise SaaS
                </dd>
              </div>
              <div>
                <dt className="font-display text-subheading leading-none">
                  Enterprise
                </dt>
                <dd className="mt-tight text-caption text-text-muted">
                  Products and operational platforms
                </dd>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <dt className="font-display text-subheading leading-none">
                  AI-assisted
                </dt>
                <dd className="mt-tight text-caption text-text-muted">
                  Workflows, analytics, and decision tools
                </dd>
              </div>
            </dl>
          </Reveal>
        </Container>
      </Section>

      <Section
        id="process"
        aria-labelledby="process-heading"
        className="bg-surface-raised"
      >
        <Container>
          <Reveal className="grid gap-wide md:grid-cols-[1fr_2fr] md:items-end">
            <div>
              <p className="text-caption font-medium uppercase tracking-wide text-accent-text">
                My process
              </p>
              <h2
                id="process-heading"
                className="mt-tight font-display text-heading tracking-tight"
              >
                Thoughtful work, from first question to shipped product.
              </h2>
            </div>
            <p className="max-w-reading text-body-lg text-text-muted">
              I adapt the process to each team and challenge, bringing people
              together to understand the problem, explore ideas, and deliver
              useful solutions.
            </p>
          </Reveal>

          <ol className="mt-wide grid gap-step sm:grid-cols-2 lg:grid-cols-5">
            {[
              {
                title: "Research",
                description:
                  "Understand people, their needs, and the context around the problem.",
              },
              {
                title: "Ideation",
                description:
                  "Explore possibilities and shape promising ideas with the team.",
              },
              {
                title: "Design",
                description:
                  "Turn ideas into clear flows, wireframes, and visual concepts.",
              },
              {
                title: "Testing",
                description:
                  "Gather feedback, learn what works, and refine the experience.",
              },
              {
                title: "Delivery",
                description:
                  "Partner with engineering to bring the solution into the product.",
              },
            ].map((step, index) => (
              <li key={step.title}>
                <Reveal
                  className="h-full border-t-2 border-accent bg-surface p-card"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <p className="text-caption font-medium uppercase tracking-wide text-accent-text">
                    Step {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-tight font-display text-subheading">
                    {step.title}
                  </h3>
                  <p className="mt-tight text-small text-text-muted">
                    {step.description}
                  </p>
                </Reveal>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section id="work" aria-labelledby="work-heading">
        <Container>
          <Reveal className="flex flex-col gap-tight sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-caption font-medium uppercase tracking-wide text-accent-text">
                Selected work
              </p>
              <h2
                id="work-heading"
                className="mt-tight font-display text-title font-light tracking-tight"
              >
                Case studies
              </h2>
            </div>
            <TextLink href="/work">View all work →</TextLink>
          </Reveal>

          <div className="mt-section grid gap-section lg:grid-cols-2">
            {caseStudies.map((caseStudy, index) => (
              <Reveal
                key={caseStudy.slug}
                className={index === 0 ? "lg:col-span-2" : ""}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CaseStudyCard
                  caseStudy={caseStudy}
                  index={index}
                  featured={index === 0}
                />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="about" aria-labelledby="about-heading" className="bg-surface-raised">
        <Container>
          <Reveal className="grid gap-section lg:grid-cols-2">
            <div className="max-w-reading">
              <p className="text-caption font-medium uppercase tracking-wide text-text-muted">
                About
              </p>
              <h2 id="about-heading" className="mt-tight font-display text-title font-light tracking-tight">
                15+ years designing
                <br />
                <span className="italic text-accent-text">for the hard problems</span>
                <br />
                in enterprise software.
              </h2>
              <p className="mt-wide text-body text-text-muted">
                I specialize in translating operational complexity into
                interfaces that feel intuitive. My work spans AI-assisted
                systems, analytics platforms, and complex workflows.
              </p>
              <TextLink className="mt-wide" href="/about">
                Read more about my approach →
              </TextLink>
            </div>
            <ol className="divide-y divide-border border-y border-border">
              {[
                {
                  title: "Enterprise UX",
                  description:
                    "Designing for complex organizational needs and diverse user roles.",
                },
                {
                  title: "AI-assisted workflows",
                  description:
                    "Making AI-supported experiences understandable and actionable.",
                },
                {
                  title: "Analytics & data",
                  description:
                    "Structuring information to help teams interpret operational data.",
                },
                {
                  title: "Operational platforms",
                  description:
                    "Designing tools for high-stakes, time-sensitive work.",
                },
              ].map((area, index) => (
                <li
                  key={area.title}
                  className="flex gap-wide py-step first:pt-wide last:pb-wide"
                >
                  <span className="pt-1 font-display text-subheading text-text-muted">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-body font-medium">{area.title}</h3>
                    <p className="mt-tight text-small text-text-muted">
                      {area.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </Container>
      </Section>

      <Section
        id="contact"
        aria-labelledby="contact-heading"
        className="border-t border-border bg-surface-raised"
      >
        <Container>
          <Reveal className="max-w-reading">
            <p className="text-caption font-medium uppercase tracking-wide text-accent-text">
              Have a good one in mind?
            </p>
            <h2
              id="contact-heading"
              className="mt-tight font-display text-heading tracking-tight"
            >
              Let&apos;s make something meaningful.
            </h2>
            <p className="mt-tight text-body-lg text-text-muted">
              I&apos;m open to conversations about enterprise UX, AI-assisted
              products, and complex workflow design.
            </p>
            <Link
              className={`${primaryLinkClass} mt-wide`}
              href="mailto:abdul.kaleem@gmail.com"
            >
              Get in touch
            </Link>
          </Reveal>
        </Container>
      </Section>
      </main>
    </>
  );
}
