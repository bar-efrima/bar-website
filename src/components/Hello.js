import React, { useEffect } from 'react';
import './Hello.css'; 
import starsVideo from '../assets/videos/stars.webm';
import LogoContainer from './LogoContainer';
import SpaceButton from './SpaceButton';

function Hello() {

  useEffect(() => {
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
    
    <div className="mysite-pannel" id="helloWorldTag">
      {/* <a name="helloTag"></a> */}
      <video autoPlay muted loop id="myVideo">
        <source src={starsVideo} type="video/webm" />
      </video>
      <section className="HelloWorld">
        <div className="hidden">
          <p className="hello">Hello, World.</p>
          <p className="name">I'm Bar Efrima.</p>
          <a href="#aboutTag">
          <SpaceButton></SpaceButton>
          </a>
         
      <LogoContainer ></LogoContainer>
    </div>
    
      </section>
      
    </div>
  );
}

export default Hello;
