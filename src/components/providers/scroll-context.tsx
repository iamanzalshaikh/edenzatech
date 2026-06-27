"use client";

import { createContext, useContext } from "react";

type ScrollContextValue = {
  scrollToTop: () => void;
};

const ScrollContext = createContext<ScrollContextValue>({
  scrollToTop: () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  },
});

export function useScroll() {
  return useContext(ScrollContext);
}

export const ScrollContextProvider = ScrollContext.Provider;
