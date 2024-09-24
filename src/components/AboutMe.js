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
        <img src={myPhoto} alt="Bar Efrima" />
        <div className="about-me-text">
          <h2>About Me</h2>
          <h1 className="letMe">Let me introduce myself.</h1>
          <p className={isVisible ? 'fade-in' : ''}>
            Bar Efrima, a 25-year-old BSc. Computer Science student,
            passionate about innovation, AI, and problem-solving. 
            With programming and graphic design expertise, I bring a unique
            blend of creativity and technical skills.
            I research computer-human interaction at Milab lab, Blockchain at Cambridge University and have a
            keen interest in mobile and web development.
            My goal is to push technology's boundaries through new
            challenges.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
