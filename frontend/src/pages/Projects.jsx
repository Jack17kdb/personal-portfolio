import React from "react";
import { FaReact, FaNodeJs, FaExchangeAlt, FaArrowRight } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiPrisma,
  SiTypescript,
  SiCloudinary,
  SiDaisyui,
} from "react-icons/si";

const Projects = () => {
  const chatAppSkills = [
    { name: "React", icon: <FaReact /> },
    { name: "Tailwind", icon: <SiTailwindcss /> },
    { name: "Git", icon: "🐙" },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express.js", icon: "⚙️" },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Zustand", icon: "🧠" },
    { name: "Socket.io", icon: "📡" },
    { name: "JWT", icon: "🔑" },
    { name: "Cloudinary", icon: <SiCloudinary /> },
  ];

  const inventorySkills = [
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Tailwind", icon: <SiTailwindcss /> },
    { name: "BetterAuth", icon: "🛡️" },
    { name: "Prisma", icon: <SiPrisma /> },
    { name: "Git", icon: "🐙" },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "JWT", icon: "🔑" },
    { name: "Cloudinary", icon: <SiCloudinary /> },
  ];

  const movieAppSkills = [
    { name: "React", icon: <FaReact /> },
    { name: "Tailwind", icon: <SiTailwindcss /> },
    { name: "Axios", icon: <FaExchangeAlt /> },
    { name: "Git", icon: "🐙" },
    { name: "DaisyUI", icon: <SiDaisyui /> },
  ];

  const newsAppSkills = [
    { name: "React", icon: <FaReact /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Git", icon: "🐙" },
    { name: "Axios", icon: <FaExchangeAlt /> },
    { name: "DaisyUI", icon: <SiDaisyui /> },
  ];

  const projects = [
    {
      title: "Chat App",
      desc: "A real-time chat app built using React, Node.js, and Socket.io with JWT authentication and Cloudinary media support.",
      tech: chatAppSkills,
    },
    {
      title: "Inventory Management System",
      desc: "A modern inventory system built with Next.js, Tailwind, Prisma, and BetterAuth — featuring JWT, TypeScript, and Cloudinary integration.",
      tech: inventorySkills,
    },
    {
      title: "Movie App",
      desc: "A dynamic movie search and listing app built using React, Tailwind, and Axios for API requests.",
      tech: movieAppSkills,
    },
    {
      title: "News App",
      desc: "A news aggregator app built using React, Tailwind, and Axios for API requests.",
      tech: newsAppSkills,
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-5xl mx-auto px-4">
        <h3 className="text-center text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400 mb-4">
          Projects
        </h3>
        <p className="text-center text-gray-400 mb-8">
          Some of my favorite projects showcasing full-stack and DevOps skills.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="text-white rounded-xl border border-blue-500/20 hover:border-blue-500/30 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(5,130,246,0.4)] transition-all p-6"
            >
              <h3 className="text-xl font-bold mb-3">{proj.title}</h3>
              <p className="text-gray-400 mb-4 text-sm">{proj.desc}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {proj.tech.map((tech, key) => (
                  <div
                    key={key}
                    className="flex items-center gap-1 rounded-full px-3 py-1 text-xs bg-blue-500/10 text-blue-400 hover:-translate-y-0.5 transition"
                  >
                    <span className="text-md">{tech.icon}</span> {tech.name}
                  </div>
                ))}
              </div>

              <a
                href="#"
                className="flex text-blue-500 hover:text-blue-600 items-center gap-1"
              >
                View project <FaArrowRight />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
