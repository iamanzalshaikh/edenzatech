"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Layers } from "lucide-react";
import { Container } from "@/components/ui/container";
import { OrbittButton } from "@/components/ui/orbitt-button";
import { getTechIconUrl } from "@/lib/tech-icons";
import { techStackCategories, type TechItem } from "@/lib/tech-stack-data";

const cardThemes = [
  {
    bg: "bg-[#F5FAF9]",
    border: "border-[#E4F2F0]",
    iconBg: "bg-[#D2EBE7]",
    watermark: "text-[#134D4A]/5",
    shadow: "hover:shadow-[0_12px_30px_rgba(19,77,74,0.06)]"
  },
  {
    bg: "bg-[#FFF9F5]",
    border: "border-[#FDF0E6]",
    iconBg: "bg-[#FEEAD9]",
    watermark: "text-brand-orange/5",
    shadow: "hover:shadow-[0_12px_30px_rgba(224,122,46,0.06)]"
  },
  {
    bg: "bg-[#FCFAF2]",
    border: "border-[#F6F1D9]",
    iconBg: "bg-[#FAF2CD]",
    watermark: "text-[#b07f18]/5",
    shadow: "hover:shadow-[0_12px_30px_rgba(241,179,51,0.06)]"
  },
  {
    bg: "bg-[#F3F7FD]",
    border: "border-[#E2ECFA]",
    iconBg: "bg-[#D1E2FB]",
    watermark: "text-[#0c4ca6]/5",
    shadow: "hover:shadow-[0_12px_30px_rgba(12,76,166,0.06)]"
  },
  {
    bg: "bg-[#F9F7FD]",
    border: "border-[#ECE4FA]",
    iconBg: "bg-[#E6D9FD]",
    watermark: "text-[#6b21a8]/5",
    shadow: "hover:shadow-[0_12px_30px_rgba(107,33,168,0.06)]"
  },
  {
    bg: "bg-[#FFF5F8]",
    border: "border-[#FDF0F3]",
    iconBg: "bg-[#FCD9E6]",
    watermark: "text-[#be185d]/5",
    shadow: "hover:shadow-[0_12px_30px_rgba(190,24,93,0.06)]"
  }
];

function TechCard({ item, index }: { item: TechItem; index: number }) {
  const theme = cardThemes[index % cardThemes.length];
  return (
    <motion.article
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className={`group relative overflow-hidden flex h-full flex-col justify-between rounded-2xl border ${theme.bg} ${theme.border} p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 ${theme.shadow}`}
    >
      {/* Background Watermark stack icon in top/right corner */}
      <Layers className={`absolute -top-3 -right-3 h-16 w-16 pointer-events-none transition-transform duration-500 group-hover:scale-105 group-hover:rotate-6 rotate-12 ${theme.watermark}`} />

      <div className="relative z-10">
        <div className="flex items-center gap-3">
          {/* Borderless Icon wrapper block */}
          <div className={`flex h-12 w-12 items-center justify-center rounded-xl p-2.5 transition-transform group-hover:scale-105 ${theme.iconBg}`}>
            <Image
              src={getTechIconUrl(item)}
              alt={`${item.name} logo`}
              width={32}
              height={32}
              className="h-7 w-7 object-contain"
              unoptimized
            />
          </div>
          <h4 className="font-bold text-brand-blue">{item.name}</h4>
        </div>
        <p className="mt-3 text-xs leading-relaxed text-brand-muted md:text-sm">{item.description}</p>
      </div>

      <div className="relative z-10 mt-4 flex flex-wrap gap-1.5">
        {item.tags.map((tag) => (
          <span
            key={tag}
            className="rounded bg-white/60 px-2 py-0.5 text-[10px] font-semibold text-brand-blue ring-1 ring-brand-blue/5"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

export function TechnologyArsenalSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="bg-white py-20 lg:py-24 border-b border-brand-muted/10" id="tech-stack">
      <Container>
        {/* Header Block */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
            Technology Arsenal
          </p>
          <h2 className="heading-display mt-3 text-3xl font-bold text-brand-blue md:text-4xl">
            Modern Stacks We Master
          </h2>
          <p className="mt-4 text-base text-brand-muted md:text-lg">
            We choose the right tools for your product—proven technologies that scale, hire easily, and remain maintainable.
          </p>
        </div>

        {/* Categories Tab Selector */}
        <div className="mt-10 overflow-x-auto pb-2 scrollbar-none flex justify-start md:justify-center gap-2">
          {techStackCategories.map((category, idx) => (
            <button
              key={category.title}
              onClick={() => setActiveTab(idx)}
              className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all outline-none ${
                activeTab === idx
                  ? "bg-brand-blue text-white shadow-sm"
                  : "bg-brand-cream/30 text-brand-muted hover:bg-brand-cream/60"
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Display Active Category Stacks */}
        <div className="mt-10 min-h-[250px]">
          <div
            key={activeTab}
            className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          >
            {techStackCategories[activeTab].items.map((item, index) => (
              <TechCard key={item.name} item={item} index={index} />
            ))}
          </div>
        </div>

        {/* Consult block - Styled as workbench highlight */}
        <div className="mt-16 rounded-2xl border-l-4 border-l-brand-orange bg-[#f3f7f6] p-6 text-left md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6 shadow-sm">
          <div className="max-w-2xl">
            <h3 className="text-base font-bold text-brand-blue md:text-lg">
              Need a custom stack recommendation?
            </h3>
            <p className="mt-1.5 text-xs text-brand-muted md:text-sm">
              Tell us your product goals and we&apos;ll architect the ideal technology combination for performance, budget, and timeline.
            </p>
          </div>
          <div className="shrink-0">
            <OrbittButton href="/contact" variant="solid">
              Get Tech Consultation
            </OrbittButton>
          </div>
        </div>

      </Container>
    </section>
  );
}
