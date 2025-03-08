import { useState } from "react";
import moccad3vLogo from "/moccad3v.svg";
import "./App.css";
function App() {
  const [clicks, setClicks] = useState(0);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-blue-600 text-white p-4 flex items-center justify-center">
        <img
          src={moccad3vLogo}
          alt="Moccad3v Logo"
          className="w-10 h-10 mr-2"
        />
        <h1 className="text-xl font-bold">Mi Portafolio</h1>
      </nav>

      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center text-center p-10 bg-blue-500 text-white">
        <h2 className="text-4xl font-bold">¡Hola, soy Juan Pascuas!</h2>
        <p className="mt-4 text-lg">
          Systems Engineer | Full-stack Developer | AI Enthusiast | Graphic
          Designer & Photographer Enthusiast
        </p>

        {/* Botón de contar clics */}
        <button
          onClick={() => setClicks(clicks + 1)}
          className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-700 to-[#004aad] text-white font-bold rounded-lg shadow-lg transition-transform transform hover:scale-105"
        >
          {clicks === 0
            ? "¡Haz clic aquí para comenzar!"
            : `Has hecho clic ${clicks} veces 🎉`}
        </button>
      </header>
    </div>
  );
}

export default App;
