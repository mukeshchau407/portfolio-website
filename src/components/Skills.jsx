import React from "react";

const Skills = () => {
  const techStack = [
    {
      name: "HTML",
      level: 90,
      projects: 15,
      color: "from-orange-500 to-orange-600",
    },
    {
      name: "CSS",
      level: 85,
      projects: 12,
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "JavaScript",
      level: 80,
      projects: 10,
      color: "from-yellow-500 to-yellow-600",
    },
    {
      name: "React",
      level: 75,
      projects: 8,
      color: "from-cyan-500 to-cyan-600",
    },
    {
      name: "Node.js",
      level: 70,
      projects: 5,
      color: "from-green-500 to-green-600",
    },
    {
      name: "MongoDB",
      level: 65,
      projects: 3,
      color: "from-green-600 to-green-700",
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-br-to from-slate-900 to-blue-900 text-white"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-6">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
            &lt;Skills /&gt;
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl">
            Technologies I use to bring ideas to life
          </p>
        </div>

        <div className="bg-slate-800/30 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-slate-700/50">
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-200">
            Tech Stack
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="bg-slate-700/40 p-6 rounded-xl border border-slate-600/50 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-lg font-semibold text-white">
                    {tech.name}
                  </h4>
                  <div className="bg-slate-600/50 px-2 py-1 rounded-md text-xs font-medium">
                    {tech.projects} projects
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-300 mb-1">
                    <span>Proficiency</span>
                    <span>{tech.level}%</span>
                  </div>
                  <div className="h-2 bg-slate-600 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${tech.color}`}
                      style={{ width: `${tech.level}%` }}
                    ></div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="flex-1">
                    <div className="text-xs text-gray-400">Experience</div>
                    <div className="text-sm text-cyan-400">
                      {tech.level >= 80
                        ? "Advanced"
                        : tech.level >= 60
                        ? "Intermediate"
                        : "Beginner"}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-400">Projects</div>
                    <div className="text-sm text-white font-medium">
                      {tech.projects}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary Stats */}
          <div className="mt-12 pt-8 border-t border-slate-700/50">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="bg-slate-700/40 p-4 rounded-xl">
                <div className="text-3xl font-bold text-cyan-400">5+</div>
                <div className="text-sm text-gray-300">Technologies</div>
              </div>
              <div className="bg-slate-700/40 p-4 rounded-xl">
                <div className="text-3xl font-bold text-cyan-400">3+</div>
                <div className="text-sm text-gray-300">Years Experience</div>
              </div>
              <div className="bg-slate-700/40 p-4 rounded-xl">
                <div className="text-3xl font-bold text-cyan-400">15+</div>
                <div className="text-sm text-gray-300">Projects Completed</div>
              </div>
              <div className="bg-slate-700/40 p-4 rounded-xl">
                <div className="text-3xl font-bold text-cyan-400">100%</div>
                <div className="text-sm text-gray-300">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
