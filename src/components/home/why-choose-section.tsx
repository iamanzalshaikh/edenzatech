"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Headphones,
  Layers,
  Rocket,
  Server,
  Zap,
  CheckCircle,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { OrbittButton } from "@/components/ui/orbitt-button";
import { whyChooseUs } from "@/lib/home-data";

const iconMap: Record<(typeof whyChooseUs)[number]["id"], LucideIcon> = {
  stack: Layers,
  agile: Zap,
  quality: Code2,
  scale: Server,
  support: Headphones,
  mvp: Rocket,
};

const pillarThemes: Record<
  (typeof whyChooseUs)[number]["id"],
  { cardBg: string; cardBorder: string; iconColor: string; watermarkColor: string; shadowClass: string }
> = {
  stack: {
    cardBg: "bg-[#F5FAF9]",
    cardBorder: "border-[#E4F2F0]",
    iconColor: "bg-[#D2EBE7] text-[#134D4A]",
    watermarkColor: "text-[#134D4A]/5",
    shadowClass: "hover:shadow-[0_12px_30px_rgba(19,77,74,0.06)]"
  },
  agile: {
    cardBg: "bg-[#FFF9F5]",
    cardBorder: "border-[#FDF0E6]",
    iconColor: "bg-[#FEEAD9] text-brand-orange",
    watermarkColor: "text-brand-orange/5",
    shadowClass: "hover:shadow-[0_12px_30px_rgba(224,122,46,0.06)]"
  },
  quality: {
    cardBg: "bg-[#FCFAF2]",
    cardBorder: "border-[#F6F1D9]",
    iconColor: "bg-[#FAF2CD] text-[#b07f18]",
    watermarkColor: "text-[#b07f18]/5",
    shadowClass: "hover:shadow-[0_12px_30px_rgba(241,179,51,0.06)]"
  },
  scale: {
    cardBg: "bg-[#F3F7FD]",
    cardBorder: "border-[#E2ECFA]",
    iconColor: "bg-[#D1E2FB] text-[#0c4ca6]",
    watermarkColor: "text-[#0c4ca6]/5",
    shadowClass: "hover:shadow-[0_12px_30px_rgba(12,76,166,0.06)]"
  },
  support: {
    cardBg: "bg-[#F9F7FD]",
    cardBorder: "border-[#ECE4FA]",
    iconColor: "bg-[#E6D9FD] text-[#6b21a8]",
    watermarkColor: "text-[#6b21a8]/5",
    shadowClass: "hover:shadow-[0_12px_30px_rgba(107,33,168,0.06)]"
  },
  mvp: {
    cardBg: "bg-[#FFF5F8]",
    cardBorder: "border-[#FDF0F3]",
    iconColor: "bg-[#FCD9E6] text-[#be185d]",
    watermarkColor: "text-[#be185d]/5",
    shadowClass: "hover:shadow-[0_12px_30px_rgba(190,24,93,0.06)]"
  }
};

export function WhyChooseSection() {
  return (
    <section className="bg-brand-cream/40 py-20 lg:py-28" id="why-choose-us">
      <Container>
        
        {/* Header Title Block */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
            Why Partner With Us
          </p>
          <h2 className="heading-display mt-3 text-3xl font-bold text-brand-blue md:text-4xl">
            Why Teams Choose EDENZATECH For Software Development
          </h2>
          <p className="mt-4 text-base text-brand-muted md:text-lg">
            Modern stacks, agile sprints, and engineers who care about your product scaling strategy.
          </p>
        </div>


        {/* Six Pillars Colorful Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item, i) => {
            const Icon = iconMap[item.id];
            const theme = pillarThemes[item.id];
            return (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className={`group relative overflow-hidden rounded-2xl border ${theme.cardBg} ${theme.cardBorder} p-6 shadow-sm transition-all duration-300 ${theme.shadowClass} hover:-translate-y-1`}
              >
                {/* Large watermark background icon in bottom right */}
                <Icon className={`absolute -bottom-4 -right-4 h-24 w-24 pointer-events-none transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-6 ${theme.watermarkColor}`} />

                <div className="relative z-10 flex items-center justify-between gap-3">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${theme.iconColor} transition-transform group-hover:scale-105`}>
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </div>
                  <span className="font-mono text-xs font-semibold text-brand-orange/60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="relative z-10 mt-5 text-base font-bold text-brand-blue md:text-lg">
                  {item.title}
                </h3>
                <p className="relative z-10 mt-1 text-[11px] font-bold uppercase tracking-wider text-brand-orange">
                  {item.tagline}
                </p>
                <p className="relative z-10 mt-3 text-xs leading-relaxed text-brand-muted md:text-sm">
                  {item.description}
                </p>

                <div className="relative z-10 mt-5">
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/60 px-3 py-1 text-[10px] font-semibold text-brand-blue ring-1 ring-brand-blue/10">
                    <CheckCircle className="h-3 w-3 text-brand-orange" />
                    {item.highlight}
                  </span>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Quote block */}
        <div className="mx-auto mt-16 max-w-4xl rounded-2xl border-l-4 border-l-brand-orange bg-white p-6 md:p-8 shadow-sm text-left">
          <p className="text-base font-medium leading-relaxed text-brand-black md:text-lg">
            &ldquo;We don&apos;t ship features—we ship products your users love and your
            team can maintain. That&apos;s the EDENZATECH promise.&rdquo;
          </p>
          <p className="mt-3 text-xs font-bold text-brand-orange uppercase tracking-wider">
            Trusted by startups &amp; growing companies worldwide
          </p>
        </div>

        {/* CTAs */}
        <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <OrbittButton href="/contact" variant="solid">
            Start Your Project
          </OrbittButton>
          <OrbittButton href="/projects" variant="light-outline">
            View Our Projects
          </OrbittButton>
        </div>

      </Container>
    </section>
  );
}
