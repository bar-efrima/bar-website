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
      <div class="tech-stack">
  <div class="body">
    <div class="skill">
      <div class="skill-name">HTML</div>
      <div class="skill-level">
        <div class="skill-percent" style={{ width: "90%" }}></div>
      </div>
      <div class="skill-percent-number">90%</div>
    </div>
    <div class="skill">
      <div class="skill-name">CSS</div>
      <div class="skill-level">
        <div class="skill-percent" style={{ width: "80%" }}></div>
      </div>
      <div class="skill-percent-number">80%</div>
    </div>
    <div class="skill">
      <div class="skill-name">JavaScript</div>
      <div class="skill-level">
        <div class="skill-percent" style={{ width: "75%" }}></div>
      </div>
      <div class="skill-percent-number">75%</div>
    </div>
  </div>

  <hr id="skills-line"/>
    <div class="other">
  <ul>
    <li>BeautifulSoup</li>
    <li>SQLite3</li>
    <li>FastApi</li>
    <li>Midjourney</li>
    <li>Photoshop</li>
  </ul>
  </div>
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
