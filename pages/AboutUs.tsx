"use client";
import localFont from "next/font/local";

import { Poppins } from "next/font/google";

const PoppinsFont = Poppins({
  subsets: ['latin'],
  weight: ['200', '400'],
});

const thunder = localFont({
  src: "../public/fonts/Thunder-ExtraBoldLCItalic.woff2",
});

const ppmori = localFont({
  src: "../public/fonts/PPMori-Regular.woff2",
});

const stats = [
  { value: "18+", label: "million visitors a month on our websites" },
  { value: "76%", label: "achievement of stated objectives" },
  { value: "400+", label: "cases in various niches" },
  { value: "8+", label: "years experience in promoting websites" },
];

export default function AboutUs() {
  return (
    <section
      id="about"
      className="relative min-h-screen bg-[#e2e0da] px-8 md:px-16 lg:px-24 py-20 overflow-hidden"
    >
      <p className="absolute top-8 left-8 md:left-16 lg:left-24 text-xs text-neutral-400 tracking-widest font-mono">
        02 — About Us
      </p>
      {/* ── Since label ── */}
      <p
        className="text-xs tracking-widest text-neutral-500 uppercase mb-4"
        style={{ fontFamily: ppmori.style.fontFamily }}
      >
        Since 2023
      </p>

      {/* ── Main heading + descriptor ── */}
      <div className="flex flex-col lg:flex-row lg:items-end gap-6 lg:gap-12">
        <h2
          className="text-[clamp(2rem,4vw,5rem)] font-black  leading-[0.92] tracking-tight text-neutral-900 max-w-4xl"
            style={{ fontFamily: PoppinsFont.style.fontFamily }}
        >
          We have been helping startups with effective promotion strategies
        </h2>

        <p
          className="text-xs text-neutral-500 leading-relaxed max-w-[160px] mb-1 shrink-0 text-center lg:text-right"
          style={{ fontFamily: ppmori.style.fontFamily }}
        >
          based on the use of websites, targeting, contextual advertising and
          Social media
        </p>
      </div>

      {/* ── Two description paragraphs ── */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
        <p
          className="text-xs text-neutral-500 leading-relaxed max-w-[200px]"
          style={{ fontFamily: ppmori.style.fontFamily }}
        >
          The marketing world is constantly changing and we are always ready for
          new challenges.
        </p>
        <p
          className="text-xs text-neutral-500 leading-relaxed max-w-[200px] md:ml-auto"
          style={{ fontFamily: ppmori.style.fontFamily }}
        >
          We keep up with the latest trends and technologies to ensure your
          brand has a competitive edge.
        </p>
      </div>

      {/* ── Stats grid ── */}
      <div className="mt-16 grid grid-cols-2 gap-x-8 gap-y-10">
        {stats.map(({ value, label }) => (
          <div key={label}>
            <p
              className="text-[clamp(4rem,14vw,10rem)] font-black leading-none text-white/80 select-none"
              style={{ fontFamily: thunder.style.fontFamily }}
            >
              {value}
            </p>
            <p
              className="text-[11px] text-neutral-500 mt-1 max-w-[180px]"
              style={{ fontFamily: ppmori.style.fontFamily }}
            >
              {label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}