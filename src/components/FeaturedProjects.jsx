import React, { useState } from "react";
import { motion } from "framer-motion";

export default function FeaturedProjects() {
    const [hoveredCard, setHoveredCard] = useState(null);

    return (
        <div
            data-scroll
            data-scroll-section
            data-scroll-speed="-0.4"
            className="w-full py-12"
        >
            {/* Header Section */}
            <div className="w-full px-20 border-b-[1px] pb-16 border-zinc-700">
                <h1 className="text-7xl font-thin tracking-tight mb-12">
                    Featured Projects
                </h1>
            </div>

            {/* Projects Section */}
            <div className="px-20">
                <div className="cards w-full flex gap-10 mt-10">
                    {/* Project Card 1 */}
                    <div
                        onMouseEnter={() => setHoveredCard("FYDE")}
                        onMouseLeave={() => setHoveredCard(null)}
                        className="card-container relative w-1/2 h-[75vh]"
                    >
                        {/* Floating Title */}
                        <h1 className="absolute flex left-full overflow-hidden text-[#CDEA68] -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-8xl tracking-tighter leading-none">
                            {"FYDE".split("").map((item, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ y: "100%" }}
                                    animate={{
                                        y: hoveredCard === "FYDE" ? "0%" : "100%",
                                    }}
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.1,
                                        ease: "easeInOut",
                                    }}
                                    className="inline-block"
                                >
                                    {item}
                                </motion.span>
                            ))}
                        </h1>

                        {/* Image Container */}
                        <div className="w-full h-full rounded-xl overflow-hidden">
                            <div className="name-container w-full text-center text-white">
                                <img
                                    className="w-full h-full object-cover"
                                    src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png"
                                    alt="FYDE"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Project Card 2 */}
                    <div
                        onMouseEnter={() => setHoveredCard("VISE")}
                        onMouseLeave={() => setHoveredCard(null)}
                        className="card-container relative w-1/2 h-[75vh]"
                    >
                        {/* Floating Title */}
                        <h1 className="absolute flex overflow-hidden right-full text-[#CDEA68] translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-8xl tracking-tighter leading-none">
                            {"VISE".split("").map((item, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ y: "100%" }}
                                    animate={{
                                        y: hoveredCard === "VISE" ? "0%" : "100%",
                                    }}
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.1,
                                        ease: "easeInOut",
                                    }}
                                    className="inline-block"
                                >
                                    {item}
                                </motion.span>
                            ))}
                        </h1>

                        {/* Image Container */}
                        <div className="w-full h-full rounded-xl overflow-hidden">
                            <div className="name-container w-full text-center text-white">
                                <img
                                    className="w-full h-full object-cover"
                                    src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                                    alt="VISE"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
