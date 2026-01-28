import React from 'react'

const Sidebar = () => {
  return (
    <section className='bg-gray-600 h-screen w-62.5 '>
      <div className=' p-6 '>
        <img src="assets/logo.png" alt="SyraLogo" className='w-15 h-15' />
      </div>
      <div className='bg-white flex flex-col items-start leading-tight absolute top-2/5 p-6 ml-4'>
        <span className="text-[25px] font-bold tracking-tight text-neutral-900 font-gang">SYRA</span>
        <span className="text-[15px] text-neutral-600 uppercase tracking-wider mt-0.5 font-gang">
          SYSTEM
        </span>

      </div>
    </section>
  )
}

export default Sidebar
