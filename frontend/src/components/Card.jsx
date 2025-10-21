import React from "react";

const Card = ({ skill }) => {
  return (
    <div className="border border-blue-500/20 hover:border-blue-500/30 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(5,130,246,0.4)] transition-all rounded-xl overflow-hidden bg-blue-500/5">
      <div className="relative">
        <img
          src={`/personal-portfolio/${skill.photo}`}
          alt={skill.name}
          className="w-full h-52 object-contain bg-gradient-to-b from-gray-900 via-gray-800 to-gray-950 p-6"
        />
      </div>

      <div className="p-5 text-white">
        <h3 className="text-lg font-semibold mb-2 text-blue-400">
          {skill.name}
        </h3>
        <p className="text-gray-400 text-sm">{skill.desc}</p>
      </div>
    </div>
  );
};

export default Card;
