import React from 'react';
import './Hello.css';
import { HashLink } from 'react-router-hash-link';
import starsVideo from '../assets/videos/stars.webm';

function Hello() {
  const handleMailClick = (event) => {
    event.preventDefault();
    const email = 'bar2798@gmail.com';
    const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;

    window.location.href = `mailto:${email}`;

    window.setTimeout(() => {
      if (document.visibilityState === 'visible') {
        window.open(gmailComposeUrl, '_blank', 'noopener,noreferrer');
      }
    }, 450);
  };

  return (
    <div className="mysite-pannel" id="helloWorldTag">
      <div className="hero-bg"></div>
      <video autoPlay muted loop id="myVideo">
        <source src={starsVideo} type="video/webm" />
      </video>
      <section className="HelloWorld">
        <div className="show">
          <p className="hello">Hello World.</p>
          <p className="name">I'm Bar Efrima.</p>
          <p className="hero-role">
            Full Stack Developer<span className="sep">-</span>AI and Systems
          </p>
          <div className="hero-ctas">
            <HashLink smooth to="/#experienceTag" className="hero-btn primary">
              View My Work
              <span className="ic">
                <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </HashLink>
            <a
              href="mailto:bar2798@gmail.com"
              className="hero-btn ghost"
              onClick={handleMailClick}
              aria-label="Send email to Bar Efrima"
            >
              Get in Touch
              <span className="ic">
                <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path
                    d="M2 4h12v8H2zM2 4l6 5 6-5"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </section>
      <HashLink smooth to="/#aboutTag" className="scroll-cue" aria-label="Scroll down">
        <span>Scroll</span>
        <span className="mouse"></span>
      </HashLink>
    </div>
  );
}

export default Hello;
