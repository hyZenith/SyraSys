"use client";
import React, { useState } from 'react';
import { Plus, Minus, ArrowUpRight } from 'lucide-react';

interface AccordionItem {
    id: string;
    title: string;
    description: string;
    color: string;
    textColor: string;
}

const services: AccordionItem[] = [
    {
        id: 'CRM-development',
        title: 'CRM Development',
        description: 'Leverage the power of data to make informed business decisions. We analyze complex datasets to uncover actionable insights.',
        color: '#C1D1F6', // Light Blue
        textColor: 'text-neutral-900',
    },
    {
        id: 'web-development',
        title: 'Web Development',
        description: 'We build responsive and scalable web applications tailored to your business needs, ensuring a seamless user experience across all devices.',
        color: '#D9FF66', // Lime Green
        textColor: 'text-neutral-900',
    },
    {
        id: 'app-development',
        title: 'App Development',
        description: 'Our dedicated support team is here to assist you at every step, ensuring your success and satisfaction.',
        color: '#000000', // Black
        textColor: 'text-white',
    },
    {
        id: 'automation-ai',
        title: 'AI Automation',
        description: 'We integrate advanced automation and AI solutions to streamline your business processes, enhance efficiency, and drive innovation.',
        color: '#000000', // Black
        textColor: 'text-white',
    },
    {
        id: 'design-solutions',
        title: 'Designing Solutions',
        description: 'Navigate the complex landscape of digital marketing across multiple platforms including search, social, and display.',
        color: '#A1A1A1', // Gray
        textColor: 'text-neutral-900',
    },

];

const ServicesSection = () => {
    const [openId, setOpenId] = useState<string | null>('CRM-development');

    return (
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Accordion */}
            <div className='lg:col-span-1 border-2 rounded-2xl bg-white p-2 h-fit'>
                <div className="flex flex-col gap-3 w-full">
                    {services.map((service) => {
                        const isOpen = openId === service.id;
                        return (
                            <div
                                key={service.id}
                                className={`rounded-3xl transition-all duration-500 overflow-hidden cursor-pointer`}
                                style={{ backgroundColor: service.color }}
                                onClick={() => setOpenId(isOpen ? null : service.id)}
                            >
                                <div className={`p-6 flex items-center justify-between ${service.textColor}`}>
                                    <h3 className="text-2xl lg:text-3xl font-medium">{service.title}</h3>
                                    <div className="w-8 h-8 rounded-full bg-white/50 flex items-center justify-center">
                                        {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                                    </div>
                                </div>

                                <div
                                    className={`transition-all duration-500 ease-in-out px-6 ${isOpen ? 'max-h-[300px] pb-8 opacity-100' : 'max-h-0 opacity-0'
                                        }`}
                                >
                                    <div className={`space-y-6 ${service.textColor}`}>
                                        <p className="text-base leading-relaxed max-w-md opacity-80">
                                            {service.description}
                                        </p>
                                        <button className="w-10 h-10 rounded-full border border-current flex items-center justify-center hover:bg-white/10 transition-colors">
                                            <ArrowUpRight className="w-5 h-5 rotate-45" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Right Column */}
            <div className='lg:col-span-2 p-2 rounded-2xl border h-full'>
                <div className="flex flex-col gap-8 bg-white p-8 rounded-xl h-full justify-center">
                    <div className="flex gap-2">
                        <div className="w-8 h-8 rounded-full bg-black"></div>
                        <div className="w-8 h-8 rounded-full bg-zinc-400"></div>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-5xl lg:text-7xl font-medium tracking-tight leading-[1.1]">
                            The Digital Marketing Agency For Higher ROI
                        </h2>
                        {/* <p className="text-zinc-600 text-lg max-w-lg leading-relaxed">
                            Choose success with our digital marketing agency, dedicated to delivering higher ROI that propels your business to new heights.
                        </p> */}
                    </div>

                    <div className="flex flex-wrap gap-4">
                        <button className="px-8 py-3 bg-black text-white rounded-full font-medium text-sm hover:bg-zinc-800 transition-colors">
                            Try it now
                        </button>
                        <button className="px-8 py-3 bg-white border border-zinc-300 text-black rounded-full font-medium text-sm hover:border-black transition-colors flex items-center gap-2 group">
                            <span className="w-6 h-6 rounded-full border border-zinc-300 flex items-center justify-center group-hover:border-black">
                                <ArrowUpRight className="w-3 h-3 rotate-45" />
                            </span>
                            Explore more
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
