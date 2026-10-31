import type { MetadataRoute } from "next";
import { getCaseStudySlugs } from "@/lib/case-studies";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://zaid-portfolio-pied.vercel.app";
  const work = getCaseStudySlugs().map((slug) => ({
    url: `${base}/work/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...work,
  ];
}
