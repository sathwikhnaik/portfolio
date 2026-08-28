import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { ScrollProgress } from "@/components/scroll-progress";
import { profile } from "@/data/portfolio";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";

const geist = Geist({ variable: "--font-sans", subsets: ["latin"], display: "swap" });
const geistMono = Geist_Mono({ variable: "--font-mono", subsets: ["latin"], display: "swap" });

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: `${profile.name} · ${profile.title}`, template: `%s · ${profile.name}` },
  description: profile.summary,
  applicationName: `${profile.name} Portfolio`,
  authors: [{ name: profile.name, url: profile.linkedin }],
  icons: { icon: "/icon.svg", shortcut: "/icon.svg", apple: "/icon.svg" },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    title: `${profile.name} · ${profile.title}`,
    description: profile.summary,
    url: "/",
    siteName: `${profile.name} Portfolio`,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: `${profile.name}, Data Engineer and Data Scientist` }],
  },
  twitter: { card: "summary_large_image", title: `${profile.name} · ${profile.title}`, description: profile.summary, images: ["/og.png"] },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: [{ media: "(prefers-color-scheme: light)", color: "#f2f5f8" }, { media: "(prefers-color-scheme: dark)", color: "#071018" }] };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.title,
    email: `mailto:${profile.email}`,
    url: siteUrl,
    sameAs: [profile.linkedin, profile.github],
    alumniOf: { "@type": "CollegeOrUniversity", name: "University of Maryland, College Park" },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.variable} ${geistMono.variable}`}>
        <ThemeProvider>
          <a className="skip-link" href="#main-content">Skip to content</a>
          <ScrollProgress />
          {children}
        </ThemeProvider>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }} />
      </body>
    </html>
  );
}
