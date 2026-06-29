"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Lock scroll
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "";
    }, 1800); // 1.8s load time

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            y: "-100%",
            transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#F6EDE1]"
        >
          <div className="relative flex flex-col items-center gap-6">
            {/* Logo Image Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, filter: "blur(4px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-48 md:w-56"
            >
              <img
                src="/edenza-stacked-logo.png"
                alt="Edenza Tech Logo"
                className="h-auto w-full object-contain"
              />
            </motion.div>

            {/* Premium Progress Bar */}
            <div className="h-[2px] w-32 overflow-hidden rounded-full bg-neutral-300/40">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.4, ease: "easeInOut" }}
                className="h-full bg-[#E07A2E]" // Brand Accent Orange
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
