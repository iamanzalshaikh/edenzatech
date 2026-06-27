import type { Metadata } from "next";
import { PageShell } from "@/components/layout/page-shell";

export const metadata: Metadata = {
  title: "About Us",
};

export default function AboutPage() {
  return (
    <PageShell
      title="About EDENZATECH"
      description="A software development company focused on web apps, mobile apps, and custom software — innovate, build, grow."
    />
  );
}
