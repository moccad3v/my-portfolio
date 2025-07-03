import React from "react";

const AboutMe = ({ texts }) => {
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
    </section>
  );
};

export default AboutMe;
