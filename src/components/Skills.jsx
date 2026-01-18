import React from "react";
import htmlIcon from "../assets/icons/html.svg";
import cssIcon from "../assets/icons/css.svg";
import JsIcon from "../assets/icons/js.png";
import ReactJsIcon from "../assets/icons/react.svg";
import tailwindcssIcon from "../assets/icons/tailwindcss.svg";
import NodeJsIcon from "../assets/icons/nodejs.svg";
import expressjsIcon from "../assets/icons/expressjs.svg";
import nextjsIcon from "../assets/icons/nextjs.svg";
import PhpIcon from "../assets/icons/php.svg";
import PythonIcon from "../assets/icons/python.svg";
import JavaIcon from "../assets/icons/java.svg";
import GitIcon from "../assets/icons/git.svg";
import GithubIcon from "../assets/icons/github.svg";
import PostmanIcon from "../assets/icons/postman.svg";
import VscodeIcon from "../assets/icons/vscode.svg";
import MangodbIcon from "../assets/icons/mongodb.svg";
import { motion } from "framer-motion";
import ScrollDirection from "./ScrollDirection";

const SkillCard = ({ src, alt, scrollDir }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, y: scrollDir === "down" ? -70 : 70 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1, ease: "easeInOut" }}
      viewport={{ once: false, amount: 0.3 }}
      className="w-34 h-34 md:w-32 md:h-32 2xl:h-38 2xl:w-38  flex flex-col items-center justify-center rounded-3xl lg:rounded-4xl bg-gray-700/10 backdrop-blur-md border border-white/10 group relative shadow-lg"
    >
      <img
        src={src}
        alt={alt}
        className="w-16 h-16 xl:h-18 xl:w-18 object-contain group-hover:scale-110 transition-transform duration-500"
      />
      <p className="absolute -top-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 text-xs font-medium rounded-sm border border-white/10 backdrop-blur-lg bg-gray-900/40 shadow-xl px-2 py-0.5 text-white/90 transition-all duration-300 z-10">
        {alt}
      </p>
    </motion.div>
  );
};

const SkillsGrid = () => {
  const scrollDir = ScrollDirection();
  const skills = [
    { src: htmlIcon, alt: "HTML5" },
    { src: cssIcon, alt: "CSS3" },
    { src: JsIcon, alt: "JS" },
    { src: ReactJsIcon, alt: "ReactJs" },
    { src: tailwindcssIcon, alt: "Tailwind" },
    { src: NodeJsIcon, alt: "NodeJs" },
    { src: expressjsIcon, alt: "ExpressJs" },
    { src: nextjsIcon, alt: "NextJs" },
    { src: PhpIcon, alt: "Php" },
    { src: PythonIcon, alt: "Python" },
    { src: JavaIcon, alt: "Java" },
    { src: MangodbIcon, alt: "MangoDB" },
    { src: GitIcon, alt: "Git" },
    { src: GithubIcon, alt: "GitHub" },
    { src: VscodeIcon, alt: "VsCode" },
    { src: PostmanIcon, alt: "Postman" },
  ];

  return (
    <section id="skills" className="pt-32 md:pt-38">
      <div className="container mx-auto px-8 max-w-sm sm:max-w-xl md:max-w-4xl xl:max-w-5xl left-2 right-2">
        <div className="flex items-center gap-2 mb-8">
          <h2 className="text-xl md:text-3xl 2xl:text-4xl font-semibold bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-orange-600">
            &lt;/Skills&gt;
          </h2>
          <div className="flex-1 max-w-sm h-px mt-1 bg-orange-600" />
        </div>

        {/* Title Section */}
        <div className="items-center text-center text-xl md:text-3xl 2xl:text-4xl font-semibold tracking-wider mb-16">
          <h2>Tech Stack</h2>
        </div>

        {/* Skills Grid */}
        <div className="mx-auto md:max-w-md xl:max-w-2xl 2xl:max-w-5xl flex flex-cols flex-wrap place-items-center gap-6 justify-center items-center left-2 right-2 text-center tracking-wider">
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              src={skill.src}
              alt={skill.alt}
              scrollDir={scrollDir}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsGrid;
