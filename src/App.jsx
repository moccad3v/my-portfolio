import { useState, useEffect } from "react";
import { useLanguage } from "./hooks/useLanguage.js";
import Flag from "./components/flag.jsx";
import ScrollToTop from "./components/scrolltotop.jsx";
import AboutMe from "./components/aboutme.jsx";
import Services from "./components/services.jsx";
import Projects from "./components/projects.jsx";
import Contact from "./components/contact.jsx";
import Menu from "~icons/lucide/menu";
import SILinkedIn from "~icons/simple-icons/linkedin";
import SIFacebook from "~icons/simple-icons/facebook";
import SIX from "~icons/simple-icons/x";
import SIInstagram from "~icons/simple-icons/instagram";
import Moccad3vLogo from "/images/moccad3v.svg";
import profileImage from "/images/profile2.webp";
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
      <nav className="bg-moccaBlack text-moccaWhite p-8 flex items-center justify-between relative">
        {/* Contenedor de elementos alineados en móviles */}
        <div className="flex items-center gap-4">
          {/* Botón de menú hamburguesa */}
          <button
            className="md:hidden text-moccaWhite focus:outline-none menu-button"
            onClick={(e) => {
              e.stopPropagation();
              setMenuOpen(!menuOpen);
            }}
          >
            <Menu className="w-8 h-8 text-moccaWhite" />
          </button>

          {/* Links de navegación (versión escritorio) */}
          <div className="font-montserrat hidden md:flex gap-6 text-sm uppercase">
            {["aboutMe", "services", "projects", "contact"].map((item) => (
              <a key={item} href={`#${item}`} className="hover:text-moccaBlue">
                {texts[item]}
              </a>
            ))}
          </div>

          {/* Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <img
              src={Moccad3vLogo}
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
        <div className="z-50 font-montserrat mobile-menu md:hidden absolute top-16 left-3 right-3 bg-moccaGrayT text-moccaWhite flex flex-col items-center gap-2 py-4 rounded-lg shadow-lg transition-all duration-300 ease-in-out">
          {["aboutMe", "services", "projects", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="hover:text-moccaBlue"
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
        <header className="bg-moccaBlack text-moccaWhite text-center py-4 curved-header">
          <div className="space-y-1">
            <h1 className="text-moccaWhite text-2xl font-montserrat">
              {texts.hi}
            </h1>
            <h1 className="text-moccaWhite text-6xl sifonn-font font-bold">
              Moccad3v
            </h1>
            <h1 className="text-moccaWhite text-lg font-montserrat px-4">
              {texts.headline}
            </h1>
          </div>

          {/* My photo */}
          <div className="flex justify-center">
            <img
              src={profileImage}
              alt="Profile"
              className="w-80 h-80"
              loading="lazy"
            />
          </div>
        </header>

        {/* About me Section */}
        <AboutMe texts={texts} language={language} />
        {/* Services Section */}
        <Services texts={texts} />
        {/* Projects Section */}
        <Projects texts={texts} />
        {/* Contact Section */}
        <Contact clicks={clicks} setClicks={setClicks} texts={texts} />
        {/* Botón flotante para subir */}
        <ScrollToTop />
      </main>

      {/* Footer Section */}
      <footer className="bottom-0 left-0 w-full bg-moccaBlack text-moccaWhite mt-4 py-4 px-8 font-montserrat">
        <div className="mx-auto flex flex-col md:grid md:grid-cols-3 items-center text-center md:text-left">
          <p className="text-sm md:justify-self-start">
            {texts.footer.description.p1}
            <a
              href="https://www.linkedin.com/in/moccad3v/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline hover:text-moccaBlue"
            >
              {texts.footer.description.hl1}
            </a>
          </p>
          <p className="text-sm md:text-center md:justify-self-center mt-2 md:mt-0">
            &copy; {new Date().getFullYear()} {texts.copyright}
          </p>
          <div className="flex justify-center md:justify-end gap-4 mt-2 md:mt-0">
            <a
              href="https://www.linkedin.com/moccad3v"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SILinkedIn className="w-5 h-5 hover:text-moccaBlue transition" />
            </a>
            <a
              href="https://www.facebook.com/moccad3v"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SIFacebook className="w-5 h-5 hover:text-moccaBlue transition" />
            </a>
            <a
              href="https://www.x.com/moccad3v"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SIX className="w-5 h-5  hover:text-moccaBlue transition" />
            </a>
            <a
              href="https://www.instagram.com/moccad3v"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SIInstagram className="w-5 h-5 hover:text-moccaBlue transition" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
