import type { Metadata } from "next";
import { IBM_Plex_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zaid-portfolio-pied.vercel.app"),
  title: {
    default: "Zaid Ibrahem — SOFT STEP · Software Engineering",
    template: "%s · Zaid Ibrahem",
  },
  description:
    "Engineering digital products that move businesses forward. Backend systems, APIs, SaaS platforms, and complete business software by Zaid Ibrahem and SOFT STEP, Indonesia.",
  keywords: [
    "SOFT STEP",
    "Zaid Ibrahem",
    "Software Engineer",
    "Full-Stack",
    "Django",
    "Next.js",
    "SaaS",
    "Indonesia",
  ],
  openGraph: {
    title: "Zaid Ibrahem — SOFT STEP",
    description:
      "Engineering digital products that move businesses forward.",
    type: "website",
    url: "https://zaid-portfolio-pied.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${plexMono.variable} h-full`}>
      <body className="min-h-full bg-background font-sans text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
