import React from "react";

const Projects = () => {
  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>🚀 My Projects</h2>

      <div style={styles.container}>

        {/* ⭐ PINNED PROJECT 1 */}
        <div style={{ ...styles.card, ...styles.pinned }}>
          <h3>⭐ AI Resume Ranking System</h3>
          <p>
            Intelligent system that ranks candidate resumes based on job
            description similarity using NLP techniques and TF-IDF.
          </p>
          <p><strong>Tech:</strong> Python, NLP, Machine Learning</p>
          <a 
            href="https://github.com/Sujeethkatta/AI-Resume-Ranking-System"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>

        {/* ⭐ PINNED PROJECT 2 */}
        <div style={{ ...styles.card, ...styles.pinned }}>
          <h3>⭐ AI Chatbot (NLP)</h3>
          <p>
            AI-powered chatbot capable of understanding user queries and
            generating intelligent responses using Natural Language Processing.
          </p>
          <p><strong>Tech:</strong> Python, NLP</p>
          <a 
            href="https://github.com/Sujeethkatta/AI-Chatbot-NLP"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>

        {/* OTHER PROJECTS */}

        <div style={styles.card}>
          <h3>Online Banking System</h3>
          <p>
            Console-based banking application supporting account creation,
            deposits, withdrawals and balance inquiry.
          </p>
          <p><strong>Tech:</strong> Core Java, OOP</p>
        </div>

        <div style={styles.card}>
          <h3>Student Management System</h3>
          <p>
            Java application integrated with MySQL database to manage
            student records with CRUD operations.
          </p>
          <p><strong>Tech:</strong> Java, JDBC, MySQL</p>
        </div>

        <div style={styles.card}>
          <h3>Portfolio Website</h3>
          <p>
            Responsive personal portfolio built using React and Vite
            showcasing projects and skills.
          </p>
          <p><strong>Tech:</strong> React, CSS</p>
        </div>

      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: "60px 20px",
    textAlign: "center",
  },
  heading: {
    fontSize: "32px",
    marginBottom: "40px",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
  },
  card: {
    backgroundColor: "#1e1e1e",
    color: "white",
    padding: "20px",
    width: "320px",
    borderRadius: "12px",
    boxShadow: "0 0 15px rgba(0,0,0,0.4)",
    textAlign: "left",
  },
  pinned: {
    border: "2px solid gold",
  },
};

export default Projects;