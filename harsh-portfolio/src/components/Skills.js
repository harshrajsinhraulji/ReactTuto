import React from 'react';
import { FaJava, FaReact, FaUsers, FaDatabase, FaBug, FaChessKnight, FaCloud, FaCodeBranch } from 'react-icons/fa';
import './Skills.css';

// We keep the same data structure
const skillsData = [
  {
    category: "Java & OOP",
    icon: <FaJava />,
    level: 95,
    color: "#f59e42",
    badges: ["Java", "OOP", "JDBC"],
    desc: "Robust backend systems, OOP, JDBC, Exception Handling"
  },
  {
    category: "React & Frontend",
    icon: <FaReact />,
    level: 90,
    color: "#3B82F6",
    badges: ["React", "JS", "SPA"],
    desc: "Modern UIs, SPA, hooks, state management"
  },
  {
    category: "SQL & Databases",
    icon: <FaDatabase />,
    level: 85,
    color: "#10b981",
    badges: ["SQL", "JDBC", "DB Design"],
    desc: "CRUD, transactions, schema design, batch ops"
  },
  {
    category: "Cloud & DevOps",
    icon: <FaCloud />,
    level: 70,
    color: "#6366f1",
    badges: ["Cloud", "Linux", "CI/CD"],
    desc: "Linux, cloud basics, CI/CD, deployment"
  },
  {
    category: "Version Control",
    icon: <FaCodeBranch />,
    level: 90,
    color: "#6366f1",
    badges: ["Git", "GitHub"],
    desc: "Git, GitHub, branching, PRs, teamwork"
  },
  {
    category: "Debugging & Testing",
    icon: <FaBug />,
    level: 80,
    color: "#f43f5e",
    badges: ["Debugging", "Testing"],
    desc: "Debugging, troubleshooting, test writing"
  },
  {
    category: "Soft Skills",
    icon: <FaUsers />,
    level: 95,
    color: "#f59e42",
    badges: ["Teamwork", "Communication", "Adaptable"],
    desc: "Collaboration, communication, adaptability, creativity"
  },
  {
    category: "Chess & Fun",
    icon: <FaChessKnight />,
    level: 80,
    color: "#a3a3a3",
    badges: ["Chess", "Game Dev"],
    desc: "Chess club, game dev hobbyist, creative problem-solving"
  },
];


const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">Tech Stack & Skills</h2>
      <div className="skills-grid">
        {skillsData.map((skill, idx) => (
          <div className="skill-card" key={idx} style={{animationDelay: `${0.1 * idx}s`}}>
            <div className="skill-card-header">
              <span className="skill-card-icon" style={{color: skill.color}}>{skill.icon}</span>
              <span className="skill-card-title">{skill.category}</span>
            </div>
            <div className="skill-card-desc">{skill.desc}</div>
            <div className="skill-card-progress">
              <div className="skill-card-progress-bar" style={{width: `${skill.level}%`, background: skill.color}}></div>
            </div>
            <div className="skills-badges">
              {skill.badges.map((badge, i) => (
                <span className="skills-badge" key={i}>{badge}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;