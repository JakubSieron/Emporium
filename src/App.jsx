import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Miniatures from './pages/Miniatures';
import Books from './pages/Books';
import Paints from './pages/Paints';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/miniatures" element={<Miniatures />} />
        <Route path="/books" element={<Books />} />
        <Route path="/paints" element={<Paints />} />
      </Routes>
    </Router>
  );
}

export default App;
