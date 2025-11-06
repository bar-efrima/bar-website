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
            Computer Science graduate from Reichman University with two years of 
            full-stack development and product-oriented research experience.
            I specialize in designing frontend architecture, building scalable 
            backend systems, and implementing secure authentication and authorization flows.
            My background includes extensive hands-on work with Generative AI and
            agentic workflows, as well as research in blockchain and IoT ecosystems.
            I enjoy solving complex system-level problems and creating practical, 
            user-centered solutions.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;