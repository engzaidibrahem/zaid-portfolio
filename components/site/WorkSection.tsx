"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { getAllCaseStudies } from "@/lib/case-studies";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export function WorkSection() {
  const { locale, t } = useLanguage();
  const projects = getAllCaseStudies(locale);

  return (
    <section id="work" className="scroll-mt-20 border-t border-border py-14 sm:py-18">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="section-tag">{t.work.label}</p>
          <h2 className="mt-3 font-display text-2xl font-bold sm:text-3xl">{t.work.title}</h2>
          <p className="mt-3 max-w-2xl text-sm text-muted sm:text-base">{t.work.subtitle}</p>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.04}>
              <article className="panel panel-hover flex h-full flex-col p-4 text-start">
                <div className="thumb">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 320px"
                    className={`object-cover ${project.imagePosition === "top" ? "object-top" : "object-center"}`}
                    priority={project.highlight}
                  />
                </div>

                <div className="mt-4 flex items-center justify-between gap-2">
                  <span className="font-mono text-[10px] text-muted-dim">{project.number}</span>
                  <span className="truncate font-mono text-[9px] uppercase tracking-wider text-accent/90">
                    {project.category}
                  </span>
                </div>

                <h3 className="mt-2 font-display text-base font-bold leading-snug sm:text-lg">
                  {project.name}
                </h3>
                <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-muted">
                  {project.summary}
                </p>

                <div className="mt-auto flex flex-wrap gap-3 pt-4">
                  <Link
                    href={`/work/${project.slug}`}
                    className="focus-ring inline-flex items-center gap-1 text-xs font-semibold text-accent"
                  >
                    {t.work.caseStudy}
                    <ArrowUpRight size={12} aria-hidden />
                  </Link>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="focus-ring text-xs text-muted hover:text-foreground"
                    >
                      {t.work.github}
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
