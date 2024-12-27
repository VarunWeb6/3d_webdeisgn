import React, { useEffect, useState } from "react";

function Eyes() {
  const [rotate, setRotate] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const centerX = innerWidth / 2;
      const centerY = innerHeight / 2;

      // Calculate the angle for rotation
      const deltaX = mouseX - centerX;
      const deltaY = mouseY - centerY;
      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);

      // Calculate the offset position for pupil movement
      const xOffset = (deltaX / centerX) * 20; // Adjust multiplier for movement range
      const yOffset = (deltaY / centerY) * 20;
      setPosition({ x: xOffset, y: yOffset });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="eyes w-full h-screen overflow-hidden">
      <div
        className="relative w-full h-full bg-cover bg-center 
          bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')] drop-shadow-3xl"
      >
        <div className="flex flex-col items-center gap-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
          {/* Left and Right Eye */}
          <div className="flex gap-10">
            {/* Left Eye */}
            <div className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100 ">
              <div
                className="relative w-[10vw] h-[10vw] rounded-full bg-zinc-900"
                style={{
                  transform: `translate(${position.x}px, ${position.y}px)`,
                  transition: "transform 0.1s ease-out",
                }}
              >
                <div
                  style={{
                    transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                  }}
                  className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10"
                >
                  <div className="w-7 h-7 rounded-full bg-zinc-100"></div>
                </div>
              </div>
            </div>

            {/* Right Eye */}
            <div className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100">
              <div
                className="relative w-[10vw] h-[10vw] rounded-full bg-zinc-900"
                style={{
                  transform: `translate(${position.x}px, ${position.y}px)`,
                  transition: "transform 0.1s ease-out",
                }}
              >
                <div
                  style={{
                    transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                  }}
                  className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10"
                >
                  <div className="w-7 h-7 rounded-full bg-zinc-100"></div>
                </div>
              </div>
            </div>
          </div>

          {/* "Play" Text */}
          <div className="text-center mt-4">
            <h1 className="text-4xl font-bold text-black drop-shadow-2xl">
              Play
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
