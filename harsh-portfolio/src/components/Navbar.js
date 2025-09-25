import React, { useContext } from 'react';
import { Link } from 'react-scroll';
import { ThemeContext } from '../App';
import { FaMoon, FaSun } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);
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
      <button
        className="theme-toggle-btn"
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
        title={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
      >
        {theme === 'light' ? <FaMoon /> : <FaSun />}
      </button>
    </nav>
  );
};

export default Navbar;