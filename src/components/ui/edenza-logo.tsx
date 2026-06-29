import { cn } from "@/lib/utils";

type EdenzaLogoProps = {
  className?: string;
  variant?: "mark" | "wordmark";
  /** light = dark text on white bg; dark = white text on dark bg */
  theme?: "light" | "dark";
  showSubtitle?: boolean;
};

/** E mark — transparent background, works on any surface */
export function EdenzaLogo({
  className,
  variant = "mark",
  theme = "light",
  showSubtitle = false,
}: EdenzaLogoProps) {
  const textClass = theme === "dark" ? "text-white" : "text-neutral-900";
  const subtitleClass = theme === "dark" ? "text-brand-cyan" : "text-brand-blue";

  if (variant === "wordmark") {
    return (
      <img
        src="/edenza-horizontal-logo.png"
        alt="Edenza Technologies Logo"
        className={cn(
          "w-auto object-contain",
          theme === "dark" && "brightness-0 invert",
          className
        )}
      />
    );
  }

  return (
    <img
      src="/edenza-favicon.png"
      alt="Edenza Logo Mark"
      className={cn(
        "h-auto w-auto object-contain",
        className
      )}
    />
  );
}
