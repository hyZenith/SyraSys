"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    text: "This wasn't our first attempt at wireless power — we had 20+ team members working on this. We looked at 5 other competitors. Nobody else in the space could convince us they could deliver the efficiency we needed. Resonant Link has delivered on every milestone.",
    company: "Fortune 200 Medical Company",
    role: "Principal Engineer",
  },
  {
    text: "Working with this team has completely transformed how we handle operations. The intuitive design and seamless integration saved us hundreds of hours and improved our delivery metrics across the board.",
    company: "Global Tech Solutions",
    role: "Director of Operations",
  },
  {
    text: "The level of support and technical expertise provided is unmatched. We feel confident scaling our platform knowing we have a reliable partner who understands our unique technical challenges.",
    company: "NextGen Startups",
    role: "CTO & Co-founder",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="bg-[#fcfcfc] py-24 md:py-32 w-full flex items-center min-h-[80vh] font-sans">
      <div className="container mx-auto px-6 md:px-12 max-w-[1280px] w-full flex flex-col justify-between h-full gap-16 md:gap-32">
        {/* Top Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Left Column - Header */}
          <div className="md:col-span-1">
            <h2 className="text-xs font-bold tracking-[0.1em] uppercase text-gray-900 mt-2">
              TESTIMONIALS
            </h2>
          </div>
          
          {/* Right Column - Text */}
          <div className="md:col-span-3">
            {/* Using fixed heights across breakpoints to prevent layout shifts */}
            <div className="h-[380px] sm:h-[320px] md:h-[380px] lg:h-[350px] xl:h-[300px] relative">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="text-3xl sm:text-4xl md:text-[44px] lg:text-[52px] font-normal leading-[1.15] tracking-tight text-[#1a1a1a]"
                >
                  {currentTestimonial.text}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Bottom Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 items-end">
          {/* Left Column - Counter */}
          <div className="md:col-span-1 flex items-center">
            <span className="text-4xl md:text-5xl lg:text-[56px] font-normal tracking-tight text-[#1a1a1a]">
              {currentIndex + 1}/{testimonials.length}
            </span>
          </div>

          {/* Right Column - Controls & Info */}
          <div className="md:col-span-3 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-8 border-t border-transparent">
            {/* Navigation Buttons */}
            <div className="flex items-center gap-3">
              <button 
                onClick={handlePrev}
                className="w-14 h-14 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-all duration-300"
                aria-label="Previous testimonial"
              >
                <ArrowLeft strokeWidth={1} className="w-6 h-6" />
              </button>
              <button 
                onClick={handleNext}
                className="w-14 h-14 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-all duration-300"
                aria-label="Next testimonial"
              >
                <ArrowRight strokeWidth={1} className="w-6 h-6" />
              </button>
            </div>

            {/* Author Info */}
            <div className="text-left sm:text-right">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <p className="font-medium text-gray-900 text-sm md:text-base">
                    {currentTestimonial.company}
                  </p>
                  <p className="text-gray-500 text-sm md:text-base mt-1">
                    {currentTestimonial.role}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}