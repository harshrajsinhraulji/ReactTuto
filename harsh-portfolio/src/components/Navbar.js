import React from 'react';
import './Navbar.css'; // We will create this file next

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="#home" className="nav-logo">Harshrajsinh Raulji</a>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;