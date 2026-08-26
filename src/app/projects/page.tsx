"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Sparkles, ArrowRight, ShieldCheck, Code2, Layers, X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { OrbittButton } from "@/components/ui/orbitt-button";
import { projectsList, ProjectItem } from "@/lib/projects-data";
import Link from "next/link";

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  // Auto-carousel functionality
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (selectedProject && selectedProject.gallery && selectedProject.gallery.length > 1 && !isPlayingVideo) {
      interval = setInterval(() => {
        setCurrentImageIndex((prev) => 
          prev === selectedProject.gallery!.length - 1 ? 0 : prev + 1
        );
      }, 3000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [selectedProject, isPlayingVideo]);

  const filteredProjects = activeTab === "all" 
    ? projectsList 
    : projectsList.filter(p => p.category === activeTab);

  return (
    <div className="bg-[#FFFDF8] min-h-screen">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-brand-gradient pt-16 pb-6 text-white md:pt-24 md:pb-12 text-center">
        <div className="absolute inset-0 bg-brand-black/10" aria-hidden />
        <Container className="relative z-10 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-cyan">
            DELIVERED SYSTEMS
          </p>
          <h1 className="heading-display mt-3 text-3xl font-extrabold md:text-5xl">
            Our Portfolio Projects
          </h1>
          <p className="mt-4 text-base text-white/80 md:text-lg">
            Explore our engineering portfolio featuring {projectsList.length} real-world SaaS products, responsive web platforms, and mobile apps built by our founders.
          </p>
        </Container>
      </section>

      {/* Projects Showcase & Interactive Filter Tabs */}
      <section className="py-16 bg-white">
        <Container>
          
          {/* Interactive filter selector */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {[
              { id: "all", label: "All Work" },
              { id: "web", label: "Web Apps" },
              { id: "mobile", label: "Mobile Apps" },
              { id: "saas", label: "SaaS Products" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-extrabold tracking-wide uppercase transition-all duration-200 border-0 cursor-pointer ${
                  activeTab === tab.id 
                    ? "bg-brand-blue text-white shadow-md"
                    : "bg-brand-cream/15 text-brand-blue hover:bg-brand-cream/30"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Grid Container */}
          <motion.div 
            layout
            className="grid gap-4 grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto sm:gap-6 lg:gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((proj) => (
                <motion.article 
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  key={proj.title}
                  className={`group relative overflow-hidden rounded-[1.5rem] sm:rounded-[2.5rem] ${proj.bgClass} p-3 sm:p-5 shadow-sm transition-all duration-300 hover:shadow-[0_24px_48px_rgba(26,26,26,0.05)] hover:-translate-y-1.5 flex flex-col justify-between`}
                >
                  <div>
                    {/* Image container */}
                    <ProjectCardImage 
                      proj={proj} 
                      onClick={() => {
                        setSelectedProject(proj);
                        setCurrentImageIndex(0);
                        setIsPlayingVideo(false);
                      }} 
                    />

                    {/* Header info */}
                    <div className="px-0.5 sm:px-1.5">
                      <div className="flex items-center gap-1.5 mb-1.5 sm:mb-2.5">
                        <span className="inline-flex items-center gap-1 rounded-full bg-white px-2 py-0.5 text-[8px] sm:text-[9px] font-extrabold uppercase tracking-wide text-brand-blue shadow-sm">
                          <Sparkles className="h-2 w-2 sm:h-2.5 sm:w-2.5 text-brand-orange fill-current" />
                          <span className="hidden sm:inline">{proj.categoryLabel}</span>
                          <span className="sm:hidden">{proj.category.toUpperCase()}</span>
                        </span>
                      </div>

                      <h3 className="text-xs sm:text-base lg:text-lg font-bold text-brand-blue leading-snug group-hover:text-brand-orange transition-colors line-clamp-2">
                        {proj.title}
                      </h3>
                      
                      <p className="text-[10px] sm:text-xs font-semibold text-[#134D4A] mt-1 hidden sm:block">
                        ★ {proj.metric}
                      </p>

                      <p className="mt-2 sm:mt-3.5 text-[10px] sm:text-xs text-brand-muted leading-relaxed hidden sm:block line-clamp-3">
                        {proj.description}
                      </p>
                    </div>
                  </div>

                  <div className="px-0.5 sm:px-1.5 mt-3 sm:mt-6">
                    {/* Tech stack chips */}
                    <div className="hidden sm:flex flex-wrap gap-1.5 mb-4 sm:mb-6">
                      {proj.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="rounded-full bg-white/90 border border-brand-muted/5 px-2.5 py-0.5 text-[9px] font-bold text-brand-blue shadow-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="pt-2 sm:pt-4 border-t border-brand-muted/5 flex items-center justify-between gap-4">
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          setSelectedProject(proj);
                          setCurrentImageIndex(0);
                          setIsPlayingVideo(false);
                        }}
                        className={`inline-flex items-center gap-1 text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider ${proj.textClass} hover:opacity-85 bg-transparent border-0 cursor-pointer p-0`}
                      >
                        View Details <ChevronArrow className="h-3 w-3" />
                      </button>
                      
                      {proj.href && proj.href !== "#" && (
                        <a
                          href={proj.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-1 text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider ${proj.textClass} hover:opacity-85`}
                        >
                          Live Link <ChevronArrow className="h-3 w-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>

        </Container>
      </section>

      {/* Global commitments - No borders or bottom divider lines */}
      <section className="bg-brand-cream/30 py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h3 className="heading-display text-2xl font-bold text-brand-blue md:text-3xl">
              Our Core Engineering Commitments
            </h3>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="h-10 w-10 rounded-lg bg-brand-orange/10 flex items-center justify-center text-brand-orange mb-4">
                <Layers className="h-5 w-5" />
              </div>
              <h4 className="font-bold text-brand-blue text-base">Clean Architecture</h4>
              <p className="mt-2 text-xs sm:text-sm text-brand-muted leading-relaxed">
                Code should be an organizational asset. We build modular, type-safe structures that any development team can scale, understand, and easily extend.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="h-10 w-10 rounded-lg bg-[#E2ECFA] flex items-center justify-center text-[#0c4ca6] mb-4">
                <Code2 className="h-5 w-5" />
              </div>
              <h4 className="font-bold text-brand-blue text-base">Zero compiler warnings</h4>
              <p className="mt-2 text-xs sm:text-sm text-brand-muted leading-relaxed">
                We enforce strict lint policies and compiler type validation. Resolving anomalies before they reach production makes applications rock-solid.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="h-10 w-10 rounded-lg bg-[#D2EBE7] flex items-center justify-center text-[#134D4A] mb-4">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h4 className="font-bold text-brand-blue text-base">Security &amp; Encryption</h4>
              <p className="mt-2 text-xs sm:text-sm text-brand-muted leading-relaxed">
                Credentials security, TLS routing, injection checks, and environment isolation are native priorities. We protect your company and user data.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Footer CTA */}
      <section className="py-20 bg-white text-center">
        <Container className="max-w-2xl">
          <h3 className="heading-display text-2xl font-bold text-brand-blue md:text-3xl">
            Have a custom project request?
          </h3>
          <p className="mt-3 text-sm text-brand-muted md:text-base">
            Work directly with our founders to draft the technical specification document, choose framework stacks, and build sprint roadmaps.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <OrbittButton href="/contact" variant="solid">
              Start Your Project
            </OrbittButton>
            <OrbittButton href="/services" variant="light-outline">
              Explore Our Services
            </OrbittButton>
          </div>
        </Container>
      </section>

      {/* Image Carousel Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-8"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="relative w-full max-w-4xl bg-white border border-brand-soft rounded-3xl overflow-hidden flex flex-col md:flex-row z-10 max-h-[90vh] md:max-h-[85vh] overflow-y-auto"
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.1) 0px 20px 50px, rgba(255, 255, 255, 0.5) 0px 1px 0px inset, rgba(224, 122, 46, 0.15) 0px 0px 40px",
              }}
              onClick={(e) => e.stopPropagation()}
              data-lenis-prevent="true"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-brand-soft/50 border border-brand-soft text-brand-muted hover:text-brand-blue flex items-center justify-center hover:bg-brand-soft transition-all z-30 cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="w-full md:w-1/2 h-64 sm:h-72 md:h-auto relative bg-brand-cream/30 flex items-center justify-center min-h-[240px] sm:min-h-[300px] md:min-h-[auto] shrink-0">
                <div className="relative w-full h-full group/media">
                  <div className="relative w-full h-full overflow-hidden group/slider bg-brand-cream/50">
                    {selectedProject.videoUrl && isPlayingVideo ? (
                      <iframe
                        src={`${selectedProject.videoUrl}&autoplay=true`}
                        className="w-full h-full border-0 animate-fade-in bg-black"
                        allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                        allowFullScreen
                        style={{ height: "100%", width: "100%" }}
                      />
                    ) : (
                      <>
                        <div 
                          className="relative w-full h-full" 
                          onClick={() => { if (selectedProject.videoUrl) setIsPlayingVideo(true); }}
                        >
                          <Image
                            src={
                              selectedProject.gallery?.length
                                ? selectedProject.gallery[currentImageIndex]
                                : selectedProject.image
                            }
                            alt={selectedProject.title}
                            fill
                            className={`object-contain bg-white/90 p-3 transition-all duration-700 opacity-100 ${selectedProject.videoUrl ? 'cursor-pointer' : 'hover:scale-[1.02]'}`}
                          />
                          
                          {selectedProject.videoUrl && (
                            <div className="absolute inset-0 bg-black/10 hover:bg-black/20 transition-colors flex items-center justify-center cursor-pointer group">
                              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-brand-orange/90 rounded-full flex items-center justify-center text-white shadow-lg backdrop-blur-sm group-hover:scale-110 transition-transform">
                                <svg className="w-6 h-6 sm:w-8 sm:h-8 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                              </div>
                            </div>
                          )}
                        </div>
                        
                        {selectedProject.gallery && selectedProject.gallery.length > 1 && (
                          <>
                            <button
                              className="absolute left-2.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover/slider:opacity-100 transition-all duration-300 hover:bg-black hover:scale-105 border border-white/10 z-20 cursor-pointer"
                              onClick={() =>
                                setCurrentImageIndex((prev) =>
                                  prev === 0 ? selectedProject.gallery!.length - 1 : prev - 1
                                )
                              }
                              aria-label="Previous image"
                            >
                              <ChevronLeft className="w-3.5 h-3.5" />
                            </button>
                            <button
                              className="absolute right-2.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover/slider:opacity-100 transition-all duration-300 hover:bg-black hover:scale-105 border border-white/10 z-20 cursor-pointer"
                              onClick={() =>
                                setCurrentImageIndex((prev) =>
                                  prev === selectedProject.gallery!.length - 1 ? 0 : prev + 1
                                )
                              }
                              aria-label="Next image"
                            >
                              <ChevronRight className="w-3.5 h-3.5" />
                            </button>

                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
                              {selectedProject.gallery.map((_, i) => (
                                <button
                                  key={i}
                                  onClick={() => setCurrentImageIndex(i)}
                                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                                    i === currentImageIndex
                                      ? "bg-white w-4 shadow-[0_0_8px_rgba(255,255,255,0.6)]"
                                      : "bg-white/40 hover:bg-white/60 w-1.5"
                                  }`}
                                  aria-label={`Go to slide ${i + 1}`}
                                />
                              ))}
                            </div>
                          </>
                        )}
                      </>
                    )}
                  </div>
                </div>
                <span
                  className="absolute top-4 left-4 text-[9px] uppercase font-bold tracking-widest px-3 py-1 rounded-full border bg-white/90 backdrop-blur-sm z-20"
                  style={{
                    color: "var(--brand-orange)",
                    borderColor: "color-mix(in srgb, var(--brand-orange) 25%, transparent)",
                    boxShadow: "rgba(224, 122, 46, 0.2) 0px 0px 10px",
                  }}
                >
                  {selectedProject.categoryLabel || "Professional"}
                </span>
              </div>
              
              <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-10 flex flex-col gap-4 sm:gap-6 select-text justify-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold font-manrope text-brand-blue">
                    {selectedProject.title}
                  </h3>
                  <div className="w-12 h-1 bg-brand-orange mt-3 rounded-full" />
                </div>
                
                <p className="text-sm text-brand-muted leading-relaxed font-light font-manrope">
                  {selectedProject.description}
                </p>
                
                <div className="grid grid-cols-3 gap-3.5 py-5 border-y border-brand-soft w-full">
                  <div className="flex flex-col min-w-0">
                    <span className="text-[10px] text-brand-muted font-bold uppercase tracking-wider break-words whitespace-normal leading-tight">
                      Core Architecture
                    </span>
                    <span className="text-sm font-bold text-brand-blue mt-1 break-words whitespace-normal leading-snug">
                      {selectedProject.coreArchitecture || "Modern Web Stack"}
                    </span>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[10px] text-brand-muted font-bold uppercase tracking-wider break-words whitespace-normal leading-tight">
                      Database System
                    </span>
                    <span className="text-sm font-bold text-brand-blue mt-1 break-words whitespace-normal leading-snug">
                      {selectedProject.databaseSystem || "PostgreSQL / DB"}
                    </span>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[10px] text-brand-muted font-bold uppercase tracking-wider break-words whitespace-normal leading-tight">
                      Focus
                    </span>
                    <span className="text-sm font-bold text-brand-blue mt-1 break-words whitespace-normal leading-snug">
                      {selectedProject.focus || selectedProject.metric || "Business Logic"}
                    </span>
                  </div>
                </div>
                
                <div className="bg-brand-cream/40 border border-brand-soft rounded-2xl p-4 flex justify-between items-center">
                  <div>
                    <span className="text-[9px] uppercase tracking-widest text-brand-muted font-bold">
                      Application Focus
                    </span>
                    <p className="text-sm font-bold text-brand-orange mt-0.5">
                      {selectedProject.categoryLabel}
                    </p>
                  </div>
                  {selectedProject.href && selectedProject.href !== "#" && (
                    <a
                      href={selectedProject.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-brand-orange hover:bg-brand-orange-hover text-white font-semibold text-xs transition-all duration-300"
                    >
                      Launch Project
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-3.5 h-3.5"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Inline small Arrow icon
function ChevronArrow({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
    </svg>
  );
}

function ProjectCardImage({ proj, onClick }: { proj: ProjectItem, onClick: () => void }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (proj.gallery && proj.gallery.length > 1) {
      interval = setInterval(() => {
        setIndex((prev) => prev === proj.gallery!.length - 1 ? 0 : prev + 1);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [proj]);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (proj.gallery) {
      setIndex((prev) => prev === proj.gallery!.length - 1 ? 0 : prev + 1);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (proj.gallery) {
      setIndex((prev) => prev === 0 ? proj.gallery!.length - 1 : prev - 1);
    }
  };

  return (
    <div 
      className="relative aspect-[16/10] w-full overflow-hidden rounded-[1rem] sm:rounded-[1.8rem] bg-white shadow-sm mb-3 sm:mb-5 cursor-pointer group/cardimg"
      onClick={onClick}
    >
      <Image
        src={proj.gallery?.length ? proj.gallery[index] : proj.image}
        alt={`${proj.title} Showcase Mockup`}
        fill
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
        className="object-contain transition-transform duration-500 group-hover:scale-[1.03]"
      />
      {proj.gallery && proj.gallery.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover/cardimg:opacity-100 transition-all duration-300 hover:bg-black hover:scale-105 border border-white/10 z-20 cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover/cardimg:opacity-100 transition-all duration-300 hover:bg-black hover:scale-105 border border-white/10 z-20 cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </>
      )}
    </div>
  );
}
