import React from "react";
import whtwedo1 from "../assets/whtwedoicon1.png";
import whtwedo2 from "../assets/whtwedoicon2.png";
import { FaAmbulance } from "react-icons/fa";
import { RiMailAddFill } from "react-icons/ri";
import { MdLocationOn } from "react-icons/md";

const Contact = () => {
  return (
    <div className="bg-[#F3D4B780] py-12 flex flex-col text-[#726253] ">
      {/* Title with Decorations */}
      <h3 className="text-4xl  md:text-7xl font-bold text-green-700 flex items-center justify-center gap-2">
        <img src={whtwedo2} alt="icon" className="h-10 md:h-14" />
        Contact
        <img src={whtwedo1} alt="icon" className="h-10 md:h-14" />
      </h3>

      {/* Contact Info Section */}
      <div className="bg-[#E6E6FD] mt-8 px-10 py-10 text-center   flex flex-col md:flex-row gap-6 ">
        <div className="flex-1">
          <span className="text-4xl font-semibold text-[#726253] border-b-4 border-[#726253] pb-2">
            Contact Info
          </span>
          <p className="mt-8 flex items-center justify-center gap-2">
          <MdLocationOn  /> <span className="text-[#726253] font-bold">GAU SEWA MAHATIRTH</span>
          </p>
          <p className="text-lg text-[#726253] font-bold mt-6"> </p>
          <p className="text-sm text-[#726253] font-bold mt-3">ADDRESS</p>
          <p className="text-sm text-[#726253]  mt-3 ml-15 text-wrap">
            C/O GOKUL DHAM GAU SEWAMAHATIRTH, GAU <br /> SEWAMAHATIRTH, NANGLA KUTANI
            ROADDADR TOE, <br /><span >JHAJJAR, 124103, HARYANA, INDIA</span> 
          </p>

          <p className="mt-4 flex items-center justify-center gap-2">
          <RiMailAddFill /> <span className="text-[#726253]">Gauseva@gmail.com</span>
          </p>

          <p className="mt-2 flex items-center justify-center gap-2">
          <FaAmbulance /><span className="text-[#726253]">6458949902</span>
          </p>
        </div>

        {/* Google Map Section */}
        <div className="flex-1">
          <iframe
            className="w-full h-90 rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83984175985!2d77.06889981832682!3d28.52758200638486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1c03f923fcf1%3A0x9b75e1e69706b52b!2sDelhi!5e0!3m2!1sen!2sin!4v1648123456789"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
