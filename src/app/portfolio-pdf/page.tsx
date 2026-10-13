"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  personalInfo,
  educationData,
  clinicalExperiences,
  projectsData,
  organizationExperiences,
  certificationsData,
  skillsAndCompetencies,
  getAssetUrl,
} from "../data/portfolio";

export default function PortfolioPdfPage() {
  useEffect(() => {
    // If opened with ?print=1 or ?print=true, auto-trigger print dialog
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      if (params.get("print") === "1" || params.get("print") === "true") {
        setTimeout(() => {
          window.print();
        }, 600);
      }
    }
  }, []);

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className="min-h-screen bg-stone-900 text-stone-900 py-6 sm:py-10 px-2 sm:px-4 font-sans selection:bg-pink-100 print:p-0 print:m-0 print:bg-white">
      {/* Floating Control Toolbar (Hidden when printing) */}
      <div className="no-print max-w-[210mm] mx-auto mb-6 bg-stone-800/95 backdrop-blur-md text-white border border-stone-700 rounded-2xl p-4 sm:p-5 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="p-2 sm:px-3.5 sm:py-2 rounded-xl bg-stone-700 hover:bg-stone-600 text-stone-200 text-xs sm:text-sm font-semibold transition-colors flex items-center gap-1.5"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            <span>Kembali ke Web</span>
          </Link>
          <div>
            <h1 className="text-sm sm:text-base font-bold text-white leading-tight">
              Executive PDF Portfolio
            </h1>
            <p className="text-[11px] sm:text-xs text-stone-400">
              Dokumen Resmi Annisa Haura Salshabira (5 Halaman A4)
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
          <button
            onClick={handlePrint}
            type="button"
            className="flex-1 sm:flex-none px-5 py-2.5 bg-pink-600 hover:bg-pink-500 text-white text-xs sm:text-sm font-bold rounded-xl shadow-lg shadow-pink-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="6 9 6 2 18 2 18 9" />
              <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
              <rect x="6" y="14" width="12" height="8" />
            </svg>
            <span>Cetak / Simpan PDF</span>
          </button>
        </div>
      </div>

      {/* Guide notice for best printing results (Hidden when printing) */}
      <div className="no-print max-w-[210mm] mx-auto mb-8 bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs rounded-xl p-3.5 flex items-start gap-2.5">
        <svg
          className="w-4 h-4 text-amber-400 shrink-0 mt-0.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>
          <strong>Petunjuk Cetak:</strong> Di jendela cetak browser, pilih{" "}
          <strong>Destination: &quot;Save as PDF&quot;</strong>, atur Paper size ke{" "}
          <strong>A4</strong>, Margins: <strong>&quot;None&quot;</strong>, dan centang{" "}
          <strong>&quot;Background graphics&quot;</strong> agar desain warna dan foto tercetak sempurna.
        </span>
      </div>

      {/* =========================================================================
          PAGE 1: COVER & EXECUTIVE PROFILE
          ========================================================================= */}
      <article className="page-sheet bg-white text-stone-900 shadow-2xl mx-auto flex flex-col justify-between">
        <div>
          {/* Header Bar Accent */}
          <div className="flex items-center justify-between pb-3.5 mb-5 border-b border-stone-200">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-pink-600 inline-block"></span>
              <span className="text-[11px] font-black uppercase tracking-wider text-pink-700">
                Official Portfolio Dossier
              </span>
            </div>
            <span className="text-[10px] text-stone-500 font-semibold uppercase tracking-widest">
              Faculty of Medicine · Universitas Padjadjaran
            </span>
          </div>

          {/* Top Profile Card with Photo */}
          <div className="flex items-center gap-6 p-4 rounded-2xl bg-stone-50 border border-stone-200/80 mb-5">
            <div className="relative w-28 h-28 rounded-2xl overflow-hidden border-2 border-pink-400 shrink-0 shadow-md">
              <Image
                src={getAssetUrl("/fotononformal/Annisa Haura Salshabira-3.jpg")}
                alt={personalInfo.fullName}
                fill
                className="object-cover object-top"
                sizes="120px"
                unoptimized
                priority
              />
            </div>
            <div className="flex-1">
              <span className="inline-block px-2.5 py-0.5 bg-pink-100 text-pink-800 text-[10px] font-extrabold rounded-full mb-1">
                BACHELOR OF APPLIED SCIENCE IN MIDWIFERY
              </span>
              <h1 className="text-2xl font-black text-stone-900 leading-tight">
                {personalInfo.fullName}
              </h1>
              <p className="text-xs font-bold text-pink-700 mb-2">
                Healthcare Administration · Clinical Documentation · Operations & Public Health
              </p>
              <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-[11px] text-stone-600">
                <p>
                  <strong>Email:</strong> {personalInfo.email}
                </p>
                <p>
                  <strong>Location:</strong> {personalInfo.location}
                </p>
                <p>
                  <strong>LinkedIn:</strong> linkedin.com/in/annisahaurasalshabira
                </p>
                <p>
                  <strong>Portfolio Web:</strong> portofolio-annisa.vercel.app
                </p>
              </div>
            </div>
          </div>

          {/* 4 Key Highlight Metrics */}
          <div className="grid grid-cols-4 gap-2.5 mb-5">
            {personalInfo.highlights.map((hl, idx) => (
              <div
                key={idx}
                className="p-3 bg-pink-50/60 rounded-xl border border-pink-200 text-center"
              >
                <p className="text-sm font-black text-pink-700 leading-tight mb-0.5">
                  {hl.value}
                </p>
                <p className="text-[10px] font-semibold text-stone-600 leading-snug">
                  {hl.label}
                </p>
              </div>
            ))}
          </div>

          {/* Executive Career Profile */}
          <div className="mb-5">
            <h2 className="text-xs font-black uppercase tracking-wider text-stone-900 pb-1 border-b border-stone-200 mb-2 flex items-center gap-1.5">
              <span className="w-1.5 h-3.5 bg-pink-600 rounded-full inline-block"></span>
              Executive Career Profile
            </h2>
            <p className="text-xs text-stone-700 leading-relaxed text-justify">
              A healthcare-trained professional with comprehensive experience across healthcare
              services, medical records documentation, research, and cross-functional team
              coordination. Trained across 3 prominent healthcare institutions (RSUD R. Syamsudin SH,
              UPTD Puskesmas Padasuka, and RSUP Dr. Hasan Sadikin), coupled with 1 year in student
              development and 5 months as Head of the Facilitator Division at NAVIYARA (mentoring 39
              incoming students with a 100% pass rate). Academic achievements include official
              Intellectual Property (HAKI) for MP-ASI handbook and a peer-reviewed publication in
              Jurnal PengabdianMu (SINTA 3). Aspiring to advance in healthcare administration,
              insurance medical claims verification, and corporate healthcare operations.
            </p>
          </div>

          {/* Education Timeline */}
          <div className="mb-5">
            <h2 className="text-xs font-black uppercase tracking-wider text-stone-900 pb-1 border-b border-stone-200 mb-2 flex items-center gap-1.5">
              <span className="w-1.5 h-3.5 bg-pink-600 rounded-full inline-block"></span>
              Academic Background
            </h2>
            <div className="space-y-2.5">
              {educationData.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-3 bg-white rounded-xl border border-stone-200 flex justify-between items-start gap-4"
                >
                  <div>
                    <h3 className="text-xs font-bold text-stone-900">{edu.degree}</h3>
                    <p className="text-[11px] font-semibold text-pink-700">
                      {edu.institution} {edu.faculty ? `· ${edu.faculty}` : ""}
                    </p>
                    <p className="text-[11px] text-stone-600 mt-0.5">{edu.description}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-[10px] font-bold px-2 py-0.5 bg-stone-100 rounded-md text-stone-600 block mb-1">
                      {edu.period}
                    </span>
                    {edu.gpa && (
                      <span className="text-[11px] font-extrabold text-pink-700 block">
                        {edu.gpa}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Core Skills & Tooling Grid */}
          <div>
            <h2 className="text-xs font-black uppercase tracking-wider text-stone-900 pb-1 border-b border-stone-200 mb-2 flex items-center gap-1.5">
              <span className="w-1.5 h-3.5 bg-pink-600 rounded-full inline-block"></span>
              Core Competencies & Tools
            </h2>
            <div className="grid grid-cols-2 gap-2.5">
              {skillsAndCompetencies.map((cat, idx) => (
                <div key={idx} className="p-2.5 bg-stone-50 rounded-xl border border-stone-200">
                  <p className="text-[11px] font-bold text-stone-900 mb-1">{cat.category}</p>
                  <div className="flex flex-wrap gap-1">
                    {cat.items.map((item, iIdx) => (
                      <span
                        key={iIdx}
                        className="px-1.5 py-0.5 bg-white border border-stone-200 rounded text-[9px] font-medium text-stone-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Page Footer */}
        <div className="pt-3 border-t border-stone-200 flex items-center justify-between text-[10px] text-stone-400">
          <span>Annisa Haura Salshabira, S.Tr.Keb · Portfolio Document</span>
          <span className="font-bold text-pink-600">Page 1 of 5</span>
        </div>
      </article>

      {/* =========================================================================
          PAGE 2: CLINICAL EXPERIENCE & HOSPITAL OPERATIONS
          ========================================================================= */}
      <article className="page-sheet bg-white text-stone-900 shadow-2xl mx-auto flex flex-col justify-between mt-8 print:mt-0">
        <div>
          <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-stone-200">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-pink-700 block">
                Healthcare Practicum & Documentation
              </span>
              <h2 className="text-lg font-black text-stone-900">
                Clinical Experience & Hospital Operations
              </h2>
            </div>
            <span className="text-[10px] text-stone-500 font-bold uppercase tracking-widest bg-stone-100 px-2.5 py-1 rounded-full">
              3 Institutions · 8 Months Total
            </span>
          </div>

          <div className="space-y-4">
            {/* Experience 1: RSUD Syamsudin */}
            <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200">
              <div className="flex items-start justify-between gap-2 mb-2">
                <div>
                  <span className="px-2 py-0.5 bg-pink-100 text-pink-800 text-[9px] font-bold rounded-full">
                    Provincial Referral Hospital
                  </span>
                  <h3 className="text-sm font-bold text-stone-900 mt-1">
                    RSUD R. Syamsudin, SH. Sukabumi
                  </h3>
                  <p className="text-[11px] font-semibold text-pink-700">
                    Clinical Midwifery Internship · Sukabumi, West Java
                  </p>
                </div>
                <span className="text-[10px] font-bold text-stone-500">
                  Apr 2025 – Jun 2025 (3 Months)
                </span>
              </div>
              <p className="text-[11px] text-stone-700 mb-2 leading-relaxed">
                Gained intensive clinical experience across 4 service areas, managing 6+ obstetric
                and gynecological case types including high-risk pregnancies and emergency care while
                ensuring accurate medical record tracking.
              </p>
              <div className="grid grid-cols-3 gap-2 mb-2">
                <div className="relative h-20 rounded-lg overflow-hidden border border-stone-200">
                  <Image
                    src={getAssetUrl(
                      "/Magang/Clinical Midwifery Intern RSUD R. Syamsudin, SH. Sukabumi · Magang/IMG-20261013-WA0002.jpg"
                    )}
                    alt="RSUD Syamsudin Documentation"
                    fill
                    className="object-cover"
                    sizes="150px"
                    unoptimized
                  />
                </div>
                <div className="relative h-20 rounded-lg overflow-hidden border border-stone-200">
                  <Image
                    src={getAssetUrl(
                      "/Magang/Clinical Midwifery Intern RSUD R. Syamsudin, SH. Sukabumi · Magang/1788756910391.jpg"
                    )}
                    alt="RSUD Syamsudin Patient Care"
                    fill
                    className="object-cover"
                    sizes="150px"
                    unoptimized
                  />
                </div>
                <div className="relative h-20 rounded-lg overflow-hidden border border-stone-200">
                  <Image
                    src={getAssetUrl(
                      "/Magang/Clinical Midwifery Intern RSUD R. Syamsudin, SH. Sukabumi · Magang/1788756910134.jpg"
                    )}
                    alt="RSUD Syamsudin Clinical Team"
                    fill
                    className="object-cover"
                    sizes="150px"
                    unoptimized
                  />
                </div>
              </div>
              <ul className="text-[10px] text-stone-600 space-y-1">
                <li>• Assisted with clinical diagnostic procedures, obstetric exams, and vital monitoring.</li>
                <li>• Coordinated with multidisciplinary healthcare teams to ensure seamless patient care flow.</li>
                <li>• Maintained timely medical records adhering to patient safety and infection prevention standards.</li>
              </ul>
            </div>

            {/* Experience 2: Puskesmas Padasuka */}
            <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200">
              <div className="flex items-start justify-between gap-2 mb-2">
                <div>
                  <span className="px-2 py-0.5 bg-pink-100 text-pink-800 text-[9px] font-bold rounded-full">
                    Primary Healthcare Center (Puskesmas)
                  </span>
                  <h3 className="text-sm font-bold text-stone-900 mt-1">
                    UPTD Puskesmas Padasuka Kota Bandung
                  </h3>
                  <p className="text-[11px] font-semibold text-pink-700">
                    Clinical Midwifery Internship · Bandung, West Java
                  </p>
                </div>
                <span className="text-[10px] font-bold text-stone-500">
                  Aug 2024 – Oct 2024 (3 Months)
                </span>
              </div>
              <p className="text-[11px] text-stone-700 mb-2 leading-relaxed">
                Managed comprehensive maternal & child health documentation: 30+ Antenatal Care (ANC)
                visits, 5 normal deliveries, and 7 Postnatal Care (PNC) consultations with patient
                health tracking.
              </p>
              <div className="grid grid-cols-3 gap-2 mb-2">
                <div className="relative h-20 rounded-lg overflow-hidden border border-stone-200">
                  <Image
                    src={getAssetUrl(
                      "/Magang/Clinical Midwifery Intern UPTD Puskesmas Padasuka Kota Bandung · Magang/1788755121646.jpg"
                    )}
                    alt="Puskesmas Padasuka ANC"
                    fill
                    className="object-cover"
                    sizes="150px"
                    unoptimized
                  />
                </div>
                <div className="relative h-20 rounded-lg overflow-hidden border border-stone-200">
                  <Image
                    src={getAssetUrl(
                      "/Magang/Clinical Midwifery Intern UPTD Puskesmas Padasuka Kota Bandung · Magang/1788755121835.jpg"
                    )}
                    alt="Puskesmas Padasuka Immunization"
                    fill
                    className="object-cover"
                    sizes="150px"
                    unoptimized
                  />
                </div>
                <div className="relative h-20 rounded-lg overflow-hidden border border-stone-200">
                  <Image
                    src={getAssetUrl(
                      "/Magang/Clinical Midwifery Intern UPTD Puskesmas Padasuka Kota Bandung · Magang/1788755121371.jpg"
                    )}
                    alt="Puskesmas Padasuka Screening"
                    fill
                    className="object-cover"
                    sizes="150px"
                    unoptimized
                  />
                </div>
              </div>
              <ul className="text-[10px] text-stone-600 space-y-1">
                <li>• Conducted newborn care, immunization registers, and KPSP developmental screenings.</li>
                <li>• Delivered preventive health education on family planning and nutrition.</li>
                <li>• Recorded accurate patient demographic and clinical data in Puskesmas registries.</li>
              </ul>
            </div>

            {/* Experience 3: RSHS Bandung */}
            <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200">
              <div className="flex items-start justify-between gap-2 mb-1.5">
                <div>
                  <span className="px-2 py-0.5 bg-pink-100 text-pink-800 text-[9px] font-bold rounded-full">
                    Top National Referral Hospital
                  </span>
                  <h3 className="text-sm font-bold text-stone-900 mt-1">
                    RSUP Dr. Hasan Sadikin Bandung (RSHS)
                  </h3>
                  <p className="text-[11px] font-semibold text-pink-700">
                    Basic Midwifery Skills Practicum · Bandung, West Java
                  </p>
                </div>
                <span className="text-[10px] font-bold text-stone-500">
                  Jun 2023 – Jul 2023 (2 Months)
                </span>
              </div>
              <div className="flex gap-3 items-center">
                <div className="relative w-24 h-16 rounded-lg overflow-hidden border border-stone-200 shrink-0">
                  <Image
                    src={getAssetUrl(
                      "/Magang/Intern Basic Midwifery Skills Intern RSUP Dr. Hasan Sadikin Bandung · Magang/1788753108621.jpg"
                    )}
                    alt="RSHS Clinical Orientation"
                    fill
                    className="object-cover"
                    sizes="100px"
                    unoptimized
                  />
                </div>
                <ul className="text-[10px] text-stone-600 space-y-1 flex-1">
                  <li>• Learned standard operating procedures for inpatient and outpatient clinical workflows.</li>
                  <li>• Gained practical foundation in patient safety protocols and sterile procedure compliance.</li>
                  <li>• Supported information coordination between ward nurses and obstetric teams.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-3 border-t border-stone-200 flex items-center justify-between text-[10px] text-stone-400">
          <span>Annisa Haura Salshabira, S.Tr.Keb · Clinical Placements</span>
          <span className="font-bold text-pink-600">Page 2 of 5</span>
        </div>
      </article>

      {/* =========================================================================
          PAGE 3: PUBLIC HEALTH COMMUNITY PROJECTS
          ========================================================================= */}
      <article className="page-sheet bg-white text-stone-900 shadow-2xl mx-auto flex flex-col justify-between mt-8 print:mt-0">
        <div>
          <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-stone-200">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-pink-700 block">
                Fieldwork & Public Health Initiatives
              </span>
              <h2 className="text-lg font-black text-stone-900">
                Community Health Programs & Projects
              </h2>
            </div>
            <span className="text-[10px] text-stone-500 font-bold uppercase tracking-widest bg-stone-100 px-2.5 py-1 rounded-full">
              55 Households Assessed · 9 Interventions
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3.5 mb-4">
            {/* Project 1: GEMASTING & KEMAYUNG */}
            <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200 flex flex-col justify-between">
              <div>
                <span className="px-2 py-0.5 bg-pink-100 text-pink-800 text-[9px] font-bold rounded-full">
                  Stunting Prevention
                </span>
                <h3 className="text-xs font-bold text-stone-900 mt-1 mb-1">
                  GEMASTING & KEMAYUNG Community Promotion
                </h3>
                <p className="text-[10px] text-stone-600 leading-relaxed mb-2.5">
                  Targeted intervention program in Desa Cilayung focusing on maternal nutrition,
                  stunting prevention, and toddler developmental milestones (KEMAYUNG).
                </p>
                <div className="grid grid-cols-2 gap-2 mb-2">
                  <div className="relative h-24 rounded-lg overflow-hidden border border-stone-200">
                    <Image
                      src={getAssetUrl(
                        "/Magang/Midwifery Community Intern Universitas Padjadjaran · Magang/gemasting kemayung.jpg"
                      )}
                      alt="GEMASTING Photo 1"
                      fill
                      className="object-cover"
                      sizes="150px"
                      unoptimized
                    />
                  </div>
                  <div className="relative h-24 rounded-lg overflow-hidden border border-stone-200">
                    <Image
                      src={getAssetUrl(
                        "/Magang/Midwifery Community Intern Universitas Padjadjaran · Magang/gemasting kemayung 2.jpg"
                      )}
                      alt="GEMASTING Photo 2"
                      fill
                      className="object-cover"
                      sizes="150px"
                      unoptimized
                    />
                  </div>
                </div>
              </div>
              <ul className="text-[9.5px] text-stone-600 space-y-1">
                <li>• Conducted growth monitoring and MP-ASI dietary guidance.</li>
                <li>• Coordinated with local Posyandu cadres for child health surveillance.</li>
              </ul>
            </div>

            {/* Project 2: GEMAS (Gerakan Masyarakat Sehat) */}
            <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200 flex flex-col justify-between">
              <div>
                <span className="px-2 py-0.5 bg-pink-100 text-pink-800 text-[9px] font-bold rounded-full">
                  Preventive Care & Screening
                </span>
                <h3 className="text-xs font-bold text-stone-900 mt-1 mb-1">
                  GEMAS: Gerakan Masyarakat Sehat
                </h3>
                <p className="text-[10px] text-stone-600 leading-relaxed mb-2.5">
                  Community health screening and clean living education (PHBS) covering mosquito
                  vector control, waste separation, and metabolic checks for senior residents.
                </p>
                <div className="grid grid-cols-2 gap-2 mb-2">
                  <div className="relative h-24 rounded-lg overflow-hidden border border-stone-200">
                    <Image
                      src={getAssetUrl(
                        "/Magang/Midwifery Community Intern Universitas Padjadjaran · Magang/gemas.jpeg"
                      )}
                      alt="GEMAS Screening"
                      fill
                      className="object-cover"
                      sizes="150px"
                      unoptimized
                    />
                  </div>
                  <div className="relative h-24 rounded-lg overflow-hidden border border-stone-200">
                    <Image
                      src={getAssetUrl(
                        "/Magang/Midwifery Community Intern Universitas Padjadjaran · Magang/gemas 2.jpeg"
                      )}
                      alt="GEMAS Health Check"
                      fill
                      className="object-cover"
                      sizes="150px"
                      unoptimized
                    />
                  </div>
                </div>
              </div>
              <ul className="text-[9.5px] text-stone-600 space-y-1">
                <li>• Performed blood glucose, cholesterol, and blood pressure screening.</li>
                <li>• Educated 50+ residents on hypertension and diabetes lifestyle management.</li>
              </ul>
            </div>
          </div>

          {/* Project 3 & 4 Horizontal Cards */}
          <div className="space-y-3">
            <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 flex items-center justify-between gap-4">
              <div className="relative w-24 h-16 rounded-lg overflow-hidden border border-stone-200 shrink-0">
                <Image
                  src={getAssetUrl(
                    "/Project/Adolescent Health Education Outreach at SMK Bhakti Kencana Cileunyi/1788922924066.jpg"
                  )}
                  alt="SMK Bhakti Kencana Outreach"
                  fill
                  className="object-cover"
                  sizes="100px"
                  unoptimized
                />
              </div>
              <div className="flex-1">
                <span className="text-[9px] font-bold text-pink-700 uppercase">
                  School Health Promotion
                </span>
                <h4 className="text-xs font-bold text-stone-900">
                  Adolescent Reproductive Health Outreach at SMK Bhakti Kencana
                </h4>
                <p className="text-[10px] text-stone-600 mt-0.5">
                  Served as Master of Ceremonies (MC) and educational facilitator addressing
                  reproductive health, personal hygiene, and early marriage risks for vocational
                  high school students.
                </p>
              </div>
            </div>

            <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 flex items-center justify-between gap-4">
              <div className="relative w-24 h-16 rounded-lg overflow-hidden border border-stone-200 shrink-0">
                <Image
                  src={getAssetUrl(
                    "/Project/Antenatal Care (ANC) at Padjadjaran Clinic/1788921774641.jpg"
                  )}
                  alt="Padjadjaran Clinic ANC"
                  fill
                  className="object-cover"
                  sizes="100px"
                  unoptimized
                />
              </div>
              <div className="flex-1">
                <span className="text-[9px] font-bold text-pink-700 uppercase">
                  Primary Clinical Care
                </span>
                <h4 className="text-xs font-bold text-stone-900">
                  Integrated Antenatal Care (ANC) at Padjadjaran Clinic
                </h4>
                <p className="text-[10px] text-stone-600 mt-0.5">
                  Conducted comprehensive antenatal assessments (Leopold palpation, Doppler fetal
                  heart rate evaluation, vital metrics recording) and birth preparedness guidance.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-3 border-t border-stone-200 flex items-center justify-between text-[10px] text-stone-400">
          <span>Annisa Haura Salshabira, S.Tr.Keb · Community Health</span>
          <span className="font-bold text-pink-600">Page 3 of 5</span>
        </div>
      </article>

      {/* =========================================================================
          PAGE 4: LEADERSHIP, MENTORSHIP & ORGANIZATIONS
          ========================================================================= */}
      <article className="page-sheet bg-white text-stone-900 shadow-2xl mx-auto flex flex-col justify-between mt-8 print:mt-0">
        <div>
          <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-stone-200">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-pink-700 block">
                Leadership, Operations & Team Governance
              </span>
              <h2 className="text-lg font-black text-stone-900">
                Organizational & Mentorship Experience
              </h2>
            </div>
            <span className="text-[10px] text-stone-500 font-bold uppercase tracking-widest bg-stone-100 px-2.5 py-1 rounded-full">
              Leadership & Mentorship
            </span>
          </div>

          <div className="space-y-4">
            {/* Leadership 1: NAVIYARA Head of Facilitator */}
            <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200">
              <div className="flex items-start justify-between gap-2 mb-2">
                <div>
                  <span className="px-2 py-0.5 bg-pink-100 text-pink-800 text-[9px] font-bold rounded-full">
                    Head of Division
                  </span>
                  <h3 className="text-sm font-bold text-stone-900 mt-1">
                    Head of Facilitator Division – Naviyara
                  </h3>
                  <p className="text-[11px] font-semibold text-pink-700">
                    Himpunan Mahasiswa Kebidanan FK Universitas Padjadjaran
                  </p>
                </div>
                <span className="text-[10px] font-bold text-stone-500">
                  May 2024 – Oct 2024 (5 Months)
                </span>
              </div>
              <p className="text-[11px] text-stone-700 mb-2 leading-relaxed">
                Led and coordinated 8 facilitators in delivering a comprehensive orientation program
                for 39 incoming midwifery students. Coordinated cross-divisional logistics, timeline
                milestones, and evaluated mentee performance, resulting in a <strong>100% pass rate</strong>.
              </p>
              <div className="grid grid-cols-2 gap-2 mb-2">
                <div className="relative h-24 rounded-lg overflow-hidden border border-stone-200">
                  <Image
                    src={getAssetUrl(
                      "/Himpunan/Head of Facilitator Division - Naviyara (New Student Orientation)/1788786434253.jpg"
                    )}
                    alt="Naviyara Facilitators"
                    fill
                    className="object-cover"
                    sizes="200px"
                    unoptimized
                  />
                </div>
                <div className="relative h-24 rounded-lg overflow-hidden border border-stone-200">
                  <Image
                    src={getAssetUrl(
                      "/Himpunan/Head of Facilitator Division - Naviyara (New Student Orientation)/1788786616513.jpg"
                    )}
                    alt="Naviyara Orientation Mentoring"
                    fill
                    className="object-cover"
                    sizes="200px"
                    unoptimized
                  />
                </div>
              </div>
            </div>

            {/* Leadership 2: OPPEK Facilitator */}
            <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200">
              <div className="flex items-start justify-between gap-2 mb-1.5">
                <div>
                  <span className="px-2 py-0.5 bg-pink-100 text-pink-800 text-[9px] font-bold rounded-full">
                    Faculty Orientation
                  </span>
                  <h3 className="text-sm font-bold text-stone-900 mt-1">
                    Facilitator – Faculty New Student Orientation (OPPEK)
                  </h3>
                  <p className="text-[11px] font-semibold text-pink-700">
                    BEM Kema Fakultas Kedokteran Universitas Padjadjaran
                  </p>
                </div>
                <span className="text-[10px] font-bold text-stone-500">Aug 2023 (1 Month)</span>
              </div>
              <div className="flex gap-3 items-center">
                <div className="relative w-28 h-20 rounded-lg overflow-hidden border border-stone-200 shrink-0">
                  <Image
                    src={getAssetUrl(
                      "/Magang/Facilitator – Faculty New Student Orientation (OPPEK).jpg"
                    )}
                    alt="OPPEK Facilitator"
                    fill
                    className="object-cover"
                    sizes="120px"
                    unoptimized
                  />
                </div>
                <div className="text-[10px] text-stone-600 space-y-1 flex-1">
                  <p>
                    • Mentored incoming medical and health sciences students during faculty
                    orientation to accelerate academic and ethical transitions.
                  </p>
                  <p>
                    • Coordinated communications between central steering committees and group
                    participants to maintain real-time information clarity.
                  </p>
                </div>
              </div>
            </div>

            {/* Leadership 3: HIMA Kaderisasi */}
            <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200">
              <div className="flex items-start justify-between gap-2 mb-1.5">
                <div>
                  <span className="px-2 py-0.5 bg-pink-100 text-pink-800 text-[9px] font-bold rounded-full">
                    Curriculum & Development
                  </span>
                  <h3 className="text-sm font-bold text-stone-900 mt-1">
                    Staff of Cadreization and Student Development
                  </h3>
                  <p className="text-[11px] font-semibold text-pink-700">
                    Himpunan Mahasiswa Kebidanan FK Universitas Padjadjaran
                  </p>
                </div>
                <span className="text-[10px] font-bold text-stone-500">
                  Jan 2024 – Dec 2024 (1 Year)
                </span>
              </div>
              <div className="flex gap-3 items-center">
                <div className="relative w-28 h-20 rounded-lg overflow-hidden border border-stone-200 shrink-0">
                  <Image
                    src={getAssetUrl(
                      "/Himpunan/Staff of Cadreization and Student Development/1788785495281.jpg"
                    )}
                    alt="Kaderisasi HIMA"
                    fill
                    className="object-cover"
                    sizes="120px"
                    unoptimized
                  />
                </div>
                <div className="text-[10px] text-stone-600 space-y-1 flex-1">
                  <p>
                    • Formulated foundational student curriculum modules focused on organizational
                    ethics, leadership, and professional conduct.
                  </p>
                  <p>
                    • Monitored cohort growth trajectories and coordinated cross-departmental
                    evaluations across 12 months.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-3 border-t border-stone-200 flex items-center justify-between text-[10px] text-stone-400">
          <span>Annisa Haura Salshabira, S.Tr.Keb · Leadership</span>
          <span className="font-bold text-pink-600">Page 4 of 5</span>
        </div>
      </article>

      {/* =========================================================================
          PAGE 5: VERIFIED CREDENTIALS, HAKI, PUBLICATION & CLOSING
          ========================================================================= */}
      <article className="page-sheet bg-white text-stone-900 shadow-2xl mx-auto flex flex-col justify-between mt-8 print:mt-0">
        <div>
          <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-stone-200">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-pink-700 block">
                Official Certifications & Intellectual Property
              </span>
              <h2 className="text-lg font-black text-stone-900">
                Verified Credentials & Publications
              </h2>
            </div>
            <span className="text-[10px] text-stone-500 font-bold uppercase tracking-widest bg-stone-100 px-2.5 py-1 rounded-full">
              HAKI & SINTA 3 Indexed
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3.5 mb-4">
            {/* Credential 1: HAKI */}
            <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200 flex flex-col justify-between">
              <div>
                <span className="px-2 py-0.5 bg-pink-100 text-pink-800 text-[9px] font-bold rounded-full">
                  Intellectual Property (HAKI)
                </span>
                <h3 className="text-xs font-bold text-stone-900 mt-1 mb-1">
                  Buku Saku MP-ASI (No. EC00202468494)
                </h3>
                <p className="text-[10px] text-stone-600 mb-2">
                  Official Copyright registered with Kementerian Hukum dan HAM RI (2024) for
                  infant complementary feeding educational guidebook.
                </p>
                <div className="relative h-28 rounded-lg overflow-hidden border border-stone-200 mb-2">
                  <Image
                    src={getAssetUrl(
                      "/Annisa_sertifikat/Lani GumilangSST.,MM. , Buku Saku MP ASI, sertifikat_EC00202468494 (2) (2)_page-0001.jpg"
                    )}
                    alt="Sertifikat HAKI"
                    fill
                    className="object-cover"
                    sizes="200px"
                    unoptimized
                  />
                </div>
              </div>
              <p className="text-[9.5px] font-semibold text-pink-700">
                Ministry of Law & Human Rights RI
              </p>
            </div>

            {/* Credential 2: Jurnal */}
            <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200 flex flex-col justify-between">
              <div>
                <span className="px-2 py-0.5 bg-pink-100 text-pink-800 text-[9px] font-bold rounded-full">
                  Peer-Reviewed Journal (SINTA 3)
                </span>
                <h3 className="text-xs font-bold text-stone-900 mt-1 mb-1">
                  Penyuluhan Depresi Pasca Persalinan
                </h3>
                <p className="text-[10px] text-stone-600 mb-2">
                  Scientific community publication in Jurnal PengabdianMu (2026) regarding maternal
                  postpartum depression and clinical screening.
                </p>
                <div className="relative h-28 rounded-lg overflow-hidden border border-stone-200 mb-2">
                  <Image
                    src={getAssetUrl("/fotojurnal.png")}
                    alt="Jurnal PengabdianMu"
                    fill
                    className="object-cover"
                    sizes="200px"
                    unoptimized
                  />
                </div>
              </div>
              <p className="text-[9.5px] font-semibold text-pink-700">
                Jurnal PengabdianMu · SINTA 3 Accredited
              </p>
            </div>
          </div>

          {/* Credential 3 & 4 (Microsoft & TOEFL) */}
          <div className="grid grid-cols-2 gap-3.5 mb-5">
            <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 flex items-center gap-3">
              <div className="relative w-16 h-12 rounded-lg overflow-hidden border border-stone-200 shrink-0">
                <Image
                  src={getAssetUrl(
                    "/Annisa_sertifikat/Sertifikasi Microsoft_Annisa Haura_page-0001.jpg"
                  )}
                  alt="Microsoft Specialist"
                  fill
                  className="object-cover"
                  sizes="80px"
                  unoptimized
                />
              </div>
              <div>
                <h4 className="text-[11px] font-bold text-stone-900 leading-tight">
                  Microsoft Office Specialist
                </h4>
                <p className="text-[9.5px] text-stone-500">Word, Excel, PowerPoint (2026)</p>
                <span className="text-[9px] font-bold text-pink-700">Certified Bootcamp</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 flex items-center gap-3">
              <div className="relative w-16 h-12 rounded-lg overflow-hidden border border-stone-200 shrink-0">
                <Image
                  src={getAssetUrl(
                    "/Annisa_sertifikat/Sertifikat TOEFL_Annisa Haura_page-0001.jpg"
                  )}
                  alt="TOEFL Certificate"
                  fill
                  className="object-cover"
                  sizes="80px"
                  unoptimized
                />
              </div>
              <div>
                <h4 className="text-[11px] font-bold text-stone-900 leading-tight">
                  English Proficiency (TOEFL)
                </h4>
                <p className="text-[9.5px] text-stone-500">Language Certification Center (2024)</p>
                <span className="text-[9px] font-bold text-pink-700">Professional Working</span>
              </div>
            </div>
          </div>

          {/* Professional Closing & Relocation Banner */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-pink-50 via-rose-50 to-pink-50 border border-pink-200 text-center">
            <h3 className="text-xs font-black uppercase tracking-wider text-pink-900 mb-1">
              Ready for Professional Placement & Relocation
            </h3>
            <p className="text-[11px] text-stone-700 leading-relaxed max-w-xl mx-auto mb-2">
              Based in Bandung, West Java. Open for immediate placement across healthcare
              administration, hospital operational governance, insurance medical claims verification,
              and healthcare corporate roles across Indonesia.
            </p>
            <div className="inline-flex items-center gap-4 text-[10px] font-bold text-pink-800">
              <span>📧 {personalInfo.email}</span>
              <span>•</span>
              <span>🔗 portofolio-annisa.vercel.app</span>
            </div>
          </div>
        </div>

        <div className="pt-3 border-t border-stone-200 flex items-center justify-between text-[10px] text-stone-400">
          <span>Annisa Haura Salshabira, S.Tr.Keb · Official Credentials</span>
          <span className="font-bold text-pink-600">Page 5 of 5 (End of Dossier)</span>
        </div>
      </article>

      {/* Global Print Styles */}
      <style jsx global>{`
        @media screen {
          .page-sheet {
            width: 210mm;
            min-height: 297mm;
            padding: 16mm 18mm;
            border-radius: 12px;
          }
        }
        @media print {
          @page {
            size: A4 portrait;
            margin: 0;
          }
          html,
          body {
            background: #ffffff !important;
            color: #1c1917 !important;
            margin: 0 !important;
            padding: 0 !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .no-print {
            display: none !important;
          }
          .page-sheet {
            width: 210mm !important;
            min-height: 297mm !important;
            height: 297mm !important;
            max-height: 297mm !important;
            margin: 0 !important;
            padding: 14mm 16mm !important;
            box-shadow: none !important;
            border: none !important;
            border-radius: 0 !important;
            page-break-after: always !important;
            break-after: page !important;
            overflow: hidden !important;
          }
        }
      `}</style>
    </div>
  );
}
