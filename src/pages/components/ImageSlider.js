import React from 'react';
import Slider from 'react-slick';
import './ImageSlider.css';

function ImageSlider({ images }) {
  const sliderSettings = {
    infinite: true, // Infinite loop
    speed: 6000, // Slow transition speed
    slidesToShow: 5, // Show 5 slides at a time
    slidesToScroll: 1,
    autoplay: true, // Automatically scroll
    autoplaySpeed: 0, // No delay between transitions
    cssEase: 'linear', // Smooth continuous sliding
    arrows: false, // No arrows
    pauseOnHover: false, // Keep scrolling on hover
    variableWidth: true, // Ensure images are continuous
  };

  return (
    <div className="slider-container">
      <Slider {...sliderSettings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index + 1}`} className="slider-image" loading="lazy"/>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ImageSlider;
