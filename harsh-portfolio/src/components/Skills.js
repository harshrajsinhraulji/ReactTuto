
import React from 'react';
import {
  FaJava, FaReact, FaUsers, FaDatabase, FaBug, FaChessKnight, FaCloud, FaCodeBranch
} from 'react-icons/fa';
import skillsData from '../data/skillsData';
import './Skills.css';

const iconMap = {
  FaJava: <FaJava />,
  FaReact: <FaReact />,
  FaUsers: <FaUsers />,
  FaDatabase: <FaDatabase />,
  FaBug: <FaBug />,
  FaChessKnight: <FaChessKnight />,
  FaCloud: <FaCloud />,
  FaCodeBranch: <FaCodeBranch />,
};


const Skills = () => {
  return (
  <section id="skills" className="skills-section fade-in-section">
      <h2 className="skills-title">Tech Stack & Skills</h2>
      <div className="skills-grid">
        {skillsData.map((skill, idx) => (
          <div className="skill-card hover-pop" key={idx} style={{animationDelay: `${0.1 * idx}s`}}>
            <div className="skill-card-header">
              <span className="skill-card-icon" style={{color: skill.color}}>{iconMap[skill.icon]}</span>
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

// No props to validate
export default Skills;