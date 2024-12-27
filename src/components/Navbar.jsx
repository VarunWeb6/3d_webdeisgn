import React from 'react'

function Navbar() {
  return (
    <div
      className='w-full px-20 py-8 font-["Neue Montreal"] flex justify-between items-center bg-zinc-900 fixed top-0 z-50'
    >
      <div className='logo'>
        Logo
      </div>
      <div className="links flex gap-10">
        {["Services", "Our Work", "About Us", "Insights", "Contact"].map((item, index) => (
          <a
            key={index}
            className={`text-md capitalize font-light ${index === 4 && "ml-32"}`}
            href={`#${item.toLowerCase().replace(" ", "-")}`}
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  )
}

export default Navbar
