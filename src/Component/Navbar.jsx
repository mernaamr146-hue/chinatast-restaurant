import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  const[isOpen,SetIsOpen]=useState(false);
  return (
    <div>  <nav className="fixed left-0 top-0 z-50 w-full">
        <div className="mx-auto mt-3 flex w-[94%] max-w-7xl items-center justify-between  bg-[#4a000075] px-20 py-3 backdrop-blur-md rounded-3xl">

          <div className="flex items-center gap-2">
            <div className="text-xl">🥢</div>

            <div>
              <h2 className="text-sm font-bold flex text-cyan-50">
                CHINA<h2 className='text-red-800'>TASTE</h2>
              </h2>

              <p className="text-[7px] tracking-[3px] text-white/50">
                AUTHENTIC CUISINE
              </p>
            </div>
          </div>

          
         {/* desktop linkss */}
<div className="hidden items-center gap-7 text-xs md:flex">
  <NavLink className="navlink" to="/">Home</NavLink>
  <NavLink className="navlink" to="menu">Menu</NavLink>
  <NavLink className="navlink" to="aboutus">About Us</NavLink>
</div>

{/* Mobile menue */}
<div
  className={`${isOpen ? "flex" : "hidden"} absolute left-0 top-full w-full flex-col gap-4 rounded-2xl bg-[#670202e9] p-5 backdrop-blur-md md:hidden`}>
  <NavLink className="navlink" to="/">Home</NavLink>
  <NavLink className="navlink" to="menu">Menu</NavLink>
  <NavLink className="navlink" to="aboutus">About Us</NavLink>
</div>
          
          <button onClick={()=>SetIsOpen(!isOpen)} className="md:hidden text-white text-2xl"> ☰ </button>

        
        
        </div>
      </nav></div>
  )
}
