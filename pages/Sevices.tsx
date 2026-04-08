"use client"
import React, { useEffect, useRef} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from 'next/link';

const cardsData = [
  {
    id: "01",
    title: "Branding that drives conversion & funding.",
    desc: "We clarify your positioning, define a distinctive tone of voice, and build a visual system that works across acquisition and product. Each sprint ships a robust logo, pragmatic brand guidelines, and a social kit so you can launch fast. The goal is simple: perceived value up.",
    color: "hsl(247, 56%, 42%)",
    quote: "Working with Brand Appart has been an absolute pleasure. Beyond their creativity and professionalism, there’s a real sense of kindness and care in everything they do. The team is always open, generous, and never gets stuck on small details, they never say no. I was truly impressed by their reliability, flexibility, and collaborative spirit. I couldn’t recommend them more!",
    author: {
      name: "Jérémy Bendayan",
      title: "Co-founder & COO @Jaws Group",
      img: "https://cdn.prod.website-files.com/67f7891166d9b83b9231109e/68403ea61d62eda6b245af20_1738708560978.avif"
    },
    images: [
      "https://cdn.prod.website-files.com/67f7891166d9b83b9231109e/68e622e1f900620069168863_branding-01.avif",
      "https://cdn.prod.website-files.com/67f7891166d9b83b9231109e/68e622e11dd5b6cd8f6f8560_branding-02.avif",
      "https://cdn.prod.website-files.com/67f7891166d9b83b9231109e/68e622e1186f7124847bd445_branding-03.avif",
      "https://cdn.prod.website-files.com/67f7891166d9b83b9231109e/68e622e0f43b55dc529e97b9_branding-04.avif",
      "https://cdn.prod.website-files.com/67f7891166d9b83b9231109e/68e622e103809778f67dd98c_branding-05.avif"
    ]
  },
  {
    id: "02",
    title: "Product experiences users adopt & keep using",
    desc: "We start from business goals, map the critical journeys, and prototype what actually moves the needle. Every sprint ships clear flows, a reusable UI library, and a dev-ready. Expect time-to-value down, UX friction down, retention/NPS up.",
    color: "#ff7722",
    quote: "A huge thank you to the entire Brand Appart team for your outstanding work on our rebranding! We’re thrilled to have you as an integral part of the Incard team, and we can’t wait to reveal what’s coming next.",
    author: {
      name: "Théo Cesarini",
      title: "CEO & Co-Founder @Incard & @Fundree",
      img: "https://cdn.prod.website-files.com/67f7891166d9b83b9231109e/683df0223365b8119da39098_1722618592452.avif"
    },
    images: [
      "https://cdn.prod.website-files.com/67f7891166d9b83b9231109e/68e633760e1dd0f55c0e7c0a_product-01.avif",
      "https://cdn.prod.website-files.com/67f7891166d9b83b9231109e/68e63376f869c68f5cea9df4_product-02.avif",
      "https://cdn.prod.website-files.com/67f7891166d9b83b9231109e/68e6337695e0b1cfdaefcf26_product-03.avif",
      "https://cdn.prod.website-files.com/67f7891166d9b83b9231109e/68e6337619312f05f66e3d5f_product-04.avif",
      "https://cdn.prod.website-files.com/67f7891166d9b83b9231109e/68e6337651246334ea0392df_product-05.avif"
    ]
  },
  {
    id: "03",
    title: "Web Design for growing teams & business.",
    desc: "We align messaging, page architecture, and UI. You get clear structure, sections. The site loads fast, tells the right story, and pushes to action without dev firefighting. Your team gets a scalable base they can evolve without calling us for every change.",
    color: "#ff3c34",
    quote: "I’ve worked with Brand Appart on multiple projects website development, landing pages for branding, and PowerPoint presentations. I love how flexible, fast, and professional the team is. That speed and agility are exactly what we needed at Ircam Amplify.",
    author: {
      name: "Alexis Botaya",
      title: "Managing director @Sound Experience",
      img: "https://cdn.prod.website-files.com/67f7891166d9b83b9231109e/683df55bfbee02637c53da16_1664138677695.avif"
    },
    images: [
      "https://cdn.prod.website-files.com/67f7891166d9b83b9231109e/68e63541167dd0ff79e0f7c6_webdesign-01.avif",
      "https://cdn.prod.website-files.com/67f7891166d9b83b9231109e/68e63541b8dc1bbd7e988323_webdesign-02.avif",
      "https://cdn.prod.website-files.com/67f7891166d9b83b9231109e/68e6354120e45d0ecfb10fb4_webdesign-03.avif",
      "https://cdn.prod.website-files.com/67f7891166d9b83b9231109e/68e6354124be687757a781ef_webdesign-04.avif",
      "https://cdn.prod.website-files.com/67f7891166d9b83b9231109e/68e63541ae1384d40a6368a5_webdesign-05.avif"
    ]
  },
  {
    id: "04",
    title: "Investor-proof decks that raise faster.",
    desc: "We craft the narrative that gets meetings and a precise ask. Design serves the story: readable numbers, rhythm across slides, and versions for teaser/one-pager. Your deck can be pitched in 5 minutes, read solo, and generates faster responses.",
    color: "#785f47",
    quote: null,
    author: null,
    images: [
      "https://cdn.prod.website-files.com/67f7891166d9b83b9231109e/68e635aa0286520b44dea001_pitch-01.avif"
    ]
  }
];

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }
  }, []);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isMobile || reducedMotion) return;

    const cards = cardsRef.current.filter((c): c is HTMLDivElement => c !== null);
    
    // Set initial 3D positions for the cards
    cards.forEach((card, i) => {
      gsap.set(card, {
        yPercent: i * 11,
        z: i * -34,
        transformOrigin: "50% 0%",
      });
    });

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 10%",
          end: "+=300%",
          pin: true,
          scrub: true,
        },
      });

      cards.forEach((card, index) => {
        if (index === cards.length - 1) return; // Last card stays visible

        // The top card moves up, out and rotates backwards (away from the camera at bottom)
        tl.to(
          card,
          {
            yPercent: -115,
            rotationX: 14,
            z: 0,
            ease: "power1.inOut",
          },
          index
        );

        // Every subsequent card steps up by one unit concurrently
        cards.slice(index + 1).forEach((nextCard, j) => {
          tl.to(
            nextCard,
            {
              yPercent: j * 11, 
              z: j * -34,       
              ease: "power1.inOut",
            },
            index
          );
        });
      });

      return () => {
        tl.kill();
      };
    });

    return () => mm.revert();
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    const cursor = cursorRef.current;

    const onMouseMove = (e: MouseEvent) => {
      if (!cursor || !container) return;
      
      const rect = container.getBoundingClientRect();
      // Calculate coordinates relative to the container for the absolute cursor
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      gsap.to(cursor, {
        x,
        y,
        duration: 0.1,
        ease: "power2.out"
      });
    };

    const onMouseEnter = () => {
      gsap.to(cursor, { opacity: 1, scale: 1, duration: 0.3 });
    };

    const onMouseLeave = () => {
      gsap.to(cursor, { opacity: 0, scale: 0.5, duration: 0.3 });
    };

    if (container) {
      container.addEventListener("mousemove", onMouseMove);
      container.addEventListener("mouseenter", onMouseEnter);
      container.addEventListener("mouseleave", onMouseLeave);
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", onMouseMove);
        container.removeEventListener("mouseenter", onMouseEnter);
        container.removeEventListener("mouseleave", onMouseLeave);
      }
    };
  }, []);

  return (
    <section className="bg-[#f6f3ec] text-black overflow-hidden min-h-screen font-sans">
      <div className="pt-24 pb-4 px-6 lg:px-20 max-w-[1264px] mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
          <span className="text-gray-500 block mb-2">What we ship.</span>
          Our ways to move fast
        </h2>
      </div>

      <div 
        ref={containerRef} 
        className="relative w-full h-auto md:h-[800px] flex items-start justify-center cursor-none pb-24 md:pb-0"
      >
        {/* Hovering Custom Cursor */}
        <div 
          ref={cursorRef} 
          className="hidden md:flex absolute top-0 left-0 w-36 h-36 pointer-events-none rounded-full bg-white text-black z-50 flex-col items-center justify-center text-center p-4 transform -translate-x-1/2 -translate-y-1/2 opacity-0 mix-blend-exclusion"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.15em] mb-2 leading-tight">See our <br/>case studies</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 12 13" fill="none">
            <path d="M10 6.2973L2 6.2973" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M7.50014 8.79742C7.50014 8.79742 10.0001 6.9562 10.0001 6.2974C10.0001 5.63861 7.50012 3.79742 7.50012 3.79742" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
        </div>

        {/* 3D Stack Wrapper */}
        <div className="relative w-full max-w-[1264px] mx-auto px-4 md:px-0 h-auto md:h-[735px] [perspective:1500px] flex flex-col md:block gap-8 md:gap-0 mt-8 md:mt-16">
          {cardsData.map((card, index) => {
            const zIndex = cardsData.length - index;
            return (
              <div
                key={card.id}
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
                className="w-full h-auto md:h-[735px] md:absolute md:top-0 md:left-0 rounded-[2.5rem] p-8 md:p-14 group flex flex-col shadow-2xl"
                style={{
                  backgroundColor: card.color,
                  zIndex: zIndex,
                }}
              >
                <Link href="/works" className="absolute inset-0 z-0 block" aria-label={`View case studies for ${card.title}`}></Link>
                
                <div className="relative z-10 w-full h-full flex flex-col md:flex-row pointer-events-none">
                  {/* Left Column (Text Content) */}
                  <div className="flex flex-col justify-between w-full md:w-[45%] h-full">
                    <div>
                      <div className="text-3xl md:text-5xl font-medium tracking-tighter mb-6 md:mb-10 opacity-70">
                        ({card.id})
                      </div>
                      <h3 className="text-3xl md:text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-8 pr-4">
                        {card.title}
                      </h3>
                    </div>
                    <div className="text-lg md:text-2xl font-medium opacity-90 leading-snug md:leading-normal mb-8 md:mb-0">
                      <p>{card.desc}</p>
                    </div>
                  </div>

                  {/* Right Column (Quote & Images) */}
                  <div className="flex flex-col justify-between w-full md:w-[55%] h-full pl-0 md:pl-12">
                    <div className="mb-10 md:mb-0 h-auto md:h-1/2 flex items-center pt-2">
                      {card.quote && (
                        <div className="pointer-events-auto">
                          <blockquote className="text-[15px] md:text-[17px] mb-8 leading-relaxed font-medium">
                            {card.quote}
                          </blockquote>
                          <div className="flex items-center gap-4">
                            {card.author?.img && (
                              <div className="w-14 h-14 rounded-2xl overflow-hidden shrink-0">
                                <img
                                  src={card.author.img}
                                  alt={card.author.name}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            )}
                            <div>
                              <span className="block font-bold text-lg leading-tight">{card.author?.name}</span>
                              <span className="block text-sm opacity-80 mt-1">
                                {card.author?.title}
                              </span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Image Gallery */}
                    <div className="w-full h-auto mt-auto pointer-events-auto">
                      <div className="flex gap-4 overflow-x-auto pb-4 pt-4 snap-x hide-scrollbar mask-edges" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                        {card.images.map((img, imgIdx) => (
                          <div key={imgIdx} className="w-[85%] md:min-w-[280px] md:w-[320px] h-[220px] md:h-[260px] rounded-2xl overflow-hidden snap-start shrink-0 relative shadow-lg">
                            <img
                              src={img}
                              alt={`${card.title} visual ${imgIdx + 1}`}
                              className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                              loading="lazy"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Scroll Spacing buffer */}
      <div className="h-[20vh]"></div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
}