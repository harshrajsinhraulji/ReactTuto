
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-scroll';
import './Hero.css';
import profilePic from '../assets/profile-photo.png';
import Tilt from 'react-parallax-tilt';

import ResumeButton from './ResumeButton';

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
          <span
            className="hero-highlight hero-name-fancy"
            onClick={onNameClick}
            aria-label="Open About"
            tabIndex={0}
            role="button"
            style={{cursor: 'pointer', fontWeight: 800, fontSize: 'inherit'}}
            title="Click to know more about me!"
          >
            Harshrajsinh Raulji
          </span>
        </h1>
        <div className="hero-dynamic-subtitle">
          <span ref={subtitleRef}>Java Backend Developer</span>
        </div>
        <p className="hero-tagline">
          I craft robust backend systems with <b>Java</b> and build seamless user experiences with <b>React</b>.<br/>
          <span className="hero-summary">Always learning. Always building. Always collaborating.</span>
        </p>
        <ResumeButton />
  <Link to="projects" smooth={true} duration={0} className="hero-button">
          View My Work
        </Link>
      </div>
      <div className="hero-image-container">
        <Tilt glareEnable={true} glareMaxOpacity={0.18} glareColor="#60a5fa" glarePosition="all" scale={1.07} transitionSpeed={1800} tiltMaxAngleX={18} tiltMaxAngleY={18} className="hero-tilt">
          <picture>
            <source srcSet={require('../assets/profile-photo.webp').default || require('../assets/profile-photo.webp')} type="image/webp" />
            <img
              src={profilePic}
              srcSet={`${profilePic} 1x`}
              alt="Harshrajsinh Raulji"
              className="hero-image"
              width="320"
              height="320"
              loading="lazy"
              style={{background:'#e0e7ff', border:'5px solid var(--white)'}}
            />
          </picture>
        </Tilt>
      </div>
    </section>
  );
};

Hero.propTypes = {
  onNameClick: PropTypes.func.isRequired,
};
export default Hero;