
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-scroll';
import './Hero.css';
import profilePic from '../assets/profile-photo.png';
import Tilt from 'react-parallax-tilt';

import ResumeButton from './ResumeButton';

// Cinematic, personal opening lines for narrative effect
const cinematicLines = [
  'I turn late-night ideas into code that breathes.',
  'Building digital worlds, one bug at a time.',
  'Engineer. Storyteller. Reluctant morning person.',
  'I don’t just ship features—I ship stories.',
  'Welcome to my corner of the internet. It’s weird, it’s real, it’s me.'
];



const Hero = ({ onNameClick }) => {
  const lineRef = useRef(null);
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (lineRef.current) {
        lineRef.current.textContent = cinematicLines[i % cinematicLines.length];
        i++;
      }
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="hero-container hero-animate">
      <div className="hero-content">
        <h1 className="hero-title cinematic-title">
          <span ref={lineRef}>{cinematicLines[0]}</span>
        </h1>
        <div className="hero-identity-row">
          <span
            className="hero-highlight hero-name-fancy hero-name-cinematic"
            onClick={onNameClick}
            aria-label="Open About"
            tabIndex={0}
            role="button"
            style={{cursor: 'pointer', fontWeight: 900, fontSize: '2.6rem', letterSpacing: '-1.5px'}}
            title="Click to know more about me!"
          >
            Harshrajsinh Raulji
          </span>
        </div>
        <p className="hero-tagline cinematic-tagline">
          <span style={{fontWeight: 500, fontSize: '1.25rem', color: 'var(--primary-blue)'}}>I build digital experiences that feel alive.</span><br/>
          <span style={{fontSize: '1.08rem', color: 'var(--medium-gray)'}}>Code is my paintbrush, the web is my canvas.<br/>Scroll to see my story.</span>
        </p>
        <ResumeButton />
        <Link to="projects" smooth={true} duration={0} className="hero-button cinematic-cta">
          Enter the Portfolio
        </Link>
      </div>
      <div className="hero-image-container cinematic-image-container">
        <Tilt glareEnable={true} glareMaxOpacity={0.18} glareColor="#60a5fa" glarePosition="all" scale={1.07} transitionSpeed={1800} tiltMaxAngleX={18} tiltMaxAngleY={18} className="hero-tilt">
          <picture>
            <source srcSet={require('../assets/profile-photo.webp').default || require('../assets/profile-photo.png')} type="image/webp" />
            <img
              src={profilePic}
              srcSet={`${profilePic} 1x`}
              alt="Harshrajsinh Raulji"
              className="hero-image cinematic-hero-image"
              width="320"
              height="320"
              loading="lazy"
              style={{background:'#e0e7ff', border:'5px solid var(--white)', boxShadow:'0 0 0 12px #60a5fa22'}}
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