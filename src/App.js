// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
// import About from './components/About';
import LogoContainer from './components/LogoContainer'; // Import the LogoContainer

function App() {
  return (
    <Router>
      <div className="App">
        
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
        </Routes>
        {}
        <LogoContainer />
      </div>
    </Router>
  );
}

export default App;
