import { gsap } from "gsap";

let registered = false;

/** Register GSAP plugins once on the client (ScrollTrigger, etc.). */
export async function registerGsapPlugins() {
  if (typeof window === "undefined" || registered) return;

  const { ScrollTrigger } = await import("gsap/ScrollTrigger");
  gsap.registerPlugin(ScrollTrigger);
  registered = true;
}

export { gsap };
