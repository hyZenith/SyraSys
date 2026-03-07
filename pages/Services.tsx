"use client";
import React, { useState } from "react";
import Image from "next/image";
import StackScene from "@/components/stacks/StackScene";

const services = [
  { id: "web", label: "Web Development" },
  { id: "mobile", label: "Mobile Apps" },
  { id: "cloud", label: "Custom CRM" },
  { id: "api", label: "Branding" },
  { id: "ai", label: "Automation" },
];

const features = [
  "FRAMEWORK FOR CUSTOMIZATION",
  "WORKFLOWS TO ORCHESTRATE ACTIONS",
  "CUSTOM DATA MODELS, ENDPOINTS & MORE",
];



export default function Services() {
  const [active, setActive] = useState("web");

  return (
    <section
      id="services"
      className="relative ml-[140px] px-10 py-20 md:py-28 flex justify-center items-center min-h-screen overflow-hidden"
    >
      <p className="absolute top-8 left-10 text-xs text-neutral-400 tracking-widest font-mono">
        01 — Our Services
      </p>
      <div className="w-full flex items-center gap-8">

        {/* ── LEFT: SVG / illustration ── */}
        <div className="hidden md:flex w-1/2 shrink-0 items-center justify-center">
          <Image
            src="/assets/code.jpg"
            alt="Service illustration"
            width={520}
            height={380}
            className="object-contain w-full h-auto"
          />
        </div>

        {/* ── RIGHT: nav (left) + visual (right) ── */}
        <div className="flex-1 flex flex-row items-center justify-center gap-10 relative">

          {/* Desktop nav — left of cards */}
          <div className="hidden md:flex flex-col gap-5 shrink-0">
            {services.map((svc) => {
              const isActive = svc.id === active;
              return (
                <button
                  key={svc.id}
                  onClick={() => setActive(svc.id)}
                  className={`group relative flex items-center gap-3 font-mono uppercase text-xs text-left transition-colors duration-200 ${isActive ? "text-neutral-900" : "text-neutral-400 hover:text-neutral-600"
                    }`}
                >
                  {svc.label}
                  {isActive && (
                    <span className="flex items-center">
                      <span className="block h-[1px] w-12 bg-neutral-900" />
                      <span className="block w-[6px] h-[6px] border border-neutral-900 rotate-45 -ml-[3px]" />
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Visual */}
          <div className="flex items-center justify-center">
            <StackScene activeId={active} />
          </div>

          {/* Mobile nav */}
          <div className="flex md:hidden absolute bottom-0 left-0 right-0 justify-center gap-3 flex-wrap pb-2">
            {services.map((svc) => (
              <button
                key={svc.id}
                onClick={() => setActive(svc.id)}
                className={`text-[10px] font-mono uppercase px-2 py-1 border rounded-full transition-colors ${svc.id === active
                  ? "border-neutral-900 text-neutral-900"
                  : "border-neutral-300 text-neutral-400"
                  }`}
              >
                {svc.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
