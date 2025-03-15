import { useState } from "react";
import es from "./languages/es";
import en from "./languages/en";

export function useLanguage() {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es");
  };

  const texts = language === "es" ? es : en;

  return { language, toggleLanguage, texts };
}
