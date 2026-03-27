import { Circle, Plus } from "lucide-react";

const starRow = "★★★★★";

const reviewers = [
    {
        name: "James Carter",
        role: "Wilson & Co",
        initials: "JC",
        quote: "Incredible team! They delivered exactly what we needed, on time and beyond expectations.",
    },
    {
        name: "Anna Martinez",
        role: "Marketing Director",
        initials: "AM",
        quote: "Our new branding is exactly what we envisioned-clean, modern, and unique. #1 in our industry.",
    },
    {
        name: "Emily Davis",
        role: "Startup Hub",
        initials: "ED",
        quote: "A smooth process from start to finish. Highly professional team!",
    },
];

function UserChip({ name, role, initials }: { name: string; role: string; initials: string }) {
    return (

        <div className="rounded-2xl border  border-neutral-200 bg-[#f8f8f8] px-4 py-3">
            <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-linear-to-br from-neutral-200 to-neutral-300 text-[11px] font-semibold text-neutral-800">
                    {initials}
                </span>
                <div>
                    <p className="text-[15px] font-semibold leading-tight text-neutral-900">{name}</p>
                    <p className="text-xs text-neutral-500">{role}</p>
                </div>
            </div>
        </div>
    );
}

function RatingStrip() {
    return (
        <div className="flex items-center justify-between border-t border-neutral-200 px-4 py-3 text-neutral-900">
            <span className="text-sm tracking-[0.16em]">{starRow}</span>
            <Plus className="h-4 w-4 text-neutral-400" strokeWidth={2} />
        </div>
    );
}

export default function Testimonials() {
    return (
        <section className="min-h-[calc(100vh-2rem)] bg-[#0c0c0f] px-3 py-4 md:px-5 md:py-6">
            <div className="mx-auto flex min-h-[calc(100vh-3.5rem)] w-full max-w-400 rounded-3xl bg-[#e8e8ea] px-5 py-8 md:px-8 md:py-10 lg:px-12 lg:py-12">
                <div className="flex w-full flex-col">
                <div className="mb-6 flex flex-col gap-4 md:mb-8 md:flex-row md:items-start md:justify-between">
                    <p className="flex items-center gap-2 text-sm font-medium text-neutral-700">
                        <Circle className="h-3.5 w-3.5 fill-neutral-900 text-neutral-900" strokeWidth={0} />
                        Testimonials
                    </p>
                    <div className="md:mr-12 lg:mr-20">
                        <h2 className="text-[clamp(2.8rem,8vw,7rem)] font-semibold leading-[0.88] tracking-[-0.03em] text-neutral-950">
                            Experiences.
                        </h2>
                        <p className="mt-3 text-[clamp(1.7rem,3.2vw,2.8rem)] font-medium leading-none text-neutral-900">
                            @2025
                        </p>
                    </div>
                </div>

                <div className="mt-auto grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-12">
                    <article className="rounded-2xl border border-neutral-200 bg-[#f6f6f7] px-5 py-5 xl:col-span-3">
                        <div className="mb-6 flex items-start justify-between gap-4">
                            <p className="text-[clamp(2.35rem,4.5vw,3rem)] font-semibold leading-none text-neutral-950">
                                4.9<span className="text-lg text-neutral-500">/5</span>
                            </p>
                            <p className="max-w-47.5 text-sm leading-snug text-neutral-600">
                                We&apos;ve delivered 56+ projects that help companies generate real results.
                            </p>
                        </div>

                        <div className="mt-12 lg:mt-16">
                            <p className="text-base font-semibold text-neutral-900">fabrica®</p>
                            <div className="mt-3 flex items-center gap-2">
                                <div className="flex -space-x-2">
                                    {["A", "B", "C", "D"].map((letter) => (
                                        <span
                                            key={letter}
                                            className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#f6f6f7] bg-neutral-300 text-[10px] font-semibold text-neutral-700"
                                        >
                                            {letter}
                                        </span>
                                    ))}
                                    <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#f6f6f7] bg-neutral-900 text-[10px] font-semibold text-white">
                                        56+
                                    </span>
                                </div>
                                <p className="text-[11px] leading-tight text-neutral-500">Trusted by clients worldwide</p>
                            </div>
                            <button className="mt-6 w-full rounded-full bg-neutral-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-neutral-800">
                                Leave a review
                            </button>
                        </div>
                    </article>

                    <article className="overflow-hidden rounded-2xl border border-neutral-200 bg-[#f6f6f7] xl:col-span-3">
                        <UserChip name={reviewers[0].name} role={reviewers[0].role} initials={reviewers[0].initials} />
                        <RatingStrip />
                        <div className="flex min-h-60 items-end px-5 pb-5">
                            <p className="text-[clamp(1.35rem,2.1vw,1.9rem)] leading-[1.08] tracking-[-0.015em] text-neutral-950">
                                {reviewers[0].quote}
                            </p>
                        </div>
                    </article>

                    <article className="flex flex-col gap-0 overflow-hidden rounded-2xl border border-neutral-200 bg-[#f6f6f7] xl:col-span-3">
                        <div className="px-5 pt-5">
                            <p className="min-h-40 text-[clamp(1.35rem,2.1vw,1.9rem)] leading-[1.07] tracking-[-0.015em] text-neutral-950">
                                {reviewers[2].quote}
                            </p>
                        </div>
                        <RatingStrip />
                        <div className="px-2 pb-2">
                            <UserChip name={reviewers[2].name} role={reviewers[2].role} initials={reviewers[2].initials} />
                        </div>
                    </article>

                    <article className="overflow-hidden rounded-2xl border border-neutral-200 bg-[#f6f6f7] xl:col-span-3">
                        <UserChip name={reviewers[1].name} role={reviewers[1].role} initials={reviewers[1].initials} />
                        <RatingStrip />
                        <div className="flex min-h-60 items-end px-5 pb-5">
                            <p className="text-[clamp(1.35rem,2.1vw,1.9rem)] leading-[1.08] tracking-[-0.015em] text-neutral-950">
                                {reviewers[1].quote}
                            </p>
                        </div>
                    </article>
                </div>
                </div>
            </div>
        </section>
    );
}