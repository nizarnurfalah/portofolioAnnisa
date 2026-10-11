import { personalInfo } from "../data/portfolio";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 sm:py-12 px-4 sm:px-6 bg-stone-900 text-stone-300" role="contentinfo">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 sm:pb-8 border-b border-stone-800 text-center md:text-left">
          {/* Brand Info */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-pink-700 text-white font-bold flex items-center justify-center text-xs sm:text-sm shadow-xs">
              AH
            </div>
            <div>
              <p className="font-bold text-white text-sm sm:text-base">
                {personalInfo.fullName}
              </p>
              <p className="text-[11px] sm:text-xs text-stone-400">
                {personalInfo.role} · {personalInfo.institution}
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer Nav" className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-stone-400">
            <a href="#about" className="hover:text-white transition-colors">
              Tentang
            </a>
            <a href="#showcase" className="hover:text-white transition-colors">
              Rekam Jejak
            </a>
            <a href="#projects" className="hover:text-white transition-colors">
              Proyek & HAKI
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Kontak
            </a>
            <a
              href={personalInfo.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-400 hover:text-pink-300 transition-colors font-semibold"
            >
              Unduh CV
            </a>
          </nav>
        </div>

        {/* Copyright & Disclaimer */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {currentYear} {personalInfo.fullName}. Seluruh hak cipta dilindungi.</p>
          <p>Dirancang untuk Portofolio Profesional Kebidanan Terapan</p>
        </div>
      </div>
    </footer>
  );
}
