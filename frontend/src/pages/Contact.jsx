import React from "react";
import { FiMail, FiMapPin, FiUser, FiMessageSquare, FiSend, FiLinkedin, FiGithub } from "react-icons/fi";

const Contact = () => {
  const contactInfo = [
    {
      title: "Email",
      value: "mern.stack.k17@gmail.com",
      icon: <FiMail />,
      link: "mailto:mern.stack.k17@gmail.com",
      color: "from-blue-600/20 to-cyan-600/10 text-blue-400",
    },
    {
      title: "Location",
      value: "Nairobi, Kenya",
      icon: <FiMapPin />,
      color: "from-green-500/20 to-yellow-500/10 text-green-400",
    },
    {
      title: "Availability",
      value: "Open for hire • Remote/Hybrid",
      icon: <FiSend />,
      color: "from-purple-500/20 to-pink-500/10 text-purple-400",
    },
  ];

  const socials = [
    { name: "LinkedIn", icon: <FiLinkedin />, link: "https://www.linkedin.com/in/johnson-kanyi-2a4209326/" },
    { name: "GitHub", icon: <FiGithub />, link: "https://github.com/Jack17kdb" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-br from-black via-gray-900 to-gray-950 text-white" id="contact">
      <div className="max-w-5xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 px-6 lg:px-10">
        
        <div className="flex flex-col justify-center gap-6">
          <h2 className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
            Let’s Build Something Great Together
          </h2>
          <p className="text-gray-300 text-lg">
            I’m open to new opportunities, collaborations, and full-stack or DevOps roles. 
            Reach out if you have a project or position that could be a great fit.
          </p>

          <div className="space-y-4 mt-4">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className={`p-3 rounded-lg bg-gradient-to-br ${info.color}`}>
                  {info.icon}
                </div>
                <div>
                  <p className="font-semibold">{info.title}</p>
                  {info.link ? (
                    <a href={info.link} className="text-sm text-gray-400 hover:text-white transition-colors">
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-sm text-gray-400">{info.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-5 mt-6">
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-2 items-center justify-center text-gray-400 hover:text-white text-xl transition-colors"
              >
                {social.icon} <span>{social.name}</span>
              </a>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center gap-5 bg-white/5 border border-white/10 rounded-2xl p-6 lg:p-8 backdrop-blur-md shadow-lg">
          <label className="relative w-full max-w-md">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <FiUser />
            </span>
            <input
              name="name"
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              type="text"
              placeholder="Your name"
              minLength={3}
              maxLength={30}
              required
            />
          </label>

          <label className="relative w-full max-w-md">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <FiMail />
            </span>
            <input
              name="email"
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
              type="email"
              placeholder="mail@site.com"
              required
            />
          </label>

          <label className="relative w-full max-w-md">
            <span className="absolute left-3 top-3 text-gray-400">
              <FiMessageSquare />
            </span>
            <textarea
              name="message"
              className="w-full pl-12 pr-4 pt-10 pb-4 min-h-[120px] rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition resize-y"
              placeholder="Write a short message or project brief..."
              required
            />
          </label>

          <button
            type="submit"
            className="w-full max-w-md py-3 rounded-xl inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-black font-medium shadow-md hover:scale-[1.01] active:scale-95 transition"
          >
            <FiSend className="w-5 h-5" />
            <span>Send Message</span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
