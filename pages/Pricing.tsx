"use client";

import { useMemo, useState } from "react";
import { ArrowRight, ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";
import localFont from "next/font/local";

const ppmori = localFont({
    src: "../public/fonts/PPMori-Regular.woff2",
    weight: "400",
});

type PackageTier = {
    name: string;
    price: string;
    timeline: string;
    featured?: boolean;
    description: string;
    includes: string[];
};

type ServiceConfig = {
    id: string;
    label: string;
    caption: string;
    packages: PackageTier[];
};

const pricingCatalog: ServiceConfig[] = [
    {
        id: "web",
        label: "Web Development",
        caption: "Launch-ready websites engineered for speed, scale, and conversion.",
        packages: [
            {
                name: "Landing Sprint",
                price: "$1,200",
                timeline: "2-3 weeks",
                description: "Perfect for startups that need a clean conversion-first launch.",
                includes: ["Up to 5 pages", "Responsive UI", "Basic SEO setup", "Contact forms"],
            },
            {
                name: "Business Platform",
                price: "$2,900",
                timeline: "4-6 weeks",
                featured: true,
                description: "Scalable website architecture with stronger customer journeys.",
                includes: ["Up to 12 pages", "CMS integration", "Advanced animations", "Performance optimization"],
            },
            {
                name: "Custom Ecosystem",
                price: "$5,500",
                timeline: "6-10 weeks",
                description: "For brands needing custom flows, dashboards, and integrations.",
                includes: ["Custom architecture", "Role-based dashboards", "API integrations", "Analytics setup"],
            },
        ],
    },
    {
        id: "mobile",
        label: "Mobile Apps",
        caption: "Cross-platform apps with smooth UX and production-grade foundations.",
        packages: [
            {
                name: "MVP App",
                price: "$3,500",
                timeline: "4-6 weeks",
                description: "For validating features quickly with a clean user experience.",
                includes: ["iOS + Android", "Authentication", "Core screens", "Push notifications"],
            },
            {
                name: "Business App",
                price: "$6,800",
                timeline: "7-10 weeks",
                featured: true,
                description: "For teams that need robust app flows and backend sync.",
                includes: ["Payment integration", "Offline support", "Admin panel", "QA testing"],
            },
            {
                name: "Enterprise App",
                price: "$11,500",
                timeline: "10-14 weeks",
                description: "For complex products with multi-role logic and deep integrations.",
                includes: ["Multi-tenant architecture", "Advanced security", "3rd-party integrations", "App store release"],
            },
        ],
    },
    {
        id: "crm",
        label: "Custom CRM",
        caption: "Purpose-built CRM systems tailored to your sales and operations process.",
        packages: [
            {
                name: "CRM Core",
                price: "$4,000",
                timeline: "4-7 weeks",
                description: "For teams replacing spreadsheets with centralized workflows.",
                includes: ["Lead pipelines", "Custom fields", "Team permissions", "Reporting basics"],
            },
            {
                name: "CRM Pro",
                price: "$8,900",
                timeline: "8-12 weeks",
                featured: true,
                description: "For growth-stage teams automating sales and service operations.",
                includes: ["Workflow automation", "Email/SMS triggers", "Role dashboards", "API webhooks"],
            },
            {
                name: "CRM Command",
                price: "$14,500",
                timeline: "12-16 weeks",
                description: "For enterprises requiring advanced modules and full data control.",
                includes: ["Custom modules", "Deep integrations", "Data migration", "Advanced analytics"],
            },
        ],
    },
    {
        id: "branding",
        label: "Branding",
        caption: "Visual systems that make your company memorable across digital channels.",
        packages: [
            {
                name: "Brand Starter",
                price: "$900",
                timeline: "1-2 weeks",
                description: "For founders establishing a credible, consistent identity.",
                includes: ["Logo concepts", "Color palette", "Typography guide", "Social avatar kit"],
            },
            {
                name: "Brand Momentum",
                price: "$2,400",
                timeline: "3-4 weeks",
                featured: true,
                description: "For teams launching campaigns with strong visual direction.",
                includes: ["Logo system", "Poster pack", "Motion reels", "Brand guideline PDF"],
            },
            {
                name: "Brand Signature",
                price: "$4,200",
                timeline: "4-6 weeks",
                description: "For brands that need high-impact creative across every touchpoint.",
                includes: ["Campaign art direction", "Premium motion assets", "Print + digital kit", "Launch support"],
            },
        ],
    },
    {
        id: "automation",
        label: "Automation",
        caption: "Smart automations that remove repetitive work and improve execution speed.",
        packages: [
            {
                name: "Flow Start",
                price: "$1,100",
                timeline: "1-2 weeks",
                description: "For small teams automating repetitive operations quickly.",
                includes: ["2 automation flows", "Tool integration", "Basic alerts", "Documentation"],
            },
            {
                name: "Flow Engine",
                price: "$2,800",
                timeline: "3-5 weeks",
                featured: true,
                description: "For teams orchestrating multi-step workflows across platforms.",
                includes: ["6 automation flows", "CRM + forms sync", "Exception handling", "Team training"],
            },
            {
                name: "Flow Intelligence",
                price: "$5,400",
                timeline: "5-8 weeks",
                description: "For scaling businesses that need intelligent end-to-end automation.",
                includes: ["Advanced workflow logic", "AI-assisted routing", "Custom dashboards", "Ongoing optimization"],
            },
        ],
    },
];

export default function Pricing() {
    const [activeService, setActiveService] = useState(pricingCatalog[0].id);

    const selectedService = useMemo(
        () => pricingCatalog.find((service) => service.id === activeService) ?? pricingCatalog[0],
        [activeService]
    );

    const featuredPackage = useMemo(
        () => selectedService.packages.find((item) => item.featured) ?? selectedService.packages[0],
        [selectedService]
    );

    return (
        <section id="pricing" className="w-full  bg-[#f4f5f4] p-4 text-[#0d0f0e] shadow-[0_24px_60px_rgba(0,0,0,0.08)] ">
            <div className=" ml-10   rounded-3xl bg-[#b0dbb0] p-5 ring-1 ring-[#e7ebe7] md:p-7">
                <header className="mb-7 ml-10 flex items-center justify-between">
                    <h2 className="text-lg font-semibold tracking-tight md:text-xl">SyraSys Pricing</h2>
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 rounded-full bg-[#0d1010] px-4 py-2 text-xs font-medium uppercase tracking-[0.15em] text-[#eaf9d4] transition-colors hover:bg-[#0f1512]"
                    >
                        Start project
                        <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.4} />
                    </a>
                </header>

                <div className="grid gap-6 lg:grid-cols-[0.95fr_1.35fr]">
                    <div className="flex flex-col ml-10">
                        <p className="mb-4 text-[11px] uppercase tracking-[0.28em] text-[#5a6a63]">03 - Pricing</p>
                        <h3 className="max-w-[18ch] text-4xl font-semibold leading-[0.95] tracking-[-0.02em] md:text-6xl" style={{ fontFamily: ppmori.style.fontFamily }}>
                            Together, lets build something unforgettable.
                        </h3>
                        <p className="mt-5 max-w-[34ch] text-sm leading-relaxed text-[#5d6561] md:text-[15px]">
                            Select any service to reveal dedicated packages instantly. Minimal structure, futuristic aesthetics, and clear delivery scopes.
                        </p>

                        <button
                            type="button"
                            className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-[#0e1111] px-5 py-2.5 text-sm font-medium text-white shadow-[0_10px_30px_rgba(0,0,0,0.2)] transition-transform hover:-translate-y-0.5"
                        >
                            Learn more
                            <ArrowRight className="h-4 w-4" strokeWidth={2.6} />
                        </button>
                    </div>

                    <div>
                        <div className="mb-4 flex flex-wrap gap-2">
                            {pricingCatalog.map((service) => {
                                const isActive = selectedService.id === service.id;

                                return (
                                    <button
                                        key={service.id}
                                        type="button"
                                        onClick={() => setActiveService(service.id)}
                                        className={`rounded-full border px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.12em] transition-colors md:text-[11px] ${
                                            isActive
                                                ? "border-[#8ce0b2] bg-[#133125] text-[#c9f7de]"
                                                : "border-[#20352b] bg-[#d7ead7] text-[#1d3327] hover:border-[#2a5a42] hover:text-[#102117]"
                                        }`}
                                    >
                                        {service.label}
                                    </button>
                                );
                            })}
                        </div>

                        <div className="relative rounded-[22px] bg-[#0f1211] px-5 pb-5 pt-4 text-white shadow-[0_22px_60px_rgba(4,8,7,0.45)] md:px-6 md:pb-6 md:pt-5">

                            <div className="relative overflow-visible rounded-[18px] bg-[#121615] p-3">
                                <article
                                    key={`${selectedService.id}-floating-${selectedService.packages[0].name}`}
                                    className="rounded-[18px] border border-[#9fd6bc] bg-[#e6f2eb] p-4 text-[#1f2a25] shadow-[0_20px_35px_rgba(5,20,11,0.25)] transition-all flex min-h-80 flex-col md:absolute md:left-0 md:top-1/2 md:z-20 md:w-[46%] md:-translate-x-[24%] md:-translate-y-1/2"
                                >
                                    <div className="mb-3 flex items-center justify-between">
                                        <div className="flex items-center gap-1.5">
                                            {[0, 1, 2, 3, 4].map((dot) => (
                                                <span
                                                    key={dot}
                                                    className={`h-1.5 w-1.5 rounded-full ${dot <= 2 ? "bg-[#4d6f5d]" : "bg-[#bfd4c8]"}`}
                                                />
                                            ))}
                                        </div>
                                        <span className="rounded-full bg-white/85 px-2 py-1 text-[9px] uppercase tracking-[0.15em] text-[#325543]">Plan</span>
                                    </div>

                                    <p className="text-[10px] uppercase tracking-[0.16em] text-[#51695c]">{selectedService.packages[0].timeline}</p>
                                    <h5 className="mt-2 text-base font-semibold text-[#1f2a25]">{selectedService.packages[0].name}</h5>
                                    <p className="mt-1 text-xl font-semibold text-[#1f2a25]" style={{ fontFamily: ppmori.style.fontFamily }}>
                                        {selectedService.packages[0].price}
                                    </p>
                                    <p className="mt-2 text-xs leading-relaxed text-[#4f6258]">
                                        Demo scope: tailored implementation with structured handoff, quality checks, and support guidance to help your team ship faster.
                                    </p>
                                    <ul className="mt-3 space-y-2">
                                        {selectedService.packages[0].includes.slice(0, 4).map((item) => (
                                            <li key={item} className="flex items-start gap-2 text-xs text-[#4f6258]">
                                                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#3d8c67]" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>

                                    <button
                                        type="button"
                                        className="mt-auto pt-4 inline-flex items-center justify-center rounded-full bg-[#123023] px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#d8f9e9] transition-colors hover:bg-[#163c2b]"
                                    >
                                        Get Started
                                    </button>
                                </article>

                                <div className="mt-3 grid gap-3 md:mt-0 md:ml-[calc(35%+0.75rem)] md:grid-cols-2">
                                    {selectedService.packages.slice(1).map((pkg, index) => (
                                        <article
                                            key={`${selectedService.id}-panel-${pkg.name}`}
                                            className={`rounded-[18px] border bg-[#e6f2eb] p-4 text-[#1f2a25] shadow-[0_20px_35px_rgba(5,20,11,0.25)] transition-all flex flex-col ${
                                                index === 0 ? "min-h-95 relative z-10 md:scale-105 md:-translate-y-3" : "min-h-80"
                                            } ${
                                                pkg.featured ? "border-[#9fd6bc]" : "border-[#c7dfd3]"
                                            }`}
                                        >
                                            <div className="mb-3 flex items-center justify-between">
                                                <div className="flex items-center gap-1.5">
                                                    {[0, 1, 2, 3, 4].map((dot) => (
                                                        <span
                                                            key={dot}
                                                            className={`h-1.5 w-1.5 rounded-full ${dot <= 2 ? "bg-[#4d6f5d]" : "bg-[#bfd4c8]"}`}
                                                        />
                                                    ))}
                                                </div>
                                                <span className="rounded-full bg-white/85 px-2 py-1 text-[9px] uppercase tracking-[0.15em] text-[#325543]">
                                                    {index === 0 ? "Recommended" : "Plan"}
                                                </span>
                                            </div>

                                            <p className="text-[10px] uppercase tracking-[0.16em] text-[#51695c]">{pkg.timeline}</p>
                                            <h5 className="mt-2 text-base font-semibold text-[#1f2a25]">{pkg.name}</h5>
                                            <p className="mt-1 text-xl font-semibold text-[#1f2a25]" style={{ fontFamily: ppmori.style.fontFamily }}>
                                                {pkg.price}
                                            </p>
                                            <p className="mt-2 text-xs leading-relaxed text-[#4f6258]">
                                                Demo scope: tailored implementation with structured handoff, quality checks, and support guidance to help your team ship faster.
                                            </p>
                                            <ul className="mt-3 space-y-2">
                                                {pkg.includes.slice(0, 4).map((item) => (
                                                    <li key={item} className="flex items-start gap-2 text-xs text-[#4f6258]">
                                                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#3d8c67]" />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>

                                            <button
                                                type="button"
                                                className="mt-auto pt-4 inline-flex items-center justify-center rounded-full bg-[#123023] px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#d8f9e9] transition-colors hover:bg-[#163c2b]"
                                            >
                                                Get Started
                                            </button>
                                        </article>
                                    ))}
                                </div>

                                <div className="mt-3 flex items-center justify-between px-2 pb-1 text-sm text-white/85">
                                    <p>{selectedService.label} plans</p>
                                    <p className="text-xs text-white/50">{selectedService.packages.length}/3</p>
                                </div>
                            </div>

                        {/* <article className=" -left-10 top-20 z-20 w-[78%] rounded-[18px] border border-[#c7dfd3] bg-[#e6f2eb] p-4 text-[#1f2a25] shadow-[0_20px_35px_rgba(5,20,11,0.35)] md:-left-10 md:top-18 md:w-[50%] md:p-5">
                            <div className="mb-3 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    {[0, 1, 2, 3, 4].map((dot) => (
                                        <span
                                            key={dot}
                                            className={`h-1.5 w-1.5 rounded-full ${dot <= 2 ? "bg-[#4d6f5d]" : "bg-[#bfd4c8]"}`}
                                        />
                                    ))}
                                </div>
                                <span className="inline-flex items-center gap-1 rounded-full bg-white/80 px-2 py-1 text-[10px] uppercase tracking-[0.15em] text-[#325543]">
                                    <Sparkles className="h-3 w-3" />
                                    Active
                                </span>
                            </div>

                            <p className="text-xs uppercase tracking-[0.16em] text-[#51695c]">{selectedService.label}</p>
                            <h4 className="mt-2 text-2xl font-semibold leading-tight">{featuredPackage.name}</h4>
                            <p className="mt-1 text-sm text-[#4f6258]">{featuredPackage.description}</p>

                            <div className="mt-4 flex items-end justify-between border-t border-[#c6d8cf] pt-3">
                                <p className="text-xl font-semibold" style={{ fontFamily: ppmori.style.fontFamily }}>
                                    {featuredPackage.price}
                                </p>
                                <p className="text-[11px] uppercase tracking-[0.13em] text-[#567467]">{featuredPackage.timeline}</p>
                            </div>
                        </article> */}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}