export default function Portfolio() {
    return (
        <section className="portfolio">

            <div className="portfolio__content bg-black py-8 flex flex-col gap-[30vh]">
                <div className="sticky top-4 min-h-[calc(100vh-2rem)] card1 mx-12 bg-gray-100 rounded-4xl flex flex-col justify-between p-8">

                    {/* Top row */}
                    <div className="flex justify-between items-start ml-[140px]">
                        <div className="border border-black/40 rounded-full w-24 h-24 flex flex-col items-center justify-center text-xs">
                            <span className="tracking-widest text-[10px]">PROJECT</span>
                            <span className="text-xl font-light">01 | 04</span>
                        </div>
                        <div className="flex flex-col items-end text-sm tracking-widest">
                            <span className="border-b border-black/40 pb-2 mb-2 w-full text-right">ECOMMERCE WEBSITE</span>
                            <span>NEXTJS • SHOPIFY STOREFRONT API • GSAP</span>
                        </div>
                    </div>

                    {/* Middle row */}
                    <div className="flex-1 flex flex-row justify-between ml-[140px]">
                        <div className="flex flex-col justify-center gap-3">
                            <h3 className="text-5xl font-bold">Modevelle</h3>
                            <p className="text-sm max-w-xs opacity-70">A modern web development company specializing in creating stunning, responsive websites and applications.</p>
                            <span className="text-sm tracking-widest border border-black/40 rounded-full px-4 py-2 w-fit cursor-pointer">( VISIT SITE ↗ )</span>
                        </div>

                        <div className="bg-red-900 h-120 w-200 rounded-4xl self-end">
                        </div>
                    </div>

                </div>
                <div className="sticky top-4 min-h-[calc(100vh-2rem)] card1 mx-12 bg-gray-500 rounded-4xl">
                </div>
                <div className="sticky top-4 min-h-[calc(100vh-2rem)] card1 mx-12 bg-blue-800 rounded-4xl">
                </div>
                <div className="sticky top-4 min-h-[calc(100vh-2rem)] card1 mx-12 bg-green-900 rounded-4xl">
                </div>
            </div>

            <div className="recently_completed min-h-screen bg-black">
                <div className="flex justify-center text-9xl text-white font-semibold"> See more Work</div>

                <div className="flex justify-center mt-50">
                    <div className="h-[500px] w-[900px] bg-white rounded-4xl"></div>

                </div>
            </div>

        </section>
    )
}