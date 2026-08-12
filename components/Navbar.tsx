"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Globe, Menu, X } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { siteConfig } from "@/lib/site";

export function Navbar() {
  const { t, toggleLocale, locale } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#work", label: t.nav.work },
    { href: "#capabilities", label: t.nav.capabilities },
    { href: "#about", label: t.nav.about },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const LanguageButton = ({ className = "" }: { className?: string }) => (
    <button
      type="button"
      onClick={toggleLocale}
      className={`focus-ring inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-3 py-1.5 text-xs font-semibold text-foreground transition-colors hover:border-accent/40 hover:text-accent ${className}`}
      aria-label={t.language.switchTo}
    >
      <Globe size={14} aria-hidden />
      <span className="font-mono tracking-wide">{t.language.code}</span>
      <span className="hidden text-muted sm:inline">{t.language.switchTo}</span>
    </button>
  );

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-colors ${
          scrolled || open ? "glass" : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-[4.25rem] sm:px-8">
          <a
            href="#top"
            className="focus-ring font-display text-lg font-bold tracking-tight text-foreground transition-colors hover:text-accent"
          >
            {siteConfig.shortName}
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="focus-ring text-sm text-muted transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-3 md:flex">
            <LanguageButton />
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="focus-ring rounded-lg p-2 text-muted transition-colors hover:bg-white/5 hover:text-foreground"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="focus-ring rounded-lg p-2 text-muted transition-colors hover:bg-white/5 hover:text-foreground"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href="#contact"
              className="focus-ring inline-flex items-center rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              {t.nav.letsTalk}
            </a>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <LanguageButton />
            <button
              type="button"
              className="focus-ring rounded-lg p-2 text-foreground"
              aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            key={locale}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background/95 pt-20 backdrop-blur-md md:hidden"
          >
            <motion.nav
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-2 px-6"
            >
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl border border-border bg-card px-5 py-4 font-display text-xl font-semibold text-foreground"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-4 flex items-center gap-3">
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="rounded-xl border border-border bg-card p-4 text-muted"
                >
                  <GithubIcon size={20} />
                </a>
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="rounded-xl border border-border bg-card p-4 text-muted"
                >
                  <LinkedinIcon size={20} />
                </a>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="flex-1 rounded-xl bg-accent px-5 py-4 text-center text-base font-semibold text-accent-foreground"
                >
                  {t.nav.letsTalk}
                </a>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
