"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
  document.documentElement.classList.toggle("light", theme === "light");
  try {
    localStorage.setItem("portfolio-theme", theme);
  } catch {
    // Theme changes still apply when browser storage is unavailable.
  }
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    setTheme(document.documentElement.classList.contains("dark") ? "dark" : "light");

    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
    function syncSystemTheme(event: MediaQueryListEvent) {
      let savedTheme: string | null = null;
      try {
        savedTheme = localStorage.getItem("portfolio-theme");
      } catch {
        // Continue following the system preference when storage is unavailable.
      }

      if (savedTheme !== null) {
        return;
      }

      const nextTheme = event.matches ? "dark" : "light";
      document.documentElement.classList.toggle("dark", event.matches);
      document.documentElement.classList.toggle("light", !event.matches);
      setTheme(nextTheme);
    }

    systemTheme.addEventListener("change", syncSystemTheme);
    return () => systemTheme.removeEventListener("change", syncSystemTheme);
  }, []);

  function toggleTheme() {
    const nextTheme = document.documentElement.classList.contains("dark")
      ? "light"
      : "dark";
    applyTheme(nextTheme);
    setTheme(nextTheme);
  }

  return (
    <button
      type="button"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      aria-pressed={theme === "dark"}
      onClick={toggleTheme}
      className="inline-flex min-h-control min-w-control items-center justify-center rounded-pill border border-border bg-surface-raised text-text transition-colors duration-motion ease-editorial hover:bg-surface"
    >
      {theme === "dark" ? (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          className="size-icon"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
        </svg>
      ) : (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          className="size-icon"
        >
          <path d="M20.2 15.4A8.5 8.5 0 0 1 8.6 3.8 8.5 8.5 0 1 0 20.2 15.4Z" />
        </svg>
      )}
    </button>
  );
}
