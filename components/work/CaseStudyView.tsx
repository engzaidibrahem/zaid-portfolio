import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import type { CaseStudy } from "@/lib/case-studies";
import { GithubIcon } from "@/components/icons";

function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="border-t border-border py-8 first:border-t-0 first:pt-0">
      <h2 className="section-index">{title}</h2>
      <div className="mt-4 max-w-2xl text-sm leading-relaxed text-muted sm:text-[15px]">
        {children}
      </div>
    </section>
  );
}

export function CaseStudyView({ project }: { project: CaseStudy }) {
  return (
    <article className="pb-8">
      <Link
        href="/#work"
        className="link-underline focus-ring font-mono text-[11px] uppercase tracking-[0.16em] text-muted"
      >
        ← Work index
      </Link>

      <header className="mt-10 max-w-3xl border-b border-border pb-10">
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-dim">
          {project.category} · {project.number}
        </p>
        <h1 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          {project.name}
        </h1>
        <p className="mt-4 text-lg text-accent">{project.tagline}</p>
        <p className="mt-4 text-muted">{project.summary}</p>

        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline focus-ring text-sm"
            >
              Live project
              <ArrowUpRight size={14} className="inline" aria-hidden />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline focus-ring inline-flex items-center gap-2 text-sm text-muted"
            >
              <GithubIcon size={14} />
              Repository
            </a>
          )}
        </div>
      </header>

      <div className="mt-10 artifact-frame relative aspect-[16/10] max-w-4xl overflow-hidden sm:aspect-[16/9]">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          className={`object-cover ${project.imagePosition === "top" ? "object-top" : "object-center"}`}
          sizes="(max-width: 768px) 100vw, 896px"
          priority
        />
      </div>

      <ul className="mt-8 flex max-w-3xl flex-wrap gap-2">
        {project.capabilities.map((cap) => (
          <li
            key={cap}
            className="border border-border px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-muted"
          >
            {cap}
          </li>
        ))}
      </ul>

      <p className="mt-6 font-mono text-[11px] text-muted-dim">
        {project.stack.join(" · ")}
      </p>

      <div className="mt-12 max-w-2xl">
        <Block title="Overview">{project.overview}</Block>
        <Block title="Problem">{project.problem}</Block>
        <Block title="Solution">{project.solution}</Block>
        <Block title="Architecture">{project.architecture}</Block>
        <Block title="My contribution">{project.myContribution}</Block>
        {project.teamContribution && (
          <Block title="Team / client">{project.teamContribution}</Block>
        )}
        <Block title="Challenges">{project.challenges}</Block>
      </div>
    </article>
  );
}
