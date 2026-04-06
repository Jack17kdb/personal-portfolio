import React from "react";
import { Link } from "react-router-dom";
import Projects from "./Projects";
import Contact from "./Contact";
import About from "./About";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="min-h-screen flex flex-col items-center justify-center relative px-4 sm:px-6 md:px-8"
      >
        <div className="max-w-5xl text-center z-10 w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
            Hi I'm Johnson Kanyi
          </h1>

          <p className="text-gray-300 text-base sm:text-lg md:text-xl mb-6 sm:mb-8 mx-auto max-w-2xl px-4 leading-relaxed">
            CS Student passionate about building scalable full-stack
            applications and automating DevOps pipelines. Bridging development
            and operations through cloud-native solutions.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4">
            <Link
              to="/projects"
              className="bg-gradient-to-r from-blue-500 to-cyan-500 font-medium px-6 sm:px-8 py-3 sm:py-4 text-white rounded-lg transition-all duration-300 relative overflow-hidden hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(5,130,246,0.6)] group text-sm sm:text-base"
            >
              <span className="relative z-10">View my projects</span>
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Link>
            <Link
              to="/contact"
              className="border-2 border-blue-500/50 text-blue-400 font-medium px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(5,130,246,0.6)] hover:bg-blue-500/20 hover:border-blue-400 text-sm sm:text-base"
            >
              Contact me
            </Link>
          </div>
        </div>

        {/* Decorative animated circles */}
        <div className="absolute top-20 left-10 w-32 h-32 sm:w-48 sm:h-48 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 sm:w-48 sm:h-48 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </section>

      <section id="about" className="py-12 sm:py-16 md:py-20">
        <About />
      </section>

      <section id="projects" className="py-12 sm:py-16 md:py-20">
        <Projects />
      </section>
    </>
  );
};

export default Hero;
