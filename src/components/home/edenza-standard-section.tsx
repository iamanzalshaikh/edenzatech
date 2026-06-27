"use client";

import { motion } from "framer-motion";
import {
  Gauge,
  Map,
  Palette,
  Search,
  Shield,
  Smartphone,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { OrbittButton } from "@/components/ui/orbitt-button";
import { edenzaStandard } from "@/lib/home-data";

const iconMap: Record<(typeof edenzaStandard)[number]["id"], LucideIcon> = {
  performance: Gauge,
  mobile: Smartphone,
  journey: Map,
  identity: Palette,
  seo: Search,
  security: Shield,
};

export function EdenzaStandardSection() {
  return (
    <section className="bg-white py-16 md:py-24" id="our-standards">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-cyan">
            The EDENZATECH Standard
          </p>
          <h2 className="heading-display mt-4 text-3xl text-neutral-900 md:text-4xl lg:text-[2.75rem]">
            What Makes a Website Truly Exceptional?
          </h2>
          <p className="mt-5 text-base leading-relaxed text-neutral-600 md:text-lg">
            Good-looking is not enough. Every website we build is engineered around six
            non-negotiable pillars that separate high-performing sites from digital
            wallpaper.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {edenzaStandard.map((item, i) => {
            const Icon = iconMap[item.id];
            return (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="group flex h-full flex-col rounded-2xl border border-neutral-200 bg-brand-elevated p-6 transition-all duration-300 hover:border-brand-cyan/40 hover:shadow-[0_12px_40px_rgba(0,82,255,0.08)] md:p-7"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gradient text-brand-black shadow-sm transition-transform group-hover:scale-105">
                    <Icon className="h-5 w-5" strokeWidth={2.25} />
                  </div>
                  <span className="font-mono text-xs font-medium text-neutral-400">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="heading-section mt-5 text-lg text-neutral-900 md:text-xl">
                  {item.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-600 md:text-[15px]">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <OrbittButton href="/contact" variant="solid">
            Build the Right Way
          </OrbittButton>
          <OrbittButton href="/services" variant="light-outline">
            Explore Our Services
          </OrbittButton>
        </div>
      </Container>
    </section>
  );
}
