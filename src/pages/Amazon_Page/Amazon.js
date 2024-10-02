import React from 'react';
import './amazon.css'; // CSS file for styling
import amazonLogo from './Images/amazon_logo.png'; // Amazon logo
import projectScreenshot from './Images/projectScreenshot.jpg'; // Screenshot of the project
import SkillCard from '../components/Skills'; // SkillCard component
import AboutCard from '../components/AboutProject'; // AboutCard component
import Carousel from '../components/Carousel'; // Carousel component
import linkIcon from '../General_Images/link.png';


function Amazon() {

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

  const AmazonDescription = `The Amazon Scraper is a web-based application 
  that allows users to scrape product prices and details from multiple Amazon 
  regions (US, UK, DE, CA) in real-time. It uses FastAPI as the backend framework, 
  aiohttp for asynchronous HTTP requests, and BeautifulSoup for scraping. 
  The app also features real-time currency conversion for accurate price 
  comparisons across different regions. The project is designed to offer users 
  the ability to retrieve product information efficiently, with asynchronous operations 
  ensuring quick responses from multiple regions.`;
  return (
   
    
    <div>
      {/* Header Section */}
      <header>
        <div className="header-container">
          <img src={amazonLogo} alt="Amazon Scraper Logo" />
          <div className="text-container">
            <h1>Amazon Scraper</h1>
            <p>FastAPI-powered multi-region Amazon price scraping tool</p>
          </div>
        </div>
      </header>

      {/* Project Showcase Section */}
      <div className="project-showcase">
        <img src={projectScreenshot} alt="Amazon Scraper Project Screenshot" />
      </div>
  
     <div className="amazon-info">
  <div className="amazon-left">
    <SkillCard skills={amazonSkills} skillsList={amazonSkillsList} />
    
    </div>
    <div className="amazon-right">
      <div className="year-created">
      <h3>Created</h3>
        <hr />
        <p>2022</p>
      </div>
      <div className="github">
        <p><a href="https://github.com/bar-efrima/Amazon-Product-Search" target="_blank" rel="noopener noreferrer">GitHub Repository</a><img src={linkIcon} alt="Link Icon" /></p>
      </div>
    </div>
  </div>

  <AboutCard description={AmazonDescription} />

   <Carousel />


      {/* Features Section */}
      <section className="project-description">
        <h3>Project Features</h3>
        <hr />
        <ul>
          <li>Real-time product scraping from multiple Amazon regions (US, UK, DE, CA).</li>
          <li>Asynchronous HTTP requests for efficient multi-site scraping using aiohttp.</li>
          <li>BeautifulSoup for parsing HTML and extracting data like product prices, images, and ratings.</li>
          <li>Real-time currency conversion with forex-python.</li>
          <li>Stores past search data and allows users to review previous searches.</li>
        </ul>
      </section>

      {/* Video Demonstration Section */}
      <div className="video-container">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/kTHfsLwlMJY?si=sgDaJnytJMaJ5aoI"
      title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
      gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
      </iframe>
      </div>
    </div>
  );
}

export default Amazon;
