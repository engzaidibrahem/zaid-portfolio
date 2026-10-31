"use client";

import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/lib/site";

export function AboutSection() {
  const { person, background } = siteConfig;

  return (
    <section id="about" className="scroll-mt-20 border-t border-border">
      <div className="mx-auto max-w-[90rem] px-4 py-16 sm:px-6 sm:py-20 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <p className="section-index">03 — About</p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl">
              Building software with architectural clarity.
            </h2>
          </Reveal>

          <Reveal className="lg:col-span-7" delay={0.06}>
            <div className="space-y-5 text-base leading-relaxed text-muted sm:text-[17px]">
              <p>
                I&apos;m {person.name}, a {person.role.toLowerCase()} focused on
                backends, APIs, data layers, and the interfaces that make complex
                systems usable. I care about how requirements translate into
                structure—not just how features look in a demo.
              </p>
              <p>
                My portfolio includes SaaS commerce, logistics platforms, school
                management, and restaurant operations—projects where reliability,
                permissions, and data integrity matter day to day.
              </p>
              <p>
                I&apos;m also the founder of {background.company}.{" "}
                {background.note}
              </p>
              <p className="font-mono text-sm text-muted-dim">
                Based in Indonesia · available for remote engineering work
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
