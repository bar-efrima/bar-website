import React from 'react';
import Hello from './Hello'; 
import AboutMe from './AboutMe'; 
import Projects from './Projects'; 


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
