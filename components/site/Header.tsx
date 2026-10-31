"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/lib/site";

const nav = [
  { href: "/#home", label: "Home" },
  { href: "/#work", label: "Selected Work" },
  { href: "/#capabilities", label: "Capabilities" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
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
        className={`fixed inset-x-0 top-0 z-50 transition-shadow ${
          scrolled || open ? "glass-nav shadow-lg shadow-black/20" : ""
        }`}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:h-[4.5rem] sm:px-8">
          <Link
            href="/#home"
            className="focus-ring group flex flex-col leading-none"
          >
            <span className="font-display text-sm font-bold tracking-[0.2em] text-foreground">
              {siteConfig.company.name}
            </span>
            <span className="mt-0.5 text-[10px] font-medium text-muted">
              {siteConfig.person.name}
            </span>
          </Link>

          <nav className="hidden items-center gap-7 md:flex" aria-label="Main">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="focus-ring text-sm text-muted transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link
              href="/#contact"
              className="focus-ring inline-flex rounded-full border border-border-strong bg-accent-soft px-4 py-2 text-sm font-semibold text-accent transition-colors hover:bg-accent hover:text-[#041018]"
            >
              Discuss a project
            </Link>
          </div>

          <button
            type="button"
            className="focus-ring rounded-lg p-2 text-foreground md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background/95 pt-20 backdrop-blur-md md:hidden"
          >
            <nav className="flex flex-col gap-2 px-5" aria-label="Mobile">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl border border-border bg-surface px-5 py-4 text-lg font-semibold"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/#contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-xl bg-accent px-5 py-4 text-center font-semibold text-[#041018]"
              >
                Discuss a project
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
