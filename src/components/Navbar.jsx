import { Menu, X } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

const NavbarLink = [
  {
    href: "#",
    label: "</Home>",
  },
  {
    href: "#about",
    label: "</AboutMe>",
  },
  {
    href: "#skills",
    label: "</Skills>",
  },
  { href: "#projects", label: "</Projects>" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState();
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleOutside = (e) => {
      if (!isMenuOpen) return;
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
    <div>
      <nav className="max-w-6xl left-0 right-0 sm:left-2 sm:right-2 mx-4 sm:mx-6 md:mx-auto border border-white/10 flex items-center justify-between px-8 md:px-16 py-5 md:py-8 bg-black/10 backdrop-blur-md text-white rounded-full fixed top-6 z-50">
        <a href="/">
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
          {NavbarLink.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="relative overflow-hidden font-semibold h-6 group"
            >
              <span className="block group-hover:-translate-y-full transition-transform duration-300">
                {link.label}
              </span>
              <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">
                {link.label}
              </span>
            </a>
          ))}
        </div>
        <button
          ref={buttonRef}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-600"
        >
          {!isMenuOpen ? <Menu /> : <X />}
        </button>
      </nav>
      <div
        ref={menuRef}
        className={`fixed left-0 right-0 top-24 px-4 z-40 md:hidden ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="max-w-6xl mx-auto mt-6 rounded-2xl text-white bg-black/10 backdrop-blur-md border border-white/10 shadow-lg py-6 flex flex-col items-center gap-6">
          {NavbarLink.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="w-full text-center font-semibold py-2 hover:bg-white/10 transition-colors rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
