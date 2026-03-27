"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Mail, MapPin, X } from "lucide-react";

type NavbarOpenProps = {
    onClose: () => void;
};

export default function NavbarOpen({ onClose }: NavbarOpenProps) {
    const overlayRef = useRef<HTMLDivElement>(null);
    const panelRef = useRef<HTMLDivElement>(null);
    const navRef = useRef<(HTMLAnchorElement | null)[]>([]);
    const infoRef = useRef<(HTMLElement | null)[]>([]);
    const footerRef = useRef<HTMLElement>(null);

    const navItems = [
        { label: "Home", href: "#home" },
        { label: "About", href: "#about" },
        { label: "Work", href: "#portfolio" },
        { label: "Expertise", href: "#services" },
        { label: "Contact", href: "#contact" },
    ];

    useEffect(() => {
        const navLinks = navRef.current.filter(Boolean) as HTMLAnchorElement[];
        const infoBlocks = infoRef.current.filter(Boolean) as HTMLElement[];

        const tl = gsap.timeline();

        tl.fromTo(
            overlayRef.current,
            { autoAlpha: 0 },
            { autoAlpha: 1, duration: 0.28, ease: "power2.out" }
        )
            .fromTo(
                panelRef.current,
                { y: 36, scale: 0.98, autoAlpha: 0 },
                { y: 0, scale: 1, autoAlpha: 1, duration: 0.52, ease: "power3.out" },
                "<+0.05"
            )
            .fromTo(
                navLinks,
                { y: 28, autoAlpha: 0 },
                { y: 0, autoAlpha: 1, stagger: 0.06, duration: 0.45, ease: "power3.out" },
                "<+0.12"
            )
            .fromTo(
                infoBlocks,
                { y: 18, autoAlpha: 0 },
                { y: 0, autoAlpha: 1, stagger: 0.08, duration: 0.35, ease: "power2.out" },
                "<+0.1"
            )
            .fromTo(
                footerRef.current,
                { y: 14, autoAlpha: 0 },
                { y: 0, autoAlpha: 1, duration: 0.32, ease: "power2.out" },
                "<+0.08"
            );

        return () => {
            tl.kill();
        };
    }, []);

    const handleClose = () => {
        const navLinks = navRef.current.filter(Boolean) as HTMLAnchorElement[];
        const infoBlocks = infoRef.current.filter(Boolean) as HTMLElement[];

        const tl = gsap.timeline({
            onComplete: onClose,
        });

        tl.to([footerRef.current, ...infoBlocks, ...navLinks], {
            y: 10,
            autoAlpha: 0,
            stagger: 0.025,
            duration: 0.2,
            ease: "power2.in",
        })
            .to(
                panelRef.current,
                {
                    y: 24,
                    scale: 0.985,
                    autoAlpha: 0,
                    duration: 0.24,
                    ease: "power2.inOut",
                },
                "<+0.04"
            )
            .to(
                overlayRef.current,
                {
                    autoAlpha: 0,
                    duration: 0.18,
                    ease: "power1.inOut",
                },
                "<"
            );
    };

    return (
        <div ref={overlayRef} className="fixed inset-0 z-70 bg-black/55 backdrop-blur-md">
            <div className="absolute inset-0" onClick={handleClose} />

            <div ref={panelRef} className="relative mx-3 my-3 min-h-[calc(100dvh-1.5rem)] overflow-hidden rounded-[28px] border border-white/10 bg-[#040505] text-white shadow-[0_35px_90px_rgba(0,0,0,0.55)]">
                <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(to_right,rgba(255,255,255,0.035)_0,rgba(255,255,255,0.035)_1px,transparent_1px,transparent_120px)] opacity-35" />

                <button
                    type="button"
                    onClick={handleClose}
                    className="absolute right-5 top-5 z-20 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-black transition-transform hover:scale-105"
                    aria-label="Close menu"
                >
                    <X className="h-4 w-4" strokeWidth={2.2} />
                </button>

                <div className="relative z-10 grid min-h-[calc(100dvh-1.5rem)] grid-rows-[1fr_auto] px-6 py-8 md:px-10 md:py-10">
                    <div className="grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">
                        <nav className="pl-1 md:pl-4">
                            <ul className="space-y-1">
                                {navItems.map((item) => (
                                    <li key={item.label}>
                                        <a
                                            ref={(el) => {
                                                navRef.current[navItems.indexOf(item)] = el;
                                            }}
                                            href={item.href}
                                            onClick={handleClose}
                                            className="inline-block text-[2.25rem] font-semibold uppercase leading-[1.08] tracking-[-0.01em] text-white/92 transition-colors hover:text-white sm:text-[2.7rem] md:text-[3.1rem]"
                                        >
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        <div className="md:justify-self-end md:pr-10">
                            <div className="space-y-8 text-white/75">
                                <section
                                    ref={(el) => {
                                        infoRef.current[0] = el;
                                    }}
                                    className="flex items-start gap-4"
                                >
                                    <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/90">
                                        <Mail className="h-4 w-4" strokeWidth={1.8} />
                                    </span>
                                    <div>
                                        <p className="text-lg font-medium text-white">Quick contact</p>
                                        <p className="mt-1 text-sm text-white/60">Phone: +1 234 567 8910</p>
                                        <p className="text-sm text-white/60">Email: info@syrasys.com</p>
                                    </div>
                                </section>

                                <section
                                    ref={(el) => {
                                        infoRef.current[1] = el;
                                    }}
                                    className="flex items-start gap-4"
                                >
                                    <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/90">
                                        <MapPin className="h-4 w-4" strokeWidth={1.8} />
                                    </span>
                                    <div>
                                        <p className="text-lg font-medium text-white">Contact address</p>
                                        <p className="mt-1 text-sm text-white/60">Chiring Sapori,</p>
                                        <p className="text-sm text-white/60">Dibrugarh, 786002</p>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>

                    <footer ref={footerRef} className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-5 text-white/80 md:flex-row md:items-center md:justify-between">
                        <div className="flex items-center gap-5 text-sm">
                            <a href="#" className="hover:text-white">Fb.</a>
                            <a href="#" className="hover:text-white">Ig.</a>
                            <a href="#" className="hover:text-white">Tw.</a>
                            <a href="#" className="hover:text-white">Be.</a>
                        </div>
                        <p className="text-sm">
                            Let&apos;s make something great <span className="font-semibold text-white">work together?</span>
                        </p>
                    </footer>
                </div>
            </div>
        </div>
    );
}