"use client";

import { motion } from "framer-motion";

function MiniChart({ bars }: { bars: number[] }) {
  const max = Math.max(...bars);
  return (
    <div className="flex h-8 items-end gap-0.5">
      {bars.map((h, i) => (
        <div
          key={i}
          className="w-1.5 rounded-sm bg-brand-cyan/80"
          style={{ height: `${(h / max) * 100}%` }}
        />
      ))}
    </div>
  );
}

function FloatCard({
  label,
  value,
  sub,
  chart,
  className,
  delay = 0,
}: {
  label: string;
  value?: string;
  sub?: string;
  chart?: number[];
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={`absolute rounded-xl border border-black/5 bg-white px-3 py-2.5 shadow-[0_8px_30px_rgba(0,0,0,0.08)] sm:px-4 sm:py-3 ${className ?? ""}`}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4 + delay, repeat: Infinity, ease: "easeInOut" }}
      >
        <p className="text-[10px] font-medium text-neutral-500 sm:text-xs">{label}</p>
        {value && (
          <p className="mt-0.5 text-lg font-bold text-neutral-900 sm:text-xl">{value}</p>
        )}
        {sub && <p className="text-[10px] text-neutral-400">{sub}</p>}
        {chart && (
          <div className="mt-1">
            <MiniChart bars={chart} />
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

export function HeroLaptopVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[520px] lg:max-w-none">
      {/* Floating stat cards */}
      <FloatCard
        label="Clicks"
        value="128"
        chart={[4, 7, 5, 9, 8, 12, 10]}
        className="left-0 top-[8%] z-20 sm:left-[-4%]"
        delay={0.3}
      />
      <FloatCard
        label="CTR"
        value="19%"
        className="right-0 top-[18%] z-20 sm:right-[-2%]"
        delay={0.45}
      />
      <FloatCard
        label="Impressions"
        sub="48% ↑"
        chart={[3, 6, 4, 8, 7, 11, 9]}
        className="left-[4%] bottom-[22%] z-20 sm:left-[0%]"
        delay={0.55}
      />
      <FloatCard
        label="Impressions"
        sub="19% ↑"
        chart={[5, 4, 7, 6, 9, 8, 10]}
        className="right-[2%] bottom-[12%] z-20 sm:right-[-1%]"
        delay={0.65}
      />

      {/* Laptop */}
      <motion.div
        className="relative z-10 mx-auto w-[88%] sm:w-[85%]"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Screen lid */}
        <div className="overflow-hidden rounded-t-xl border border-neutral-300 border-b-0 bg-neutral-800 p-[3px] shadow-2xl sm:rounded-t-2xl sm:p-1">
          <div className="overflow-hidden rounded-t-[10px] bg-[#0f1419] sm:rounded-t-xl">
            {/* Screen content */}
            <div className="aspect-[16/10] p-4 sm:p-5">
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-red-400/80" />
                <span className="h-2 w-2 rounded-full bg-amber-400/80" />
                <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
              </div>
              <p className="mt-4 text-[10px] font-semibold leading-snug text-white sm:text-xs md:text-sm">
                Digital Solutions
                <br />
                That Drive Growth
              </p>
              <div className="mt-3 grid grid-cols-3 gap-2">
                {[65, 45, 80].map((w, i) => (
                  <div key={i} className="rounded bg-white/5 p-2">
                    <div
                      className="h-1 rounded-full bg-brand-gradient"
                      style={{ width: `${w}%` }}
                    />
                    <div className="mt-2 h-6 rounded bg-white/5" />
                  </div>
                ))}
              </div>
              <div className="mt-2 h-12 rounded bg-white/5 sm:mt-3" />
            </div>
          </div>
        </div>
        {/* Base */}
        <div className="relative mx-auto h-3 w-[108%] -translate-x-[4%] rounded-b-xl bg-gradient-to-b from-neutral-400 to-neutral-500 shadow-lg sm:h-4" />
        <div className="mx-auto mt-0 h-1 w-[40%] rounded-b-lg bg-neutral-400" />
      </motion.div>
    </div>
  );
}
