import React from "react";
import Carousel from "../components/Carousel";
import About from "../components/About";
import CardSection from "../components/CardSection";
import KnowUs from "../components/KnowUs";
import Gallery from "../components/Gallery";
// import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="relative w-full h-screen bg-[#F5E6DA]">
    

      {/* 🟢 Carousel Component */}
      <Carousel />
      <About />
      <CardSection/>
      <KnowUs/>
      <Gallery/>
      {/* <Testimonials/> */}
      <Contact/>
      <Footer/>
    </div>
  );
};

export default Home;
