import React from 'react';
import './GraphicDesign.css'; // Import the CSS file
import TextCard from '../components/TextCardProject'; // AboutCard component

// Import your Images
import basta from './Images/Basta.png';
import nftCard from './Images/NFT_Card.jpg';
import celestialCard from './Images/Celestial_Card.jpg';
import customCard from './Images/Custom_Card.jpg';
import dogAbilityRed from './Images/Dog_Ability_Red.jpg';
import dogAbilityYellow from './Images/Dog_Ability_Yellow.png';
import maorPatch from './Images/Maor_Patch_604.png';
import nasaPatch from './Images/Nasa_Patch.png';
import effecNFC from './Images/Effec_NFC.jpg';
import effectQRCastle from './Images/EffectQR_Castle.jpg';
import hamalGreen from './Images/Hamal_Green.png';
import hamalRed from './Images/Hamal_Red.png';
import michshor from './Images/Michshor.png';
import royalCats from './Images/Royalcats.jpg';
// import oketz from './Images/Oketz.png';

import launchDisplay from './Images/Launch_Display.jpg';
import logoMadorBlack from './Images/Logo_Mador_Black.jpg';
import himushLoop from './Images/himush_loop.mp4';


function GraphicDesign() {

  const graphicTitle = {
    title: 'Graphic Design'
  }

  const images = [

  { src: himushLoop, className: 'gallery__item--wide' },
  { src: launchDisplay, className: 'gallery__item--wide' },

  { src: nftCard, className: 'gallery__item--square' },
  { src: celestialCard, className: 'gallery__item--square' },
  { src: customCard, className: 'gallery__item--square' },
  { src: royalCats, className: 'gallery__item--square' },

  { src: maorPatch, className: 'gallery__item--square' },
  { src: nasaPatch, className: 'gallery__item--square' },
  { src: logoMadorBlack, className: 'gallery__item--wide' },

  { src: oketz, className: 'gallery__item--wide' },
  { src: hamalGreen, className: 'gallery__item--square' },
  { src: hamalRed, className: 'gallery__item--square' },

  { src: michshor, className: 'gallery__item--square' },

  { src: effecNFC, className: 'gallery__item--wide' },
  { src: dogAbilityYellow, className: 'gallery__item--square' },
  { src: dogAbilityRed, className: 'gallery__item--square' },

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
