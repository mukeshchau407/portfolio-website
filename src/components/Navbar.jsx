import React from "react";

const Navbar = () => {
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

        {/* <div className="hidden ml-14 md:flex items-center gap-4">
          <button className="bg-white hover:shadow-[0px_0px_30px_14px] shadow-[0px_0px_30px_7px] hover:shadow-white/50 shadow-white/50 text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-100 transition duration-300">
            Hire Me
          </button>
        </div> */}
        <button id="menuToggle" className="md:hidden text-gray-600">
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
        <div
          id="mobileMenu"
          className="absolute hidden top-48 text-base left-0 bg-black w-full flex-col items-center gap-4"
        >
          <a className="hover:text-indigo-600" href="#">
            &lt;/Home&gt;
          </a>
          <a className="hover:text-indigo-600" href="#">
            &lt;/AboutMe&gt;
          </a>
          <a className="hover:text-indigo-600" href="#">
            &lt;/Skills&gt;
          </a>
          <a className="hover:text-indigo-600" href="#">
            &lt;/Projects&gt;
          </a>
          {/* <button className="bg-white hover:shadow-[0px_0px_30px_14px] shadow-[0px_0px_30px_7px] hover:shadow-white/50 shadow-white/50 text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-100 transition duration-300">
            Get Started
          </button> */}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
