import React from 'react';
import Hello from './Hello';
import AboutMe from './AboutMe';
import Experience from './Experience';
import Projects from './Projects';


function Home() {
  return (
    <div className="App"> 
        <Hello />
        <AboutMe />
        <Experience />
        <Projects />
    </div>
  );
}

export default Home;
