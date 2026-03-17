"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import localFont from "next/font/local";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ppmori = localFont({
	src: "../public/fonts/PPMori-Regular.woff2",
	weight: "400",
});

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

const brands = ["OHMS", "JINO", "GREEN", "NBOK", "CWBANK"];

export default function Services() {
	const [active, setActive] = useState(services[0].id);

	const current = useMemo(
		() => services.find((service) => service.id === active) ?? services[0],
		[active]
	);

	return (
		<section id="services" className="ml-10 bg-[#f4f5f4] px-4 py-12 text-white min-h-screen">
			<div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[#080b0d]  p-6 shadow-[0_26px_80px_rgba(5,10,8,0.55)] md:p-9 min-h-[calc(100vh-2rem)]">
				<div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(to_right,rgba(255,255,255,0.03)_0,rgba(255,255,255,0.03)_1px,transparent_1px,transparent_112px)]" />
				<div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[#d7ff5f]/25 blur-3xl" />

				<div className="relative z-10">
					{/* <div className=" border-b border-white/10 md:pb-9">
						<p className="text-xs uppercase tracking-[0.28em] text-white/50">02 - Services</p>
						<h2 className="mt-3 text-5xl font-semibold leading-[0.9] tracking-[-0.03em] text-white md:text-7xl" style={{ fontFamily: ppmori.style.fontFamily }}>
							NEW ERA OF
							<br />
							<span className="text-[#d7ff5f]">DIGITAL SERVICES.</span>
						</h2>
					</div> */}

					<div className="grid gap-8 lg:grid-cols-[0.9fr_1.2fr_0.8fr] lg:items-center">
						<div>
							<div className="mb-5 flex flex-wrap gap-2">
								{services.map((service) => {
									const isActive = service.id === active;

									return (
										<button
											key={service.id}
											type="button"
											onClick={() => setActive(service.id)}
											className={`rounded-full border px-3 py-1.5 text-[10px] uppercase tracking-[0.12em] transition-colors md:text-[11px] ${
												isActive
													? "border-[#d7ff5f]/70 bg-[#d7ff5f]/15 text-[#ecffb0]"
													: "border-white/20 bg-white/5 text-white/65 hover:border-[#d7ff5f]/50 hover:text-white"
											}`}
										>
											{service.label}
										</button>
									);
								})}
							</div>

							<p className="max-w-[30ch] text-sm leading-relaxed text-white/65">
								Build once, scale confidently. Every service module is tailored to business outcomes and long-term maintainability.
							</p>

							<button
								type="button"
								className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#d7ff5f]/55 bg-[#d7ff5f]/10 px-5 py-2 text-sm font-medium text-[#e9ffaf] transition-colors hover:bg-[#d7ff5f]/18"
							>
								How this works
								<ArrowUpRight className="h-4 w-4" strokeWidth={2.2} />
							</button>
						</div>
						<div className="mx-auto w-full">
							<CardStackCenterReveal />
						</div>

						<div className="space-y-4">
							  <div className="rounded-2xl border border-white/10 bg-white/3 p-5">
								<p className="text-4xl font-semibold text-[#d7ff5f]" style={{ fontFamily: ppmori.style.fontFamily }}>
									{current.statA}
								</p>
								<p className="mt-1 text-sm text-white/60">delivery impact uplift</p>
							</div>

							  <div className="rounded-2xl border border-white/10 bg-white/3 p-5">
								<p className="text-4xl font-semibold text-[#d7ff5f]" style={{ fontFamily: ppmori.style.fontFamily }}>
									{current.statB}
								</p>
								<p className="mt-1 text-sm text-white/60">process confidence score</p>
							</div>
						</div>
					</div>


					{/* <div className="mt-10 border-t border-white/10 pt-6">
						<div className="grid grid-cols-2 gap-3 text-sm text-white/45 sm:grid-cols-3 lg:grid-cols-5">
							{brands.map((brand) => (
								<div key={brand} className="rounded-xl border border-white/10 bg-white/2 px-4 py-2 text-center tracking-wide">
									{brand}
								</div>
							))}
						</div>
					</div> */}
				</div>
			</div>
		</section>
	);
}

function CardStackCenterReveal() {
	const containerRef = useRef<HTMLDivElement>(null);
	const stackRef = useRef<HTMLDivElement>(null);
	const cardsRef = useRef<HTMLDivElement[]>([]);
	const detailsRef = useRef<HTMLDivElement[]>([]);

	useEffect(() => {
		const ctx = gsap.context(() => {
			const cards = cardsRef.current;
			const details = detailsRef.current;

			const cardMeta = [
				{ left: 120, top: 40, w: 320, h: 440, baseTransform: "rotateX(55deg) rotateZ(-22deg) translateZ(80px)" },
				{ left: 150, top: 90, w: 320, h: 440, baseTransform: "rotateX(55deg) rotateZ(-22deg) translateZ(-10px)" },
				{ left: 180, top: 140, w: 320, h: 440, baseTransform: "rotateX(55deg) rotateZ(-22deg) translateZ(-120px)" },
			];

			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: containerRef.current,
					start: "top top",
					end: "+=4200",
					scrub: 1,
					pin: true,
				},
			});

			cards.forEach((card, i) => {
				const { left: cL, top: cT, w, h, baseTransform } = cardMeta[i];

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
						opacity: 1,
						x: 0,
						duration: 0.5,
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
						opacity: 0,
						x: 40,
						duration: 0.4,
					},
					"<"
				);
			});
		}, containerRef);

		return () => ctx.revert();
	}, []);

	return (
		<section
			ref={containerRef}
			className="relative h-screen flex items-center justify-center"
			style={{ perspective: "1700px" }}
		>
			<div className="flex items-center gap-32">
				<div ref={stackRef} className="relative w-[520px] h-[520px]" style={{ transformStyle: "preserve-3d" }}>
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

				<div className="relative w-[420px]">
					<div
						ref={(el) => {
							if (el) detailsRef.current[0] = el;
						}}
						className="absolute opacity-0 translate-x-10"
					>
						<h2 className="text-3xl font-bold mb-3">Feature One</h2>
						<p className="text-white/70">First card details appear while the card is centered.</p>
					</div>

					<div
						ref={(el) => {
							if (el) detailsRef.current[1] = el;
						}}
						className="absolute opacity-0 translate-x-10"
					>
						<h2 className="text-3xl font-bold mb-3">Feature Two</h2>
						<p className="text-white/70">Second card details appear.</p>
					</div>

					<div
						ref={(el) => {
							if (el) detailsRef.current[2] = el;
						}}
						className="absolute opacity-0 translate-x-10"
					>
						<h2 className="text-3xl font-bold mb-3">Feature Three</h2>
						<p className="text-white/70">Third card details appear.</p>
					</div>
				</div>
			</div>
		</section>
	);
}



// "use client"

// import { useState } from "react"

// export default function CardStack3D() {

//   const [tilt, setTilt] = useState({ x: 0, y: 0 })

//   function handleMove(e: React.MouseEvent<HTMLDivElement>) {

//     const rect = e.currentTarget.getBoundingClientRect()

//     const x = e.clientX - rect.left
//     const y = e.clientY - rect.top

//     const rotateY = (x - rect.width / 2) / 40
//     const rotateX = -(y - rect.height / 2) / 40

//     setTilt({ x: rotateX, y: rotateY })
//   }

//   function reset() {
//     setTilt({ x: 0, y: 0 })
//   }

//   return (

//     <div
//       onMouseMove={handleMove}
//       onMouseLeave={reset}
//       className="flex items-center justify-center h-[520px] w-full"
//       style={{ perspective: "1400px" }}
//     >

//       <div
//         className="relative w-[420px] h-[420px]"
//         style={{
//           transformStyle: "preserve-3d",
//           transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`
//         }}
//       >

//         {/* CARD 1 */}

//         <div
//           className="absolute left-[80px] top-[20px] w-[240px] h-[340px]
//           rounded-3xl border border-white/20
//           bg-white/10 backdrop-blur-xl
//           shadow-[0_40px_80px_rgba(0,0,0,0.45)]"
//           style={{
//             transform: `
//               rotateX(55deg)
//               rotateZ(-22deg)
//               translateZ(60px)
//             `
//           }}
//         />

//         {/* CARD 2 */}

//         <div
//           className="absolute left-[100px] top-[70px] w-[240px] h-[340px]
//           rounded-3xl border border-white/15
//           bg-white/5 backdrop-blur-lg
//           shadow-[0_30px_70px_rgba(0,0,0,0.45)]"
//           style={{
//             transform: `
//               rotateX(55deg)
//               rotateZ(-22deg)
//               translateZ(-20px)
//             `
//           }}
//         />

//         {/* CARD 3 */}

//         <div
//           className="absolute left-[120px] top-[120px] w-[240px] h-[340px]
//           rounded-3xl border border-white/10
//           bg-[#d7ff5f]
//           shadow-[0_30px_80px_rgba(0,0,0,0.5)]"
//           style={{
//             transform: `
//               rotateX(55deg)
//               rotateZ(-22deg)
//               translateZ(-100px)
//             `
//           }}
//         />

//       </div>

//     </div>
//   )
// }

// "use client"

// import { useRef, useEffect } from "react"
// import gsap from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger"

// gsap.registerPlugin(ScrollTrigger)

// export default function CardStackCenterReveal() {

//   const containerRef = useRef<HTMLDivElement>(null)
//   const stackRef = useRef<HTMLDivElement>(null)
//   const cardsRef = useRef<HTMLDivElement[]>([])
//   const detailsRef = useRef<HTMLDivElement[]>([])

//   useEffect(() => {

//     const ctx = gsap.context(() => {

//       const cards = cardsRef.current
//       const details = detailsRef.current

//       // CSS absolute offsets and flat dimensions for each card (matches JSX)
//       const cardMeta = [
//         { left: 120, top: 40,  w: 320, h: 440, baseTransform: "rotateX(55deg) rotateZ(-22deg) translateZ(80px)" },
//         { left: 150, top: 90,  w: 320, h: 440, baseTransform: "rotateX(55deg) rotateZ(-22deg) translateZ(-10px)" },
//         { left: 180, top: 140, w: 320, h: 440, baseTransform: "rotateX(55deg) rotateZ(-22deg) translateZ(-120px)" },
//       ]

//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: "top top",
//           end: "+=4200",
//           scrub: 1,
//           pin: true
//         }
//       })

//       cards.forEach((card, i) => {

//         const { left: cL, top: cT, w, h, baseTransform } = cardMeta[i]

//         /* expand + center */

//         tl.to(card, {
//           rotateX: 0,
//           rotateZ: 0,
//           // Use stackRef (stable — never animated) + known card CSS offsets
//           // so the target doesn't shift as the card moves
//           x: () => window.innerWidth  / 2 - stackRef.current!.getBoundingClientRect().left - cL - w / 2,
//           y: () => window.innerHeight / 2 - stackRef.current!.getBoundingClientRect().top  - cT - h / 2,
//           z: 350,
//           scale: 1.15,
//           duration: 1,
//           ease: "power3.out"
//         })

//         tl.to(details[i], {
//           opacity: 1,
//           x: 0,
//           duration: 0.5
//         }, "<")

//         /* return */

//         tl.to(card, {
//           transform: baseTransform,
//           duration: 1,
//           ease: "power3.inOut"
//         })

//         tl.to(details[i], {
//           opacity: 0,
//           x: 40,
//           duration: 0.4
//         }, "<")

//       })

//     }, containerRef)

//     return () => ctx.revert()

//   }, [])

//   return (

//     <section
//       ref={containerRef}
//       className="relative h-screen flex items-center justify-center"
//       style={{ perspective: "1700px" }}
//     >

//       <div className="flex items-center gap-32">

//         {/* CARD STACK */}

//         <div
//           ref={stackRef}
//           className="relative w-[520px] h-[520px]"
//           style={{ transformStyle: "preserve-3d" }}
//         >

//           {/* CARD 1 */}
//           <div
//             ref={(el) => { if (el) cardsRef.current[0] = el }}
//             className="absolute left-[120px] top-[40px]
//             w-[320px] h-[440px]
//             rounded-3xl border border-white/20
//             bg-white/10 backdrop-blur-xl
//             shadow-[0_40px_100px_rgba(0,0,0,0.45)]
//             will-change-transform"
//             style={{
//               transform: "rotateX(55deg) rotateZ(-22deg) translateZ(80px)"
//             }}
//           />

//           {/* CARD 2 */}
//           <div
//             ref={(el) => { if (el) cardsRef.current[1] = el }}
//             className="absolute left-[150px] top-[90px]
//             w-[320px] h-[440px]
//             rounded-3xl border border-white/15
//             bg-white/5 backdrop-blur-lg
//             shadow-[0_30px_80px_rgba(0,0,0,0.45)]
//             will-change-transform"
//             style={{
//               transform: "rotateX(55deg) rotateZ(-22deg) translateZ(-10px)"
//             }}
//           />

//           {/* CARD 3 */}
//           <div
//             ref={(el) => { if (el) cardsRef.current[2] = el }}
//             className="absolute left-[180px] top-[140px]
//             w-[320px] h-[440px]
//             rounded-3xl border border-white/10
//             bg-[#d7ff5f]
//             shadow-[0_30px_90px_rgba(0,0,0,0.5)]
//             will-change-transform"
//             style={{
//               transform: "rotateX(55deg) rotateZ(-22deg) translateZ(-120px)"
//             }}
//           />

//         </div>

//         {/* DETAILS */}

//         <div className="relative w-[420px]">

//           <div
//             ref={(el) => { if (el) detailsRef.current[0] = el }}
//             className="absolute opacity-0 translate-x-10"
//           >
//             <h2 className="text-3xl font-bold mb-3">Feature One</h2>
//             <p className="text-white/70">
//               First card details appear while the card is centered.
//             </p>
//           </div>

//           <div
//             ref={(el) => { if (el) detailsRef.current[1] = el }}
//             className="absolute opacity-0 translate-x-10"
//           >
//             <h2 className="text-3xl font-bold mb-3">Feature Two</h2>
//             <p className="text-white/70">
//               Second card details appear.
//             </p>
//           </div>

//           <div
//             ref={(el) => { if (el) detailsRef.current[2] = el }}
//             className="absolute opacity-0 translate-x-10"
//           >
//             <h2 className="text-3xl font-bold mb-3">Feature Three</h2>
//             <p className="text-white/70">
//               Third card details appear.
//             </p>
//           </div>

//         </div>

//       </div>

//     </section>
//   )
// }