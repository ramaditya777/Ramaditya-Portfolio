const About = () => {
  return (
    <section id="about" className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&fit=crop&crop=face"
              alt="Ramaditya"
              className="w-full h-96 object-cover rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500 mx-auto max-w-md"
            />
          </div>

          <div className="space-y-8">
            <h3 className="text-4xl font-bold text-gray-800">
              Passionate Full Stack Developer
            </h3>
            <p className="text-xl text-gray-600 leading-relaxed">
              I create stunning, performant web applications using modern
              technologies like React, Tailwind CSS, Node.js, and more. With 4+
              years of experience, I turn complex problems into simple,
              beautiful solutions.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl hover:shadow-xl transition-all text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">25+</div>
                <div className="text-gray-600 font-semibold">Projects</div>
              </div>
              <div className="p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl hover:shadow-xl transition-all text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">
                  4+
                </div>
                <div className="text-gray-600 font-semibold">Years Exp</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
