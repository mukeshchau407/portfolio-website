import React, { useState, useEffect } from "react";
import { Mail, Github, Linkedin, Facebook, Download } from "lucide-react";
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
      <div className="min-h-screen bg-gradient-to-br from-blue-900 to-slate-900 text-white overflow-hidden relative pt-18 md:pt-12">
        <div className="max-w-5xl mx-auto">
          {/* Animated background elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-blue-500 opacity-10 animate-pulse"
                style={{
                  width: `${100 + i * 100}px`,
                  height: `${100 + i * 100}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDuration: `${15 + i * 5}s`,
                  animationDelay: `${i * 2}s`,
                }}
              />
            ))}
          </div>

          <div className="container mx-auto px-4 pt-18 md:pt-32 relative z-10 flex items-center justify-center">
            <div className="w-full max-w-6xl">
              <div className="flex flex-col lg:flex-row items-center justify-between">
                {/* Left content */}
                <div
                  className={`flex-1 transition-all duration-700 ${
                    isVisible
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-10 opacity-0"
                  }`}
                >
                  <div className="mb-6">
                    <span className="text-blue-400 font-semibold">
                      Hello ( ), I'm
                    </span>
                    <h1 className="max-w-2xl text-4xl md:text-6xl font-bold mt-2 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
                      Mukesh Kumar Chaudhary
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-light text-gray-300 mb-6">
                      Full Stack Developer & UI Designer
                    </h2>
                    <p className="text-lg text-gray-400 max-w-3xl mb-8">
                      I create beautiful, functional, and user-centered digital
                      experiences. Passionate about clean code, innovative
                      design, and turning ideas into reality.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-4 mb-6 md:mb-6">
                    <button
                      onClick={() => scrollToSection("projects")}
                      className="flex gap-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-medium hover:from-blue-600 hover:to-cyan-600 hover:shadow-cyan-500/20"
                    >
                      <Download /> Download CV
                    </button>
                    <button
                      onClick={() => scrollToSection("contact")}
                      className="px-4 py-3 border border-blue-500 text-blue-300 rounded-lg font-medium hover:bg-blue-500/10 transition-all"
                    >
                      Contact Me
                    </button>
                  </div>

                  <div className="flex items-center space-x-6">
                    {socialLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors border rounded-full p-2"
                      >
                        {link.icon}
                      </a>
                    ))}
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
