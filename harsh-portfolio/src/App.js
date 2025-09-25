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
            <About />
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