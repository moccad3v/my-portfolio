import { useState, useEffect } from "react";
import { useLanguage } from "./hooks/useLanguage.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faXTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import moccad3vLogo from "../public/images/moccad3v.svg";
import profileImage from "../public/images/profile2.webp";
import AboutMe from "./components/aboutme.jsx";
import Flag from "./components/flag.jsx";
import "./styles/App.css";

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
    <div className="flex flex-col min-h-screen">
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
          <div className="font-montserrat hidden md:flex gap-6 text-sm uppercase">
            {["about", "services", "projects", "contact"].map((item) => (
              <a key={item} href={`#${item}`} className="hover:text-gray-400">
                {texts[item]}
              </a>
            ))}
          </div>

          {/* Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <img
              src={moccad3vLogo}
              alt="Logo"
              className="w-16 h-16"
              loading="lazy"
            />
          </div>
        </div>

        {/* Botón con la bandera */}
        <button
          onClick={toggleLanguage}
          className="w-[30px] h-[20px] md:static"
        >
          <Flag
            code={language === "es" ? "us" : "co"}
            className="w-full h-full rounded-sm shadow-sm"
          />
        </button>
      </nav>

      {/* Menú desplegable en móviles */}
      {menuOpen && (
        <div className="z-50 font-montserrat mobile-menu md:hidden absolute top-16 left-3 right-3 bg-[#2b2b2bcc] text-white flex flex-col items-center gap-2 py-4 rounded-lg shadow-lg transition-all duration-300 ease-in-out">
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

      {/* Portfolio */}
      <main className="flex-grow h-full">
        {/* Introduction Section */}
        <header className="bg-[#001011] text-white text-center py-4 curved-header">
          <h1 className="text-2xl font-montserrat">{texts.hi}</h1>
          <h1 className="text-6xl font-bold sifonn-font">Moccad3v</h1>
          <h1 className="mt-3 text-lg font-montserrat md: px-2">
            {texts.headline}
          </h1>
          {/* My photo */}
          <div className="flex justify-center mt-6">
            <img
              src={profileImage}
              alt="Profile"
              className="w-80 h-80"
              loading="lazy"
            />
          </div>
        </header>

        {/* About me Section */}
        <AboutMe clicks={clicks} setClicks={setClicks} texts={texts} />
      </main>

      {/* Footer Section */}
      <footer className="bottom-0 left-0 w-full bg-[#001011] text-white py-4 px-8 md:px-18 font-montserrat">
        <div className="mx-auto flex flex-col md:grid md:grid-cols-3 items-center text-center md:text-left">
          <p className="text-sm md:justify-self-start">{texts.proud}</p>
          <p className="text-sm md:text-center md:justify-self-center mt-2 md:mt-0">
            &copy; {new Date().getFullYear()} {texts.copyright}
          </p>
          <div className="flex justify-center md:justify-end gap-4 mt-2 md:mt-0">
            <a
              href="https://www.facebook.com/moccad3v"
              className="text-white hover:text-gray-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebookF} size="lg" />
            </a>
            <a
              href="https://www.x.com/moccad3v"
              className="text-white hover:text-gray-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faXTwitter} size="lg" />
            </a>
            <a
              href="https://www.instagram.com/moccad3v"
              className="text-white hover:text-gray-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
