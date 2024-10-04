// src/components/Home.js
import React, { useEffect } from 'react';
import './Hello.css'; 
import starsVideo from '../assets/videos/stars.webm';
import linkedinLogo from '../assets/logos/linkedin.png';
import githubLogo from '../assets/logos/github.png';
import LogoContainer from './LogoContainer';
import SpaceButton from './SpaceButton';

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

  const scrollToAboutMe = () => {
    const aboutMeSection = document.getElementById('aboutTag');
    if (aboutMeSection) {
      aboutMeSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
          <SpaceButton></SpaceButton>
            {/* <p onClick={scrollToAboutMe} style={{ cursor: 'pointer' }} className="more stroke">more about me</p> */}
          </a>
         
      <LogoContainer ></LogoContainer>
    </div>
    
      </section>
      
    </div>
  );
}

export default Hello;
