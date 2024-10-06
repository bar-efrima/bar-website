import './Projects.css';
import React, { useEffect, useRef } from 'react';
import amazon from '../assets/projects/ama.png';
import navigation from '../assets/projects/navi.png';
import kitchef from '../assets/projects/Kitchef.jpg';
import musical from '../assets/projects/musical2.jpg';
// import weatherbox from '../assets/projects/Weather-Box.jpg';
import gamehighlights from '../assets/projects/game.png';
// import bubbletrouble from '../assets/projects/BubbleTrouble.jpg';
import royalcats from '../assets/projects/Royal-cats.jpg';
import weatherWizard from '../assets/projects/Weather-Wizard.png';
import caimbridge from '../assets/projects/caimbrige.jpg';
// import stars from '../assets/videos/stars.webm';
import { Link } from 'react-router-dom';

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
    title: 'Navigation App',
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
    title: 'Blockchain Research',
    image: caimbridge,
    type: 'Caimbridge Research UK',
    description: 'FastAPI web app that displays item prices from multiple Amazon websites...',
    github: 'https://github.com/bar-efrima/Amazon-Product-Search',
    youtube: 'https://youtu.be/kTHfsLwlMJY',
  },
  {
    title: 'IoT Inventions',
    image: musical,
    type: 'Arduino C++ Projects',
    description: 'The musical spray, Emulating keyboard with fruits, The weather box, Kitchef ',
    github: 'https://github.com/bar-efrima/The-Musical-Spray',
    youtube: 'https://youtu.be/cg78-Zcp89s',
  },
  {
    title: 'WeatherWizard App',
    image: weatherWizard,
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
  // {
  //   title: 'Gaming With Fruits',
  //   image: bubbletrouble,
  //   type: 'CPX Arduino Project',
  //   description: 'Playing "Bubble Trouble" with fruits as the keyboard...',
  //   github: 'https://github.com/bar-efrima/Emulating-Bubble-Trouble-With-Fruits',
  //   youtube: 'https://youtu.be/XRUjBdCev2o',
  // },
  {
    title: 'Royal Cats NFT',
    image: royalcats,
    type: 'Blockchain Project',
    description: 'Founder and Owner of "Royal Cats NFT" blockchain project...',
    discord: 'https://discord.gg/SezePJFhtQ',
    twitter: 'https://twitter.com/RoyalCats_NFT',
    website: 'https://www.royalcatsnft.art/',
  },
  // {
  //   title: 'The Weather Box',
  //   image: weatherbox,
  //   type: 'Arduino C++ Project',
  //   description: 'A device that retrieves current weather conditions using a weather API...',
  //   github: 'https://github.com/bar-efrima/The-Weather-Box',
  //   youtube: 'https://youtu.be/788kr_7DwH4',
  // },
];

function Projects() {
  const projectsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.05 } // Trigger when 10% of the element is visible
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);

  return (
    <section className="projects">
      <a name="projectsTag"></a>
      <div className="projects-grid" ref={projectsRef}>
        {projects.map((project, index) => (
          <div className="project-item amazon-item" key={index}>
            <div className="project-content">
              <div className="project-image-wrapper">
                {project.title === 'Kitchef' ? (
                  <Link to="/Kitchef">
                    <img src={project.image} alt={project.title} className="project-image" />
                  </Link>
                ) : project.title === 'Amazon Scraper' ? (
                  <Link to="/amazon">
                    <img src={project.image} alt={project.title} className="project-image" />
                  </Link>
                ) : (
                  <img src={project.image} alt={project.title} className="project-image" />
                )}
              </div>
              <div className="project-title-box">
                <h5 className="project-type">{project.type}</h5>
                <hr />
                <h3 className="project-title">{project.title}</h3>
                <h6 className="project-desc">{project.description}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


export default Projects;
