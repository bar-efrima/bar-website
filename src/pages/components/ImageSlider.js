import React from 'react';
import Slider from 'react-slick';
import image1 from '../Amazon_Page/Images/1.jpg';
import image2 from '../Amazon_Page/Images/2.jpg';
import image3 from '../Amazon_Page/Images/3.jpg';
import image4 from '../Amazon_Page/Images/4.jpg';
import image5 from '../Amazon_Page/Images/5.jpg';
import image6 from '../Amazon_Page/Images/6.jpg';
import image7 from '../Amazon_Page/Images/7.jpg';
import image8 from '../Amazon_Page/Images/8.jpg';
import image9 from '../Amazon_Page/Images/9.jpg';
import image10 from '../Amazon_Page/Images/10.jpg';
import image11 from '../Amazon_Page/Images/11.jpg';
import image12 from '../Amazon_Page/Images/12.jpg';
import './ImageSlider.css';


function ImageSlider() {
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
        <div>
          <img src={image1} alt="Slide 1" className="slider-image" />
        </div>
        <div>
          <img src={image2} alt="Slide 2" className="slider-image" />
        </div>
        <div>
          <img src={image3} alt="Slide 3" className="slider-image" />
        </div>
        <div>
          <img src={image4} alt="Slide 4" className="slider-image" />
        </div>
        <div>
          <img src={image5} alt="Slide 5" className="slider-image" />
        </div>
        <div>
          <img src={image6} alt="Slide 6" className="slider-image" />
        </div>
        <div>
          <img src={image7} alt="Slide 7" className="slider-image" />
        </div>
        <div>
          <img src={image8} alt="Slide 8" className="slider-image" />
        </div>
        <div>
          <img src={image9} alt="Slide 9" className="slider-image" />
        </div>
        <div>
          <img src={image10} alt="Slide 10" className="slider-image" />
        </div>
        <div>
          <img src={image11} alt="Slide 11" className="slider-image" />
        </div>
        <div>
          <img src={image12} alt="Slide 12" className="slider-image" />
        </div>
      </Slider>
    </div>
  );
}

export default ImageSlider;

