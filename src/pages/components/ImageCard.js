import React from 'react';
import './ImageCard.css'; 

function ImageCard({ image }) {
  return (
    <div class="image">
        <img src={image} alt="image"/>
    
    </div>
  );
}

export default ImageCard;
