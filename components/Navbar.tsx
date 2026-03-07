"use client";
import React, { useState } from 'react'
import {
    Home,
    Layers,
    Hexagon,
    User
} from "lucide-react";

const Header: React.FC = () => {
    const [active, setActive] = useState("home");
    const [hexOpen, setHexOpen] = useState(false);


    return (
        <>
            {/* FULL SCREEN BLUR OVERLAY */}
            <div
                onClick={() => setHexOpen(false)}
                className={`
                    fixed inset-0 z-40
                    transition-all duration-300
                    ${hexOpen
                        ? "backdrop-blur-md bg-black/20 pointer-events-auto"
                        : "backdrop-blur-0 bg-transparent pointer-events-none"}
                `}
            />

            <div className={`fixed top-4 right-4 z-50 flex items-center gap-3 ${hexOpen ? "" : ""}`}>

                {/* OUTER WHITE PILL CONTAINER */}
                <div className={`p-1.5 rounded-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.1)] transition-opacity duration-300 flex items-center gap-2 ${hexOpen ? "opacity-30" : "opacity-100"}`}>

                    {/* INNER DARK PILL */}
                    <div className="relative w-[180px] h-11 rounded-full bg-neutral-900 overflow-hidden">

                        {/* SLIDING WHITE CAPSULE */}
                        <div
                            className={`
              absolute top-1 h-9 w-[80px] rounded-full bg-white
              transition-all duration-300 ease-[cubic-bezier(.4,0,.2,1)]
              ${active === "home" ? "left-1" : "left-[96px]"}
            `}
                        />

                        {/* NAVIGATION CONTENT */}
                        <div className="relative z-10 h-full flex items-center px-1">

                            {/* HOME BUTTON */}
                            <button
                                onClick={() => setActive("home")}
                                className={`
                w-[80px] h-9 flex items-center justify-center gap-1
                text-sm font-medium select-none rounded-full
                transition-colors duration-200
                ${active === "home" ? "text-neutral-900" : "text-neutral-400"}
              `}
                            >
                                <Home className="w-4 h-4" strokeWidth={1.5} />
                                <span
                                    className={`
                  transition-all duration-200
                  ${active === "home" ? "opacity-100 w-auto" : "opacity-0 w-0 overflow-hidden"}
                `}
                                >
                                    Home
                                </span>
                            </button>

                            {/* MIDDLE USER ICON - SHIFTS BASED ON ACTIVE STATE */}
                            <button
                                className={`
                w-5 h-9 flex items-center justify-center text-neutral-400
                transition-all duration-300 ease-[cubic-bezier(.4,0,.2,1)]
                ${active === "home" ? "translate-x-4" : "-translate-x-4"}
              `}
                            >
                                <User className="w-4 h-4" strokeWidth={1.5} />
                            </button>

                            {/* DATA BUTTON */}
                            <button
                                onClick={() => setActive("data")}
                                className={`
                w-[80px] h-9 flex items-center justify-center gap-1
                text-sm font-medium select-none rounded-full
                transition-colors duration-200
                ${active === "data" ? "text-neutral-900" : "text-neutral-400"}
              `}
                            >
                                <Layers className="w-4 h-4" strokeWidth={1.5} />
                                <span
                                    className={`
                  transition-all duration-200
                  ${active === "data" ? "opacity-100 w-auto" : "opacity-0 w-0 overflow-hidden"}
                `}
                                >
                                    Data
                                </span>
                            </button>

                        </div>
                    </div>


                {/* RIGHT ACTION BUTTON + RADIAL HEX MENU */}
                <div className="relative z-50">

                    {/* RADIAL HEX STACK - Positioned in arc to the left */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2">

                        {/* HEX 1 (TOP-LEFT) - Team */}
                        <div className="group absolute">
                            <button
                                className={`
                                relative w-14 h-14
                                bg-neutral-900 text-white
                                flex items-center justify-center
                                shadow-xl
                                transition-all ease-[cubic-bezier(.34,1.56,.64,1)]
                                group-hover:bg-white group-hover:text-neutral-900 group-hover:scale-110 group-hover:shadow-2xl
                                active:scale-95
                                ${hexOpen
                                        ? "opacity-100 scale-100 duration-400 delay-[50ms]"
                                        : "opacity-0 scale-50 duration-200 delay-0 pointer-events-none"}
                            `}
                                style={{
                                    clipPath: "polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)",
                                    transform: hexOpen
                                        ? "translate(-130px, -30px)"
                                        : "translate(-12px, 0px)",
                                }}
                            >
                                <User className="w-5 h-5" strokeWidth={1.5} />
                            </button>
                            {/* Tooltip */}
                            <span
                                className={`
                                absolute
                                px-3 py-1.5 rounded-full
                                bg-white text-neutral-900 text-sm font-medium
                                shadow-lg whitespace-nowrap
                                opacity-0 group-hover:opacity-100
                                transition-all duration-200
                                pointer-events-none
                                ${hexOpen ? "" : "hidden"}
                            `}
                                style={{
                                    transform: hexOpen
                                        ? "translate(-210px, -37px)"
                                        : "translate(-12px, 0px)",
                                }}
                            >
                                Team
                            </span>
                        </div>

                        {/* HEX 2 (LEFT) - Services */}
                        <div className="group absolute">
                            <button
                                className={`
                                relative w-14 h-14
                                bg-neutral-900 text-white
                                flex items-center justify-center
                                shadow-xl
                                transition-all ease-[cubic-bezier(.34,1.56,.64,1)]
                                group-hover:bg-white group-hover:text-neutral-900 group-hover:scale-110 group-hover:shadow-2xl
                                active:scale-95
                                ${hexOpen
                                        ? "opacity-100 scale-100 duration-400 delay-[100ms]"
                                        : "opacity-0 scale-50 duration-200 delay-0 pointer-events-none"}
                            `}
                                style={{
                                    clipPath: "polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)",
                                    transform: hexOpen
                                        ? "translate(-130px, 30px)"
                                        : "translate(-12px, 0px)",
                                }}
                            >
                                <Layers className="w-5 h-5" strokeWidth={1.5} />
                            </button>
                            {/* Tooltip */}
                            <span
                                className={`
                                absolute
                                px-3 py-1.5 rounded-full
                                bg-white text-neutral-900 text-sm font-medium
                                shadow-lg whitespace-nowrap
                                opacity-0 group-hover:opacity-100
                                transition-all duration-200
                                pointer-events-none
                                ${hexOpen ? "" : "hidden"}
                            `}
                                style={{
                                    transform: hexOpen
                                        ? "translate(-220px, 23px)"
                                        : "translate(-12px, 0px)",
                                }}
                            >
                                Services
                            </span>
                        </div>

                        {/* HEX 3 (BOTTOM-LEFT) - Portfolio */}
                        <div className="group absolute">
                            <button
                                className={`
                                relative w-14 h-14
                                bg-neutral-900 text-white
                                flex items-center justify-center
                                shadow-xl
                                transition-all ease-[cubic-bezier(.34,1.56,.64,1)]
                                group-hover:bg-white group-hover:text-neutral-900 group-hover:scale-110 group-hover:shadow-2xl
                                active:scale-95
                                ${hexOpen
                                        ? "opacity-100 scale-100 duration-400 delay-[150ms]"
                                        : "opacity-0 scale-50 duration-200 delay-0 pointer-events-none"}
                            `}
                                style={{
                                    clipPath: "polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)",
                                    transform: hexOpen
                                        ? "translate(-80px, 60px)"
                                        : "translate(-12px, 0px)",
                                }}
                            >
                                <Home className="w-5 h-5" strokeWidth={1.5} />
                            </button>
                            {/* Tooltip */}
                            <span
                                className={`
                                absolute
                                px-3 py-1.5 rounded-full
                                bg-white text-neutral-900 text-sm font-medium
                                shadow-lg whitespace-nowrap
                                opacity-0 group-hover:opacity-100
                                transition-all duration-200
                                pointer-events-none
                                ${hexOpen ? "" : "hidden"}
                            `}
                                style={{
                                    transform: hexOpen
                                        ? "translate(-170px, 53px)"
                                        : "translate(-12px, 0px)",
                                }}
                            >
                                Portfolio
                            </span>
                        </div>
                    </div>

                    {/* MAIN HEX BUTTON */}
                    <button
                        onClick={() => setHexOpen(!hexOpen)}
                        className={`
                        relative z-50
                        w-12 h-12
                        rounded-full
                        bg-neutral-900
                        shadow-[0_4px_20px_rgba(0,0,0,0.15)]
                        flex items-center justify-center
                        transition-transform duration-300
                        ${hexOpen ? "rotate-90" : "rotate-0"}
                    `}
                    >
                        <Hexagon className="w-5 h-5 text-white" strokeWidth={1.5} />
                    </button>
                </div>

                </div>{/* end white pill */}


            </div>
        </>
    );
}

export default Header
