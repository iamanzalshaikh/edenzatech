import type { Metadata } from "next";
import { PageShell } from "@/components/layout/page-shell";

export const metadata: Metadata = {
  title: "Contact Us",
};

export default function ContactPage() {
  return (
    <PageShell
      title="Contact Us"
      description="Schedule a free 30-minute discovery call. Tell us about your product idea and we'll map a technical roadmap together."
    />
  );
}
