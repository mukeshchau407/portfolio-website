import React, { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState();
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  // click/touch outside handler
  useEffect(() => {
    const handleOutside = (e) => {
      if (!isMenuOpen) return;
      // if click is inside menu or on the toggle button, ignore
      if (
        (menuRef.current && menuRef.current.contains(e.target)) ||
        (buttonRef.current && buttonRef.current.contains(e.target))
      ) {
        return;
      }
      setIsMenuOpen(false);
    };

    document.addEventListener("mousedown", handleOutside);
    document.addEventListener("touchstart", handleOutside);
    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("touchstart", handleOutside);
    };
  }, [isMenuOpen]);

  return (
    <div className="">
      <nav className="max-w-6xl left-0 right-0 mx-4 sm:mx-6 md:mx-auto  flex items-center justify-between px-8 md:px-16 py-6 md:py-8 bg-black/10 backdrop-blur-md text-white rounded-full fixed top-6 z-50">
        <a href="#">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="4.706" cy="16" r="4.706" fill="#D9D9D9" />
            <circle cx="16.001" cy="4.706" r="4.706" fill="#D9D9D9" />
            <circle cx="16.001" cy="27.294" r="4.706" fill="#D9D9D9" />
            <circle cx="27.294" cy="16" r="4.706" fill="#D9D9D9" />
          </svg>
        </a>
        <div className="hidden md:flex text-base items-center gap-18 ml-7">
          <a
            href="#"
            className="relative overflow-hidden font-semibold h-6 group"
          >
            <span className="block group-hover:-translate-y-full transition-transform duration-300">
              &lt;/Home&gt;
            </span>
            <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">
              &lt;/Home&gt;
            </span>
          </a>
          <a
            href="#about"
            className="relative overflow-hidden font-semibold h-6 group"
          >
            <span className="block group-hover:-translate-y-full transition-transform duration-300">
              &lt;/AboutMe&gt;
            </span>
            <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">
              &lt;/AboutMe&gt;
            </span>
          </a>
          <a
            href="#skills"
            className="relative overflow-hidden font-semibold h-6 group"
          >
            <span className="block group-hover:-translate-y-full transition-transform duration-300">
              &lt;/Skills&gt;
            </span>
            <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">
              &lt;/Skills&gt;
            </span>
          </a>
          <a
            href="#projects"
            className="relative overflow-hidden font-semibold h-6 group"
          >
            <span className="block group-hover:-translate-y-full transition-transform duration-300">
              &lt;/Projects&gt;
            </span>
            <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">
              &lt;/Projects&gt;
            </span>
          </a>
        </div>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-600"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
      <div
        ref={menuRef}
        className={`fixed left-0 right-0 top-24 px-4 z-40 md:hidden ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <div
          className="max-w-6xl mx-auto mt-6 rounded-2xl text-white bg-black/10 backdrop-blur-md border border-white/10 shadow-lg py-6 flex flex-col items-center gap-6"
          style={{
            WebkitBackdropFilter: "blur(12px)",
            backdropFilter: "blur(12px)",
          }}
        >
          <a
            className="hover:text-indigo-600"
            href="#"
            onClick={() => setIsMenuOpen(false)}
          >
            &lt;/Home&gt;
          </a>
          <a
            className="hover:text-indigo-600"
            href="#about"
            onClick={() => setIsMenuOpen(false)}
          >
            &lt;/AboutMe&gt;
          </a>
          <a
            className="hover:text-indigo-600"
            href="#skills"
            onClick={() => setIsMenuOpen(false)}
          >
            &lt;/Skills&gt;
          </a>
          <a
            className="hover:text-indigo-600"
            href="#projects"
            onClick={() => setIsMenuOpen(false)}
          >
            &lt;/Projects&gt;
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
