import React from "react";
import myImage from "../assets/image/mukeshIcon.png";
import { DownloadCloud } from "lucide-react";

const AboutMe = () => {
  return (
    <section id="about" className="pt-42">
      <div className="container mx-auto px-8 max-w-sm sm:max-w-xl md:max-w-5xl left-2 right-2">
        <div className="flex items-center gap-2 mb-6">
          <h2 className="text-xl md:text-3xl 2xl:text-4xl font-semibold bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-orange-600">
            &lt;/AboutMe&gt;
          </h2>
          <div className="flex-1 max-w-sm h-px mt-1 bg-orange-600" />
        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-6 md:gap-12">
          <div className="mb-8 text-sm md:text-base 2xl:text-lg">
            <p className="mb-4">
              Hi! My name is Mukesh Kumar Chaudhary. I'm a passionate Full Stack
              Developer with a focus on creating digital experiences that are
              both beautiful and functional.
            </p>
            <p className="mb-4">
              I specialize in the MERN stack and love building responsive UIs,
              REST APIs, and clean, scalable components.
            </p>
            <p className="mb-2">
              Technology lets me solve real problems and craft meaningful
              interactions, so I'm always learning and evolving.
            </p>
            <a
              href="/path/to/resume.pdf"
              view
              target="_blank"
              className="group relative flex items-center gap-3 h-10  w-10 hover:w-[110px] rounded-full bg-linear-to-l from-blue-600 to-orange-600 shadow-md overflow-hidden transition-all duration-300 active:translate-x-0.5 active:translate-y-0.5 mt-6"
            >
              <DownloadCloud
                size={20}
                className="ml-3 text-gray-900 transition-all duration-300 group-hover:translate-x-1"
              />

              <span className="text-gray-900 text-sm opacity-0 max-w-0 transition-all duration-300 group-hover:opacity-100 group-hover:max-w-[100px]">
                Resume
              </span>
            </a>
          </div>

          <div className="w-75 md:w-100 lg:w-180 2xl:w-350 aspect-square mx-auto">
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
