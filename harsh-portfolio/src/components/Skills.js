import React, { useState } from 'react';
// Import all the necessary icons
import { FaJava, FaReact, FaCertificate, FaUsers } from 'react-icons/fa';
import { VscTerminalCmd } from 'react-icons/vsc';
import { HiLightBulb } from 'react-icons/hi';
import './Skills.css';

// We keep the same data structure
const skillsData = [
  {
    category: "Programming & Core CS",
    icon: <FaJava />,
    points: [
      "Proficient in Java (OOP, JDBC, Exception Handling)",
      "Strong foundation in Data Structures & Algorithms",
      "Skilled in C for procedural programming",
      "Working knowledge of Python for scripting",
      "Object-Oriented Design & Patterns"
    ],
    badges: ["Java", "C", "Python", "OOP", "DSA"]
  },
  {
    category: "Web & Database",
    icon: <FaReact />,
    points: [
      "Front-end with React and modern JavaScript",
      "Backend integration with Java (Servlets, JSP, JDBC)",
      "Strong SQL skills (CRUD, Transactions, Batch Ops)",
      "Experience with both CLI and web applications",
      "REST APIs & JSON"
    ],
    badges: ["React", "JavaScript", "SQL", "JDBC", "APIs"]
  },
  {
    category: "Tools & Platforms",
    icon: <VscTerminalCmd />,
    points: [
      "Version control with Git and GitHub",
      "IDEs: IntelliJ IDEA, Eclipse, VS Code",
      "Comfortable with command-line workflows",
      "Exposure to AI/ML, Cloud, and Cybersecurity concepts",
      "Linux & Windows environments"
    ],
    badges: ["Git", "VS Code", "Linux", "Cloud"]
  },
  {
    category: "Development & Methodology",
    icon: <HiLightBulb />,
    points: [
      "Effective AI Prompt Engineering for code generation & debugging",
      "Intuitive, iterative development and problem-solving",
      "Quick adoption of feedback to refine project features",
      "Strong ability to debug based on symptoms and error logs",
      "Agile, teamwork, and communication"
    ],
    badges: ["Agile", "Debugging", "Teamwork", "Communication"]
  },
  {
    category: "Certifications & Achievements",
    icon: <FaCertificate />,
    points: [
      "Java Programming Certificate (Coursera)",
      "SQL for Data Science (Coursera)",
      "Hackathon finalist & coding contest participant",
      "Chess club member & game dev hobbyist"
    ],
    badges: ["Certified", "Hackathon", "Chess", "Game Dev"]
  },
  {
    category: "Soft Skills & Fun Facts",
    icon: <FaUsers />,
    points: [
      "Multilingual: English, Hindi, Gujarati",
      "Excellent communication & presentation",
      "Creative, detail-oriented, and quick to adapt",
      "Enjoys chess, gaming, and learning new tech"
    ],
    badges: ["Multilingual", "Creative", "Adaptable", "Chess"]
  }
];

const Skills = () => {
  // 'useState' to keep track of the selected tab. 'Programming & Core CS' is the default.
  const [activeTab, setActiveTab] = useState(skillsData[0].category);

  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">Technical Expertise</h2>
      <div className="skills-tab-container">
        {/* These are the buttons to switch tabs */}
        <div className="skills-tabs">
          {skillsData.map((skill, index) => (
            <button
              key={index}
              className={`tab-button ${activeTab === skill.category ? 'active' : ''}`}
              onClick={() => setActiveTab(skill.category)}
            >
              {skill.icon}
              <span>{skill.category}</span>
            </button>
          ))}
        </div>

        {/* This is the content that changes based on the active tab */}
        <div className="skills-tab-content">
          {skillsData.map((skill, index) => (
            activeTab === skill.category && (
              <div key={index}>
                <ul className="skill-points">
                  {skill.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
                {skill.badges && (
                  <div className="skills-badges">
                    {skill.badges.map((badge, i) => (
                      <span className="skills-badge" key={i}>{badge}</span>
                    ))}
                  </div>
                )}
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;