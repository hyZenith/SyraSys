"use client";
import React from "react";
import { Home, Briefcase, Smile, Mail } from "lucide-react";

const icons = [
  { icon: Home, label: "Home", href: "#home" },
  { icon: Briefcase, label: "Services", href: "#services" },
  { icon: Smile, label: "About", href: "#about" },
  { icon: Mail, label: "Contact", href: "#contact" },
];

const Sidebar: React.FC = () => {
  return (
    <aside className="fixed left-6 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-3">
      {icons.map(({ icon: Icon, label, href }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          className="sidebar-icon group relative w-12 h-12 rounded-2xl bg-white/80 backdrop-blur-sm
                     flex items-center justify-center text-neutral-500
                     shadow-[0_2px_12px_rgba(0,0,0,0.06)] cursor-pointer"
        >
          <Icon className="w-5 h-5" strokeWidth={1.5} />

          {/* Tooltip */}
          <span
            className="absolute left-14 px-3 py-1.5 rounded-full bg-neutral-900 text-white text-xs font-medium
                        whitespace-nowrap opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100
                        transition-all duration-200 pointer-events-none"
          >
            {label}
          </span>
        </a>
      ))}
    </aside>
  );
};

export default Sidebar;
