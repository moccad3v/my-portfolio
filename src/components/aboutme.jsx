import React from "react";

const AboutMe = ({ texts, language }) => {
  const cvFile =
    language === "es"
      ? "/cv/Ingeniero_de_Sistemas_(Desarrollador Full-stack)(ES).pdf"
      : "/cv/Systems_Engineer_(Full-stack developer)(EN).pdf";

  return (
    <section
      id="aboutMe"
      className="bg-moccaWhite py-5 flex flex-col justify-center items-center text-center px-4"
    >
      <h2 className="mb-6 text-4xl font-bold text-moccaBlack sifonn-font">
        {texts.aboutMeSec.title}
      </h2>

      <p className="mb-6 whitespace-pre-line text-center text-lg max-w-6xl text-moccaBlack font-montserrat">
        {texts.aboutMeSec.description.p1}
        <a
          href="https://www.linkedin.com/in/moccad3v"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold underline hover:text-moccaBlue"
        >
          {texts.aboutMeSec.description.hl1}
        </a>
        {texts.aboutMeSec.description.p2}
        <span className="font-bold">{texts.aboutMeSec.description.hl2}</span>
        {texts.aboutMeSec.description.p3}
        <span className="font-bold">{texts.aboutMeSec.description.hl3}</span>
        {texts.aboutMeSec.description.p4}
        {texts.aboutMeSec.description.p5}
        <span className="font-bold">{texts.aboutMeSec.description.hl4}</span>
        {texts.aboutMeSec.description.p6}
        {texts.aboutMeSec.description.p7}
        {texts.aboutMeSec.description.p8}
        <a
          href="https://www.instagram.com/studiosmocca"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold underline hover:text-moccaBlue"
        >
          {texts.aboutMeSec.description.hl5}
        </a>
        {texts.aboutMeSec.description.p9}
      </p>
      <span className="mb-6 font-bold text-3xl text-moccaBlack ">
        {texts.aboutMeSec.description.p10}
      </span>

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
    </section>
  );
};

export default AboutMe;
