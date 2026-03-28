"use client";

export default function BecameClient() {
    return (
        <section className="min-h-screen bg-[#2d2d2f]">
            <div className="grid min-h-screen grid-cols-1 md:grid-cols-[1.12fr_0.88fr]">
                <div className="relative hidden overflow-hidden bg-[#3a3a3d] md:block">
                    <img
                        src="/assets/code2.jpg"
                        alt="Background project preview"
                        className="absolute inset-0 h-full w-full object-cover opacity-30"
                    />

                    <div className="absolute inset-0 bg-black/38 backdrop-blur-[5px]" />

                    <div className="relative z-10 flex h-full flex-col justify-center px-20">
                        <p className="text-sm font-medium tracking-[0.25em] text-white/40">SYRASYS</p>
                        <h2 className="mt-3 max-w-xs text-7xl font-semibold leading-[0.86] text-white/30">
                            Tell us
                            <br />
                            more
                        </h2>

                        <div className="mt-14 flex max-w-xl gap-6">
                            <div className="w-[58%] rounded-2xl border border-white/15 bg-white/10 p-3 shadow-[0_18px_50px_rgba(0,0,0,0.35)] backdrop-blur-sm">
                                <img
                                    src="/assets/code3.jpg"
                                    alt="Preview card"
                                    className="h-44 w-full rounded-xl object-cover opacity-75"
                                />
                                <p className="mt-3 text-sm text-white/40">Creative Interface Pack</p>
                            </div>

                            <div className="w-[42%] rounded-2xl border border-white/15 bg-white/8 p-3 shadow-[0_18px_50px_rgba(0,0,0,0.35)] backdrop-blur-sm">
                                <div className="h-44 rounded-xl bg-linear-to-b from-[#4c425f] to-[#25222c] opacity-80" />
                                <p className="mt-3 text-sm text-white/35">Product Storyboard</p>
                            </div>
                        </div>

                        <div className="mt-12 h-px w-28 bg-white/10" />
                    </div>
                </div>

                <div className="relative bg-[#efefef] px-6 py-10 sm:px-10 md:px-12 md:py-12 lg:px-14">
                    <button
                        type="button"
                        aria-label="Close"
                        className="absolute right-6 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#e6e6e6] text-2xl leading-none text-black/70 transition-colors hover:bg-[#dddddd]"
                    >
                        ×
                    </button>

                    <div className="mx-auto flex h-full max-w-2xl flex-col pt-6 md:pt-2">
                        <h1 className="max-w-md text-5xl font-semibold leading-[1.03] tracking-tight text-black md:text-7xl">
                            Hey! Tell us
                            <br />
                            all the things
                        </h1>

                        <form className="mt-10 flex flex-1 flex-col" onSubmit={(event) => event.preventDefault()}>
                            <div className="grid gap-6 md:grid-cols-2">
                                <div className="space-y-2">
                                    <label htmlFor="name-company" className="text-xl font-semibold text-black">
                                        Name &amp; Company
                                    </label>
                                    <input
                                        id="name-company"
                                        type="text"
                                        placeholder="John from Apple"
                                        className="h-14 w-full rounded-md border border-transparent bg-[#e8e8e8] px-4 text-lg text-black placeholder:text-black/35 focus:border-black/25 focus:outline-none"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-xl font-semibold text-black">
                                        Your Email
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="john@apple.com"
                                        className="h-14 w-full rounded-md border border-transparent bg-[#e8e8e8] px-4 text-lg text-black placeholder:text-black/35 focus:border-black/25 focus:outline-none"
                                    />
                                </div>
                            </div>

                            <div className="mt-8 flex-1 space-y-2">
                                <label htmlFor="project-details" className="text-xl font-semibold text-black">
                                    Tell us more about your project
                                </label>
                                <textarea
                                    id="project-details"
                                    placeholder="Something about your great idea"
                                    className="h-[42vh] min-h-70 w-full resize-none rounded-md border border-transparent bg-[#e8e8e8] p-4 text-lg text-black placeholder:text-black/35 focus:border-black/25 focus:outline-none"
                                />
                            </div>

                            <div className="mt-7 flex flex-col items-start justify-between gap-5 pb-2 text-black/35 sm:flex-row sm:items-center">
                                <p className="text-2xl">
                                    Our Email <a href="mailto:info@awsmd.com" className="underline underline-offset-4">info@awsmd.com</a>
                                </p>

                                <button
                                    type="submit"
                                    className="inline-flex items-center gap-2 rounded-full bg-[#1f1f1f] px-8 py-4 text-xl font-semibold text-white transition-transform hover:translate-x-1"
                                >
                                    Submit the request
                                    <span aria-hidden="true">→</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}