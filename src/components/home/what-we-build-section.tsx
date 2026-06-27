"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Container } from "@/components/ui/container";
import { OrbittButton } from "@/components/ui/orbitt-button";
import {
  whatWeBuildCategories,
  type WhatWeBuildCategory,
} from "@/lib/what-we-build-data";
import { cn } from "@/lib/utils";

export function WhatWeBuildSection() {
  const [active, setActive] = useState<WhatWeBuildCategory["id"]>(
    whatWeBuildCategories[0].id,
  );
  const current =
    whatWeBuildCategories.find((c) => c.id === active) ?? whatWeBuildCategories[0];

  return (
    <section className="bg-white py-14 md:py-20" id="what-we-build">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-cyan">
            What We Build
          </p>
          <h2 className="heading-display mt-3 text-2xl text-neutral-900 md:text-4xl">
            Every Type of Software Product.
            <br className="hidden sm:block" />
            <span className="text-gradient"> Engineered to Scale.</span>
          </h2>
          <p className="mt-4 text-base text-neutral-600 md:text-lg">
            From MVPs to enterprise platforms—pick a category to explore what we build
            for teams like yours.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-[0_20px_50px_-12px_rgba(15,23,42,0.08)]">
          <div className="flex gap-2 overflow-x-auto border-b border-neutral-200 bg-brand-soft p-3 md:flex-wrap md:justify-center md:overflow-visible md:p-4">
            {whatWeBuildCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActive(cat.id)}
                className={cn(
                  "shrink-0 rounded-full px-4 py-2 text-xs font-semibold transition-all md:text-sm",
                  active === cat.id
                    ? "bg-brand-gradient text-brand-black shadow-sm"
                    : "bg-white text-neutral-600 ring-1 ring-neutral-200 hover:text-neutral-900",
                )}
              >
                <span className="mr-1.5 font-mono text-[10px] opacity-70 md:text-xs">
                  {cat.number}
                </span>
                {cat.label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="grid items-center gap-8 p-6 md:grid-cols-2 md:gap-12 md:p-10 lg:p-12"
            >
              <div className="order-2 md:order-1">
                <span className="font-mono text-sm font-bold text-brand-cyan">
                  {current.number}
                </span>
                <h3 className="heading-section mt-2 text-2xl text-neutral-900 md:text-3xl">
                  {current.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-neutral-600 md:text-base">
                  {current.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {current.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-neutral-200 bg-brand-soft px-3 py-1 text-xs font-medium text-neutral-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-8">
                  <OrbittButton href={current.href} icon="arrow" variant="solid">
                    {current.cta}
                  </OrbittButton>
                </div>
              </div>

              <div className="order-1 flex justify-center md:order-2">
                <div className="relative flex h-56 w-full max-w-sm items-center justify-center rounded-2xl bg-brand-soft p-8 ring-1 ring-neutral-200 md:h-72">
                  <div
                    className="absolute inset-3 rounded-xl bg-brand-cyan/5"
                    aria-hidden
                  />
                  <Image
                    src={current.image}
                    alt=""
                    width={200}
                    height={180}
                    className="relative z-10 h-auto max-h-40 w-auto object-contain md:max-h-48"
                    unoptimized
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <p className="mt-8 text-center text-sm text-neutral-600">
          Not sure where to start?{" "}
          <a href="/contact" className="font-semibold text-brand-blue hover:underline">
            Tell us your idea
          </a>{" "}
          — we&apos;ll recommend the right approach in 24 hours.
        </p>
      </Container>
    </section>
  );
}
