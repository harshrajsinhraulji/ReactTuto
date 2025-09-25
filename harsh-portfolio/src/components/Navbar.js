
import React, { useContext, useState } from 'react';
import { Link } from 'react-scroll';
import { ThemeContext } from '../App';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';


const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar" role="navigation" aria-label="Main Navigation">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Link to="home" smooth={true} duration={500} className="nav-logo" aria-label="Scroll to top">
        Harshrajsinh Raulji
      </Link>
      <button
        className="hamburger-btn"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        aria-controls="nav-menu"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>
      <ul className={`nav-links${menuOpen ? ' open' : ''}`} id="nav-menu">
        <li>
          <Link to="about" spy={true} smooth={true} duration={500} aria-label="About section" onClick={handleNavLinkClick}>About</Link>
        </li>
        <li>
          <Link to="projects" spy={true} smooth={true} duration={500} aria-label="Projects section" onClick={handleNavLinkClick}>Projects</Link>
        </li>
        <li>
          <Link to="skills" spy={true} smooth={true} duration={500} aria-label="Skills section" onClick={handleNavLinkClick}>Skills</Link>
        </li>
        <li>
          <Link to="contact" spy={true} smooth={true} duration={500} aria-label="Contact section" onClick={handleNavLinkClick}>Contact</Link>
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

// No props to validate
export default Navbar;