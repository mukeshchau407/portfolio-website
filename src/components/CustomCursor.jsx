import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const CustomCursor = () => {
  const dotRef = useRef(null);
  const outlineRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const outline = outlineRef.current;

    // Center both dot and outline
    gsap.set([dot, outline], { xPercent: -50, yPercent: -50 });

    // Mouse move handler
    const moveCursor = (e) => {
      const { clientX: x, clientY: y } = e;
      gsap.to(dot, { duration: 0, x: x, y: y });
      gsap.to(outline, { duration: 0.4, x: x, y: y, ease: "power3.out" });
    };

    window.addEventListener("mousemove", moveCursor);

    // Hover only affects dot
    const hoverTargets = document.querySelectorAll("a, button, .hover-target");

    const handleMouseEnter = () => {
      gsap.to(dot, { duration: 0.3, scale: 2 });
    };

    const handleMouseLeave = () => {
      gsap.to(dot, { duration: 0.3, scale: 1 });
    };

    const hasMouse =
      window.matchMedia("pointer: fine").matches &&
      window.matchMedia("(hover: hover)").matches;

    if (!hasMouse) {
      console.log("No mouse detected, disabling custom cursor.");
      return;
    }

    hoverTargets.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      hoverTargets.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Dot */}{" "}
      <div
        ref={dotRef}
        className="fixed w-2.5 h-2.5 bg-orange-400/90 rounded-full pointer-events-none z-[9999] top-0 left-0"
      />
      {/* Outline */}{" "}
      <div
        ref={outlineRef}
        className="fixed w-10 h-10 border-2 border-white/70 rounded-full pointer-events-none z-[9999] top-0 left-0"
      />
    </>
  );
};

export default CustomCursor;
