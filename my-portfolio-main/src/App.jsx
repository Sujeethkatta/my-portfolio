import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import {
  Mail,
  Github,
  Linkedin,
  Sun,
  Moon,
  Download,
} from "lucide-react";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  const theme = darkMode
    ? "bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white"
    : "bg-gray-100 text-black";

  const projects = [
    {
      title: "AI Chatbot - NLP ⭐",
      description:
        "Developed an intelligent chatbot using NLP capable of understanding queries and generating contextual responses with intent recognition.",
      tech: "Python, NLP, Machine Learning",
      github: "https://github.com/Sujeethkatta/AI-Chatbot-NLP",
      pinned: true,
    },
    {
      title: "AI Resume Ranking System ⭐",
      description:
        "AI-driven resume screening system that ranks candidates based on job relevance using text similarity and ML models.",
      tech: "Python, NLP, Machine Learning",
      github: "https://github.com/Sujeethkatta/AI-Resume-Ranking-System",
      pinned: true,
    },
    {
      title: "Online Banking System",
      description:
        "Secure banking application enabling account creation, fund transfers, balance checking, and transaction history with authentication.",
      tech: "Java, JDBC, MySQL",
      github: "https://github.com/Sujeethkatta/online-banking-system",
      pinned: false,
    },
  ];

  return (
    <div className={`min-h-screen ${theme} transition-all duration-500`}>

      {/* Header */}
      <div className="flex justify-between items-center p-6 max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold">Katta Sujeeth</h1>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-lg border"
        >
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>

      {/* Hero Section */}
      <div className="grid md:grid-cols-2 items-center max-w-6xl mx-auto px-6 py-16 gap-10">

        <div>
          <h2 className="text-5xl font-bold mb-4">
            Hi, I'm <span className="text-blue-400">Katta Sujeeth</span>
          </h2>

          <TypeAnimation
            sequence={[
              "Java Developer 💻",
              1500,
              "AI Engineer 🚀",
              1500,
              "Full Stack Learner 🤖",
              1500,
            ]}
            speed={50}
            repeat={Infinity}
            className="text-2xl font-semibold text-purple-400"
          />

          <p className="mt-6 text-lg opacity-80">
            Motivated Software Developer specializing in backend systems and
            AI-driven solutions. Passionate about building scalable,
            secure applications that solve real-world problems.
          </p>

          <div className="flex gap-4 mt-8 flex-wrap">

            <a
              href="mailto:sujeethkatta326@gmail.com"
              className="px-6 py-3 bg-blue-600 rounded-xl shadow-lg hover:bg-blue-700 transition"
            >
              Email
            </a>

            <a
              href="https://github.com/Sujeethkatta"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gray-700 rounded-xl hover:bg-gray-800 transition"
            >
              GitHub
            </a>

            <a
              href="/Sujeeth_Resume.pdf"
              target="_blank"
              className="px-6 py-3 bg-green-600 rounded-xl hover:bg-green-700 transition"
            >
              View Resume
            </a>

            <a
              href="/Sujeeth_Resume.pdf"
              download
              className="px-6 py-3 bg-purple-600 rounded-xl hover:bg-purple-700 transition"
            >
              Download
            </a>

          </div>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-blue-500 blur-2xl opacity-30"></div>

            <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl">
              <img
                src="/profile.jpg"
                alt="Katta Sujeeth"
                className="w-full h-full object-cover object-[50%_15%]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h3 className="text-3xl font-bold text-center mb-12">
          Featured Projects
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          {[...projects]
            .sort((a, b) => b.pinned - a.pinned)
            .map((project, index) => (

              <a
                key={index}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-6 rounded-2xl shadow-xl transition transform hover:scale-105 cursor-pointer
                ${project.pinned
                  ? "bg-gradient-to-br from-blue-700/40 to-purple-700/40 border border-blue-400"
                  : "bg-white/10 backdrop-blur"
                }`}
              >

                {project.pinned && (
                  <span className="text-xs bg-yellow-400 text-black px-2 py-1 rounded-full">
                    ⭐ Featured
                  </span>
                )}

                <h4 className="text-xl font-semibold mt-3 mb-3">
                  {project.title}
                </h4>

                <p className="opacity-80 mb-3">
                  {project.description}
                </p>

                <p className="text-sm text-blue-300">
                  {project.tech}
                </p>

              </a>
            ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="text-center pb-16">
        <h3 className="text-3xl font-bold mb-6">Contact</h3>

        <div className="flex flex-col md:flex-row justify-center gap-6 text-lg items-center">

          <a href="mailto:sujeethkatta326@gmail.com" className="hover:text-blue-400 transition">
            📧 sujeethkatta326@gmail.com
          </a>

          <a href="https://github.com/Sujeethkatta" target="_blank" rel="noopener noreferrer"
            className="hover:text-blue-400 transition">
            💻 github.com/Sujeethkatta
          </a>

          <a href="https://linkedin.com/in/sujeethkatta" target="_blank" rel="noopener noreferrer"
            className="hover:text-blue-400 transition">
            🔗 linkedin.com/in/sujeethkatta
          </a>

        </div>
      </section>

      <footer className="text-center py-6 opacity-60 text-sm">
        © {new Date().getFullYear()} Katta Sujeeth. All Rights Reserved.
      </footer>

    </div>
  );
}