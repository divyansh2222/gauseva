import React from "react";
import bgImage from "../assets/whtwedobackground.png"; // Replace with your background image
import cow1 from "../assets/whtwedoimg1.jpeg"; // Replace with your images
import cow2 from "../assets/whtwedoimg2.jpeg"; // Replace with your images

const CardSection = () => {
  const cards = [
    {
      image: cow1,
      title: "Donate cows",
      description:
        "There are more than 1000 cow breeds in the world. Cows are the female mammal, and the male cow is called the Ox or Bull.",
    },
    {
      image: cow2,
      title: "Found cows",
      description:
        "There are more than 1000 cow breeds in the world. Cows are the female mammal, and the male cow is called the Ox or Bull.",
    },
    {
      image: cow1,
      title: "Cows",
      description:
        "There are more than 1000 cow breeds in the world. Cows are the female mammal, and the male cow is called the Ox or Bull.",
    },
  ];

  return (
    <div className="relative w-full py-20">
      
      {/* Background Image Wrapper */}
      <div
        className="absolute inset-0 bg-cover bg-center  overflow-hidden"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay Filter */}
        <div className="absolute inset-0 bg-green-200/40 backdrop-brightness-75"></div>
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 container mx-auto px-6">
        {/* Cards Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-[#F8EBDF] rounded-2xl shadow-lg overflow-hidden text-center p-4 md:p-6 border-4 border-green-600"
            >
              <h3 className="text-[#148F50] text-2xl font-bold my-2">
                {card.title}
              </h3>
              <img
                src={card.image}
                alt={card.title}
                className="w-full md:h-97 h-70 object-cover rounded-xl"
              />
              <p className="text-[#73625A] mt-2">{card.description}</p>
              <button className="mt-4 px-2 py-2 rounded-2xl bg-[#F8EBDF] shadow-inner shadow-[#138B4E61] text-[#73625A]">
                Read more...
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardSection;
