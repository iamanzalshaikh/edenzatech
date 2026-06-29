"use client";

import Lenis from "lenis";
import { useCallback, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { ScrollContextProvider } from "./scroll-context";

type SmoothScrollProps = {
  children: React.ReactNode;
};

export function SmoothScroll({ children }: SmoothScrollProps) {
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();

  const scrollToTop = useCallback(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { duration: 1.1 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  // Initialize Lenis
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      autoRaf: false,
    });

    lenisRef.current = lenis;

    const onScroll = () => {
      window.dispatchEvent(new Event("scroll"));
    };
    lenis.on("scroll", onScroll);

    let frame: number;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.off("scroll", onScroll);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Sync scroll position and resize on pathname changes to prevent locked scroll states
  useEffect(() => {
    if (lenisRef.current) {
      // Force instant scroll to top on route change
      lenisRef.current.scrollTo(0, { immediate: true });
      // Notify Lenis that DOM dimensions changed
      setTimeout(() => {
        if (lenisRef.current) {
          lenisRef.current.resize();
        }
      }, 50);
    }
  }, [pathname]);

  // Use ResizeObserver to automatically resize Lenis on any body element height/width changes (e.g. loader fade, images loading)
  useEffect(() => {
    if (typeof window === "undefined" || !document.body) return;

    const resizeObserver = new ResizeObserver(() => {
      if (lenisRef.current) {
        lenisRef.current.resize();
      }
    });

    resizeObserver.observe(document.body);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <ScrollContextProvider value={{ scrollToTop }}>{children}</ScrollContextProvider>
  );
}
