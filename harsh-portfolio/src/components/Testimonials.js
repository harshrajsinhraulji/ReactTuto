import React from 'react';
import './Testimonials.css';
import { FaQuoteLeft, FaQuoteRight, FaUserTie, FaUserGraduate, FaUserFriends } from 'react-icons/fa';


import testimonials from '../data/testimonialsData';

const iconMap = {
  FaUserTie: <FaUserTie />,
  FaUserGraduate: <FaUserGraduate />,
  FaUserFriends: <FaUserFriends />,
};


const Testimonials = () => (
  <section id="testimonials" className="testimonials-section fade-in-section">
    <h2 className="section-title">Testimonials</h2>
    <div className="testimonials-list">
      {testimonials.map((t, i) => (
        <div className="testimonial-card hover-pop" key={i} style={{animationDelay: `${0.1 * i}s`}}>
          <div className="testimonial-quote">
            <FaQuoteLeft className="testimonial-quote-icon left" />
            <span>{t.quote}</span>
            <FaQuoteRight className="testimonial-quote-icon right" />
          </div>
          <div className="testimonial-profile">
            <span className="testimonial-icon">{iconMap[t.icon]}</span>
            <span className="testimonial-name">{t.name}</span>
            <span className="testimonial-role">{t.role}</span>
          </div>
        </div>
      ))}
    </div>
  </section>
);

// No props to validate
export default Testimonials;
