import React from "react";
import myImage from "../assets/image/mukeshIcon.png";

const AboutMe = () => {
  return (
    <section id="about" className="pt-42">
      <div className="container mx-auto px-8 max-w-sm sm:max-w-xl md:max-w-5xl left-2 right-2">
        <div className="flex items-center gap-2 mb-6">
          <h2 className="text-xl md:text-3xl 2xl:text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-white">
            &lt;/AboutMe&gt;
          </h2>
          <div className="flex-1 max-w-sm h-[1px] mt-1 bg-white" />
        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-12">
          <div className="mb-8 text-sm md:text-base 2xl:text-lg">
            <p className="text-gray-300 mb-4">
              Hi! My name is Mukesh Kumar Chaudhary. I'm a passionate Full Stack
              Developer with a focus on creating digital experiences that are
              both beautiful and functional.
            </p>
            <p className="text-gray-300 mb-4">
              I specialize in the MERN stack and love building responsive UIs,
              REST APIs, and clean, scalable components.
            </p>
            <p className="text-gray-300">
              Technology lets me solve real problems and craft meaningful
              interactions, so I'm always learning and evolving.
            </p>
          </div>

          <div className="w-60 sm:w-70 md:w-72 lg:w-150 aspect-square mx-auto">
            <img
              src={myImage}
              alt="Mukesh Kumar Chaudhary"
              className="object-cover object-top h-full w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
