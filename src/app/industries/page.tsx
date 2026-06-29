import type { Metadata } from "next";
import Link from "next/link";
import {
  Landmark,
  HeartPulse,
  ShoppingCart,
  Rocket,
  GraduationCap,
  Truck,
  ArrowRight,
  CheckCircle2,
  Layers,
  Code2,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { OrbittButton } from "@/components/ui/orbitt-button";
import { industriesList } from "@/lib/industries-data";
import { developmentProcess } from "@/lib/home-data";

export const metadata: Metadata = {
  title: "Industries We Serve — EDENZATECH",
  description:
    "Sector-specific software engineering for FinTech, healthcare, e-commerce, SaaS startups, EdTech, and logistics—built with modern stacks and production-grade quality.",
};

const iconMap: Record<string, LucideIcon> = {
  fintech: Landmark,
  healthcare: HeartPulse,
  ecommerce: ShoppingCart,
  saas: Rocket,
  edtech: GraduationCap,
  logistics: Truck,
};

export default function IndustriesPage() {
  return (
    <div className="bg-[#FFFDF8] min-h-screen">
      <section className="relative overflow-hidden bg-brand-gradient pt-16 pb-6 text-white md:pt-24 md:pb-12 text-center">
        <div className="absolute inset-0 bg-brand-black/10" aria-hidden />
        <Container className="relative z-10 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-cyan">
            SECTOR EXPERTISE
          </p>
          <h1 className="heading-display mt-3 text-3xl font-extrabold md:text-5xl">
            Industries We Serve
          </h1>
          <p className="mt-4 text-base text-white/80 md:text-lg">
            Deep domain experience across high-growth verticals—we translate industry challenges into
            scalable web apps, mobile products, and SaaS platforms.
          </p>
        </Container>
      </section>

      <section className="py-20 bg-white">
        <Container>
          <div className="mx-auto max-w-3xl text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
              Vertical Solutions
            </p>
            <h2 className="heading-display mt-3 text-2xl font-bold text-brand-blue md:text-3xl">
              Built for Your Industry&apos;s Real-World Constraints
            </h2>
            <p className="mt-4 text-sm text-brand-muted md:text-base">
              Every sector has unique compliance, workflow, and scale requirements. We bring proven
              patterns—not generic templates—to your product roadmap.
            </p>
          </div>

          <div className="grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {industriesList.map((industry) => {
              const Icon = iconMap[industry.id];
              return (
                <article
                  key={industry.id}
                  className={`group relative overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] ${industry.bgClass} p-4 sm:p-6 shadow-sm transition-all duration-300 hover:shadow-[0_24px_48px_rgba(26,26,26,0.06)] hover:-translate-y-1.5 flex flex-col`}
                >
                  <div className={`flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-white shadow-sm ${industry.textClass}`}>
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={2} />
                  </div>

                  <p className="mt-4 sm:mt-5 text-[10px] font-extrabold uppercase tracking-wider text-brand-orange">
                    {industry.tagline}
                  </p>
                  <h3 className="mt-1 text-base sm:text-lg font-bold text-brand-blue leading-snug group-hover:text-brand-orange transition-colors">
                    {industry.title}
                  </h3>
                  <p className="mt-1.5 text-[10px] sm:text-xs font-semibold text-[#134D4A]">★ {industry.metric}</p>
                  <p className="mt-2 sm:mt-3 text-[10px] sm:text-xs text-brand-muted leading-relaxed">{industry.description}</p>

                  <div className="mt-4 sm:mt-5 space-y-3 sm:space-y-4 flex-1">
                    <div>
                      <p className="text-[10px] font-extrabold uppercase tracking-wider text-brand-blue/70 mb-2">
                        Challenges We Solve
                      </p>
                      <ul className="space-y-1.5">
                        {industry.challenges.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-xs text-brand-muted">
                            <CheckCircle2 className={`h-3.5 w-3.5 shrink-0 mt-0.5 ${industry.textClass}`} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-[10px] font-extrabold uppercase tracking-wider text-brand-blue/70 mb-2">
                        Typical Deliverables
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {industry.deliverables.map((item) => (
                          <span
                            key={item}
                            className="rounded-full bg-white/90 border border-brand-muted/5 px-2.5 py-0.5 text-[9px] font-bold text-brand-blue shadow-sm"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-brand-muted/5">
                    <Link
                      href={industry.serviceHref}
                      className={`inline-flex items-center gap-1 text-[10px] font-extrabold uppercase tracking-wider ${industry.textClass} hover:opacity-85`}
                    >
                      Explore Services <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-brand-cream/30 py-16 md:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-cyan">
              Our Process
            </p>
            <h3 className="heading-display mt-3 text-2xl font-bold text-brand-blue md:text-3xl">
              From Discovery to Production
            </h3>
            <p className="mt-4 text-sm text-brand-muted md:text-base">
              A transparent, sprint-based workflow—whether you&apos;re launching a FinTech MVP or
              scaling an enterprise logistics platform.
            </p>
          </div>

          {/* Premium Process Grid */}
          <div className="relative grid gap-4 grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">

            {/* Connecting line on desktop only */}
            <div className="absolute hidden lg:block top-10 left-[calc(12.5%+1rem)] right-[calc(12.5%+1rem)] h-[2px] bg-gradient-to-r from-brand-orange/30 via-brand-blue/20 to-brand-orange/30 z-0" />

            {[
              { step: "01", title: "Discovery", description: "Requirements, user flows, tech stack selection, and project roadmap.", accent: "bg-brand-orange", ring: "ring-brand-orange/20", numColor: "text-brand-orange", barColor: "bg-brand-orange" },
              { step: "02", title: "Design", description: "Wireframes, UI design in Figma, and interactive prototypes for approval.", accent: "bg-[#0c4ca6]", ring: "ring-[#0c4ca6]/20", numColor: "text-[#0c4ca6]", barColor: "bg-[#0c4ca6]" },
              { step: "03", title: "Development", description: "Agile sprints with bi-weekly demos, code reviews, and CI/CD deployment.", accent: "bg-[#134D4A]", ring: "ring-[#134D4A]/20", numColor: "text-[#134D4A]", barColor: "bg-[#134D4A]" },
              { step: "04", title: "Launch & Scale", description: "Production deployment, monitoring, optimization, and ongoing support.", accent: "bg-[#b07f18]", ring: "ring-[#b07f18]/20", numColor: "text-[#b07f18]", barColor: "bg-[#b07f18]" },
            ].map((item, i) => (
              <article
                key={item.step}
                className="relative z-10 group bg-white rounded-2xl shadow-sm border border-brand-muted/10 p-4 sm:p-6 flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(26,26,26,0.07)]"
              >
                {/* Colored top accent bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl ${item.barColor} opacity-80`} />

                {/* Step number badge */}
                <div className={`flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-white ring-2 ${item.ring} shadow-sm mb-3 sm:mb-4`}>
                  <span className={`font-mono text-sm sm:text-base font-extrabold ${item.numColor}`}>{item.step}</span>
                </div>

                {/* Large watermark step number */}
                <span className={`absolute top-3 right-4 font-mono text-4xl sm:text-5xl font-black ${item.numColor} opacity-[0.04] select-none pointer-events-none`}>
                  {item.step}
                </span>

                <h4 className="font-bold text-brand-blue text-sm sm:text-base leading-snug group-hover:text-brand-orange transition-colors">
                  {item.title}
                </h4>
                <p className="mt-2 text-[10px] sm:text-sm text-brand-muted leading-relaxed flex-1">
                  {item.description}
                </p>

                {/* Bottom connector arrow (desktop only, not last item) */}
                {i < 3 && (
                  <div className="hidden lg:flex absolute -right-3 top-10 z-20 items-center justify-center h-6 w-6 rounded-full bg-white border border-brand-muted/10 shadow-sm">
                    <svg className="h-3 w-3 text-brand-muted/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </article>
            ))}
          </div>
        </Container>
      </section>


      <section className="bg-brand-cream/30 py-20 border-t border-brand-muted/5">
        <Container>
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h3 className="heading-display text-2xl font-bold text-brand-blue md:text-3xl">
              Our Core Engineering Commitments
            </h3>
          </div>
          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 md:grid-cols-3">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="h-10 w-10 rounded-lg bg-brand-orange/10 flex items-center justify-center text-brand-orange mb-4">
                <Layers className="h-5 w-5" />
              </div>
              <h4 className="font-bold text-brand-blue text-base">Clean Architecture</h4>
              <p className="mt-2 text-xs sm:text-sm text-brand-muted leading-relaxed">
                Modular, type-safe structures that any development team can scale, understand, and
                easily extend.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="h-10 w-10 rounded-lg bg-[#E2ECFA] flex items-center justify-center text-[#0c4ca6] mb-4">
                <Code2 className="h-5 w-5" />
              </div>
              <h4 className="font-bold text-brand-blue text-base">Zero compiler warnings</h4>
              <p className="mt-2 text-xs sm:text-sm text-brand-muted leading-relaxed">
                Strict lint policies and compiler type validation—anomalies resolved before they
                reach production.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="h-10 w-10 rounded-lg bg-[#D2EBE7] flex items-center justify-center text-[#134D4A] mb-4">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h4 className="font-bold text-brand-blue text-base">Security &amp; Encryption</h4>
              <p className="mt-2 text-xs sm:text-sm text-brand-muted leading-relaxed">
                TLS routing, injection checks, and environment isolation are native priorities—we
                protect your company and user data.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-white text-center">
        <Container className="max-w-2xl">
          <h3 className="heading-display text-2xl font-bold text-brand-blue md:text-3xl">
            See what we&apos;ve built across these industries
          </h3>
          <p className="mt-3 text-sm text-brand-muted md:text-base">
            Browse our full portfolio of live SaaS products, web platforms, and mobile apps—or reach
            out to discuss your sector-specific requirements.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <OrbittButton href="/projects" variant="solid">
              View All Projects
            </OrbittButton>
            <OrbittButton href="/contact" variant="light-outline">
              Discuss Your Industry
            </OrbittButton>
          </div>
        </Container>
      </section>
    </div>
  );
}
