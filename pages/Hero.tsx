import Header from '@/components/Header'
import React from 'react'
import Dragon3D from '@/components/Dragon3D'

const Hero = () => {
  return (
    <div className=''>
      <section className="grid grid-cols-2 h-screen items-start  ">
        <div className='h-screen bg-white flex flex-col justify-center items-center'>
          <h1 className="text-[8vw] font-gang tracking-tighter text-neutral-900 leading-[0.9] flex items-center flex-col z-10">
            Built to be
            {/* <div className="absolute top-101 w-[700px]  h-3 bg-[#46e127] -z-10 rounded-sm"></div> */}
            {/* <br /> */}
            <span className="relative inline-block font-gang">felt</span>
          </h1>
          <p className="text-base text-neutral-600 max-w-md leading-relaxed text-center">
            Experience design that resonates on a deeper level,
            where form and function unite in perfect harmony.
          </p>

          <div className='flex gap-4 mt-7'>
            <button className='bg-[#3DFF17] text-black px-4 py-2 rounded'>
            View Our Work
            </button>
            <button className='bg-white text-black border border-black px-4 py-2 rounded'>
              Our Approach
            </button>
          </div>

        </div>
        {/* <div className='h-screen bg-white bg-center bg-no-repeat' > */}
        {/* </div> */}
      </section>
    </div>

  )
}

export default Hero
