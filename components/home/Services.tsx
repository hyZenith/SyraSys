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
      title: "Solid Designing Solutions for Startups & Scaleups.",
      desc: "We clarify your positioning, define a distinctive tone of voice, and build a visual system that works across acquisition and product...",
      color: "hsl(247, 56%, 42%)",
      quote: "Working with Brand Appart has been an absolute pleasure...",
      author: {
        name: "Jérémy Bendayan",
        title: "Co-founder & COO @Jaws Group",
        img: "https://cdn.prod.website-files.com/67f7891166d9b83b9231109e/68403ea61d62eda6b245af20_1738708560978.avif",
      },
      images: [
        "https://cdn.prod.website-files.com/67f7891166d9b83b9231109e/68e622e1f900620069168863_branding-01.avif",
        
      ],
    },
    {
      id: "02",
      title: "Branding & Product Design that drives growth.",
      desc: "We start from business goals, map the critical journeys...",
      color: "#ff7722",
      quote: "A huge thank you to the entire Brand Appart team...",
      author: {
        name: "Théo Cesarini",
        title: "CEO & Co-Founder @Incard & @Fundree",
        img: "https://cdn.prod.website-files.com/67f7891166d9b83b9231109e/683df0223365b8119da39098_1722618592452.avif",
      },
      images: [
        "https://cdn.prod.website-files.com/67f7891166d9b83b9231109e/68e633760e1dd0f55c0e7c0a_product-01.avif",
      ],
    },
    {
      id: "03",
      title: "Web Design & Development for growing teams & business.",
      desc: "We align messaging, page architecture, and UI...",
      color: "#ff3c34",
      quote: "I’ve worked with Brand Appart on multiple projects...",
      author: {
        name: "Alexis Botaya",
        title: "Managing director @Sound Experience",
        img: "https://cdn.prod.website-files.com/67f7891166d9b83b9231109e/683df55bfbee02637c53da16_1664138677695.avif",
      },
      images: [
        "https://cdn.prod.website-files.com/67f7891166d9b83b9231109e/68e63541167dd0ff79e0f7c6_webdesign-01.avif",
      ],
    },
    {
      id: "04",
      title: "Custom CRM & Sales Tools to boost your sales team.",
      desc: "We craft the narrative that gets meetings...",
      color: "#785f47",
      quote: null,
      author: null,
      images: [
        "https://cdn.prod.website-files.com/67f7891166d9b83b9231109e/68e635aa0286520b44dea001_pitch-01.avif",
      ],
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
    const segmentSize = 1 / totalCards;

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
      end: `+=${window.innerHeight * 8}px`,
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
          className="absolute top-1/2 left-1/2 w-[70%] h-[70%] flex gap-6 p-8 rounded-2xl text-white"
          style={{
            backgroundColor: card.color,
            zIndex: cardsData.length - index,
          }}
        >
          {/* LEFT */}
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <p className="text-xs opacity-70">{card.id}</p>
              <h1 className="text-[50px] font-bold mt-2">{card.title}</h1>
              <p className="text-sm mt-4 opacity-90">{card.desc}</p>
            </div>

            {card.author && (
              <div className="mt-4">
                <p className="text-xs italic opacity-80">
                  “{card.quote}”
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <img
                    src={card.author.img}
                    className="w-8 h-8 rounded-full"
                  />
                  <div className="text-xs">
                    <p>{card.author.name}</p>
                    <p className="opacity-70">{card.author.title}</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* RIGHT */}
          <div className="flex items-center pr-14">
            {card.images.slice(0, 4).map((img, i) => (
              <img
                key={i}
                src={img}
                className="w-[400px] h-[400px]  rounded-md"
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}