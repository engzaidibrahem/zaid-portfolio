"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/lib/site";

const nav = [
  { href: "/#home", label: "Index" },
  { href: "/#work", label: "Work" },
  { href: "/#stack", label: "Stack" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
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

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-colors ${
          scrolled || open
            ? "border-border bg-background/95"
            : "border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-14 max-w-[90rem] items-stretch px-4 sm:px-6 lg:px-10">
          <Link
            href="/#home"
            className="focus-ring flex items-center border-r border-border pe-6 font-display text-sm font-bold uppercase tracking-[0.18em]"
          >
            {siteConfig.person.name.split(" ")[0]}
          </Link>

          <nav
            className="hidden flex-1 items-center gap-8 ps-8 md:flex"
            aria-label="Main"
          >
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="focus-ring font-mono text-[11px] uppercase tracking-[0.16em] text-muted transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="ms-auto hidden items-center md:flex">
            <Link
              href="/#contact"
              className="link-underline focus-ring font-mono text-[11px] uppercase tracking-[0.14em]"
            >
              {siteConfig.hero.secondaryCta}
            </Link>
          </div>

          <button
            type="button"
            className="focus-ring ms-auto flex items-center p-3 md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background pt-14 md:hidden"
          >
            <nav className="flex flex-col border-t border-border" aria-label="Mobile">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-border px-6 py-5 font-display text-2xl font-semibold"
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
