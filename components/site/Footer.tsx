import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 sm:flex-row sm:items-end sm:justify-between sm:px-8">
        <div>
          <p className="font-display text-lg font-bold tracking-wide">
            {siteConfig.company.name}
          </p>
          <p className="mt-1 text-sm text-muted">
            {siteConfig.person.name} · {siteConfig.person.role}
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm text-muted sm:items-end">
          <Link href="/#work" className="hover:text-accent">
            Selected work
          </Link>
          <p>© {new Date().getFullYear()} {siteConfig.person.name}. Built from idea to production.</p>
        </div>
      </div>
    </footer>
  );
}
