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
    <div className="w-34 h-34 md:w-32 md:h-32 2xl:h-38 2xl:w-38  flex flex-col items-center justify-center rounded-3xl bg-gray-900/20 backdrop-blur-md border border-white/5 group relative">
      <img
        src={src}
        alt={alt}
        className="w-16 h-16 2xl:h-20 2xl:w-20 object-contain"
      />
      <p className="absolute -top-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 text-xs font-medium rounded-sm border border-white/5 bg-gray-900 px-2 py-0.5 text-white/90 transition-all duration-300 z-10">
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
    { src: tailwindcssIcon, alt: "Tailwind" },
    { src: NodeJsIcon, alt: "NodeJs" },
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
    <section id="skills" className="pt-42">
      <div className="container mx-auto px-8 max-w-sm sm:max-w-xl md:max-w-5xl left-2 right-2">
        {/* Header Section */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-white">
              &lt;/Skills&gt;
            </h2>
            <div className="flex-1 max-w-sm h-[1px] mt-1 bg-white" />
          </div>
        </div>

        {/* Title Section */}
        <div className="items-center text-center text-xl md:text-3xl 2xl:text-34l font-semibold tracking-wider mb-16">
          <h2>Tech Stack</h2>
        </div>

        {/* Skills Grid */}
        <div className="max-w-xl md:max-w-3xl 2xl:max-w-4xl grid grid-cols-2 md:grid-cols-4 2xl:grid-cols-5 gap-12 justify-center items-center left-2 right-2 text-center tracking-wider mx-auto">
          {skills.map((skill, index) => (
            <SkillCard key={index} src={skill.src} alt={skill.alt} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsGrid;
