import { useEffect, useState } from "react";

import * as Gricon from "react-icons/gr";

export default function Footer() {
  const [clickScrollTopBtnState, setClickScrollTopBtnState] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    setClickScrollTopBtnState(true);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setClickScrollTopBtnState(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <footer className="w-full text-center border-t-[1px] border-gray-500 py-10">
      <div className="text-white">
        Join our{" "}
        <a
          className="text-red-700 hover:text-blue-700 duration-300 hover:underline cursor-pointer"
          href="https://twitter.com/beasty_bits"
          target="_blank"
          rel="referrer"
        >
          Twitter
        </a>{" "}
        &{" "}
        <a
          className="text-red-700 hover:text-blue-700 duration-300 hover:underline cursor-pointer"
          href="https://discord.gg/5AhU6N7spB"
          target="_blank"
          rel="referrer"
        >
          Discord{" "}
        </a>
        to stay up to date.
      </div>
      {isVisible && (
        <div
          className="fixed bottom-10 right-10 p-3 bg-black border-[1px] border-white border-dashed cursor-pointer animate-bounce"
          onClick={() => scrollToTop()}
        >
          <Gricon.GrArchlinux color="white" />
        </div>
      )}
    </footer>
  );
}
