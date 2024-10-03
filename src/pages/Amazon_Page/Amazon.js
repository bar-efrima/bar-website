import {useEffect, React} from 'react';
import './amazon.css'; // CSS file for styling
import amazonLogo from './Images/amazon_logo.png'; // Amazon logo
import projectScreenshot from './Images/projectScreenshot.jpg'; // Screenshot of the project
import SkillCard from '../components/Skills'; // SkillCard component
import TextCard from '../components/TextCardProject'; // AboutCard component
import Carousel from '../components/Carousel'; // Carousel component
import linkIcon from '../General_Images/link.png';
import YearCreated from '../components/YearCreated';
import ProjectHeader from '../components/ProjectHeader';
import GithubLink from '../components/Github';
import VideoCard from '../components/VideoCard';


function Amazon() {

   // Use useEffect to pop to the top when the component is mounted
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // Make sure the scroll happens instantly
    });
  }, []); 

  const amazonHeader = {
    title: 'Amazon Scraper',
    description: 'Multi-region Amazon price scraping tool',
    logo: amazonLogo,
    screenshot: projectScreenshot,
  }

  const amazonSkills = [
    { name: 'HTML', percent: 7.6 },
    { name: 'CSS', percent: 13.5 },
    { name: 'JavaScript', percent: 35.9 },
    { name: 'Python', percent: 43 },
  ];

  const amazonSkillsList = [
    { name: 'SQLite3' },
    { name: 'BeautifulSoup' },
    { name: 'FastApi' },
    { name: 'Photoshop' },
  ];
  
  const yearCreated =  '2022' ;

  const githubLink = 'https://github.com/bar-efrima/Amazon-Product-Search';

  const amazonDescription ={
    title: 'About the Project', 
    description: `The Amazon Scraper is a web-based application 
    that allows users to scrape product prices and details from multiple Amazon 
    regions (US, UK, DE, CA) in real-time. It uses FastAPI as the backend framework, 
    aiohttp for asynchronous HTTP requests, and BeautifulSoup for scraping. 
    The app also features real-time currency conversion for accurate price 
    comparisons across different regions. The project is designed to offer users 
    the ability to retrieve product information efficiently, with asynchronous operations 
    ensuring quick responses from multiple regions.`
  };

  const amazonFeatures = {
    title: 'Project Features',
    description: 
    `Real-time product scraping from multiple Amazon regions (US, UK, DE, CA).
      Asynchronous HTTP requests for efficient multi-site scraping using aiohttp.
      BeautifulSoup for parsing HTML and extracting data like product prices, images, and ratings.
      Real-time currency conversion with forex-python.
      Stores past search data and allows users to review previous searches.`
  }

  const videoLink = 'https://www.youtube.com/embed/kTHfsLwlMJY?si=sgDaJnytJMaJ5aoI';

  return (
   
    
  <div class="amazon">

    <ProjectHeader title={amazonHeader.title} description={amazonHeader.description} logo={amazonHeader.logo} screenshot={amazonHeader.screenshot} />
    <TextCard projectDescription={amazonDescription} />
    <div className="amazon-info">

      <div className="amazon-left">
        <SkillCard skills={amazonSkills} skillsList={amazonSkillsList} />
      </div>

      <div className="amazon-right">
        <YearCreated year={yearCreated} />
        <GithubLink link={githubLink} linkIcon={linkIcon}/>
      </div>

    </div>

  <TextCard projectDescription={amazonFeatures} />
  <Carousel />
  <VideoCard videoLink={videoLink} />
    </div>
  );
}

export default Amazon;
