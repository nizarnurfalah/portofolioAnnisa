"use client";

import { useState } from "react";
import {
  LinkedinIcon,
  InstagramIcon,
  MailIcon,
  ArrowUpRightIcon,
} from "./icons/SocialIcons";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const emailAddress = "haurasalshabira@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const contactChannels = [
    {
      name: "Gmail / Email Resmi",
      description: "Untuk korespondensi profesional, rekrutmen klinis, dan kerjasama institusi.",
      value: emailAddress,
      url: `mailto:${emailAddress}`,
      icon: <MailIcon />,
      actionText: "Buka Email",
      buttonColor: "bg-pink-600 hover:bg-pink-700 text-white",
      badge: "Fast Response",
      canCopy: true,
    },
    {
      name: "LinkedIn",
      description: "Profil profesional, jejaring kesehatan, riwayat magang klinis, dan sertifikasi.",
      value: "linkedin.com/in/annisahaurasalshabira",
      url: "https://www.linkedin.com/in/annisahaurasalshabira",
      icon: <LinkedinIcon />,
      actionText: "Lihat Profil LinkedIn",
      buttonColor: "bg-[#0A66C2] hover:bg-[#084e96] text-white",
      badge: "Jejaring Karir",
      canCopy: false,
    },
    {
      name: "Instagram",
      description: "Aktivitas keseharian, edukasi kesehatan, dan dokumentasi kegiatan kampus.",
      value: "@annisahauraaa",
      url: "https://www.instagram.com/annisahauraaa/",
      icon: <InstagramIcon />,
      actionText: "Kunjungi Instagram",
      buttonColor: "bg-gradient-to-r from-rose-500 to-amber-500 hover:opacity-95 text-white",
      badge: "Media Sosial",
      canCopy: false,
    },
  ];

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-12 md:py-28 px-4 sm:px-6 border-t border-stone-200 bg-stone-50/60"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div data-aos="fade-up" className="text-center max-w-3xl mx-auto mb-6 md:mb-14">
          <span className="text-xs sm:text-sm font-bold text-pink-700 tracking-widest uppercase mb-2 sm:mb-3 block">
            04 — KONTAK & JEJARING
          </span>
          <h2
            id="contact-heading"
            className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 uppercase"
          >
            MARI BERKOLABORASI
          </h2>
          <p className="text-xs sm:text-base md:text-lg text-stone-600 mt-2 sm:mt-4 leading-relaxed">
            Terbuka untuk peluang kerja di rumah sakit, klinik pratama/bersalin,
            puskesmas, program kesehatan ibu dan anak, serta kolaborasi edukasi masyarakat.
          </p>
        </div>

        {/* 3 Clean Social/Contact Cards */}
        <div className="grid md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
          {contactChannels.map((channel, index) => (
            <div
              key={channel.name}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white border border-stone-200 rounded-2xl sm:rounded-3xl p-4 sm:p-7 shadow-xs hover:shadow-lg hover:border-pink-400 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header Icon & Badge */}
                <div className="flex items-center justify-between mb-3 sm:mb-5">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-pink-50 border border-pink-100 flex items-center justify-center text-pink-700 shadow-xs">
                    {channel.icon}
                  </div>
                  <span className="text-[10px] sm:text-xs font-semibold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-stone-100 text-stone-600">
                    {channel.badge}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-stone-900 mb-1 sm:mb-1.5">
                  {channel.name}
                </h3>
                <p className="text-xs text-stone-500 mb-2.5 sm:mb-4 leading-relaxed">
                  {channel.description}
                </p>

                {/* Value Box */}
                <div className="p-2 sm:p-3 bg-stone-50 border border-stone-200/80 rounded-lg sm:rounded-xl mb-4 sm:mb-6 font-mono text-[11px] sm:text-xs text-stone-700 truncate">
                  {channel.value}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2">
                <a
                  href={channel.url}
                  target={channel.canCopy ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  className={`w-full py-2.5 sm:py-3 px-3.5 sm:px-4 rounded-xl font-semibold text-xs sm:text-sm flex items-center justify-center gap-1.5 sm:gap-2 transition-all duration-300 shadow-xs hover:scale-[1.01] ${channel.buttonColor}`}
                >
                  <span>{channel.actionText}</span>
                  <ArrowUpRightIcon />
                </a>

                {channel.canCopy && (
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="w-full py-2 sm:py-2.5 px-3.5 sm:px-4 rounded-xl font-semibold text-xs text-stone-600 bg-stone-100 hover:bg-stone-200 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                    </svg>
                    <span>{copied ? "Alamat Email Tersalin! ✓" : "Salin Alamat Email"}</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner Note */}
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="mt-8 sm:mt-14 max-w-2xl mx-auto p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-white border border-stone-200 text-center shadow-xs"
        >
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
            📍 Berdomisili di <strong>Bandung, Jawa Barat, Indonesia</strong>. Siap untuk penempatan kerja dan penugasan layanan kesehatan di berbagai wilayah.
          </p>
        </div>
      </div>
    </section>
  );
}
