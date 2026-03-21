import React, { useState, useEffect } from 'react'
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'
import { FaUser } from 'react-icons/fa'
import { RiSettings3Fill } from 'react-icons/ri'

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark mode

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);
  return (
    <>
      <nav className="nav flex items-center justify-between px-4 lg:px-[100px] h-[70px] lg:h-[80px] border-b-[1px] border-[var(--border-color)]">
        <div className="logo">
          <h1 className='text-[20px] lg:text-[25px] font-[700] sp-text'>Gen UI</h1>
        </div>
        <div className="icons flex items-center gap-4">
          <div className="icon" onClick={() => setIsDarkMode(!isDarkMode)}>
            {isDarkMode ? <BsFillSunFill /> : <BsFillMoonFill />}
          </div>
          <div className="icon"><FaUser /></div>
          <div className="icon"><RiSettings3Fill /></div>
        </div>
      </nav>
    </>
  )
}

export default Navbar