import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono, Noto_Sans_Arabic, Syne } from "next/font/google";
import { Providers } from "@/components/Providers";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const notoArabic = Noto_Sans_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Zaid Ibrahem — Full-Stack Engineer & Product Builder",
  description:
    "Full-Stack Engineer & Product Builder specializing in scalable backend systems, SaaS platforms, APIs, and real-world digital products.",
  keywords: [
    "Full-Stack Engineer",
    "Django",
    "FastAPI",
    "Next.js",
    "SaaS",
    "Backend",
    "Zaid Ibrahem",
  ],
  openGraph: {
    title: "Zaid Ibrahem — Full-Stack Engineer & Product Builder",
    description:
      "I build systems that businesses use. Scalable backends, SaaS platforms, and production-ready products.",
    type: "website",
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
      className={`${syne.variable} ${dmSans.variable} ${jetbrains.variable} ${notoArabic.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background font-sans text-foreground">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
