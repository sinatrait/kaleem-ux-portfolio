import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { SITE_URL } from "@/lib/site-url";
import "./globals.css";

const displayFont = Cormorant_Garamond({
  variable: "--font-display-family",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const textFont = DM_Sans({
  variable: "--font-text-family",
  subsets: ["latin"],
  display: "swap",
});

const themeInitializationScript = `
  let savedTheme = null;
  try {
    savedTheme = localStorage.getItem("portfolio-theme");
  } catch {}
  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const theme = savedTheme === "light" || savedTheme === "dark"
    ? savedTheme
    : systemPrefersDark ? "dark" : "light";
  document.documentElement.classList.toggle("dark", theme === "dark");
  document.documentElement.classList.toggle("light", theme === "light");
`;

export const metadata: Metadata = {
  metadataBase: SITE_URL,
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Abdul Kaleem — UX Portfolio",
    template: "%s | Abdul Kaleem",
  },
  description:
    "Portfolio of Abdul Kaleem, Principal UX / Product Designer with 15+ years creating enterprise SaaS, AI-assisted workflows, and data-intensive products.",
  openGraph: {
    type: "website",
    title: "Abdul Kaleem — UX Portfolio",
    description:
      "Portfolio of Abdul Kaleem, Principal UX / Product Designer with 15+ years creating enterprise SaaS, AI-assisted workflows, and data-intensive products.",
    siteName: "Abdul Kaleem — UX Portfolio",
    locale: "en_US",
    url: SITE_URL,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Abdul Kaleem — UX Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdul Kaleem — UX Portfolio",
    description:
      "Portfolio of Abdul Kaleem, Principal UX / Product Designer with 15+ years creating enterprise SaaS, AI-assisted workflows, and data-intensive products.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${displayFont.variable} ${textFont.variable}`}
    >
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeInitializationScript }} />
        <a
          href="#main-content"
          className="sr-only z-[100] rounded-control bg-surface-raised px-button-x py-button-y text-text focus:not-sr-only focus:fixed focus:left-gutter focus:top-tight"
        >
          Skip to content
        </a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
