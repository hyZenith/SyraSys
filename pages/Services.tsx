"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type ServiceData = {
  id: string;
  label: string;
  headline: string;
  short: string;
  points: string[];
  statA: string;
  statB: string;
};

const services: ServiceData[] = [
  {
    id: "web",
    label: "Web Development",
    headline: "Conversion-first websites built for speed and scale.",
    short: "Pixel-precise interfaces, performant architecture, and SEO foundations for measurable growth.",
    points: ["Custom UI systems", "Core Web Vitals optimization", "CMS integration", "Analytics + funnel tracking"],
    statA: "4.8x",
    statB: "99.9%",
  },
  {
    id: "mobile",
    label: "Mobile Apps",
    headline: "Cross-platform mobile products users love to keep.",
    short: "Native-grade interaction patterns with stable backend sync for both iOS and Android.",
    points: ["React Native delivery", "Push and auth flows", "Offline-safe UX", "Store release support"],
    statA: "3.1x",
    statB: "45%",
  },
  {
    id: "crm",
    label: "Custom CRM",
    headline: "Business-specific CRM systems that remove operational friction.",
    short: "Data models, roles, and workflows designed around your exact sales and service process.",
    points: ["Pipeline automation", "Role dashboards", "Integrations and webhooks", "Data migration support"],
    statA: "60%",
    statB: "2.4x",
  },
  {
    id: "branding",
    label: "Branding",
    headline: "Identity systems that make your company instantly recognizable.",
    short: "From logos to reels and campaign visuals, we design cohesive brand experiences.",
    points: ["Logo and visual language", "Poster and social kits", "Motion reels", "Guideline documents"],
    statA: "90+",
    statB: "5 days",
  },
  {
    id: "automation",
    label: "Automation",
    headline: "Smart workflows that free your team from repetitive tasks.",
    short: "Automate repetitive operations and connect your stack with reliable event-based flows.",
    points: ["Internal process automation", "No-code and API flows", "Alerts and failovers", "Performance monitoring"],
    statA: "70%",
    statB: "24/7",
  },
];

export default function Services() {
  const featuredServices = services.slice(0, 3);

  return (
    <section id="services" className="bg-[#f4f5f4] px-4 py-8 text-white md:px-6 md:py-12">
      <div className="relative min-h-[calc(100vh-2rem)] overflow-hidden rounded-[30px] border border-white/10 bg-[#080b0d] p-6 shadow-[0_26px_80px_rgba(5,10,8,0.55)] md:p-9">
        <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(to_right,rgba(255,255,255,0.03)_0,rgba(255,255,255,0.03)_1px,transparent_1px,transparent_112px)]" />
        <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[#d7ff5f]/25 blur-3xl" />

        <div className="relative z-10">
          <CardStackCenterReveal services={featuredServices} />
        </div>
      </div>
    </section>
  );
}

type CardStackCenterRevealProps = {
  services: ServiceData[];
};

function CardStackCenterReveal({ services }: CardStackCenterRevealProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const stackRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const detailsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const mm = gsap.matchMedia();

    const ctx = gsap.context(() => {
      const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];
      const details = detailsRef.current.filter(Boolean) as HTMLDivElement[];

      if (!cards.length || !details.length) {
        return;
      }

      const cardMeta = [
        { left: 120, top: 40, w: 320, h: 440, baseTransform: "rotateX(55deg) rotateZ(-22deg) translateZ(80px)" },
        { left: 150, top: 90, w: 320, h: 440, baseTransform: "rotateX(55deg) rotateZ(-22deg) translateZ(-10px)" },
        { left: 180, top: 140, w: 320, h: 440, baseTransform: "rotateX(55deg) rotateZ(-22deg) translateZ(-120px)" },
      ];

      gsap.set(details, { autoAlpha: 0, x: 40 });
      gsap.set(details[0], { autoAlpha: 1, x: 0 });

      mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=3600",
            scrub: 1,
            pin: true,
          },
        });

        cards.forEach((card, i) => {
          const { left: cL, top: cT, w, h, baseTransform } = cardMeta[i];

          tl.call(() => setActiveIndex(i));

          tl.to(card, {
            rotateX: 0,
            rotateZ: 0,
            x: () => window.innerWidth / 2 - stackRef.current!.getBoundingClientRect().left - cL - w / 2,
            y: () => window.innerHeight / 2 - stackRef.current!.getBoundingClientRect().top - cT - h / 2,
            z: 350,
            scale: 1.15,
            duration: 1,
            ease: "power3.out",
          });

          tl.to(
            details[i],
            {
              autoAlpha: 1,
              x: 0,
              duration: 0.45,
            },
            "<"
          );

          tl.to(card, {
            transform: baseTransform,
            duration: 1,
            ease: "power3.inOut",
          });

          tl.to(
            details[i],
            {
              autoAlpha: 0,
              x: 40,
              duration: 0.35,
            },
            "<"
          );
        });
      });

      mm.add("(max-width: 1023px), (prefers-reduced-motion: reduce)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            once: true,
          },
        });

        tl.from(cards, {
          y: 60,
          autoAlpha: 0,
          stagger: 0.14,
          duration: 0.6,
          ease: "power2.out",
        }).to(details[0], { autoAlpha: 1, x: 0, duration: 0.35 }, "<+0.15");
      });
    }, containerRef);

    return () => {
      mm.revert();
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-[75vh] items-center justify-center lg:h-screen"
      style={{ perspective: "1700px" }}
    >
      <div className="grid w-full items-center gap-12 lg:grid-cols-[1fr_420px] lg:gap-20">
        <div ref={stackRef} className="relative mx-auto h-[520px] w-[520px] max-w-full" style={{ transformStyle: "preserve-3d" }}>
          <div
            ref={(el) => {
              if (el) cardsRef.current[0] = el;
            }}
            className="absolute left-[120px] top-[40px]
            w-[320px] h-[440px]
            rounded-3xl border border-white/20
            bg-white/10 backdrop-blur-xl
            shadow-[0_40px_100px_rgba(0,0,0,0.45)]
            will-change-transform"
            style={{
              transform: "rotateX(55deg) rotateZ(-22deg) translateZ(80px)",
            }}
          />

          <div
            ref={(el) => {
              if (el) cardsRef.current[1] = el;
            }}
            className="absolute left-[150px] top-[90px]
            w-[320px] h-[440px]
            rounded-3xl border border-white/15
            bg-white/5 backdrop-blur-lg
            shadow-[0_30px_80px_rgba(0,0,0,0.45)]
            will-change-transform"
            style={{
              transform: "rotateX(55deg) rotateZ(-22deg) translateZ(-10px)",
            }}
          />

          <div
            ref={(el) => {
              if (el) cardsRef.current[2] = el;
            }}
            className="absolute left-[180px] top-[140px]
            w-[320px] h-[440px]
            rounded-3xl border border-white/10
            bg-[#d7ff5f]
            shadow-[0_30px_90px_rgba(0,0,0,0.5)]
            will-change-transform"
            style={{
              transform: "rotateX(55deg) rotateZ(-22deg) translateZ(-120px)",
            }}
          />
        </div>

        <div className="relative h-[220px] w-full max-w-[420px]">
          <div
            ref={(el) => {
              if (el) detailsRef.current[0] = el;
            }}
            className="absolute"
          >
            <p className="mb-2 text-xs uppercase tracking-[0.25em] text-white/45">{services[0].label}</p>
            <h2 className="mb-3 text-3xl font-semibold">{services[0].headline}</h2>
            <p className="mb-5 text-white/70">{services[0].short}</p>
            <div className="flex gap-3 text-sm text-[#d7ff5f]">
              <span className={activeIndex === 0 ? "opacity-100" : "opacity-50"}>Impact {services[0].statA}</span>
              <span className={activeIndex === 0 ? "opacity-100" : "opacity-50"}>Reliability {services[0].statB}</span>
            </div>
          </div>

          <div
            ref={(el) => {
              if (el) detailsRef.current[1] = el;
            }}
            className="absolute"
          >
            <p className="mb-2 text-xs uppercase tracking-[0.25em] text-white/45">{services[1].label}</p>
            <h2 className="mb-3 text-3xl font-semibold">{services[1].headline}</h2>
            <p className="mb-5 text-white/70">{services[1].short}</p>
            <div className="flex gap-3 text-sm text-[#d7ff5f]">
              <span className={activeIndex === 1 ? "opacity-100" : "opacity-50"}>Adoption {services[1].statA}</span>
              <span className={activeIndex === 1 ? "opacity-100" : "opacity-50"}>Retention {services[1].statB}</span>
            </div>
          </div>

          <div
            ref={(el) => {
              if (el) detailsRef.current[2] = el;
            }}
            className="absolute"
          >
            <p className="mb-2 text-xs uppercase tracking-[0.25em] text-white/45">{services[2].label}</p>
            <h2 className="mb-3 text-3xl font-semibold">{services[2].headline}</h2>
            <p className="mb-5 text-white/70">{services[2].short}</p>
            <div className="flex gap-3 text-sm text-[#d7ff5f]">
              <span className={activeIndex === 2 ? "opacity-100" : "opacity-50"}>Scale {services[2].statA}</span>
              <span className={activeIndex === 2 ? "opacity-100" : "opacity-50"}>Velocity {services[2].statB}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


