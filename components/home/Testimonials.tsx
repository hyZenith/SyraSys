type ReviewCard = {
    id: string;
    name: string;
    text: string;
    stars: number;
    tone: "dark" | "indigo" | "light" | "lime" | "frost";
    style: string;
};

const reviewCards: ReviewCard[] = [
    {
        id: "a",
        name: "Stephen A.",
        text: "Within minutes the friendly sales assistant had secured me a spectacular room for my event.",
        stars: 5,
        tone: "dark",
        style: "left-[6%] top-[36%] rotate-[-8deg]",
    },
    {
        id: "b",
        name: "Wakaz H.",
        text: "Super professional, organised and great to work with. The team made our latest project feel effortless.",
        stars: 5,
        tone: "indigo",
        style: "left-[28%] top-[20%] rotate-[-7deg]",
    },
    {
        id: "c",
        name: "Mia L.",
        text: "I recently used these guys for our company conference and they were incredibly responsive throughout.",
        stars: 5,
        tone: "frost",
        style: "right-[10%] top-[26%] rotate-[8deg]",
    },
    {
        id: "d",
        name: "Barry W.",
        text: "Really useful system. We got amazing value for our company hotel bookings for upcoming events.",
        stars: 5,
        tone: "light",
        style: "left-[24%] bottom-[14%] rotate-[0deg]",
    },
    {
        id: "e",
        name: "Simon F.",
        text: "Sorted accommodation in Scotland and very professional. Excellent rates and more discounted than anywhere else.",
        stars: 5,
        tone: "lime",
        style: "right-[16%] bottom-[12%] rotate-[9deg]",
    },
];

const toneClasses: Record<ReviewCard["tone"], string> = {
    dark: "bg-black text-white border-black/40",
    indigo: "bg-[#7f7ae6] text-white border-[#8f89f0]/60",
    light: "bg-[#f3f3f3] text-neutral-900 border-white/80",
    lime: "bg-[#cde768] text-neutral-900 border-[#b4d254]/80",
    frost: "bg-[#f4f4f4]/90 text-neutral-700 border-white/70",
};

export default function Testimonials() {
    return (
        <section className="min-h-screen bg-[#ececec] px-4 py-14 md:px-8 md:py-20">
            <div className="mx-auto flex min-h-[calc(100vh-7rem)] w-full max-w-6xl flex-col items-center">
                <p className="text-sm font-medium tracking-tight text-neutral-500">Rating & Reviews</p>
                <h2 className="mt-2 text-center text-4xl font-black tracking-[-0.03em] text-black md:text-6xl">Trusted by people</h2>

                <div className="relative mt-10 h-[620px] w-full max-w-6xl md:mt-16">
                    {reviewCards.map((card) => (
                        <article
                            key={card.id}
                            className={`absolute w-[270px] rounded-2xl border p-6 shadow-[0_24px_48px_rgba(0,0,0,0.16)] transition-transform duration-500 hover:-translate-y-2 hover:scale-[1.01] md:w-[360px] md:p-7 ${toneClasses[card.tone]} ${card.style}`}
                        >
                            <div className="mb-5 text-base tracking-[0.2em] text-[#8c84ff] md:text-lg">{"★".repeat(card.stars)}</div>
                            <p className="text-base leading-7 md:text-lg">{card.text}</p>
                            <div className="mt-6 h-px w-20 bg-black/20" />
                            <p className="mt-4 text-base font-semibold md:text-lg">{card.name}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}