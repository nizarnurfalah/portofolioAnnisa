"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { getAssetUrl } from "../data/portfolio";

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
    { name: "About", href: "#about" },
    { name: "Experience & Competencies", href: "#showcase" },
    { name: "Projects", href: "#projects" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#fffbfd]/95 backdrop-blur-md shadow-xs border-b border-pink-100"
          : "bg-transparent"
      }`}
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo / Personal Brand (from Page 1 of PDF) */}
          <a
            href="#"
            className="flex items-center gap-2.5 text-xl font-bold tracking-tight group"
            aria-label="Annisa Haura Salshabira - Home"
          >
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-pink-200 shadow-xs shrink-0 group-hover:scale-105 group-hover:border-pink-500 transition-all duration-300">
              <Image
                src={getAssetUrl("/fotononformal/Annisa Haura Salshabira-3.jpg")}
                alt="Annisa Haura Salshabira"
                fill
                className="object-cover object-top"
                sizes="40px"
                unoptimized
              />
            </div>
            <div className="flex flex-col">
              <span className="text-stone-900 group-hover:text-pink-600 transition-colors duration-300 font-bold text-base leading-tight">
                Annisa Haura Salshabira
              </span>
              <span className="text-[10px] text-pink-700/80 tracking-wider uppercase font-semibold">
                Portfolio
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
              href={getAssetUrl("/portfolio-pdf")}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-pink-700 bg-pink-50 hover:bg-pink-100 border border-pink-200 px-3 py-1.5 rounded-full transition-all duration-300 flex items-center gap-1.5"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
              <span>PDF Portfolio</span>
            </a>
            <a
              href="#contact"
              className="px-5 py-2 bg-pink-600 text-white text-sm font-semibold rounded-full hover:bg-pink-700 transition-all duration-300 hover:shadow-md hover:scale-[1.02]"
            >
              Let&apos;s Connect
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg text-stone-700 hover:bg-pink-50 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
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
            menuOpen ? "max-h-96 mt-4 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-3 py-4 border-t border-pink-100 bg-white/95 rounded-2xl p-4 mt-2 shadow-xs">
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
              href={getAssetUrl("/portfolio-pdf")}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-bold text-pink-700 flex items-center gap-2 py-1"
              onClick={() => setMenuOpen(false)}
            >
              <span>📄 PDF Portfolio Dossier</span>
            </a>
            <a
              href="#contact"
              className="mt-2 px-5 py-2.5 bg-pink-600 text-white text-sm font-semibold rounded-full hover:bg-pink-700 transition-colors duration-300 text-center"
              onClick={() => setMenuOpen(false)}
            >
              Let&apos;s Connect
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
