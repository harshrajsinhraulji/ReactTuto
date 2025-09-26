
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
    <section id="home" className="hero-container hero-animate" style={{position:'relative', minHeight:'80vh', display:'flex', alignItems:'center', justifyContent:'center', overflow:'hidden'}}>
      {/* Animated SVG background blob for depth */}
      <svg style={{position:'absolute', top:'-10%', left:'-10%', zIndex:0, opacity:0.18}} width="600" height="600" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="heroGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="#60a5fa"/>
            <stop offset="100%" stopColor="#fff"/>
          </radialGradient>
        </defs>
        <ellipse cx="300" cy="300" rx="300" ry="220" fill="url(#heroGradient)" />
      </svg>
      <div className="hero-content" style={{zIndex:1, maxWidth: '700px', margin:'0 auto', textAlign:'center', padding:'2.5rem 1rem', borderRadius:'2.5rem', background:'rgba(255,255,255,0.92)', boxShadow:'0 8px 48px 0 #60a5fa18, 0 2px 12px #2563eb11'}}>
        <div style={{display:'flex', flexDirection:'column', alignItems:'center', marginBottom:'1.7rem'}}>
          <Tilt glareEnable={true} glareMaxOpacity={0.18} glareColor="#60a5fa" glarePosition="all" scale={1.07} transitionSpeed={1800} tiltMaxAngleX={18} tiltMaxAngleY={18} className="hero-tilt">
            <picture>
              <source srcSet={require('../assets/profile-photo.webp').default || require('../assets/profile-photo.webp')} type="image/webp" />
              <img
                src={profilePic}
                srcSet={`${profilePic} 1x`}
                alt="Harshrajsinh Raulji"
                className="hero-image cinematic-hero-image"
                width="160"
                height="160"
                loading="lazy"
                style={{background:'#e0e7ff', border:'6px solid #fff', boxShadow:'0 0 0 12px #60a5fa22', borderRadius:'50%'}}
              />
            </picture>
          </Tilt>
        </div>
        <h1 className="hero-title cinematic-title" style={{fontSize:'2.7rem', fontWeight:900, letterSpacing:'-2px', marginBottom:'1.1rem', lineHeight:1.1}}>
          <span ref={lineRef}>{cinematicLines[0]}</span>
        </h1>
        <div className="hero-identity-row" style={{marginBottom:'1.2rem'}}>
          <span
            className="hero-highlight hero-name-fancy hero-name-cinematic"
            onClick={onNameClick}
            aria-label="Open About"
            tabIndex={0}
            role="button"
            style={{cursor: 'pointer', fontWeight: 900, fontSize: '2.1rem', letterSpacing: '-1.5px', color:'var(--primary-blue)', background:'linear-gradient(90deg, #2563eb, #60a5fa 60%, #a5b4fc 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text'}}
            title="Click to know more about me!"
          >
            Harshrajsinh Raulji
          </span>
        </div>
        <p className="hero-tagline cinematic-tagline" style={{marginBottom:'2.1rem'}}>
          <span style={{fontWeight: 600, fontSize: '1.22rem', color: 'var(--primary-blue)'}}>I build digital experiences that feel alive.</span><br/>
          <span style={{fontSize: '1.08rem', color: 'var(--medium-gray)'}}>Code is my paintbrush, the web is my canvas.<br/>Scroll to see my story.</span>
        </p>
        <ResumeButton />
        <Link to="projects" smooth={true} duration={0} className="hero-button cinematic-cta" style={{marginTop:'1.5rem', fontSize:'1.13rem', fontWeight:700, padding:'1.1rem 2.5rem'}}>
          Enter the Portfolio
        </Link>
      </div>
    </section>
  );
};

Hero.propTypes = {
  onNameClick: PropTypes.func.isRequired,
};
export default Hero;