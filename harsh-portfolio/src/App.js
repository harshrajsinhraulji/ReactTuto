import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Projects />
      {/* The About, Skills, and Contact sections will go here later */}
    </div>
  );
}

export default App;