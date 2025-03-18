import { useState, useEffect } from "react";
import { useLanguage } from "./useLanguage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import moccad3vLogo from "/moccad3v.svg";
import profileImage from "/profile.png";
import Flag from "react-world-flags";
import "./App.css";

function App() {
  const { language, toggleLanguage, texts } = useLanguage();
  const [clicks, setClicks] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !event.target.closest(".mobile-menu") &&
        !event.target.closest(".menu-button")
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-[#001011] text-white p-8 flex items-center justify-between relative">
        {/* Contenedor de elementos alineados en móviles */}
        <div className="flex items-center gap-4">
          {/* Botón de menú hamburguesa */}
          <button
            className="md:hidden text-white focus:outline-none menu-button"
            onClick={(e) => {
              e.stopPropagation();
              setMenuOpen(!menuOpen);
            }}
          >
            <FontAwesomeIcon
              icon={faBars}
              style={{ color: "#fffffc", fontSize: "24px" }}
            />
          </button>

          {/* Links de navegación (versión escritorio) */}
          <div className="montserrat-thin-font hidden md:flex gap-6 text-sm uppercase">
            {["about", "services", "projects", "contact"].map((item) => (
              <a key={item} href={`#${item}`} className="hover:text-gray-400">
                {texts[item]}
              </a>
            ))}
          </div>

          {/* Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <img src={moccad3vLogo} alt="Logo" className="w-16 h-16" />
          </div>
        </div>

        {/* Botón con la bandera */}
        <button
          onClick={toggleLanguage}
          className="w-[25px] h-[25px] md:static"
        >
          <Flag
            code={language === "es" ? "us" : "co"}
            className="w-full h-full rounded-sm shadow-sm"
          />
        </button>
      </nav>

      {/* Menú desplegable en móviles */}
      {menuOpen && (
        <div className="montserrat-thin-font mobile-menu md:hidden absolute top-16 left-3 right-3 bg-[#2b2b2bcc] text-white flex flex-col items-center gap-2 py-4 rounded-lg shadow-lg transition-all duration-300 ease-in-out">
          {["about", "services", "projects", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="hover:text-gray-400"
              onClick={() => setMenuOpen(false)}
            >
              {texts[item]}
            </a>
          ))}
        </div>
      )}

      {/* Hero Section */}
      <header className="bg-[#001011] text-white text-center py-8">
        <h2 className="text-xl montserrat-regular-font">{texts.hi}</h2>
        <h1 className="text-6xl font-bold sifonn-font">Moccad3v</h1>
        <p className="mt-4 text-lg montserrat-thin-font">{texts.headline}</p>

        <div className="flex justify-center mt-6">
          <img
            src={profileImage}
            alt="Profile"
            className="w-40 h-40 rounded-full"
          />
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-16 bg-[#FFFFFC] text-center">
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
