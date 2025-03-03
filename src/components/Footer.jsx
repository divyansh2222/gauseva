import React from "react";
// import { FaWhatsapp, FaInstagram, FaYoutube } from "react-icons/fa";
import whatapp from "../assets/whatapp.png";
import instagram from "../assets/instagram.png";
import youtube from "../assets/youtube.png";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-[#F3D4B780]  py-6 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start">
        
        {/* Quick Links */}
        <div className="text-[#6D5643] w-full md:w-2/3">
          <h3 className="text-xl md:text-2xl font-semibold border-b-2 border-[#6D5643] pb-2 inline-block">
            Quick Links
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4 text-lg">
            <ul className="space-y-2">
             
              <li>➜ About us</li>
              <li>➜ Benefits of cow</li>
              <li>➜ Blog</li>
              <li>➜ Contact us</li>
              <li>➜ Terms & Conditions</li>
              <li>➜ Privacy or policy</li>
            </ul>
            <ul className="space-y-2">
              <li>➜ Upcoming events</li>
              <li>➜ Latest news & Updates</li>
              <li>➜ Donate</li>
            </ul>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="text-[#6D5643] mt-6 md:mt-0 w-full md:w-1/3 text-center md:text-right">
          <h3 className="text-xl md:text-2xl font-semibold border-b-2 border-[#6D5643] pb-2 inline-block">
            Follow Us On
          </h3>
          <div className="flex  justify-center md:justify-center md:ml-30 mt-4 space-x-4">
            <a href="#" className="text-green-500 text-3xl hover:scale-110 transition">
              <img src={whatapp} alt="" className="h-6 w-6"/>
            </a>
            <a href="#" className="text-pink-600 text-3xl hover:scale-110 transition">
            <img src={instagram} alt="" className="h-6 w-6" />
            </a>
            <a href="#" className="text-red-600 text-3xl hover:scale-110 transition">
            <img src={youtube} alt="" className="h-6 w-8"/>
            </a>
          </div>
        </div>
        <div className="md:mt-44 mt-10 text-center text-gray-600  space-x-2">
        
        <img src={logo} alt="Cow Icon" className="h-20" />
      </div>
      </div>

      {/* Bottom Logo Section */}
     
    </footer>
  );
};

export default Footer;
