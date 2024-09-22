import React, { useState } from 'react';
import './Projects.css';
import gihublogo from '../assets/logos/github.png';
import youtubelogo from '../assets/logos/youtube.png';
import discordlogo from '../assets/logos/discordlogo.png';
import twitterlogo from '../assets/logos/twitter logo.png';
import royalcatslogo from '../assets/logos/royalcats.logo.png';
import amazon from '../assets/projects/Amazon.jpg';
import navigation from '../assets/projects/navigation.jpg';
import kitchef from '../assets/projects/Kitchef.jpg';
import musical from '../assets/projects/musical.jpg';
import weatherbox from '../assets/projects/Weather-box.jpg';
import gamehighlights from '../assets/projects/GameHighlights.jpg';
import bubbletrouble from '../assets/projects/BubbleTrouble.jpg';
import royalcats from '../assets/projects/Royal-cats.jpg';
import weatherwizard from '../assets/projects/WeatherWizard.jpg';

// Projects data array
const projects = [
  {
    title: 'Amazon Scraper',
    image: amazon,
    type: 'FastAPI Web App',
    description: 'FastAPI web app that displays item prices from multiple Amazon websites...',
    github: 'https://github.com/bar-efrima/Amazon-Product-Search',
    youtube: 'https://youtu.be/kTHfsLwlMJY',
  },
  {
    title: 'Unavigate',
    image: navigation,
    type: 'Ionic React App',
    description: 'Created a cross-platform app for Reichman University using Ionic React...',
    github: 'https://github.com/bar-efrima/Unavigate',
    youtube: 'https://youtu.be/-sBSDOqAaPk',
  },
  {
    title: 'Kitchef',
    image: kitchef,
    type: 'IoT Prototype Project',
    description: 'Kitchef is an IoT prototype project...',
    github: 'https://github.com/bar-efrima/Kitchef',
    youtube: 'https://milabgroup42022.wixsite.com/kitchef',
  },
  {
    title: 'The Musical Spray',
    image: musical,
    type: 'Arduino C++ Project',
    description: 'Arduino-based C++ touch instrument...',
    github: 'https://github.com/bar-efrima/The-Musical-Spray',
    youtube: 'https://youtu.be/cg78-Zcp89s',
  },
  {
    title: 'WeatherWizard App',
    image: weatherwizard,
    type: 'Ionic React App',
    description: 'Cross-platform weather app using React Ionic...',
    github: 'https://github.com/bar-efrima/WeatherWizard-App',
    youtube: 'https://youtu.be/PVBT4ktRmHY',
  },
  {
    title: 'Highlights Maker',
    image: gamehighlights,
    type: 'Python Project',
    description: 'A Python program that extracts important moments from sports games...',
    github: 'https://github.com/bar-efrima/Highlights-Creator/tree/main',
    youtube: 'https://youtu.be/dU6XqPEafqA',
  },
  {
    title: 'Gaming With Fruits',
    image: bubbletrouble,
    type: 'CPX Arduino Project',
    description: 'Playing "Bubble Trouble" with fruits as the keyboard...',
    github: 'https://github.com/bar-efrima/Emulating-Bubble-Trouble-With-Fruits',
    youtube: 'https://youtu.be/XRUjBdCev2o',
  },
  {
    title: 'Royal Cats NFT',
    image: royalcats,
    type: 'Blockchain Project',
    description: 'Founder and Owner of "Royal Cats NFT" blockchain project...',
    discord: 'https://discord.gg/SezePJFhtQ',
    twitter: 'https://twitter.com/RoyalCats_NFT',
    website: 'https://www.royalcatsnft.art/',
  },
  {
    title: 'The Weather Box',
    image: weatherbox,
    type: 'Arduino C++ Project',
    description: 'A device that retrieves current weather conditions using a weather API...',
    github: 'https://github.com/bar-efrima/The-Weather-Box',
    youtube: 'https://youtu.be/788kr_7DwH4',
  },
];

function Projects() {
  return (
    <section className="projects">
      <a name="projectsTag">
        <h2 className="projects-header">PROJECTS</h2>
      </a>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-item" key={index}>
            <div className="project-content">
              <img src={project.image} alt={project.title} className="project-image" />
              {/* Semi-transparent box with project title */}
              <div className="project-title-box">
              <h5 className="project-type">{project.type}</h5>
              <hr/>
              <h3 className="project-title">{project.title}</h3>
                <h6 className="project-description">{project.description}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
