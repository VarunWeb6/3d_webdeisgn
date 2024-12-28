import { motion } from 'framer-motion';
import React from 'react';

function Marquee() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.2"
      className="w-full py-10 bg-[#004D43] rounded-tl-3xl rounded-tr-3xl"
    >
      <div className="text border-t-2 border-b-2 border-zinc-400 flex whitespace-nowrap overflow-hidden pr-20">
        <motion.h1
          initial={{ x: '100%' }}
          animate={{ x: '-100%' }}
          transition={{
            ease: 'linear',
            repeat: Infinity,
            duration: 10,
          }}
          className="text-[15vw] leading-none uppercase font-bold pt-10 mb-8 pr-10"
        >
          We are hiring
        </motion.h1>
        <motion.h1
          initial={{ x: '100%' }}
          animate={{ x: '-100%' }}
          transition={{
            ease: 'linear',
            repeat: Infinity,
            duration: 10,
          }}
          className="text-[15vw] leading-none uppercase font-bold pt-10 mb-8 pr-10"
        >
          We are hiring
        </motion.h1>
        <motion.h1
          initial={{ x: '100%' }}
          animate={{ x: '-100%' }}
          transition={{
            ease: 'linear',
            repeat: Infinity,
            duration: 10,
          }}
          className="text-[15vw] leading-none uppercase font-bold pt-10 mb-8 pr-10"
        >
          We are hiring
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
