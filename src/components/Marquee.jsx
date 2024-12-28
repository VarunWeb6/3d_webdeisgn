import { motion } from "framer-motion";
import React from "react";

function Marquee() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.2"
      className="w-full py-10 bg-[#004D43] rounded-tl-3xl rounded-tr-3xl mt-40"
    >
      {/* Marquee Text Container */}
      <div
        className="text border-t-2 border-b-2 border-zinc-400 flex whitespace-nowrap overflow-hidden pr-20"
        aria-live="polite"
      >
        {Array(3)
          .fill("We are hiring")
          .map((text, index) => (
            <motion.h1
              key={index}
              initial={{ x: "100%" }}
              animate={{ x: "-100%" }}
              transition={{
                ease: "linear",
                repeat: Infinity,
                duration: 10,
              }}
              className="text-[10vw] sm:text-[12vw] lg:text-[15vw] leading-none uppercase font-bold pt-10 mb-8 pr-10 font-sans"
            >
              {text}
            </motion.h1>
          ))}
      </div>
    </div>
  );
}

export default Marquee;
