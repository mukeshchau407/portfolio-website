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

    gsap.set([dot, outline], { xPercent: -50, yPercent: -50 });

    const moveCursor = (e) => {
      const { clientX: x, clientY: y } = e;
      gsap.to(dot, { duration: 0, x, y });
      gsap.to(outline, { duration: 0.4, x, y, ease: "power3.out" });
    };

    window.addEventListener("mousemove", moveCursor);

    const hoverTargets = document.querySelectorAll("a, button, .hover-target");

    const handleMouseEnter = () => gsap.to(dot, { duration: 0.3, scale: 2 });
    const handleMouseLeave = () => gsap.to(dot, { duration: 0.3, scale: 1 });

    hoverTargets.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      hoverTargets.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  if (!hasMouse) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="fixed w-2.5 h-2.5 bg-orange-500/90 rounded-full pointer-events-none z-999 top-0 left-0"
      />

      <div
        ref={outlineRef}
        className="fixed w-10 h-10 border-2 rounded-full pointer-events-none z-999 top-0 left-0"
      />
    </>
  );
};

export default CustomCursor;
