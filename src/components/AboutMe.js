import React, { useEffect, useState } from 'react';
import './AboutMe.css';
import myPhoto from '../assets/images/my_photo.png';

function AboutMe() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('aboutTag');
      if (aboutSection) {
        const sectionPosition = aboutSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.1; // the ratio to control when fade-in triggers

        if (sectionPosition < screenPosition) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="about-me" id="aboutTag"> 
      <div className="main-about-me">
        <img src={myPhoto} alt="Bar Efrima" loading="lazy"/>
        <div className="about-me-text">
          <h2>About Me</h2>
          <h1 className="letMe">Let me introduce myself.</h1>
          <p className={isVisible ? 'fade-in' : ''}>
           I am passionate about innovation, AI, and problem-solving, 
           with expertise in programming, design, and full-stack development. 
           My experience includes building prototypes and working on diverse research projects in 
           areas such as computer-human interaction and blockchain. I am particularly interested in blockchain,
            IoT, full-stack development, and product development, especially on the frontend side. 
            I am seeking a role where I can apply my skills and continue to grow through new challenges.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;