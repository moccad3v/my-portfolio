import React from "react";

const contact = ({ clicks, setClicks, texts }) => {
  return (
    <section
      id="contact"
      className="bg-moccaWhite py-5 px-4 flex flex-col justify-center items-center text-center "
    >
      <h2 className="text-4xl font-bold mb-6 text-moccaBlack sifonn-font">
        {texts.contactSec.title}
      </h2>

      <p className="mb-6 whitespace-pre-line text-lg max-w-4xl text-moccaBlack font-montserrat">
        {texts.construction}
      </p>

      <button
        onClick={() => setClicks(clicks + 1)}
        className="font-montserrat px-6 py-3 bg-gradient-to-r from-moccaBlue to-[#053a80] text-moccaWhite font-bold rounded-lg shadow-lg transition-transform transform hover:scale-105"
      >
        {clicks === 0 ? texts.clickHere : texts.clicksMessage(clicks)}
      </button>
    </section>
  );
};

export default contact;
