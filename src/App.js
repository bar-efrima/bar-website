// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/AboutMe';
import Projects from './components/Projects';


function App() {
  return (
    <Router>
      <div className="App">   
        <Header />
        <Home />
        <About />
        <Projects />
        <Routes>
          {/* <Route path="/" element={<Projects />} /> */}
        </Routes>    
      </div>
    </Router>
  );
}

export default App;
