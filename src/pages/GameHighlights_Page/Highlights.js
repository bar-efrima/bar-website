import {useEffect, React} from 'react';
import './Highlights.css'; // CSS file for styling
import project_logo from './Images/highlights_logo.jpg'; // Highlights logo
import projectScreenshot from './Images/projectScreenshot.jpg'; // Screenshot of the project
import SkillCard from '../components/Skills'; // SkillCard component
import TextCard from '../components/TextCardProject'; // AboutCard component
import Carousel from '../components/Carousel'; // Carousel component
import linkIcon from '../General_Images/link.png';
import YearCreated from '../components/YearCreated';
import ProjectHeader from '../components/ProjectHeader';
import GithubLink from '../components/Github';
import ProjectFeatures from '../components/ProjectFeatures';
import image1 from './Images/ca1.gif';
import image2 from './Images/ca2.png';
import VideoCard from '../components/VideoCard';


function Highlights() {

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
    title: 'Highlights Creator',
    description: 'Key moments extractor using audio and speech analysis',
    logo: project_logo,
    screenshot: projectScreenshot,
  }

  const ProjectSkills = [
    { name: 'Python', percent: 100.0 },
  ];
  
  const ProjectSkillsList = [
    { name: 'Audio Processing' },
    { name: 'Speech Recognition' },
    { name: 'GIF Creation' },
    { name: 'Vosk' },
    { name: 'Librosa' },
    { name: 'MoviePy' },
    { name: 'pydub' },
    { name: 'OpenCV Captioning' },
  ];
  
  const featuresList = [
    { description: 'Extracts important moments based on audio volume peaks during exciting moments in a sports game.' },
    { description: 'Uses speech recognition to detect keywords and enhance highlight identification.' },
    { description: 'Generates GIFs of the important moments extracted from the video.' },
    { description: 'Allows customization of keywords to search for exciting moments in the game.' },
    { description: 'Outputs timestamps of all important moments for easy reference.' },
    { description: 'Saves frames from the video at key moments and includes options to add captions.' },
];

  const yearCreated =  '2023' ;

  const githubLink = 'https://github.com/bar-efrima/Highlights-Creator';

  const HighlightsDescription ={
    title: 'About the Project', 
  };

  const youtubeLink = 'https://www.youtube.com/embed/dU6XqPEafqA?si=5soyqLAy5Xv-ZAs6';

  return (
   
    
  <div className="Highlights">
    
    <ProjectHeader title={ProjectInfo.title} description={ProjectInfo.description} logo={ProjectInfo.logo} screenshot={ProjectInfo.screenshot} />

    <TextCard projectDescription={HighlightsDescription}> 
      <p> Highlights Creator processes a game video to extract key moments using 
    audio peaks and speech recognition. By analyzing volume spikes during exciting moments and detecting 
    keywords from the commentary, it identifies significant events in the game. 
    </p><br/><p>
    The program also generates 
    animated GIFs to visually capture these highlights, enhancing the experience for soccer fans. 
    </p>
    </TextCard>
   
    <div className="Highlights-info">

      <div className="Highlights-left">
        <SkillCard skills={ProjectSkills} skillsList={ProjectSkillsList} />
      </div>

      <div className="Highlights-right">
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

export default Highlights;
