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
    <div className="fixed right-4 md:right-6 top-1/2 -translate-y-1/2 z-50 h-24 w-[3px] rounded-full bg-neutral-300/40">
      <div
        className="absolute top-0 left-0 w-full rounded-full bg-neutral-900 transition-[height] duration-150 ease-out"
        style={{ height: `${progress}%` }}
      >
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-[7px] h-[7px] rounded-full bg-neutral-900" />
      </div>
    </div>
  );
};

export default ScrollProgress;
