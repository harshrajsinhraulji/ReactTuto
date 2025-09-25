import React, { useRef } from 'react';
import './Contact.css';

const Contact = () => {
  const formRef = useRef(null);

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Contact Me</h2>
      <div className="contact-content">
        <form ref={formRef} className="contact-form" onSubmit={e => e.preventDefault()}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
          <button type="submit" className="contact-btn">Send Message</button>
        </form>
        <div className="contact-links">
          <a href="mailto:harshrajsinhraulji@gmail.com" className="contact-link">Email</a>
          <a href="https://github.com/harshrajsinhraulji" target="_blank" rel="noopener noreferrer" className="contact-link">GitHub</a>
          <a href="https://www.linkedin.com/in/harshrajsinhraulji/" target="_blank" rel="noopener noreferrer" className="contact-link">LinkedIn</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
