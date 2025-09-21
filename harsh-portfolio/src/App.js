import './App.css';
import Navbar from './components/Navbar.js';
import Hero from './components/Hero.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      {/* The rest of your page sections will go below this */}
    </div>
  );
}

export default App;