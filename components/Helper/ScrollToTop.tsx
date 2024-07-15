"use client";
import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [isShown, setIsShown] = useState(false);
  useEffect(() => {
    const toggleShown = () => {
      if (window.scrollY > 300) {
        setIsShown(true);
      } else {
        setIsShown(false);
      }
    };

    window.addEventListener("scroll", toggleShown);

    return () => {
      window.removeEventListener("scroll", toggleShown);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-4 animate-pulse right-4">
      {isShown && (
        <button
          onClick={scrollToTop}
          className="bg-blue-700 text-white rounded-full w-12 h-12 flex items-center justify-center focus:outline-none"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
