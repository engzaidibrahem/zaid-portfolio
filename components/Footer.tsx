"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { siteConfig } from "@/lib/site";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 sm:flex-row sm:items-end sm:justify-between sm:px-8">
        <div>
          <p className="font-display text-lg font-bold tracking-tight text-foreground">
            {siteConfig.shortName}
          </p>
          <p className="mt-1 text-sm text-muted">{t.footer.title}</p>
        </div>
        <p className="text-sm text-muted">{t.footer.copyright}</p>
      </div>
    </footer>
  );
}
