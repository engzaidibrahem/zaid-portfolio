import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-[90rem] flex-col gap-6 px-4 py-10 sm:flex-row sm:items-end sm:justify-between sm:px-6 lg:px-10">
        <div>
          <p className="font-display text-xl font-bold tracking-tight">
            {siteConfig.person.name}
          </p>
          <p className="mt-1 text-sm text-muted">
            {siteConfig.person.role} · {siteConfig.person.tagline}
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm text-muted sm:items-end">
          <Link href="/#work" className="hover:text-accent">
            All projects
          </Link>
          <p>
            © {new Date().getFullYear()} {siteConfig.person.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
