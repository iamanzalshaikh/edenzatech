"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2, CloudLightning, GitCommit, Globe, Layers, Loader2, Play, ShieldCheck, Zap } from "lucide-react";
import { Container } from "@/components/ui/container";

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function HeroBlock() {
  const [latency, setLatency] = useState(12);
  const [isDeploying, setIsDeploying] = useState(false);
  const [deployStep, setDeployStep] = useState(0); // 0 = idle/success, 1 = compiling, 2 = uploading, 3 = propagating
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);

  // Telemetry init logs
  useEffect(() => {
    setLogs([
      "system: core_engine online",
      `network_latency: connected [${latency}ms]`,
      "security_vitals: verified (ssl active)",
      "server_status: ready for deployment (v3.2.0)"
    ]);
  }, []);

  // Fluctuating real-time latency telemetry
  useEffect(() => {
    const interval = setInterval(() => {
      setLatency(prev => {
        const change = Math.floor(Math.random() * 5) - 2;
        const next = prev + change;
        return next >= 6 && next <= 18 ? next : prev;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Update progress bar and logs during deployment simulation
  useEffect(() => {
    if (!isDeploying) return;

    let timer: NodeJS.Timeout;
    const updateProgress = () => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        
        const next = prev + Math.floor(Math.random() * 8) + 4;
        const bounded = next > 100 ? 100 : next;

        if (bounded >= 15 && prev < 15) {
          setDeployStep(1);
          setLogs(l => [...l, "> compiling client assets..."]);
        } else if (bounded >= 35 && prev < 35) {
          setLogs(l => [...l, "> optimizing route bundles..."]);
        } else if (bounded >= 55 && prev < 55) {
          setDeployStep(2);
          setLogs(l => [...l, "> pushing artifacts to edge CDN..."]);
        } else if (bounded >= 75 && prev < 75) {
          setDeployStep(3);
          setLogs(l => [...l, "> propagating global DNS tables..."]);
        } else if (bounded === 100) {
          setDeployStep(4);
          setLogs(l => [
            ...l, 
            "> deploy complete: live on production!",
            `> response latency: ${latency}ms`
          ]);
          setTimeout(() => {
            setIsDeploying(false);
            setDeployStep(0);
            setProgress(0);
          }, 1800);
        }

        return bounded;
      });
    };

    timer = setInterval(updateProgress, 150);
    return () => clearInterval(timer);
  }, [isDeploying, latency]);

  // Trigger simulated interactive deployment sequence
  const handleDeployClick = () => {
    if (isDeploying) return;
    setIsDeploying(true);
    setProgress(0);
    setDeployStep(0);
    setLogs(["> initiating build pipeline..."]);
  };

  return (
    <section className="relative overflow-hidden bg-brand-gradient pt-28 pb-20 text-white lg:pt-20 lg:pb-20">
      {/* Dynamic ambient grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Atmospheric accent glows */}
      <div className="absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-brand-cyan/15 blur-[120px]" />
      <div className="absolute right-10 top-20 h-[300px] w-[300px] rounded-full bg-brand-orange/10 blur-[80px]" />

      <Container className="relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-5 lg:gap-16">
          
          {/* Left Column: Simple & Clear Copy */}
          <motion.div
            className="flex flex-col text-left lg:col-span-3"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            {/* Studio Badge */}
            <motion.div
              variants={fadeUp}
              className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-cyan"
            >
              <Zap className="h-3.5 w-3.5 animate-pulse text-brand-orange" />
              Software Development Company
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={fadeUp}
              className="mt-6 text-[2.5rem] font-bold leading-[1.1] tracking-tight sm:text-[3.5rem] md:text-[4rem] xl:text-[4.2rem]"
            >
              We build custom <br className="hidden md:inline" />
              <span className="relative inline-block border border-brand-cyan bg-brand-cyan/10 px-3 pb-[0.1rem] pt-[0.2rem] font-mono text-white">
                software
                {/* White Corner Dots */}
                <span className="absolute left-0 top-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 bg-white border border-brand-cyan z-10" />
                <span className="absolute right-0 top-0 h-1.5 w-1.5 translate-x-1/2 -translate-y-1/2 bg-white border border-brand-cyan z-10" />
                <span className="absolute bottom-0 left-0 h-1.5 w-1.5 -translate-x-1/2 translate-y-1/2 bg-white border border-brand-cyan z-10" />
                <span className="absolute bottom-0 right-0 h-1.5 w-1.5 translate-x-1/2 translate-y-1/2 bg-white border border-brand-cyan z-10" />
              </span>{" "}
              that scales your business
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-xl text-base font-light leading-relaxed text-[#D7D7D7] sm:text-lg md:text-xl"
            >
              We design and develop fast, secure, and modern web applications tailored specifically to your company&apos;s goals.
            </motion.p>

            {/* Micro Tech Stack Badges */}
            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-wrap gap-2 text-xs font-medium text-white/60"
            >
              <span className="rounded-lg bg-white/5 px-2.5 py-1">Next.js</span>
              <span className="rounded-lg bg-white/5 px-2.5 py-1">React</span>
              <span className="rounded-lg bg-white/5 px-2.5 py-1">TypeScript</span>
              <span className="rounded-lg bg-white/5 px-2.5 py-1">Python</span>
              <span className="rounded-lg bg-white/5 px-2.5 py-1">AWS</span>
            </motion.div>

            {/* CTA Actions */}
            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-brand-orange px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-orange/20 transition-all hover:shadow-brand-orange/40 hover:brightness-110"
              >
                Start Your Project
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold transition-all hover:bg-white/10"
              >
                About Us
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column: Live Interactive Telemetry Dashboard */}
          <motion.div
            className="relative lg:col-span-2"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            {/* Floating Control Center */}
            <div className="relative rounded-2xl border border-white/10 bg-brand-black/40 p-5 shadow-2xl backdrop-blur-xl">
              
              {/* Pipeline Header */}
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <div className="flex items-center gap-2">
                  <CloudLightning className="h-4 w-4 text-brand-orange animate-pulse" />
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider text-white/50">
                    Deployment Pipeline
                  </span>
                </div>
                <div className="flex items-center gap-1.5 font-mono text-[10px]">
                  {isDeploying ? (
                    <span className="text-brand-orange font-bold flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-orange animate-ping" />
                      BUILDING {progress}%
                    </span>
                  ) : (
                    <span className="text-emerald-400 font-bold flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      ONLINE
                    </span>
                  )}
                </div>
              </div>

              {/* Node Pipeline Visualizer */}
              <div className="my-6 flex items-center justify-between px-2 relative">
                {/* Connecting pipeline line */}
                <div className="absolute left-6 right-6 top-4 -translate-y-[1px] h-[2px] bg-white/10 -z-10 overflow-hidden rounded-full">
                  {isDeploying && (
                    <motion.div
                      className="h-full bg-brand-cyan"
                      initial={{ width: "0%" }}
                      animate={{ width: `${progress}%` }}
                      transition={{ ease: "easeInOut" }}
                    />
                  )}
                </div>

                {/* Node 1: Commit */}
                <div className="flex flex-col items-center gap-1.5">
                  <div className={`h-8 w-8 rounded-full border flex items-center justify-center transition-all duration-300 z-10 ${
                    isDeploying || deployStep === 4 ? "border-brand-cyan bg-[#132927] text-brand-cyan shadow-[0_0_12px_rgba(0,229,255,0.2)]" : "border-white/15 bg-[#132927] text-white/30"
                  }`}>
                    <GitCommit className="h-4 w-4" />
                  </div>
                  <span className="text-[9px] font-bold uppercase tracking-wider text-white/40">Commit</span>
                </div>

                {/* Node 2: Build */}
                <div className="flex flex-col items-center gap-1.5">
                  <div className={`h-8 w-8 rounded-full border flex items-center justify-center transition-all duration-300 z-10 ${
                    deployStep >= 1 ? "border-brand-cyan bg-[#132927] text-brand-cyan shadow-[0_0_12px_rgba(0,229,255,0.2)]" : "border-white/15 bg-[#132927] text-white/30"
                  }`}>
                    {isDeploying && deployStep === 1 ? (
                      <Loader2 className="h-4 w-4 animate-spin text-brand-orange" />
                    ) : (
                      <CheckCircle2 className="h-4 w-4" />
                    )}
                  </div>
                  <span className="text-[9px] font-bold uppercase tracking-wider text-white/40">Build</span>
                </div>

                {/* Node 3: Global CDN Deploy */}
                <div className="flex flex-col items-center gap-1.5">
                  <div className={`h-8 w-8 rounded-full border flex items-center justify-center transition-all duration-300 z-10 ${
                    deployStep >= 3 ? "border-brand-cyan bg-[#132927] text-brand-cyan shadow-[0_0_12px_rgba(0,229,255,0.2)]" : "border-white/15 bg-[#132927] text-white/30"
                  }`}>
                    {isDeploying && deployStep === 3 ? (
                      <Loader2 className="h-4 w-4 animate-spin text-brand-orange" />
                    ) : (
                      <Globe className="h-4 w-4" />
                    )}
                  </div>
                  <span className="text-[9px] font-bold uppercase tracking-wider text-white/40">Global</span>
                </div>
              </div>

              {/* Status telemetry logs with live updates */}
              <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3 text-left">
                <div className="flex justify-between items-center border-b border-white/5 pb-1">
                  <span className="text-white/40 text-[9px] uppercase font-bold tracking-wider">System Console Log</span>
                  {isDeploying && <span className="font-mono text-[9px] text-brand-orange animate-pulse">building...</span>}
                </div>
                
                {/* Compact Console text log */}
                <div className="mt-2 font-mono text-[10px] leading-relaxed text-white/70 h-20 overflow-y-auto space-y-0.5 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/10">
                  <AnimatePresence initial={false}>
                    {logs.map((log, index) => (
                      <motion.p
                        key={index}
                        initial={{ opacity: 0, x: -5 }}
                        animate={{ opacity: 1, x: 0 }}
                        className={log.startsWith("> deploy") ? "text-emerald-400 font-bold" : log.startsWith("> compiling") ? "text-brand-orange" : log.startsWith("> propagating") ? "text-brand-cyan" : "text-white/75"}
                      >
                        {log}
                      </motion.p>
                    ))}
                  </AnimatePresence>
                </div>
              </div>

              {/* Telemetry Stats Grid - Compact 2x2 */}
              <div className="mt-3.5 grid grid-cols-2 gap-2.5">
                
                {/* Speed (Telemetry) */}
                <div className="rounded-xl border border-white/5 bg-white/[0.02] p-2.5 text-left flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="text-white/50 text-[9px] uppercase font-bold tracking-wider">Speed</span>
                    <Zap className="h-3 w-3 text-brand-orange animate-pulse" />
                  </div>
                  <div className="mt-1 flex items-baseline gap-1">
                    <span className="text-base font-bold tracking-tight text-white">{latency}</span>
                    <span className="text-[9px] text-white/40 font-mono">ms</span>
                  </div>
                </div>

                {/* Security Check */}
                <div className="rounded-xl border border-white/5 bg-white/[0.02] p-2.5 text-left flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="text-white/50 text-[9px] uppercase font-bold tracking-wider">Security</span>
                    <ShieldCheck className="h-3 w-3 text-emerald-400" />
                  </div>
                  <span className="text-[10px] font-bold text-emerald-400 uppercase mt-1">VERIFIED</span>
                </div>

                {/* Performance Score */}
                <div className="rounded-xl border border-white/5 bg-white/[0.02] p-2.5 text-left flex items-center justify-between">
                  <div>
                    <span className="text-white/50 text-[9px] uppercase font-bold tracking-wider block">Performance</span>
                    <span className="text-[10px] font-semibold text-white/80 block">Lighthouse</span>
                  </div>
                  <div className="h-7 w-7 rounded-full border border-brand-cyan/20 flex items-center justify-center font-bold text-brand-cyan text-[10px] bg-brand-cyan/5">
                    100
                  </div>
                </div>

                {/* Server Uptime */}
                <div className="rounded-xl border border-white/5 bg-white/[0.02] p-2.5 text-left flex items-center gap-2">
                  <div className="h-6 w-6 rounded bg-brand-orange/10 flex items-center justify-center text-brand-orange shrink-0">
                    <Layers className="h-3 w-3" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[8px] text-white/40 uppercase font-bold tracking-wider block">Uptime</span>
                    <span className="text-[10px] text-white/90 font-medium block truncate">99.9%</span>
                  </div>
                </div>
              </div>

              {/* Interactive deployment trigger button */}
              <button
                onClick={handleDeployClick}
                disabled={isDeploying}
                className={`mt-3.5 w-full py-3 px-4 rounded-xl border flex items-center justify-center gap-2.5 font-bold transition-all duration-300 outline-none text-xs ${
                  isDeploying
                    ? "bg-white/5 border-white/10 text-white/30 cursor-not-allowed"
                    : "bg-brand-blue/30 border-brand-cyan/30 text-brand-cyan hover:bg-brand-cyan hover:text-brand-blue hover:border-brand-cyan shadow-lg shadow-brand-cyan/5 hover:shadow-brand-cyan/15"
                }`}
              >
                {isDeploying ? (
                  <>
                    <Loader2 className="h-3 w-3 animate-spin text-brand-orange" />
                    Deploying ({progress}%)
                  </>
                ) : (
                  <>
                    <Play className="h-3 w-3 fill-current" />
                    Deploy to Production
                  </>
                )}
              </button>

            </div>

            {/* Overlap background visual deck */}
            <div className="absolute -bottom-4 -left-4 -z-10 h-full w-full rounded-2xl border border-white/5 bg-white/[0.01]" />
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
