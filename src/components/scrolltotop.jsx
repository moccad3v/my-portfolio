import { useEffect, useState } from "react";
import ArrowUpIcon from "~icons/lucide/arrow-up";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 150);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-[6px] right-[6px] z-50 bg-gradient-to-r from-moccaBlue to-[#053a80] text-white p-3 rounded-full shadow-lg md:bottom-16 md:right-2 transition-transform transform hover:scale-105"
      aria-label="Back to Top"
    >
      <ArrowUpIcon className="w-5 h-5" />
    </button>
  );
}
