"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { useScroll } from "@/components/providers/scroll-context";

export function ScrollToTop() {
  const { scrollToTop } = useScroll();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={scrollToTop}
      className="fixed bottom-5 right-5 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-brand-gradient text-brand-black shadow-lg shadow-brand-cyan/20 transition-transform hover:scale-105 sm:bottom-6 sm:right-6"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
