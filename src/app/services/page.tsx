import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { OrbittButton } from "@/components/ui/orbitt-button";
import { Globe, Smartphone, Server, Palette, CheckCircle2, ChevronRight, Layers, Code2, ShieldCheck, Sparkles } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Services — EDENZATECH",
  description: "Explore our range of software development services including Web Development, Mobile Apps, SaaS platforms, API architectures, and custom database designs.",
};

const servicePillars = [
  {
    id: "web",
    title: "Web & E-Commerce Applications",
    description: "High-performance marketing sites, multi-page web applications, and headless Shopify storefronts built with Next.js, React, and TypeScript.",
    icon: Globe,
    bgClass: "bg-[#F5FAF9]",
    iconBg: "bg-[#D2EBE7]",
    textClass: "text-[#134D4A]",
    badge: "Fast & SEO-Optimized",
    capabilities: [
      "Custom Next.js & React Architectures",
      "Corporate & Marketing Web Platforms",
      "Headless E-Commerce & Shopify Integration",
      "Responsive, Mobile-First Auditing"
    ]
  },
  {
    id: "mobile",
    title: "Mobile App Engineering",
    description: "Cross-platform mobile applications for iOS and Android compiled from unified design tokens and optimized codebases.",
    icon: Smartphone,
    bgClass: "bg-[#FFF9F5]",
    iconBg: "bg-[#FEEAD9]",
    textClass: "text-brand-orange",
    badge: "Native iOS & Android",
    capabilities: [
      "React Native & Expo App Delivery",
      "Flutter & Dart Development",
      "Store Deployments & Asset Submissions",
      "Offline Sync & Device Sensor APIs"
    ]
  },
  {
    id: "saas",
    title: "SaaS & Cloud API Systems",
    description: "Robust data models, REST/GraphQL backend systems, secure authentication, and cloud infrastructure engineered for massive user scale.",
    icon: Server,
    bgClass: "bg-[#F3F7FD]",
    iconBg: "bg-[#D1E2FB]",
    textClass: "text-[#0c4ca6]",
    badge: "Scalable Backend",
    capabilities: [
      "RESTful, GraphQL, & WebSockets APIs",
      "AWS & GCP Serverless Infrastructures",
      "PostgreSQL, Redis, & MySQL Operations",
      "CI/CD Pipelines & Docker Containers"
    ]
  },
  {
    id: "ux",
    title: "UX/UI & Design Systems",
    description: "High-fidelity clickable Figma mockups translated into type-safe, reusable Tailwind CSS component decks.",
    icon: Palette,
    bgClass: "bg-[#FCFAF2]",
    iconBg: "bg-[#FAF2CD]",
    textClass: "text-[#b07f18]",
    badge: "Pixel-Perfect Design",
    capabilities: [
      "User Journey Auditing & Visual Mockups",
      "Token-Driven Figma Component Libraries",
      "Figma to Tailwind CSS Translation",
      "Interactive Interface Prototyping"
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="bg-[#FFFDF8] min-h-screen">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-brand-gradient pt-16 pb-6 text-white md:pt-24 md:pb-12">
        <div className="absolute inset-0 bg-brand-black/10" aria-hidden />
        <Container className="relative z-10 text-center max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-cyan">
            WHAT WE DELIVER
          </p>
          <h1 className="heading-display mt-3 text-3xl font-extrabold md:text-5xl">
            Our Software Engineering Services
          </h1>
          <p className="mt-4 text-base text-white/80 md:text-lg">
            We build performant digital products with zero compiler warnings, fast page-load speeds, and robust system integrity.
          </p>
        </Container>
      </section>

      {/* Pillars Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="mx-auto max-w-3xl text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
              Core Pillars
            </p>
            <h2 className="heading-display mt-3 text-3xl font-bold text-brand-blue md:text-4xl">
              Engineered for High Performance
            </h2>
            <p className="mt-4 text-base text-brand-muted">
              Select an area of expertise to scale your digital presence.
            </p>
          </div>

          {/* Service Cards Grid - No borders or divider lines */}
          <div className="grid gap-8 lg:grid-cols-2 max-w-5xl mx-auto">
            {servicePillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <article 
                  key={pillar.id}
                  className={`group relative overflow-hidden rounded-[2.5rem] ${pillar.bgClass} p-8 md:p-10 shadow-sm transition-all duration-300 hover:shadow-[0_24px_48px_rgba(26,26,26,0.04)] hover:-translate-y-1.5 flex flex-col justify-between`}
                >
                  <div className="absolute -top-3 -right-3 h-24 w-24 text-black/5 pointer-events-none transition-transform duration-500 group-hover:scale-110">
                    <Icon className="h-full w-full" />
                  </div>

                  <div>
                    {/* Badge */}
                    <div className="flex items-center gap-1.5 mb-5">
                      <span className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-[9px] font-extrabold uppercase tracking-wider text-brand-blue shadow-sm">
                        <Sparkles className="h-2.5 w-2.5 text-brand-orange fill-current" />
                        {pillar.badge}
                      </span>
                    </div>

                    {/* Header */}
                    <div className="flex items-center gap-4">
                      <div className={`h-12 w-12 rounded-xl flex items-center justify-center shrink-0 ${pillar.iconBg} ${pillar.textClass} shadow-inner`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-xl font-bold text-brand-blue">{pillar.title}</h3>
                    </div>

                    <p className="mt-5 text-sm leading-relaxed text-brand-muted">
                      {pillar.description}
                    </p>

                    {/* Capabilities list */}
                    <ul className="mt-6 space-y-2.5">
                      {pillar.capabilities.map((cap) => (
                        <li key={cap} className="flex items-start gap-2.5 text-xs text-brand-muted">
                          <CheckCircle2 className={`h-4 w-4 shrink-0 mt-0.5 ${pillar.textClass}`} />
                          <span className="font-medium">{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-5">
                    <Link
                      href="/contact"
                      className={`inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider ${pillar.textClass} hover:opacity-85 transition-opacity`}
                    >
                      Inquire About This Service <ChevronRight className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Engineering Standards - No borders or divider lines */}
      <section className="bg-brand-cream/30 py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h3 className="heading-display text-2xl font-bold text-brand-blue md:text-3xl">
              Our Core Engineering Commitments
            </h3>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="h-10 w-10 rounded-lg bg-brand-orange/10 flex items-center justify-center text-brand-orange mb-4">
                <Layers className="h-5 w-5" />
              </div>
              <h4 className="font-bold text-brand-blue text-base">Clean Architecture</h4>
              <p className="mt-2 text-xs sm:text-sm text-brand-muted leading-relaxed">
                Code should be an organizational asset. We build modular, type-safe structures that any development team can scale, understand, and easily extend.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="h-10 w-10 rounded-lg bg-[#E2ECFA] flex items-center justify-center text-[#0c4ca6] mb-4">
                <Code2 className="h-5 w-5" />
              </div>
              <h4 className="font-bold text-brand-blue text-base">Zero compiler warnings</h4>
              <p className="mt-2 text-xs sm:text-sm text-brand-muted leading-relaxed">
                We enforce strict lint policies and compiler type validation. Resolving anomalies before they reach production makes applications rock-solid.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="h-10 w-10 rounded-lg bg-[#D2EBE7] flex items-center justify-center text-[#134D4A] mb-4">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h4 className="font-bold text-brand-blue text-base">Security &amp; Encryption</h4>
              <p className="mt-2 text-xs sm:text-sm text-brand-muted leading-relaxed">
                Credentials security, TLS routing, injection checks, and environment isolation are native priorities. We protect your company and user data.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Footer CTA */}
      <section className="py-20 bg-white text-center">
        <Container className="max-w-2xl">
          <h3 className="heading-display text-2xl font-bold text-brand-blue md:text-3xl">
            Have a product vision to execute?
          </h3>
          <p className="mt-3 text-sm text-brand-muted md:text-base">
            Work directly with our founders to draft the technical specification document, choose framework stacks, and build sprint roadmaps.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <OrbittButton href="/contact" variant="solid">
              Start Your Project
            </OrbittButton>
            <OrbittButton href="/contact" variant="light-outline">
              Book Free Consultation
            </OrbittButton>
          </div>
        </Container>
      </section>

    </div>
  );
}
