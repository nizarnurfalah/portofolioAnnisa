"use client";

import { personalInfo } from "../data/portfolio";

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Pengenalan Profil"
      className="min-h-0 md:min-h-screen flex flex-col justify-center items-center relative overflow-hidden px-4 sm:px-6 pt-24 pb-12 md:py-36 bg-[#fffbfd]"
    >
      {/* Decorative ambient background accents */}
      <div
        className="hidden md:block absolute top-20 right-10 lg:right-24 w-4 h-4 bg-pink-500 rounded-full opacity-60 animate-pulse"
        aria-hidden="true"
      ></div>
      <div
        className="hidden md:block absolute bottom-36 left-8 lg:left-20 w-3 h-3 bg-rose-400 rounded-full opacity-50"
        aria-hidden="true"
      ></div>
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-pink-100/50 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      ></div>

      <div className="max-w-5xl mx-auto text-center w-full">
        {/* Available for Work Pill Badge */}
        <div
          data-aos="fade-down"
          data-aos-delay="0"
          className="inline-flex items-center gap-2 mb-4 md:mb-8 px-3.5 py-1.5 md:px-4 md:py-2 bg-white border border-pink-200 rounded-full shadow-xs"
        >
          <span
            className="w-2 h-2 md:w-2.5 md:h-2.5 bg-pink-500 rounded-full animate-pulse"
            aria-hidden="true"
          ></span>
          <span className="text-[11px] md:text-sm font-bold tracking-wider text-pink-700 uppercase">
            AVAILABLE FOR WORK
          </span>
        </div>

        {/* Grand Main Heading - Full Name */}
        <h1
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.08] mb-4 md:mb-6 text-stone-900 uppercase"
        >
          ANNISA HAURA
          <br />
          <span className="text-pink-600">SALSHABIRA</span>
        </h1>

        {/* Detailed Role Badge from LinkedIn Headline */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="mb-4 md:mb-8 max-w-4xl mx-auto px-2"
        >
          <p className="text-xs sm:text-base md:text-lg lg:text-xl font-medium text-stone-600 tracking-normal leading-relaxed">
            <span className="font-bold text-stone-800">Sarjana Terapan Kebidanan</span>{" "}
            <span className="text-pink-500 font-bold px-1">|</span>{" "}
            Kesehatan Ibu, Bayi Baru Lahir & Anak{" "}
            <span className="text-pink-500 font-bold px-1">|</span>{" "}
            Kesehatan Masyarakat{" "}
            <span className="text-pink-500 font-bold px-1">|</span>{" "}
            Administrasi Kesehatan
          </p>
        </div>

        {/* Subtitle / Narrative */}
        <p
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-xs sm:text-base md:text-lg text-stone-600 max-w-2xl mx-auto mb-6 md:mb-10 font-normal leading-relaxed px-2 sm:px-4"
        >
          Lulusan Fakultas Kedokteran Universitas Padjadjaran yang berdedikasi
          memberikan pelayanan asuhan kebidanan humanis, empatik, dan berbasis
          bukti ilmiah untuk kesehatan optimal ibu dan anak.
        </p>

        {/* Call to Action Buttons */}
        <nav
          data-aos="fade-up"
          data-aos-delay="400"
          className="flex flex-row flex-wrap sm:flex-nowrap gap-2.5 sm:gap-4 justify-center items-center mb-8 md:mb-14 px-2"
          aria-label="Aksi Utama"
        >
          <a
            href={personalInfo.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-none px-5 sm:px-9 py-3 sm:py-4 bg-pink-600 text-white text-xs sm:text-base font-bold rounded-full hover:bg-pink-700 transition-all duration-300 hover:scale-105 text-center inline-flex items-center justify-center gap-1.5 sm:gap-2 shadow-xs"
          >
            <svg
              width="18"
              height="18"
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
            <span>Unduh CV</span>
          </a>
          <a
            href="#contact"
            className="flex-1 sm:flex-none px-5 sm:px-9 py-3 sm:py-4 bg-stone-900 text-white text-xs sm:text-base font-bold rounded-full hover:bg-stone-800 transition-all duration-300 hover:scale-105 text-center shadow-xs"
          >
            Hubungi Saya
          </a>
          <a
            href="#about"
            className="hidden sm:inline-flex sm:flex-none px-7 md:px-9 py-3.5 md:py-4 border-2 border-stone-800 text-stone-900 text-sm md:text-base font-bold rounded-full hover:bg-stone-900 hover:text-white transition-all duration-300 text-center"
          >
            Lihat Profil
          </a>
        </nav>

        {/* Quick Highlights Row */}
        <div
          data-aos="fade-up"
          data-aos-delay="500"
          className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 max-w-4xl mx-auto pt-6 md:pt-8 border-t border-pink-100"
        >
          {personalInfo.stats.map((stat, i) => (
            <div
              key={i}
              className="p-2.5 sm:p-3 bg-white border border-pink-100 rounded-xl sm:rounded-2xl shadow-2xs text-center"
            >
              <div className="text-lg sm:text-xl md:text-2xl font-black text-pink-700">
                {stat.value}
              </div>
              <div className="text-[10px] sm:text-xs text-stone-600 font-semibold leading-tight mt-0.5">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bouncing Scroll Down Indicator */}
      <div
        data-aos="fade-up"
        data-aos-delay="600"
        className="hidden sm:flex absolute bottom-5 left-1/2 -translate-x-1/2 flex-col items-center gap-1.5 animate-bounce"
        aria-hidden="true"
      >
        <span className="text-[10px] font-bold text-stone-400 tracking-widest uppercase">
          GULIR KE BAWAH
        </span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-pink-400"
          aria-hidden="true"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
}
