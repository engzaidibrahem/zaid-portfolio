"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";
import type { Locale } from "@/lib/i18n/ui";

export function LangSwitch() {
  const { locale, setLocale, t } = useLanguage();

  const set = (next: Locale) => setLocale(next);

  return (
    <div className="lang-switch" role="group" aria-label="Language">
      <button
        type="button"
        aria-pressed={locale === "en"}
        onClick={() => set("en")}
        className="focus-ring"
      >
        {t.lang.en}
      </button>
      <button
        type="button"
        aria-pressed={locale === "ar"}
        onClick={() => set("ar")}
        className="focus-ring"
      >
        {t.lang.ar}
      </button>
    </div>
  );
}
