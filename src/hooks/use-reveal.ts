"use client";

import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { gsap, registerGsapPlugins } from "@/lib/gsap";
import { usePrefersReducedMotion } from "./use-prefers-reduced-motion";

type UseRevealOptions = {
  y?: number;
  duration?: number;
  stagger?: number;
  delay?: number;
  start?: string;
};

/** Fade-up reveal on scroll via GSAP ScrollTrigger */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  options: UseRevealOptions = {},
) {
  const ref = useRef<T>(null);
  const reduced = usePrefersReducedMotion();
  const { y = 48, duration = 0.9, stagger = 0.08, delay = 0, start = "top 85%" } =
    options;

  useGSAP(
    async () => {
      if (reduced || !ref.current) return;
      await registerGsapPlugins();
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");

      const targets = ref.current.querySelectorAll("[data-reveal]");
      const els = targets.length ? targets : [ref.current];

      gsap.from(els, {
        y,
        opacity: 0,
        duration,
        stagger,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start,
          toggleActions: "play none none reverse",
        },
      });

      return () => {
        ScrollTrigger.getAll().forEach((t) => {
          if (t.trigger === ref.current) t.kill();
        });
      };
    },
    { scope: ref, dependencies: [reduced] },
  );

  return ref;
}
