import React from "react";

const aboutme = ({ clicks, setClicks, texts }) => {
  return (
    <section
      id="about"
      className="bg-[#FFFFFC] py-20 flex flex-col justify-center items-center text-center px-4"
    >
      <h2 className="text-4xl font-bold mb-6 text-[#001011] sifonn-font">
        {texts.aboutme.title}
      </h2>
      <p className="text-lg max-w-4xl text-[#001011] font-montserrat">
        {texts.aboutme.description}
      </p>

      <button
        onClick={() => setClicks(clicks + 1)}
        className="font-montserrat mt-10 px-6 py-3 bg-gradient-to-r from-blue-700 to-[#004aad] text-[#FFFFFC] font-bold rounded-lg shadow-lg transition-transform transform hover:scale-105"
      >
        {clicks === 0 ? texts.clickHere : texts.clicksMessage(clicks)}
      </button>
    </section>
  );
};

export default aboutme;
