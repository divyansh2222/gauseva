import React, { useState, useEffect } from "react";
import { FaRegCircleCheck } from "react-icons/fa6";

const slides = [
  "/home1.jpeg",
  "/home2.jpeg",
  "/home3.jpeg",
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="flex flex-col items-center w-full bg-[#F5E6DA]">
      {/* Image Container */}
      <div className="relative w-full h-[60vh] md:h-screen overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${slide})` }}
          />
        ))}

        {/* Gradient Background with Text */}
        <div className="absolute inset-y-0 right-0 w-full md:w-1/3 bg-gradient-to-l from-[#118546C4] to-[#45adf305] flex items-center px-6 md:px-8 py-10 md:py-20">
          <ul className="text-white space-y-4 md:space-y-8 text-lg md:text-2xl text-imprinted font-bold">
            {["Caesarean operation", "Rheunotomy operation", "Medicine given to more than 92,000 thousand cows.", "As soon as the information is received, the ambulance runs to protect and rescue the cows.", "Big operations are performed no matter how much time or money it takes."].map((item, index) => (
              <li key={index} className="flex items-start space-x-2">
                <span className="text-lg md:text-2xl mt-1 md:mt-2">
                  <FaRegCircleCheck />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Navigation Dots - Placed Outside the Image */}
      <div className="flex justify-center space-x-2 mt-4">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-green-500 scale-125" : "bg-gray-300"
            }`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;