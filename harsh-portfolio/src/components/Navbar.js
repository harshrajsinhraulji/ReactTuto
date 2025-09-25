
import React, { useContext, useState } from 'react';
import { Link } from 'react-scroll';
import { ThemeContext } from '../App';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';


const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavLinkClick = () => setMobileOpen(false);

  return (
    <nav className="navbar" role="navigation" aria-label="Main Navigation">
      <Link to="home" smooth={true} duration={500} className="nav-logo" aria-label="Scroll to top">
        Harshrajsinh Raulji
      </Link>
      <ul className={`nav-links${mobileOpen ? ' nav-links-mobile-open' : ''}`}>
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
      <button
        className="mobile-menu-btn"
        aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <FaTimes /> : <FaBars />}
      </button>
      {mobileOpen && <div className="nav-mobile-backdrop" onClick={() => setMobileOpen(false)} tabIndex={-1} aria-label="Close navigation menu" />}
    </nav>
  );
};

export default Navbar;