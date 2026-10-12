"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { projectsData } from "../data/portfolio";

export default function Projects() {
  const [selectedImg, setSelectedImg] = useState<{
    url: string;
    caption: string;
  } | null>(null);

  // State for mobile projects carousel slider
  const [activeProjectSlide, setActiveProjectSlide] = useState(0);
  const projectScrollRef = useRef<HTMLDivElement>(null);

  const scrollToProject = (index: number) => {
    setActiveProjectSlide(index);
    if (projectScrollRef.current) {
      const card = projectScrollRef.current.children[index] as HTMLElement;
      if (card) {
        card.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      }
    }
  };

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="py-12 md:py-28 px-4 sm:px-6 bg-white border-t border-pink-100"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header (from Page 7 of PDF) */}
        <div data-aos="fade-up" className="mb-8 md:mb-14">
          <span className="text-xs sm:text-sm font-bold text-pink-700 tracking-widest uppercase mb-2 sm:mb-3 block">
            03 — PUBLIC HEALTH PROJECTS & EDUCATION
          </span>
          <h2
            id="projects-heading"
            className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 uppercase"
          >
            Health Promotion & Community Education
          </h2>
          <p className="text-stone-600 text-xs sm:text-base md:text-lg mt-2 sm:mt-3 max-w-2xl">
            Community health initiatives, reproductive health outreach, and
            maternal-child clinical interventions designed to foster health
            equity and wellness.
          </p>
        </div>

        {/* Mobile Swipe Helper Header */}
        <div className="flex md:hidden items-center justify-between px-1 text-xs text-stone-500 font-medium mb-3">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-pink-600 animate-pulse"></span>
            Project {activeProjectSlide + 1} of {projectsData.length}
          </span>
          <span className="flex items-center gap-1 text-pink-600 font-semibold">
            Swipe to explore <span>→</span>
          </span>
        </div>

        {/* Projects Grid */}
        <div
          ref={projectScrollRef}
          onScroll={(e) => {
            const el = e.currentTarget;
            const scrollLeft = el.scrollLeft;
            const cardWidth = el.offsetWidth * 0.82;
            const newIndex = Math.min(
              projectsData.length - 1,
              Math.max(0, Math.round(scrollLeft / (cardWidth || 1)))
            );
            if (newIndex !== activeProjectSlide) {
              setActiveProjectSlide(newIndex);
            }
          }}
          className="flex md:grid md:grid-cols-2 gap-4 sm:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-3 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {projectsData.map((project, index) => (
            <article
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="w-[86vw] max-w-[340px] md:w-full md:max-w-none shrink-0 md:shrink snap-center bg-stone-50/70 border border-stone-200 rounded-2xl sm:rounded-3xl p-4 sm:p-7 flex flex-col justify-between hover:border-pink-400 hover:shadow-md transition-all duration-300 group"
            >
              <div>
                {/* Image Showcase */}
                {project.images.length > 0 && (
                  <div
                    onClick={() =>
                      setSelectedImg({
                        url: project.images[0],
                        caption: project.title,
                      })
                    }
                    className="relative w-full h-44 sm:h-64 rounded-xl sm:rounded-2xl overflow-hidden mb-4 sm:mb-6 bg-stone-200 cursor-pointer"
                  >
                    <Image
                      src={project.images[0]}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 500px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/25 transition-colors flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 bg-white/95 text-stone-900 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-bold shadow-md">
                        View Image
                      </span>
                    </div>

                    {project.badge && (
                      <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 bg-pink-700/90 backdrop-blur-xs text-white text-[10px] sm:text-xs font-bold px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full shadow-xs">
                        {project.badge}
                      </div>
                    )}
                  </div>
                )}

                <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
                  <span className="text-[11px] sm:text-xs font-semibold text-pink-700 bg-pink-50 border border-pink-200 px-2 sm:px-2.5 py-0.5 rounded-md">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-base sm:text-xl font-bold text-stone-900 mb-1.5 sm:mb-2.5 leading-snug">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-3.5 sm:mb-5">
                  {project.description}
                </p>

                {/* Highlights List */}
                <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                  {project.highlights.map((item, hIdx) => (
                    <li
                      key={hIdx}
                      className="text-xs sm:text-sm text-stone-700 flex items-start gap-1.5 sm:gap-2 leading-relaxed"
                    >
                      <span className="text-pink-600 font-bold shrink-0 mt-0.5">
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Extra image thumbnails if any */}
              {project.images.length > 1 && (
                <div className="pt-3 sm:pt-4 border-t border-stone-200 flex gap-2">
                  {project.images.map((img, iIdx) => (
                    <button
                      key={iIdx}
                      type="button"
                      onClick={() =>
                        setSelectedImg({
                          url: img,
                          caption: `${project.title} - Photo ${iIdx + 1}`,
                        })
                      }
                      className="relative w-14 h-10 sm:w-16 sm:h-12 rounded-lg overflow-hidden border border-stone-300 cursor-pointer group"
                    >
                      <Image
                        src={img}
                        alt=""
                        fill
                        sizes="64px"
                        className="object-cover group-hover:scale-110 transition-transform"
                        unoptimized
                      />
                    </button>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>

        {/* Mobile Pagination Indicator Dots */}
        <div className="flex md:hidden items-center justify-center gap-2 pt-4">
          {projectsData.map((_, dotIdx) => (
            <button
              key={dotIdx}
              type="button"
              onClick={() => scrollToProject(dotIdx)}
              aria-label={`Go to project ${dotIdx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                activeProjectSlide === dotIdx
                  ? "w-7 bg-pink-600 shadow-xs"
                  : "w-2 bg-pink-200 hover:bg-pink-300"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImg && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setSelectedImg(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl p-4 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-stone-100">
              <p className="text-sm font-bold text-stone-900 truncate">
                {selectedImg.caption}
              </p>
              <button
                onClick={() => setSelectedImg(null)}
                className="w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 flex items-center justify-center text-stone-600 font-bold transition-colors cursor-pointer"
                aria-label="Close preview"
              >
                ✕
              </button>
            </div>
            <div className="relative w-full h-[350px] sm:h-[480px] rounded-2xl overflow-hidden bg-stone-900">
              <Image
                src={selectedImg.url}
                alt={selectedImg.caption}
                fill
                sizes="(max-width: 1024px) 100vw, 800px"
                className="object-contain"
                unoptimized
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
