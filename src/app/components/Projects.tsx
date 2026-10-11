"use client";

import { useState } from "react";
import Image from "next/image";
import { projectsData } from "../data/portfolio";

export default function Projects() {
  const [selectedImg, setSelectedImg] = useState<{
    url: string;
    caption: string;
  } | null>(null);

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="py-12 md:py-28 px-4 sm:px-6 bg-white border-t border-stone-200"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div data-aos="fade-up" className="mb-6 md:mb-14">
          <span className="text-xs sm:text-sm font-bold text-pink-700 tracking-widest uppercase mb-2 sm:mb-3 block">
            03 — PROYEK & KARYA EDUKASI
          </span>
          <h2
            id="projects-heading"
            className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 uppercase"
          >
            INISIATIF & EDUKASI KESEHATAN
          </h2>
          <p className="text-stone-600 text-xs sm:text-base md:text-lg mt-2 sm:mt-3 max-w-2xl">
            Karya inovatif dalam promosi kesehatan, pelayanan ANC klinis, hak kekayaan
            intelektual (HAKI), serta pengabdian kesehatan bagi masyarakat.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-8">
          {projectsData.map((project, index) => (
            <article
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-stone-50/60 border border-stone-200 rounded-2xl sm:rounded-3xl p-4 sm:p-8 flex flex-col justify-between hover:border-pink-400 hover:shadow-lg transition-all duration-300 group"
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
                    />
                    <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/25 transition-colors flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 bg-white/95 text-stone-900 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-bold shadow-md">
                        Buka Gambar
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
                <ul className="space-y-1 sm:space-y-1.5 mb-4 sm:mb-6">
                  {project.highlights.map((item, hIdx) => (
                    <li
                      key={hIdx}
                      className="text-xs sm:text-sm text-stone-700 flex items-start gap-1.5 sm:gap-2"
                    >
                      <span className="text-pink-600 font-bold shrink-0">✓</span>
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
                          caption: `${project.title} - Foto ${iIdx + 1}`,
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
                      />
                    </button>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>

        {/* Scientific Paper / Research Card */}
        <div
          data-aos="fade-up"
          className="mt-8 sm:mt-12 p-4 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-pink-800 to-rose-700 text-white shadow-lg sm:shadow-xl"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6">
            <div className="space-y-1.5 sm:space-y-2">
              <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 bg-pink-600/80 text-pink-100 text-[10px] sm:text-xs font-bold rounded-full uppercase tracking-wider inline-block">
                Karya Tulis & Pengabdian Ilmiah
              </span>
              <h3 className="text-base sm:text-2xl font-bold text-white leading-snug">
                Penyuluhan Depresi Pasca Persalinan pada Ibu Hamil
              </h3>
              <p className="text-xs sm:text-sm text-pink-100 max-w-2xl leading-relaxed">
                Upaya Deteksi Dini Gangguan Psikologis pada Ibu Hamil di Desa Cikeruh,
                Kecamatan Jatinangor — berfokus pada kesehatan mental perinatal ibu demi
                kesejahteraan ibu dan janin.
              </p>
            </div>
            <div className="shrink-0">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:px-5 sm:py-2.5 rounded-full bg-white text-pink-900 font-bold text-[11px] sm:text-xs uppercase tracking-wider">
                Desa Cikeruh · Jatinangor
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImg && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4"
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
                className="w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 flex items-center justify-center text-stone-600 font-bold transition-colors"
                aria-label="Tutup pratinjau"
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
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
