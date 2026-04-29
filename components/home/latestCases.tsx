import React from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight, Minus } from "lucide-react";

const cases = [
  {
    id: 1,
    title: "UI UX Design And Mobile Development for Fintech App",
    description:
      "In Syfter App,we made it easy for people to invest into crypto and stock market assets with its user friendly interface and interactive swipin...",
  },
  {
    id: 2,
    title: "Mobile App Design and Development for NFT Marketplace",
    description:
      "We created slick design for nft app that brings nft market right into users smartphone allowing them to trade tokens and share with their...",
  },
  {
    id: 3,
    title: "Modern Design And Development of Ecommerce App",
    description:
      "Retlify - is an ecommerce app that broadens limits of users and sellers by offering them interactive and innovative shopping experience",
  },
];

export default function LatestCases() {
  return (
    <section className="relative w-full bg-[#0a0a0a] min-h-screen py-24 px-6 md:px-12 lg:px-24 overflow-hidden font-sans">
      {/* Background abstract circles */}
      <div className="absolute top-0 -left-64 w-[600px] h-[600px] bg-[#141414] rounded-full mix-blend-screen opacity-50 blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 -translate-y-1/2 -left-32 w-[500px] h-[500px] bg-[#141414] rounded-full mix-blend-screen opacity-50 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 -left-64 w-[600px] h-[600px] bg-[#141414] rounded-full mix-blend-screen opacity-50 blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <span className="text-gray-400 text-sm md:text-base font-medium mb-4 block">
              Our Portfolio
            </span>
            <h2 className="text-white text-5xl md:text-6xl font-semibold leading-tight tracking-tight">
              Latest<br />Cases
            </h2>
          </div>

          <div className="flex items-center gap-4 border-b border-gray-600 pb-2 w-full md:w-72">
            <input
              type="text"
              placeholder="Search cases..."
              className="bg-transparent border-none outline-none text-gray-300 placeholder:text-gray-500 w-full text-lg"
            />
            <button className="text-gray-500 hover:text-white transition-colors">
              <ArrowUpRight size={20} />
            </button>
          </div>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {cases.map((curCase) => (
            <div key={curCase.id} className="flex flex-col group cursor-pointer">
              {/* Image Placeholder */}
              <div className="w-full aspect-[4/3] bg-neutral-800 rounded-2xl mb-6 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Card Content */}
              <h3 className="text-white text-xl font-medium mb-3 leading-snug group-hover:text-gray-300 transition-colors">
                {curCase.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {curCase.description}
              </p>
            </div>
          ))}
        </div>

        {/* Footer Navigation */}
        <div className="flex items-center justify-between">
          {/* Arrows */}
          <div className="flex items-center gap-6 text-white">
            <button className="hover:text-gray-400 transition-colors p-2 -ml-2">
              <ChevronLeft size={20} strokeWidth={2.5} />
            </button>
            <div className="w-8 h-[2px] bg-white rounded-full"></div>
            <button className="hover:text-gray-400 transition-colors p-2">
              <ChevronRight size={20} strokeWidth={2.5} />
            </button>
          </div>

          {/* View All Cases Button */}
          <button className="px-6 py-2.5 rounded-full bg-neutral-800/80 hover:bg-neutral-700 text-gray-200 text-sm font-medium transition-all duration-300 border border-neutral-700/50">
            View All Cases
          </button>
        </div>
      </div>
    </section>
  );
}