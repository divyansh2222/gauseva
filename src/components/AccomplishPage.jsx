import React from "react";
import payment1 from "../assets/payment1.png";
import payment2 from "../assets/payment2.png";
const accomplishments = [
  {
    title: "Inception",
    year: 2010,
    description:
      "We began with five cattle, ensuring their well-being by providing essential care such as clean water, nutritious grass, and necessary medicines. This initial step highlighted our commitment to nurturing and protecting these animals, setting the foundation for our future efforts.",
  },
  {
    title: "Infrastructure Development",
    year: 2012,
    description:
      "We began with five cattle, ensuring their well-being by providing essential care such as clean water, nutritious grass, and necessary medicines. This initial step highlighted our commitment to nurturing and protecting these animals, setting the foundation for our future efforts.",
  },
  {
    title: "Garden Establishment",
    year: 2015,
    description:
      "Our garden project added a touch of nature's beauty and spiritual significance to our goshala. We planted various flowering plants like Marigolds, Jasmine, and Plumeria to create a vibrant environment. Additionally, we incorporated trees with religious and cultural importance, such as Neem (medicinal properties), Kadamb (associated with Lord Krishna), Ashoka (symbolizing sorrow lessness), Bilva Patra (Bael, used in Hindu rituals), Tulsi (Holy Basil, for its spiritual and health benefits), and Peepal (revered for its divine connection and oxygen-producing qualities). This garden reflects our dedication to preserving nature and honoring cultural traditions.",
  },
  {
    title: "Official Registration and Land Allocation",
    year: 2017,
    description:
      "Our goshala was officially registered, marking a significant milestone in our mission. The government allocated 2.7 acres of land for our operations, providing us with the space needed to expand and enhance our facilities. Additionally, we invested in bore wells (costing ₹2 lakhs each) to ensure a reliable water supply for our cattle",
  },
  {
    title: "First Byre Construction",
    year: 2018,
    description:
      "We constructed a second byre, also costing ₹7 lakhs, further enhancing our ability to protect our cattle. Additional bore wells were installed, costing ₹2 lakhs each, to meet the water needs of our growing cattle population. We built 4 garuku stambalu, structures specifically designed for the comfort of our cattle. Moreover, a donor generously donated Maharashtra bulls, enriching our goshala with their presence. To add to the spiritual ambiance, we constructed a statue of Santhana Venugopala within the goshala premises",
  },
  {
    title: "Second Byre Construction",
    year: 2020,
    description:
      "To ensure a consistent and nutritious food supply for our cattle, we began cultivating super napier grass over 3 acres of land. This initiative not only provided high-quality fodder but also demonstrated our commitment to sustainable agricultural practices",
  },
  {
    title: "Super Napier Grass Cultivation",
    year: 2022,
    description:
      "We extended the goshala premises by 6 cents of land on the north side, allowing us to accommodate more cattle and improve our facilities further. Additionally, we successfully obtained the 80G certification, a significant milestone that enables donors to claim tax benefits for their contributions. This certification encourages more donations by offering financial incentives to our generous supporters.",
  },
 
  {
    title: "Expansion and Certification",
    year: 2024,
    description:
      "  We extended the goshala premises by 6 cents of land on the north side, allowing us to accommodate more cattle and improve our facilities further. Additionally, we successfully obtained the 80G certification, a significant milestone that enables donors to claim tax benefits for their contributions. This certification encourages more donations by offering financial incentives to our generous supporters.",
  },

  
];

const AccomplishmentPage = () => {
  return (
    <div className="bg-[#F5E8DC] min-h-screen py-10 px-4 flex flex-col items-center">
       <h3 className="text-4xl  md:text-6xl font-bold text-green-700 flex items-center justify-center gap-2">
              <img src={payment1} alt="icon" className="h-6 md:h-8" />
              Accomplishment
              <img src={payment2} alt="icon" className="h-6 md:h-8" />
            </h3>
      
      <div className="mt-6 w-full max-w-6xl flex flex-col gap-6">
        {accomplishments.map((item, index) => (
          <div
            key={index}
            className="border-2 border-green-700 bg-white p-6 rounded-lg shadow-md"
          >
            <h3 className="text-lg font-bold text-green-700">
           {item.title} <span className="text-gray-500">{item.year}</span>
            </h3>
            <p className="text-gray-700 text-sm mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccomplishmentPage;