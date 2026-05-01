"use client";

import React, { useState } from "react";
import { Menu } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import NavbarOpen from "@/components/NavbarOpen";

const Header: React.FC = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  if (pathname === "/about-us") return null;

  return (
    <>
      {isNavbarOpen && <NavbarOpen onClose={() => setIsNavbarOpen(false)} />}

      <div className="fixed right-6 top-6 z-50 flex items-center gap-3">
        <button
          onClick={() => router.push("/contact")}
          className="flex h-[52px] items-center justify-center rounded-full border border-[#ab7fff]/80 bg-[#1c1c1e]/40 backdrop-blur-md px-8 text-base font-semibold tracking-wide text-white transition-all hover:bg-white/10 active:scale-95"
        >
          Get in touch
        </button>

        <button
          onClick={() => setIsNavbarOpen(true)}
          className="relative z-50 flex h-[52px] w-[52px] cursor-pointer items-center justify-center rounded-full bg-[#ab7fff] shadow-lg transition-transform duration-300 hover:scale-105 active:scale-95"
          aria-label="Open menu"
        >
          <Menu className="h-[24px] w-[24px] text-white" strokeWidth={2} />
        </button>
      </div>
    </>
  );
};

export default Header;
