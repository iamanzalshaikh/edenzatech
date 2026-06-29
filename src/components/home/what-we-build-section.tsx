"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/ui/container";

const buildCategories = [
  {
    id: "engineering",
    number: "01",
    label: "ENGINEERING",
    title: "Core Engineering",
    image: "/web-apps-showcase.png",
    description: "High-performance web applications, cross-platform mobile apps, and fast-turnaround MVP prototypes built to scale.",
    subServices: [
      "Website Development",
      "Web Applications",
      "Mobile Apps",
      "MVP Development"
    ],
    cta: "Explore Engineering",
    href: "/services/web-development",
    hoverClass: "from-[#134D4A] to-[#0a2f2c]/95",
    shadowClass: "hover:shadow-[0_20px_50px_rgba(19,77,74,0.15)]",
    tagColor: "text-brand-cyan bg-white/10",
    hoverSpecs: [
      "Optimized for core web vitals",
      "Native iOS & Android compilation",
      "Launch-ready systems in 4-8 weeks"
    ]
  },
  {
    id: "platforms",
    number: "02",
    label: "PLATFORMS",
    title: "Digital Platforms",
    image: "/saas-software-showcase.png",
    description: "Scalable multi-tenant SaaS architectures, custom business tools, conversion-focused e-commerce, and enterprise software.",
    subServices: [
      "SaaS Development",
      "Custom Software",
      "E-Commerce",
      "Enterprise Software"
    ],
    cta: "Configure Platforms",
    href: "/services/custom-software",
    hoverClass: "from-[#E07A2E] to-[#b85a1a]/95",
    shadowClass: "hover:shadow-[0_20px_50px_rgba(224,122,46,0.15)]",
    tagColor: "text-brand-orange bg-white/15",
    hoverSpecs: [
      "Multi-tenant data isolation",
      "Stripe payment & billing cycles",
      "Scalable database architectures"
    ]
  },
  {
    id: "frontend",
    number: "03",
    label: "FRONTEND & UX",
    title: "UI/UX & Frontend",
    image: "/uiux-frontend-showcase.png",
    description: "Pixel-perfect Figma-to-code frontends, reusable modern design systems, and responsive layouts tested on real devices.",
    subServices: [
      "UI/UX Design",
      "Design Systems",
      "Frontend Engineering",
      "Responsive Web"
    ],
    cta: "View Frontend Specs",
    href: "/services/frontend",
    hoverClass: "from-[#f1b333] to-[#b5801c]/95",
    shadowClass: "hover:shadow-[0_20px_50px_rgba(241,179,51,0.15)]",
    tagColor: "text-amber-200 bg-white/15",
    hoverSpecs: [
      "Component-driven design systems",
      "Highly accessible semantic markup",
      "Interactive fluid animations"
    ]
  },
  {
    id: "cloud",
    number: "04",
    label: "CLOUD & BACKEND",
    title: "Cloud & Backend",
    image: "/api-backend-showcase.png",
    description: "Secure REST/GraphQL API systems, automated CI/CD DevOps pipelines, and database architecture built for resilience.",
    subServices: [
      "API Development",
      "Cloud Infrastructure",
      "DevOps & CI/CD",
      "Database Design"
    ],
    cta: "Review Backends",
    href: "/services/backend",
    hoverClass: "from-[#0c4ca6] to-[#08306b]/95",
    shadowClass: "hover:shadow-[0_20px_50px_rgba(12,76,166,0.15)]",
    tagColor: "text-blue-200 bg-white/15",
    hoverSpecs: [
      "Automated zero-downtime triggers",
      "Highly secure OAuth2 frameworks",
      "Autoscaling container clusters"
    ]
  }
];

export function WhatWeBuildSection() {
  return (
    <section className="bg-brand-cream py-16 md:py-24" id="what-we-build">
      <Container>
        {/* Header Block */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
            What We Do
          </p>
          <h2 className="heading-display mt-3 text-3xl font-bold text-brand-blue md:text-4xl">
            Development Services Built for Scale
          </h2>
          <p className="mt-4 text-base text-brand-muted md:text-lg">
            End-to-end software engineering. We focus exclusively on building robust, high-performance digital systems.
          </p>
        </div>

        {/* Mobile View: Static cards (dynamic height, no overflow) - Grid format */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:hidden">
          {buildCategories.map((cat, i) => (
            <motion.article
              key={`mobile-${cat.id}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl bg-white border border-brand-muted/10 p-5 shadow-sm flex flex-col justify-between"
            >
              <div>
                {/* Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-[#ecf3f2] p-2 mb-4 border border-[#e5eeed]">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="h-full w-full object-cover rounded-lg"
                  />
                </div>

                {/* Info */}
                <span className="text-[9px] font-bold tracking-widest text-brand-orange uppercase">
                  {cat.label}
                </span>
                <h3 className="mt-1 text-base font-bold text-brand-blue leading-snug">
                  {cat.title}
                </h3>
                <p className="mt-2 text-xs text-brand-muted leading-relaxed">
                  {cat.description}
                </p>

                {/* Sub-services list */}
                <div className="mt-4 border-t border-brand-muted/5 pt-3">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-brand-blue block mb-2">Capabilities</span>
                  <ul className="space-y-1.5 text-left">
                    {cat.subServices.map((sub) => (
                      <li key={sub} className="text-xs text-brand-muted flex items-center gap-2">
                        <span className="h-1 w-1 bg-brand-orange rounded-full shrink-0" />
                        <span>{sub}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Standards list */}
                <div className="mt-4 border-t border-brand-muted/5 pt-3">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-brand-blue block mb-2">Key Standards</span>
                  <ul className="space-y-1.5 text-left">
                    {cat.hoverSpecs.map((spec) => (
                      <li key={spec} className="text-xs text-brand-muted flex items-start gap-2">
                        <Check className="h-3.5 w-3.5 text-brand-orange shrink-0 mt-0.5" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Button */}
              <div className="mt-6 pt-4 border-t border-brand-muted/5 text-left">
                <Link
                  href={cat.href}
                  className="inline-flex items-center gap-1.5 text-xs font-extrabold text-brand-blue hover:text-brand-orange transition-colors"
                >
                  {cat.cta} <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Desktop View: Interactive 3D Flip cards */}
        <div className="mt-12 hidden lg:grid lg:grid-cols-4 gap-6">
          {buildCategories.map((cat, i) => (
            <motion.article
              key={`desktop-${cat.id}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative overflow-visible aspect-[3/4.1] [perspective:1000px]`}
            >
              {/* Flippable Card Container */}
              <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                
                {/* FRONT FACE (Default light card) */}
                <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-2xl bg-white shadow-md flex flex-col justify-between overflow-hidden z-10">
                  {/* Top Image Box (55% height) */}
                  <div className="relative flex h-[55%] w-full items-center justify-center bg-[#ecf3f2] p-4 overflow-hidden border-b border-[#e5eeed]">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(19,77,74,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(19,77,74,0.02)_1px,transparent_1px)] bg-[size:1.2rem_1.2rem]" />
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className="relative z-10 h-full w-full object-cover rounded-lg"
                    />
                  </div>

                  {/* Bottom Metadata Box (45% height) */}
                  <div className="h-[45%] p-4 flex flex-col justify-between text-left bg-white">
                    <div>
                      <span className="text-[9px] font-bold tracking-widest text-brand-orange uppercase">
                        {cat.label}
                      </span>
                      <h3 className="mt-0.5 text-sm font-bold text-brand-blue leading-snug truncate">
                        {cat.title}
                      </h3>
                    </div>

                    {/* List of sub-services inside card */}
                    <ul className="mt-2 space-y-1 text-left flex-1">
                      {cat.subServices.map((sub) => (
                        <li key={sub} className="text-[11px] font-medium text-brand-muted flex items-center gap-1.5">
                          <span className="h-1 w-1 bg-brand-orange rounded-full shrink-0" />
                          <span className="truncate">{sub}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* BACK FACE (Hover active overlay) */}
                <div className={`absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-2xl bg-gradient-to-b ${cat.hoverClass} p-5 flex flex-col justify-between text-left overflow-hidden z-20 ${cat.shadowClass}`}>
                  <div className="space-y-3.5">
                    <div>
                      <span className="text-[9px] font-bold tracking-widest text-white/80 uppercase">
                        {cat.label}
                      </span>
                      <p className="mt-2 text-xs font-semibold text-white leading-relaxed line-clamp-3">
                        {cat.description}
                      </p>
                    </div>

                    {/* Enhanced Content: Detailed specification bullets */}
                    <div className="space-y-1.5 border-t border-white/10 pt-3">
                      <span className="text-[9px] font-bold uppercase tracking-wider text-white/60 block">Key Standards</span>
                      <ul className="space-y-1 text-left">
                        {cat.hoverSpecs.map((spec) => (
                          <li key={spec} className="text-[10px] font-medium text-white/90 flex items-start gap-1.5 leading-snug">
                            <Check className="h-3 w-3 text-white shrink-0 mt-0.5" />
                            <span>{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Hover CTA Link */}
                  <Link
                    href={cat.href}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-white group/link"
                  >
                    <span className="relative pb-0.5 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-white/80">
                      {cat.cta}
                    </span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>

              </div>
            </motion.article>
          ))}
        </div>

        {/* Footnote */}
        <p className="mt-12 text-center text-sm text-brand-muted">
          Not sure where to start?{" "}
          <Link href="/contact" className="font-semibold text-brand-blue hover:underline">
            Tell us your idea
          </Link>{" "}
          — we&apos;ll recommend the right approach in 24 hours.
        </p>
      </Container>
    </section>
  );
}
