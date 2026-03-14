"use client";

import React, { useState } from "react";
import { Hexagon, Home, Layers, User } from "lucide-react";
import NavbarOpen from "@/components/NavbarOpen";

const Header: React.FC = () => {
  const [active, setActive] = useState("home");
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  return (
    <>
      {isNavbarOpen && <NavbarOpen onClose={() => setIsNavbarOpen(false)} />}

      <div className="fixed right-4 top-4 z-50 flex items-center gap-3">
        <div className="flex items-center gap-2 rounded-full bg-white p-1.5 shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
          <div className="relative h-11 w-45 overflow-hidden rounded-full bg-neutral-900">
            <div
              className={`absolute top-1 h-9 w-20 rounded-full bg-white transition-all duration-300 ease-in-out ${
                active === "home" ? "left-1" : "left-24"
              }`}
            />

            <div className="relative z-10 flex h-full items-center px-1">
              <button
                onClick={() => setActive("home")}
                className={`flex h-9 w-20 items-center justify-center gap-1 rounded-full text-sm font-medium transition-colors duration-200 ${
                  active === "home" ? "text-neutral-900" : "text-neutral-400"
                }`}
              >
                <Home className="h-4 w-4" strokeWidth={1.5} />
                <span className={active === "home" ? "opacity-100" : "w-0 overflow-hidden opacity-0"}>Home</span>
              </button>

              <button className={`flex h-9 w-5 items-center justify-center text-neutral-400 transition-all duration-300 ease-in-out ${active === "home" ? "translate-x-4" : "-translate-x-4"}`}>
                <User className="h-4 w-4" strokeWidth={1.5} />
              </button>

              <button
                onClick={() => setActive("data")}
                className={`flex h-9 w-20 items-center justify-center gap-1 rounded-full text-sm font-medium transition-colors duration-200 ${
                  active === "data" ? "text-neutral-900" : "text-neutral-400"
                }`}
              >
                <Layers className="h-4 w-4" strokeWidth={1.5} />
                <span className={active === "data" ? "opacity-100" : "w-0 overflow-hidden opacity-0"}>Client</span>
              </button>
            </div>
          </div>

          <button
            onClick={() => setIsNavbarOpen(true)}
            className="relative z-50 ml-1 flex h-12 w-12 items-center justify-center rounded-full bg-neutral-900 shadow-[0_4px_20px_rgba(0,0,0,0.15)] transition-transform duration-300 hover:scale-105 active:scale-95"
            aria-label="Open menu"
          >
            <Hexagon className="h-5 w-5 text-white" strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
