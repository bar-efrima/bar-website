import {useEffect, React} from 'react';
import './Pokemon.css'; // CSS file for styling
import project_logo from './Images/pokemon_logo.jpg'; // Pokemon logo
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
import Banner from '../components/Banner';
import bannerImage from './Images/banner_Image.png';


function Pokemon() {

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
    title: 'Pokémon Pokédex',
    description: 'A React Pokédex app to explore, catch, and save Pokémon.',
    logo: project_logo,
    screenshot: projectScreenshot,
  }

  const ProjectSkills = [
    { name: 'JavaScript', percent: 69 },
    { name: 'CSS', percent: 29.6 },
    { name: 'HTML', percent: 1.4 },
    
  ];
  
  const ProjectSkillsList = [
    { name: 'Local Storage' },
    { name: 'Pokémon API' },
    { name: 'Vite' },
    { name: 'React', percent: 50 },
    { name: 'Axios', percent: 20 },
  ];
  

  const featuresList = [
    { description: 'Displays a list of Pokémon in a card format with images and basic information.' },
    { description: 'Clicking on a Pokémon card shows detailed information about the selected Pokémon.' },
    { description: 'Interactive "Catch" button with a random chance mechanism to catch Pokémon.' },
    { description: 'Stores caught Pokémon in devTools local storage for easy access and display in the sidebar.' },
    { description: 'Limits users to 10 catch attempts per day, with an alert if the limit is exceeded.' },
    { description: 'Supports pagination for navigating through the Pokémon list.' },
    { description: 'Animated catching process to enhance user experience.' },
    { description: 'Allows users to remove Pokémon from the caught list.' },
    { description: 'Client-side filtering to search caught Pokémon by name.' }
  ];  
  
  const yearCreated =  '2024' ;

  const githubLink = 'https://github.com/bar-efrima/Pokemon/tree/main';

  const PokemonDescription ={
    title: 'About the Project', 
  };


  return (
   
    
  <div className="Pokemon">
    
    <ProjectHeader title={ProjectInfo.title} description={ProjectInfo.description} logo={ProjectInfo.logo} screenshot={ProjectInfo.screenshot} />

    <TextCard projectDescription={PokemonDescription}> 
      <p> This Pokédex web application, built using React and the Pokémon API, allows users to explore a 
        list of all Pokémon, view detailed information, and attempt to catch and save their favorite Pokémon.
        With an intuitive interface and engaging features like a daily catch limit and a sidebar showing caught Pokémon,
        the app offers a fun and interactive experience for Pokémon enthusiasts.
        </p> 
    </TextCard>
   
    <div className="Pokemon-info">

      <div className="Pokemon-left">
        <SkillCard skills={ProjectSkills} skillsList={ProjectSkillsList} />
      </div>

      <div className="Pokemon-right">
        <YearCreated year={yearCreated} />
        <GithubLink link={githubLink} linkIcon={linkIcon}/>
      </div>

    </div>

    <Banner image={bannerImage} />

    <ProjectFeatures features={featuresList} />

    <Carousel images={carouselImages} />

  </div>
  );
}

export default Pokemon;
