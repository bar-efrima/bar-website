import React from 'react';
import Hello from './Hello'; // Import the Hello section
import AboutMe from './AboutMe'; // Import the AboutMe section
import Projects from './Projects'; // Import the Projects section
import Header from './Header'; // Import the head section


function Home() {
  return (
    <div className="App"> 
    {/* <section id="home"></section>   */}
        <Hello />
        <AboutMe />
        <Projects />
        </div>
  );
}

export default Home;
