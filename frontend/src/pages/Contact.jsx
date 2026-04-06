import React, { useState } from "react";
import emailjs from "emailjs-com";
import {
  FiMail,
  FiMapPin,
  FiUser,
  FiMessageSquare,
  FiSend,
  FiLinkedin,
  FiGithub,
} from "react-icons/fi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const SERVICE_ID = import.meta.env.VITE_EMAIL_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then((result) => {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        alert("Failed to send message. Please try again.");
      });
  };

  const contactInfo = [
    {
      title: "Email",
      value: "mern.stack.k17@gmail.com",
      icon: <FiMail />,
      link: "mailto:mern.stack.k17@gmail.com",
      color: "from-blue-600/20 to-cyan-600/10 text-blue-400 border-blue-500/30",
    },
    {
      title: "Location",
      value: "Nairobi, Kenya",
      icon: <FiMapPin />,
      color: "from-green-500/20 to-yellow-500/10 text-green-400 border-green-500/30",
    },
    {
      title: "Availability",
      value: "Open for hire • Remote/Hybrid",
      icon: <FiSend />,
      color: "from-purple-500/20 to-pink-500/10 text-purple-400 border-purple-500/30",
    },
  ];

  const socials = [
    {
      name: "LinkedIn",
      icon: <FiLinkedin />,
      link: "https://www.linkedin.com/in/johnson-kanyi-2a4209326/",
      color: "hover:text-blue-400"
    },
    {
      name: "GitHub",
      icon: <FiGithub />,
      link: "https://github.com/Jack17kdb",
      color: "hover:text-purple-400"
    },
  ];

  return (
    <section
      className="min-h-screen flex items-center justify-center py-12 sm:py-16 md:py-20 bg-gradient-to-br from-black via-gray-900 to-gray-950 text-white px-4"
      id="contact"
    >
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
        <div className="flex flex-col justify-center gap-4 sm:gap-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 animate-gradient">
            Let's Build Something Great Together
          </h2>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
            I'm open to new opportunities, collaborations, and full-stack or
            DevOps roles. Reach out if you have a project or position that could
            be a great fit.
          </p>

          <div className="space-y-3 sm:space-y-4 mt-2 sm:mt-4">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-center gap-3 group">
                <div
                  className={`p-2.5 sm:p-3 rounded-lg bg-gradient-to-br ${info.color} border transition-all duration-300 group-hover:scale-110`}
                >
                  <span className="text-lg sm:text-xl">{info.icon}</span>
                </div>
                <div>
                  <p className="font-semibold text-sm sm:text-base text-white">{info.title}</p>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-xs sm:text-sm text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-xs sm:text-sm text-gray-400">{info.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 sm:gap-5 mt-4 sm:mt-6">
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex gap-2 items-center justify-center px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 ${social.color} text-sm sm:text-base transition-all duration-300 hover:scale-105 hover:bg-white/10`}
              >
                <span className="text-lg sm:text-xl">{social.icon}</span>
                <span>{social.name}</span>
              </a>
            ))}
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center gap-4 sm:gap-5 bg-white/5 border border-white/20 rounded-2xl p-4 sm:p-6 md:p-8 backdrop-blur-md shadow-2xl hover:border-white/30 transition-all duration-300"
        >
          <label className="relative w-full">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <FiUser />
            </span>
            <input
              name="name"
              className="w-full pl-10 sm:pl-12 pr-4 py-2.5 sm:py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition text-sm sm:text-base"
              type="text"
              placeholder="Your name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              minLength={3}
              maxLength={30}
              required
            />
          </label>

          <label className="relative w-full">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <FiMail />
            </span>
            <input
              name="email"
              className="w-full pl-10 sm:pl-12 pr-4 py-2.5 sm:py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition text-sm sm:text-base"
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder="mail@site.com"
              required
            />
          </label>

          <label className="relative w-full">
            <span className="absolute left-3 top-4 text-gray-400">
              <FiMessageSquare />
            </span>
            <textarea
              name="message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full pl-10 sm:pl-12 pr-4 pt-3 sm:pt-4 pb-3 sm:pb-4 min-h-[100px] sm:min-h-[120px] rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition resize-y text-sm sm:text-base"
              placeholder="Write a short message or project brief..."
              required
            />
          </label>

          <button
            type="submit"
            className="w-full py-2.5 sm:py-3 rounded-xl inline-flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 text-white font-medium shadow-lg hover:scale-[1.02] active:scale-95 transition-all duration-300 hover:shadow-[0_0_30px_rgba(5,130,246,0.6)] text-sm sm:text-base"
          >
            <FiSend className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Send Message</span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
