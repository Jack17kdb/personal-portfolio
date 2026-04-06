import React, { useState } from "react";
import Card from "../components/Card";
import {
  FaReact, FaNodeJs, FaPython, FaDocker, FaAws, FaGitAlt,
} from "react-icons/fa";
import {
  SiNextdotjs, SiTailwindcss, SiMongodb, SiMysql, SiFlask,
  SiFastapi, SiKubernetes, SiTerraform, SiPostgresql, SiTypescript,
  SiPrisma, SiScikitlearn, SiTensorflow, SiPytorch, SiHuggingface,
  SiMlflow, SiGithubactions,
} from "react-icons/si";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("TryHackMe");

  const thmBadges = [
    {
      name: "How the Web Works",
      photo: "howthewebworks.svg",
      desc: "Completed the 'How The Web Works' module",
    },
    {
      name: "SQL Injection",
      photo: "injection.svg",
      desc: "Conquered Advanced SQL Injection challenges",
    },
    {
      name: "Investigations",
      photo: "investigations_badge.svg",
      desc: "Completed the Cyber Defense Investigation series",
    },
    {
      name: "King of the Hill",
      photo: "king.svg",
      desc: "Crowned King of the Hill winner",
    },
    {
      name: "Security Awareness",
      photo: "securityawareness.svg",
      desc: "Completed the Cyber Security Awareness module",
    },
    {
      name: "90-Day Streak",
      photo: "streak90.svg",
      desc: "Hacked for 90 days in a row — unstoppable dedication!",
    },
  ];

  const techSkillGroups = [
    {
      label: "Frontend",
      color: "blue",
      skills: [
        { name: "React", icon: <FaReact /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "TypeScript", icon: <SiTypescript /> },
      ],
    },
    {
      label: "Backend",
      color: "green",
      skills: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express.js", icon: "⚙️" },
        { name: "Flask", icon: <SiFlask /> },
        { name: "FastAPI", icon: <SiFastapi /> },
        { name: "PHP", icon: "🐘" },
        { name: "Prisma", icon: <SiPrisma /> },
      ],
    },
    {
      label: "Databases",
      color: "yellow",
      skills: [
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "MySQL", icon: <SiMysql /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
      ],
    },
    {
      label: "DevOps & Cloud",
      color: "purple",
      skills: [
        { name: "Docker", icon: <FaDocker /> },
        { name: "Kubernetes", icon: <SiKubernetes /> },
        { name: "Terraform", icon: <SiTerraform /> },
        { name: "AWS", icon: <FaAws /> },
        { name: "GitHub Actions", icon: <SiGithubactions /> },
        { name: "Git", icon: <FaGitAlt /> },
        { name: "Linux", icon: "🐧" },
      ],
    },
    {
      label: "AI / ML",
      color: "pink",
      skills: [
        { name: "Python", icon: <FaPython /> },
        { name: "Scikit-learn", icon: <SiScikitlearn /> },
        { name: "TensorFlow", icon: <SiTensorflow /> },
        { name: "PyTorch", icon: <SiPytorch /> },
        { name: "HuggingFace", icon: <SiHuggingface /> },
        { name: "MLflow", icon: <SiMlflow /> },
        { name: "LangChain", icon: "🦜" },
        { name: "LangGraph", icon: "🕸️" },
        { name: "RAG", icon: "📚" },
        { name: "NLP", icon: "📝" },
        { name: "DVC", icon: "🗂️" },
      ],
    },
    {
      label: "Cybersecurity",
      color: "red",
      skills: [
        { name: "Penetration Testing", icon: "🔐" },
        { name: "Binary Exploitation", icon: "💥" },
        { name: "CTF Challenges", icon: "🚩" },
        { name: "SQL Injection", icon: "💉" },
        { name: "OSINT", icon: "🔍" },
        { name: "Kali Linux", icon: "🐲" },
      ],
    },
  ];

  const colorMap = {
    blue:   { pill: "bg-blue-500/20 text-blue-300 border-blue-400/30", heading: "from-blue-400 to-cyan-400", border: "border-blue-500/30" },
    green:  { pill: "bg-green-500/20 text-green-300 border-green-400/30", heading: "from-green-400 to-emerald-400", border: "border-green-500/30" },
    yellow: { pill: "bg-yellow-500/20 text-yellow-300 border-yellow-400/30", heading: "from-yellow-400 to-amber-400", border: "border-yellow-500/30" },
    purple: { pill: "bg-purple-500/20 text-purple-300 border-purple-400/30", heading: "from-purple-400 to-pink-400", border: "border-purple-500/30" },
    pink:   { pill: "bg-pink-500/20 text-pink-300 border-pink-400/30", heading: "from-pink-400 to-rose-400", border: "border-pink-500/30" },
    red:    { pill: "bg-red-500/20 text-red-300 border-red-400/30", heading: "from-red-400 to-orange-400", border: "border-red-500/30" },
  };

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center py-12 sm:py-16 md:py-20 px-4"
    >
      <div className="max-w-6xl mx-auto w-full">
        <h3 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 mb-3 sm:mb-4 animate-gradient">
          Skills & Achievements
        </h3>
        <p className="text-center text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base px-4">
          My technical stack across full-stack, AI/ML, DevOps, and cybersecurity — plus TryHackMe achievements.
        </p>

        {/* Tabs */}
        <div className="flex justify-center gap-3 mb-8">
          {["TryHackMe", "Tech Skills"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                activeTab === tab
                  ? "bg-blue-500/30 border-blue-400 text-blue-300"
                  : "bg-white/5 border-white/10 text-gray-400 hover:border-blue-500/40 hover:text-blue-300"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeTab === "TryHackMe" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {thmBadges.map((skill, key) => (
              <Card key={key} skill={skill} />
            ))}
          </div>
        )}

        {activeTab === "Tech Skills" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {techSkillGroups.map((group, idx) => {
              const c = colorMap[group.color];
              return (
                <div
                  key={idx}
                  className={`rounded-xl border ${c.border} p-4 sm:p-5 bg-white/5 backdrop-blur-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300`}
                >
                  <h4
                    className={`text-base font-bold mb-3 bg-gradient-to-r ${c.heading} bg-clip-text text-transparent`}
                  >
                    {group.label}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill, key) => (
                      <div
                        key={key}
                        className={`flex items-center gap-1.5 border ${c.pill} rounded-full px-3 py-1 text-xs hover:-translate-y-0.5 transition-all duration-200`}
                      >
                        <span className="text-sm">{skill.icon}</span>
                        {skill.name}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;
