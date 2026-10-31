import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import type { CaseStudy } from "@/lib/case-studies";
import { GithubIcon } from "@/components/icons";

function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="border-t border-border pt-8 first:border-t-0 first:pt-0">
      <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
        {title}
      </h2>
      <div className="mt-3 text-sm leading-relaxed text-muted sm:text-[15px]">
        {children}
      </div>
    </section>
  );
}

export function CaseStudyView({ project }: { project: CaseStudy }) {
  return (
    <article>
      <Link
        href="/#work"
        className="focus-ring inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
      >
        <ArrowLeft size={16} aria-hidden />
        Back to selected work
      </Link>

      <header className="mt-8 max-w-3xl">
        <p className="section-label">{project.category}</p>
        <h1 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
          {project.name}
        </h1>
        <p className="mt-4 text-lg font-medium text-accent">{project.tagline}</p>
        <p className="mt-4 text-muted">{project.summary}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-[#041018]"
            >
              Live project
              <ArrowUpRight size={15} aria-hidden />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold hover:border-border-strong"
            >
              <GithubIcon size={15} />
              GitHub
            </a>
          )}
        </div>
      </header>

      <div className="mt-10 image-frame relative aspect-[16/10] overflow-hidden sm:aspect-[16/9]">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          className={`object-cover ${project.imagePosition === "top" ? "object-top" : "object-center"}`}
          sizes="(max-width: 768px) 100vw, 960px"
          priority
        />
      </div>

      <div className="mt-10 flex flex-wrap gap-2">
        {project.capabilities.map((cap) => (
          <span
            key={cap}
            className="rounded-md border border-border bg-surface px-2.5 py-1 text-xs text-foreground/90"
          >
            {cap}
          </span>
        ))}
      </div>

      <p className="mt-6 font-mono text-xs text-muted-dim">
        Stack · {project.stack.join(" · ")}
      </p>

      <div className="mt-12 grid max-w-3xl gap-8">
        <Block title="Overview">{project.overview}</Block>
        <Block title="Problem / need">{project.problem}</Block>
        <Block title="Solution">{project.solution}</Block>
        <Block title="Architecture">{project.architecture}</Block>
        <Block title="My contribution">{project.myContribution}</Block>
        {project.teamContribution && (
          <Block title="Team / client">{project.teamContribution}</Block>
        )}
        <Block title="Challenges & lessons">{project.challenges}</Block>
      </div>
    </article>
  );
}
