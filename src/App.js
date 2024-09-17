import React from 'react';
import './App.css';
import Header from './components/Header';
import HelloWorld from './components/HelloWorld';
import AboutMe from './components/AboutMe';
// import Projects from './components/Projects'; // You’ll add this in the next step
// import Footer from './components/Footer'; // You’ll add this in the next step

function App() {
  return (
    <div className="App">
      <Header />
      <HelloWorld />
      <AboutMe />
      {/* <Projects />
      <Footer /> */}
    </div>
  );
}

export default App;
