const skills = [
  { name: "React", level: "90%", color: "from-blue-500 to-blue-600" },
  { name: "JavaScript", level: "95%", color: "from-yellow-400 to-yellow-500" },
  {
    name: "Tailwind CSS",
    level: "85%",
    color: "from-indigo-500 to-purple-600",
  },
  { name: "Node.js", level: "80%", color: "from-green-500 to-emerald-600" },
  { name: "MongoDB", level: "75%", color: "from-green-400 to-teal-500" },
  { name: "Git", level: "90%", color: "from-orange-500 to-red-500" },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-32 bg-gradient-to-b from-blue-50 to-indigo-100"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">
            Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            {skills.map((skill, index) => (
              <div key={skill.name} className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-xl">{skill.name}</span>
                  <span className="font-semibold text-lg text-gray-600">
                    {skill.level}
                  </span>
                </div>
                <div className={`h-3 bg-gray-200 rounded-full overflow-hidden`}>
                  <div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000`}
                    style={{ width: skill.level }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="p-6 bg-white/50 backdrop-blur-sm rounded-2xl hover:shadow-xl transition-all group"
              >
                <div
                  className={`w-12 h-12 mx-auto mb-4 bg-gradient-to-r ${skill.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}
                >
                  <span className="text-white font-bold text-sm">
                    {skill.name.slice(0, 3)}
                  </span>
                </div>
                <h4 className="font-semibold text-center text-lg">
                  {skill.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
