"use client";

import { motion } from "framer-motion";
import {
    SiFigma, SiReact, SiNextdotjs, SiVuedotjs, SiTailwindcss,
    SiNodedotjs, SiNestjs, SiDjango, SiLaravel, SiSpring, SiPostgresql,
    SiMongodb, SiRedis, SiDocker, SiKubernetes
} from "react-icons/si";
import { FaAws, FaGitAlt } from "react-icons/fa";
import { BiLogoAdobe } from "react-icons/bi";
import { Roboto } from "next/font/google";

const roboto = Roboto({
    weight: ['400'],
    subsets: ['latin'],
    display: 'swap',
});

const technologies = [
    { name: "Figma", icon: SiFigma, color: "#F24E1E", bg: "#FFFFFF" },
    { name: "Adobe", icon: BiLogoAdobe, color: "#FF0000", bg: "#FFFFFF" },
    { name: "React", icon: SiReact, color: "#61DAFB", bg: "#20232A" },
    { name: "Next.js", icon: SiNextdotjs, color: "#000000", bg: "#FFFFFF" },
    { name: "Vue", icon: SiVuedotjs, color: "#4FC08D", bg: "#FFFFFF" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", bg: "#FFFFFF" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933", bg: "#FFFFFF" },
    { name: "NestJS", icon: SiNestjs, color: "#E0234E", bg: "#FFFFFF" },
    { name: "Django", icon: SiDjango, color: "#092E20", bg: "#FFFFFF" },
    { name: "Laravel", icon: SiLaravel, color: "#FF2D20", bg: "#FFFFFF" },
    { name: "Spring", icon: SiSpring, color: "#6DB33F", bg: "#FFFFFF" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1", bg: "#FFFFFF" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248", bg: "#FFFFFF" },
    { name: "Redis", icon: SiRedis, color: "#DC382D", bg: "#FFFFFF" },
    { name: "AWS", icon: FaAws, color: "#232F3E", bg: "#FFFFFF" },
    { name: "Docker", icon: SiDocker, color: "#2496ED", bg: "#FFFFFF" },
    { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5", bg: "#FFFFFF" },
    { name: "CI/CD", icon: FaGitAlt, color: "#F05032", bg: "#FFFFFF" },
];

export default function OurTechnologies() {
    return (
        <section className="py-24 bg-[#fafafa] overflow-hidden">
            <div className="container mx-auto px-4">
                <div className={`text-start mb-16 ${roboto.className}`}>
                    <h2 className="text-4xl md:text-5xl font-semibold text-gray-600 mb-4 tracking-tight">Tools We Use</h2>
                    <p className="text-lg text-gray-500 max-w-2xl ">
                        We leverage a modern and powerful tech stack to build scalable, high-performance digital solutions tailored to your needs.
                    </p>
                </div>

                {/* The Grid */}
                <div className="flex flex-wrap justify-center gap-6 md:gap-8 max-w-5xl mx-auto">
                    {technologies.map((tech, index) => {
                        // Randomize slight rotation for that "thrown stickers" look
                        const randomRotation = (index % 2 === 0 ? 1 : -1) * ((index % 3) + 3);

                        return (
                            <motion.div
                                key={tech.name}
                                initial={{ opacity: 0, y: 30, scale: 0.8, rotate: randomRotation }}
                                whileInView={{ opacity: 1, y: 0, scale: 1, rotate: randomRotation }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.05,
                                    type: "spring",
                                    stiffness: 250,
                                    damping: 20
                                }}
                                whileHover={{
                                    scale: 1.15,
                                    rotate: 0,
                                    y: -8,
                                    zIndex: 20,
                                    transition: { type: "spring", stiffness: 300 }
                                }}
                                className="relative group cursor-pointer"
                            >
                                <div
                                    className="flex items-center justify-center w-24 h-24 md:w-28 md:h-28 rounded-3xl border-[6px] border-white shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-all duration-300 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)]"
                                    style={{ backgroundColor: tech.bg }}
                                >
                                    <tech.icon
                                        className="w-12 h-12 md:w-14 md:h-14 transition-transform duration-300 group-hover:scale-110"
                                        style={{ color: tech.color }}
                                    />
                                </div>

                                {/* Tooltip-like label on hover */}
                                <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-30">
                                    <div className="bg-gray-900 text-white text-sm font-medium px-4 py-2 rounded-full whitespace-nowrap shadow-xl">
                                        {tech.name}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}