import './App.css';



import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import React, { useState } from 'react';



function App() {
  const [aboutOpen, setAboutOpen] = useState(false);

  // Pass handler to Hero for name click
  return (
    <div className="App">
      <Navbar />
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
      <Contact />
    </div>
  );
}


export default App;