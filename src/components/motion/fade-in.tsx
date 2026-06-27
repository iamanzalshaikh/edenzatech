"use client";

import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

type FadeInProps = {
  children: React.ReactNode;
  className?: string;
  index?: number;
  as?: "div" | "span" | "p" | "h1" | "h2" | "h3";
};

export function FadeIn({
  children,
  className,
  index = 0,
  as: Tag = "div",
}: FadeInProps) {
  const MotionTag = motion[Tag];

  return (
    <MotionTag
      className={cn(className)}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={item}
    >
      {children}
    </MotionTag>
  );
}
