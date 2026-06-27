import Image from "next/image";
import { Container } from "@/components/ui/container";
import { pillars } from "@/lib/home-data";

export function PillarsSection() {
  return (
    <section className="border-y border-border bg-brand-black py-14 md:py-20">
      <Container>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {pillars.map((item) => (
            <article
              key={item.title}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-brand-cyan/10 ring-1 ring-brand-cyan/20">
                <Image
                  src={item.icon}
                  alt=""
                  width={40}
                  height={40}
                  className="h-10 w-10 object-contain"
                  unoptimized
                />
              </div>
              <h3 className="heading-section whitespace-pre-line text-lg text-gradient">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
