"use client";
import React, { useState } from "react";
import StackScene from "@/components/stacks/StackScene";

const services = [
  { id: "web", label: "Web Development" },
  { id: "mobile", label: "Mobile Apps" },
  { id: "cloud", label: "Cloud Solutions" },
  { id: "api", label: "API & Backend" },
  { id: "ai", label: "AI Integration" },
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
      className="relative px-6 lg:px-16 py-20 md:py-28 flex justify-center items-center min-h-screen overflow-hidden"
    >
      <div className="w-full max-w-7xl flex justify-center items-center relative">

        {/* ── LEFT NAV (desktop) ── */}
        <div className="hidden md:flex absolute left-0 top-0 bottom-0 justify-center flex-col w-48 gap-5">
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
                  <span className="absolute -right-4 top-1/2 -translate-y-1/2 flex items-center">
                    <span className="block h-[1px] w-12 bg-neutral-900" />
                    <span className="block w-[6px] h-[6px] border border-neutral-900 rotate-45 -ml-[3px]" />
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* ── CENTER VISUAL ── */}
        <div className="flex items-center justify-center">
          <StackScene activeId={active} />
        </div>

        {/* ── RIGHT FEATURES (desktop) ── */}
        <ul className="hidden md:flex absolute right-0 top-0 bottom-0 items-center justify-end w-56 pointer-events-none">
          <div className="flex flex-col gap-4 font-mono uppercase text-right text-xs text-neutral-500">
            {features.map((f, i) => (
              <li key={i} className="leading-snug">{f}</li>
            ))}
          </div>
        </ul>

        {/* ── MOBILE NAV ── */}
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
    </section>
  );
}
