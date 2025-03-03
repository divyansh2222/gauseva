import React from "react";

const TestimonialCard = ({ testimonial, isActive }) => {
  return (
    <div
      className={`w-full max-w-[90%] sm:max-w-xs md:max-w-sm px-2 transition-all duration-500 ${
        isActive
          ? "scale-110 sm:scale-125 md:scale-135"
          : "scale-90 opacity-70"
      }`}
      style={{ minHeight: isActive ? "28rem" : "24rem" }}
    >
      <div className="bg-white border border-gray-300 shadow-lg rounded-3xl overflow-hidden pt-6 flex flex-col relative">
        {/* Quote Icon */}
        <span
          className="text-2xl sm:text-3xl md:text-4xl absolute top-2 left-2 rotate-180"
          style={{ color: `#${testimonial.color}` }}
        >
          ❝
        </span>

        {/* Testimonial Text */}
        <h5 className="text-gray-700 mt-2 text-[10px] sm:text-xs md:text-sm leading-relaxed px-4 sm:px-6 md:px-8">
          {testimonial.text}
        </h5>

        {/* Curved Bottom Section */}
        <div className="relative  h-32 sm:h-40 md:h-52 z-10">
          <svg
            className="absolute rotate-y-180 bottom-0 left-0 w-full h-full"
            viewBox="0 0 400 100"
            preserveAspectRatio="none"
          >
            <path
              d="M0,50 C150,100 250,0 400,50 L400,100 L0,100 Z"
              fill={`#${testimonial.color}`}
            />
          </svg>

          {/* User Avatar */}
          <div className="absolute top-12 sm:top-12 md:top-14 left-1/2 transform -translate-x-1/2 z-10">
            <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gray-200 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
              <span className="text-gray-500 text-lg sm:text-xl md:text-2xl">
                👤
              </span>
            </div>
          </div>

          {/* User Name */}
          <h4 className="relative text-white text-xs sm:text-sm md:text-base font-semibold text-center mt-26 sm:mt-36 md:mt-36 z-50">
            {testimonial.name}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
