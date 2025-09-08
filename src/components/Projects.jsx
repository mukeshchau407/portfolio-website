import React from "react";
import { ExternalLink, Github, Eye } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features user authentication, product filtering, shopping cart, and payment integration.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: true,
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A productivity application for managing tasks and projects with drag-and-drop functionality, team collaboration, and real-time updates.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Firebase", "Material UI", "Redux"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: true,
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "A responsive weather application that displays current weather conditions and forecasts for any location worldwide with beautiful data visualizations.",
      image: "/api/placeholder/400/250",
      technologies: ["JavaScript", "OpenWeather API", "Chart.js", "CSS3"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: false,
    },
    {
      id: 4,
      title: "Portfolio Website",
      description:
        "A modern portfolio website built with React and Tailwind CSS, featuring smooth animations and responsive design for all devices.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: false,
    },
    {
      id: 5,
      title: "Social Media Dashboard",
      description:
        "A comprehensive dashboard for social media analytics with data visualization, user engagement metrics, and content performance tracking.",
      image: "/api/placeholder/400/250",
      technologies: ["Next.js", "TypeScript", "GraphQL", "D3.js"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: false,
    },
    {
      id: 6,
      title: "Recipe Finder App",
      description:
        "A web application that helps users discover recipes based on ingredients they have, with dietary filters and step-by-step cooking instructions.",
      image: "/api/placeholder/400/250",
      technologies: ["Vue.js", "Spoonacular API", "Vuex", "CSS Grid"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: false,
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-br-to from-slate-900 to-blue-900 text-white"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
            &lt;Projects /&gt;
          </h2>
          <p className="text-lg text-gray-300 max-w-4xl">
            Here are some of my recent projects that showcase my skills and
            creativity
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-gray-200 border-l-4 border-cyan-400 pl-3">
            Featured Projects
          </h3>
          <div className="grid grid-cols-1 gap-8">
            {projects
              .filter((project) => project.featured)
              .map((project) => (
                <div
                  key={project.id}
                  className="bg-slate-800/30 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl border border-slate-700/50"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="relative group">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 lg:h-full object-cover"
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
                      <p className="text-gray-300 mb-6">
                        {project.description}
                      </p>
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

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-gray-200 border-l-4 border-cyan-400 pl-3">
            Other Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects
              .filter((project) => !project.featured)
              .map((project) => (
                <div
                  key={project.id}
                  className="bg-slate-800/30 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300 group"
                >
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                      <div className="flex space-x-3">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-slate-800/80 p-2 rounded-full hover:bg-cyan-600 transition-colors"
                        >
                          <Github size={16} />
                        </a>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-slate-800/80 p-2 rounded-full hover:bg-cyan-600 transition-colors"
                        >
                          <ExternalLink size={16} />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-slate-700/40 text-cyan-300 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-slate-700/40 text-cyan-300 text-xs rounded-full">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                    <div className="flex justify-between items-center">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 text-sm hover:text-cyan-300 transition-colors flex items-center"
                      >
                        <Eye size={14} className="mr-1" />
                        View Project
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 text-sm hover:text-white transition-colors flex items-center"
                      >
                        <Github size={14} className="mr-1" />
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-300 mb-6">
            Interested in seeing more of my work?
          </p>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-medium hover:from-blue-600 hover:to-cyan-600 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-cyan-500/20"
          >
            <Github size={20} className="mr-2" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
