import './App.css';
import Navbar from './components/Navbar.js';
import Hero from './components/Hero.js'; // 1. Import the Hero component

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero /> {/* 2. Add the Hero component here */}
      {/* The rest of your page sections will go below this */}
    </div>
  );
}

export default App;