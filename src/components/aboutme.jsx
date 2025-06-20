import React from "react";

const aboutme = ({ texts }) => {
  return (
    <section
      id="aboutMe"
      className="bg-moccaWhite py-5 flex flex-col justify-center items-center text-center px-4"
    >
      <h2 className="mb-6 text-4xl font-bold text-moccaBlack sifonn-font">
        {texts.aboutMeSec.title}
      </h2>

      <p className="mb-6 whitespace-pre-line text-lg max-w-4xl text-moccaBlack font-montserrat">
        {texts.aboutMeSec.description.p1}
        <span className="font-bold">{texts.aboutMeSec.description.hl1}</span>
        {texts.aboutMeSec.description.p2}
        <span className="font-bold">{texts.aboutMeSec.description.hl2}</span>
        {texts.aboutMeSec.description.p3}
      </p>

      <button className="font-montserrat px-6 py-3 bg-gradient-to-r from-moccaBlue to-[#053a80] text-moccaWhite font-bold rounded-lg shadow-lg transition-transform transform hover:scale-105">
        {texts.aboutMeSec.downloadCV}
      </button>
    </section>
  );
};

export default aboutme;
