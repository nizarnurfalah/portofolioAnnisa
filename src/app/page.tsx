import { Metadata } from "next";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Showcase from "./components/Showcase";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import IntroSplash from "./components/IntroSplash";
import JsonLd from "./lib/JsonLd";
import { personalInfo } from "./data/portfolio";

export const metadata: Metadata = {
  title: `${personalInfo.fullName} | Portfolio`,
  description:
    "Professional portfolio of Annisa Haura Salshabira, Bachelor of Applied Science in Midwifery from Faculty of Medicine, Universitas Padjadjaran. Aspiring professional in healthcare administration, medical claims verification, and corporate operations.",
  openGraph: {
    title: `${personalInfo.fullName} | Portfolio`,
    description:
      "Professional profile, clinical placement track record, healthcare competencies, certifications, and public health projects of Annisa Haura Salshabira.",
    images: ["/fotononformal/Annisa Haura Salshabira-3.jpg"],
  },
};

export default function Home() {
  return (
    <>
      <IntroSplash />
      <JsonLd />
      <header>
        <Navbar />
      </header>
      <main className="min-h-screen bg-[#fffbfd] overflow-x-hidden">
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
