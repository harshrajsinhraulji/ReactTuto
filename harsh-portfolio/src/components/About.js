
import React from 'react';
import { FaJava, FaReact, FaDatabase, FaChessKnight, FaGamepad, FaVolleyballBall, FaYoutube, FaDiscord, FaBeer, FaMoneyBillWave, FaSmile } from 'react-icons/fa';
import './About.css';

const About = () => (
  <section className="about-section">
    <h2 className="section-title">About Me</h2>
    <div className="about-content">
      <div className="about-summary-card">
        <div className="about-summary-avatar">
          <FaSmile className="about-summary-icon" />
        </div>
        <div className="about-summary-main">
          <h3>Harshrajsinh Raulji</h3>
          <div className="about-summary-title">Computer Engineering student @ ADIT</div>
          <div className="about-summary-desc" style={{marginBottom: '1.2rem'}}>
            I’m Harshrajsinh Raulji, a Computer Engineering student at AD Patel Institute of Technology, currently stuck in the degree I chose by accident (I heard it pays well, and here we are). Do I regret it? Pretty much every day. But since I’m here, I might as well turn it into something worthwhile—and hopefully profitable.<br/><br/>
            My first project was a calculator in C. Instead of being proud, my reaction was: “WTF, I wanted to build an app with graphics, not this lame stuff.” That moment pushed me to chase bigger projects where the output doesn’t look like it belongs in a DOS museum.
          </div>
        </div>
      </div>
      <div className="about-section-block">
        <strong>How I Work</strong>
        <ul className="about-list">
          <li>I prefer working solo with headphones on, but since I don’t know everything, I occasionally borrow brainpower from the “nerds.”</li>
          <li>Whether I plan or just hack away depends entirely on my mood.</li>
          <li>I’d rather build new features than debug, mostly because ChatGPT helps me code but is terrible at debugging (yes, I said it).</li>
        </ul>
      </div>
      <div className="about-section-block">
        <strong>What I Do Best</strong>
        <ul className="about-list">
          <li><FaJava /> Java Development (Core, Advanced, JDBC, Servlets, JSP)</li>
          <li><FaReact /> Web Development (HTML, CSS, JS, PHP)</li>
          <li>DSA fundamentals (stacks, queues, linked lists, trees, graphs, hashing)</li>
          <li><FaDatabase /> Databases (MySQL, JDBC, batch processing, transactions)</li>
          <li>Side skills in video editing, graphic design, and digital art</li>
        </ul>
      </div>
      <div className="about-section-block">
        <strong>Projects & Recognition</strong>
        <ul className="about-list">
          <li>Built a CLI banking system with transaction support</li>
          <li>Created a school management system in JDBC</li>
          <li>Early in the semester, I impressed my Java professor by building a JDBC + ArrayList program when no one else even knew where to start</li>
          <li>Still haunted by the time I broke a project by linking the wrong CSS file</li>
        </ul>
      </div>
      <div className="about-section-block">
        <strong>Beyond Code</strong>
        <ul className="about-list">
          <li><FaChessKnight /> Playing chess (peak 1650 rating)</li>
          <li><FaGamepad /> Gaming: Valorant, Hollow Knight, Silksong (waiting forever), Call of Duty Black Ops, Detroit Become Human</li>
          <li><FaVolleyballBall /> Sports: decent at volleyball and badminton</li>
          <li>Binge-watching shows until Netflix asks if I’m still alive</li>
          <li><FaDiscord /> Hanging out on Discord, making new friends, and occasionally editing videos or graphics for fun</li>
        </ul>
      </div>
      <div className="about-section-block">
        <strong>Career Plan (or Lack of One)</strong>
        <ul className="about-list">
          <li>Short-term: Become a Java Developer</li>
          <li>Long-term: Land any job that pays well, whether it’s in a startup, corporate giant, or some random company in Germany—or anywhere really. <FaBeer /> <FaMoneyBillWave /> Bread, beer, or benefits, I’ll take all three.</li>
        </ul>
      </div>
      <div className="about-section-block">
        <strong>My Vibe</strong>
        <div className="about-summary-desc">
          Think of me as the fun-but-serious engineer: I’ll joke about my mistakes, but I’ll still ship projects that work. My code isn’t duct-taped together (most of the time), and while I’m not the guy who codes 14 hours straight, I’m the guy who makes progress one pragmatic step at a time.
        </div>
      </div>
    </div>
  </section>
);

export default About;