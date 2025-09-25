import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      {/* The About and Contact sections will go here later */}
    </div>
  );
}

export default App;