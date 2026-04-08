import React from "react";

const Card = ({ skill }) => {
  return (
    <div className="group border border-blue-500/30 hover:border-blue-500/60 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(5,130,246,0.5)] transition-all duration-300 rounded-xl overflow-hidden bg-gradient-to-br from-blue-500/10 to-purple-500/5 backdrop-blur-sm">
      <div className="relative overflow-hidden">
        <img
          src={`/${skill.photo}`}
          alt={skill.name}
          className="w-full h-40 sm:h-48 md:h-52 object-contain bg-gradient-to-b from-gray-900 via-gray-800 to-gray-950 p-4 sm:p-6 transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      <div className="p-4 sm:p-5 text-white">
        <h3 className="text-base sm:text-lg font-semibold mb-2 text-blue-400 group-hover:text-cyan-400 transition-colors duration-300">
          {skill.name}
        </h3>
        <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{skill.desc}</p>
      </div>
    </div>
  );
};

export default Card;
