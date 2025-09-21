import React from 'react';
import './Hero.css';
// 1. Make sure this path and filename are correct
import profilePic from '../assets/profile-photo.jpg'; 

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
        {/* 2. Replace the placeholder div with this img tag */}
        <img src={profilePic} alt="Harshrajsinh Raulji" className="hero-image"/>
      </div>
    </section>
  );
};

export default Hero;