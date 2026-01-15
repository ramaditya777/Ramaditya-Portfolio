const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-24"
    >
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
        {/* Hero Text */}
        <div className="text-center md:text-left animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-6 leading-tight">
            Ramaditya
          </h1>
          <div className="text-2xl md:text-3xl text-gray-600 font-light mb-8">
            <span>Full Stack </span>
            <span className="font-semibold text-blue-600">Developer</span>
          </div>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-lg mx-auto md:mx-0 leading-relaxed">
            Transforming ideas into modern, responsive web applications with
            cutting-edge technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border-3 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-10 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:shadow-xl"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative hidden md:block">
          <div className="w-96 h-96 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-3xl p-8 shadow-2xl animate-pulse">
            <div className="w-full h-full bg-gradient-to-br from-white/20 to-transparent rounded-2xl backdrop-blur-xl flex items-center justify-center">
              <div className="text-6xl">👨‍💻</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
