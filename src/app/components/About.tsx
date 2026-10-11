"use client";

import Image from "next/image";
import { personalInfo } from "../data/portfolio";

export default function About() {
  const coreValues = [
    {
      title: "Asuhan Berbasis Bukti (Evidence-Based)",
      description:
        "Menerapkan standar asuhan kebidanan ilmiah terkini yang teruji klinis demi keselamatan ibu dan janin.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-pink-600"
        >
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
    },
    {
      title: "Pelayanan Empatik & Humanis (Gentle Care)",
      description:
        "Mendengarkan dengan penuh empati, menghadirkan rasa tenang, serta menghormati kenyamanan psikologis pasien.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-pink-600"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      ),
    },
    {
      title: "Kolaborasi Tim Medis Lintas Profesi",
      description:
        "Terbiasa bekerja sama dengan dokter spesialis obgyn, perawat, analis, dan tenaga gizi dalam penanganan kasus.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-pink-600"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      title: "Pemberdayaan & Edukasi Keluarga",
      description:
        "Mendorong kemandirian ibu dan keluarga lewat konseling laktasi, gizi MPASI, dan pemantauan tumbuh kembang anak.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-pink-600"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
    },
  ];

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
            01 — TENTANG SAYA
          </span>
          <h2
            id="about-heading"
            className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 uppercase"
          >
            DEDIKASI UNTUK KESEHATAN IBU & ANAK
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Photo & Credential Column - shows top on mobile or side on desktop */}
          <div data-aos="fade-left" className="lg:col-span-5 order-first lg:order-last space-y-4 sm:space-y-6">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-pink-100 shadow-md sm:shadow-xl bg-white p-2.5 sm:p-3.5 max-w-sm mx-auto lg:max-w-none">
              <div className="relative w-full aspect-4/3 sm:aspect-square rounded-xl sm:rounded-2xl overflow-hidden bg-stone-100">
                <Image
                  src="/fotoprfil.jpg"
                  alt="Annisa Haura Salshabira, S.Tr.Keb - Universitas Padjadjaran"
                  fill
                  sizes="(max-width: 1024px) 100vw, 450px"
                  className="object-cover object-center hover:scale-105 transition-transform duration-700"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent pointer-events-none"
                  aria-hidden="true"
                ></div>
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 text-white">
                  <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 bg-pink-600/90 backdrop-blur-xs text-[10px] sm:text-[11px] font-bold uppercase rounded-md mb-1 inline-block">
                    Sarjana Terapan Kebidanan
                  </span>
                  <p className="text-xs sm:text-sm font-bold leading-tight">
                    Annisa Haura Salshabira
                  </p>
                  <p className="text-[10px] sm:text-xs text-pink-100 mt-0.5">
                    Fakultas Kedokteran · Universitas Padjadjaran
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Fact Banner */}
            <div className="p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-pink-800 to-rose-700 text-white shadow-sm sm:shadow-md">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-pink-700/80 flex items-center justify-center shrink-0 mt-0.5">
                  <svg
                    width="18"
                    height="18"
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
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-pink-100">
                    Pencatatan Hak Cipta Kemenkumham RI
                  </h4>
                  <p className="text-[11px] sm:text-xs text-pink-200 mt-0.5 sm:mt-1 leading-relaxed">
                    Pemegang resmi HAKI Surat Pencatatan Ciptaan No. 000643844 untuk karya edukasi <em>Buku Saku MP-ASI</em> bersama tim UNPAD.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Story & Narrative Column */}
          <article data-aos="fade-right" className="lg:col-span-7 space-y-4 sm:space-y-6 text-stone-700">
            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-stone-800 font-normal">
              Halo, saya <strong className="text-pink-600">{personalInfo.fullName}</strong>. Saya
              adalah Sarjana Terapan Kebidanan dari <strong>Fakultas Kedokteran Universitas Padjadjaran (Pendidikan Bidan Jalur Langsung)</strong>.
            </p>

            <p className="text-xs sm:text-base md:text-lg leading-relaxed text-stone-600">
              Perjalanan akademik dan stase klinis telah membekali saya dengan pemahaman mendalam
              tentang siklus kesehatan reproduksi perempuan — mulai dari masa prakonsepsi,
              kehamilan (Antenatal Care), persalinan aman, masa nifas, hingga asuhan esensial bagi
              bayi baru lahir dan balita.
            </p>

            <p className="text-xs sm:text-base md:text-lg leading-relaxed text-stone-600">
              Pengalaman langsung di <strong>RSUD R. Syamsudin Sukabumi</strong>, <strong>UPTD Puskesmas Padasuka</strong>,
              dan <strong>RSUP Dr. Hasan Sadikin Bandung</strong> mengasah ketenangan serta ketepatan
              saya dalam menangani kasus obstetri fisiologis maupun patologis, asistensi kuretase, serta interpretasi diagnostik (CTG, NST, EKG).
            </p>

            {/* Core Values Grid */}
            <div className="pt-4 sm:pt-8">
              <h3 className="text-xs sm:text-sm font-bold text-stone-900 tracking-wider uppercase mb-3 sm:mb-5">
                Prinsip Asuhan Utama
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-4">
                {coreValues.map((val, idx) => (
                  <div
                    key={idx}
                    className="p-3 sm:p-4 rounded-xl border border-pink-100 bg-pink-50/30 hover:border-pink-300 hover:bg-pink-50/70 transition-colors duration-300"
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-pink-100 flex items-center justify-center mb-2 sm:mb-3">
                      {val.icon}
                    </div>
                    <h4 className="text-xs sm:text-sm font-bold text-stone-900 mb-0.5 sm:mb-1">
                      {val.title}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-stone-600 leading-relaxed">
                      {val.description}
                    </p>
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
