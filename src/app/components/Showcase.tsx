"use client";

import { useState } from "react";
import Image from "next/image";
import {
  clinicalSkills,
  clinicalExperiences,
  organizationExperiences,
  certificationsData,
  educationData,
  projectsData,
} from "../data/portfolio";

export default function Showcase() {
  const [activeTab, setActiveTab] = useState<
    "keahlian" | "pengalaman" | "sertifikasi" | "pendidikan"
  >("pengalaman");

  // State for image zoom preview modal
  const [previewImage, setPreviewImage] = useState<{
    url: string;
    caption: string;
  } | null>(null);

  const tabs = [
    {
      id: "pengalaman",
      label: "Pengalaman Klinis & Lapangan",
      badge: "Praktik RS & Komunitas",
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      ),
    },
    {
      id: "keahlian",
      label: "Keahlian & Kompetensi",
      badge: "Klinis & Diagnostik",
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
    },
    {
      id: "sertifikasi",
      label: "Sertifikasi & HAKI",
      badge: "Kemenkes & Kemenkumham",
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="8" r="7" />
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
        </svg>
      ),
    },
    {
      id: "pendidikan",
      label: "Pendidikan & Organisasi",
      badge: "FK UNPAD",
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="showcase"
      aria-labelledby="showcase-heading"
      className="py-12 md:py-28 px-4 sm:px-6 bg-stone-50/70 border-t border-stone-200"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div data-aos="fade-up" className="mb-6 md:mb-12">
          <span className="text-xs sm:text-sm font-bold text-pink-700 tracking-widest uppercase mb-2 sm:mb-3 block">
            02 — REKAM JEJAK & KOMPETENSI
          </span>
          <h2
            id="showcase-heading"
            className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 uppercase"
          >
            SHOWCASE KEBIDANAN TERAPAN
          </h2>
          <p className="text-stone-600 text-xs sm:text-base md:text-lg mt-2 sm:mt-3 max-w-2xl">
            Jelajahi rekam jejak praktik klinik di rumah sakit rujukan, kebidanan
            komunitas, kompetensi tindakan, sertifikasi resmi, serta riwayat pendidikan UNPAD.
          </p>
        </div>

        {/* Tab Selection Navigation */}
        <div data-aos="fade-up" className="mb-6 md:mb-12">
          <div className="flex gap-1.5 sm:gap-2.5 p-1 sm:p-1.5 bg-stone-200/80 rounded-xl sm:rounded-2xl overflow-x-auto scrollbar-none w-full sm:w-fit">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() =>
                    setActiveTab(
                      tab.id as
                        | "keahlian"
                        | "pengalaman"
                        | "sertifikasi"
                        | "pendidikan"
                    )
                  }
                  className={`flex items-center gap-1.5 sm:gap-2.5 px-3.5 sm:px-5 py-2 sm:py-3 rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-300 ${
                    isActive
                      ? "bg-white text-pink-800 shadow-sm border border-stone-200"
                      : "text-stone-600 hover:text-stone-900 hover:bg-white/50"
                  }`}
                >
                  <span className={isActive ? "text-pink-700" : "text-stone-400"}>
                    {tab.icon}
                  </span>
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* TAB 1: PENGALAMAN KLINIS & PRAKTIK */}
        {activeTab === "pengalaman" && (
          <div data-aos="fade-up" className="space-y-6 sm:space-y-12">
            <div className="grid md:grid-cols-2 gap-4 sm:gap-8">
              {clinicalExperiences.map((exp) => (
                <article
                  key={exp.id}
                  className="bg-white border border-stone-200 rounded-2xl sm:rounded-3xl p-4 sm:p-7 shadow-xs hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Header: Badge & Period */}
                    <div className="flex items-center justify-between gap-2 mb-3 sm:mb-4">
                      <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 bg-pink-50 border border-pink-200 text-pink-800 text-[10px] sm:text-xs font-bold rounded-full">
                        {exp.badge}
                      </span>
                      <span className="text-[11px] sm:text-xs font-medium text-stone-500">
                        {exp.period}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-stone-900 mb-1">
                      {exp.institution}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-pink-700 mb-3 sm:mb-4 flex items-center gap-1.5">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                      {exp.role} • {exp.location}
                    </p>

                    {/* Bullet Points */}
                    <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                      {exp.description.map((item, idx) => (
                        <li
                          key={idx}
                          className="text-xs sm:text-sm text-stone-600 leading-relaxed flex items-start gap-1.5 sm:gap-2"
                        >
                          <span className="text-pink-600 mt-0.5 sm:mt-1 shrink-0">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Photo Thumbnails */}
                  {exp.images.length > 0 && (
                    <div className="pt-3 sm:pt-4 border-t border-stone-100">
                      <p className="text-[10px] sm:text-[11px] font-semibold text-stone-400 uppercase tracking-wider mb-2">
                        Dokumentasi Praktik Langsung:
                      </p>
                      <div className="flex gap-2 sm:gap-2.5 overflow-x-auto pb-1">
                        {exp.images.map((img, imgIdx) => (
                          <button
                            key={imgIdx}
                            type="button"
                            onClick={() =>
                              setPreviewImage({
                                url: img,
                                caption: `${exp.institution} - ${exp.role}`,
                              })
                            }
                            className="relative w-16 h-12 sm:w-24 sm:h-20 rounded-lg sm:rounded-xl overflow-hidden shrink-0 border border-stone-200 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-pink-600"
                          >
                            <Image
                              src={img}
                              alt={`${exp.institution} foto ${imgIdx + 1}`}
                              fill
                              sizes="96px"
                              className="object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                              <span className="opacity-0 group-hover:opacity-100 text-white text-[10px] sm:text-xs bg-black/60 px-1 py-0.5 rounded">
                                Zoom
                              </span>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: KEAHLIAN & KOMPETENSI */}
        {activeTab === "keahlian" && (
          <div data-aos="fade-up" className="grid md:grid-cols-2 gap-4 sm:gap-8">
            {clinicalSkills.map((category, index) => (
              <div
                key={category.category}
                className="bg-white border border-stone-200 rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-xs hover:border-pink-400 transition-colors duration-300"
              >
                <div className="flex items-center gap-2.5 sm:gap-3 mb-2.5 sm:mb-3">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-pink-700 text-white flex items-center justify-center font-bold text-xs sm:text-sm">
                    {index + 1}
                  </div>
                  <h3 className="text-base sm:text-xl font-bold text-stone-900">
                    {category.category}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-stone-500 mb-4 sm:mb-6 leading-relaxed">
                  {category.description}
                </p>

                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {category.items.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3.5 py-1 sm:py-2 bg-stone-50 border border-stone-200 text-stone-700 rounded-full text-[11px] sm:text-sm font-medium hover:border-pink-500 hover:text-pink-800 hover:bg-pink-50/50 transition-colors"
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        className="text-pink-600"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 3: SERTIFIKASI & HAKI */}
        {activeTab === "sertifikasi" && (
          <div data-aos="fade-up" className="space-y-6 sm:space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {certificationsData.map((cert) => (
                <div
                  key={cert.id}
                  className="bg-white border border-stone-200 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow"
                >
                  <div>
                    {cert.image && (
                      <div
                        onClick={() =>
                          setPreviewImage({
                            url: cert.image!,
                            caption: `${cert.title} - ${cert.issuer}`,
                          })
                        }
                        className="relative w-full h-36 sm:h-44 rounded-xl sm:rounded-2xl overflow-hidden mb-3.5 sm:mb-5 bg-stone-100 border border-stone-200 cursor-pointer group"
                      >
                        <Image
                          src={cert.image}
                          alt={cert.title}
                          fill
                          sizes="350px"
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/30 transition-colors flex items-center justify-center">
                          <span className="opacity-0 group-hover:opacity-100 bg-white/95 text-stone-900 px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-semibold shadow-md">
                            Lihat Sertifikat
                          </span>
                        </div>
                      </div>
                    )}

                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] sm:text-xs font-bold text-pink-700 bg-pink-50 px-2 sm:px-2.5 py-0.5 rounded-md">
                        {cert.year}
                      </span>
                      {cert.credentialId && (
                        <span className="text-[10px] sm:text-[11px] font-mono text-stone-400">
                          {cert.credentialId}
                        </span>
                      )}
                    </div>

                    <h3 className="text-sm sm:text-base font-bold text-stone-900 leading-snug mb-1">
                      {cert.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-stone-500 mb-3 sm:mb-4">{cert.issuer}</p>
                  </div>

                  {cert.pdfUrl && (
                    <a
                      href={cert.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center justify-center gap-2 w-full py-2 sm:py-2.5 px-3 sm:px-4 bg-stone-100 hover:bg-pink-50 hover:text-pink-800 text-stone-700 text-xs font-semibold rounded-xl border border-stone-200 transition-colors"
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                      </svg>
                      Buka PDF
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: PENDIDIKAN & ORGANISASI */}
        {activeTab === "pendidikan" && (
          <div data-aos="fade-up" className="space-y-6 sm:space-y-12">
            {/* Education Track */}
            <div className="bg-white border border-stone-200 rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-xs">
              <h3 className="text-lg sm:text-xl font-bold text-stone-900 mb-4 sm:mb-6 flex items-center gap-2.5">
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-pink-100 flex items-center justify-center text-sm sm:text-base text-pink-800">
                  🎓
                </span>
                Riwayat Pendidikan
              </h3>

              <div className="space-y-6 sm:space-y-8 divide-y divide-stone-100">
                {educationData.map((edu, idx) => (
                  <div key={idx} className={idx > 0 ? "pt-4 sm:pt-6" : ""}>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5 sm:mb-2">
                      <h4 className="text-base sm:text-lg font-bold text-stone-900">
                        {edu.degree}
                      </h4>
                      <span className="text-[10px] sm:text-xs font-semibold text-pink-700 bg-pink-50 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full w-fit">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm font-semibold text-stone-700 mb-1.5 sm:mb-2">
                      {edu.institution} {edu.faculty ? `• ${edu.faculty}` : ""}
                    </p>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-2.5 sm:mb-3">
                      {edu.description}
                    </p>
                    {edu.achievements && (
                      <div className="space-y-1 mt-2 sm:mt-3">
                        {edu.achievements.map((ach, achIdx) => (
                          <div
                            key={achIdx}
                            className="text-[11px] sm:text-xs text-stone-700 flex items-center gap-1.5 sm:gap-2"
                          >
                            <span className="text-pink-600 font-bold">✓</span>
                            <span>{ach}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Organizations Track */}
            <div className="bg-white border border-stone-200 rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-xs">
              <h3 className="text-lg sm:text-xl font-bold text-stone-900 mb-4 sm:mb-6 flex items-center gap-2.5">
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-pink-100 flex items-center justify-center text-sm sm:text-base text-pink-800">
                  👥
                </span>
                Pengalaman Organisasi
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-6">
                {organizationExperiences.map((org) => (
                  <div
                    key={org.id}
                    className="p-3.5 sm:p-5 rounded-xl sm:rounded-2xl border border-stone-200 bg-stone-50/40 hover:bg-stone-50 transition-colors flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-1.5 sm:mb-2">
                        <span className="text-[10px] sm:text-[11px] font-bold text-pink-800 bg-pink-50 border border-pink-200 px-2 py-0.5 rounded-md">
                          {org.badge}
                        </span>
                        <span className="text-[10px] sm:text-[11px] text-stone-500 font-medium">
                          {org.period}
                        </span>
                      </div>
                      <h4 className="text-sm sm:text-base font-bold text-stone-900 mb-0.5">
                        {org.role}
                      </h4>
                      <p className="text-[11px] sm:text-xs text-stone-600 mb-2 sm:mb-3 font-medium">
                        {org.institution}
                      </p>
                      <ul className="space-y-1 sm:space-y-1.5 mb-3 sm:mb-4">
                        {org.description.map((item, idx) => (
                          <li
                            key={idx}
                            className="text-xs text-stone-600 leading-relaxed flex items-start gap-1.5"
                          >
                            <span className="text-pink-600">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {org.images.length > 0 && (
                      <div className="flex gap-2 pt-2.5 sm:pt-3 border-t border-stone-200">
                        {org.images.map((img, imgIdx) => (
                          <button
                            key={imgIdx}
                            type="button"
                            onClick={() =>
                              setPreviewImage({
                                url: img,
                                caption: `${org.role} - ${org.institution}`,
                              })
                            }
                            className="relative w-16 h-12 rounded-lg overflow-hidden shrink-0 border border-stone-300 cursor-pointer group"
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
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Image Preview Lightbox Modal */}
      {previewImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setPreviewImage(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl p-4 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-stone-100">
              <p className="text-sm font-bold text-stone-900 truncate">
                {previewImage.caption}
              </p>
              <button
                onClick={() => setPreviewImage(null)}
                className="w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 flex items-center justify-center text-stone-600 font-bold transition-colors"
                aria-label="Tutup pratinjau"
              >
                ✕
              </button>
            </div>
            <div className="relative w-full h-[350px] sm:h-[480px] rounded-2xl overflow-hidden bg-stone-900">
              <Image
                src={previewImage.url}
                alt={previewImage.caption}
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
