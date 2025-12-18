import React, { useEffect, useState } from 'react'
import { GrClose, GrMenu } from "react-icons/gr";

const Navbar = () => {

  const [openMenu, setOpenMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 flex flex-wrap justify-between md:items-center text-white px-10 py-8 md:px-20" ${scrolled ? "bg-black" : "bg-transparent"}`}>
      <span className="text-3xl font-bold tracking-wide justify-center items-center">My Portfolio</span>
      <div className={`${openMenu ? "block" : "hidden"} md:block`}>
        <ul className={`md:flex md:flex-row gap-6 mx-24 my-auto font-semibold bg-black px-2 rounded-xl md:border-none text-center md:bg-transparent md:static md:mx-0`}>
          <a href="">
            <li className="text-md transition-all duration-300 p-1 md:p-0 hover:underline hover:scale-110">About</li>
          </a>
          <a href="">
            <li className="text-md transition-all duration-300 p-1 md:p-0 hover:underline hover:scale-110">Projects</li>
          </a>
          <a href="">
            <li className="text-md transition-all duration-300 p-1 md:p-0 hover:underline hover:scale-110">Skills</li>
          </a>
          <a href="">
            <li className="text-md transition-all duration-300 p-1 md:p-0 hover:underline hover:scale-110">Contact</li>
          </a>
        </ul>
      </div>
      
      {showMenu ? (
        <GrMenu 
          size={30} className="md:hidden absolute right-10 top-6 transition-all duration-300 text-white" 
          onClick={() => {
            setOpenMenu(true); 
            setShowMenu(false);
          }} 
        />
      ):(
        <GrClose 
          size={30} className="md:hidden absolute right-10 top-6 transition-all duration-300 text-white" 
          onClick={() => {
            setOpenMenu(false); 
            setShowMenu(true);
          }} 
        />
      )}
    </nav>
  )
}

export default Navbar