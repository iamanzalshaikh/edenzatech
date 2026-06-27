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
      <span className={cn("inline-flex items-center gap-2.5", className)}>
        <EdenzaLogo variant="mark" theme={theme} className="h-9 w-9 shrink-0 sm:h-10 sm:w-10" />
        <span className="flex flex-col leading-none">
          <span className={cn("text-lg font-bold tracking-wide sm:text-xl", textClass)}>
            EDENZA<span className="text-gradient">TECH</span>
          </span>
          {showSubtitle && (
            <span
              className={cn(
                "mt-1 text-[9px] font-semibold uppercase tracking-[0.22em] sm:text-[10px]",
                subtitleClass,
              )}
            >
              Technologies
            </span>
          )}
        </span>
      </span>
    );
  }

  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-auto w-full", className)}
      aria-hidden
    >
      <defs>
        <linearGradient id="edenza-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00E5FF" />
          <stop offset="100%" stopColor="#0052FF" />
        </linearGradient>
      </defs>
      <path d="M6 10h34v9H18v7h20v9H18v11H6V10z" fill="url(#edenza-grad)" />
      <path
        d="M44 36l12 14H44l-8-10 8-4z"
        fill={theme === "dark" ? "#ffffff" : "#0a0a0a"}
      />
    </svg>
  );
}
