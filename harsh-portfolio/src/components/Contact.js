import React, { useRef } from 'react';
import './Contact.css';

const Contact = () => {
  const formRef = useRef(null);

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Contact Me</h2>
      <div className="contact-content">
        <form ref={formRef} className="contact-form" aria-label="Contact form" onSubmit={e => e.preventDefault()}>
          <input type="text" name="name" placeholder="Your Name" required aria-label="Your Name" />
          <input type="email" name="email" placeholder="Your Email" required aria-label="Your Email" />
          <textarea name="message" placeholder="Your Message" rows="5" required aria-label="Your Message"></textarea>
          <button type="submit" className="contact-btn" aria-label="Send Message">Send Message</button>
        </form>
        <div className="contact-links" aria-label="Contact links">
          <a href="mailto:harshrajsinhraulji@gmail.com" className="contact-link" aria-label="Email">Email</a>
          <a href="https://github.com/harshrajsinhraulji" target="_blank" rel="noopener noreferrer" className="contact-link" aria-label="GitHub">GitHub</a>
          <a href="https://www.linkedin.com/in/harshrajsinhraulji/" target="_blank" rel="noopener noreferrer" className="contact-link" aria-label="LinkedIn">LinkedIn</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
