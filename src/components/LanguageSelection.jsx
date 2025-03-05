import React, { useEffect } from "react";

const LanguageSelector = () => {
  useEffect(() => {
    const addScript = document.createElement("script");
    addScript.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    addScript.async = true;
    document.body.appendChild(addScript);

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: "en", includedLanguages: "en,hi,te", layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE },
        "google_translate_element"
      );
    };
  }, []);

  return (
    <div className=" flex justify-center">
      <div id="google_translate_element"></div>
    </div>
  );
};

export default LanguageSelector;
