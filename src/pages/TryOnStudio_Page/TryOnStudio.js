import {useEffect, React} from 'react';
import './TryOnStudio.css'; // CSS file for styling
import project_logo from './Images/TryOnStudio_logo.jpg'; // TryOnStudio logo
import projectScreenshot from './Images/projectScreenshot.jpg'; // Screenshot of the project
import SkillCard from '../components/Skills'; // SkillCard component
import TextCard from '../components/TextCardProject'; // AboutCard component
import Carousel from '../components/Carousel'; // Carousel component
import linkIcon from '../General_Images/link.png';
import YearCreated from '../components/YearCreated';
import ProjectHeader from '../components/ProjectHeader';
import GithubLink from '../components/Github';
import ProjectFeatures from '../components/ProjectFeatures';
import image1 from './Images/ca2.jpg';
import image2 from './Images/ca1.jpg';


function TryOnStudio() {

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
    title: 'Virtual Try-On Studio',
    description: 'An AI-powered web application for visualizing clothing on different models',
    logo: project_logo, 
    screenshot: projectScreenshot, 
  };

  const ProjectSkills = [
    { name: 'TypeScript', percent: 65 },
    { name: 'CSS', percent: 20 },
    { name: 'JavaScript', percent: 15 },
  ];
  
  const ProjectSkillsList = [
    { name: 'Next.js' },
    { name: 'React' },
    { name: 'Gemini Nano Banana' },
    { name: 'styled-components' },
    { name: 'TypeScript' },
    { name: 'Vercel' },
    { name: 'Radix UI' },
  ];

  const featuresList = [
    { description: '✨ AI-Powered Try-On: Generates photorealistic images using Gemini Nano Banana, showing realistic fit, shadows, and fabric draping.' },
    { description: '🌍 Bilingual Support: Full English and Hebrew interface with automatic RTL (right-to-left) layout switching for Hebrew.' },
    { description: '👤 Flexible Model Selection: Upload custom photos or choose from preset models to see how garments look on different body types.' },
    { description: '👗 Multi-Category Support: Works with tops, bottoms, dresses, outerwear, shoes, and accessories - comprehensive wardrobe coverage.' },
    { description: '💾 Collection History: Automatically saves all generated try-ons with metadata (category, timestamp, descriptions) for easy access and comparison.' },
    { description: '📥 Download & Export: Save generated images directly to your device with detailed naming conventions.' },
    { description: '📱 Responsive Design: Fully optimized interface that works seamlessly on desktop, tablet, and mobile devices.' },
    { description: '🎨 Modern UI/UX: Clean, professional interface built with Radix UI components and styled-components for a polished user experience.' },
  ];
  
  
  const yearCreated =  '2025' ;

  const githubLink = 'https://github.com/bar-efrima/virtual-tryon-studio';

  const liveLink = 'https://virtual-tryon-studio.vercel.app';

  const TryOnStudioDescription ={
    title: 'About the Project', 
  };



  return (
   
    
  <div className="TryOnStudio">
    
    <ProjectHeader title={ProjectInfo.title} description={ProjectInfo.description} logo={ProjectInfo.logo} screenshot={ProjectInfo.screenshot} />

    <TextCard projectDescription={TryOnStudioDescription}> 
      <p> The Virtual Try-On Studio is an AI-powered web application that enables users to visualize how clothing and accessories would look on different models through photorealistic AI-generated images. Users can upload their own photos or choose from preset models, select a garment, and let Google's Gemini Nano model create a realistic composite image showing the model wearing the selected outfit.
        </p>
      <p>Built using Next.js 15 with TypeScript for the frontend and Gemini Nano Banana for intelligent image generation, this project showcases cutting-edge AI capabilities in fashion technology. The application features a fully bilingual interface (English and Hebrew) with RTL layout support, styled-components for modern UI design, and a complete history system to save and revisit previous try-on generations.
        </p>
      <p>The project demonstrates the practical application of generative AI in e-commerce and fashion, providing users with an intuitive tool to preview clothing combinations before making purchase decisions.
        </p> 
    </TextCard>
   
    <div className="TryOnStudio-info">

      <div className="TryOnStudio-left">
        <SkillCard skills={ProjectSkills} skillsList={ProjectSkillsList} />
      </div>

      <div className="TryOnStudio-right">
        <YearCreated year={yearCreated} />
        <GithubLink link={githubLink} linkIcon={linkIcon}/>
        <GithubLink link={liveLink} linkIcon={linkIcon} linkText="Live Demo"/>
      </div>

    </div>

    <ProjectFeatures features={featuresList} />

    <Carousel images={carouselImages} />
  </div>
  );
}

export default TryOnStudio;
