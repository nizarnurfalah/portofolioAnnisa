import { personalInfo, getAssetUrl } from "../data/portfolio";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="py-8 sm:py-12 px-4 sm:px-6 bg-stone-900 text-stone-300"
      role="contentinfo"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 sm:pb-8 border-b border-stone-800 text-center md:text-left">
          {/* Brand Info */}
          <div className="flex items-center gap-3">
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border border-pink-400/50 shadow-xs shrink-0">
              <Image
                src={getAssetUrl("/fotononformal/Annisa Haura Salshabira-3.jpg")}
                alt="Annisa Haura Salshabira"
                fill
                className="object-cover object-top"
                sizes="40px"
                unoptimized
              />
            </div>
            <div>
              <p className="font-bold text-white text-sm sm:text-base">
                {personalInfo.fullName}
              </p>
              <p className="text-[11px] sm:text-xs text-stone-400">
                {personalInfo.roleShort} · {personalInfo.institution}
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <nav
            aria-label="Footer Nav"
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-stone-400"
          >
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#showcase" className="hover:text-white transition-colors">
              Experience & Competencies
            </a>
            <a href="#projects" className="hover:text-white transition-colors">
              Projects
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
            <a
              href={personalInfo.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-400 hover:text-pink-300 transition-colors font-semibold"
            >
              Download CV
            </a>
          </nav>
        </div>

        {/* Copyright & Disclaimer */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>
            © {currentYear} {personalInfo.fullName}. All rights reserved.
          </p>
          <p>
            Designed for Professional Healthcare Administration & Midwifery Portfolio
          </p>
        </div>
      </div>
    </footer>
  );
}
