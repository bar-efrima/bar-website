import React from 'react';
import './Banner.css'; 

function Banner({image}) {
  return (
    <div className="banner">
    <img src={image} alt="banner" loading="lazy"/>
    </div>
  );
}

export default Banner;
