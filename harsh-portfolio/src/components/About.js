import React from 'react';


import { FaJava, FaReact, FaDatabase, FaTrophy, FaUserFriends, FaChessKnight } from 'react-icons/fa';
import './About.css';


const About = () => {
  return (
    <section id="about" className="about-section">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-summary-card">
          <div className="about-summary-avatar">
            <FaUserFriends className="about-summary-icon" />
          </div>
          <div className="about-summary-main">
            <h3>Harshrajsinh Raulji</h3>
            <div className="about-summary-title">Computer Engineer & Full Stack Developer</div>
            <div className="about-summary-icons">
              <FaJava title="Java" />
              <FaReact title="React" />
              <FaDatabase title="SQL" />
              <FaChessKnight title="Chess" />
              <FaTrophy title="Achievements" />
            </div>
            <div className="about-summary-desc">
              Passionate about building robust backend systems and seamless user experiences.<br/>
              Always learning, always building, always collaborating.
            </div>
          </div>
        </div>
        <div className="about-timeline">
          <div className="about-timeline-item">
            <div className="about-timeline-dot" />
            <div className="about-timeline-content">
              <b>2021–Present:</b> <span>Developed a <b>Banking System</b> in Java/JDBC, explored React, and participated in hackathons.</span>
            </div>
          </div>
          <div className="about-timeline-item">
            <div className="about-timeline-dot" />
            <div className="about-timeline-content">
              <b>2020:</b> <span>Started learning <b>Python</b> and data analysis, built CLI tools, and joined a chess club.</span>
            </div>
          </div>
          <div className="about-timeline-item">
            <div className="about-timeline-dot" />
            <div className="about-timeline-content">
              <b>2019:</b> <span>Entered Computer Engineering, discovered a love for problem-solving and teamwork.</span>
            </div>
          </div>
        </div>
        <div className="about-section-block">
          <strong>What drives me?</strong>
          <ul className="about-list">
            <li>🔍 <b>Curiosity</b> for new tech and frameworks (React, Python, game dev, and more)</li>
            <li>🛠️ <b>Problem-solving</b>—I love debugging and optimizing code</li>
            <li>🤝 <b>Collaboration</b>—I thrive in team environments and enjoy sharing knowledge</li>
            <li>🚀 <b>Continuous learning</b>—from AI/ML basics to cloud and cybersecurity</li>
          </ul>
        </div>
        <div className="about-section-block">
          <strong>Fun facts & soft skills:</strong>
          <ul className="about-list">
            <li>🌏 Multilingual: Fluent in English, Hindi, and Gujarati</li>
            <li>🎮 Hobbyist game developer & chess player</li>
            <li>🏆 Hackathon participant & coding contest enthusiast</li>
            <li>💡 Quick to adapt, creative, and detail-oriented</li>
          </ul>
        </div>
        <div className="about-badges">
          <span className="about-badge">Java</span>
          <span className="about-badge">React</span>
          <span className="about-badge">SQL</span>
          <span className="about-badge">Python</span>
          <span className="about-badge">OOP</span>
          <span className="about-badge">Teamwork</span>
          <span className="about-badge">Problem Solving</span>
        </div>
      </div>
    </section>
  );
};

export default About;