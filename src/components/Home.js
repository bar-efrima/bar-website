import React from 'react';
import Hello from './Hello'; // Import the Hello section
import AboutMe from './AboutMe'; // Import the AboutMe section
import Projects from './Projects'; // Import the Projects section


function Home() {
  return (
    <div className="App"> 
        <Hello />
        <AboutMe />
        <Projects />
        </div>
  );
}

export default Home;
