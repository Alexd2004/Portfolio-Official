'use client'

import { useState } from 'react';

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#424242]/80 h-20 flex justify-center items-center sticky top-0 z-[999]">
      <div className="flex justify-between items-center w-full max-w-[1300px] mx-auto px-6 md:px-12">
        <a href="/" id="navbar__logo" className="text-[24px] sm:text-[28px] md:text-[32px] bg-clip-text text-transparent bg-gradient-to-t from-[#ff0844] to-[#ffb199] flex items-center cursor-pointer">
          <i className="fas fa-gem mr-2"></i>Alexandre Duteau
        </a>
        <div id="mobile-menu" onClick={toggleMenu} className="flex flex-col justify-between h-5 cursor-pointer md:hidden">
          <span className={`block w-6 h-[2px] bg-white transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-[2px] bg-white transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-[2px] bg-white transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </div>
        <ul className={`flex-col items-center list-none text-center absolute top-20 left-0 w-full bg-[#131313] md:static md:flex md:flex-row md:bg-transparent md:w-auto transition-all duration-300 ease-in-out ${isMenuOpen ? 'flex' : 'hidden'}`}>
          <li className="h-20">
            <a href="#aboutpage" className="text-white flex items-center justify-center px-2 sm:px-4 h-full hover:text-[#f77062] transition-all duration-300">About</a>
          </li>
          <li className="h-20">
            <a href="#skillpage" className="text-white flex items-center justify-center px-2 sm:px-4 h-full hover:text-[#f77062] transition-all duration-300">Skills</a>
          </li>
          <li className="h-20">
            <a href="#projectspage" className="text-white flex items-center justify-center px-2 sm:px-4 h-full hover:text-[#f77062] transition-all duration-300">Projects</a>
          </li>
          <li className="h-20">
            <a href="#contact" className="text-white flex items-center justify-center px-2 sm:px-4 h-full hover:text-[#f77062] transition-all duration-300">Contact</a>
          </li>
          <li className="h-20">
            <a href="/" className="text-white flex items-center justify-center px-2 sm:px-4 h-full hover:text-[#f77062] transition-all duration-300">CV</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
