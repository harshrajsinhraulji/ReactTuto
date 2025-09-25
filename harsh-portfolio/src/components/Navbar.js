import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="Main Navigation">
      <Link to="home" smooth={true} duration={500} className="nav-logo" aria-label="Scroll to top">
        Harshrajsinh Raulji
      </Link>
      <ul className="nav-links">
        <li>
          <Link to="about" spy={true} smooth={true} duration={500} aria-label="About section">About</Link>
        </li>
        <li>
          <Link to="projects" spy={true} smooth={true} duration={500} aria-label="Projects section">Projects</Link>
        </li>
        <li>
          <Link to="skills" spy={true} smooth={true} duration={500} aria-label="Skills section">Skills</Link>
        </li>
        <li>
          <Link to="contact" spy={true} smooth={true} duration={500} aria-label="Contact section">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;