"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { GithubIcon } from "@/components/icons";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { projectMeta } from "@/lib/projects";

function ProjectMedia({
  image,
  name,
  category,
  subtitle,
  featured,
  placeholderLabel,
}: {
  image: string;
  name: string;
  category: string;
  subtitle: string;
  featured?: boolean;
  placeholderLabel: string;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={`group/media relative overflow-hidden rounded-2xl border border-border bg-background-secondary ${
        featured ? "aspect-[16/10] sm:aspect-[16/9]" : "aspect-[16/10]"
      }`}
    >
      {!failed ? (
        <>
          <Image
            src={image}
            alt={`${name} preview`}
            fill
            sizes={
              featured
                ? "(max-width: 768px) 100vw, 70vw"
                : "(max-width: 768px) 100vw, 50vw"
            }
            className="object-cover object-top transition-transform duration-700 ease-out group-hover/media:scale-[1.04]"
            onError={() => setFailed(true)}
            priority={featured}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent opacity-80" />
        </>
      ) : (
        <div className="absolute inset-0 flex flex-col justify-between bg-[linear-gradient(145deg,#101014_0%,#16161c_45%,#0d0d10_100%)] p-6 sm:p-8">
          <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:28px_28px]" />
          <div className="relative">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
              {category}
            </p>
            <p className="mt-3 font-display text-2xl font-bold text-foreground sm:text-3xl">
              {name}
            </p>
          </div>
          <div className="relative">
            <p className="max-w-sm text-sm text-muted">{subtitle}</p>
            <div className="mt-4 h-px w-full bg-border" />
            <p className="mt-3 font-mono text-[10px] uppercase tracking-wider text-muted/70">
              {placeholderLabel} {image}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export function Projects() {
  const { t } = useLanguage();

  return (
    <section id="work" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="mb-12 max-w-2xl sm:mb-16">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              {t.projects.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {t.projects.title}
            </h2>
            <p className="mt-4 text-base text-muted sm:text-lg">
              {t.projects.subtitle}
            </p>
          </div>
        </Reveal>

        <div className="flex flex-col gap-8 lg:gap-10">
          {projectMeta.map((project, index) => {
            const copy = t.projects.items[project.copyKey];
            const featured = project.featured;

            return (
              <Reveal key={project.id} delay={index * 0.05}>
                <article
                  className={`group relative overflow-hidden rounded-3xl border border-border bg-card ${
                    featured ? "p-6 sm:p-8 lg:p-10" : "p-6 sm:p-7"
                  }`}
                >
                  <div className="pointer-events-none absolute -end-16 -top-16 h-48 w-48 rounded-full bg-accent/[0.03] blur-3xl transition-opacity group-hover:opacity-100" />

                  <div
                    className={`grid gap-8 ${
                      featured
                        ? "lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-12"
                        : "lg:grid-cols-2 lg:items-start lg:gap-10"
                    }`}
                  >
                    <div className="order-2 lg:order-1">
                      <div className="flex items-start justify-between gap-4">
                        <span
                          className={`font-display font-bold leading-none text-foreground/10 ${
                            featured ? "text-7xl sm:text-8xl" : "text-6xl sm:text-7xl"
                          }`}
                        >
                          {project.number}
                        </span>
                        <span className="mt-2 rounded-full border border-border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                          {copy.category}
                        </span>
                      </div>

                      <h3
                        className={`mt-2 font-display font-bold tracking-tight text-foreground ${
                          featured
                            ? "text-3xl sm:text-4xl lg:text-[2.75rem]"
                            : "text-2xl sm:text-3xl"
                        }`}
                      >
                        {copy.name}
                      </h3>
                      <p className="mt-3 text-base font-medium text-accent sm:text-lg">
                        {copy.subtitle}
                      </p>
                      <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted sm:text-[15px]">
                        {copy.description}
                      </p>

                      <div className="mt-6">
                        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                          {t.projects.keyCapabilities}
                        </p>
                        <ul className="mt-3 flex flex-wrap gap-2">
                          {copy.capabilities.map((item) => (
                            <li
                              key={item}
                              className="rounded-md border border-border bg-background/50 px-2.5 py-1 text-xs text-foreground/85"
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-5">
                        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                          {t.projects.stack}
                        </p>
                        <p className="mt-2 text-sm text-foreground/80">
                          {project.stack.join(" · ")}
                        </p>
                      </div>

                      <div className="mt-7 flex flex-wrap gap-3">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="focus-ring inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]"
                        >
                          {t.projects.live}
                          <ArrowUpRight size={15} aria-hidden />
                        </a>
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="focus-ring inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-accent/35 hover:bg-white/[0.03]"
                          >
                            <GithubIcon size={15} />
                            {t.projects.github}
                          </a>
                        )}
                      </div>
                    </div>

                    <div className="order-1 lg:order-2">
                      <ProjectMedia
                        image={project.image}
                        name={copy.name}
                        category={copy.category}
                        subtitle={copy.subtitle}
                        featured={featured}
                        placeholderLabel={t.projects.placeholder}
                      />
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
