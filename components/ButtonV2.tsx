"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

type ButtonV2Props = {
	href: string;
	label: string;
	className?: string;
};

export default function ButtonV2({ href, label, className = "" }: ButtonV2Props) {
	const ctaRef = useRef<HTMLAnchorElement | null>(null);
	const ctaFillRef = useRef<HTMLSpanElement | null>(null);
	const ctaTrackRef = useRef<HTMLSpanElement | null>(null);
	const ctaLabelRef = useRef<HTMLSpanElement | null>(null);

	useEffect(() => {
		const cta = ctaRef.current;
		const fill = ctaFillRef.current;
		const track = ctaTrackRef.current;
		const labelEl = ctaLabelRef.current;

		if (!cta || !fill || !track || !labelEl) {
			return;
		}

		const iconNodes = Array.from(track.querySelectorAll("svg"));
		const collapsedWidth = 64;
		let iconLoopTween: gsap.core.Timeline | null = null;

		const ctx = gsap.context(() => {
			gsap.set(fill, { width: collapsedWidth });
			gsap.set(iconNodes, {
				opacity: (index) => (index === 0 ? 1 : 0),
				color: "#000000",
			});
			gsap.set(labelEl, { color: "#ffffff", autoAlpha: 1 });
		}, cta);

		const onEnter = () => {
			gsap.to(fill, {
				width: Math.max(cta.clientWidth - 8, collapsedWidth),
				duration: 0.42,
				ease: "power3.out",
			});

			gsap.to(labelEl, {
				autoAlpha: 0,
				duration: 0.2,
				ease: "power2.out",
			});

			gsap.to(iconNodes, {
				opacity: 1,
				color: "#000000",
				duration: 0.18,
				ease: "none",
			});

			iconLoopTween?.kill();
			iconLoopTween = gsap.timeline({ repeat: -1 });

			iconNodes.forEach((icon, index) => {
				const startAt = index * 0.1;
				iconLoopTween!
					.to(
						icon,
						{
							color: "#ffffff",
							duration: 0.12,
							ease: "none",
						},
						startAt
					)
					.to(
						icon,
						{
							color: "#000000",
							duration: 0.24,
							ease: "none",
						},
						startAt + 0.12
					);
			});
		};

		const onLeave = () => {
			iconLoopTween?.kill();
			iconLoopTween = null;

			gsap.to(fill, {
				width: collapsedWidth,
				duration: 0.36,
				ease: "power3.inOut",
			});

			gsap.to(iconNodes, {
				opacity: (index) => (index === 0 ? 1 : 0),
				color: "#000000",
				duration: 0.22,
				stagger: 0.03,
				ease: "none",
			});

			gsap.to(labelEl, {
				autoAlpha: 1,
				color: "#ffffff",
				duration: 0.24,
				ease: "power2.out",
			});
		};

		cta.addEventListener("mouseenter", onEnter);
		cta.addEventListener("mouseleave", onLeave);

		return () => {
			iconLoopTween?.kill();
			cta.removeEventListener("mouseenter", onEnter);
			cta.removeEventListener("mouseleave", onLeave);
			ctx.revert();
		};
	}, []);

	return (
		<a
			ref={ctaRef}
			href={href}
			className={`group relative inline-flex h-14 items-center overflow-hidden rounded-xl border border-[#202634] bg-[#141a26] pl-20 pr-5 shadow-[0_14px_28px_rgba(10,12,20,0.22)] transition-transform duration-300 hover:-translate-y-0.5 ${className}`}
		>
			<span ref={ctaFillRef} className="pointer-events-none absolute inset-y-1 left-1 z-20 overflow-hidden rounded-lg bg-[#d7ff5f]">
				<span ref={ctaTrackRef} className="absolute left-5 top-1/2 flex -translate-y-1/2 items-center gap-5 text-[#161616]">
					{Array.from({ length: 6 }).map((_, index) => (
						<svg
							key={index}
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							className="h-5 w-5 shrink-0 fill-current"
							aria-hidden="true"
						>
							<path d="M11 5H13V7H11V5Z" />
							<path d="M5 5H7V7H5V5Z" />
							<path d="M14 8H16V10H14V8Z" />
							<path d="M8 8H10V10H8V8Z" />
							<path d="M17 11H19V13H17V11Z" />
							<path d="M11 11H13V13H11V11Z" />
							<path d="M14 14H16V16H14V14Z" />
							<path d="M8 14H10V16H8V14Z" />
							<path d="M11 17H13V19H11V17Z" />
							<path d="M5 17H7V19H5V17Z" />
						</svg>
					))}
				</span>
			</span>

			<span ref={ctaLabelRef} className="relative z-10 text-base font-semibold tracking-tight text-white md:text-xl">
				{label}
			</span>
		</a>
	);
}
