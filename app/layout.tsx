import type { Metadata } from "next";
import { JetBrains_Mono, Noto_Sans_Arabic, Space_Grotesk } from "next/font/google";
import { Providers } from "@/components/Providers";
import "./globals.css";

const space = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const notoArabic = Noto_Sans_Arabic({
  variable: "--font-noto-arabic",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zaid-portfolio-pied.vercel.app"),
  title: {
    default: "Zaid Ibrahem — Software Engineer",
    template: "%s · Zaid Ibrahem",
  },
  description:
    "Portfolio of Zaid Ibrahem — backend systems, APIs, databases, and full-stack products.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${space.variable} ${jetbrains.variable} ${notoArabic.variable} h-full`}
    >
      <body className="min-h-full antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
