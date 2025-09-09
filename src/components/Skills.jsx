import React from "react";
import htmlIcon from "../assets/icons/html.svg";
import ReactJsIcon from "../assets/icons/react.svg";
import NodeJsIcon from "../assets/icons/nodejs.svg";
import PhpIcon from "../assets/icons/php.svg";
import PythonIcon from "../assets/icons/python.svg";
import JavaIcon from "../assets/icons/java.svg";
import JsIcon from "../assets/icons/js.png";

const SkillCard = ({ src, alt }) => {
  return (
    <div className="w-38 h-42 flex flex-col items-center justify-center rounded-4xl bg-black/10 backdrop-blur-md border border-gray-700">
      <img src={src} alt={alt} className="w-28 h-28 object-contain" />
      {/* <p className="mt-3 text-sm text-gray-300">{alt}</p> */}
    </div>
  );
};

const SkillsGrid = () => {
  const skills = [
    { src: htmlIcon, alt: "HTML5" },
    { src: ReactJsIcon, alt: "ReactJs" },
    { src: NodeJsIcon, alt: "NodeJs" },
    { src: PhpIcon, alt: "Php" },
    { src: PythonIcon, alt: "Python" },
    { src: JavaIcon, alt: "Java" },
    { src: JsIcon, alt: "JavaScript" },
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
        <div className="items-center text-center text-3xl font-semibold tracking-wider mb-12">
          <h2>Tech Stack</h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-16 justify-items-center">
          {skills.map((skill, index) => (
            <SkillCard key={index} src={skill.src} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsGrid;
