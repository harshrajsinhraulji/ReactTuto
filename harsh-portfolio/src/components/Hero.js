import React from 'react';
import './Hero.css';
// import profilePic from '../assets/your-photo.jpg'; // We will add your photo in the next step

const Hero = () => {
  return (
    <section id="home" className="hero-container">
      <div className="hero-content">
        <h1>Hi, I'm Harshrajsinh Raulji</h1>
        <p className="hero-tagline">
          A passionate Computer Engineer crafting robust backend systems with Java and building seamless user experiences with React.
        </p>
        <a href="#projects" className="hero-button">View My Work</a>
      </div>
      <div className="hero-image-container">
        {/* <img src={profilePic} alt="Harshrajsinh Raulji" className="hero-image"/> */}
        <div className="hero-image-placeholder"></div> {/* Placeholder for now */}
      </div>
    </section>
  );
};

export default Hero;