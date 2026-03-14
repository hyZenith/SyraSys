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
  { value: "98%", label: "achievement of stated objectives" },
  { value: "400+", label: "cases in various niches" },
  { value: "8+", label: "years experience in promoting websites" },
];

export default function AboutUs() {
  return (
    <section
      id="about"
      className="relative min-h-screen bg-[#e2e0da] px-10 py-20 overflow-hidden "
    >
      <div className="ml-[640px]">
        <p className="absolute top-8 left-[180px] text-xs text-neutral-400 tracking-widest font-mono">
          02 — About Us
        </p>
        {/* ── Main heading + descriptor ── */}
        <div className="flex flex-col lg:flex-col   text-[clamp(2rem,4vw,5rem)] font-black  leading-[0.92] tracking-tight text-neutral-900" style={{ fontFamily: PoppinsFont.style.fontFamily }}>
          <div className="flex flex-row items-start gap-20">
            <p
              className="text-xl  tracking-widest text-neutral-500 uppercase mt-2"
              style={{ fontFamily: ppmori.style.fontFamily }}
            >
              Since 2023
            </p>
            <h2 className="">
              We have been helping
            </h2>
          </div>
          <span className="">startups with</span>
          <span className="pl-20">effective promotion</span>
          <div className="flex flex-row items-start gap-4">
            <span className="">strategies</span>
            <p
              className="text-sm text-neutral-500 tracking-wide max-w-[160px] shrink-0 mt-7"
              style={{ fontFamily: ppmori.style.fontFamily }}
            >
              based on the use of websites, targeting, contextual advertising and
              Social media
            </p>
          </div>
        </div>

        {/* ── Two description paragraphs ── */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
          <p
            className="text-xs text-neutral-500 leading-wide max-w-[200px]"
            style={{ fontFamily: ppmori.style.fontFamily }}
          >
            The marketing world is constantly changing and we are always ready for
            new challenges.
          </p>
          <p
            className="text-xs text-neutral-500 leading- max-w-[200wkkpx] md:ml-auto"
            style={{ fontFamily: ppmori.style.fontFamily }}
          >
            We keep up with the latest trends and technologies to ensure your
            brand has a competitive edge.
          </p>
        </div>

        {/* ── Stats grid ── */}
        <div className="mt-16 grid grid-cols-2 gap-x-8 gap-y-10">
          {stats.map(({ value, label }) => (
            <div key={label} className="relative">
              <p
                className="text-[clamp(4rem,14vw,10rem)] font-black leading-none text-neutral-900/80 select-none"
                style={{
                  fontFamily: thunder.style.fontFamily,
                  WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 40%)",
                  maskImage: "linear-gradient(to bottom, black 60%, transparent 40%)",
                }}
              >
                {value}
              </p>
              <p
                className="text-[15px] text-neutral-500 max-w-[180px] absolute bottom-0"
                style={{ fontFamily: ppmori.style.fontFamily, top: "70%" }}
              >
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}