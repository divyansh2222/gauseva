import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import enTranslation from "./locales/en.json";
import telTranslation from "./locales/tel.json";
i18n
  .use(HttpBackend) // Load translations dynamically
  .use(LanguageDetector) // Detect browser language
  .use(initReactI18next) // React binding
  .init({
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false, // React already protects from XSS
    },
    resources: {
      en: {
        translation: enTranslation
      },
      tel: {
        translation: telTranslation
      },
    },
  });

export default i18n;
