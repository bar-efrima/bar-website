import {useEffect, React} from 'react';
import './NFT.css'; // CSS file for styling
import project_logo from './Images/NFT_logo.png'; // NFT logo
import projectScreenshot from './Images/projectScreenshot.jpg'; // Screenshot of the project
import SkillCard from '../components/Skills'; // SkillCard component
import TextCard from '../components/TextCardProject'; // AboutCard component
import Carousel from '../components/Carousel'; // Carousel component
import linkIcon from '../General_Images/link.png';
import ProjectHeader from '../components/ProjectHeader';
import ProjectFeatures from '../components/ProjectFeatures';
import image1 from './Images/ca1.gif';
import image2 from './Images/ca2.jpg';
import VideoCard from '../components/VideoCard';
import Banner from '../components/Banner';
import bannergif from './Images/banner.webp';
import ImageSlider from '../components/ImageSlider';
import ImageCard from '../components/ImageCard';
import Scroll from './Images/scroll.png';
import bannerimg from './Images/banner2.png';

const sliderImages = [
  require('../NFT_Page/Images/Slider/1.jpg'),
  require('../NFT_Page/Images/Slider/2.jpg'),
  require('../NFT_Page/Images/Slider/3.jpg'),
  require('../NFT_Page/Images/Slider/4.jpg'),
  require('../NFT_Page/Images/Slider/5.jpg'),
  require('../NFT_Page/Images/Slider/6.jpg'),
  require('../NFT_Page/Images/Slider/7.jpg'),
  require('../NFT_Page/Images/Slider/8.jpg'),
  require('../NFT_Page/Images/Slider/9.jpg'),
  require('../NFT_Page/Images/Slider/10.jpg'),
  require('../NFT_Page/Images/Slider/11.jpg'),
  require('../NFT_Page/Images/Slider/12.jpg'),
  require('../NFT_Page/Images/Slider/13.jpg'),
  require('../NFT_Page/Images/Slider/14.jpg'),
  // require('../NFT_Page/Images/Slider/15.jpg'),
];

function NFT() {

   // Use useEffect to pop to the top when the component is mounted
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // Make sure the scroll happens instantly
    });
  }, []); 

  const carouselImages = [
    image1,
    image2,
  ];

  const ProjectInfo = {
    title: 'Royal Cats NFT',
    description: 'Ethereum-based NFT project',
    logo: project_logo,
    screenshot: projectScreenshot,
  }

  const ProjectSkills = [
    { name: 'Solidity', percent: 70.0 },
    { name: 'Python', percent: 30.0 },
];

const ProjectSkillsList = [
  { name: 'ERC-721 Contract' },
  { name: 'UI/UX Design' },
  { name: 'Web Design' },
  { name: 'Hand Drawing' },
  { name: 'Photoshop' },
  { name: 'Illustrator' },
  { name: 'After Effects' },
  { name: 'Team Management ' },
  { name: 'ProCreate' },
  { name: 'Discord & Twitter Community' },
  { name: 'Influencers Collaborations' },
];
  
const featuresList = [
  { description: 'Deployed a custom ERC-721 contract on Ethereum to mint 10,000 unique NFTs.' },
  { description: 'Hand-drew 200 traits using Python to generate the Royal Cats NFTs.' },
  { description: 'Designed and developed the project website, taking charge of all UI/UX design.' },
  { description: 'Led a global team, including a Developer & Architect, Social Manager, Community Manager, and Community Advisor.' },
  { description: 'Built a thriving Discord community of over 7,000 members and a Twitter following of over 8,000.' },
  { description: 'Collaborated with influencers and integrated custom Discord bots and games to engage the community.' },
  { description: 'Minted 1,770 NFTs with over 265 unique owners, aiming to raise funds and awareness for animal welfare.' },
  { description: 'While fundraising goals were not fully achieved, the project successfully raised awareness for stray animals.' }
];


  const NFTDescription ={
    title: 'About the Project', 
  };

  const youtubeLink = 'https://www.youtube.com/embed/B7kZ8gUAdIA?si=-zjpdNBJlaOv94yU';

  return (
   
    
  <div className="NFT">
    
    <ProjectHeader title={ProjectInfo.title} description={ProjectInfo.description} logo={ProjectInfo.logo} screenshot={ProjectInfo.screenshot} />

    <TextCard projectDescription={NFTDescription}> 
    <p> Royal Cats NFT is an Ethereum-based blockchain project, where I served as the founder, project manager, and designer. 
   Alongside my talented team—including a Developer & Architect, Social Manager, Community Manager, and Community Advisor— 
   I led the effort to create and manage the project. 
</p> <br/> 
<p> 
   Working closely with the lead developer, we deployed the ERC-721 smart contract to mint 10,000 unique Royal Cats NFTs. 
   I personally contributed by hand-drawing 200 traits using Python to generate the NFTs. In addition, I designed the entire 
   project website and handled all UI/UX design, ensuring a smooth and engaging user experience. 
</p> <br/> 
<p> 
   As the project manager, I ensured seamless collaboration between the development, art, and community teams. 
   Together, we built a strong community, growing our Discord to over 7,000 members and Twitter to 8,000 followers. 
   My team and I worked with influencers, organized giveaways, integrated custom Discord bots and games, and managed 
   community events to keep engagement high. 
</p> <br/> 
<p> 
  The primary goal of Royal Cats NFT was to leverage blockchain technology not only to create and sell unique digital art but also 
   to support animal welfare. While we minted over 1,770 NFTs and attracted more than 265 unique owners, we were not able to 
   raise enough funds to make significant donations to animal charities. However, raising awareness and aiming for future 
   support of stray animals remained the driving force behind the project. 
</p>

    </TextCard>
    <Banner image={bannergif} />
    <div className="NFT-info">

      <div className="NFT-left">
        <SkillCard skills={ProjectSkills} skillsList={ProjectSkillsList} />
      </div>

      <div className="NFT-right">
        <div class="links">
                <p><a href="https://royalcatssite.webflow.io/">🌐 Website <span><img src={linkIcon} alt="Link Icon" /></span></a></p>
                <p><a href="https://etherscan.io/address/0x7d79ba6848c0f6533459b4e27fc5b59403a053c9">Contract <span><img src={linkIcon} alt="Link Icon"/></span></a></p>
                <p><a href="https://discord.gg/SezePJFhtQ">Discord Channel <span><img src={linkIcon} alt={"Link Icon"}/></span></a></p>
                <p><a href="https://twitter.com/RoyalCats_NFT">Twitter <span><img src={linkIcon} alt="Link Icon"/></span></a></p>
            </div>
      </div>

    </div>

    <ImageSlider images={sliderImages} />

    <ProjectFeatures features={featuresList} />

    <Carousel images={carouselImages} />
    <Banner image={bannerimg} />
    <ImageCard image={Scroll} />
    
    <VideoCard videoLink={youtubeLink} />
  </div>
  );
}

export default NFT;
