"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { LangSwitch } from "@/components/site/LangSwitch";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { siteConfig } from "@/lib/site";

export function Header() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const nav = [
    { href: "/#work", label: t.nav.work },
    { href: "/#stack", label: t.nav.stack },
    { href: "/#about", label: t.nav.about },
    { href: "/#contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 8);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-colors ${
          scrolled || open
            ? "border-border bg-bg-mid/90 backdrop-blur-md"
            : "border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-14 max-w-6xl items-center gap-4 px-4 sm:px-6">
          <Link href="/#home" className="focus-ring font-display text-sm font-bold tracking-tight">
            {siteConfig.name}
          </Link>

          <nav className="ms-auto hidden items-center gap-6 md:flex" aria-label="Main">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="focus-ring text-xs font-medium text-muted transition-colors hover:text-accent"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <LangSwitch />
            <Link
              href="/#contact"
              className="focus-ring rounded-lg border border-border px-3 py-1.5 text-xs font-semibold text-accent transition-colors hover:border-accent/50 hover:bg-accent/10"
            >
              {t.nav.contact}
            </Link>
          </div>

          <div className="ms-auto flex items-center gap-2 md:hidden">
            <LangSwitch />
            <button
              type="button"
              className="focus-ring p-2"
              aria-label={open ? "Close" : "Menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-bg-mid/98 pt-14 md:hidden"
          >
            <nav className="flex flex-col border-t border-border">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-border px-5 py-4 text-lg font-semibold"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
