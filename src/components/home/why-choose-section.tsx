"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Headphones,
  Layers,
  Rocket,
  Server,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { OrbittButton } from "@/components/ui/orbitt-button";
import { StatCounter } from "@/components/ui/stat-counter";
import { whyChooseExecutiveStats, whyChooseUs } from "@/lib/home-data";

const iconMap: Record<(typeof whyChooseUs)[number]["id"], LucideIcon> = {
  stack: Layers,
  agile: Zap,
  quality: Code2,
  scale: Server,
  support: Headphones,
  mvp: Rocket,
};

export function WhyChooseSection() {
  return (
    <section className="bg-white py-14 md:py-20" id="why-choose-us">
      <Container>
        <motion.div
          className="overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-[0_24px_60px_-12px_rgba(15,23,42,0.08)]"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="bg-brand-gradient px-6 py-10 text-center md:px-12 md:py-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-black/70">
              Why Choose Us
            </p>
            <h2 className="heading-display mx-auto mt-3 max-w-3xl text-xl leading-snug text-brand-black sm:text-2xl md:text-3xl lg:text-4xl">
              Why Teams Choose EDENZATECH For Software Development
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-brand-black/80 md:text-base">
              Modern stacks, agile delivery, and engineers who care about your product as
              much as you do.
            </p>
          </div>

          <div className="grid grid-cols-3 divide-x divide-neutral-200 bg-brand-soft">
            {whyChooseExecutiveStats.map((stat) => (
              <div key={stat.label} className="px-2 py-6 sm:px-3 md:px-6 md:py-8">
                <StatCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                  variant="panel-light"
                />
              </div>
            ))}
          </div>

          <div className="px-5 py-10 md:px-10 md:py-12">
            <p className="text-center text-sm font-medium text-brand-blue md:text-base">
              Six pillars of engineering excellence
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {whyChooseUs.map((item, i) => {
                const Icon = iconMap[item.id];
                return (
                  <motion.article
                    key={item.id}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-20px" }}
                    transition={{ delay: i * 0.05, duration: 0.4 }}
                    className="group flex h-full flex-col rounded-2xl border border-neutral-200 bg-brand-elevated p-5 transition-all duration-300 hover:border-brand-cyan/40 hover:shadow-md md:p-6"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-cyan/10 text-brand-blue transition-colors group-hover:bg-brand-gradient group-hover:text-brand-black">
                        <Icon className="h-5 w-5" strokeWidth={2} />
                      </div>
                      <span className="font-mono text-xs font-medium text-neutral-400">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="mt-4 text-base font-semibold text-neutral-900 md:text-lg">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs font-semibold text-brand-blue">
                      {item.tagline}
                    </p>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-600">
                      {item.description}
                    </p>
                    <span className="mt-4 inline-flex w-fit rounded-full bg-brand-cyan/10 px-3 py-1 text-xs font-semibold text-neutral-800 ring-1 ring-brand-cyan/20">
                      {item.highlight}
                    </span>
                  </motion.article>
                );
              })}
            </div>

            <div className="mt-10 rounded-2xl border border-neutral-200 border-l-4 border-l-brand-cyan bg-brand-soft p-6 md:p-8">
              <p className="text-base font-medium leading-relaxed text-neutral-800 md:text-lg">
                &ldquo;We don&apos;t ship features—we ship products your users love and your
                team can maintain. That&apos;s the EDENZATECH promise.&rdquo;
              </p>
              <p className="mt-3 text-sm font-semibold text-brand-blue">
                Trusted by startups &amp; growing companies worldwide
              </p>
            </div>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <OrbittButton href="/contact" variant="solid">
                Start Your Project
              </OrbittButton>
              <OrbittButton href="/case-studies" variant="light-outline">
                View Case Studies
              </OrbittButton>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
