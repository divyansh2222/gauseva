import React, { useState, useEffect } from "react";
import { testimonials } from "./TestimonialData";
import TestimonialCard from "./TestimonialCard";
import about1 from "../assets/about1.png";
import about2 from "../assets/about2.png";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  // Function to get the testimonial index based on offset
  const getTestimonialIndex = (offset) => {
    return (activeIndex + offset + testimonials.length) % testimonials.length;
  };

  // Auto-slide feature (change testimonial every 3 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval); // Cleanup interval
  }, []);

  return (
    <div className="w-full bg-[#F3D4B780] pt-20 flex flex-col items-center overflow-hidden">
      <h2 className="text-3xl md:text-6xl font-bold mb-32  text-green-700 flex items-center justify-center gap-2">
        <img src={about2} alt="" className="h-8 md:h-12" />
        Testimonials
        <img src={about1} alt="" className="h-8 md:h-12" />
      </h2>

      {/* Testimonials Container */}
      <div className="relative w-full max-w-5xl flex justify-center items-center md:px-0">
        <div className="flex space-x-4 md:space-x-6">
          {[getTestimonialIndex(-1), getTestimonialIndex(0), getTestimonialIndex(1)].map(
            (index, i) => (
              <TestimonialCard key={index} testimonial={testimonials[index]} isActive={i === 1} />
            )
          )}
        </div>
      </div>

      {/* Dots for Manual Selection */}
      <div className="md:mt-24 mt-40 flex gap-2 z-40">
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
