"use client";
import React, { useEffect, useState } from "react";

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed right-4 md:right-6 top-1/2 -translate-y-1/2 z-50 h-40 w-[1px] bg-neutral-300">
      <div
        className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full border border-neutral-300 bg-[#f2f0f8] flex items-center justify-center"
        style={{ top: `${progress}%` }}
      >
        <div className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
      </div>
    </div>
  );
};

export default ScrollProgress;