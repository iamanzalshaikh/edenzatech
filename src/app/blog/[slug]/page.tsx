import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllPosts } from "@/lib/blog-utils";
import { Container } from "@/components/ui/container";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  
  return { 
    title: `${post.title} | Edenza Tech Blog`,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${slug}`
    }
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  
  if (!post) notFound();

  return (
    <div className="bg-[#FFFDF8] min-h-screen pb-20">
      
      {/* Blog Header */}
      <section className="relative overflow-hidden bg-brand-gradient pt-24 pb-16 text-white text-center">
        <div className="absolute inset-0 bg-brand-black/10" aria-hidden />
        <Container className="relative z-10 max-w-4xl mx-auto">
          <Link href="/blog" className="inline-flex items-center gap-1.5 text-xs font-bold text-white/70 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="h-3 w-3" /> Back to all articles
          </Link>
          
          <div className="flex flex-wrap justify-center items-center gap-4 mb-6">
            <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-brand-cyan">
              <Tag className="h-3 w-3 text-brand-orange" />
              {post.category}
            </span>
            <span className="text-xs text-white/80 flex items-center gap-1.5 font-medium">
              <Calendar className="h-3.5 w-3.5" /> {new Date(post.date).toLocaleDateString()}
            </span>
            <span className="text-xs text-white/80 flex items-center gap-1.5 font-medium">
              <User className="h-3.5 w-3.5" /> {post.author}
            </span>
          </div>

          <h1 className="heading-display text-3xl font-extrabold md:text-5xl leading-tight">
            {post.title}
          </h1>
        </Container>
      </section>

      {/* Blog Content */}
      <section className="pt-16">
        <Container className="max-w-3xl mx-auto">
          <div className="prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-headings:text-brand-blue prose-a:text-brand-orange prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl prose-img:shadow-sm">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
          
          <div className="mt-16 pt-8 border-t border-brand-muted/10 text-center">
            <p className="text-brand-muted text-sm mb-6">Want to implement this architecture in your own product?</p>
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-brand-blue text-white px-6 py-3 text-xs font-extrabold uppercase tracking-wider hover:bg-brand-blue-hover shadow-sm transition-colors"
            >
              Discuss Your Project
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
