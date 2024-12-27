import React from 'react'

function Navbar() {
  return (
    <div className='w-full px-20 py-8 font-["Neue Montreal"] flex justify-between item-center'>
        <div className='logo'>
            Logo
        </div>
        <div className="links flex gap-10">
            {["Services", "Our Work", "About Us", "Insights"].map((item,index)=>(
                <a key={index} className='"text-md Capitalize font-light'>{item}</a>
            ))}
        </div>

    </div>
  )
}

export default Navbar
