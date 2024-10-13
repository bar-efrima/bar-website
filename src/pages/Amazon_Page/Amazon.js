import {useEffect, React} from 'react';
import './amazon.css'; // CSS file for styling
import project_logo from './Images/amazon_logo.png'; // Amazon logo
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
import image2 from './Images/ca2.png';

function Amazon() {

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
    title: 'Amazon Scraper',
    description: 'Multi-region Amazon price scraping tool',
    logo: project_logo,
    screenshot: projectScreenshot,
  }

  const projectSkills = [
    { name: 'HTML', percent: 7.6 },
    { name: 'CSS', percent: 13.5 },
    { name: 'JavaScript', percent: 35.9 },
    { name: 'Python', percent: 43 },
  ];

  const projectSkillsList = [
    { name: 'SQLite3' },
    { name: 'BeautifulSoup' },
    { name: 'FastApi' },
    { name: 'Photoshop' },
  ];

  const featuresList = [
    { description: 'Users can search Amazon.com for items, displaying the top 10 results with names and images.' },
    { description: 'View prices of selected items from various Amazon sites in USD, with clickable links to product pages.' },
    { description: 'Users can access a list of their past searches.' },
    {  description: 'Scrapes multiple Amazon sites simultaneously to minimize wait times.' },
    {  description: 'Stores past searches and shared user data in a local SQLite database.' },
    {  description: 'Limits users to 10 searches per day, with a prompt to upgrade for more searches.' }
  ];
  
  const yearCreated =  '2022' ;

  const githubLink = 'https://github.com/bar-efrima/Amazon-Product-Search';

  const amazonDescription ={
    title: 'About the Project', 
  };


  const videoLink = 'https://www.youtube.com/embed/kTHfsLwlMJY?si=sgDaJnytJMaJ5aoI';

  return (
   
    
  <div className="amazon">

    <ProjectHeader title={ProjectInfo.title} description={ProjectInfo.description} logo={ProjectInfo.logo} screenshot={ProjectInfo.screenshot} />
    <TextCard projectDescription={amazonDescription}> 
      <p> The Amazon Scraper project is a web application designed to display item prices from various Amazon websites,
      providing users with a simple and efficient way to compare prices across regions. </p>
      <br/>
      <p>
      Built using Python and the FastAPI framework for the backend, and plain HTML, 
      JavaScript, and the fetch API for the frontend, this project showcases the ability
      to scrape data in real time and present it in a user-friendly format. 
      The project uses a local SQLite database to store user search data, 
      ensuring fast access to past searches. </p> 
      <br/>
      <p>It is important to note that this 
      project was created for educational purposes, adhering to ethical guidelines and terms of service for web scraping.</p>
    </TextCard>
    <div className="amazon-info">

      <div className="amazon-left">
        <SkillCard skills={projectSkills} skillsList={projectSkillsList} />
      </div>

      <div className="amazon-right">
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

export default Amazon;
 