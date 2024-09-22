import React from 'react';
import './AboutMe.css';
import myPhoto from '../assets/images/my_photo.png';

function AboutMe() {
  return (
    <section className="about-me" id = "aboutTag"> 
    
      <a name="aboutmeTag"></a>
      <div className="main-about-me">
        <img src={myPhoto} alt="Bar Efrima" />
        <div className="about-me-text">
          <h2>About Me</h2>
        
            <h1 className="letMe">Let me introduce myself.</h1>
            <p>
              Bar Efrima, a 25-year-old BSc. Computer Science student,
              passionate about innovation, AI, and problem-solving. 
              With programming and graphic design expertise, I bring a unique
              blend of creativity and technical skills.
              I research computer-human interaction at Milab lab, Blockchain at Caimbridge University and have a
              keen interest in mobile and web devleopment.
              My goal is to push technology's boundaries through new
              challenges.
            </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
