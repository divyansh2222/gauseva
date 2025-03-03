import React from "react";
import about1 from "../assets/about1.png";
import about2 from "../assets/about2.png";
import whtwedo1 from "../assets/whtwedoicon1.png";
import whtwedo2 from "../assets/whtwedoicon2.png";
const About = () => {
  return (
    <div className="bg-[#F5E6DA] text-gray-800 py-10 px-6 md:px-16">
      {/* About Us Section */}
      <div className="w-full mx-auto text-center">
        <h2 className="text-4xl md:text-7xl font-bold text-green-700 flex items-center justify-center gap-2">
          <img src={about2} alt="" className="h-10 md:h-14" />
          About us
          <img src={about1} alt="" className="h-10 md:h-14" />
        </h2>

        <p className="mt-8 text-[#726253cf] text-base md:text-lg font-bold leading-relaxed  mx-auto px-4 md:px-8 ">
          Gauseva Mahatirth is a place that is specially designed with love and
          care towards cows. It was built under the grace of Sunil Nimana ji who
          is a visionary, having a vision of providing food, shelter and
          medicinal support to the cows and cattle that are deserted, hurt or
          have been in an accident. It is the result of efforts of Sunil Nimana
          Ji that Gauseva Gau Sewa Mahatirth has been able to open the biggest
          cow treatment hospital in Haryana. The Ganga Cow-Promotion Center has
          been established under the supervision of Gauseva on the holy festival
          of Gopashtami. Every village is to become a Gaugram, according to the
          principal goal of this initiative.
        </p>
        
        <p className="mt-6 text-[#726253cf] text-base md:text-lg font-bold leading-relaxed  mx-auto px-4 md:px-8 ">
          Gauseva Mahatirth is a place that is specially designed with love and
          care towards cows. It was built under the grace of Sunil Nimana ji who
          is a visionary, having a vision of providing food, shelter and
          medicinal support to the cows and cattle that are deserted, hurt or
          have been in an accident. It is the result of efforts of Sunil Nimana
          Ji that Gauseva Gau Sewa Mahatirth has been able to open the biggest
          cow treatment hospital in Haryana. The Ganga Cow-Promotion Center has
          been established under the supervision of Gauseva on the holy festival
          of Gopashtami. Every village is to become a Gaugram, according to the
          principal goal of this initiative.
        </p>
      </div>

      {/* Separator - What We Do */}
      <h3 className="text-4xl mt-20 md:text-7xl font-bold text-green-700 flex items-center justify-center gap-2">
        <img src={whtwedo2} alt="" className="h-10 md:h-14" />
          What we do
          <img src={whtwedo1} alt="" className="h-10 md:h-14" />
        </h3>
    </div>
  );
};

export default About;