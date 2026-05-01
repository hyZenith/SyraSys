"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

const imagesColumn1 = [
  "/assets/portfolio/screen1-1.webp",
  "/assets/portfolio/screen2-1.webp",
  "/assets/portfolio/screen3-1.webp",
];

const imagesColumn2 = [
  "/assets/portfolio/screen1-2.webp",
  "/assets/portfolio/screen2-2.webp",
  "/assets/portfolio/screen3-2 (1).webp",
];

const imagesColumn3 = [
  "/assets/portfolio/screen1-3.webp",
  "/assets/portfolio/screen2-3.webp",
  "/assets/portfolio/screen3-3.webp",
];

const imagesColumn4 = [
  "/assets/portfolio/screen1-4.webp",
  "/assets/portfolio/screen2-4.webp",
  "/assets/portfolio/screen3-4.webp",
];

export default function Services() {
  const containerRef = useRef<HTMLElement>(null);
  const col1Ref = useRef<HTMLDivElement>(null);
  const col2Ref = useRef<HTMLDivElement>(null);
  const col3Ref = useRef<HTMLDivElement>(null);
  const col4Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <section ref={containerRef} className="relative w-full bg-[#050505]">

      <div className="bento-layout-projects">
        <div className="projects">
          
        </div>
      </div>



      {/* Sticky Hand Container */}
      <div className="sticky top-20 left-0 w-full h-screen z-20 flex items-center justify-center pointer-events-none overflow-hidden  ">
        <img
          src="/assets/portfolio/hand.webp"
          alt="Hand holding phone"
          className="h-[80vh] md:h-[115vh] object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.9)] mt-[350px]"
        />
      </div>

      {/* Scrolling Background */}
      <div className="relative z-10 w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 -mt-[100vh] pb-[12vh] pt-[15vh]">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-2 lg:gap-4">

          {/* Left Side: 2 Columns */}
          <div ref={col1Ref} className="col-span-1 flex flex-col gap-2 lg:gap-4">
            {imagesColumn1.map((src, i) => (
              <div key={`col1-${i}`} className="overflow-hidden rounded-[2.5rem] shadow-2xl aspect-[650/1374] bg-[#111]">
                <img src={src} className="w-full h-full object-cover" alt="Portfolio screen" />
              </div>
            ))}
          </div>

          <div ref={col2Ref} className="col-span-1 flex flex-col gap-2 lg:gap-4">
            {imagesColumn2.map((src, i) => (
              <div key={`col2-${i}`} className="overflow-hidden rounded-[2.5rem] shadow-2xl aspect-[650/1374] bg-[#111]">
                <img src={src} className="w-full h-full object-cover" alt="Portfolio screen" />
              </div>
            ))}
          </div>

          {/* Center Empty Space for Hand */}
          <div className="hidden lg:block col-span-1 pointer-events-none" />

          {/* Right Side: 2 Columns */}
          <div ref={col3Ref} className="col-span-1 flex flex-col gap-2 lg:gap-4">
            {imagesColumn3.map((src, i) => (
              <div key={`col3-${i}`} className="overflow-hidden rounded-[2.5rem] shadow-2xl aspect-[650/1374] bg-[#111]">
                <img src={src} className="w-full h-full object-cover" alt="Portfolio screen" />
              </div>
            ))}
          </div>

          <div ref={col4Ref} className="col-span-1 flex flex-col gap-2 lg:gap-4">
            {imagesColumn4.map((src, i) => (
              <div key={`col4-${i}`} className="overflow-hidden rounded-[2.5rem] shadow-2xl aspect-[650/1374] bg-[#111]">
                <img src={src} className="w-full h-full object-cover" alt="Portfolio screen" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gradient overlays for seamless transition at section bounds */}
      <div className="absolute top-0 left-0 w-full h-[20vh] bg-gradient-to-b from-[#050505] to-transparent z-15 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-[20vh] bg-gradient-to-t from-[#050505] to-transparent z-15 pointer-events-none" />
    </section>
  );
}
