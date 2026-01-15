const projects = [
  {
    title: "GPS Service Website",
    description: "Modern React + Tailwind website for electrical & EV services",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&fit=crop",
    live: "https://ramaditya777.github.io/gps-website/",
    github: "https://github.com/ramaditya777/gps-website",
  },
  {
    title: "Ramaditya Portfolio",
    description: "Fully responsive portfolio with React, Tailwind & animations",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&fit=crop",
    live: "#",
    github: "https://github.com/ramaditya777/Ramaditya-Portfolio",
  },
  {
    title: "E-Commerce Dashboard",
    description: "Admin dashboard with charts, analytics & responsive design",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&fit=crop",
    live: "#",
    github: "#",
  },
  {
    title: "Task Management App",
    description: "Full-stack task manager with drag-drop & real-time updates",
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&fit=crop",
    live: "#",
    github: "#",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-32 bg-gradient-to-b from-indigo-50 to-white"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4"
            >
              <div className="h-64 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex gap-4">
                  <a
                    href={project.live}
                    className="flex-1 text-center bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    className="p-3 bg-gray-100 hover:bg-gray-200 rounded-xl transition-all duration-300"
                  >
                    <svg
                      className="w-6 h-6 mx-auto"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.058-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.176 2.873.171 3.176.768.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
