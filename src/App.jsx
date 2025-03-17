import { useState } from "react";
import { useLanguage } from "./useLanguage";
import moccad3vLogo from "/moccad3v.svg";
import profileImage from "/profile.png";
import Flag from "react-world-flags";
import "./App.css";

function App() {
  const { language, toggleLanguage, texts } = useLanguage();
  const [clicks, setClicks] = useState(0);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-black text-white p-10 flex justify-between items-center px-10 relative">
        {/* Links de navegación */}
        <div className="hidden md:flex gap-6 text-sm uppercase">
          <a href="#about" className="hover:text-gray-400">
            {texts.about}
          </a>
          <a href="#services" className="hover:text-gray-400">
            {texts.services}
          </a>
          <a href="#works" className="hover:text-gray-400">
            {texts.projects}
          </a>
          <a href="#contact" className="hover:text-gray-400">
            {texts.contact}
          </a>
        </div>

        {/* Logo centrado absolutamente */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <img src={moccad3vLogo} alt="Logo" className="w-16 h-16" />
        </div>

        {/* Botón con la bandera */}
        <button
          onClick={toggleLanguage}
          className="w-[25px] h-[25px] absolute top-5 right-5 md:static"
        >
          <Flag
            code={language === "es" ? "us" : "co"}
            className="w-full h-full"
          />
        </button>
      </nav>

      {/* Hero Section */}
      <header className="bg-black text-white text-center py-8">
        <h2 className="text-xl">{texts.hi}</h2>
        <h1 className="text-6xl font-bold">Moccad3v</h1>
        <p className="mt-4 text-lg">{texts.headline}</p>

        <div className="flex justify-center mt-6">
          <img
            src={profileImage}
            alt="Profile"
            className="w-40 h-40 rounded-full"
          />
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white text-center">
        {/* Botón de contar clics */}
        <button
          onClick={() => setClicks(clicks + 1)}
          className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-700 to-[#004aad] text-white font-bold rounded-lg shadow-lg transition-transform transform hover:scale-105"
        >
          {clicks === 0 ? texts.clickHere : texts.clicksMessage(clicks)}
        </button>
      </section>
    </div>
  );
}

export default App;
