import React from 'react';
import { Link } from 'react-scroll';
import './Hero.css';
import profilePic from '../assets/profile-photo.png'; // Make sure your photo is a PNG and named correctly

const Hero = () => {
  return (
    <section id="home" className="hero-container">
      <div className="hero-content">
        <h1>Hi, I'm Harshrajsinh Raulji</h1>
        <p className="hero-tagline">
          A passionate Computer Engineer crafting robust backend systems with Java and building seamless user experiences with React.
        </p>
        <Link to="projects" smooth={true} duration={500} className="hero-button">
          View My Work
        </Link>
      </div>
      <div className="hero-image-container">
        <img src={profilePic} alt="Harshrajsinh Raulji" className="hero-image"/>
      </div>
    </section>
  );
};

export default Hero;