import React, { useState, useEffect } from "react";
import {
  Code,
  Palette,
  Smartphone,
  Rocket,
  Mail,
  Github,
  Linkedin,
  Facebook,
} from "lucide-react";
import AboutMe from "./About";
import Navbar from "./Navbar";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

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
      <div className="min-h-screen bg-gradient-to-br from-blue-900 to-slate-900 text-white overflow-hidden relative pt-46 md:pt-16">
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

        <div className="container mx-auto px-4 py-8 relative z-10 flex items-center justify-center min-h-screen">
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
                    Hello, I'm
                  </span>
                  <h1 className="text-5xl md:text-6xl font-bold mt-2 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
                    Mukesh Kumar Chaudhary
                  </h1>
                  <h2 className="text-2xl md:text-3xl font-light text-gray-300 mb-6">
                    Full Stack Developer & UI Designer
                  </h2>
                  <p className="text-lg text-gray-400 max-w-lg mb-8">
                    I create beautiful, functional, and user-centered digital
                    experiences. Passionate about clean code, innovative design,
                    and turning ideas into reality.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 mb-12">
                  <button
                    onClick={() => scrollToSection("projects")}
                    className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-medium hover:from-blue-600 hover:to-cyan-600 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-cyan-500/20"
                  >
                    View My Work
                  </button>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="px-6 py-3 border border-blue-500 text-blue-300 rounded-lg font-medium hover:bg-blue-500/10 transition-all"
                  >
                    Contact Me
                  </button>
                </div>

                <div className="flex items-center space-x-6">
                  <a
                    href="https://github.com/mukeshchau407"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Github size={24} />
                  </a>
                  <a
                    href="https://linkedin.com/in/mukeshchaud407"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a
                    href="https://facebook.com/mukeshchaud407"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Facebook size={24} />
                  </a>
                  <a
                    href="mailto:chymukesh5@gmail.com"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Mail size={24} />
                  </a>
                </div>
              </div>

              {/* Right content - Animated cards */}
              <div
                className={`flex-1 mt-16 lg:mt-0 transition-all duration-700 ${
                  isVisible
                    ? "translate-x-0 opacity-100"
                    : "translate-x-10 opacity-0"
                }`}
              >
                <div className="relative max-w-lg mx-auto">
                  {/* Main profile card */}
                  <div className="bg-slate-800/70 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-slate-700/50 transform rotate-2">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mr-4">
                        <span className="text-xl font-bold">MC</span>
                      </div>
                      <div>
                        <h3 className="font-semibold">
                          Mukesh Kumar Chaudhary
                        </h3>
                        <p className="text-cyan-400 text-sm">
                          Full Stack Developer
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-slate-700/50 p-3 rounded-lg">
                        <Code size={20} className="text-blue-400 mb-1" />
                        <p className="text-sm">Web Development</p>
                      </div>
                      <div className="bg-slate-700/50 p-3 rounded-lg">
                        <Palette size={20} className="text-blue-400 mb-1" />
                        <p className="text-sm">UI/UX Design</p>
                      </div>
                      <div className="bg-slate-700/50 p-3 rounded-lg">
                        <Smartphone size={20} className="text-blue-400 mb-1" />
                        <p className="text-sm">Mobile Apps</p>
                      </div>
                      <div className="bg-slate-700/50 p-3 rounded-lg">
                        <Rocket size={20} className="text-blue-400 mb-1" />
                        <p className="text-sm">DevOps</p>
                      </div>
                    </div>

                    <div className="bg-slate-700/30 p-4 rounded-lg">
                      <p className="text-sm text-gray-400">
                        Currently working on
                      </p>
                      <p className="text-cyan-400">
                        Mern-Stack E-commerce Platform
                      </p>
                    </div>
                  </div>

                  {/* Floating cards */}
                  <div className="absolute -top-4 -right-4 bg-slate-800/80 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-slate-700/50 w-32 transform -rotate-6">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-green-400 rounded-full mr-2"></div>
                      <span className="text-xs">Available for work</span>
                    </div>
                  </div>

                  <div className="absolute -bottom-4 -left-4 bg-slate-800/80 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-slate-700/50 w-36 transform rotate-6">
                    <p className="text-xs font-semibold text-cyan-400">
                      Seeking for Internship Opportunities
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
};

export default Home;
