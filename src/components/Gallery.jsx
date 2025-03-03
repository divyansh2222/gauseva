import React, { useState, useEffect, useRef } from "react";
import whtwedo1 from "../assets/whtwedoicon1.png";
import whtwedo2 from "../assets/whtwedoicon2.png";

const imagesList = [
  "/gallery1.jpeg", "/gallery2.jpeg", "/gallery3.jpeg", "/gallery4.jpeg",
  "/gallery5.jpeg", "/gallery7.jpeg", "/gallery8.jpeg", "/gallery9.jpeg",
  "/gallery10.jpeg", "/gallery11.jpeg", "/gallery12.jpeg", "/gallery13.jpeg",
  "/gallery14.jpeg", "/gallery15.jpeg", "/gallery16.jpeg", "/gallery17.jpeg",
  "/gallery18.jpeg", "/gallery19.jpeg", "/gallery20.jpeg", "/gallery21.jpeg",
  "/gallery22.jpeg", "/gallery23.jpeg", "/gallery24.jpeg", "/home1.jpeg", "/home2.jpeg", "/home3.jpeg",
];

const Gallery = () => {
  const [images, setImages] = useState(imagesList);
  const [activeImage, setActiveImage] = useState(null);
  const galleryRef = useRef(null);

  useEffect(() => {
    if (activeImage !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [activeImage]);

  const handleImageClick = (index) => {
    setActiveImage(index);
  };

  const closeModal = () => {
    setActiveImage(null);
  };

  return (
    <div className="w-full bg-[#F3D4B780] py-6">
      <h3 className="text-3xl sm:text-4xl md:text-6xl mb-6 font-bold text-green-700 flex items-center justify-center gap-2">
        <img src={whtwedo2} alt="" className="h-8 sm:h-10 md:h-14" />
        Gallery
        <img src={whtwedo1} alt="" className="h-8 sm:h-10 md:h-14" />
      </h3>

      {/* Responsive Gallery Grid */}
      <div ref={galleryRef} id="gallery"
        className="container bg-white py-3 mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-4 px-2 sm:px-4 overflow-y-auto max-h-[600px] scrollbar-hide">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Gallery ${index}`}
            className="w-full h-32 sm:h-48 md:h-56 object-cover rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform"
            onClick={() => handleImageClick(index)}
          />
        ))}
      </div>

      {/* Modal for Enlarged Image */}
      {activeImage !== null && (
        <div className="fixed inset-0 bg-[#00000073] bg-opacity-90 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-full sm:max-w-3xl max-h-[90vh] p-4">
            {/* Close Button */}
            <button onClick={closeModal} className="absolute top-2 right-2 text-white p-2 text-2xl font-bold">
              ×
            </button>
            {/* Enlarged Image */}
            <img
              src={images[activeImage]}
              alt="Enlarged View"
              className="w-full h-auto max-h-[80vh] rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;