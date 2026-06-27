import { cn } from "@/lib/utils";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  /** Use for GSAP scroll-trigger anchors */
  "data-section"?: string;
};

export function Section({
  children,
  className,
  id,
  "data-section": dataSection,
}: SectionProps) {
  return (
    <section
      id={id}
      data-section={dataSection}
      className={cn("relative py-20 md:py-28 lg:py-32", className)}
    >
      {children}
    </section>
  );
}
