"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { caseStudies } from "@/lib/case-studies";

function Artifact({
  src,
  alt,
  priority,
  position = "center",
  tall,
}: {
  src: string;
  alt: string;
  priority?: boolean;
  position?: "top" | "center";
  tall?: boolean;
}) {
  return (
    <div
      className={`artifact-frame relative overflow-hidden ${tall ? "aspect-[3/4] sm:aspect-[4/5]" : "aspect-[4/3] sm:aspect-[16/10]"}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 1024px) 100vw, 45vw"
        className={`object-cover ${position === "top" ? "object-top" : "object-center"}`}
        priority={priority}
      />
    </div>
  );
}

function ProjectRow({
  slug,
  variant,
}: {
  slug: string;
  variant: "feature" | "wide" | "compact";
}) {
  const project = caseStudies.find((p) => p.slug === slug);
  if (!project) return null;

  const isFeature = variant === "feature";
  const reverse = project.number === "03" || project.number === "05";

  return (
    <Reveal>
      <article className="border-t border-border py-10 sm:py-14 lg:py-16">
        <div
          className={`grid items-start gap-8 lg:gap-12 ${
            isFeature
              ? "lg:grid-cols-12"
              : "lg:grid-cols-[1fr_1.1fr]"
          } ${reverse && !isFeature ? "lg:[direction:rtl] lg:*:[direction:ltr]" : ""}`}
        >
          <div className={isFeature ? "lg:col-span-5" : ""}>
            <div className="flex items-baseline gap-4">
              <span className="font-display text-5xl font-bold text-foreground/15 sm:text-6xl">
                {project.number}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-dim">
                {project.category}
              </span>
            </div>
            <h3
              className={`mt-4 font-display font-bold tracking-tight ${
                isFeature ? "text-3xl sm:text-4xl lg:text-5xl" : "text-2xl sm:text-3xl"
              }`}
            >
              {project.name}
            </h3>
            <p className="mt-3 text-sm font-medium text-accent sm:text-base">
              {project.tagline}
            </p>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted sm:text-[15px]">
              {project.summary}
            </p>
            <p className="mt-5 font-mono text-[10px] leading-relaxed text-muted-dim">
              {project.stack.join(" · ")}
            </p>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
              <Link
                href={`/work/${project.slug}`}
                className="link-underline focus-ring text-sm"
              >
                Case study
              </Link>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline focus-ring text-sm text-muted"
                >
                  Live
                  <ArrowUpRight size={14} className="inline" aria-hidden />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline focus-ring text-sm text-muted"
                >
                  GitHub
                </a>
              )}
            </div>
          </div>

          <div className={isFeature ? "lg:col-span-7" : ""}>
            <Artifact
              src={project.image}
              alt={project.imageAlt}
              priority={project.highlight}
              position={project.imagePosition}
              tall={isFeature && project.slug === "restaurant-inventory-dashboard"}
            />
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export function WorkSection() {
  return (
    <section id="work" className="scroll-mt-20">
      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-10">
        <Reveal>
          <div className="border-b border-border py-12 sm:py-16">
            <p className="section-index">01 — Selected work</p>
            <h2 className="mt-4 max-w-3xl font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.75rem]">
              Engineering artifacts from production systems.
            </h2>
            <p className="mt-4 max-w-2xl text-muted">
              Each entry links to a structured case study—problem, architecture,
              contribution, and stack—without inflated claims.
            </p>
          </div>
        </Reveal>

        <ProjectRow slug="restaurant-inventory-dashboard" variant="feature" />
        <ProjectRow slug="indoform" variant="feature" />
        <ProjectRow slug="valley-order" variant="wide" />
        <ProjectRow slug="school-management" variant="wide" />
        <ProjectRow slug="gia-maharani" variant="compact" />
        <ProjectRow slug="gia-manager" variant="compact" />
      </div>
    </section>
  );
}
