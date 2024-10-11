import React from 'react';
import './SpaceButton.css'; 
import arrow from '../assets/logos/smallArrow.png'; 

function SpaceButton() {
  return (
    <button type="button" className="space-btn">
      <div className="more-container">
        <strong>MORE ABOUT ME</strong>
        <img src={arrow} alt="arrow" className="arrow-icon" />
      </div>

      <div id="container-stars">
        <div id="stars"></div>
      </div>

      <div id="glow">
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    </button>
  );
}

export default SpaceButton;
