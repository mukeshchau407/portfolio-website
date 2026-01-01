import { Menu, X } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NavbarLink = [
  { href: "#", label: "</Home>" },
  { href: "#about", label: "</AboutMe>" },
  { href: "#skills", label: "</Skills>" },
  { href: "#projects", label: "</Projects>" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    const handleOutside = (e) => {
      if (!isMenuOpen) return;
      if (
        menuRef.current?.contains(e.target) ||
        buttonRef.current?.contains(e.target)
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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10); // adjust threshold if needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  return (
    <div>
      {/* Desktop Navbar */}
      <nav className="max-w-5xl hidden xl:max-w-6xl 2xl:max-w-7xl left-2 right-2 mx-4 sm:mx-6 md:mx-auto border border-white/5 md:flex items-center justify-between px-8 md:px-16 py-5 md:py-6 bg-black/10 backdrop-blur-xl rounded-full fixed top-6 z-50 shadow-sm">
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

        <div className="hidden md:flex text-xs items-center gap-12 ml-7">
          {NavbarLink.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="relative overflow-hidden h-6 font-medium group"
            >
              <span className="block group-hover:-translate-y-full transition-transform duration-300">
                {link.label}
              </span>
              <span className="block absolute top-full left-0 group-hover:-translate-y-full transition-transform duration-300">
                {link.label}
              </span>
            </a>
          ))}
        </div>
      </nav>

      {/* Mobile Toggle Button */}
      <div
        className={`md:hidden fixed top-0 left-0 right-0 z-50000 flex items-center justify-between px-6 py-4 ${
          scrolled ? "backdrop-blur-md shadow-sm border-b border-white/10" : ""
        }`}
      >
        <a className="text-3xl font-bold font-['Caveat',cursive]" href="/">
          Mukesh.
        </a>

        <button
          ref={buttonRef}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {!isMenuOpen ? <Menu size={32} /> : <X size={32} />}
        </button>
      </div>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 z-50 md:hidden border bg-blue-300 border-white/10 shadow-lg flex flex-col items-center"
          >
            {NavbarLink.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={`w-full flex justify-center items-center font-semibold py-6 text-md hover:bg-white/10 transition-colors ${
                  index === 0 ? "mt-24" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
