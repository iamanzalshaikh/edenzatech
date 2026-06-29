"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { testimonials } from "@/lib/home-data";
import { cn } from "@/lib/utils";

function avatarUrl(name: string) {
  return `https://api.dicebear.com/7.x/avataaars/png?seed=${encodeURIComponent(name)}&size=96&backgroundColor=e2e8f0,f1f5f9`;
}

function TestimonialCard({
  name,
  handle,
  quote,
  rating,
  avatar,
  flag,
  location,
  className,
}: {
  name: string;
  handle: string;
  quote: string;
  rating: number;
  avatar: string;
  flag?: string;
  location?: string;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "flex w-[min(100%,300px)] shrink-0 flex-col rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm sm:w-[340px] sm:p-6",
        className,
      )}
    >
      <div className="flex items-center gap-3">
        <Image
          src={avatar}
          alt={name}
          width={48}
          height={48}
          className="h-12 w-12 rounded-full bg-brand-soft object-cover ring-2 ring-brand-cyan/20"
          loading="lazy"
        />
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-1.5">
            <p className="truncate font-semibold text-neutral-900">{name}</p>
            {flag && (
              <span className="text-base shrink-0 select-none" title={location}>
                {flag}
              </span>
            )}
          </div>
          <p className="truncate text-xs text-neutral-500">{handle}</p>
        </div>
      </div>
      <div className="mt-4 flex gap-0.5 text-brand-cyan">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-current" />
        ))}
      </div>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-700">
        &ldquo;{quote}&rdquo;
      </p>
    </article>
  );
}

const items = testimonials.map((t) => ({
  ...t,
  avatar: avatarUrl(t.name),
}));

const loop = [...items, ...items];

export function TestimonialsMarquee() {
  return (
    <div className="relative mt-10 overflow-hidden sm:mt-12">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-white to-transparent sm:w-20" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-white to-transparent sm:w-20" />

      <div className="flex w-max animate-testimonial-marquee gap-4 pause-on-hover sm:gap-6">
        {loop.map((t, i) => (
          <TestimonialCard key={`${t.name}-${i}`} {...t} />
        ))}
      </div>
    </div>
  );
}
