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
      className="min-h-screen flex items-center justify-center py-20"
      id="about"
    >
      `
      <div className="max-w-4xl mx-auto px-4">
        <h3 className="text-3xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400 mb-6">
          About Me
        </h3>

        <div className="border p-8 rounded-lg border-blue-500/20 hover:border-blue-500/30 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(5,130,246,0.4)] transition-all mb-6">
          <p className="text-gray-400 leading-relaxed mb-6 text-xl">
            I’m a passionate{" "}
            <span className="text-blue-400 font-semibold">
              Software Engineer
            </span>{" "}
            with a deep interest in modern web development, cloud
            infrastructure, and DevOps automation. I love building systems that
            are scalable, fast, and elegant.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="text-white">
                <h4 className="text-xl font-bold mb-2 border-b border-blue-500/30 pb-3">
                  Frontend
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {frontedSkills.map((skill, key) => (
                  <div
                    key={key}
                    className="flex items-center gap-2 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full px-3 py-1 text-sm hover:bg-blue-500/20 hover:-translate-y-0.5 transition"
                  >
                    <span className="text-md">{skill.icon}</span>
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="">
                <div className="text-white">
                  <h4 className="text-xl font-bold mb-2 pb-3 border-b border-green-500/30">
                    Backend
                  </h4>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((skill, key) => (
                  <div
                    key={key}
                    className="flex items-center gap-2 border border-green-500/20 bg-green-500/10 text-green-400 rounded-full px-3 py-1 text-sm hover:bg-green-500/20 hover:-translate-y-0.5 transition"
                  >
                    <span className="text-md">{skill.icon}</span>
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl text-white border border-blue-500/20 hover:border-blue-500/30 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(5,130,246,0.4)] transition-all p-6">
            <h3 className="text-xl font-bold mb-2">🎓 Education</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-3">
              <li>
                <strong>Diploma in Computer Science (2023-2025)</strong>
              </li>
              <li>
                Relevant courses: Ethical Hacking, Full Stack Development, aws
                cloud architecture, DevOps, Python
              </li>
            </ul>
          </div>

          <div className="border border-blue-500/20 text-white rounded-xl hover:border-blue-500/30 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(5,130,246,0.4)] transition-all p-6">
            <h3 className="font-bold text-xl mb-2">💼 Work Experience</h3>

            <div className="space-y-4 text-gray-300">
              <div className="">
                <h4 className="font-semibold">
                  Full Stack Developer (2024-2025)
                </h4>
                <p>
                  Developed and deployed full-stack web apps using React,
                  Next.js, and Node.js.
                </p>
              </div>

              <div>
                <h4 className="font-semibold">
                  Attachment DevOps Engineer (2025)
                </h4>
                <p>
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
