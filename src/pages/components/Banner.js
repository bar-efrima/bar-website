import React from 'react';
import './Banner.css'; 

function Banner({image}) {
  return (
    <div className="banner">
    <img src={image} alt="banner"/>
    </div>
  );
}

export default Banner;
