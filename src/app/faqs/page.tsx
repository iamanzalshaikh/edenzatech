import type { Metadata } from "next";
import { PageShell } from "@/components/layout/page-shell";

export const metadata: Metadata = {
  title: "FAQs",
};

export default function FaqsPage() {
  return (
    <PageShell
      title="Frequently Asked Questions"
      description="Everything you need to know about working with EDENZATECH on your software project."
    />
  );
}
