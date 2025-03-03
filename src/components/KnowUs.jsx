import React from "react";
import about1 from "../assets/about1.png";
import about2 from "../assets/about2.png";

const KnowUs = () => {
  return (
    <div className="relative w-full pt-12 pb-12 bg-[#F3D4B780]">
      {/* Container */}
      <div className="relative flex flex-col items-center w-full">
        
        {/* Header */}
        <h2 className="text-4xl md:text-7xl font-bold text-green-700 flex items-center justify-center gap-2">
                  <img src={about2} alt="" className="h-10 md:h-14" />
                 Know Us
                  <img src={about1} alt="" className="h-10 md:h-14" />
                </h2>

        {/* Content Section with Proper Height */}
        <div 
          className="relative pl-auto md:pl-48 mt-8 flex  flex-col md:flex-row items-center gap-5 sm:gap-20 rounded-tr-[6rem] rounded-bl-[6rem] overflow-hidden w-full min-h-[400px] sm:min-h-[600px] md:min-h-[600px]"
          style={{
            backgroundImage: `url('/knowusbg.jpeg')`, 
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-green-300/30 backdrop-brightness-75"></div>

          {/* Text Section */}
          <div className="relative z-10 py-6 sm:py-10 tracking-wide text-white text-center md:text-left text-base sm:text-2xl w-full md:w-1/3">
            <p className="text-center">
              <span className="italic text-2xl font-serif">“ </span>  
              Shree Krishnayan Desi Gauraksha Evam Gaulok Dham Sewa Samiti is one of the largest Gaurakshashala of Desi cows in India. We protect, feed & shelter ailing, starving, destitute, and stray Desi Cows & Bulls, the majority of which are abandoned by their owners or saved from butchers. These cows are fed, sheltered, and looked after by dedicated Gausewaks.
              <span className="italic text-2xl font-serif text-right">”</span>
            </p>

            <button className="mt-4 px-2 py-2 md:ml-32 ml-auto text-lg  text-cente rounded-2xl bg-[#F8EBDF] shadow-inner shadow-[#138B4E61] text-[#73625A]">
                Read more...
              </button>
          </div>

          {/* Image Section */}
          <div className="relative mb-10 md:mb-0 z-10 w-full md:w-1/2 flex justify-center">
            <img 
              src="/knowusimg.jpeg" 
              alt="Cow Shelter" 
              className="rounded-xl shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md h-auto object-cover" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowUs;
