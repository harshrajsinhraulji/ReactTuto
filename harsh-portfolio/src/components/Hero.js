
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import './Hero.css';
import profilePic from '../assets/profile-photo.png';

const dynamicTitles = [
  'Java Backend Developer',
  'React Frontend Enthusiast',
  'Problem Solver',
  'Tech Explorer',
  'Team Player',
];



const Hero = ({ onNameClick }) => {
  const subtitleRef = useRef(null);
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (subtitleRef.current) {
        subtitleRef.current.textContent = dynamicTitles[i % dynamicTitles.length];
        i++;
      }
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="hero-container hero-animate">
      <div className="hero-content">
        <h1 className="hero-title">
          Hi, I'm{' '}
          <button
            className="hero-highlight hero-name-btn"
            onClick={onNameClick}
            aria-label="Open About"
            tabIndex={0}
          >
            Harshrajsinh Raulji
          </button>
        </h1>
        <div className="hero-dynamic-subtitle">
          <span ref={subtitleRef}>Java Backend Developer</span>
        </div>
        <p className="hero-tagline">
          I craft robust backend systems with <b>Java</b> and build seamless user experiences with <b>React</b>.<br/>
          <span className="hero-summary">Always learning. Always building. Always collaborating.</span>
        </p>
        <Link to="projects" smooth={true} duration={500} className="hero-button">
          View My Work
        </Link>
      </div>
      <div className="hero-image-container">
        <img src={profilePic} alt="Harshrajsinh Raulji" className="hero-image"/>
        {/* 3D/animated element can be added here in the future */}
      </div>
    </section>
  );
};

export default Hero;