import React, { useState, useEffect } from "react";
import { testimonials } from "./TestimonialData";
import TestimonialCard from "./TestimonialCard";
import about1 from "../assets/about1.png";
import about2 from "../assets/about2.png";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getTestimonialIndex = (offset) => {
    return (activeIndex + offset + testimonials.length) % testimonials.length;
  };

  return (
    <div className="w-full bg-[#F3D4B780] pt-20 flex flex-col items-center overflow-hidden">
      <h2 className="text-3xl md:text-6xl font-bold mb-12 md:mb-28 sm:mb-20 text-green-700 flex items-center gap-2">
        <img src={about2} alt="" className="h-8 md:h-12" />
        Testimonials
        <img src={about1} alt="" className="h-8 md:h-12" />
      </h2>

      <div className="relative w-full max-w-5xl flex justify-center items-center px-4 md:px-0">
        <div className="flex space-x-4 md:space-x-6">
          {isMobile
            ? [getTestimonialIndex(0)].map((index) => (
                <TestimonialCard key={index} testimonial={testimonials[index]} isActive={true} />
              ))
            : [getTestimonialIndex(-1), getTestimonialIndex(0), getTestimonialIndex(1)].map(
                (index, i) => (
                  <TestimonialCard key={index} testimonial={testimonials[index]} isActive={i === 1} />
                )
              )}
        </div>
      </div>

      <div className="mt-1  sm:mt-6 md:mt-28 flex gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-4 h-4 rounded-full border border-green-600 transition-all duration-300 ${
              activeIndex === index ? "bg-white" : "bg-green-600"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;