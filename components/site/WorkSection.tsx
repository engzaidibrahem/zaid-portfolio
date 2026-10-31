"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { caseStudies } from "@/lib/case-studies";

function ProjectImage({
  src,
  alt,
  priority,
  position = "center",
}: {
  src: string;
  alt: string;
  priority?: boolean;
  position?: "top" | "center";
}) {
  return (
    <div className="image-frame relative aspect-[16/10] overflow-hidden sm:aspect-[16/9]">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 60vw"
        className={`object-cover ${position === "top" ? "object-top" : "object-center"}`}
        priority={priority}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
    </div>
  );
}

function FeaturedProject({ slug }: { slug: string }) {
  const project = caseStudies.find((p) => p.slug === slug);
  if (!project) return null;

  return (
    <Reveal>
      <article className="card-surface overflow-hidden">
        <div className="grid lg:grid-cols-2 lg:items-stretch">
          <div className="order-2 flex flex-col justify-center p-6 sm:p-8 lg:order-1 lg:p-10">
            <div className="flex items-center justify-between gap-3">
              <span className="font-display text-6xl font-bold text-foreground/10">
                {project.number}
              </span>
              <span className="rounded-full border border-border px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-muted">
                {project.category}
              </span>
            </div>
            <h3 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              {project.name}
            </h3>
            <p className="mt-3 text-base font-medium text-accent">{project.tagline}</p>
            <p className="mt-4 text-sm leading-relaxed text-muted sm:text-[15px]">
              {project.summary}
            </p>
            <p className="mt-4 font-mono text-xs text-muted-dim">
              {project.stack.join(" · ")}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href={`/work/${project.slug}`}
                className="focus-ring inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-[#041018]"
              >
                View case study
                <ArrowUpRight size={15} aria-hidden />
              </Link>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-foreground hover:border-border-strong"
                >
                  Live
                  <ArrowUpRight size={15} aria-hidden />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-foreground hover:border-border-strong"
                >
                  GitHub
                </a>
              )}
            </div>
          </div>
          <div className="order-1 p-4 sm:p-5 lg:order-2 lg:p-6">
            <ProjectImage
              src={project.image}
              alt={project.imageAlt}
              priority
              position={project.imagePosition}
            />
          </div>
        </div>
      </article>
    </Reveal>
  );
}

function StandardProject({ slug, reverse }: { slug: string; reverse?: boolean }) {
  const project = caseStudies.find((p) => p.slug === slug);
  if (!project) return null;

  return (
    <Reveal>
      <article className="card-surface grid gap-6 p-6 sm:p-7 lg:grid-cols-2 lg:items-center lg:gap-8">
        <div className={reverse ? "lg:order-2" : ""}>
          <div className="flex items-start justify-between gap-3">
            <span className="font-display text-5xl font-bold text-foreground/10">
              {project.number}
            </span>
            <span className="rounded-full border border-border px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-muted">
              {project.category}
            </span>
          </div>
          <h3 className="mt-2 font-display text-2xl font-bold sm:text-3xl">
            {project.name}
          </h3>
          <p className="mt-2 text-sm font-medium text-accent">{project.tagline}</p>
          <p className="mt-3 text-sm leading-relaxed text-muted">{project.summary}</p>
          <Link
            href={`/work/${project.slug}`}
            className="focus-ring mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
          >
            View case study
            <ArrowUpRight size={14} aria-hidden />
          </Link>
        </div>
        <div className={reverse ? "lg:order-1" : ""}>
          <ProjectImage src={project.image} alt={project.imageAlt} position={project.imagePosition} />
        </div>
      </article>
    </Reveal>
  );
}

export function WorkSection() {
  return (
    <section id="work" className="scroll-mt-24 border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="section-label">Selected work</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Products built for real operations—not demos.
          </h2>
          <p className="mt-4 max-w-2xl text-muted sm:text-lg">
            Case studies across SaaS, logistics, education, restaurant operations,
            and client delivery—each with architecture, contribution, and live
            evidence where available.
          </p>
        </Reveal>

        <div className="mt-12 flex flex-col gap-8 lg:mt-16 lg:gap-10">
          <FeaturedProject slug="restaurant-inventory-dashboard" />
          <FeaturedProject slug="indoform" />
          <StandardProject slug="valley-order" />
          <StandardProject slug="school-management" reverse />
          <StandardProject slug="gia-maharani" />
          <StandardProject slug="gia-manager" reverse />
        </div>
      </div>
    </section>
  );
}
