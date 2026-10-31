import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans, Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zaid-portfolio-pied.vercel.app"),
  title: {
    default: "Zaid Ibrahem — Software Engineer",
    template: "%s · Zaid Ibrahem",
  },
  description:
    "Personal portfolio of Zaid Ibrahem — software engineer focused on Python backends, APIs, databases, and full-stack digital products.",
  openGraph: {
    title: "Zaid Ibrahem — Software Engineer",
    description:
      "Backend systems, APIs, and full-stack products built for real-world use.",
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
    <html lang="en" className={`${syne.variable} ${plexSans.variable} ${plexMono.variable} h-full`}>
      <body className="page-shell min-h-full font-sans antialiased">
        <div className="relative z-[1]">{children}</div>
      </body>
    </html>
  );
}
