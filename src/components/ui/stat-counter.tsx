"use client";

import { useEffect, useState } from "react";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import { cn } from "@/lib/utils";

type StatCounterProps = {
  value: number;
  suffix?: string;
  label: string;
  variant?: "hero" | "panel" | "panel-light";
  duration?: number;
};

export function StatCounter({
  value,
  suffix = "",
  label,
  variant = "hero",
  duration = 2000,
}: StatCounterProps) {
  const { ref, inView } = useInViewOnce<HTMLDivElement>({
    rootMargin: "0px 0px -40px 0px",
    threshold: 0.2,
  });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const start = performance.now();
    let frame: number;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setCount(value);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value, duration]);

  return (
    <div ref={ref} className="text-center">
      <p
        className={cn(
          "font-bold tabular-nums",
          variant === "hero" && "text-4xl text-white md:text-5xl",
          variant === "panel" && "text-2xl text-brand-cyan md:text-3xl lg:text-4xl",
          variant === "panel-light" &&
            "text-2xl text-neutral-900 md:text-3xl lg:text-4xl",
        )}
      >
        {count}
        {suffix}
      </p>
      <p
        className={cn(
          "mt-2 font-medium",
          variant === "hero" && "text-sm text-white/90 md:text-base",
          variant === "panel" &&
            "text-[10px] uppercase tracking-wide text-white/70 sm:text-xs md:text-sm",
          variant === "panel-light" &&
            "text-[10px] uppercase tracking-wide text-neutral-500 sm:text-xs md:text-sm",
        )}
      >
        {label}
      </p>
    </div>
  );
}
