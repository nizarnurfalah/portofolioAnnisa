import { Metadata } from "next";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Showcase from "./components/Showcase";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import JsonLd from "./lib/JsonLd";
import { personalInfo } from "./data/portfolio";

export const metadata: Metadata = {
  title: `${personalInfo.fullName} | Sarjana Terapan Kebidanan UNPAD`,
  description:
    "Portofolio profesional Annisa Haura Salshabira, lulusan Sarjana Terapan Kebidanan Fakultas Kedokteran Universitas Padjadjaran. Berpengalaman di RSUD Syamsudin, Puskesmas Padasuka, RSHS, dan Kebidanan Komunitas.",
  openGraph: {
    title: `${personalInfo.fullName} | Portofolio Bidan Terapan UNPAD`,
    description:
      "Profil, rekam jejak praktik klinik, kompetensi asuhan kebidanan, sertifikasi, dan inisiatif kesehatan ibu & anak Annisa Haura Salshabira.",
    images: ["/profile/annisa-hero.jpg"],
  },
};

export default function Home() {
  return (
    <>
      <JsonLd />
      <header>
        <Navbar />
      </header>
      <main className="min-h-screen bg-[#fafaf9] overflow-x-hidden">
        <Hero />
        <About />
        <Showcase />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
