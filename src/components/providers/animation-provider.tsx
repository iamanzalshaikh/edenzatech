"use client";

import { useGSAP } from "@gsap/react";
import { useEffect } from "react";
import { registerGsapPlugins } from "@/lib/gsap";

type AnimationProviderProps = {
  children: React.ReactNode;
};

export function AnimationProvider({ children }: AnimationProviderProps) {
  useEffect(() => {
    void registerGsapPlugins();
  }, []);

  useGSAP(() => {
    // Global GSAP defaults — tweak per project
  }, []);

  return <>{children}</>;
}
