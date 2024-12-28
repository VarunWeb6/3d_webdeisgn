import { motion } from 'framer-motion';
import React from 'react';
import { FaArrowRight } from "react-icons/fa6";

function LandingPage() {

    return (
        <div data-scroll data-scroll-speed="-.4" className='w-full h-screen pt-1'>
            <div className='textstructure mt-32 px-20'>
                {["We Create", "Eye-Opening", "Presentation"].map((item, index) => (
                    <div className="masker">
                        <div className='w-fit flex items-end'>
                            {index === 1 && (
                                <motion.div 
                                initial={{width:0}} 
                                animate={{width:"6.3vw"}} 
                                transition={{ease : [0.76,0,0.24,1], duration : 1}} 
                                className='w-[7vw] h-[4.5vw] bg-red-500 flex items-stretch rounded-xl'>
                                    <img className='w-full h-full rounded-xl' src="https://t4.ftcdn.net/jpg/08/68/34/41/360_F_868344165_mJHIIrRfX5UQuLux45zIZc74r78WMxRb.jpg" alt="" />
                                </motion.div>
                            )}
                            <h1 className="flex item-center uppercase h-full text-[6vw] leading-[5.5vw] tracking-tighter font-bold">
                                {item}
                            </h1>
                        </div>
                    </div>
                ))}
                <div className="border-t-[1px] border-zinc-800 mt-[15vw] flex justify-between items-center px-5 py-5 space-x-5">
                    {["For public and private companies", "For the first patch to IPO"].map((item, index) => (
                        <div className="Elem">
                            <p className="text-md font-light capitalize tracking-light leading-none">{item}</p>
                        </div>
                    ))}
                    <div className="start flex justify-center items-center space-x-2 uppercase text-md">
                        <div className="px-4 py-2 border-[1px] border-zinc-700 rounded-full hover:bg-gray-800">
                            Start the project
                        </div>
                        <div className="w-10 h-10 flex items-center rotate-[310deg] justify-center border-[1px] border-zinc-700 rounded-full hover:bg-gray-800">
                            <FaArrowRight />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;
