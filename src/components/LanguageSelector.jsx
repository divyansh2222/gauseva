import { useState } from "react";
import { TbWorld } from "react-icons/tb";

const LanguageSelector = () => {
  const [language, setLanguage] = useState("en");

  const changeLanguage = (event) => {
    setLanguage(event.target.value);
    console.log("Selected Language:", event.target.value);
  };

  return (
    <div
      id="dropdown-btn"
      className="flex items-center text-[#706C68] text-lg md:text-xl rounded-2xl px-3 py-2 bg-[#FFFFFF5C] border border-gray-300"
    >
      {/* Globe Icon */}
      <TbWorld className="text-xl md:text-2xl" />

      {/* Language Dropdown */}
      <select
        id="language-select"
        className="bg-transparent outline-none ml-2 text-sm md:text-base cursor-pointer"
        onChange={changeLanguage}
        value={language}
      >
        <option value="en">English</option>
        <option value="ta">தமிழ் (Tamil)</option>
        <option value="hi">हिन्दी (Hindi)</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
