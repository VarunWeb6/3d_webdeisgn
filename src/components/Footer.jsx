import { div } from 'framer-motion/client'
import React from 'react'

function Footer() {
  return (
    <div className='px-20'>
      <div className='footer border-t-[2px] border-zinc-800 flex'>
        <div className="w-1/2 h-[25vw] text-8xl font-bold leading-none tracking-tighter">
            <h1 className='-mb-4'>EYE - </h1>
            <h1 className='-mb-4'>OPENING</h1>
        </div>
        <div className="w-1/2 h-[25vw] px-10">
            <h1 className='text-8xl font-bold leading-none tracking-tighter'>PRESENTATIONS</h1>
            <div className='text-2xl mt-10 tacking-tighter'>
              <h1>Facebook</h1>
              <h1>Instagram</h1>
              <h1>LinkedIn</h1>
            </div>
        </div>
    </div>
      <div className='flex justify-center items-center w-full h-[2vw]'>
          <h3 className='text-white'>Copyright to varun sharma @2024</h3>
      </div>
    </div>
  )
}

export default Footer
