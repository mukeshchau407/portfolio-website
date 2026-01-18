import React from "react";
import { ExternalLink, Github, ShoppingCart, Star } from "lucide-react";
import { motion } from "framer-motion";
import scrollDir from "./ScrollDirection";
import { RiCollageLine, RiNetflixFill } from "react-icons/ri";

const Projects = () => {
  const screenshotUrl = (url) =>
    `https://api.microlink.io/?url=${encodeURIComponent(
      url
    )}&meta=false&screenshot=true&embed=screenshot.url`;

  const projects = [
    {
      id: 1,
      logo: <ShoppingCart size={18} className="text-orange-500" />,
      title: "Grocery E-Commerce",
      repo: "Grocery-mart",
      description:
        "A full-stack e-commerce application with authentication, product filtering, cart management, and Stripe payments.",
      image: screenshotUrl("https://grocery-mart-nu.vercel.app"),
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      githubUrl: "https://github.com/mukeshchau407/Grocery-mart",
      liveUrl: "https://grocery-mart-nu.vercel.app",
    },
    {
      id: 2,
      logo: <RiNetflixFill size={18} className="text-red-600" />,
      title: "Netflix Clone",
      repo: "Netflix-Clone",
      description:
        "A Netflix-inspired streaming UI built with React and Firebase, featuring authentication and responsive design.",
      image: screenshotUrl("https://netflix-clone-three-sand.vercel.app"),
      technologies: ["React", "CSS3", "Firebase", "Redux", "Material UI"],
      githubUrl: "https://github.com/mukeshchau407/Netflix-Clone",
      liveUrl: "https://netflix-clone-three-sand.vercel.app",
    },
    {
      id: 3,
      logo: <RiCollageLine size={18} className="text-green-600" />,
      title: "College Management",
      repo: "college-management",
      description:
        "A web application to manage students, courses, and faculty with a modern dashboard and role-based access.",
      image: screenshotUrl("https://hamropathshala.vercel.app"),
      technologies: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
      githubUrl: "https://github.com/mukeshchau407/college-management",
      liveUrl: "https://hamropathshala.vercel.app",
    },
  ];

  return (
    <section id="projects" className="pt-32 md:pt-38">
      <div className="container mx-auto px-8 max-w-sm sm:max-w-xl md:max-w-4xl xl:max-w-5xl left-2 right-2">
        <div className="flex items-center gap-2 mb-16">
          <h2 className="text-xl md:text-3xl 2xl:text-4xl font-semibold bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-orange-600">
            &lt;/Projects&gt;
          </h2>
          <div className="flex-1 max-w-sm h-px mt-1 bg-orange-600" />
        </div>

        {/* Projects Grid */}
        <div className="grid gap-24 max-w-2xl mx-auto">
          {projects.map((project) => (
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                y: scrollDir === "down" ? -40 : 40,
              }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.3, ease: "easeIn" }}
              viewport={{ once: false }}
              key={project.id}
              className="group flex-col grid sm:grid-cols-2  backdrop-blur-md bg-gray-600/20 border border-gray-900/10 rounded-4xl overflow-hidden transition-transform duration-300 shadow-xl hover:shadow-2xl"
            >
              {/* Project Content */}
              <div className="p-5">
                <div className="grid md:text-start gap-2 md:grid mb-3">
                  <h1 className="flex justify-center h-9 w-9 items-center rounded-full bg-gray-300/40 ">
                    {project.logo}
                  </h1>
                  <h3 className=" text-sm sm:text-xl font-extrabold">
                    {project.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm mb-4">{project.description}</p>

                {/* Tech Stack */}
                <div className="hidden md:flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="text-[0.6rem] font-semibold px-2 py-1 rounded-xl text-gray-500 bg-white/10 shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex justify-start mr-6 gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden sm:flex items-center text-sm font-semibold text-gray-300 hover:text-gray-200 border border-gray-700/20 hover:border-gray-900/20 px-3 py-1 rounded-lg bg-gray-800/50  transition"
                  >
                    <Github size={16} className="mr-1" />
                    Code
                  </a>

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center font-semibold text-sm transition"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    Live
                  </a>
                </div>
              </div>
              {/* Project Image */}
              <div className="ml-14 sm:ml-0 sm:mt-14 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-auto sm:h-full object-cover object-left-top rounded-tl-2xl sm:rounded-tl-3xl shadow-md transition-transform duration-300 group-hover:scale-101"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6 text-sm md:text-md">
            Interested in seeing more of my work?
          </p>
          <a
            href="https://github.com/mukeshchau407"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-xs md:text-md rounded-full bg-gradient-to-r from-blue-500 to-orange-500 hover:from-blue-600 hover:to-orange-600 transition text-white font-medium duration-300 shadow-lg hover:shadow-xl"
          >
            <Github size={20} />
            View Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
