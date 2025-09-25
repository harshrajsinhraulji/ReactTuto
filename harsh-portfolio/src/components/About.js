import React from 'react';

import './About.css';


const About = () => {
  return (
    <section id="about" className="about-section">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            <strong>Hi, I'm Harshrajsinh Raulji!</strong> <br />
            I'm a <span className="about-badge">Computer Engineer</span> passionate about building robust backend systems and seamless user experiences. My journey began with a fascination for how software solves real-world problems, leading me to create projects like a full-featured <span className="about-badge">Banking System</span> in Java and JDBC.
          </p>
          <p>
            <strong>What drives me?</strong> <br />
            <ul className="about-list">
              <li>🔍 <b>Curiosity</b> for new tech and frameworks (React, Python, game dev, and more)</li>
              <li>🛠️ <b>Problem-solving</b>—I love debugging and optimizing code</li>
              <li>🤝 <b>Collaboration</b>—I thrive in team environments and enjoy sharing knowledge</li>
              <li>🚀 <b>Continuous learning</b>—from AI/ML basics to cloud and cybersecurity</li>
            </ul>
          </p>
          <p>
            <strong>Fun facts & soft skills:</strong>
            <ul className="about-list">
              <li>🌏 Multilingual: Fluent in English, Hindi, and Gujarati</li>
              <li>🎮 Hobbyist game developer & chess player</li>
              <li>🏆 Hackathon participant & coding contest enthusiast</li>
              <li>💡 Quick to adapt, creative, and detail-oriented</li>
            </ul>
          </p>
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
      </div>
    </section>
  );
};

export default About;