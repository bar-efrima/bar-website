// src/components/LogoContainer.js
import React from 'react';
import './SpaceButton.css'; // Add styles here

function SpaceButton() {
  return (
    <button type="button" class="btn">
            <strong>More About Me</strong>
            <div id="container-stars">
              <div id="stars"></div>
            </div>

            <div id="glow">
              <div class="circle"></div>
              <div class="circle"></div>
            </div>
          </button>

  );
}

export default SpaceButton;
