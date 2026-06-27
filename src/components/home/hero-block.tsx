"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { OrbittButton } from "@/components/ui/orbitt-button";
import { siteConfig } from "@/lib/site-config";
import { HeroLaptopVisual } from "./hero-laptop-visual";

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function HeroBlock() {
  return (
    <section className="relative overflow-hidden bg-white">
      <Container className="relative flex min-h-hero-screen items-center py-10 sm:py-12 lg:py-16">
        <div className="grid w-full items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-20">
          {/* Left — copy (Nexa-style) */}
          <motion.div
            className="flex flex-col justify-center lg:max-w-xl"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              variants={fadeUp}
              className="heading-display text-[clamp(2.25rem,6vw,3.75rem)] uppercase leading-[1.05] tracking-tight text-neutral-900"
            >
              Web
              <br />
              Development
              <br />
              Agency
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-md text-base leading-relaxed text-neutral-600 sm:text-lg"
            >
              We develop websites, web apps, and online stores that turn visitors into
              customers — with creativity, technical know-how, and enthusiasm.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400"
            >
              {siteConfig.tagline}
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <OrbittButton href="/services" variant="light-outline">
                Learn more
              </OrbittButton>
              <OrbittButton href="/contact" variant="solid">
                Contact us
              </OrbittButton>
            </motion.div>
          </motion.div>

          {/* Right — laptop + floating cards */}
          <motion.div
            className="relative flex items-center justify-center lg:justify-end"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <HeroLaptopVisual />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
