import React from 'react';
import './GraphicDesign.css'; // Import the CSS file
import TextCard from '../components/TextCardProject'; // AboutCard component

// Import your Images
import img1 from './Images/1.png';
import img2 from './Images/2.jpg';
import img3 from './Images/3.png';
import img4 from './Images/4.png';
import basta from './Images/basta.png';
import card from './Images/card.jpg';
import celestial from './Images/celestial.jpg';
import customCard from './Images/custom_card.jpg';
import hamal from './Images/hamal.png';
import hamalRed from './Images/hamal_red.png';
import michshor from './Images/michshor.png';
import royalCats from './Images/royalcats.jpg';
import oketz from './Images/OKETZ.png';
import interfaces from './Images/interface.jpg';
import logoMador from './Images/logo_mador.png';
import himushLoop from './Images/himush_loop_LONG.gif';
import effect from './Images/effec_nfc.jpg';

function GraphicDesign() {

  const graphicTitle = {
    title: 'Graphic Design'
  }

  const images = [

    { src: himushLoop, className: 'gallery__item--wide' },
    { src: interfaces, className: 'gallery__item--wide' },

    { src: card, className: 'gallery__item--square' },
    { src: celestial, className: 'gallery__item--square' },
    { src: customCard, className: 'gallery__item--square' },
    { src: royalCats, className: 'gallery__item--square' },

    { src: img3, className: 'gallery__item--square' },
    { src: img4, className: 'gallery__item--square' },
    { src: logoMador, className: 'gallery__item--wide' },
 
    { src: oketz, className: 'gallery__item--wide' },
    { src: hamal, className: 'gallery__item--square' },
    { src: hamalRed, className: 'gallery__item--square' },

    { src: michshor, className: 'gallery__item--square' },

    { src: effect, className: 'gallery__item--wide' },
    { src: img1, className: 'gallery__item--square' },
    { src: img2, className: 'gallery__item--square' },

    { src: basta, className: 'gallery__item--wide' },

  ];

  return (
    <div>
      <TextCard projectDescription={graphicTitle}> 
      <p> I have a passion for graphic design and enjoy creating logos, business cards, and other designs. I have experience with Adobe Illustrator and Photoshop. I have created logos for various companies and organizations. I have also designed business cards, posters, and other promotional materials. I enjoy working with clients to create designs that meet their needs and exceed their expectations. I am always looking for new opportunities to expand my skills and create new and exciting designs.
        </p> 
        </TextCard>
    
    <div className="container">
      <div className="gallery">
        {images.map((image, index) => (
          <figure className={`gallery__item ${image.className}`} key={index}>
            <img src={image.src} alt={`Gallery item ${index + 1}`} className="gallery__img" />
          </figure>
        ))}
      </div>
    </div>
    </div>
  );
}

export default GraphicDesign;
