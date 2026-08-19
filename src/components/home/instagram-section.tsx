"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Heart, MessageCircle } from "lucide-react";

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}
import { Container } from "@/components/ui/container";
import { OrbittButton } from "@/components/ui/orbitt-button";

const INSTAGRAM_POSTS = [
  {
    id: 1,
    image: "/instagram/post-1.jpg",
    likes: "1.2k",
    comments: "48",
    link: "https://www.instagram.com/p/DaKhjT2pskB/",
  },
  {
    id: 2,
    image: "/instagram/post-2.jpg",
    likes: "892",
    comments: "32",
    link: "https://www.instagram.com/p/DakWXGQtmSh/",
  },
  {
    id: 3,
    image: "/instagram/post-3.jpg",
    likes: "2.1k",
    comments: "156",
    link: "https://www.instagram.com/p/DbVKIJYNAAM/",
  },
  {
    id: 4,
    image: "/instagram/post-4.jpg",
    likes: "1.5k",
    comments: "84",
    link: "https://www.instagram.com/p/Db5uIYojZLw/?img_index=1",
  },
  {
    id: 5,
    image: "/instagram/post-5.jpg",
    likes: "945",
    comments: "28",
    link: "https://www.instagram.com/p/DcIIXUykb9c/",
  },
  {
    id: 6,
    image: "/instagram/post-6.jpg",
    likes: "3.2k",
    comments: "210",
    link: "https://www.instagram.com/reel/DaM88i8NSyq/",
  },
  {
    id: 7,
    image: "/instagram/post-7.jpg",
    likes: "1.8k",
    comments: "112",
    link: "https://www.instagram.com/reel/DaU6W0IMTsf/",
  },
  {
    id: 8,
    image: "/instagram/post-8.jpg",
    likes: "2.4k",
    comments: "145",
    link: "https://www.instagram.com/reel/Dah5gRBtDD1/",
  },
];

export function InstagramSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <section ref={containerRef} className="relative overflow-hidden bg-neutral-950 py-24 lg:py-32">
      {/* Background elements */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[800px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] opacity-15 blur-[120px]" />
      
      <Container className="relative z-10">
        <div className="mb-16 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 inline-flex items-center justify-center rounded-full bg-white/5 px-4 py-1.5 backdrop-blur-sm border border-white/10"
          >
            <InstagramIcon className="mr-2 h-4 w-4 text-[#ee2a7b]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-neutral-300">
              Social Vibes
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-6 text-3xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl"
          >
            Follow Us On <span className="bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] bg-clip-text text-transparent">Instagram</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto max-w-2xl text-lg text-neutral-400"
          >
            Stay updated with our latest projects, behind-the-scenes moments, and tech insights. 
            Join our growing community!
          </motion.p>
        </div>

        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl shadow-2xl ring-1 ring-white/10">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {INSTAGRAM_POSTS.map((post, index) => (
              <motion.a
                key={post.id}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group relative aspect-square overflow-hidden bg-white/10"
              >
                <Image
                  src={post.image}
                  alt="Instagram post"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="flex items-center gap-6 text-white">
                    <div className="flex items-center gap-2">
                      <Heart className="h-6 w-6 fill-white" />
                      <span className="font-semibold">{post.likes}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MessageCircle className="h-6 w-6 fill-white" />
                      <span className="font-semibold">{post.comments}</span>
                    </div>
                  </div>
                </div>
                
                <div className="absolute right-4 top-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <InstagramIcon className="h-6 w-6" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 flex justify-center"
        >
          <OrbittButton href="https://www.instagram.com/edenzatech/" className="gap-2 bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white hover:opacity-90 border-0">
            <InstagramIcon className="h-5 w-5 text-white" />
            @edenzatech
          </OrbittButton>
        </motion.div>
      </Container>
    </section>
  );
}
