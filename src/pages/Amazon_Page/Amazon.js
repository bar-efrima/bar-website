import React from 'react';
import './amazon.css'; // CSS file for styling
import amazonLogo from './Images/amazon_logo.png'; // Amazon logo
import projectScreenshot from './Images/projectScreenshot.jpg'; // Screenshot of the project
import pythonLogo from './Stack/Python.png'; // Tech stack logos
// import javascriptLogo from './Stack/javascript.png';
// import beautifulSoupLogo from './Stack/beautifulSoup.png';
// import fastApiLogo from './Stack/fastapi.png';
// import sqliteLogo from './Stack/sqlite.png';

function Amazon() {
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

     {/* Tech Stack and Project Info */}
          <div className="tech-stack">
            <h2>Tech Stack Used</h2>
            <hr />
            <ul>
              <li className="tech-item">
                <img src={pythonLogo} alt="Python" />
                <div className="tech-info">
                  <h4>Python</h4>
                  <p>Core programming language for backend development.</p>
                </div>
              </li>
              <li className="tech-item">
                {/* <img src={javascriptLogo} alt="JavaScript" /> */}
                <div className="tech-info">
                  <h4>JavaScript</h4>
                  <p>Frontend interaction and dynamic UI updates.</p>
                </div>
              </li>
              <li className="tech-item">
                {/* <img src={fastApiLogo} alt="FastAPI" /> */}
                <div className="tech-info">
                  <h4>FastAPI</h4>
                  <p>Backend framework for building the web application.</p>
                </div>
              </li>
              <li className="tech-item">
                {/* <img src={beautifulSoupLogo} alt="BeautifulSoup" /> */}
                <div className="tech-info">
                  <h4>BeautifulSoup</h4>
                  <p>Library for scraping HTML data from Amazon pages.</p>
                </div>
              </li>
              <li className="tech-item">
                {/* <img src={sqliteLogo} alt="SQLite" /> */}
                <div className="tech-info">
                  <h4>SQLite</h4>
                  <p>Database for storing past searches and pricing results.</p>
                </div>
              </li>
            </ul>
        </div>

      {/* Main Content Container */}
      <div className="content-container">
        {/* About the Project Section */}
        <div className="left-side">
          <div className="about">
            <h3>About the Project</h3>
            <hr />
            <p>
              The Amazon Scraper is a web-based application that allows users to scrape product prices and details from multiple Amazon regions (US, UK, DE, CA) in real-time. It uses FastAPI as the backend framework, aiohttp for asynchronous HTTP requests, and BeautifulSoup for scraping. The app also features real-time currency conversion for accurate price comparisons across different regions. The project is designed to offer users the ability to retrieve product information efficiently, with asynchronous operations ensuring quick responses from multiple regions.
            </p>
          </div>
        </div>


          {/* Created Section */}
          
      </div>
      <div className="content-container">
      <div className="created">
            <h3>Created</h3>
            <hr />
            <p>2023</p>
          </div>

          {/* Links Section */}
          <div className="links">
            <p><a href="https://github.com/yourgithub/amazon-scraper" target="_blank" rel="noopener noreferrer">GitHub Repository</a></p>
          </div>
          </div>
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
        <iframe width="560" height="315" src="https://www.youtube.com/embed/idCBrHXxCg8" 
          title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
          gyroscope; picture-in-picture" allowFullScreen>
        </iframe>
      </div>
    </div>
  );
}

export default Amazon;
