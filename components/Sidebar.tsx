"use client";
import React from "react";

const Sidebar: React.FC = () => {
    return (
        <aside className="fixed left-0 top-0 h-screen w-64 z-50 bg-white">
            <div className=' p-6 '>
                <img
                    src="/assets/logo.png"
                    alt="SyraLogo"
                    className="w-15 h-15 cursor-pointer transition duration-150 ease-in-out transform hover:-translate-y-0.5 hover:filter-[invert(38%)_sepia(83%)_saturate(645%)_hue-rotate(69deg)_brightness(95%)_contrast(92%)]"
                />
            </div>
            <div className=' flex flex-col items-start leading-tight absolute top-2/5 p-6 ml-4 font-gang'>
                <span className="text-[25px] font-bold tracking-tight text-neutral-900 font-gang">SYRA</span>
                <span className="text-[15px] text-neutral-600 uppercase tracking-wider mt-0.5 font-gang">
                    SYSTEM
                </span>
            </div>

        </aside>
    );
};

export default Sidebar;
