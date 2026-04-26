"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowRight, ArrowUpRight, X } from "lucide-react";

type NavbarOpenProps = {
    onClose: () => void;
};

export default function NavbarOpen({ onClose }: NavbarOpenProps) {
    const overlayRef = useRef<HTMLDivElement>(null);
    const panelRef = useRef<HTMLDivElement>(null);
    const navRowsRef = useRef<(HTMLLIElement | null)[]>([]);
    const infoRef = useRef<(HTMLElement | null)[]>([]);
    const footerRef = useRef<HTMLElement>(null);

    const navItems = [
        { label: "Home", href: "#home", index: "01" },
        { label: "About Me", href: "#about", index: "02" },
        { label: "Works", href: "#portfolio", index: "03" },
        { label: "Insights", href: "#services", index: "04" },
    ];

    useEffect(() => {
        const navRows = navRowsRef.current.filter(Boolean) as HTMLLIElement[];
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
                navRows,
                { y: 30, autoAlpha: 0 },
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
        const navRows = navRowsRef.current.filter(Boolean) as HTMLLIElement[];
        const infoBlocks = infoRef.current.filter(Boolean) as HTMLElement[];

        const tl = gsap.timeline({
            onComplete: onClose,
        });

        tl.to([footerRef.current, ...infoBlocks, ...navRows], {
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

    useEffect(() => {
        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                handleClose();
            }
        };

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, []);

    return (
        <div ref={overlayRef} className="fixed inset-0 z-70 bg-black/55 backdrop-blur-md">
            <div className="absolute inset-0" onClick={handleClose} />

            <div
                ref={panelRef}
                className="relative mx-3 my-3 min-h-[calc(100dvh-1.5rem)] overflow-hidden rounded-[22px] border border-[#273349]/70 bg-[#020815] text-white shadow-[0_35px_90px_rgba(0,0,0,0.55)]"
            >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(24,39,67,0.55),transparent_38%),radial-gradient(circle_at_85%_100%,rgba(24,39,67,0.35),transparent_40%)]" />

                <div className="relative z-10 flex min-h-[calc(100dvh-1.5rem)] flex-col px-5 py-5 sm:px-7 sm:py-6 md:px-10 md:py-8">
                    <header className="flex items-center justify-between border-b border-white/10 pb-5">
                        <p className="text-lg font-semibold tracking-tight text-white/95">showcasy.</p>
                        <div className="flex items-center gap-3">
                            <a
                                href="#contact"
                                onClick={handleClose}
                                className="inline-flex h-10 items-center gap-2 rounded-full border border-white/20 px-4 text-sm text-white/90 transition-colors hover:bg-white/10"
                            >
                                Let&apos;s Talk
                                <ArrowRight className="h-4 w-4" strokeWidth={1.8} />
                            </a>
                            <button
                                type="button"
                                onClick={handleClose}
                                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/90 transition-colors hover:bg-white/10"
                                aria-label="Close menu"
                            >
                                <X className="h-4 w-4" strokeWidth={2} />
                            </button>
                        </div>
                    </header>

                    <main className="flex-1 py-8 md:py-10">
                        <nav>
                            <ul className="space-y-4 md:space-y-5">
                                {navItems.map((item) => (
                                    <li
                                        key={item.label}
                                        ref={(el) => {
                                            navRowsRef.current[navItems.indexOf(item)] = el;
                                        }}
                                        className="group flex items-center justify-between gap-6 md:gap-8"
                                    >
                                        <a
                                            href={item.href}
                                            onClick={handleClose}
                                            className="inline-flex items-end gap-2.5 text-[2.7rem] font-semibold leading-[1.02] tracking-[-0.022em] text-white transition-opacity hover:opacity-90 sm:text-[3.6rem] md:text-[4.9rem] lg:text-[5.25rem]"
                                        >
                                            {item.label}
                                            <span className="mb-2.5 text-[0.9rem] font-medium tracking-[0.08em] text-white/40 md:text-[1rem]">
                                                ({item.index})
                                            </span>
                                        </a>

                                        <a
                                            href={item.href}
                                            onClick={handleClose}
                                            className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/25 text-white/80 transition-all duration-300 group-hover:bg-white group-hover:text-[#020815] md:h-15 md:w-15"
                                            aria-label={`Go to ${item.label}`}
                                        >
                                            <ArrowRight className="h-5 w-5" strokeWidth={2} />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </main>

                    <footer
                        ref={footerRef}
                        className="grid gap-8 border-t border-white/10 pt-6 pb-2 text-white/75 md:grid-cols-2 md:items-end md:gap-10"
                    >
                        <section
                            ref={(el) => {
                                infoRef.current[0] = el;
                            }}
                        >
                            <p className="mb-4 text-[1.05rem] font-medium text-white/70">Follow me.</p>
                            <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-xs font-medium uppercase tracking-[0.08em] text-white/80">
                                <a href="#" className="inline-flex items-center gap-1.5 hover:text-white">
                                    Instagram
                                    <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} />
                                </a>
                                <a href="#" className="inline-flex items-center gap-1.5 hover:text-white">
                                    Behance
                                    <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} />
                                </a>
                                <a href="#" className="inline-flex items-center gap-1.5 hover:text-white">
                                    Twitter
                                    <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} />
                                </a>
                                <a href="#" className="inline-flex items-center gap-1.5 hover:text-white">
                                    Dribbble
                                    <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} />
                                </a>
                            </div>
                        </section>

                        <section
                            ref={(el) => {
                                infoRef.current[1] = el;
                            }}
                            className="md:justify-self-end md:text-right"
                        >
                            <p className="mb-4 text-[1.05rem] font-medium text-white/70">Stay connected w/ me.</p>
                            <form
                                onSubmit={(event) => event.preventDefault()}
                                className="group flex items-center border-b border-white/30 pb-2 md:min-w-68"
                            >
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
                                />
                                <button type="submit" className="text-white/80 transition-transform group-hover:translate-x-0.5">
                                    <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
                                </button>
                            </form>
                        </section>
                    </footer>
                </div>
            </div>
        </div>
    );
}