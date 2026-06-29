"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Sparkles, ArrowRight, ShieldCheck, Code2, Layers } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { OrbittButton } from "@/components/ui/orbitt-button";
import { projectsList } from "@/lib/projects-data";
import Link from "next/link";

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredProjects = activeTab === "all" 
    ? projectsList 
    : projectsList.filter(p => p.category === activeTab);

  return (
    <div className="bg-[#FFFDF8] min-h-screen">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-brand-gradient pt-16 pb-6 text-white md:pt-24 md:pb-12 text-center">
        <div className="absolute inset-0 bg-brand-black/10" aria-hidden />
        <Container className="relative z-10 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-cyan">
            DELIVERED SYSTEMS
          </p>
          <h1 className="heading-display mt-3 text-3xl font-extrabold md:text-5xl">
            Our Portfolio Projects
          </h1>
          <p className="mt-4 text-base text-white/80 md:text-lg">
            Explore our engineering portfolio featuring {projectsList.length} real-world SaaS products, responsive web platforms, and mobile apps built by our founders.
          </p>
        </Container>
      </section>

      {/* Projects Showcase & Interactive Filter Tabs */}
      <section className="py-16 bg-white">
        <Container>
          
          {/* Interactive filter selector */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {[
              { id: "all", label: "All Work" },
              { id: "web", label: "Web Apps" },
              { id: "mobile", label: "Mobile Apps" },
              { id: "saas", label: "SaaS Products" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-extrabold tracking-wide uppercase transition-all duration-200 border-0 cursor-pointer ${
                  activeTab === tab.id 
                    ? "bg-brand-blue text-white shadow-md"
                    : "bg-brand-cream/15 text-brand-blue hover:bg-brand-cream/30"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Grid Container */}
          <motion.div 
            layout
            className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((proj) => (
                <motion.article 
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  key={proj.title}
                  className={`group relative overflow-hidden rounded-[2.5rem] ${proj.bgClass} p-5 shadow-sm transition-all duration-300 hover:shadow-[0_24px_48px_rgba(26,26,26,0.05)] hover:-translate-y-1.5 flex flex-col justify-between`}
                >
                  <div>
                    {/* Image container */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[1.8rem] bg-white shadow-sm mb-5">
                      <Image
                        src={proj.image}
                        alt={`${proj.title} Showcase Mockup`}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>

                    {/* Header info */}
                    <div className="px-1.5">
                      <div className="flex items-center gap-2 mb-2.5">
                        <span className="inline-flex items-center gap-1 rounded-full bg-white px-2.5 py-0.5 text-[9px] font-extrabold uppercase tracking-wider text-brand-blue shadow-sm">
                          <Sparkles className="h-2.5 w-2.5 text-brand-orange fill-current" />
                          {proj.categoryLabel}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-brand-blue leading-snug group-hover:text-brand-orange transition-colors">
                        {proj.title}
                      </h3>
                      
                      <p className="text-xs font-semibold text-[#134D4A] mt-1">
                        ★ {proj.metric}
                      </p>

                      <p className="mt-3.5 text-xs text-brand-muted leading-relaxed">
                        {proj.description}
                      </p>
                    </div>
                  </div>

                  <div className="px-1.5 mt-6">
                    {/* Tech stack chips */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {proj.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="rounded-full bg-white/90 border border-brand-muted/5 px-2.5 py-0.5 text-[9px] font-bold text-brand-blue shadow-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-brand-muted/5 flex justify-between items-center">
                      {proj.href && proj.href !== "#" ? (
                        <a
                          href={proj.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-1 text-[10px] font-extrabold uppercase tracking-wider ${proj.textClass} hover:opacity-85`}
                        >
                          Launch Project <ChevronArrow className="h-3 w-3" />
                        </a>
                      ) : (
                        <Link
                          href="/contact"
                          className={`inline-flex items-center gap-1 text-[10px] font-extrabold uppercase tracking-wider ${proj.textClass} hover:opacity-85`}
                        >
                          Inquire Details <ChevronArrow className="h-3 w-3" />
                        </Link>
                      )}
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>

        </Container>
      </section>

      {/* Global commitments - No borders or bottom divider lines */}
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
            Have a custom project request?
          </h3>
          <p className="mt-3 text-sm text-brand-muted md:text-base">
            Work directly with our founders to draft the technical specification document, choose framework stacks, and build sprint roadmaps.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <OrbittButton href="/contact" variant="solid">
              Start Your Project
            </OrbittButton>
            <OrbittButton href="/services" variant="light-outline">
              Explore Our Services
            </OrbittButton>
          </div>
        </Container>
      </section>

    </div>
  );
}

// Inline small Arrow icon
function ChevronArrow({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
    </svg>
  );
}
