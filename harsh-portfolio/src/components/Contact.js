

import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import './Contact.css';


const Contact = () => {
  return (
    <section id="contact" className="contact-section fade-in-section">
      <h2 className="section-title">Contact</h2>
      <div className="contact-content contact-content-unique">
        <div className="contact-card-unique">
          <div className="contact-avatar-unique">
            <span role="img" aria-label="Wave" className="contact-emoji">👋</span>
          </div>
          <div className="contact-card-title-unique">Let's Connect Creatively!</div>
          <div className="contact-card-links-unique">
            <a href="mailto:harshrajsinhraulji@gmail.com" className="contact-link-unique" aria-label="Email">
              <FaEnvelope />
            </a>
            <a href="https://github.com/harshrajsinhraulji" target="_blank" rel="noopener noreferrer" className="contact-link-unique" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/harshrajsinhraulji/" target="_blank" rel="noopener noreferrer" className="contact-link-unique" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
          </div>
          <div className="contact-card-desc-unique">
            <span>Open to collaborations, freelance, or just a friendly chat.<br/>Click an icon to reach out!</span>
          </div>
        </div>
      </div>
    </section>
  );
};

// No props to validate
export default Contact;
