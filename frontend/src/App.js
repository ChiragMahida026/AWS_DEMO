import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './About/About';
import AboutChirag from './About/AboutChirag';
import AboutKaushik from './About/AboutKaushik';
import './App.css';
import Home from './Home';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/hello_world">Hello</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <ul>
            <li className="dropdown">
              <div>About</div>
              <ul className="dropdown-content">
                <li><Link to="/about">General</Link></li>
                <li><Link to="/about/chirag">Chirag</Link></li>
                <li><Link to="/about/kaushik">Kaushik</Link></li>
              </ul>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/about/chirag" element={<AboutChirag />} />
          <Route path="/about/kaushik" element={<AboutKaushik />} />
        </Routes>
        <Routes>
          <Route path="/hello_world" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
