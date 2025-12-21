import { useState, useEffect } from "react";

const ScrollDirection = () => {
  const [scrollDir, setScrollDir] = useState();

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDir = () => {
      const currentScrollY = window.pageYOffset;
      if (currentScrollY > lastScrollY) setScrollDir("down");
      else if (currentScrollY < lastScrollY) setScrollDir("up");
      lastScrollY = currentScrollY > 0 ? currentScrollY : 0;
    };

    window.addEventListener("scroll", updateScrollDir);
    return () => window.removeEventListener("scroll", updateScrollDir);
  }, []);

  return scrollDir;
};

export default ScrollDirection;
