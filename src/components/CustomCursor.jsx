import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const CustomCursor = () => {
  const dotRef = useRef(null);
  const outlineRef = useRef(null);
  const [hasMouse, setHasMouse] = useState(true);

  useEffect(() => {
    const detectedMouse =
      window.matchMedia("(pointer: fine)").matches &&
      window.matchMedia("(hover: hover)").matches;

    setHasMouse(detectedMouse);
    if (!detectedMouse) return;

    const dot = dotRef.current;
    const outline = outlineRef.current;

    // Center cursor
    gsap.set([dot, outline], { xPercent: -50, yPercent: -50 });

    const moveCursor = (e) => {
      const { clientX: x, clientY: y } = e;
      gsap.to(dot, { x, y, duration: 0 });
      gsap.to(outline, {
        x,
        y,
        duration: 0.35,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", moveCursor);

    // Handle hover effects (delegation-safe)
    const handleMouseEnter = () => gsap.to(dot, { scale: 2, duration: 0.2 });
    const handleMouseLeave = () => gsap.to(dot, { scale: 1, duration: 0.2 });

    document.addEventListener("mouseover", (e) => {
      if (e.target.closest("a, button, .hover-target")) {
        handleMouseEnter();
      }
    });

    document.addEventListener("mouseout", (e) => {
      if (e.target.closest("a, button, .hover-target")) {
        handleMouseLeave();
      }
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseEnter);
      document.removeEventListener("mouseout", handleMouseLeave);
    };
  }, []);

  if (!hasMouse) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-orange-500 rounded-full pointer-events-none z-9999"
      />
      <div
        ref={outlineRef}
        className="fixed top-0 left-0 w-10 h-10 border border-orange-500/50 rounded-full pointer-events-none z-9998"
      />
    </>
  );
};

export default CustomCursor;
