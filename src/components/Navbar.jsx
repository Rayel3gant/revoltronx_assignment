import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaHome , FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <section className='w-full py-5 bg-red-500 flex flex-col gap-y-4 items-center'>


        <p className='text-lg tracking-widest  hover:text-white transition-all duration-500'>
            Headlines Hub
        </p>


        <div className='flex items-center gap-x-3 '>
            <NavLink to='/' className='transition-all duration-1000'>
                <FaHome />
            </NavLink>

            <div className=' bg-black'>|</div>


            <NavLink to='/search' className='transition-all duration-1000'>
                <FaSearch/>
            </NavLink>
        </div>
    </section>
  )
}

export default Navbar