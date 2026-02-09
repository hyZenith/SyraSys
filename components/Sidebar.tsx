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
            <div className="absolute top-2/5 p-6 ml-4">
                <img
                    src="/assets/SyraSysLogoDark.png"
                    alt="Syra Systems"
                    className="w-32 h-auto"
                />
            </div>

        </aside>
    );
};

export default Sidebar;
