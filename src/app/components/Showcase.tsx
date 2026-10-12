"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import {
  skillsAndCompetencies,
  clinicalExperiences,
  organizationExperiences,
  certificationsData,
} from "../data/portfolio";

export default function Showcase() {
  const [activeTab, setActiveTab] = useState<
    "clinical" | "skills" | "certifications" | "organization"
  >("clinical");

  // State for image zoom preview modal
  const [previewImage, setPreviewImage] = useState<{
    url: string;
    caption: string;
  } | null>(null);

  // State for mobile skills carousel slider
  const [activeSkillSlide, setActiveSkillSlide] = useState(0);
  const skillsScrollRef = useRef<HTMLDivElement>(null);

  const scrollToSkill = (index: number) => {
    setActiveSkillSlide(index);
    if (skillsScrollRef.current) {
      const card = skillsScrollRef.current.children[index] as HTMLElement;
      if (card) {
        card.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      }
    }
  };

  // State for mobile clinical carousel slider
  const [activeClinicalSlide, setActiveClinicalSlide] = useState(0);
  const clinicalScrollRef = useRef<HTMLDivElement>(null);

  const scrollToClinical = (index: number) => {
    setActiveClinicalSlide(index);
    if (clinicalScrollRef.current) {
      const card = clinicalScrollRef.current.children[index] as HTMLElement;
      if (card) {
        card.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      }
    }
  };

  // State for mobile certifications carousel slider
  const [activeCertSlide, setActiveCertSlide] = useState(0);
  const certScrollRef = useRef<HTMLDivElement>(null);

  const scrollToCert = (index: number) => {
    setActiveCertSlide(index);
    if (certScrollRef.current) {
      const card = certScrollRef.current.children[index] as HTMLElement;
      if (card) {
        card.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      }
    }
  };

  // State for mobile organization carousel slider
  const [activeOrgSlide, setActiveOrgSlide] = useState(0);
  const orgScrollRef = useRef<HTMLDivElement>(null);

  const scrollToOrg = (index: number) => {
    setActiveOrgSlide(index);
    if (orgScrollRef.current) {
      const card = orgScrollRef.current.children[index] as HTMLElement;
      if (card) {
        card.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      }
    }
  };

  const tabs = [
    {
      id: "clinical",
      label: "Clinical & Community Experience",
      badge: "Healthcare & Fieldwork",
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
      id: "skills",
      label: "Skills & Competencies",
      badge: "Clinical & Admin",
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
      id: "certifications",
      label: "Certifications & HAKI",
      badge: "Journal & Credentials",
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
      id: "organization",
      label: "Organizational Experience",
      badge: "Leadership & BEM",
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="showcase"
      aria-labelledby="showcase-heading"
      className="py-12 md:py-28 px-4 sm:px-6 bg-[#fffbfd] border-t border-pink-100"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header (from Page 3 of PDF) */}
        <div data-aos="fade-up" className="mb-8 md:mb-14">
          <span className="text-xs sm:text-sm font-bold text-pink-600 tracking-widest uppercase mb-2 sm:mb-3 block">
            02 — EXPERIENCE & COMPETENCIES
          </span>
          <h2
            id="showcase-heading"
            className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 mb-3 sm:mb-4 uppercase"
          >
            A Foundation for Professional Practice
          </h2>
          <p className="text-stone-600 text-xs sm:text-base md:text-lg max-w-3xl leading-relaxed">
            Explore clinical placements, community health activities,
            organizational contributions, and academic achievements that have
            shaped my skills and professional development.
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
                        | "clinical"
                        | "skills"
                        | "certifications"
                        | "organization"
                    )
                  }
                  className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-300 ${
                    isActive
                      ? "bg-white text-pink-800 shadow-sm border border-stone-200"
                      : "text-stone-600 hover:text-stone-900 hover:bg-white/50"
                  }`}
                >
                  <span
                    className={isActive ? "text-pink-700" : "text-stone-400"}
                  >
                    {tab.icon}
                  </span>
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* TAB 1: CLINICAL & COMMUNITY EXPERIENCE */}
        {activeTab === "clinical" && (
          <div data-aos="fade-up" className="space-y-4 sm:space-y-10">
            {/* Mobile Swipe Helper Header */}
            <div className="flex md:hidden items-center justify-between px-1 text-xs text-stone-500 font-medium">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-pink-600 animate-pulse"></span>
                Placement {activeClinicalSlide + 1} of {clinicalExperiences.length}
              </span>
              <span className="flex items-center gap-1 text-pink-600 font-semibold">
                Swipe to explore <span>→</span>
              </span>
            </div>

            <div
              ref={clinicalScrollRef}
              onScroll={(e) => {
                const el = e.currentTarget;
                const scrollLeft = el.scrollLeft;
                const cardWidth = el.offsetWidth * 0.82;
                const newIndex = Math.min(
                  clinicalExperiences.length - 1,
                  Math.max(0, Math.round(scrollLeft / (cardWidth || 1)))
                );
                if (newIndex !== activeClinicalSlide) {
                  setActiveClinicalSlide(newIndex);
                }
              }}
              className="flex md:grid md:grid-cols-2 gap-4 sm:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-3 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            >
              {clinicalExperiences.map((exp) => (
                <article
                  key={exp.id}
                  className="w-[86vw] max-w-[340px] md:w-full md:max-w-none shrink-0 md:shrink snap-center bg-white border border-stone-200 rounded-2xl sm:rounded-3xl p-5 sm:p-7 shadow-xs hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
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

                    {/* Summary Description Box */}
                    {exp.summaryDescription && (
                      <div className="p-3 rounded-xl bg-pink-50/40 border border-pink-100 text-xs sm:text-sm text-stone-700 mb-3.5 leading-relaxed font-normal">
                        {exp.summaryDescription}
                      </div>
                    )}

                    {/* Bullet Points */}
                    <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                      {exp.description.map((item, idx) => (
                        <li
                          key={idx}
                          className="text-xs sm:text-sm text-stone-600 leading-relaxed flex items-start gap-1.5 sm:gap-2"
                        >
                          <span className="text-pink-600 mt-0.5 sm:mt-1 shrink-0">
                            •
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Photo Thumbnails */}
                  {exp.images.length > 0 && (
                    <div className="pt-3 sm:pt-4 border-t border-stone-100">
                      <p className="text-[10px] sm:text-[11px] font-semibold text-stone-400 uppercase tracking-wider mb-2">
                        Clinical Documentation:
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
                              alt={`${exp.institution} photo ${imgIdx + 1}`}
                              fill
                              sizes="96px"
                              className="object-cover group-hover:scale-110 transition-transform duration-300"
                              unoptimized
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

            {/* Mobile Pagination Indicator Dots */}
            <div className="flex md:hidden items-center justify-center gap-2 pt-2">
              {clinicalExperiences.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  type="button"
                  onClick={() => scrollToClinical(dotIdx)}
                  aria-label={`Go to clinical placement ${dotIdx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    activeClinicalSlide === dotIdx
                      ? "w-7 bg-pink-600 shadow-xs"
                      : "w-2 bg-pink-200 hover:bg-pink-300"
                  }`}
                />
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: SKILLS & COMPETENCIES (from Page 5 of PDF) */}
        {activeTab === "skills" && (
          <div data-aos="fade-up" className="space-y-4">
            {/* Mobile Swipe Helper Header */}
            <div className="flex md:hidden items-center justify-between px-1 text-xs text-stone-500 font-medium">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-pink-600 animate-pulse"></span>
                Domain {activeSkillSlide + 1} of {skillsAndCompetencies.length}
              </span>
              <span className="flex items-center gap-1 text-pink-600 font-semibold">
                Swipe to explore <span>→</span>
              </span>
            </div>

            {/* Container: Horizontal snap carousel on mobile, 2-column grid on desktop */}
            <div
              ref={skillsScrollRef}
              onScroll={(e) => {
                const el = e.currentTarget;
                const scrollLeft = el.scrollLeft;
                const cardWidth = el.offsetWidth * 0.82;
                const newIndex = Math.min(
                  skillsAndCompetencies.length - 1,
                  Math.max(0, Math.round(scrollLeft / (cardWidth || 1)))
                );
                if (newIndex !== activeSkillSlide) {
                  setActiveSkillSlide(newIndex);
                }
              }}
              className="flex md:grid md:grid-cols-2 gap-3.5 sm:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-3 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            >
              {skillsAndCompetencies.map((category, index) => (
                <div
                  key={category.category}
                  className="w-[85vw] max-w-[340px] md:w-full md:max-w-none shrink-0 md:shrink snap-center bg-white border border-stone-200 rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-xs hover:border-pink-400 transition-colors duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2.5 sm:gap-3 mb-2.5 sm:mb-3">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-pink-700 text-white flex items-center justify-center font-bold text-xs sm:text-sm shadow-xs">
                        {index + 1}
                      </div>
                      <h3 className="text-base sm:text-xl font-bold text-stone-900 leading-snug">
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
                          className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 py-1 sm:px-3.5 sm:py-2 bg-stone-50 border border-stone-200 text-stone-700 rounded-full text-xs sm:text-sm font-medium hover:border-pink-500 hover:text-pink-800 hover:bg-pink-50/50 transition-colors"
                        >
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            className="text-pink-600 shrink-0"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          <span>{skill}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Pagination Indicator Dots */}
            <div className="flex md:hidden items-center justify-center gap-2 pt-2">
              {skillsAndCompetencies.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  type="button"
                  onClick={() => scrollToSkill(dotIdx)}
                  aria-label={`Go to skill domain ${dotIdx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    activeSkillSlide === dotIdx
                      ? "w-7 bg-pink-600 shadow-xs"
                      : "w-2 bg-pink-200 hover:bg-pink-300"
                  }`}
                />
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: CERTIFICATIONS & HAKI (from Page 5 of PDF) */}
        {activeTab === "certifications" && (
          <div data-aos="fade-up" className="space-y-4 sm:space-y-8">
            {/* Mobile Swipe Helper Header */}
            <div className="flex md:hidden items-center justify-between px-1 text-xs text-stone-500 font-medium">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-pink-600 animate-pulse"></span>
                Credential {activeCertSlide + 1} of {certificationsData.length}
              </span>
              <span className="flex items-center gap-1 text-pink-600 font-semibold">
                Swipe to explore <span>→</span>
              </span>
            </div>

            <div
              ref={certScrollRef}
              onScroll={(e) => {
                const el = e.currentTarget;
                const scrollLeft = el.scrollLeft;
                const cardWidth = el.offsetWidth * 0.82;
                const newIndex = Math.min(
                  certificationsData.length - 1,
                  Math.max(0, Math.round(scrollLeft / (cardWidth || 1)))
                );
                if (newIndex !== activeCertSlide) {
                  setActiveCertSlide(newIndex);
                }
              }}
              className="flex md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-3 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            >
              {certificationsData.map((cert) => (
                <div
                  key={cert.id}
                  className="w-[86vw] max-w-[340px] md:w-full md:max-w-none shrink-0 md:shrink snap-center bg-white border border-stone-200 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow"
                >
                  <div>
                    {cert.image && (
                      <div
                        onClick={() => {
                          if (cert.credentialUrl) {
                            window.open(cert.credentialUrl, "_blank", "noopener,noreferrer");
                          } else {
                            setPreviewImage({
                              url: cert.image!,
                              caption: `${cert.title} - ${cert.issuer}`,
                            });
                          }
                        }}
                        className="relative w-full h-40 sm:h-48 rounded-xl sm:rounded-2xl overflow-hidden mb-3.5 sm:mb-5 bg-stone-100 border border-stone-200 cursor-pointer group"
                      >
                        <Image
                          src={cert.image}
                          alt={cert.title}
                          fill
                          sizes="350px"
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          unoptimized
                        />
                        <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/35 transition-colors flex items-center justify-center">
                          <span className="opacity-0 group-hover:opacity-100 bg-white/95 text-stone-900 px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-semibold shadow-md flex items-center gap-1.5">
                            {cert.credentialUrl ? "Open on Drive ↗" : "View Certificate"}
                          </span>
                        </div>
                      </div>
                    )}

                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] sm:text-xs font-bold text-pink-700 bg-pink-50 px-2.5 py-0.5 rounded-md">
                        {cert.year}
                      </span>
                      {cert.badge && (
                        <span className="text-[10px] sm:text-xs font-semibold text-stone-500 bg-stone-100 px-2 py-0.5 rounded-md">
                          {cert.badge}
                        </span>
                      )}
                    </div>

                    <h3 className="text-sm sm:text-base font-bold text-stone-900 leading-snug mb-1">
                      {cert.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-stone-500 mb-3 sm:mb-4">
                      {cert.issuer}
                    </p>
                  </div>

                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center justify-center gap-2 w-full py-2 sm:py-2.5 px-3 sm:px-4 bg-pink-50 hover:bg-pink-100 text-pink-700 text-xs font-semibold rounded-xl border border-pink-200 transition-colors"
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                      Open Journal (Google Drive)
                    </a>
                  )}

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
                        <line x1="16" y1="13" x2="8" y2="13" />
                        <line x1="16" y1="17" x2="8" y2="17" />
                        <polyline points="10 9 9 9 8 9" />
                      </svg>
                      Open Document
                    </a>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Pagination Indicator Dots */}
            <div className="flex md:hidden items-center justify-center gap-2 pt-2">
              {certificationsData.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  type="button"
                  onClick={() => scrollToCert(dotIdx)}
                  aria-label={`Go to credential ${dotIdx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    activeCertSlide === dotIdx
                      ? "w-7 bg-pink-600 shadow-xs"
                      : "w-2 bg-pink-200 hover:bg-pink-300"
                  }`}
                />
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: ORGANIZATIONAL EXPERIENCE (from Page 5 & 6 of PDF) */}
        {activeTab === "organization" && (
          <div data-aos="fade-up" className="space-y-4 sm:space-y-8">
            {/* Mobile Swipe Helper Header */}
            <div className="flex md:hidden items-center justify-between px-1 text-xs text-stone-500 font-medium">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-pink-600 animate-pulse"></span>
                Role {activeOrgSlide + 1} of {organizationExperiences.length}
              </span>
              <span className="flex items-center gap-1 text-pink-600 font-semibold">
                Swipe to explore <span>→</span>
              </span>
            </div>

            <div
              ref={orgScrollRef}
              onScroll={(e) => {
                const el = e.currentTarget;
                const scrollLeft = el.scrollLeft;
                const cardWidth = el.offsetWidth * 0.82;
                const newIndex = Math.min(
                  organizationExperiences.length - 1,
                  Math.max(0, Math.round(scrollLeft / (cardWidth || 1)))
                );
                if (newIndex !== activeOrgSlide) {
                  setActiveOrgSlide(newIndex);
                }
              }}
              className="flex md:grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-3 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            >
              {organizationExperiences.map((org) => (
                <div
                  key={org.id}
                  className="w-[86vw] max-w-[340px] md:w-full md:max-w-none shrink-0 md:shrink snap-center bg-white border border-stone-200 rounded-2xl sm:rounded-3xl p-5 sm:p-7 shadow-xs hover:border-pink-300 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[10px] sm:text-[11px] font-bold text-pink-800 bg-pink-50 border border-pink-200 px-2.5 py-0.5 rounded-full">
                        {org.badge}
                      </span>
                      <span className="text-[10px] sm:text-[11px] text-stone-500 font-medium">
                        {org.period}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-stone-900 mb-0.5">
                      {org.role}
                    </h3>
                    <p className="text-xs sm:text-sm text-pink-700 mb-3 sm:mb-4 font-semibold">
                      {org.institution}
                    </p>

                    <ul className="space-y-2 mb-4">
                      {org.description.map((item, itemIdx) => (
                        <li
                          key={itemIdx}
                          className="text-xs sm:text-sm text-stone-600 flex items-start gap-2 leading-relaxed"
                        >
                          <span className="text-pink-600 font-bold mt-0.5">
                            •
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {org.images.length > 0 && (
                    <div className="pt-3 border-t border-stone-100">
                      <p className="text-[10px] sm:text-[11px] font-semibold text-stone-400 uppercase tracking-wider mb-2">
                        Activity Documentation:
                      </p>
                      <div className="flex gap-2 overflow-x-auto pb-1">
                        {org.images.map((img, imgIdx) => (
                          <button
                            key={imgIdx}
                            type="button"
                            onClick={() =>
                              setPreviewImage({
                                url: img,
                                caption: `${org.institution} - ${org.role}`,
                              })
                            }
                            className="relative w-16 h-12 sm:w-20 sm:h-16 rounded-lg overflow-hidden shrink-0 border border-stone-200 group cursor-pointer"
                          >
                            <Image
                              src={img}
                              alt={`${org.role} photo ${imgIdx + 1}`}
                              fill
                              sizes="80px"
                              className="object-cover group-hover:scale-110 transition-transform duration-300"
                              unoptimized
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                              <span className="opacity-0 group-hover:opacity-100 text-white text-[10px] bg-black/60 px-1 py-0.5 rounded">
                                Zoom
                              </span>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Pagination Indicator Dots */}
            <div className="flex md:hidden items-center justify-center gap-2 pt-2">
              {organizationExperiences.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  type="button"
                  onClick={() => scrollToOrg(dotIdx)}
                  aria-label={`Go to organization ${dotIdx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    activeOrgSlide === dotIdx
                      ? "w-7 bg-pink-600 shadow-xs"
                      : "w-2 bg-pink-200 hover:bg-pink-300"
                  }`}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Lightbox Modal for Photo Preview */}
      {previewImage && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4"
          onClick={() => setPreviewImage(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-stone-900 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full aspect-16/10 max-h-[75vh]">
              <Image
                src={previewImage.url}
                alt={previewImage.caption}
                fill
                sizes="(max-width: 1024px) 100vw, 800px"
                className="object-contain"
                unoptimized
              />
            </div>
            <div className="p-4 bg-stone-900 border-t border-stone-800 flex items-center justify-between gap-4">
              <p className="text-xs sm:text-sm text-stone-200 font-medium">
                {previewImage.caption}
              </p>
              <button
                type="button"
                onClick={() => setPreviewImage(null)}
                className="px-4 py-1.5 bg-stone-800 hover:bg-stone-700 text-white text-xs font-bold rounded-lg transition-colors cursor-pointer"
              >
                Close (ESC)
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
