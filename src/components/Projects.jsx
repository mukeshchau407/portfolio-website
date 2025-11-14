import React from "react";
import { ExternalLink, Github, Eye } from "lucide-react";

const Projects = () => {
  const screenshotUrl = (url) =>
    `https://api.microlink.io/?url=${encodeURIComponent(
      url
    )}&meta=false&screenshot=true&embed=screenshot.url`;

  const projects = [
    {
      id: 1,
      title: "Grocery E-Commerce ",
      description:
        "A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features user authentication, product filtering, shopping cart, and payment integration.",
      image: screenshotUrl("https://grocery-mart-nu.vercel.app"),
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      githubUrl: "https://github.com/mukeshchau407/Grocery-Market.git",
      liveUrl: "https://grocery-mart-nu.vercel.app",
    },
    {
      id: 2,
      title: "Netflix Clone",
      description:
        "A productivity application for managing tasks and projects with drag-and-drop functionality, team collaboration, and real-time updates.",
      image: screenshotUrl("https://netflix-clone-three-sand.vercel.app"),
      technologies: ["React", "Firebase", "Material UI", "Redux"],
      githubUrl: "https://github.com/mukeshchau407/Netflix-Clone.git",
      liveUrl: "https://netflix-clone-three-sand.vercel.app",
    },
    {
      id: 3,
      title: "College Management System",
      description:
        "A web application for managing college operations, including student enrollment, course management, and faculty assignments.",
      image: screenshotUrl(
        "https://college-management-sigma-pearl.vercel.app/"
      ),
      technologies: [
        "React.js",
        "Tailwindcss",
        "Node.js",
        "Express",
        "MongoDB",
      ],
      githubUrl: "https://github.com/mukeshchau407/college-management.git",
      liveUrl: "https://college-management-sigma-pearl.vercel.app/",
    },
  ];

  return (
    <section
      id="projects"
      className="pt-42 bg-gradient-br-to from-slate-900 to-blue-900 text-white"
    >
      <div className="container mx-auto px-8 max-w-sm sm:max-w-xl md:max-w-5xl left-2 right-2">
        <div className="flex items-center gap-2 mb-12">
          <h2 className="text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
            &lt;/Projects&gt;
          </h2>
          <div className="flex-1 max-w-sm h-[2px] bg-gradient-to-r from-cyan-400 to-pink-400" />
        </div>

        <div className="mb-16">
          <div className="max-w-3xl m-auto grid grid-cols-1 gap-16">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-slate-800/30 backdrop-blur-md rounded-4xl overflow-hidden shadow-xl border border-slate-700/50"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative group">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 lg:h-full m-auto items-center object-contain"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                      <div className="flex space-x-4">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-slate-800/80 p-3 rounded-full hover:bg-cyan-600 transition-colors"
                        >
                          <Github size={20} />
                        </a>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-slate-800/80 p-3 rounded-full hover:bg-cyan-600 transition-colors"
                        >
                          <ExternalLink size={20} />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="p-8">
                    <h4 className="text-2xl font-bold mb-3 text-white">
                      {project.title}
                    </h4>
                    <p className="text-gray-300 mb-6">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-cyan-900/30 text-cyan-300 text-sm rounded-full border border-cyan-800/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-4">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 bg-slate-700/50 rounded-lg hover:bg-slate-700/80 transition-colors"
                      >
                        <Github size={16} className="mr-2" />
                        Code
                      </a>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all"
                      >
                        <Eye size={16} className="mr-2" />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative text-center mt-16 pointer-events-auto">
          <p className="text-gray-300 mb-6 text-lg tracking-wide">
            Interested in seeing more of my work?
          </p>
          <a
            href="https://github.com/mukeshchau407"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gradient-to-r from-blue-500 to-slate-500 hover:from-slate-500 hover:to-blue-500 px-6 py-3 rounded-full transition-all"
          >
            <Github size={22} className="mr-2" />
            View All Project on Github
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
