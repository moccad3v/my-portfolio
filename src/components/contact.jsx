import React from "react";

const contact = ({ texts, language }) => {
  const cvFile =
    language === "es"
      ? "/cv/Ingeniero_de_Sistemas_(Desarrollador Full-stack)(ES).pdf"
      : "/cv/Systems_Engineer_(Full-stack developer)(EN).pdf";

  return (
    <section
      id="contact"
      className="bg-moccaWhite py-5 px-4 flex flex-col justify-center items-center text-center "
    >
      <h2 className="text-4xl font-bold mb-6 text-moccaBlack sifonn-font">
        {texts.contactSec.title}
      </h2>
      <p className="mb-6 font-bold text-3xl text-moccaBlack ">
        {texts.aboutMeSec.description.p10}
      </p>

      <div className="flex gap-4 flex-col md:grid md:grid-cols-2 justify-center">
        <a
          href="https://www.linkedin.com/in/moccad3v"
          target="_blank"
          rel="noopener noreferrer"
          className="w-60 font-montserrat px-6 py-3 bg-gradient-to-r from-moccaBlue to-[#053a80] text-moccaWhite font-bold rounded-lg shadow-lg transition-transform transform hover:scale-105"
        >
          {texts.aboutMeSec.contact}
        </a>
        <a
          href={cvFile}
          download
          className="w-60 font-montserrat px-6 py-3 bg-gradient-to-r from-moccaBlue to-[#053a80] text-moccaWhite font-bold rounded-lg shadow-lg transition-transform transform hover:scale-105"
        >
          {texts.aboutMeSec.downloadCV}
        </a>
      </div>

      {/* <button
        onClick={() => setClicks(clicks + 1)}
        className="w-60 mt-4 font-montserrat px-6 py-3 bg-gradient-to-r from-moccaBlue to-[#053a80] text-moccaWhite font-bold rounded-lg shadow-lg transition-transform transform hover:scale-105"
      >
        {clicks === 0 ? texts.clickHere : texts.clicksMessage(clicks)}
      </button> */}
    </section>
  );
};

export default contact;
