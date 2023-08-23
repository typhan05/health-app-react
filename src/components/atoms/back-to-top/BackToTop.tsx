import { useEffect, useState } from "react";

export const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const checkScrollHeight = () => {
      if (!showButton && window.pageYOffset > 100) {
        setShowButton(true);
      } else if (showButton && window.pageYOffset <= 100) {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", checkScrollHeight);
    return () => {
      window.removeEventListener("scroll", checkScrollHeight);
    };
  }, [showButton]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  console.log(showButton);

  return (
    <button
      className={`c-back-to-top ${showButton ? "is-show" : ""}`}
      onClick={scrollToTop}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        fill="none"
        viewBox="0 0 48 48"
      >
        <path
          fill="#fff"
          fillOpacity="0.01"
          stroke="#777"
          d="M24 .5C36.979.5 47.5 11.021 47.5 24S36.979 47.5 24 47.5.5 36.979.5 24 11.021.5 24 .5z"
        ></path>
        <path
          fill="#777"
          d="M30.585 28.042L24 21.658l-6.585 6.384-.876-.85L24 19.96l7.461 7.233-.876.85z"
        ></path>
      </svg>
    </button>
  );
};
