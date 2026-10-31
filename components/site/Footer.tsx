"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { siteConfig } from "@/lib/site";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="font-display font-bold">{siteConfig.name}</p>
        <Link href="/#work" className="text-sm text-muted hover:text-accent">
          {t.footer.projects}
        </Link>
        <p className="text-xs text-muted-dim">© {new Date().getFullYear()} · {t.footer.rights}</p>
      </div>
    </footer>
  );
}
