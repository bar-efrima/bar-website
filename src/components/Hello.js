// src/components/Home.js
import React, { useEffect } from 'react';
import './Hello.css'; 
import starsVideo from '../assets/videos/stars.webm';
import linkedinLogo from '../assets/logos/linkedin.png';
import githubLogo from '../assets/logos/github.png';

function Hello() {

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });

    // Select all elements with the class 'hidden'
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach(el => observer.observe(el));

    // Cleanup the observer on component unmount
    return () => {
      hiddenElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    
    <div className="mysite-pannel" id="helloTag">
      <a name="helloTag"></a>
      <video autoPlay muted loop id="myVideo">
        <source src={starsVideo} type="video/webm" />
      </video>
      <section className="HelloWorld">
        <div className="hidden">
          <p className="hello">Hello, World.</p>
          <p className="name">I'm Bar Efrima.</p>
          <a href="#aboutmeTag">
            <p className="more stroke">more about me</p>
          </a>
          </div>
        <div className="logo-container">
      <a href="https://www.linkedin.com/in/bar-efrima/" target="_blank" rel="noopener noreferrer">
        <img src={linkedinLogo} alt="LinkedIn" />
      </a>
      <a href="https://github.com/bar-efrima/" target="_blank" rel="noopener noreferrer">
        <img src={githubLogo} alt="GitHub" />
      </a>
      
    </div>
      </section>
      
    </div>
  );
}

export default Hello;
