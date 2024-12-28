import React from 'react'

function About() {
  return (
    <div className='w-full p-10 sm:p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
      <h1 className='text-3xl sm:text-5xl leading-[6vw] sm:leading-[3.5vw] tracking-tight sm:tracking-tighter'>
        Ochi is a strategic presentation agency for forward-thinking businesses 
        that need to raise funds, sell products, explain complex ideas, and hire great people.
      </h1>
      <div className="w-full border-t-[1px] mt-10 sm:mt-20 border-[#a1b562] pt-5 sm:pt-10 flex flex-col sm:flex-row gap-10 sm:gap-0">
        <div className='w-full sm:w-1/2'>
          <h1 className='text-4xl sm:text-6xl'>Our approach:</h1>
          <button className='px-6 sm:px-8 py-3 sm:py-4 uppercase mt-5 sm:mt-10 bg-zinc-900 rounded-full text-white flex gap-3 sm:gap-5 items-center'>
            Read More
            <div className='w-2 sm:w-3 h-2 sm:h-3 bg-zinc-100 rounded-full'></div>
          </button>
        </div>
        <div className="w-full sm:w-1/2 h-[40vh] sm:h-[60vh] rounded-3xl">
          <img 
            className='w-full h-full object-cover rounded-xl' 
            src="https://media.gettyimages.com/id/1385970223/photo/great-idea-of-a-marketing-strategy-plan-at-a-creative-office.jpg?s=612x612&w=gi&k=20&c=6eNZA8XGYgYJmD1gS7oWmGxFF6BvmWtozndUAHkpF7M=" 
            alt="Strategic Presentation" 
          />
        </div>
      </div>
    </div>
  )
}

export default About
