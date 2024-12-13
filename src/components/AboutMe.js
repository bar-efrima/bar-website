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
          A versatile and motivated Computer Science student with experience in full-stack development, 
          research, and diverse projects. I am passionate about innovation and 
          problem-solving and eager to learn and grow in cutting-edge fields.
           I thrive in dynamic, fast-paced environments and enjoy collaborating 
           with others to create impactful solutions.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;