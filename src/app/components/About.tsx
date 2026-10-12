"use client";

import Image from "next/image";
import { personalInfo, educationData, getAssetUrl } from "../data/portfolio";

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-12 md:py-28 px-4 sm:px-6 border-t border-pink-100 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div data-aos="fade-up" className="mb-8 md:mb-14">
          <span className="text-xs sm:text-sm font-bold text-pink-600 tracking-widest uppercase mb-2 sm:mb-3 block">
            01 — ABOUT ME
          </span>
          <h2
            id="about-heading"
            className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 uppercase"
          >
            GET TO KNOW ME
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          {/* Photo Column */}
          <div
            data-aos="fade-left"
            className="lg:col-span-5 order-first lg:order-last space-y-4"
          >
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-pink-100 shadow-md sm:shadow-xl bg-white p-2.5 sm:p-3.5 max-w-sm mx-auto lg:max-w-none">
              <div className="relative w-full aspect-4/3 sm:aspect-square rounded-xl sm:rounded-2xl overflow-hidden bg-stone-100">
                <Image
                  src={getAssetUrl("/fotoprfil.png")}
                  alt="Annisa Haura Salshabira - Profile Photo"
                  fill
                  sizes="(max-width: 1024px) 100vw, 450px"
                  className="object-cover object-center hover:scale-105 transition-transform duration-700"
                  unoptimized
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-stone-950/75 via-transparent to-transparent pointer-events-none"
                  aria-hidden="true"
                ></div>
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 text-white">
                  <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 bg-pink-600/90 backdrop-blur-xs text-[10px] sm:text-[11px] font-bold uppercase rounded-md mb-1 inline-block">
                    {personalInfo.roleShort}
                  </span>
                  <p className="text-xs sm:text-sm font-bold leading-tight">
                    {personalInfo.fullName}
                  </p>
                  <p className="text-[10px] sm:text-xs text-pink-100 mt-0.5">
                    {personalInfo.institution}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bio Story & Education Column */}
          <article
            data-aos="fade-right"
            className="lg:col-span-7 space-y-5 sm:space-y-6 text-stone-700"
          >
            <p className="text-base sm:text-lg leading-relaxed text-stone-800 font-normal">
              A healthcare-trained professional with experience in healthcare
              services, administrative documentation, research, and
              organizational coordination. Experienced across 3 healthcare
              institutions, with 1 year in student development at HIMA Kebidanan
              Unpad and 5 months as Head of the Facilitator Division at NAVIYARA,
              leading 8 facilitators and coordinating a program for 39 incoming
              students. Academic achievements include a scientific publication
              and registered intellectual property (HAKI).
            </p>

            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-stone-600">
              Aspiring to build a career in healthcare administration, medical
              claims verification, and corporate operations, I aim to apply my
              analytical, organizational, and communication skills to support
              accurate documentation and efficient workflows.
            </p>

            {/* Education Section (from Page 2 of PDF) */}
            <div className="pt-4 sm:pt-6">
              <h3 className="text-xs sm:text-sm font-bold text-stone-900 tracking-wider uppercase mb-3 sm:mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-pink-600"></span>
                EDUCATION
              </h3>

              <div className="space-y-3 sm:space-y-4">
                {educationData.map((edu, idx) => (
                  <div
                    key={idx}
                    className="p-4 sm:p-5 rounded-xl sm:rounded-2xl border border-pink-100 bg-pink-50/25 hover:border-pink-300 hover:bg-pink-50/50 transition-colors"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                      <h4 className="text-sm sm:text-base font-bold text-stone-900">
                        {edu.institution}
                      </h4>
                      <span className="text-xs font-semibold text-pink-700 bg-pink-100/70 px-2 py-0.5 rounded-full inline-block w-fit">
                        {edu.period}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm font-semibold text-stone-700">
                      {edu.degree}
                    </p>

                    {edu.gpa && (
                      <p className="text-xs font-bold text-pink-600 mt-1">
                        {edu.gpa}
                      </p>
                    )}

                    {edu.description && (
                      <p className="text-xs text-stone-500 mt-1 leading-relaxed">
                        {edu.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
