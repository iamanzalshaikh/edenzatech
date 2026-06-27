"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import {
  featuredService,
  servicesMegaMenu,
  type MegaMenuItem,
} from "@/lib/mega-menu-data";

function MegaMenuLink({ item }: { item: MegaMenuItem }) {
  const Icon = item.icon;
  return (
    <Link
      href={item.href}
      className="group flex gap-3 rounded-xl p-2.5 transition-colors hover:bg-brand-soft"
    >
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-cyan/10 text-brand-blue transition-colors group-hover:bg-brand-gradient group-hover:text-brand-black">
        <Icon className="h-4 w-4" strokeWidth={2} />
      </div>
      <div className="min-w-0">
        <p className="text-sm font-semibold text-neutral-900 group-hover:text-brand-blue">
          {item.label}
        </p>
        <p className="mt-0.5 text-xs leading-snug text-neutral-500">{item.description}</p>
      </div>
    </Link>
  );
}

export function ServicesMegaMenu({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="absolute inset-x-0 top-full border-t border-neutral-200/80 bg-white shadow-[0_24px_60px_-12px_rgba(15,23,42,0.12)]"
    >
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_280px] xl:grid-cols-[1fr_300px]">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {servicesMegaMenu.map((category) => (
              <div key={category.title}>
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-blue">
                  {category.title}
                </p>
                <div className="mt-3 space-y-0.5">
                  {category.items.map((item) => (
                    <div key={item.label} onClick={onNavigate}>
                      <MegaMenuLink item={item} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <Link
            href={featuredService.href}
            onClick={onNavigate}
            className="group flex flex-col justify-between rounded-2xl bg-gradient-to-br from-[#0c1e3d] to-[#072b52] p-6 text-white shadow-lg transition-transform hover:scale-[1.01]"
          >
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-brand-cyan">
                <Sparkles className="h-3 w-3" />
                {featuredService.badge}
              </span>
              <h3 className="heading-section mt-4 text-lg leading-snug text-white md:text-xl">
                {featuredService.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/75">
                {featuredService.description}
              </p>
            </div>
            <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-cyan transition-gap group-hover:gap-2.5">
              {featuredService.cta}
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
