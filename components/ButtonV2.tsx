"use client";

import React, { useLayoutEffect, useRef } from "react";
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
	const iconLoopTweenRef = useRef<gsap.core.Timeline | null>(null);
	const isHoveredRef = useRef(false);

	useLayoutEffect(() => {
		const cta = ctaRef.current;
		const fill = ctaFillRef.current;
		const track = ctaTrackRef.current;
		const labelEl = ctaLabelRef.current;

		if (!cta || !fill || !track || !labelEl) {
			return;
		}

		const iconNodes = Array.from(track.querySelectorAll("svg"));
		const collapsedWidth = 64;

		const ctx = gsap.context(() => {
			gsap.set(fill, { width: collapsedWidth });
			gsap.set(iconNodes, {
				opacity: (index) => (index === 0 ? 1 : 0),
				color: "#000000",
			});
			gsap.set(labelEl, { color: "#ffffff" });
			gsap.set(cta, { y: 0 });
		}, cta);

		const buildIconLoop = () => {
			const tl = gsap.timeline({ repeat: -1 });
			iconNodes.forEach((icon, index) => {
				const startAt = index * 0.1;
				tl.to(
					icon,
					{
						color: "#ffffff",
						duration: 0.17,
						ease: "none",
					},
					startAt
				).to(
					icon,
					{
						color: "#000000",
						duration: 0.34,
						ease: "none",
					},
					startAt + 0.17
				);
			});
			return tl;
		};

		const animateIn = () => {
			if (isHoveredRef.current) return;
			isHoveredRef.current = true;

			gsap.to(cta, {
				y: -2,
				duration: 0.3,
				ease: "power2.out",
				overwrite: "auto",
			});

			gsap.to(fill, {
				width: Math.max(cta.clientWidth - 8, collapsedWidth),
				duration: 0.6,
				ease: "power3.out",
				overwrite: "auto",
			});

			gsap.to(iconNodes, {
				opacity: 1,
				duration: 0.26,
				ease: "none",
				overwrite: "auto",
				onComplete: () => {
					if (isHoveredRef.current && !iconLoopTweenRef.current) {
						iconLoopTweenRef.current = buildIconLoop();
					}
				},
			});
		};

		const animateOut = () => {
			if (!isHoveredRef.current) return;
			isHoveredRef.current = false;

			iconLoopTweenRef.current?.kill();
			iconLoopTweenRef.current = null;

			gsap.to(cta, {
				y: 0,
				duration: 0.4,
				ease: "power2.out",
				overwrite: "auto",
			});

			gsap.to(fill, {
				width: collapsedWidth,
				duration: 0.52,
				ease: "power3.inOut",
				overwrite: "auto",
			});

			gsap.to(iconNodes, {
				opacity: (index) => (index === 0 ? 1 : 0),
				color: "#000000",
				duration: 0.31,
				ease: "none",
				overwrite: "auto",
			});
		};

		const onPointerEnter = (e: PointerEvent) => {
			if (e.pointerType === "touch") return;
			animateIn();
		};

		const onPointerLeave = (e: PointerEvent) => {
			if (e.pointerType === "touch") return;
			animateOut();
		};

		cta.addEventListener("pointerenter", onPointerEnter);
		cta.addEventListener("pointerleave", onPointerLeave);

		return () => {
			iconLoopTweenRef.current?.kill();
			cta.removeEventListener("pointerenter", onPointerEnter);
			cta.removeEventListener("pointerleave", onPointerLeave);
			ctx.revert();
		};
	}, []);

	return (
		<a
			ref={ctaRef}
			href={href}
			className={`group relative inline-flex h-14 items-center overflow-hidden rounded-xl border border-[#202634] bg-[#141a26] pl-20 pr-5 shadow-[0_14px_28px_rgba(10,12,20,0.22)] ${className}`}
		>
			{/* Label is BEHIND (z-0) — always visible, gets covered by green fill on hover */}
			<span
				ref={ctaLabelRef}
				className="pointer-events-none relative z-0 text-base font-semibold tracking-tight text-white md:text-xl"
			>
				{label}
			</span>

			{/* Green fill is ON TOP (z-10) — slides in to cover label, slides out to reveal it */}
			<span
				ref={ctaFillRef}
				className="pointer-events-none absolute inset-y-1 left-1 z-10 overflow-hidden rounded-lg bg-[#d7ff5f]"
			>
				<span
					ref={ctaTrackRef}
					className="pointer-events-none absolute left-5 top-1/2 flex -translate-y-1/2 items-center gap-5 text-[#161616]"
				>
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
		</a>
	);
}