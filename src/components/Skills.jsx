import React from "react";
import htmlIcon from "../assets/icons/html.svg";
import ReactJsIcon from "../assets/icons/react.svg";
import NodeJsIcon from "../assets/icons/nodejs.svg";
import PhpIcon from "../assets/icons/php.svg";
import PythonIcon from "../assets/icons/python.svg";
import JavaIcon from "../assets/icons/java.svg";
import JsIcon from "../assets/icons/js.png";
import GitIcon from "../assets/icons/git.svg";
import GithubIcon from "../assets/icons/github.svg";
import PostmanIcon from "../assets/icons/postman.svg";

const SkillCard = ({ src, alt }) => {
  return (
    <div className="w-36 h-36 sm:w-42 sm:h-42 flex flex-col items-center justify-center rounded-4xl bg-black/10 backdrop-blur-md border border-gray-700 group relative">
      <img
        src={src}
        alt={alt}
        className="w-18 md:w-24 h-18 md:h-24 object-contain"
      />
      <p className="absolute -top-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 text-xs font-medium bg-gray-900 border border-gray-700 rounded-md px-4 py-2 text-cyan-400 transition-all duration-300 z-10">
        {alt}
      </p>
    </div>
  );
};

const SkillsGrid = () => {
  const skills = [
    { src: htmlIcon, alt: "HTML5" },
    { src: JsIcon, alt: "JS" },
    { src: ReactJsIcon, alt: "ReactJs" },
    { src: NodeJsIcon, alt: "NodeJs" },
    { src: PhpIcon, alt: "Php" },
    { src: PythonIcon, alt: "Python" },
    { src: JavaIcon, alt: "Java" },
    { src: GitIcon, alt: "Git" },
    { src: GithubIcon, alt: "GitHub" },
    { src: PostmanIcon, alt: "Postman" },
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-br-to from-slate-900 to-blue-900 text-white"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header Section */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
              &lt;/Skills&gt;
            </h2>
            <div className="flex-1 max-w-sm h-[2px] bg-gradient-to-r from-cyan-400 to-pink-400" />
          </div>
        </div>

        {/* Title Section */}
        <div className="items-center text-center text-3xl font-semibold tracking-wider mb-16">
          <h2>Tech Stack</h2>
        </div>

        {/* Skills Grid */}
        <div className="max-w-4xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-16 justify-center items-center left-2 right-2 sm:mx-auto">
          {skills.map((skill, index) => (
            <SkillCard key={index} src={skill.src} alt={skill.alt} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsGrid;
