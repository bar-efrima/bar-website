import React from 'react';
import './AboutMe.css';

function AboutMe() {
  return (
    <section className="about-me">
      <a name="aboutmeTag"></a>
      <div className="main-about-me">
        <img src="./assets/images/my_photo.png" alt="Bar Efrima" />
        <div className="about-me-text">
          <h2>About Me</h2>
          <section className="fade-in-section">
            <h1 className="letMe">Let me introduce myself.</h1>
            <p>Bar Efrima, a 24-year-old BSc. Computer Science student, passionate about innovation, AI, and problem-solving...</p>
          </section>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
