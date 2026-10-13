"use client";

import Image from "next/image";
import { personalInfo, nonFormalPhotos, getAssetUrl } from "../data/portfolio";

export default function Hero() {
  // Duplicate array for seamless infinite marquee loop
  const marqueePhotos = [
    ...nonFormalPhotos,
    ...nonFormalPhotos,
    ...nonFormalPhotos,
  ];

  return (
    <section
      id="hero"
      aria-label="Profile Hero"
      className="min-h-0 md:min-h-screen flex flex-col justify-center items-center relative overflow-hidden px-4 sm:px-6 pt-24 pb-14 md:py-36 bg-[#fffbfd]"
    >
      {/* Dynamic Background: Larger Infinite Sliding Photos */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none z-0 flex items-center select-none opacity-85"
        aria-hidden="true"
      >
        <div className="animate-marquee-left flex items-center gap-5 sm:gap-8 py-2">
          {marqueePhotos.map((photo, index) => (
            <div
              key={index}
              className="relative w-64 h-90 sm:w-80 sm:h-[440px] md:w-96 md:h-[500px] lg:w-[420px] lg:h-[540px] rounded-3xl overflow-hidden shrink-0 shadow-xl border-2 border-white/80 bg-white"
            >
              <Image
                src={photo.url}
                alt={`Annisa Haura activity snapshot ${index + 1}`}
                fill
                sizes="(max-width: 640px) 256px, (max-width: 768px) 320px, 420px"
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              <div className="absolute bottom-3.5 left-3.5 right-3.5 px-3 py-1.5 bg-black/50 backdrop-blur-sm rounded-xl text-xs text-white font-medium truncate">
                {photo.caption}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Edge-to-Edge Gentle Gradient Overlay (No hard borders, seamless full width) */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#fffbfd]/60 via-[#fffbfd]/40 to-[#fffbfd] pointer-events-none z-1"
        aria-hidden="true"
      ></div>

      {/* Main Content (Foreground - Stable, Borderless, No Movement Jumps) */}
      <div className="max-w-5xl mx-auto text-center w-full relative z-10 px-2 sm:px-4">
        {/* Open to Opportunities Pill Badge */}
        <div className="inline-flex items-center gap-2 mb-4 md:mb-7 px-4 py-1.5 md:px-5 md:py-2 bg-white/95 backdrop-blur-md border border-pink-200 rounded-full shadow-sm">
          <span
            className="w-2 h-2 md:w-2.5 md:h-2.5 bg-pink-500 rounded-full animate-pulse"
            aria-hidden="true"
          ></span>
          <span className="text-[11px] md:text-xs font-bold tracking-wider text-pink-700 uppercase">
            OPEN TO OPPORTUNITIES
          </span>
        </div>

        {/* Full Name Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.08] mb-4 md:mb-6 text-stone-900 uppercase drop-shadow-[0_2px_24px_rgba(255,255,255,1)]">
          ANNISA HAURA
          <br />
          <span className="text-pink-600">SALSHABIRA</span>
        </h1>

        {/* Core Subtitle / Role Tagline */}
        <div className="mb-8 md:mb-12 max-w-4xl mx-auto px-2">
          <p className="text-xs sm:text-base md:text-lg lg:text-xl font-medium text-stone-800 tracking-normal leading-relaxed drop-shadow-[0_1px_14px_rgba(255,255,255,1)]">
            <span className="font-extrabold text-stone-900">
              Bachelor of Applied Midwifery
            </span>{" "}
            <span className="text-pink-500 font-bold px-1">|</span>{" "}
            Public Health{" "}
            <span className="text-pink-500 font-bold px-1">|</span>{" "}
            Healthcare Administration & Operations
          </p>
        </div>

        {/* Call to Action Buttons */}
        <nav
          className="flex flex-row flex-wrap sm:flex-nowrap gap-2.5 sm:gap-4 justify-center items-center mb-10 md:mb-16 px-2"
          aria-label="Primary Actions"
        >
          <a
            href={personalInfo.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-none px-5 sm:px-7 py-3 sm:py-3.5 bg-pink-600 text-white text-xs sm:text-sm font-bold rounded-full hover:bg-pink-700 transition-all duration-300 hover:scale-105 text-center inline-flex items-center justify-center gap-1.5 sm:gap-2 shadow-lg shadow-pink-600/30"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span>Download CV</span>
          </a>
          <a
            href={getAssetUrl("/portfolio-pdf")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-none px-5 sm:px-7 py-3 sm:py-3.5 bg-white border-2 border-pink-500 text-pink-700 text-xs sm:text-sm font-bold rounded-full hover:bg-pink-50 transition-all duration-300 hover:scale-105 text-center inline-flex items-center justify-center gap-1.5 sm:gap-2 shadow-sm"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
            <span>Portfolio PDF</span>
          </a>
          <a
            href="#contact"
            className="flex-1 sm:flex-none px-5 sm:px-7 py-3 sm:py-3.5 bg-stone-900 text-white text-xs sm:text-sm font-bold rounded-full hover:bg-stone-800 transition-all duration-300 hover:scale-105 text-center shadow-md"
          >
            Let&apos;s Connect
          </a>
          <a
            href="#about"
            className="hidden sm:inline-flex sm:flex-none px-6 py-3.5 border-2 border-stone-800 text-stone-900 text-sm font-bold rounded-full hover:bg-stone-900 hover:text-white transition-all duration-300 text-center bg-white/90 backdrop-blur-xs shadow-sm"
          >
            About Me
          </a>
        </nav>

        {/* Highlights Row (Clean & Borderless) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3.5 max-w-4xl mx-auto pt-2">
          {personalInfo.highlights.map((stat, i) => (
            <div
              key={i}
              className="p-3.5 sm:p-4 bg-white/95 backdrop-blur-md border border-pink-100 rounded-xl sm:rounded-2xl shadow-sm text-center hover:border-pink-300 hover:shadow-md transition-all"
            >
              <div className="text-base sm:text-xl md:text-2xl font-black text-pink-700">
                {stat.value}
              </div>
              <div className="text-[10px] sm:text-xs text-stone-600 font-medium leading-tight mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bouncing Scroll Down Indicator */}
      <div
        className="hidden sm:flex absolute bottom-4 left-1/2 -translate-x-1/2 flex-col items-center gap-1.5 animate-bounce z-10"
        aria-hidden="true"
      >
        <span className="text-[10px] font-bold text-stone-500 tracking-widest uppercase">
          SCROLL TO EXPLORE
        </span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-pink-500"
          aria-hidden="true"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
}
