import React from "react";
import { FaReact, FaDocker, FaAws, FaPython, FaNodeJs } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiKubernetes,
  SiTerraform,
  SiMongodb,
  SiMysql,
  SiFlask,
  SiFastapi,
  SiPhp,
} from "react-icons/si";

const About = () => {
  const frontedSkills = [
    { name: "React", icon: <FaReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Docker", icon: <FaDocker /> },
    { name: "Kubernetes", icon: <SiKubernetes /> },
    { name: "Terraform", icon: <SiTerraform /> },
    { name: "AWS", icon: <FaAws /> },
    { name: "Git", icon: "🐙" },
    { name: "GitHub", icon: "💻" },
    { name: "Linux", icon: "🐧" },
  ];

  const backendSkills = [
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express.js", icon: "⚙️" },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "Zustand", icon: "🧠" },
    { name: "Python", icon: <FaPython /> },
    { name: "Flask", icon: <SiFlask /> },
    { name: "FastAPI", icon: <SiFastapi /> },
    { name: "PHP", icon: <SiPhp /> },
  ];

  return (
    <section
      className="min-h-screen flex items-center justify-center py-12 sm:py-16 md:py-20 px-4"
      id="about"
    >
      <div className="max-w-6xl mx-auto w-full">
        <h3 className="text-2xl sm:text-3xl md:text-4xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 mb-4 sm:mb-6 animate-gradient">
          About Me
        </h3>

        <div className="border p-4 sm:p-6 md:p-8 rounded-xl border-blue-500/30 hover:border-blue-500/50 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(5,130,246,0.5)] transition-all duration-300 mb-6 bg-gradient-to-br from-blue-500/5 to-purple-500/5 backdrop-blur-sm">
          <p className="text-gray-300 leading-relaxed mb-6 text-base sm:text-lg md:text-xl">
            I'm a passionate{" "}
            <span className="text-blue-400 font-semibold bg-blue-400/10 px-2 py-1 rounded">
              Software Engineer
            </span>{" "}
            with a deep interest in modern web development, cloud
            infrastructure, and DevOps automation. I love building systems that
            are scalable, fast, and elegant.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            <div>
              <div className="text-white mb-4">
                <h4 className="text-lg sm:text-xl font-bold mb-3 border-b-2 border-blue-500/40 pb-3 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Frontend & DevOps
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {frontedSkills.map((skill, key) => (
                  <div
                    key={key}
                    className="flex items-center gap-2 bg-blue-500/20 text-blue-300 border border-blue-400/30 rounded-full px-3 py-1.5 text-xs sm:text-sm hover:bg-blue-500/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-200 cursor-pointer"
                  >
                    <span className="text-base sm:text-lg">{skill.icon}</span>
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="text-white mb-4">
                <h4 className="text-lg sm:text-xl font-bold mb-3 pb-3 border-b-2 border-green-500/40 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  Backend & Databases
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((skill, key) => (
                  <div
                    key={key}
                    className="flex items-center gap-2 border border-green-400/30 bg-green-500/20 text-green-300 rounded-full px-3 py-1.5 text-xs sm:text-sm hover:bg-green-500/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-500/30 transition-all duration-200 cursor-pointer"
                  >
                    <span className="text-base sm:text-lg">{skill.icon}</span>
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div className="rounded-xl text-white border border-blue-500/30 hover:border-blue-500/50 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(5,130,246,0.5)] transition-all duration-300 p-4 sm:p-6 bg-gradient-to-br from-blue-500/10 to-cyan-500/5">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 flex items-center gap-2">
              <span className="text-2xl sm:text-3xl">🎓</span>
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Education
              </span>
            </h3>
            <ul className="list-none text-gray-300 space-y-3 text-sm sm:text-base">
              <li className="pl-4 border-l-2 border-blue-500/50">
                <strong className="text-white">Diploma in Computer Science</strong>
                <p className="text-gray-400 text-xs sm:text-sm">(2023-2025)</p>
              </li>
              <li className="pl-4 border-l-2 border-cyan-500/50">
                Relevant courses: Ethical Hacking, Full Stack Development, AWS
                Cloud Architecture, DevOps, Python
              </li>
            </ul>
          </div>

          <div className="border border-purple-500/30 text-white rounded-xl hover:border-purple-500/50 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition-all duration-300 p-4 sm:p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/5">
            <h3 className="font-bold text-xl sm:text-2xl mb-3 flex items-center gap-2">
              <span className="text-2xl sm:text-3xl">💼</span>
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Work Experience
              </span>
            </h3>

            <div className="space-y-4 text-gray-300 text-sm sm:text-base">
              <div className="pl-4 border-l-2 border-purple-500/50">
                <h4 className="font-semibold text-white">
                  Full Stack Developer
                </h4>
                <p className="text-xs sm:text-sm text-gray-400 mb-1">(2024-2025)</p>
                <p className="text-xs sm:text-sm">
                  Developed and deployed full-stack web apps using React,
                  Next.js, and Node.js.
                </p>
              </div>

              <div className="pl-4 border-l-2 border-pink-500/50">
                <h4 className="font-semibold text-white">
                  Attachment DevOps Engineer
                </h4>
                <p className="text-xs sm:text-sm text-gray-400 mb-1">(2025)</p>
                <p className="text-xs sm:text-sm">
                  Automated CI/CD pipelines and infrastructure deployments using
                  Docker, Kubernetes, and Terraform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
