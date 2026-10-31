"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { GithubIcon } from "@/components/icons";
import { getCaseStudy } from "@/lib/case-studies";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="border-t border-border pt-6 text-start">
      <h2 className="section-tag">{title}</h2>
      <div className="mt-3 text-sm leading-relaxed text-muted sm:text-[15px]">
        {children}
      </div>
    </section>
  );
}

export function CaseStudyView({ slug }: { slug: string }) {
  const { locale, t } = useLanguage();
  const project = getCaseStudy(slug, locale);
  const c = t.caseStudy;

  if (!project) {
    return (
      <p className="text-muted">
        {locale === "ar" ? "المشروع غير موجود." : "Project not found."}
      </p>
    );
  }

  return (
    <article className="text-start">
      <Link href="/#work" className="focus-ring text-xs text-muted hover:text-accent">
        ← {c.back}
      </Link>

      <header className="mt-8 max-w-2xl">
        <p className="font-mono text-[10px] uppercase tracking-wider text-muted-dim">
          {project.category} · {project.number}
        </p>
        <h1 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
          {project.name}
        </h1>
        <p className="mt-3 text-base text-accent">{project.tagline}</p>
        <p className="mt-4 text-sm leading-relaxed text-muted">{project.summary}</p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {project.capabilities.map((cap) => (
            <li
              key={cap}
              className="rounded-md border border-border px-2 py-0.5 font-mono text-[10px] text-muted"
            >
              {cap}
            </li>
          ))}
        </ul>

        <p className="mt-4 font-mono text-[11px] text-muted-dim">
          {project.stack.join(" · ")}
        </p>

        <div className="mt-5 flex flex-wrap gap-4 text-sm">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-accent"
            >
              {c.live}
              <ArrowUpRight size={12} aria-hidden />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-muted hover:text-foreground"
            >
              <GithubIcon size={14} />
              {c.repo}
            </a>
          )}
        </div>
      </header>

      <div className="mt-10 max-w-2xl space-y-1">
        <Block title={c.overview}>{project.overview}</Block>
        <Block title={c.problem}>{project.problem}</Block>
        <Block title={c.solution}>{project.solution}</Block>
        <Block title={c.architecture}>{project.architecture}</Block>
        <Block title={c.contribution}>{project.myContribution}</Block>
        {project.teamContribution && (
          <Block title={c.team}>{project.teamContribution}</Block>
        )}
        <Block title={c.challenges}>{project.challenges}</Block>
      </div>
    </article>
  );
}
