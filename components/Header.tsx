import React from 'react'
import Link from 'next/link'

const Header: React.FC = () => {
    return (
        <header className="pr-8 border-[6px] border-gray-400 content-box w-fit ml-[1440px] absolute z-99 ">
            <nav className=" flex justify-end  pl-10 ">
                <Link href="" className='bg-black py-5 px-10 text-white' >
                    Home
                </Link>
                <Link href=""  className='bg-black py-5 px-10 text-white'>
                    contact
                </Link>
            </nav>

        </header>
    )
}

export default Header
