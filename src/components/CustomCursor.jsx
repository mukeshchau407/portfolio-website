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

    // Hover effect
    const handleMouseEnter = () => {
      gsap.to(dot, { scale: 2, duration: 0.2 });
      gsap.to(outline, { scale: 1.2, duration: 0.3, borderColor: "#FF8040" }); // scale outline + change color
    };
    const handleMouseLeave = () => {
      gsap.to(dot, { scale: 1, duration: 0.2 });
      gsap.to(outline, { scale: 1, duration: 0.2, borderColor: "#f97316" }); // revert
    };

    const mouseOverListener = (e) => {
      if (e.target.closest("a, button, .hover-target")) handleMouseEnter();
    };
    const mouseOutListener = (e) => {
      if (e.target.closest("a, button, .hover-target")) handleMouseLeave();
    };

    document.addEventListener("mouseover", mouseOverListener);
    document.addEventListener("mouseout", mouseOutListener);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", mouseOverListener);
      document.removeEventListener("mouseout", mouseOutListener);
    };
  }, []);

  if (!hasMouse) return null;

  return (
    <>
      {/* Small dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-3 h-3 bg-orange-600/50 rounded-full pointer-events-none z-999"
      />
      {/* Outline */}
      <div
        ref={outlineRef}
        className="fixed top-0 left-0 w-10 h-10 border-2 border-orange-500 rounded-full pointer-events-none z-999"
      />
    </>
  );
};

export default CustomCursor;
