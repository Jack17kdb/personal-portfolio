import React from "react";
import Card from "../components/Card";

const Skills = () => {
  const skills = [
    {
      name: "How the Web Works",
      photo: "/howthewebworks.svg",
      desc: "Completed the 'How The Web Works' module",
    },
    {
      name: "SQL Injection",
      photo: "/injection.svg",
      desc: "Conquered Advanced SQL Injection challenges",
    },
    {
      name: "Investigations",
      photo: "/investigations_badge.svg",
      desc: "Completed the Cyber Defense Investigation series",
    },
    {
      name: "King of the Hill",
      photo: "/king.svg",
      desc: "Crowned King of the Hill winner",
    },
    {
      name: "Security Awareness",
      photo: "/securityawareness.svg",
      desc: "Completed the Cyber Security Awareness module",
    },
    {
      name: "Streak",
      photo: "/streak90.svg",
      desc: "Hacked for 90 days in a row — unstoppable dedication!",
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-5xl mx-auto px-4">
        <h3 className="text-center text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400 mb-4">
          Skills & Achievements
        </h3>
        <p className="text-center text-gray-400 mb-8">
          A collection of my TryHackMe achievements and cybersecurity badges.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, key) => (
            <Card key={key} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
