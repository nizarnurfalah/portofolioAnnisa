"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Tentang", href: "#about" },
    { name: "Keahlian & Pengalaman", href: "#showcase" },
    { name: "Proyek & Edukasi", href: "#projects" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#fffbfd]/95 backdrop-blur-md shadow-xs border-b border-pink-100"
          : "bg-transparent"
      }`}
      role="navigation"
      aria-label="Navigasi Utama"
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo / Personal Brand */}
          <a
            href="#"
            className="flex items-center gap-2.5 text-xl font-bold tracking-tight group"
            aria-label="Annisa Haura Salshabira - Beranda"
          >
            <div className="w-9 h-9 rounded-full bg-pink-50 border border-pink-200 flex items-center justify-center text-pink-600 font-extrabold text-sm group-hover:bg-pink-600 group-hover:text-white transition-all duration-300 shadow-2xs">
              AH
            </div>
            <div className="flex flex-col">
              <span className="text-stone-900 group-hover:text-pink-600 transition-colors duration-300 font-bold text-base leading-tight">
                Annisa Haura
              </span>
              <span className="text-[10px] text-pink-700/80 tracking-wider uppercase font-semibold">
                Kebidanan FK UNPAD
              </span>
            </div>
          </a>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-stone-600 hover:text-pink-600 transition-colors duration-300 relative group py-1"
              >
                {link.name}
                <span
                  className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-pink-600 group-hover:w-full transition-all duration-300"
                  aria-hidden="true"
                ></span>
              </a>
            ))}
            <a
              href="#contact"
              className="px-5 py-2.5 bg-pink-600 text-white text-sm font-semibold rounded-full hover:bg-pink-700 transition-all duration-300 hover:shadow-md hover:scale-[1.02]"
            >
              Hubungi Saya
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg text-stone-700 hover:bg-pink-50 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <div
              className="w-6 h-5 relative flex flex-col justify-between"
              aria-hidden="true"
            >
              <span
                className={`w-full h-0.5 bg-stone-800 transition-all duration-300 ${
                  menuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`w-full h-0.5 bg-stone-800 transition-all duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`w-full h-0.5 bg-stone-800 transition-all duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile navigation */}
        <div
          id="mobile-menu"
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-80 mt-4 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-3 py-4 border-t border-pink-100 bg-white/90 rounded-2xl p-4 mt-2 shadow-xs">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-base font-medium text-stone-700 hover:text-pink-600 py-1 transition-colors duration-300"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 px-5 py-2.5 bg-pink-600 text-white text-sm font-semibold rounded-full hover:bg-pink-700 transition-colors duration-300 text-center"
              onClick={() => setMenuOpen(false)}
            >
              Hubungi Saya
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
