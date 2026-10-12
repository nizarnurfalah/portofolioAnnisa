"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { getAssetUrl } from "../data/portfolio";

export default function IntroSplash() {
  const [stage, setStage] = useState<"visible" | "exiting" | "hidden">("visible");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Start progress bar animation shortly after mount
    const progressTimer = setTimeout(() => {
      setProgress(100);
    }, 50);

    // Stage 1: Trigger buttery cross-dissolve exit after progress reaches completion
    const exitTimer = setTimeout(() => {
      setStage("exiting");
    }, 1400);

    // Stage 2: Completely unmount after fade-out transition finishes
    const hideTimer = setTimeout(() => {
      setStage("hidden");
    }, 2350);

    return () => {
      clearTimeout(progressTimer);
      clearTimeout(exitTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (stage === "hidden") return null;

  return (
    <aside
      aria-label="Welcome Loading Screen"
      className={`fixed inset-0 z-[100] bg-[#fffbfd] flex flex-col items-center justify-center px-6 transition-all ease-in-out select-none ${
        stage === "exiting"
          ? "opacity-0 scale-[1.02] pointer-events-none"
          : "opacity-100 scale-100 pointer-events-auto"
      }`}
      style={{
        transitionDuration: "950ms",
        transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      {/* Decorative ambient glowing backdrop orbs */}
      <div
        className="absolute w-80 h-80 sm:w-96 sm:h-96 bg-pink-300/30 rounded-full blur-3xl pointer-events-none animate-pulse-glow"
        aria-hidden="true"
      ></div>
      <div
        className="absolute w-64 h-64 bg-rose-200/25 rounded-full blur-2xl pointer-events-none -top-10 -right-10 animate-float-gentle"
        aria-hidden="true"
      ></div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-lg">
        {/* Profile Avatar Badge with dynamic floating & pulse ring */}
        <div className="relative mb-5 sm:mb-6 animate-float-gentle">
          {/* Subtle glowing ring behind */}
          <div className="absolute -inset-1 rounded-full bg-pink-400/25 blur-md animate-ping pointer-events-none"></div>

          <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden bg-white border-2 border-pink-300 shadow-xl shadow-pink-200/60 ring-4 ring-pink-50">
            <Image
              src={getAssetUrl("/fotononformal/Annisa Haura Salshabira-3.jpg")}
              alt="Annisa Haura Salshabira"
              fill
              className="object-cover object-top"
              priority
              unoptimized
            />
          </div>
        </div>

        {/* Elegant Name with subtle lively styling */}
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-stone-900 uppercase">
          ANNISA HAURA{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-rose-500 to-pink-600 animate-pulse">
            SALSHABIRA
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xs sm:text-sm font-semibold text-stone-500 tracking-widest uppercase mt-2.5 sm:mt-3 flex items-center gap-2">
          <span className="w-4 h-[1px] bg-pink-300 inline-block"></span>
          <span>Portfolio · Universitas Padjadjaran</span>
          <span className="w-4 h-[1px] bg-pink-300 inline-block"></span>
        </p>

        {/* Animated Progress Indicator with glowing head */}
        <div className="w-40 sm:w-48 h-1.5 bg-pink-100/80 rounded-full mt-6 sm:mt-7 overflow-hidden p-0.5 shadow-inner">
          <div
            className="h-full bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 rounded-full shadow-sm shadow-pink-500/50"
            style={{
              width: `${progress}%`,
              transition: "width 1.35s cubic-bezier(0.25, 1, 0.5, 1)",
            }}
          ></div>
        </div>
      </div>
    </aside>
  );
}

