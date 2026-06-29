"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, Globe, Smartphone, Server, Palette, Layers, ChevronRight } from "lucide-react";
import Link from "next/link";
import { featuredService } from "@/lib/mega-menu-data";

const menuPillars = [
  {
    id: "web",
    label: "Web & E-Commerce",
    description: "Next.js, Custom Web Apps, and Shopify setups.",
    icon: Globe,
    bgClass: "bg-[#F5FAF9]",
    borderClass: "border-[#E4F2F0]",
    textClass: "text-[#134D4A]",
    iconBg: "bg-[#D2EBE7]",
    tagline: "High-performance web applications built for speed, SEO, and conversion optimization.",
    links: [
      { label: "Website Development", href: "/services/web-development" },
      { label: "Web Applications", href: "/services/web-development" },
      { label: "E-Commerce & Shopify", href: "/services/ecommerce" },
      { label: "Responsive Web Audits", href: "/services/web-development" }
    ]
  },
  {
    id: "mobile",
    label: "Mobile App Engineering",
    description: "Cross-platform iOS & Android mobile software.",
    icon: Smartphone,
    bgClass: "bg-[#FFF9F5]",
    borderClass: "border-[#FDF0E6]",
    textClass: "text-brand-orange",
    iconBg: "bg-[#FEEAD9]",
    tagline: "Premium native-feel cross-platform mobile apps deployed from a single optimized codebase.",
    links: [
      { label: "React Native Apps", href: "/services/mobile-apps" },
      { label: "Expo Ecosystem Delivery", href: "/services/mobile-apps" },
      { label: "Flutter & Dart Apps", href: "/services/mobile-apps" }
    ]
  },
  {
    id: "saas",
    label: "SaaS & Backend APIs",
    description: "Data architectures, server pipelines, and web APIs.",
    icon: Server,
    bgClass: "bg-[#F3F7FD]",
    borderClass: "border-[#E2ECFA]",
    textClass: "text-[#0c4ca6]",
    iconBg: "bg-[#D1E2FB]",
    tagline: "Secure backend routing databases, GraphQL/REST endpoints, and multi-tenant scaling systems.",
    links: [
      { label: "API Design & Integrations", href: "/services/backend" },
      { label: "Cloud Infrastructure (AWS)", href: "/services/backend" },
      { label: "DevOps & CI/CD Pipelines", href: "/services/backend" },
      { label: "Database Sync & Replication", href: "/services/backend" }
    ]
  },
  {
    id: "ux",
    label: "UX/UI & Design Systems",
    description: "Figma wireframes and design systems.",
    icon: Palette,
    bgClass: "bg-[#FCFAF2]",
    borderClass: "border-[#F6F1D9]",
    textClass: "text-[#b07f18]",
    iconBg: "bg-[#FAF2CD]",
    tagline: "Bespoke user conversion flows, color palettes, and production-ready Figma wireframes.",
    links: [
      { label: "UI/UX Design in Figma", href: "/services/frontend" },
      { label: "Reusable Components", href: "/services/frontend" },
      { label: "Frontend Performance Checks", href: "/services/frontend" }
    ]
  }
];

export function ServicesMegaMenu({ onNavigate }: { onNavigate?: () => void }) {
  const [hoveredIdx, setHoveredIdx] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="absolute inset-x-0 top-full border-t border-brand-muted/10 bg-white shadow-[0_20px_50px_rgba(26,26,26,0.08)] z-[100]"
    >
      <div className="mx-auto max-w-7xl px-6 py-8 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[280px_1fr_260px] xl:grid-cols-[320px_1fr_280px] items-stretch">
          
          {/* Column 1: Core Navigation Pillars */}
          <div className="flex flex-col gap-2 border-r border-brand-muted/5 pr-4">
            <span className="text-[10px] font-bold tracking-widest text-brand-muted uppercase mb-2 block">
              Core Capabilities
            </span>
            {menuPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              const isActive = hoveredIdx === idx;
              return (
                <div
                  key={pillar.id}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  className={`flex items-start gap-3.5 p-3 rounded-xl transition-all duration-200 cursor-pointer ${
                    isActive ? `${pillar.bgClass} scale-[1.01]` : "bg-transparent hover:bg-brand-cream/10"
                  }`}
                >
                  <div className={`h-8 w-8 rounded-lg flex items-center justify-center shrink-0 ${pillar.iconBg} ${pillar.textClass}`}>
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <p className={`text-sm font-bold transition-colors ${isActive ? pillar.textClass : "text-brand-blue"}`}>
                      {pillar.label}
                    </p>
                    <p className="text-[11px] text-brand-muted mt-0.5 leading-snug">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Column 2: Dynamic Subcategory Details & Links */}
          <div className="flex flex-col justify-between px-2">
            <div>
              <span className="text-[10px] font-bold tracking-widest text-brand-muted uppercase mb-4 block">
                Engineering Services
              </span>
              
              {/* Dynamic Description Box */}
              <motion.p
                key={`desc-${hoveredIdx}`}
                initial={{ opacity: 0, x: -4 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                className="text-xs text-brand-muted leading-relaxed max-w-lg mb-6 min-h-[32px]"
              >
                {menuPillars[hoveredIdx].tagline}
              </motion.p>

              {/* Dynamic Quick Links Grid */}
              <div key={`grid-${hoveredIdx}`} className="grid gap-3 sm:grid-cols-2">
                {menuPillars[hoveredIdx].links.map((link, idx) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: idx * 0.03 }}
                  >
                    <Link
                      href={link.href}
                      onClick={onNavigate}
                      className="group flex items-center justify-between p-2.5 rounded-xl transition-colors hover:bg-brand-cream/15 text-left"
                    >
                      <span className="text-sm font-bold text-brand-blue group-hover:text-brand-orange transition-colors">
                        {link.label}
                      </span>
                      <ChevronRight className="h-3.5 w-3.5 text-brand-blue/30 opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-brand-orange" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Bottom Global Link */}
            <div className="pt-6 border-t border-brand-muted/5 mt-6">
              <Link
                href="/services"
                onClick={onNavigate}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#134D4A] hover:text-brand-orange transition-colors uppercase tracking-wider"
              >
                View all agency services <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          {/* Column 3: Featured Services Spotlight Banner */}
          <Link
            href={featuredService.href}
            onClick={onNavigate}
            className="group flex flex-col justify-between rounded-2xl bg-[linear-gradient(135deg,#134D4A_0%,#0F2F2D_100%)] p-6 text-white shadow-md transition-all hover:scale-[1.01] hover:shadow-lg relative overflow-hidden"
          >
            {/* Soft decorative background layers icon */}
            <Layers className="absolute -bottom-8 -right-8 h-32 w-32 text-white/5 pointer-events-none transition-transform duration-500 group-hover:scale-105" />

            <div className="relative z-10">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-brand-cyan">
                <Sparkles className="h-3 w-3 text-brand-orange fill-current animate-pulse" />
                {featuredService.badge}
              </span>
              <h3 className="heading-section mt-4 text-base font-bold leading-snug text-white">
                {featuredService.title}
              </h3>
              <p className="mt-2.5 text-xs leading-relaxed text-white/70">
                {featuredService.description}
              </p>
            </div>

            <span className="relative z-10 mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-brand-cyan uppercase tracking-wider transition-all group-hover:text-white">
              {featuredService.cta} <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </Link>

        </div>
      </div>
    </motion.div>
  );
}
