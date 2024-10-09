import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles
import './Carousel.css'; 

function PhotoCarousel({ images }) {
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
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default PhotoCarousel;
