"use client";

import { AnimationProvider } from "./animation-provider";
import { SmoothScroll } from "./smooth-scroll";

type AppProvidersProps = {
  children: React.ReactNode;
};

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <AnimationProvider>
      <SmoothScroll>{children}</SmoothScroll>
    </AnimationProvider>
  );
}
