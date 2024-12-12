import {useEffect, React} from 'react';
import './UnrealEngine.css'; // CSS file for styling
import project_logo from './Images/UnrealEngine_logo.jpg'; // UnrealEngine logo
import projectScreenshot from './Images/projectScreenshot.jpg'; // Screenshot of the project
import SkillCard from '../components/Skills'; // SkillCard component
import TextCard from '../components/TextCardProject'; // AboutCard component
import Carousel from '../components/Carousel'; // Carousel component
import linkIcon from '../General_Images/link.png';
import YearCreated from '../components/YearCreated';
import ProjectHeader from '../components/ProjectHeader';
import GithubLink from '../components/Github';
import ProjectFeatures from '../components/ProjectFeatures';
import image1 from './Images/ca2.png';
import image2 from './Images/ca1.png';
import image3 from './Images/ca3.png';
import VideoCard from '../components/VideoCard';


function UnrealEngine() {

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
    image3,
  ];

  const ProjectInfo = {
    title: 'Time-Balloon Visualization',
    description: 'A dynamic visualization of time using synchronized hot air balloons',
    logo: project_logo,
    screenshot: projectScreenshot,
  }

  const ProjectSkills = [
    { name: 'Unreal Engine Blueprints', percent: 100 },
  ];
  
  const ProjectSkillsList = [
    { name: 'Quixel Megascans Library' },
    { name: '3D Assets Integration' },
    { name: '3D Character Scanning' },
    { name: 'Dynamic Lighting' },
    { name: '3D Modeling' },
    { name: 'Animation and Rigging' },
    { name: 'Interactive Simulation Design' },
  ];
  

  const featuresList = [
    { description: '24 hot air balloons represent the 24 hours of a day.' },
    { description: 'Every minute, one of the 59 people boards a balloon until it takes off after 60 minutes.' },
    { description: 'Each balloon ascends to mark the end of an hour, and the process repeats for all 24 balloons.' },
    { description: 'Dynamic sun position and lighting changes synchronize with the current hour.' },
  ];  
  
  const yearCreated =  '2024' ;

  const githubLink = '';

  const UnrealEngineDescription ={
    title: 'About the Project', 
  };

  const youtubeLink = 'https://www.youtube.com/embed/ZzYvz5mrImY?si=OzXyHuzdZ58x5NAj';


  return (
   
    
  <div className="UnrealEngine">
    
    <ProjectHeader title={ProjectInfo.title} description={ProjectInfo.description} logo={ProjectInfo.logo} screenshot={ProjectInfo.screenshot} />

    <TextCard projectDescription={UnrealEngineDescription}> 
      <p> This project visually represents a 24-hour day using 24 hot air balloons. Each balloon corresponds
          to an hour, and every minute is represented by a person boarding the balloon. After 60 minutes, the balloon
          ascends, marking the end of the hour. The process continues for all 24 balloons to simulate a full day. The
          simulation also includes dynamic sun position and lighting changes synchronized with the time, along with
          real-time displays of calculus theorems every second.
        </p> 
    </TextCard>
   
    <div className="UnrealEngine-info">

      <div className="UnrealEngine-left">
        <SkillCard skills={ProjectSkills} skillsList={ProjectSkillsList} />
      </div>

      <div className="UnrealEngine-right">
        <YearCreated year={yearCreated} />
        <GithubLink link={githubLink} linkIcon={linkIcon}/>
      </div>

    </div>

    <ProjectFeatures features={featuresList} />

    <Carousel images={carouselImages} />
    <VideoCard videoLink={youtubeLink} />
  </div>
  );
}

export default UnrealEngine;
