import React from 'react';
import './GraphicDesign.css'; // Import the CSS file
import TextCard from '../components/TextCardProject'; // AboutCard component

// Import your Images
import cat1 from './Images/Cat1.jpg';
import cat2 from './Images/Cat2.jpg';
import banner from '../NFT_Page/Images/ca1.gif'
import basta from './Images/Basta.jpg';
import nftCard from './Images/NFT_Card.jpg';
import celestialCard from './Images/Celestial_Card.jpg';
import customCard from './Images/Custom_Card.jpg';
import dogAbilityYellow from './Images/Dog_Ability_Yellow.png';

import effecNFC from './Images/Effec_NFC3.jpg';
import effectQRCastle from './Images/EffectQR_Castle.jpg';
import hamalGreen from './Images/Hamal_Green.jpg';
import hamalRed from './Images/Hamal_Red.jpg';
import michshor from './Images/Michshor.jpg';
import royalCats from './Images/Royalcats.jpg';
import oketz from './Images/Oketz.png';
import Logo_Mador_White from './Images/Logo_Mador_White.jpg';
import launchDisplay from './Images/Launch_Display.jpg';
import himushLoop from './Images/Himush_Loop.gif';

import pacth1 from './Images/Patch1.jpg';
import pacth2 from './Images/Patch2.jpg';
import effectIllusion from './Images/EffectIllusion.jpg';
import kitchef_Logo from './Images/Kitchef_Logo.jpg';


function GraphicDesign() {

  const graphicTitle = {
    title: 'Graphic Design'
  }

  const images = [

    { src: himushLoop, className: 'gallery__item--wide' },
    { src: oketz, className: 'gallery__item--wide' },


  {src: pacth2, className: 'gallery__item--square'},
  { src: Logo_Mador_White, className: 'gallery__item--square' },
  {src: pacth1, className: 'gallery__item--square'},
  { src: michshor, className: 'gallery__item--square' },
 
  // {src: patches, className: 'gallery__item--wide'},  
  { src: hamalGreen, className: 'gallery__item--square' },
  { src: hamalRed, className: 'gallery__item--square' },
  { src: launchDisplay, className: 'gallery__item--wide' },

  { src: nftCard, className: 'gallery__item--square' },
  { src: celestialCard, className: 'gallery__item--square' },
  { src: customCard, className: 'gallery__item--square' },
  { src: royalCats, className: 'gallery__item--square' },

  { src: cat1, className: 'gallery__item--square' },
  { src: cat2, className: 'gallery__item--square' },
  { src: banner, className: 'gallery__item--wide' },

  { src: basta, className: 'gallery__item--wide' },
  { src: kitchef_Logo, className: 'gallery__item--wide' },

  { src: dogAbilityYellow, className: 'gallery__item--square' },
  { src: effecNFC, className: 'gallery__item--square' },
  { src: effectIllusion, className: 'gallery__item--square' },
  { src: effectQRCastle, className: 'gallery__item--square' },


  ];

  return (
    <div className='graphicDesign'>
      <div className='graphicText'>
      <TextCard projectDescription={graphicTitle}> 
      <p> I have a passion for graphic design and enjoy creating logos, business cards, and other designs. I have experience with Adobe Illustrator and Photoshop. I have created logos for various companies and organizations. I have also designed business cards, posters, and other promotional materials. I enjoy working with clients to create designs that meet their needs and exceed their expectations. I am always looking for new opportunities to expand my skills and create new and exciting designs.
        </p> 
        </TextCard>
        </div>
    
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
