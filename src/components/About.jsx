import React from "react";
import myImage from "../assets/image/mukeshIcon.png";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="pt-42 bg-gradient-br-to from-slate-900 to-blue-900  text-white"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center gap-2 mb-6">
          <h2 className="text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
            &lt;/AboutMe&gt;
          </h2>
          <div className="flex-1 max-w-sm h-[2px] bg-gradient-to-r from-cyan-400 to-pink-400" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="bg-slate-800/30 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-slate-700/50">
              <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 p-1">
                <div className="w-full h-full rounded-full bg-slate-700 overflow-hidden">
                  <img
                    src={myImage}
                    alt="Mukesh Chaudhary"
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">
                  Mukesh Kumar Chaudhary
                </h3>
                <p className="text-cyan-400 mb-6">Full Stack Developer</p>

                <div className="inline-flex items-center bg-slate-700/50 px-4 py-2 rounded-full">
                  <div className="w-3 h-3 bg-green-400 rounded-full mr-2"></div>
                  <span className="text-sm">
                    Seeking Internship Opportunities
                  </span>
                </div>
                <div></div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-500/10 rounded-full z-0"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-cyan-500/10 rounded-full z-0"></div>
          </div>
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-200">
                My Journey
              </h3>
              <p className="text-gray-300 mb-4">
                I'm a passionate Full Stack Developer with a focus on creating
                digital experiences that are both beautiful and functional. My
                journey in web development started during my college years, and
                I've been hooked ever since.
              </p>
              <p className="text-gray-300 mb-4">
                I specialize in the MERN stack (MongoDB, Express.js, React,
                Node.js) and have experience building responsive web
                applications, RESTful APIs, and interactive user interfaces. I
                believe in writing clean, maintainable code and creating
                intuitive user experiences.
              </p>
              <p className="text-gray-300">
                What drives me is the endless potential of technology to solve
                real-world problems and create meaningful connections. I'm
                constantly learning and expanding my skill set to stay at the
                forefront of web development.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-200">
                My Approach
              </h3>
              <p className="text-gray-300">
                Combining my background in visual arts with web development
                allows me to create unique digital experiences that are both
                aesthetically pleasing and functionally robust. I believe that
                great design and seamless functionality should work together to
                create memorable user experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
