import {useEffect, React} from 'react';
import './Unavigate.css'; // CSS file for styling
import project_logo from './Images/navigate_logo.png'; // Unavigate logo
import projectScreenshot from './Images/projectScreenshot.jpg'; // Screenshot of the project
import SkillCard from '../components/Skills'; // SkillCard component
import TextCard from '../components/TextCardProject'; // AboutCard component
import Carousel from '../components/Carousel'; // Carousel component
import linkIcon from '../General_Images/link.png';
import YearCreated from '../components/YearCreated';
import ProjectHeader from '../components/ProjectHeader';
import GithubLink from '../components/Github';
import VideoCard from '../components/VideoCard';
import ProjectFeatures from '../components/ProjectFeatures';
import image1 from './Images/ca1.png';
import image2 from './Images/ca2.jpg';
import image3 from './Images/ca3.png';


function Unavigate() {

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
    title: 'Campus Navigation App',
    description: 'Real-time campus navigation app for Reichman University',
    logo: project_logo,
    screenshot: projectScreenshot,
  }

  const ProjectSkills = [
    { name: 'TypeScript', percent: 56.6 },
    { name: 'CSS', percent: 32.3 },
    { name: 'Python', percent: 7.9 },
    { name: 'HTML', percent: 2.3 },
    { name: 'JavaScript', percent: 0.9 }
  ];  
  
  const ProjectSkillsList = [
    { name: 'Ionic React'},
    { name: 'Mapbox API'},
    { name: 'OpenStreetMap' },
    { name: 'Whoosh Search Engine' },
    { name: 'Firebase' },
    { name: 'Google Analytics' },
  ];
  

  const featuresList = [
    { description: 'Campus-specific navigation exclusively for the Reichman University campus, ensuring focused and accurate routes.' },
    { description: 'Bilingual interface, allowing seamless switching between Hebrew and English for all elements.' },
    { description: 'Dynamic search capabilities, including Hebrew support and campus-centric results powered by the Whoosh engine.' },
    { description: 'Enhanced map features with route visualization, travel time estimates, and alerts for users leaving campus boundaries.' },
    { description: 'User-centric interface with responsive design, intuitive filters, and a user-friendly autofill search bar.' },
    { description: 'Custom backend built with Python and FastAPI, ensuring fast and reliable API handling.' },
    { description: 'OpenStreetMap integration for real-time updates reflecting campus changes.' },
    { description: 'Advanced filtering options to help users locate campus amenities like coffee spots, microwaves, and water refill stations.' },
    { description: 'Google Analytics integration via Firebase for tracking app usage and improving the user experience.' }
  ];
  
  const yearCreated =  '2023' ;

  const githubLink = 'https://github.com/bar-efrima/UNavigate/tree/main';

  const UnavigateDescription ={
    title: 'About the Project', 
  };


  const videoLink = 'https://www.youtube.com/embed/h7GF-v64Uvg?si=KywZsmI2UCkaMSiw';

  return (
   
    
  <div className="Unavigate">

    <ProjectHeader title={ProjectInfo.title} description={ProjectInfo.description} logo={ProjectInfo.logo} screenshot={ProjectInfo.screenshot} />
    <TextCard projectDescription={UnavigateDescription}> 
      <p> Unavigate is a navigation app specifically designed for Reichman University, providing accurate and
        user-friendly guidance throughout the campus. Developed with Ionic React and integrated with the Mapbox API, 
        the app offers bilingual support in both Hebrew and English, allowing seamless switching between languages.🧭🗺️
      </p> <br/>
      <p> 
      Unavigate features dynamic search capabilities with Hebrew recognition, accurate route visualizations, 
      and travel time estimates. It also includes custom filters for locating campus amenities and provides alerts 
      for users venturing beyond campus boundaries. 
      The backend, built using Python and FastAPI, ensures fast and reliable API handling, while OpenStreetMap 
       integration keeps campus maps updated in real-time.🚶‍♂️</p><br/>
        <p> 
        Created in collaboration with a friend, we are currently in discussions with the Dean of Computer Science 
        to make Unavigate the official campus navigation app 🏆
        </p>

    </TextCard>
    <div className="Unavigate-info">

      <div className="Unavigate-left">
        <SkillCard skills={ProjectSkills} skillsList={ProjectSkillsList} />
      </div>

      <div className="Unavigate-right">
        <YearCreated year={yearCreated} />
        <GithubLink link={githubLink} linkIcon={linkIcon}/>
      </div>

    </div>
    <Carousel images={carouselImages} />
 <ProjectFeatures features={featuresList} />


  <VideoCard videoLink={videoLink} />
    </div>
  );
}

export default Unavigate;
