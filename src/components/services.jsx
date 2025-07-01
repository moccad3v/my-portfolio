import React from "react";

const services = ({ texts }) => {
  return (
    <section
      id="services"
      className="bg-moccaWhite py-5 px-4 flex flex-col justify-center items-center text-center "
    >
      <h2 className="text-4xl font-bold mb-6 text-moccaBlack sifonn-font">
        {texts.servicesSec.title}
      </h2>

      <p className="mb-6 whitespace-pre-line text-lg max-w-6xl text-moccaBlack font-montserrat">
        {texts.construction}
      </p>
    </section>
  );
};

export default services;
