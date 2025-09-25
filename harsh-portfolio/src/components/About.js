import React from 'react';

import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            Hello! I'm Harshrajsinh, a Computer Engineer with a strong foundation in Java, Data Structures, and SQL. My journey into technology began with a fascination for how software solves real-world problems, which led me to build practical applications like a full-featured banking system using core Java and JDBC.
          </p>
          <p>
            While I have a solid background in backend fundamentals, I am equally passionate about creating intuitive and dynamic user experiences, which I am actively exploring through React. I thrive on learning new technologies and methodologies, from data analysis with Python to the fundamentals of game development.
          </p>
          <p>
            My goal is to leverage my skills in both backend and front-end development to build robust, scalable, and user-friendly applications.
          </p>

        </div>
      </div>
    </section>
  );
};

export default About;