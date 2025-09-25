import './App.css';



import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect, createContext } from 'react';

export const ThemeContext = createContext();




function App() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  // Theme switching
  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Lock background scroll when modal is open
  useEffect(() => {
    if (aboutOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [aboutOpen]);

  // Fade-in on scroll for sections
  useEffect(() => {
    const fadeSections = document.querySelectorAll('.fade-in-section');
    const onScroll = () => {
      fadeSections.forEach(sec => {
        const rect = sec.getBoundingClientRect();
        if (rect.top < window.innerHeight - 80) {
          sec.classList.add('visible');
        }
      });
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Router>
        <div className="App" id="main-content">
          <Navbar />
          <Routes>
            <Route path="/" element={
              <>
                <Hero onNameClick={() => setAboutOpen(true)} />
                {/* About section is now a modal */}
                {aboutOpen && (
                  <div className="about-modal-overlay" onClick={() => setAboutOpen(false)}>
                    <div className="about-modal" onClick={e => e.stopPropagation()}>
                      <button className="about-modal-close" onClick={() => setAboutOpen(false)} aria-label="Close About">×</button>
                      <div className="about-modal-profile">
                        <div className="about-modal-avatar">
                          <span role="img" aria-label="Smile">😄</span>
                        </div>
                        <div className="about-modal-summary">
                          <h3>Harshrajsinh Raulji</h3>
                          <div className="about-summary-title">Computer Engineering student @ ADIT</div>
                          <div className="about-summary-desc" style={{marginBottom: '0.7rem'}}>
                            I’m Harshrajsinh Raulji, a Computer Engineering student at AD Patel Institute of Technology, currently stuck in the degree I chose by accident (I heard it pays well, and here we are). Do I regret it? Pretty much every day. But since I’m here, I might as well turn it into something worthwhile—and hopefully profitable.<br/><br/>
                            My first project was a calculator in C. Instead of being proud, my reaction was: “WTF, I wanted to build an app with graphics, not this lame stuff.” That moment pushed me to chase bigger projects where the output doesn’t look like it belongs in a DOS museum.
                          </div>
                        </div>
                      </div>
                      <About modalMode />
                    </div>
                  </div>
                )}
                <Projects />
                <Skills />
                <Testimonials />
                <Blog />
                <Contact />
              </>
            } />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;