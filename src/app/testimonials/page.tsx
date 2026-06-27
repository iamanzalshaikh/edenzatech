import type { Metadata } from "next";
import { PageShell } from "@/components/layout/page-shell";

export const metadata: Metadata = {
  title: "Testimonials",
};

export default function TestimonialsPage() {
  return <PageShell title="What Our Clients Say" />;
}
