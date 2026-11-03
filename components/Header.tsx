"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";

const navigation = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const linkClass =
  "text-caption font-medium uppercase tracking-wide text-text-muted transition-colors duration-motion ease-editorial hover:text-text";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuPanelRef = useRef<HTMLDivElement>(null);
  const previousPathname = useRef(pathname);

  useEffect(() => {
    function updateScrollState() {
      setScrolled(window.scrollY > 8);
    }

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    menuPanelRef.current?.querySelector<HTMLElement>("a")?.focus();

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  useEffect(() => {
    if (previousPathname.current === pathname) {
      return;
    }

    previousPathname.current = pathname;
    setMenuOpen(false);
    window.requestAnimationFrame(() => {
      document.getElementById("main-content")?.focus();
    });
  }, [pathname]);

  function closeMenu() {
    setMenuOpen(false);
  }

  function closeMenuOnButton() {
    setMenuOpen(false);
    menuButtonRef.current?.focus();
  }

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-surface/90 backdrop-blur transition-colors duration-motion ease-editorial ${
        scrolled ? "border-border" : "border-transparent"
      }`}
    >
      <div className="relative w-full px-gutter">
        <div className="flex min-h-control items-center justify-between gap-wide py-tight">
          <Link
            href="/"
            className="font-display text-subheading font-semibold tracking-wide text-text"
            aria-label="Abdul Kaleem, home"
          >
            AK
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-wide md:flex">
            {navigation.map((item) => (
              <Link className={linkClass} href={item.href} key={item.label}>
                {item.label}
              </Link>
            ))}
            <Link className={linkClass} href="/resume">
              Resume
            </Link>
            <ThemeToggle />
          </nav>

          <div className="flex items-center gap-tight md:hidden">
            <ThemeToggle />
            <button
              ref={menuButtonRef}
              type="button"
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((open) => !open)}
              className="inline-flex min-h-control min-w-control items-center justify-center rounded-control border border-border bg-surface-raised text-text transition-colors duration-motion ease-editorial hover:bg-surface"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                className="size-icon"
              >
                {menuOpen ? (
                  <path d="m6 6 12 12M18 6 6 18" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        <div
          id="mobile-navigation"
          ref={menuPanelRef}
          hidden={!menuOpen}
          className="absolute inset-x-gutter top-full z-50 rounded-card border border-border bg-surface-raised p-card shadow-card md:hidden"
        >
            <nav aria-label="Mobile primary" className="flex flex-col gap-wide">
              {navigation.map((item) => (
                <Link
                  className={linkClass}
                  href={item.href}
                  key={item.label}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                className={linkClass}
                href="/resume"
                onClick={closeMenu}
              >
                Resume
              </Link>
              <button
                type="button"
                onClick={closeMenuOnButton}
                className="self-start text-small text-text-muted transition-colors duration-motion ease-editorial hover:text-text"
              >
                Close menu
              </button>
            </nav>
        </div>
      </div>
    </header>
  );
}
