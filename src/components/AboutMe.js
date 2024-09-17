import React from 'react';
// import './AboutMe.css';

const AboutMe = () => {
  return (
    <section className="about-me" id="aboutmeTag">
      <div className="main-about-me">
        <img src="./my_photo.png" alt="Bar Efrima" />
        <div className="about-me-text">
          <h2>About Me</h2>
          <section className="fade-in-section">
            <h1 className="letMe">Let me introduce myself.</h1>
            <p> 
              Bar Efrima, a 24-year-old BSc. Computer Science student, passionate about innovation, AI, and problem-solving.
              <br />
              With programming and graphic design expertise, I bring a unique blend of creativity and technical skills.
              <br />
              I research computer-human interaction at Milab lab and have a keen interest in product development and IOT.
              <br />
              My goal is to push technology's boundaries through new challenges.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
