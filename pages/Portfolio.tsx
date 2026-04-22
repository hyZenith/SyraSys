import { ArrowUpRight } from 'lucide-react';

export default function Portfolio() {
  return (
    <section className="bg-[#fafafa] px-4 md:px-12 py-24 lg:py-32 font-sans overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between mb-12 md:mb-20 gap-12 text-gray-900">
          
          <div className="w-full md:w-1/3 flex flex-col justify-start pt-3">
            <p className="text-gray-400 text-sm font-semibold tracking-wide uppercase">03 — Our Portfolio</p>
            <p className="text-[#a0a0a0] text-xl font-medium mt-12 md:mt-24 w-11/12 leading-snug">
              Our user-centered design encourages productivity and boosts revenue.
            </p>
          </div>
          
          <div className="w-full md:w-[60%] flex flex-col items-start md:items-start justify-start">
            <h2 className="text-[3.25rem] md:text-[4.5rem] lg:text-[5.5rem] font-medium tracking-tight text-[#1a1a1a] leading-[1.05] -ml-1">
              We don't do cookie-<br className="hidden md:block" />cutter solutions
            </h2>
            <div className="mt-12 md:mt-16">
              <a href="#" className="inline-block text-sm font-bold text-gray-500 hover:text-gray-900 transition-colors">
                Schedule Meeting
              </a>
            </div>
          </div>
          
        </div>

        <div className="flex flex-col md:flex-row gap-6 lg:gap-8 mt-12 md:mt-20">
          
          {/* Left Column */}
          <div className="w-full md:w-[57%] flex flex-col gap-6 lg:gap-8">
            
            <div className="relative group rounded-[2rem] overflow-hidden bg-gray-100 aspect-[4/3] lg:aspect-[1.3/1] w-full transform-gpu ring-1 ring-black/5 shadow-sm">
              <img 
                src="/assets/saas.png" 
                alt="SaaS Website Design" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105" 
              />
              <div className="absolute left-4 md:left-5 right-4 md:right-5 bg-white rounded-full p-[6px] pl-5 md:pl-6 flex justify-between items-center bottom-4 md:bottom-5 shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
                <span className="font-bold text-[#1f2937] text-sm md:text-[15px] tracking-wide">SaaS - Website Design</span>
                <button className="w-10 h-10 md:w-11 md:h-11 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 group-hover:bg-black group-hover:text-white transition-all duration-300 transform-gpu group-hover:scale-105">
                  <ArrowUpRight size={20} strokeWidth={2.5} />
                </button>
              </div>
            </div>

            <div className="relative group rounded-[2rem] overflow-hidden bg-gray-100 aspect-square lg:aspect-[1/0.9] w-full transform-gpu ring-1 ring-black/5 shadow-sm">
              <img 
                src="/assets/lattice.png" 
                alt="HR Management Landing Page" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105" 
              />
              <div className="absolute left-4 md:left-5 right-4 md:right-5 bg-white rounded-full p-[6px] pl-5 md:pl-6 flex justify-between items-center bottom-4 md:bottom-5 shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
                <span className="font-bold text-[#1f2937] text-sm md:text-[15px] tracking-wide">Lattice - HR Management Landing Page</span>
                <button className="w-10 h-10 md:w-11 md:h-11 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 group-hover:bg-black group-hover:text-white transition-all duration-300 transform-gpu group-hover:scale-105">
                  <ArrowUpRight size={20} strokeWidth={2.5} />
                </button>
              </div>
            </div>

          </div>

          {/* Right Column */}
          <div className="w-full md:w-[43%] flex flex-col gap-6 lg:gap-8">
            
            <div className="relative group rounded-[2rem] overflow-hidden bg-gray-100 aspect-[3/4] lg:aspect-[0.85/1] w-full transform-gpu ring-1 ring-black/5 shadow-sm">
              <img 
                src="/assets/mobile.png" 
                alt="Mobile AI App" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105" 
              />
              <div className="absolute left-4 md:left-5 right-4 md:right-5 bg-white rounded-full p-[6px] pl-5 md:pl-6 flex justify-between items-center bottom-4 md:bottom-5 shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
                <span className="font-bold text-[#1f2937] text-sm md:text-[15px] tracking-wide">Mobile AI App</span>
                <button className="w-10 h-10 md:w-11 md:h-11 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 group-hover:bg-black group-hover:text-white transition-all duration-300 transform-gpu group-hover:scale-105">
                  <ArrowUpRight size={20} strokeWidth={2.5} />
                </button>
              </div>
            </div>

            <div className="relative group rounded-[2rem] overflow-hidden bg-gray-100 aspect-[4/3] w-full transform-gpu ring-1 ring-black/5 shadow-sm">
              <img 
                src="/assets/ai_platform.png" 
                alt="AI Platform's Onboarding" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105" 
              />
              <div className="absolute left-4 md:left-5 right-4 md:right-5 bg-white rounded-full p-[6px] pl-5 md:pl-6 flex justify-between items-center bottom-4 md:bottom-5 shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
                <span className="font-bold text-[#1f2937] text-sm md:text-[15px] tracking-wide">AI Platform's Onboarding</span>
                <button className="w-10 h-10 md:w-11 md:h-11 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 group-hover:bg-black group-hover:text-white transition-all duration-300 transform-gpu group-hover:scale-105">
                  <ArrowUpRight size={20} strokeWidth={2.5} />
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}