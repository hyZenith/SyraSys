import { div, section } from "framer-motion/client"

export default function Works() {
    return (
        <section>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="bg-white px-8 py-16 md:px-12 md:py-24 flex flex-col justify-center">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-8 leading-tight">
                        Our Works
                    </h1>
                    <p className="text-xl md:text-2xl font-semibold mb-16 text-gray-900">
                        We are proud of our work and the impact it has on our clients.
                    </p>
                </div>
                </div >
        </section >        

    )
}