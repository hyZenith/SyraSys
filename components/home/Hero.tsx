"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Poppins } from 'next/font/google'
import localFont from 'next/font/local'
import ButtonV2 from "@/components/ButtonV2";

const PoppinsFont = Poppins({
  subsets: ['latin'],
  weight: ['200', '400'],
})

const ppmori = localFont({
  src: '../../public/fonts/PPMori-Regular.woff2',
  weight: '400',
})

const thunder = localFont({
  src: '../../public/fonts/Thunder-ExtraBoldLCItalic.woff2',
  weight: '700',
})

//use the logo's instead of text
const partners = [
  "Sehsaa",
  "GrowthYaari",
  "LebasneseGrill",
  "FEAR.",
  "Yannar",
  "Crowd Impact",
  "Priti's Premix",
  "AYOMI",
  "Aaina The Careers ",
  "Rotaract",
  "Stitzzy",
  "Awarapan",
  "Raheja Universal",
  "Ayunature",
  "Namma Spot",
  "Veg buggy",
  "Drave Digitals",
  "velor",
  "food galery",
  "microVitiligo.com",
  "mahdusara",
  "THB",
  "XposeTattoo",
  "ORGKhana",
  "aforro",
  "Arise",
  "aritri",
  "Espresso GO"
];

const Hero = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () => {
      setTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        })
      );
    };
    tick();
    const id = setInterval(tick, 60_000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-between px-6 md:px-20 lg:px-28 pt-28 pb-8 overflow-hidden bg-white m-1 rounded-2xl"
    >
      {/* ─── TOP LEFT LOGO ─── */}
      <div className="absolute top-1 left-4 z-10">
        <Image
          src="/assets/logo.png"
          alt="SyraSys Logo"
          width={150}
          height={150}
          className="object-contain opacity-80"
        />
      </div>

      {/* ─── HEXAGON GRID BACKGROUND ─── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.07]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="hex-pattern"
              x="0"
              y="0"
              width="56"
              height="97"
              patternUnits="userSpaceOnUse"
            >
              {/* column 1 */}
              <polygon
                points="28,1 54,15.5 54,48.5 28,63 2,48.5 2,15.5"
                fill="none"
                stroke="#000"
                strokeWidth="1"
              />
              {/* column 2 — offset row */}
              <polygon
                points="28,49 54,63.5 54,96.5 28,111 2,96.5 2,63.5"
                fill="none"
                stroke="#000"
                strokeWidth="1"
              />
              {/* half hex far right col 1 */}
              <polygon
                points="56,1 56,15.5 56,48.5 56,63 56,15.5"
                fill="none"
                stroke="#000"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hex-pattern)" />
        </svg>
      </div>

      {/* ─── HERO HEADING ─── */}
      <div className="flex-1 flex items-center justify-center">
        <div className="max-w-6xl w-full text-center">
          <h1 className="hero-heading text-neutral-900 opacity-0 animate-fade-in-up animate-delay-1  " style={{ fontFamily: ppmori.style.fontFamily }}>
            <span className="block">Crafted to Impress,</span>
            <span className="mt-2 mb-4 block">Engineered to </span>
            <span className="text-neutral-400 line-through "> Perform.</span>
          </h1>
        </div>
      </div>

      {/* ─── PARTNER LOGOS STRIP ─── */}
      <div className="w-full max-w-3xl mx-auto mt-12 mb-10 opacity-0 animate-fade-in-up animate-delay-2 overflow-hidden">
        <div className="flex items-center gap-12 animate-marquee whitespace-nowrap">
          {[...partners, ...partners].map((name, i) => (
            <span
              key={i}
              className="text-neutral-400 font-semibold text-sm md:text-base tracking-widest uppercase select-none"
            >
              {name}
            </span>
          ))}
        </div>
      </div>

      {/* ─── SUBTEXT + CTA ─── */}
      <div className="flex flex-col items-center text-center mb-16">
        <p className="max-w-xl text-lg md:text-xl text-neutral-600 leading-relaxed opacity-0 animate-fade-in-up animate-delay-3" style={{ fontFamily: ppmori.style.fontFamily }}>
          High-impact design. Precision development. Digital products built to stand out and perform at scale.
        </p>

        <div className="mt-8 opacity-0 animate-fade-in-up animate-delay-4">
          <ButtonV2 href="/get-in-touch" label="Book an Appointment" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
