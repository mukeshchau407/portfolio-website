import React, { useState, useEffect } from "react";
import {
  Mail,
  Github,
  Linkedin,
  Facebook,
  Download,
  Settings,
  ArrowRight,
} from "lucide-react";
import AboutMe from "./About";
import Navbar from "./Navbar";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Reveal from "./Reveal";

const socialLinks = [
  {
    href: "https://github.com/mukeshchau407",
    icon: <Github size={24} />,
    label: "GitHub",
  },
  {
    href: "https://linkedin.com/in/mukeshchaud407",
    icon: <Linkedin size={24} />,
    label: "LinkedIn",
  },
  {
    href: "https://facebook.com/mukeshchaud407",
    icon: <Facebook size={24} />,
    label: "Facebook",
  },
  {
    href: "mailto:mukeshchaud407@gmail.com",
    icon: <Mail size={24} />,
    label: "Email",
  },
];

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden relative pt-18 md:pt-12 2xl:pt-36">
        <div className="max-w-5xl mx-auto">
          <div className="container mx-auto px-12 pt-18 md:pt-32 relative z-10 flex items-center justify-center">
            <div className="w-full max-w-sm sm:max-w-xl md:max-w-5xl left-2 right-2">
              <div className="flex flex-col lg:flex-row items-center justify-between">
                {/* Left content */}
                <div
                  className={`flex-1 transition-all duration-700 ${
                    isVisible
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-10 opacity-0"
                  }`}
                >
                  <div className="mb-14 max-w-2xl">
                    <span className="text-white font-bold text-xl md:text-4xl">
                      Namaste(); I'm
                    </span>
                    <h1 className="text-4xl md:text-[80px] 2xl:text-[100px] font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
                      Mukesh ChaudharY.
                    </h1>
                    <h2 className="text-xl md:text-3xl 2xl:text-4xl text-gray-300 mb-2">
                      Full Stack Developer
                    </h2>
                    <p className="text-sm md:text-md 2xl:text-lg text-gray-400 mb-8">
                      I create beautiful, functional, and user-centered digital
                      experiences. Passionate about clean code, innovative
                      design, and turning ideas into reality.
                    </p>
                  </div>

                  <div className="md:flex grid grid-col-reverse gap-12 mb-6 items-center">
                    <a
                      href="mailto:chymukesh5@gmail.com"
                      target="_blank"
                      className="group relative flex items-center w-36 h-9 2xl:w-42 xl:h-12 bg-blue-500 text-blue no-underline shadow-[4px_4px_0_#fff] px-4 overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.25,0.8,0.25,1)] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0_#fff] hover:text-[#f0f0f0] active:translate-x-1 active:translate-y-1 active:shadow-none rounded-lg"
                    >
                      <span className="flex items-center gap-1 text-center font-mono text-sm md:text-md 2xl:text-lg">
                        Let's talk{" "}
                        <ArrowRight
                          size={14}
                          className="text-center items-center mb-1"
                        />
                      </span>
                    </a>
                    <Settings className="size-5 animate-wiggle transition-all duration-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Reveal>
            <AboutMe />
          </Reveal>
          <Reveal>
            <Skills />
          </Reveal>
          <Reveal>
            <Projects />
          </Reveal>
          <Reveal>
            <Contact />
          </Reveal>
        </div>
      </div>
    </>
  );
};

export default Home;
