// src/components/Home.js
import React, { useEffect } from 'react';
import './Home.css'; 
import starsVideo from '../assets/videos/stars.webm';

function Home() {

  useEffect(() => {
    // Define the observer
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

  return (
    <div className="mysite-pannel" id="homeTag">
      <video autoPlay muted loop id="myVideo">
        <source src={starsVideo} type="video/webm" />
      </video>
      <section className="HelloWorld">
        <div className="hidden">
          <p className="hello">Hello, World.</p>
          <p className="name">I'm Bar Efrima.</p>
          <a href="#aboutmeTag">
            <p className="more stroke">more about me</p>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Home;
