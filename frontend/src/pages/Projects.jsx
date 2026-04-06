import React, { useState } from "react";
import { FaReact, FaNodeJs, FaExchangeAlt, FaGithub, FaPython, FaDocker } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiPrisma,
  SiTypescript,
  SiCloudinary,
  SiDaisyui,
  SiFlask,
  SiFastapi,
  SiPostgresql,
  SiKubernetes,
  SiTerraform,
  SiStripe,
} from "react-icons/si";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Full Stack", "AI / ML", "DevOps", "Cybersecurity"];

  /* ── tech stacks ── */
  const chatAppSkills = [
    { name: "React", icon: <FaReact /> },
    { name: "Tailwind", icon: <SiTailwindcss /> },
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
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "JWT", icon: "🔑" },
    { name: "Cloudinary", icon: <SiCloudinary /> },
  ];
  const movieAppSkills = [
    { name: "React", icon: <FaReact /> },
    { name: "Tailwind", icon: <SiTailwindcss /> },
    { name: "Axios", icon: <FaExchangeAlt /> },
    { name: "DaisyUI", icon: <SiDaisyui /> },
  ];
  const newsAppSkills = [
    { name: "React", icon: <FaReact /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Axios", icon: <FaExchangeAlt /> },
    { name: "DaisyUI", icon: <SiDaisyui /> },
  ];
  const foodDeliverySkills = [
    { name: "React", icon: <FaReact /> },
    { name: "Tailwind", icon: <SiTailwindcss /> },
    { name: "Framer Motion", icon: "🎞️" },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express.js", icon: "⚙️" },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Zustand", icon: "🧠" },
    { name: "JWT", icon: "🔑" },
  ];
  const rivalScopeSkills = [
    { name: "React", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express.js", icon: "⚙️" },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Python", icon: <FaPython /> },
    { name: "FastAPI", icon: <SiFastapi /> },
    { name: "Tailwind", icon: <SiTailwindcss /> },
    { name: "JWT", icon: "🔑" },
  ];
  const campusHubSkills = [
    { name: "React", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express.js", icon: "⚙️" },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Python", icon: <FaPython /> },
    { name: "Flask", icon: <SiFlask /> },
    { name: "Socket.io", icon: "📡" },
    { name: "JWT", icon: "🔑" },
  ];
  const airlineSentimentSkills = [
    { name: "Python", icon: <FaPython /> },
    { name: "Scikit-learn", icon: "🤖" },
    { name: "NLP", icon: "📝" },
    { name: "MLflow", icon: "📊" },
    { name: "SMOTE", icon: "⚖️" },
    { name: "TF-IDF", icon: "🔍" },
  ];
  const handwrittenDigitSkills = [
    { name: "Python", icon: <FaPython /> },
    { name: "TensorFlow", icon: "🧠" },
    { name: "Docker", icon: <FaDocker /> },
    { name: "MLflow", icon: "📊" },
    { name: "DVC", icon: "🗂️" },
    { name: "CI/CD", icon: "🔄" },
    { name: "Streamlit", icon: "🚀" },
  ];
  const tmdbSkills = [
    { name: "Python", icon: <FaPython /> },
    { name: "spaCy", icon: "🌐" },
    { name: "Pandas", icon: "🐼" },
    { name: "NLP", icon: "📝" },
    { name: "Inverted Index", icon: "🔎" },
    { name: "Streamlit", icon: "🚀" },
  ];
  const translationSkills = [
    { name: "Python", icon: <FaPython /> },
    { name: "HuggingFace", icon: "🤗" },
    { name: "MarianMT", icon: "🌍" },
    { name: "MLflow", icon: "📊" },
    { name: "DVC", icon: "🗂️" },
    { name: "Streamlit", icon: "🚀" },
  ];
  const devopsSkills = [
    { name: "Docker", icon: <FaDocker /> },
    { name: "Kubernetes", icon: <SiKubernetes /> },
    { name: "Terraform", icon: <SiTerraform /> },
    { name: "Flask", icon: <SiFlask /> },
    { name: "GitHub Actions", icon: "🔄" },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
  ];
  const exploitIQSkills = [
    { name: "React", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Python", icon: <FaPython /> },
    { name: "FastAPI", icon: <SiFastapi /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "NLP", icon: "🔐" },
  ];

  const projects = [
    /* ── Full Stack ── */
    {
      title: "Chat App",
      desc: "A real-time chat app built using React, Node.js, and Socket.io with JWT authentication and Cloudinary media support.",
      tech: chatAppSkills,
      link: "https://github.com/Jack17kdb/chat-app-project",
      gradient: "from-blue-500/10 to-cyan-500/10",
      borderColor: "border-blue-500/30 hover:border-blue-500/60",
      shadow: "hover:shadow-[0_0_30px_rgba(5,130,246,0.5)]",
      category: "Full Stack",
    },
    {
      title: "Inventory Management System",
      desc: "A modern inventory system built with Next.js, Tailwind, Prisma, and BetterAuth — featuring JWT, TypeScript, and Cloudinary integration.",
      tech: inventorySkills,
      link: "https://github.com/Jack17kdb/inventory-management-website",
      gradient: "from-purple-500/10 to-pink-500/10",
      borderColor: "border-purple-500/30 hover:border-purple-500/60",
      shadow: "hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]",
      category: "Full Stack",
    },
    {
      title: "Food Delivery Website",
      desc: "A full-stack food delivery platform with a React + Framer Motion frontend, cart management via Zustand, Node.js/Express backend, MongoDB for orders and users, and JWT-secured auth.",
      tech: foodDeliverySkills,
      link: "https://github.com/Jack17kdb/food-delivery-website",
      gradient: "from-orange-500/10 to-amber-500/10",
      borderColor: "border-orange-500/30 hover:border-orange-500/60",
      shadow: "hover:shadow-[0_0_30px_rgba(249,115,22,0.5)]",
      category: "Full Stack",
    },
    {
      title: "Movie App",
      desc: "A dynamic movie search and listing app built using React, Tailwind, and Axios for API requests.",
      tech: movieAppSkills,
      link: "https://github.com/Jack17kdb/movie-app",
      gradient: "from-green-500/10 to-emerald-500/10",
      borderColor: "border-green-500/30 hover:border-green-500/60",
      shadow: "hover:shadow-[0_0_30px_rgba(34,197,94,0.5)]",
      category: "Full Stack",
    },
    {
      title: "News App",
      desc: "A news aggregator app built using React, Tailwind, and Axios for API requests.",
      tech: newsAppSkills,
      link: "https://github.com/Jack17kdb/news-app",
      gradient: "from-sky-500/10 to-blue-500/10",
      borderColor: "border-sky-500/30 hover:border-sky-500/60",
      shadow: "hover:shadow-[0_0_30px_rgba(14,165,233,0.5)]",
      category: "Full Stack",
    },
    {
      title: "RivalScope",
      desc: "A competitor intelligence SaaS platform with an AI-powered analysis service. Users track competitors, get scraped insights, and receive AI-generated strategic summaries.",
      tech: rivalScopeSkills,
      link: "https://github.com/Jack17kdb/RivalScope",
      gradient: "from-violet-500/10 to-fuchsia-500/10",
      borderColor: "border-violet-500/30 hover:border-violet-500/60",
      shadow: "hover:shadow-[0_0_30px_rgba(139,92,246,0.5)]",
      category: "Full Stack",
    },
    {
      title: "KIST Campus Hub",
      desc: "A campus-exclusive full-stack platform for verified KIST students — featuring a marketplace, lost & found board, real-time messaging, M-Pesa payments, and an AI-powered campus assistant.",
      tech: campusHubSkills,
      link: "https://github.com/Jack17kdb/campus-hub",
      gradient: "from-teal-500/10 to-cyan-500/10",
      borderColor: "border-teal-500/30 hover:border-teal-500/60",
      shadow: "hover:shadow-[0_0_30px_rgba(20,184,166,0.5)]",
      category: "Full Stack",
    },

    /* ── AI / ML ── */
    {
      title: "Airline Sentiment Analysis",
      desc: "An NLP pipeline classifying Twitter airline sentiment (positive/neutral/negative) using Logistic Regression, TF-IDF, SMOTE for class imbalance, and MLflow for experiment tracking.",
      tech: airlineSentimentSkills,
      link: "https://github.com/Jack17kdb/airline_sentiment_analysis",
      gradient: "from-cyan-500/10 to-blue-500/10",
      borderColor: "border-cyan-500/30 hover:border-cyan-500/60",
      shadow: "hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]",
      category: "AI / ML",
    },
    {
      title: "Handwritten Digit Classifier (MLOps)",
      desc: "Production-grade MNIST classifier with a full MLOps pipeline: TensorFlow CNN, Docker containerisation, DVC data versioning, MLflow tracking, automated CI/CD, and a Streamlit demo.",
      tech: handwrittenDigitSkills,
      link: "https://github.com/Jack17kdb/handwritten_digit_classification",
      gradient: "from-amber-500/10 to-yellow-500/10",
      borderColor: "border-amber-500/30 hover:border-amber-500/60",
      shadow: "hover:shadow-[0_0_30px_rgba(245,158,11,0.5)]",
      category: "AI / ML",
    },
    {
      title: "TMDB Movie Search Engine",
      desc: "A Python search engine over 5,000 TMDB movies using an inverted index and spaCy NLP preprocessing. Supports real-time keyword queries returning titles, summaries, ratings, and runtimes.",
      tech: tmdbSkills,
      link: "https://github.com/Jack17kdb/tmdb-movie-search-engine",
      gradient: "from-indigo-500/10 to-purple-500/10",
      borderColor: "border-indigo-500/30 hover:border-indigo-500/60",
      shadow: "hover:shadow-[0_0_30px_rgba(99,102,241,0.5)]",
      category: "AI / ML",
    },
    {
      title: "English → French Translation System",
      desc: "A fine-tuned MarianMT seq2seq translation model (Helsinki-NLP/opus-mt-en-fr) with MLflow experiment tracking, DVC data versioning, and a Streamlit UI for live translation.",
      tech: translationSkills,
      link: "https://github.com/Jack17kdb/translation-NLP-system",
      gradient: "from-rose-500/10 to-pink-500/10",
      borderColor: "border-rose-500/30 hover:border-rose-500/60",
      shadow: "hover:shadow-[0_0_30px_rgba(244,63,94,0.5)]",
      category: "AI / ML",
    },

    /* ── DevOps ── */
    {
      title: "DevOps Infrastructure Suite",
      desc: "A collection of real-world DevOps projects: Dockerized Flask apps, Kubernetes deployments, Terraform AWS provisioning, GitLab CI/CD runners, and a Flask-PostgreSQL production stack.",
      tech: devopsSkills,
      link: "https://github.com/Jack17kdb/devops-projects",
      gradient: "from-lime-500/10 to-green-500/10",
      borderColor: "border-lime-500/30 hover:border-lime-500/60",
      shadow: "hover:shadow-[0_0_30px_rgba(132,204,22,0.5)]",
      category: "DevOps",
    },

    /* ── Cybersecurity ── */
    {
      title: "ExploitIQ",
      desc: "A cybersecurity intelligence platform that uses NLP and ML to map security reports to MITRE ATT&CK TTPs, helping analysts understand attack patterns and threat actor behaviour.",
      tech: exploitIQSkills,
      link: "https://github.com/Jack17kdb/exploitIQ",
      gradient: "from-red-500/10 to-orange-500/10",
      borderColor: "border-red-500/30 hover:border-red-500/60",
      shadow: "hover:shadow-[0_0_30px_rgba(239,68,68,0.5)]",
      category: "Cybersecurity",
    },
  ];

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-12 sm:py-16 md:py-20 px-4"
    >
      <div className="max-w-6xl mx-auto w-full">
        <h3 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 mb-3 sm:mb-4 animate-gradient">
          Projects
        </h3>
        <p className="text-center text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base px-4">
          Full-stack applications, AI/ML systems, DevOps infrastructure, and cybersecurity tools.
        </p>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium border transition-all duration-200 ${
                activeFilter === f
                  ? "bg-blue-500/30 border-blue-400 text-blue-300"
                  : "bg-white/5 border-white/10 text-gray-400 hover:border-blue-500/40 hover:text-blue-300"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {filtered.map((proj, idx) => (
            <div
              key={idx}
              className={`text-white rounded-xl border ${proj.borderColor} ${proj.shadow} hover:-translate-y-1 transition-all duration-300 p-4 sm:p-6 bg-gradient-to-br ${proj.gradient} backdrop-blur-sm group`}
            >
              <div className="flex items-start justify-between mb-2 sm:mb-3">
                <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-blue-400 group-hover:to-cyan-400 transition-all duration-300">
                  {proj.title}
                </h3>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 border border-white/10 text-gray-400 ml-2 shrink-0">
                  {proj.category}
                </span>
              </div>
              <p className="text-gray-300 mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed">
                {proj.desc}
              </p>

              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                {proj.tech.map((tech, key) => (
                  <div
                    key={key}
                    className="flex items-center gap-1 rounded-full px-2 sm:px-3 py-1 text-[10px] sm:text-xs bg-white/5 border border-white/10 text-blue-300 hover:-translate-y-0.5 hover:bg-white/10 transition-all duration-200"
                  >
                    <span className="text-xs sm:text-sm">{tech.icon}</span>
                    <span className="hidden xs:inline">{tech.name}</span>
                  </div>
                ))}
              </div>

              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex text-blue-400 hover:text-blue-300 items-center gap-2 group/link text-sm sm:text-base font-medium"
              >
                <FaGithub className="text-base sm:text-lg" />
                <span>View project</span>
                <span className="group-hover/link:translate-x-1 transition-transform duration-200">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
