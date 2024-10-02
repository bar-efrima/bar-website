import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles
import image1 from '../Amazon_Page/Images/ca1.png';
import image2 from '../Amazon_Page/Images/ca2.png';
import './Carousel.css'; // Import the carousel component styles

function PhotoCarousel() {
  return (
    <div className="carousel-wrapper">
      <Carousel
        showArrows={true}
        showThumbs={false}
        infiniteLoop={true}  // Allows for infinite scrolling
        autoPlay={false}     // Disable autoPlay
        swipeable={true}     // Enable swiping on mobile
        emulateTouch={true}  // Allow touch functionality for mobile devices
        dynamicHeight={false} // Prevents height from adjusting based on image size
      >
         <div>
          <img src={image1} alt="First Slide" />
        </div>
        <div>
          <img src={image2} alt="Second Slide" />
        </div>
      </Carousel>
    </div>
  );
}

export default PhotoCarousel;
