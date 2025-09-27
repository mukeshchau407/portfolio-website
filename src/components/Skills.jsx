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

const SkillCard = ({ src, alt }) => {
  return (
    <div className="w-24 h-24 md:w-32 md:h-32 xl:w-38 xl:h-38 flex flex-col items-center justify-center rounded-4xl bg-black/10 backdrop-blur-md border border-gray-700 group relative">
      <img
        src={src}
        alt={alt}
        className="w-12 md:w-18 h-12 md:h-18 xl:w-24 xl:h-24 object-contain"
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
    { src: cssIcon, alt: "CSS3" },
    { src: JsIcon, alt: "JS" },
    { src: ReactJsIcon, alt: "ReactJs" },
    { src: tailwindcssIcon, alt: "TailwindCSS" },
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
    <section
      id="skills"
      className="pt-42 bg-gradient-br-to from-slate-900 to-blue-900 text-white"
    >
      <div className="container mx-auto px-4 max-w-sm sm:max-w-xl md:max-w-6xl left-2 right-2">
        {/* Header Section */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <h2 className="text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
              &lt;/Skills&gt;
            </h2>
            <div className="flex-1 max-w-sm h-[2px] bg-gradient-to-r from-cyan-400 to-pink-400" />
          </div>
        </div>

        {/* Title Section */}
        <div className="items-center text-center text-2xl md:text-3xl font-semibold tracking-wider mb-16">
          <h2>Tech Stack</h2>
        </div>

        {/* Skills Grid */}
        <div className="max-w-4xl grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 gap-6 sm:gap-18 justify-center items-center left-2 right-2 mx-auto">
          {skills.map((skill, index) => (
            <SkillCard key={index} src={skill.src} alt={skill.alt} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsGrid;
