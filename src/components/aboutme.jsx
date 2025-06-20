import React from "react";

const aboutme = ({ clicks, setClicks, texts }) => {
  return (
    <section
      id="about"
      className="bg-moccaWhite py-20 flex flex-col justify-center items-center text-center px-4"
    >
      <h2 className="text-4xl font-bold mb-6 text-moccaBlack sifonn-font">
        {texts.aboutme.title}
      </h2>

      <p className="whitespace-pre-line text-lg max-w-4xl text-moccaBlack font-montserrat">
        {texts.aboutme.description.p1}
        <span className="font-bold">{texts.aboutme.description.hl1}</span>
        {texts.aboutme.description.p2}
        <span className="font-bold">{texts.aboutme.description.hl2}</span>
        {texts.aboutme.description.p3}
      </p>

      <button
        onClick={() => setClicks(clicks + 1)}
        className="font-montserrat mt-10 px-6 py-3 bg-gradient-to-r from-moccaBlue to-[#053a80] text-moccaWhite font-bold rounded-lg shadow-lg transition-transform transform hover:scale-105"
      >
        {clicks === 0 ? texts.clickHere : texts.clicksMessage(clicks)}
      </button>
    </section>
  );
};

export default aboutme;
