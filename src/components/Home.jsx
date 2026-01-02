import React, { useState, useEffect } from "react";
import { Mail, Github, Linkedin, Facebook, ArrowRight } from "lucide-react";
import AboutMe from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Reveal from "./Reveal";
import KofiWidget from "./KofiWidget";
import SettingsButton from "./SettingsButton";
import { easeInOut, motion } from "framer-motion";
import ScrollDirection from "./ScrollDirection";

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

const Home = ({ darkMode, setDarkMode }) => {
  const scrollDir = ScrollDirection();
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
      <div className="min-h-screen overflow-hidden relative pt-32 md:pt-12 2xl:pt-36">
        <div className="absolute inset-0 -z-10 bg-linear-to-br from-blue-700/30 via-purple-700/30 to-cyan-700/30 transform transition-colors duration-500"></div>
        <div className="">
          <div className="container max-w-4xl mx-auto px-12 pt-32 md:pt-32 relative z-10 flex items-center justify-center">
            <div className="w-full max-w-sm sm:max-w-xl md:max-w-5xl left-2 right-2">
              <div className="flex flex-col lg:flex-row items-center justify-between">
                {/* Left content */}
                <div
                  className={`flex-1 transition-all duration-700 ${
                    isVisible
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-20 opacity-0"
                  }`}
                >
                  <div className="mb-14 max-w-2xl">
                    <span className="font-bold text-xl md:text-4xl">
                      Namaste(); I'm
                    </span>
                    <h1 className="text-4xl md:text-[80px] 2xl:text-[100px] font-extrabold bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-cyan-300">
                      Mukesh Chaudhary.
                    </h1>
                    <h2 className="text-xl md:text-5xl 2xl:text-6xl font-black text-gray-400 mb-2">
                      I design & code for the improvement.
                    </h2>
                    <p className="text-sm md:text-base 2xl:text-lg text-gray-300 dark:text-gray-500 mb-8">
                      I create beautiful, functional, and user-centered digital
                      experiences. Passionate about clean code, innovative
                      design, and turning ideas into reality.
                    </p>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: scrollDir === "down" ? -70 : 90 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    viewport={{ once: false, amount: 0.2 }}
                    className="md:flex-row flex flex-col-reverse gap-12 mb-12 md:items-center"
                  >
                    <a
                      href="mailto:chymukesh5@gmail.com"
                      target="_blank"
                      className="group relative flex text-white items-center w-36 h-9 2xl:w-42 xl:h-12 bg-blue-500 text-blue no-underline shadow-[4px_4px_0_#FF8040] px-4 overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.25,0.8,0.25,1)] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0_#FF8040] hover:text-[#f0f0f0] active:translate-x-1 active:translate-y-1 active:shadow-none rounded-lg"
                    >
                      <span className="flex items-center gap-1 text-center font-mono text-sm md:text-md 2xl:text-lg">
                        Let's talk{" "}
                        <ArrowRight
                          size={14}
                          className="text-center items-center mb-0.5 ease-out transition-all group-hover:translate-x-1"
                        />
                      </span>
                    </a>
                    <SettingsButton
                      darkMode={darkMode}
                      setDarkMode={setDarkMode}
                    />
                  </motion.div>
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
      <div className="flex justify-end sticky bottom-4 right-4">
        <KofiWidget />
      </div>
    </>
  );
};

export default Home;
