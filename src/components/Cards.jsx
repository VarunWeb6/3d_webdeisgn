import React from 'react'

function Cards() {
  return (
    <div className='cards border-t-[3px] border-zinc-800 w-full h-[35vw] flex p-20 gap-5 '>
            <div className="card-container relative w-1/2 h-[25vw] bg-[#004D43] rounded-xl flex items-center justify-center px-35 ">
                <h1 className='text-8xl font-bold'>BRAND</h1>
                <button className='absolute left-10 bottom-10 px-2 py-1 border-[1px] rounded-xl w-36'>Press me</button>
            </div>
            <div className="card-container w-1/2 h-[25vw] flex gap-4 rounded-xl overflow-hidden">
            <div className="card-container-box relative bg-[#212121] w-1/2 h-full bg-red-900 rounded-xl flex justify-center items-center">
                <img className='w-48' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                <button className='absolute left-10 bottom-10 px-2 py-1 border-[1px] rounded-xl w-20'>Rating</button>
            </div>
            <div className="card-container-box relative bg-[#212121] w-1/2 h-full bg-blue-400 rounded-xl flex justify-center items-center">
                <img className="w-[6.5vw] h-[6.5vw]" src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                <button className='absolute left-10 bottom-10 px-2 py-1 border-[1px] rounded-xl w-22'>Reviews</button>
            </div>

            </div>
    </div>
  )
}

export default Cards
