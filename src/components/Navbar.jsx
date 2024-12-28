import React, { useState } from 'react';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <div className='w-full px-6 sm:px-20 py-8 font-["Neue Montreal"] flex justify-between items-center bg-zinc-900 fixed top-0 z-50'>
      {/* Logo */}
      <div className='logo text-2xl font-light'>
        LOGO
      </div>

      {/* Mobile Menu Toggle (Hamburger) */}
      <div className='block lg:hidden' onClick={toggleMobileMenu}>
        <div className='w-6 h-1 bg-white my-1'></div>
        <div className='w-6 h-1 bg-white my-1'></div>
        <div className='w-6 h-1 bg-white my-1'></div>
      </div>

      {/* Links (Desktop) */}
      <div className={`links flex gap-10 ${isMobileMenuOpen ? 'flex-col absolute top-16 left-0 w-full bg-zinc-900 lg:flex-row lg:static lg:w-auto lg:gap-10' : 'hidden lg:flex'}`}>
        {["Services", "Our Work", "About Us", "Insights", "Contact"].map((item, index) => (
          <a
            key={index}
            className={`text-xl capitalize font-light text-white ${index === 4 && "ml-32"}`}
            href={`#${item.toLowerCase().replace(" ", "-")}`}
            aria-label={item}
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
