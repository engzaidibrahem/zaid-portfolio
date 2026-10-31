"use client";

import {
  Boxes,
  CloudCog,
  Database,
  GitBranch,
  LayoutTemplate,
  Plug,
  Server,
  Workflow,
} from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";

const services = [
  {
    icon: Server,
    title: "Backend Engineering",
    description:
      "Scalable services, authentication, domain logic, and integrations built for long-running products.",
    stack: "Django · FastAPI · Node.js · PostgreSQL",
  },
  {
    icon: GitBranch,
    title: "REST API Development",
    description:
      "Clear API contracts, versioning discipline, and workflows that frontend and mobile clients can rely on.",
    stack: "REST · RBAC · Webhooks · Documentation",
  },
  {
    icon: LayoutTemplate,
    title: "SaaS & Business Platforms",
    description:
      "Multi-role dashboards, merchant systems, and operational tools aligned with how teams actually work.",
    stack: "Dashboards · Workflows · Multi-tenant patterns",
  },
  {
    icon: Boxes,
    title: "Frontend Development",
    description:
      "Modern interfaces with strong hierarchy, responsive layouts, and performance-conscious implementation.",
    stack: "React · Next.js · TypeScript",
  },
  {
    icon: Database,
    title: "Database Design",
    description:
      "Schema design, ledgers, reporting models, and data integrity for business-critical applications.",
    stack: "PostgreSQL · MySQL · Migrations · Auditing",
  },
  {
    icon: Plug,
    title: "Third-Party Integrations",
    description:
      "Payments, messaging, maps, and external services wired into dependable product flows.",
    stack: "WhatsApp · Payments · External APIs",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description:
      "Approval paths, notifications, and operational automation that reduce manual coordination.",
    stack: "Queues · Events · Business rules",
  },
  {
    icon: CloudCog,
    title: "Deployment & Maintenance",
    description:
      "From Dockerized environments to VPS and CI-friendly releases—keeping products stable in production.",
    stack: "Docker · Linux · Nginx · Git · CI/CD",
  },
];

export function CapabilitiesSection() {
  return (
    <section
      id="capabilities"
      className="scroll-mt-24 border-t border-border bg-background-elevated/50 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="section-label">Capabilities</p>
          <h2 className="mt-3 max-w-xl font-display text-3xl font-bold sm:text-4xl">
            Engineering services that cover the full product stack.
          </h2>
        </Reveal>

        <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-2 lg:gap-5">
          {services.map((item) => (
            <StaggerItem key={item.title}>
              <article className="card-surface group h-full p-6 transition-colors hover:border-border-strong sm:p-7">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-accent-soft text-accent">
                  <item.icon size={18} aria-hidden />
                </div>
                <h3 className="font-display text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
                <p className="mt-4 border-t border-border pt-3 font-mono text-[11px] text-muted-dim">
                  {item.stack}
                </p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
