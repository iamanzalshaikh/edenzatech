"use client";

import { Container } from "@/components/ui/container";
import { StatCounter } from "@/components/ui/stat-counter";
import { homeStats } from "@/lib/home-data";

export function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-brand-gradient py-12 md:py-16">
      <div
        className="absolute inset-0 bg-brand-black/20"
        aria-hidden
      />
      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="heading-section text-2xl text-white md:text-3xl">
            Why Partner With {` `}
            <span className="text-brand-black">EDENZATECH?</span>
          </h2>
          <div className="mt-4 space-y-1 text-base text-white/90 md:text-[17px]">
            <p>6+ years of engineering expertise. 150+ products shipped.</p>
            <p>Code quality that scales with your business.</p>
          </div>
        </div>
        <div className="mt-12 grid gap-10 sm:grid-cols-3">
          {homeStats.map((stat) => (
            <StatCounter
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              variant="hero"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
