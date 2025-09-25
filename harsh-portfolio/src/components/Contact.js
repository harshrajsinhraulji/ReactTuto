
import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section fade-in-section">
      <h2 className="section-title">Contact</h2>
      <div className="contact-content contact-content-minimal">
        <div className="contact-card">
          <div className="contact-card-title">Let's Connect</div>
          <div className="contact-card-links">
            <a href="mailto:harshrajsinhraulji@gmail.com" className="contact-link-minimal" aria-label="Email">
              <FaEnvelope /> harshrajsinhraulji@gmail.com
            </a>
            <a href="https://github.com/harshrajsinhraulji" target="_blank" rel="noopener noreferrer" className="contact-link-minimal" aria-label="GitHub">
              <FaGithub /> github.com/harshrajsinhraulji
            </a>
            <a href="https://www.linkedin.com/in/harshrajsinhraulji/" target="_blank" rel="noopener noreferrer" className="contact-link-minimal" aria-label="LinkedIn">
              <FaLinkedin /> linkedin.com/in/harshrajsinhraulji
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
