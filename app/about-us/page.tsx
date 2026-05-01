"use client";

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';

// 3D Wireframe Globe Component
function Globe() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.15;
      meshRef.current.rotation.x += delta * 0.05;
    }
  });

  return (
    <Sphere ref={meshRef} args={[2.8, 32, 32]}>
      <meshBasicMaterial 
        color="#000000" 
        wireframe={true} 
        transparent={true} 
        opacity={0.08} 
      />
    </Sphere>
  );
}

export default function AboutUs() {
  return (
    <div className="relative min-h-[100dvh] w-full bg-[#fdfdfd] overflow-hidden text-black font-poppins">
      
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
         <div className="w-[600px] h-[600px] max-w-[85vw] max-h-[85vw]">
           <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
             <Globe />
           </Canvas>
         </div>
      </div>

      {/* Top Jagged Line Chart Graphic */}
      <div className="absolute top-16 left-0 right-0 z-10 w-full pointer-events-none opacity-25">
        <svg viewBox="0 0 1440 120" className="w-full h-auto" preserveAspectRatio="none">
          <path 
            d="M0 60 L 40 55 L 80 80 L 120 40 L 160 65 L 200 30 L 250 70 L 300 20 L 350 50 L 400 35 L 450 90 L 500 40 L 550 60 L 600 20 L 650 80 L 700 30 L 750 65 L 800 40 L 850 70 L 900 10 L 950 50 L 1000 35 L 1050 85 L 1100 40 L 1150 60 L 1200 25 L 1250 75 L 1300 45 L 1350 65 L 1400 40 L 1440 55" 
            fill="none" 
            stroke="#000000" 
            strokeWidth="0.5" 
          />
          <path 
            d="M0 70 L 60 45 L 110 85 L 170 30 L 220 75 L 280 40 L 330 65 L 390 15 L 440 55 L 490 25 L 540 80 L 590 35 L 640 65 L 690 25 L 740 75 L 790 35 L 840 60 L 890 20 L 940 55 L 990 15 L 1040 60 L 1090 25 L 1140 75 L 1190 30 L 1240 65 L 1290 15 L 1340 70 L 1390 40 L 1440 60" 
            fill="none" 
            stroke="#000000" 
            strokeWidth="0.25" 
          />
        </svg>
      </div>

      {/* Custom Header */}
      <header className="absolute top-0 left-0 right-0 z-20 flex justify-between items-center px-6 py-8 md:px-12 md:py-10">
        {/* Custom Logo */}
        <div className="flex items-center cursor-pointer">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="hover:scale-110 transition-transform">
            <path d="M12 20 L 12 12 M 12 12 L 6 4 M 12 12 L 18 4" />
          </svg>
        </div>

        {/* Right Navigation */}
        <div className="flex items-center gap-10 text-[10px] md:text-xs font-semibold uppercase tracking-[0.15em] text-black">
          <div className="flex items-center gap-2.5 cursor-pointer group">
            <span className="group-hover:text-purple-600 transition-colors">Sound</span>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="group-hover:stroke-purple-600 transition-colors">
              <polygon points="12 2 22 12 12 22 2 12 12 2" />
            </svg>
          </div>
          <div className="flex flex-col items-center gap-1.5 cursor-pointer group">
            <span className="group-hover:text-purple-600 transition-colors">Menu</span>
            <svg width="24" height="8" viewBox="0 0 24 8" fill="none" stroke="currentColor" className="group-hover:stroke-purple-600 transition-colors">
               <path d="M0,1 L24,1" strokeWidth="1.5" />
               <path d="M8,7 L16,7" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </header>

      {/* Vertical Side Navigation */}
      <div className="hidden lg:flex absolute left-8 top-1/2 -translate-y-1/2 z-20 flex-col items-center gap-28 h-[60vh] justify-center">
        {['STORY', 'OUR TEAM', 'PARTNERS'].map((text, i) => (
          <div 
            key={i} 
            className="text-[10px] font-semibold tracking-[0.2em] text-black cursor-pointer hover:text-purple-600 transition-colors"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          >
            {text}
          </div>
        ))}
      </div>

      {/* Main Content */}
      <main className="relative z-10 flex min-h-[100dvh] items-center justify-center px-4 sm:px-12 lg:px-32">
        <h1 className="text-center text-[clamp(2.5rem,7.5vw,7.5rem)] font-medium leading-[1.05] tracking-tight text-[#111111] max-w-[1400px]">
          A state-of-the-art<br/>
          Liquidity hub built<br/>
          To forge the new<br/>
          Financial frontier
        </h1>
      </main>

    </div>
  );
}