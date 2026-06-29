"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import {
  Gauge,
  Map,
  Palette,
  Search,
  Shield,
  Smartphone,
  Play,
  CheckCircle,
  Code2,
  Terminal,
  Server,
  Database,
  Key,
  Globe2,
  GitPullRequest,
  Loader2,
  type LucideIcon
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { OrbittButton } from "@/components/ui/orbitt-button";

const column1Nodes = [
  {
    id: "lint",
    title: "Pre-Commit Lint",
    tagline: "Code format validation",
    icon: Terminal,
    iconColor: "text-neutral-600 bg-neutral-50",
    portColor: "bg-neutral-500",
    borderClass: "border-neutral-100",
    bgClass: "bg-neutral-50/30",
    description: "Automated ESLint and Prettier check to maintain strict formatting compliance across files."
  },
  {
    id: "tsc",
    title: "TS Compilation",
    tagline: "Type safety compiler",
    icon: Code2,
    iconColor: "text-blue-600 bg-blue-50",
    portColor: "bg-blue-500",
    borderClass: "border-blue-100",
    bgClass: "bg-blue-50/30",
    description: "Strict TypeScript compiler check ensuring zero type-casting omissions or compiler issues."
  }
];

const column2Nodes = [
  {
    id: "perf",
    title: "Performance Check",
    tagline: "Sub-2s page speed target",
    icon: Gauge,
    iconColor: "text-teal-600 bg-teal-50",
    portColor: "bg-teal-500",
    borderClass: "border-teal-100",
    bgClass: "bg-teal-50/30",
    description: "Sub-2s load times via Core Web Vitals, CDN optimization, and smart asset compression."
  },
  {
    id: "mobile",
    title: "Mobile Optimization",
    tagline: "Responsive layouts & touch",
    icon: Smartphone,
    iconColor: "text-emerald-600 bg-emerald-50",
    portColor: "bg-emerald-500",
    borderClass: "border-emerald-100",
    bgClass: "bg-emerald-50/30",
    description: "Layouts, margins, and tap areas tested on physical devices to ensure fluid mobile flows."
  },
  {
    id: "seo",
    title: "SEO Architecture",
    tagline: "Semantic tag & sitemaps",
    icon: Search,
    iconColor: "text-indigo-600 bg-indigo-50",
    portColor: "bg-indigo-500",
    borderClass: "border-indigo-100",
    bgClass: "bg-indigo-50/30",
    description: "Semantic tag hierarchy, custom sitemaps, and speed marks satisfying search algorithms."
  }
];

const column3Nodes = [
  {
    id: "journey",
    title: "User Journey Map",
    tagline: "UX layout & conversion map",
    icon: Map,
    iconColor: "text-amber-600 bg-amber-50",
    portColor: "bg-amber-500",
    borderClass: "border-amber-100",
    bgClass: "bg-amber-50/30",
    description: "Streamlined conversion funnels designed to answer user intents within 3 clicks."
  },
  {
    id: "identity",
    title: "Visual Theme",
    tagline: "HSL colors & fonts pairings",
    icon: Palette,
    iconColor: "text-purple-600 bg-purple-50",
    portColor: "bg-purple-500",
    borderClass: "border-purple-100",
    bgClass: "bg-purple-50/30",
    description: "Bespoke typography systems and HSL color pairings communicating high-end authority."
  }
];

const column4Nodes = [
  {
    id: "security",
    title: "Security Shield",
    tagline: "SSL, injection & XSS check",
    icon: Shield,
    iconColor: "text-red-600 bg-red-50",
    portColor: "bg-red-500",
    borderClass: "border-red-100",
    bgClass: "bg-red-50/30",
    description: "Input sanitization, security response headers, and integrated SSL certificates."
  },
  {
    id: "vault",
    title: "Credentials Vault",
    tagline: "Safe API keys check",
    icon: Key,
    iconColor: "text-yellow-600 bg-yellow-50",
    portColor: "bg-yellow-500",
    borderClass: "border-yellow-100",
    bgClass: "bg-yellow-50/30",
    description: "Isolation of credentials, secrets validation, and safe rotation triggers."
  }
];

const column5Nodes = [
  {
    id: "cdn",
    title: "Edge CDN Routing",
    tagline: "Caching & page rules sync",
    icon: Globe2,
    iconColor: "text-pink-600 bg-pink-50",
    portColor: "bg-pink-500",
    borderClass: "border-pink-100",
    bgClass: "bg-pink-50/30",
    description: "Asset distribution over globally edge CDNs to ensure fast caching response speeds."
  },
  {
    id: "replica",
    title: "DB Replication",
    tagline: "Read replicas & backup sync",
    icon: Database,
    iconColor: "text-cyan-600 bg-cyan-50",
    portColor: "bg-cyan-500",
    borderClass: "border-cyan-100",
    bgClass: "bg-cyan-50/30",
    description: "Cross-region read-replicas configuration to prevent slow loading and system latency."
  }
];

type RenderNode = {
  id: string;
  title: string;
  tagline: string;
  icon: LucideIcon;
  iconColor: string;
  portColor: string;
  borderClass: string;
  bgClass: string;
  description: string;
};

function MobileConnector({ active }: { active: boolean }) {
  return (
    <div className="flex justify-center lg:hidden my-2 z-10">
      <div className={`w-[2px] h-8 transition-all duration-500 rounded-full ${
        active 
          ? "bg-brand-orange shadow-[0_0_10px_rgba(224,122,46,0.5)]" 
          : "bg-brand-muted/20"
      }`} />
    </div>
  );
}

export function EdenzaStandardSection() {
  const [isRunning, setIsRunning] = useState(true);
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [lines, setLines] = useState<{
    id: string;
    path: string;
    active: boolean;
    stroke: string;
  }[]>([]);

  // Simulation pipeline execution loop
  useEffect(() => {
    if (!isRunning) {
      // Loop again after 5 seconds of idle success
      const t = setTimeout(() => {
        setActiveStep(0);
        setIsRunning(true);
      }, 5000);
      return () => clearTimeout(t);
    }

    const interval = setInterval(() => {
      setActiveStep((prev) => {
        if (prev >= 6) {
          setIsRunning(false);
          return 6;
        }
        return prev + 1;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [isRunning]);

  const handleTriggerClick = () => {
    setActiveStep(0);
    setIsRunning(true);
  };

  const calculatePaths = () => {
    if (typeof window !== "undefined" && window.innerWidth < 1024) return;
    const container = containerRef.current;
    if (!container) return;
    const containerRect = container.getBoundingClientRect();

    const connections = [
      // Trigger to Col 1
      { from: "trigger-out", to: "lint-in", active: activeStep >= 1, stroke: "#E07A2E" },
      { from: "trigger-out", to: "tsc-in", active: activeStep >= 1, stroke: "#E07A2E" },
      
      // Col 1 to Col 2
      { from: "lint-out", to: "perf-in", active: activeStep >= 2, stroke: "#0c4ca6" },
      { from: "lint-out", to: "mobile-in", active: activeStep >= 2, stroke: "#0c4ca6" },
      { from: "tsc-out", to: "mobile-in", active: activeStep >= 2, stroke: "#0c4ca6" },
      { from: "tsc-out", to: "seo-in", active: activeStep >= 2, stroke: "#0c4ca6" },
      
      // Col 2 to Col 3
      { from: "perf-out", to: "journey-in", active: activeStep >= 3, stroke: "#134D4A" },
      { from: "mobile-out", to: "journey-in", active: activeStep >= 3, stroke: "#134D4A" },
      { from: "mobile-out", to: "identity-in", active: activeStep >= 3, stroke: "#134D4A" },
      { from: "seo-out", to: "identity-in", active: activeStep >= 3, stroke: "#134D4A" },
      
      // Col 3 to Col 4
      { from: "journey-out", to: "security-in", active: activeStep >= 4, stroke: "#b07f18" },
      { from: "identity-out", to: "vault-in", active: activeStep >= 4, stroke: "#b07f18" },
      
      // Col 4 to Col 5
      { from: "security-out", to: "cdn-in", active: activeStep >= 5, stroke: "#ef4444" },
      { from: "vault-out", to: "replica-in", active: activeStep >= 5, stroke: "#ef4444" },
      
      // Col 5 to Deploy
      { from: "cdn-out", to: "deploy-in", active: activeStep >= 6, stroke: "#06b6d4" },
      { from: "replica-out", to: "deploy-in", active: activeStep >= 6, stroke: "#06b6d4" }
    ];

    const computedPaths = connections.map((conn) => {
      const el1 = container.querySelector(`[data-port="${conn.from}"]`);
      const el2 = container.querySelector(`[data-port="${conn.to}"]`);
      if (!el1 || !el2) return null;

      const r1 = el1.getBoundingClientRect();
      const r2 = el2.getBoundingClientRect();

      const x1 = r1.left + r1.width / 2 - containerRect.left;
      const y1 = r1.top + r1.height / 2 - containerRect.top;
      const x2 = r2.left + r2.width / 2 - containerRect.left;
      const y2 = r2.top + r2.height / 2 - containerRect.top;

      // Draw a nice bezier curve
      const dx = Math.abs(x2 - x1) * 0.45;
      const path = `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;

      return {
        id: `${conn.from}-${conn.to}`,
        path,
        active: conn.active,
        stroke: conn.stroke
      };
    }).filter(Boolean) as { id: string; path: string; active: boolean; stroke: string }[];

    setLines(computedPaths);
  };

  useEffect(() => {
    calculatePaths();
    window.addEventListener("resize", calculatePaths);
    const t = setTimeout(calculatePaths, 300);
    return () => {
      window.removeEventListener("resize", calculatePaths);
      clearTimeout(t);
    };
  }, [activeStep]);

  const renderColNode = (item: RenderNode, stepNum: number) => {
    const Icon = item.icon;
    const isActive = activeStep === stepNum;
    return (
      <motion.div
        key={item.id}
        className={`relative flex items-center gap-3 min-h-[5.5rem] py-3 px-3.5 rounded-xl border bg-white shadow-sm transition-all duration-300 hover:shadow-md group hover:-translate-y-0.5 ${
          isActive 
            ? "border-brand-orange ring-2 ring-brand-orange/10 shadow-[0_0_20px_rgba(224,122,46,0.18)] scale-[1.02] z-30" 
            : "border-brand-muted/10 z-10"
        }`}
      >
        {/* Left input port connector */}
        <div
          data-port={`${item.id}-in`}
          className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1.5 h-2.5 w-2.5 rounded-full border-2 border-white ${item.portColor} shadow-sm hidden lg:block`}
        />
        
        <div className={`h-8 w-8 rounded-lg flex items-center justify-center shrink-0 ${item.iconColor}`}>
          <Icon className="h-4 w-4" />
        </div>
        <div className="text-left flex-1 min-w-0">
          <h4 className="text-[11px] font-bold text-brand-blue leading-snug whitespace-normal break-words">{item.title}</h4>
          <p className="text-[9px] text-brand-muted mt-1 leading-snug whitespace-normal break-words">{item.tagline}</p>
        </div>

        {/* Right output port connector */}
        <div
          data-port={`${item.id}-out`}
          className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-1.5 h-2.5 w-2.5 rounded-full border-2 border-white ${item.portColor} shadow-sm hidden lg:block`}
        />

        {/* Hover detail tooltip card */}
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-60 rounded-xl bg-brand-blue text-white p-3 text-xs shadow-xl opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 z-50 text-left">
          <p className="font-bold text-brand-orange">{item.title}</p>
          <p className="mt-1 text-white/90 leading-relaxed text-[10px]">{item.description}</p>
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-brand-blue" />
        </div>
      </motion.div>
    );
  };

  return (
    <section className="bg-[#f3f7f6] py-20 lg:py-28 overflow-hidden" id="our-standards">
      <Container className="relative">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
            Engineering Lifecycle
          </p>
          <h2 className="heading-display mt-3 text-3xl font-bold text-brand-blue md:text-4xl">
            EDENZATECH Quality Gate Pipeline
          </h2>
          <p className="mt-4 text-base text-brand-muted md:text-lg">
            A secure workflow layout representing our automated compilation checks, quality validation gates, and global cloud distribution.
          </p>
        </div>

        {/* CSS animation styles for running pulses & particles */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes workflow-dash {
            to {
              stroke-dashoffset: -40;
            }
          }
          .animate-workflow-dash {
            stroke-dasharray: 6, 6;
            animation: workflow-dash 1.2s linear infinite;
          }
        `}} />

        {/* Diagram Canvas Wrapper */}
        <div
          id="diagram-canvas"
          ref={containerRef}
          className="relative mt-16 pb-10 pt-4 lg:overflow-visible"
        >
          {/* SVG Background Connections (Layer behind cards) */}
          <div className="absolute inset-0 z-0 pointer-events-none hidden lg:block">
            <svg className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
              {lines.map((line) => (
                <g key={line.id}>
                  {/* Base connection path line */}
                  <path
                    d={line.path}
                    stroke={line.active ? line.stroke : "#8c8276"}
                    strokeWidth="2"
                    className={line.active ? "opacity-95 animate-workflow-dash" : "opacity-15"}
                    style={{ transition: "all 0.3s" }}
                  />
                  {/* Glowing signal particle running along active paths */}
                  {line.active && (
                    <path
                      d={line.path}
                      stroke={line.stroke}
                      strokeWidth="4"
                      strokeLinecap="round"
                      className="opacity-100"
                      style={{
                        strokeDasharray: "4 120",
                        animation: "workflow-dash 1.2s linear infinite"
                      }}
                    />
                  )}
                </g>
              ))}
            </svg>
          </div>

          <div className="relative flex flex-col lg:grid lg:grid-cols-7 items-stretch lg:items-center gap-2 lg:gap-6 px-4 max-w-md mx-auto lg:max-w-none">
            
            {/* Column 0: Trigger Node (Interactive Button) */}
            <div className="z-10 flex justify-center">
              <button
                onClick={handleTriggerClick}
                className={`relative flex flex-col items-center justify-center h-28 w-36 rounded-2xl border bg-white p-3.5 text-center shadow-sm transition-all hover:scale-[1.03] outline-none active:scale-[0.98] ${
                  activeStep === 0 || isRunning ? "border-brand-orange ring-2 ring-brand-orange/20 shadow-[0_0_20px_rgba(224,122,46,0.22)]" : "border-brand-muted/10"
                }`}
              >
                <div className="h-8 w-8 rounded-lg bg-brand-orange/15 text-brand-orange flex items-center justify-center shadow-inner">
                  {isRunning ? (
                    <Loader2 className="h-4.5 w-4.5 animate-spin" />
                  ) : (
                    <Play className="h-4.5 w-4.5 fill-current" />
                  )}
                </div>
                <span className="mt-2 text-[8px] font-bold tracking-widest text-brand-orange uppercase">
                  {isRunning ? "RUNNING" : "TRIGGER"}
                </span>
                <h3 className="text-[10px] font-bold text-brand-blue leading-snug">
                  {isRunning ? "Running Pipeline" : "Code Commit"}
                </h3>
                
                {/* Output port connector */}
                <div
                  data-port="trigger-out"
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1.5 h-3 w-3 rounded-full border-2 border-white bg-brand-orange shadow-sm hidden lg:block" />
              </button>
            </div>

            <MobileConnector active={activeStep >= 1} />

            {/* Column 1: Pre-Commit Gates */}
            <div className="z-10 flex flex-col gap-4 lg:gap-5 justify-center">
              {column1Nodes.map(item => renderColNode(item, 1))}
            </div>

            <MobileConnector active={activeStep >= 2} />

            {/* Column 2: Code Performance & Mobile Optimization */}
            <div className="z-10 flex flex-col gap-4 lg:gap-5 justify-center">
              {column2Nodes.map(item => renderColNode(item, 2))}
            </div>

            <MobileConnector active={activeStep >= 3} />

            {/* Column 3: User Journey & Identity */}
            <div className="z-10 flex flex-col gap-4 lg:gap-5 justify-center">
              {column3Nodes.map(item => renderColNode(item, 3))}
            </div>

            <MobileConnector active={activeStep >= 4} />

            {/* Column 4: Security Shield & Credentials */}
            <div className="z-10 flex flex-col gap-4 lg:gap-5 justify-center">
              {column4Nodes.map(item => renderColNode(item, 4))}
            </div>

            <MobileConnector active={activeStep >= 5} />

            {/* Column 5: Cloud Host & CDN */}
            <div className="z-10 flex flex-col gap-4 lg:gap-5 justify-center">
              {column5Nodes.map(item => renderColNode(item, 5))}
            </div>

            <MobileConnector active={activeStep >= 6} />

            {/* Column 6: Output Deployment Node */}
            <div className="z-10 flex justify-center">
              <motion.div
                className={`relative flex flex-col items-center justify-center h-28 w-36 rounded-2xl border bg-white p-3.5 text-center shadow-sm transition-all ${
                  activeStep === 6 ? "border-emerald-500 ring-2 ring-emerald-500/20 shadow-[0_0_25px_rgba(16,185,129,0.35)] scale-[1.03]" : "border-brand-muted/10"
                }`}
              >
                <div className="h-8 w-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shadow-inner">
                  <CheckCircle className="h-4.5 w-4.5" />
                </div>
                <span className="mt-2 text-[8px] font-bold tracking-widest text-emerald-600 uppercase">OUTPUT</span>
                <h3 className="text-[10px] font-bold text-brand-blue leading-snug">Production Launch</h3>
                
                {/* Input port connector */}
                <div
                  data-port="deploy-in"
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1.5 h-3 w-3 rounded-full border-2 border-white bg-emerald-500 shadow-sm hidden lg:block" />
              </motion.div>
            </div>

          </div>
        </div>

        {/* Footer CTAs */}
        <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <OrbittButton href="/contact" variant="solid">
            Build the Right Way
          </OrbittButton>
          <OrbittButton href="/services" variant="light-outline">
            Explore Our Services
          </OrbittButton>
        </div>
      </Container>
    </section>
  );
}
