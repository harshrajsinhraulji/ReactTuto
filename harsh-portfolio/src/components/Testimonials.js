import React from 'react';
import './Testimonials.css';
import { FaQuoteLeft, FaQuoteRight, FaUserTie, FaUserGraduate, FaUserFriends } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Prof. Sharma',
    role: 'Java Professor',
    icon: <FaUserTie />,
    quote: 'Harshraj is the only student who can break my code and fix it in the same breath. If he spent as much time in class as he does on GitHub, he would be teaching this course!'
  },
  {
    name: 'Mom',
    role: 'Chief Encouragement Officer',
    icon: <FaUserGraduate />,
    quote: 'He says he’s coding, but all I see is him staring at a black screen and drinking chai. Still, I’m proud (I think).'
  },
  {
    name: 'Dad',
    role: 'Family Tech Support',
    icon: <FaUserGraduate />,
    quote: 'I don’t know what he does, but the WiFi is always working and my phone is never slow. That’s success, right?'
  },
  {
    name: 'Best Friend',
    role: 'Gaming Partner',
    icon: <FaUserFriends />,
    quote: 'He codes like a beast, but still can’t beat me in Valorant. 10/10 would recommend as a teammate (for code, not games).'
  },
  {
    name: 'Sister',
    role: 'Design Critic',
    icon: <FaUserFriends />,
    quote: 'He made my website, but still can’t make his own bed. Priorities!'
  }
];

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
            <span className="testimonial-icon">{t.icon}</span>
            <span className="testimonial-name">{t.name}</span>
            <span className="testimonial-role">{t.role}</span>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;
