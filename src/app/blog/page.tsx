import { Metadata } from "next";
import { getAllPosts } from "@/lib/blog-utils";
import { Container } from "@/components/ui/container";
import Link from "next/link";
import { ArrowRight, Calendar, User, Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "Engineering Blog & Insights | Edenza Tech",
  description: "Read our latest articles on scalable software architecture, SaaS development, and startup engineering principles.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div className="bg-[#FFFDF8] min-h-screen">
      <section className="relative overflow-hidden bg-brand-gradient pt-16 pb-6 text-white md:pt-24 md:pb-12">
        <div className="absolute inset-0 bg-brand-black/10" aria-hidden />
        <Container className="relative z-10 text-center max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-cyan">
            ENGINEERING INSIGHTS
          </p>
          <h1 className="heading-display mt-3 text-3xl font-extrabold md:text-5xl">
            The Edenza Tech Blog
          </h1>
          <p className="mt-4 text-base text-white/80 md:text-lg">
            Thoughts, tutorials, and deep-dives into custom software architecture, React Native, and high-performance web systems.
          </p>
        </Container>
      </section>

      <section className="py-20 bg-white">
        <Container>
          {posts.length === 0 ? (
            <div className="text-center py-20 text-brand-muted">
              <p>No articles published yet. Check back soon!</p>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
              {posts.map((post) => (
                <article 
                  key={post.slug}
                  className="group relative overflow-hidden rounded-[2rem] bg-[#F5FAF9] p-8 shadow-sm transition-all duration-300 hover:shadow-[0_24px_48px_rgba(26,26,26,0.04)] hover:-translate-y-1.5 flex flex-col justify-between border border-[#D2EBE7]/50"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-[9px] font-extrabold uppercase tracking-wider text-brand-blue shadow-sm">
                        <Tag className="h-2.5 w-2.5 text-brand-orange" />
                        {post.category}
                      </span>
                      <span className="text-xs text-brand-muted flex items-center gap-1">
                        <Calendar className="h-3 w-3" /> {new Date(post.date).toLocaleDateString()}
                      </span>
                    </div>

                    <h2 className="text-xl font-bold text-brand-blue group-hover:text-brand-orange transition-colors">
                      <Link href={`/blog/${post.slug}`}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </Link>
                    </h2>

                    <p className="mt-4 text-sm leading-relaxed text-brand-muted line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="mt-8 pt-5 border-t border-[#D2EBE7]/50 flex items-center justify-between">
                    <span className="text-xs font-semibold text-[#134D4A] flex items-center gap-1.5">
                      <User className="h-3.5 w-3.5" /> {post.author}
                    </span>
                    <span className="text-xs font-extrabold uppercase tracking-wider text-brand-blue flex items-center gap-1">
                      Read <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </article>
              ))}
            </div>
          )}
        </Container>
      </section>
    </div>
  );
}
