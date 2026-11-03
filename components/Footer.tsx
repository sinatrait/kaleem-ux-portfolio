import Link from "next/link";
import Container from "@/components/Container";

export default function Footer() {
  return (
    <footer className="border-t border-border py-wide">
      <Container className="flex flex-col gap-wide text-small text-text-muted sm:flex-row sm:items-center">
        <Link
          href="/"
          className="font-display text-subheading tracking-tight text-text"
          aria-label="Abdul Kaleem, home"
        >
          Abdul Kaleem
        </Link>
        <p className="text-caption uppercase tracking-wide">
          Principal UX / Product Designer
        </p>
        <nav
          aria-label="Footer navigation"
          className="flex flex-wrap gap-wide sm:ml-auto"
        >
          <Link
            className="transition-colors duration-motion ease-editorial hover:text-text"
            href="/work"
          >
            Work
          </Link>
          <Link
            className="transition-colors duration-motion ease-editorial hover:text-text"
            href="/about"
          >
            About
          </Link>
          <Link
            className="transition-colors duration-motion ease-editorial hover:text-text"
            href="/contact"
          >
            Contact
          </Link>
        </nav>
        <nav aria-label="Contact links" className="flex flex-wrap gap-wide">
          <a
            className="transition-colors duration-motion ease-editorial hover:text-text"
            href="mailto:abdul.kaleem@gmail.com"
          >
            Email
          </a>
          <a
            className="transition-colors duration-motion ease-editorial hover:text-text"
            href="https://www.linkedin.com/in/abdulkaleem/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </nav>
        <p className="text-caption">
          Built with{" "}
          <Link
            className="transition-colors duration-motion ease-editorial hover:text-text"
            href="https://nextjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Next.js
          </Link>
        </p>
      </Container>
    </footer>
  );
}
