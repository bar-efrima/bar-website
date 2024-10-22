import React from 'react';
import './GraphicDesign.css';
import TextCard from '../components/TextCardProject';

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

  // Use useEffect to pop to the top when the component is mounted
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // Make sure the scroll happens instantly
    });
  }, []); 
  const graphicTitle = {
    title: 'Graphic Design'
  }

  const images = [

    { src: himushLoop, className: 'gallery__item--wide' },
    { src: oketz, className: 'gallery__item--wide' },


  { src: Logo_Mador_White, className: 'gallery__item--square' },
  { src: michshor, className: 'gallery__item--square' },
  { src: hamalGreen, className: 'gallery__item--square' },
  { src: hamalRed, className: 'gallery__item--square' },

  {src: pacth1, className: 'gallery__item--square'},
  {src: pacth2, className: 'gallery__item--square'},
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
      <TextCard projectDescription={graphicTitle} style={{
    filter: `drop-shadow(0 0 20px rgba(193, 15, 158,0.3))
    drop-shadow(0 0 30px rgba(255, 0, 242, 0.1))`
    }}>
      <p> I have extensive experience in graphic design, UI/UX principles, and frontend development. 
        I am skilled with industry-standard tools such as Adobe Creative Suite (Illustrator, Photoshop, 
        After Effects, Premiere), Figma, Adobe Firefly, as well as CAD and 3D modeling software. 
        I have successfully created logos for various companies, including official Army logos, 
        and designed business cards, posters, and promotional materials. </p> 
        </TextCard>
        </div>
    
    <div className="desgin-container">
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
