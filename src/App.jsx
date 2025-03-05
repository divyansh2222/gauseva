import React from "react";
import { useTranslation } from "react-i18next";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./components/About";
import "./i18n"; // Import i18n configuration
import KnowUs from "./components/KnowUs";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import AccomplishmentPage from "./components/AccomplishPage";
import DonateForm from "./components/DonateForm";
import LanguageSelector from "./components/LanguageSelection";

function App() {
  const { t } = useTranslation();

  return (
    <Router>
      <Navbar />
     
      
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/knownus" element={<KnowUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/accomplish" element={<AccomplishmentPage />} />
        <Route path="/donate" element={<DonateForm/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
