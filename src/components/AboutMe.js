import React, { useEffect, useRef, useState } from 'react';
import './AboutMe.css';
import myPhoto from '../assets/images/my_photo.png';

function AboutMe() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.18 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="about-me" id="aboutTag"> 
      <div ref={sectionRef} className={`main-about-me reveal-up ${isVisible ? 'is-visible' : ''}`}>
        <img src={myPhoto} alt="Bar Efrima" loading="lazy"/>
        <div className="about-me-text">
          <h2>About Me</h2>
          <h1 className="letMe">Let me introduce myself.</h1>
          <p>
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