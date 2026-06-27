import type { TechItem } from "./tech-stack-data";

/** Colored brand icons via Devicon; fallback to Simple Icons */
export function getTechIconUrl(item: TechItem): string {
  if (item.devicon) {
    const variant = item.deviconVariant ?? "original";
    return `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${item.devicon}/${item.devicon}-${variant}.svg`;
  }
  if (item.simpleIcon) {
    return `https://cdn.simpleicons.org/${item.simpleIcon.slug}/${item.simpleIcon.color}`;
  }
  return `https://cdn.simpleicons.org/react/61DAFB`;
}
