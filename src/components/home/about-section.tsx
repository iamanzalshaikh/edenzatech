"use client";

import { CheckCircle2, MapPin } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/container";
import { OrbittButton } from "@/components/ui/orbitt-button";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const missionPoints = [
  "Full-stack web & mobile development",
  "SaaS platforms & custom software",
  "Modern stacks: React, Next.js, Node.js",
  "Agile delivery with transparent milestones",
] as const;

const scrollBlocks = [
  {
    id: "intro",
    title: "Who We Are",
    body: "EDENZATECH is a software development company that builds web applications, mobile apps, and custom software for startups and growing businesses. We turn ideas into production-ready products with clean code and modern architecture.",
  },
  {
    id: "approach",
    title: "How We Work",
    body: "Agile sprints, bi-weekly demos, and direct engineer access. We choose the right tech stack for your goals, write maintainable TypeScript, and deploy with CI/CD from day one.",
  },
  {
    id: "mission",
    title: "Our Mission",
    body: "Help businesses innovate, build, and grow through reliable software. We believe great products come from great engineering—transparent communication, quality code, and partnerships that last beyond launch.",
  },
] as const;

function AboutCtaCard() {
  const { ref, inView } = useInViewOnce<HTMLDivElement>({
    rootMargin: "0px 0px -12% 0px",
    threshold: 0.12,
  });

  return (
    <div
      ref={ref}
      className={cn(
        "rounded-2xl border-l-4 border-l-brand-orange bg-brand-orange/5 p-6 transition-all duration-700 md:p-8",
        inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
      )}
    >
      <p className="text-base font-medium leading-relaxed text-brand-black md:text-lg">
        Ready to build your next product with a team that ships quality code? Let&apos;s
        map your technical roadmap together.
      </p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <OrbittButton href="/contact" variant="solid">
          Start Your Project
        </OrbittButton>
        <Link
          href="/about"
          className="inline-flex items-center text-sm font-semibold text-brand-blue underline-offset-4 hover:underline"
        >
          Learn more about us →
        </Link>
      </div>
    </div>
  );
}

function WhatYouGetCard() {
  const { ref, inView } = useInViewOnce<HTMLDivElement>({
    rootMargin: "0px 0px -12% 0px",
    threshold: 0.12,
  });

  return (
    <div
      ref={ref}
      className={cn(
        "rounded-2xl bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-md md:p-8",
        inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
      )}
    >
      <div className="flex items-center gap-2">
        <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-brand-orange/10 text-brand-orange">
          04
        </span>
        <h3 className="text-lg font-bold text-brand-blue md:text-xl">
          What You Get
        </h3>
      </div>
      <ul className="mt-5 space-y-3">
        {missionPoints.map((point) => (
          <li
            key={point}
            className="flex items-start gap-2.5 text-sm text-brand-muted md:text-base"
          >
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-orange" />
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ScrollRevealBlock({
  index,
  title,
  body,
  className,
}: {
  index: number;
  title: string;
  body: string;
  className?: string;
}) {
  const { ref, inView } = useInViewOnce<HTMLDivElement>({
    rootMargin: "0px 0px -12% 0px",
    threshold: 0.12,
  });

  return (
    <div
      ref={ref}
      className={cn(
        "rounded-2xl bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-md md:p-8",
        inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
        className,
      )}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="flex items-center gap-2">
        <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-brand-orange/10 text-brand-orange">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="text-lg font-bold text-brand-blue md:text-xl">{title}</h3>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-brand-muted md:text-base">{body}</p>
    </div>
  );
}

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [stickyTop, setStickyTop] = useState("5.5rem");

  useEffect(() => {
    const update = () => {
      const header = document.querySelector("header");
      const h = header?.getBoundingClientRect().height ?? 80;
      setStickyTop(`${h + 16}px`);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-visible bg-[#e8f1ef] py-14 md:py-20 lg:py-24"
      id="about"
    >
      <Container className="overflow-visible">
        <div className="relative overflow-visible lg:grid lg:grid-cols-2 lg:items-start lg:gap-12 xl:gap-16">
          <div className="lg:sticky lg:z-10 lg:self-start" style={{ top: stickyTop }}>
            <div className="overflow-hidden rounded-3xl bg-white shadow-xl">
              <div className="relative bg-gradient-to-br from-brand-blue/5 via-white to-[#e8f1ef]/30 p-6 sm:p-8 md:p-10">
                <p className="text-center text-sm font-semibold uppercase tracking-widest text-brand-orange">
                  About Us
                </p>
                <div className="relative mx-auto mt-6 max-w-xs">
                  <div className="flex flex-col items-center rounded-2xl bg-[#e8f1ef]/20 p-6 border border-[#e8f1ef]">
                    <img
                      src="/edenza-stacked-logo.png"
                      alt="Edenza Tech Logo"
                      className="h-28 w-auto object-contain md:h-32"
                    />
                  </div>
                  <div className="mt-6 flex items-center justify-center gap-2 rounded-full border border-brand-muted/10 bg-white px-4 py-2.5 text-sm font-medium text-brand-muted">
                    <MapPin className="h-4 w-4 shrink-0 text-brand-orange" />
                    <span className="text-center">
                      {siteConfig.location} · Serving clients globally
                    </span>
                  </div>
                </div>
                <h2 className="heading-display mt-8 text-center text-xl font-bold leading-snug text-brand-blue md:text-2xl">
                  Engineering Products That Matter
                </h2>
                <p className="mt-3 text-center text-sm text-brand-muted">
                  Trusted by startups and growing businesses worldwide.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 flex min-h-0 flex-col gap-6 sm:gap-8 lg:mt-0 lg:gap-10 lg:pb-16">
            {scrollBlocks.map((block, i) => (
              <ScrollRevealBlock
                key={block.id}
                index={i}
                title={block.title}
                body={block.body}
              />
            ))}
            <WhatYouGetCard />
            <AboutCtaCard />
          </div>
        </div>
      </Container>
    </section>
  );
}
