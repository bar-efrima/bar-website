import React from 'react';
import Hello from './Hello';
import AboutMe from './AboutMe';
import Experience from './Experience';
import Highlights from './Highlights';
import Projects from './Projects';


function Home() {
  return (
    <div className="App"> 
        <Hello />
        <AboutMe />
        <Experience />
        <Highlights />
        <Projects />
    </div>
  );
}

export default Home;
