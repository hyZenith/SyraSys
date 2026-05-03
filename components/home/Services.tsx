"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

export default function StickyCards() {
  const containerRef = useRef<HTMLElement | null>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  // DATA (embedded as requested)
  const cardsData = [
    {
      id: "01",
      title: "Branding that drives conversion & funding.",
      desc: "We clarify your positioning, define a distinctive tone of voice, and build a visual system that works across acquisition and product.",
      color: "hsl(247, 56%, 42%)",
      quote: "Working with Brand Appart has been an absolute pleasure...",
      icons: [1, 2, 3],
    },
    {
      id: "02",
      title: "Branding & Product Design that drives growth.",
      desc: "We start from business goals, map the critical journeys, and design systems your team can scale with confidence.",
      color: "#ff7722",
      quote: "A huge thank you to the entire Brand Appart team...",
      icons: [10, 11, 12],
    },
    {
      id: "03",
      title: "Web Design & Development for growing teams & business.",
      desc: "We align messaging, page architecture, and UI so every page supports pipeline and sales conversations.",
      color: "#ff3c34",
      quote: "I’ve worked with Brand Appart on multiple projects...",
      icons: [20, 21, 22],
    },
    {
      id: "04",
      title: "Custom CRM & Sales Tools to boost your sales team.",
      desc: "We craft workflows and internal tools that reduce manual steps and help your team close faster.",
      color: "#785f47",
      quote: null,
      icons: [30, 31, 32],
    },
  ];

  useEffect(() => {
    if (!containerRef.current) return;

    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    const cards = cardsRef.current.filter(
      (card): card is HTMLDivElement => card !== null
    );
    const totalCards = cards.length;
    const segmentSize = 1 / Math.max(1, totalCards - 1);

    const cardYOffset = 5;
    const cardScaleStep = 0.075;

    cards.forEach((card, index) => {
      gsap.set(card, {
        xPercent: -50,
        yPercent: -50 + index * cardYOffset,
        scale: 1 - index * cardScaleStep,
      });
    });

    const trigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: `+=${window.innerHeight * totalCards}px`,
      pin: true,
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;

        const activeIndex = Math.min(
          Math.floor(progress / segmentSize),
          totalCards - 1
        );

        const segmentProgress =
          (progress - activeIndex * segmentSize) / segmentSize;

        cards.forEach((card, i) => {
          if (i < activeIndex) {
            gsap.set(card, { yPercent: -250, rotationX: 35 });
          } else if (i === activeIndex) {
            gsap.set(card, {
              yPercent: gsap.utils.interpolate(-50, -200, segmentProgress),
              rotationX: gsap.utils.interpolate(0, 35, segmentProgress),
              scale: 1,
            });
          } else {
            const behindIndex = i - activeIndex;

            gsap.set(card, {
              yPercent: -50 + (behindIndex - segmentProgress) * 5,
              scale: 1 - (behindIndex - segmentProgress) * 0.075,
            });
          }
        });
      },
    });

    return () => {
      trigger.kill();
      lenis.destroy();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-screen bg-[#e3e3db] perspective-[850px]"
    >
      {cardsData.map((card, index) => (
        <div
          key={card.id}
          ref={(el) => {
            cardsRef.current[index] = el;
          }}
          className="absolute top-1/2 left-1/2 h-[70%] w-[70%] overflow-hidden rounded-[28px] p-10 text-white shadow-[0_40px_90px_rgba(0,0,0,0.22)]"
          style={{
            backgroundColor: card.color,
            zIndex: cardsData.length - index,
          }}
        >
          <p className="absolute right-10 top-8 text-3xl font-medium opacity-45">
            ({card.id})
          </p>

          <div className="grid h-full grid-cols-[1.1fr_1fr] gap-8">
            {/* LEFT */}
            <div className="flex flex-col justify-between">
              <div>
                <div className="flex items-start ">
                  <h1 className="max-w-[18ch] text-[58px] font-bold leading-[0.95] tracking-tight">
                    {card.title}
                  </h1>
                </div>
                <p className="mt-8 max-w-[26ch] text-3xl leading-tight opacity-70">
                  {card.desc}
                </p>
              </div>

              <div className="mb-10 flex items-center flex-col gap-5 sm:flex-row sm:justify-center sm:gap-x-4 md:justify-start">
                <div className="flex -space-x-3.5" role="group" aria-label="Trusted by customers">
                  <img
                    className="inline-block h-12 w-12 rounded-full border-2 border-white bg-[#f6d96c] object-cover"
                    src="/assets/ns-avatar-1.png"
                    alt="User avatar 1"
                  />
                  <img
                    className="inline-block h-12 w-12 rounded-full border-2 border-white bg-[#f66d6d] object-cover"
                    src="/assets/ns-avatar-2.png"
                    alt="User avatar 2"
                  />
                  <img
                    className="inline-block h-12 w-12 rounded-full border-2 border-white bg-[#79c77f] object-cover"
                    src="/assets/ns-avatar-3.png"
                    alt="User avatar 3"
                  />
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-white bg-[#9DAEC6] text-sm font-medium text-white">
                    17+
                  </div>
                </div>
                <div className="text-center sm:text-left">
                  <p className="block text-sm font-medium text-white/90">
                    Trusted by 20+
                  </p>
                  <p className="text-sm text-white/60">
                    Customers across the globe
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex h-full flex-col justify-end">
              {card.icons?.length ? (
                <div className="mt-auto flex flex-wrap justify-end gap-4">
                  {card.icons.slice(0, 3).map((icon, i) => (
                    <div
                      key={`${card.id}-icon-${i}`}
                      className="h-40 w-40 overflow-hidden rounded-2xl bg-white/10"
                    >
                      <div className="flex h-full w-full items-center justify-center">
                        <i
                          className={`ns-shape-${icon} text-[96px] leading-none text-white`}
                          aria-hidden
                        />
                      </div>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}