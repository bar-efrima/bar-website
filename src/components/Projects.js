import './Projects.css';
import React, { useEffect, useRef } from 'react';
import amazon from '../assets/projects/ama.png';
import navigation from '../assets/projects/navi.png';
import kitchef from '../assets/projects/Kitchef.jpg';
import musical from '../assets/projects/iot-projects.jpg';
import gamehighlights from '../assets/projects/game.png';
import royalcats from '../assets/projects/Royal-cats.jpg';
import mobileApps from '../assets/projects/mobile.png';
import caimbridge from '../assets/projects/pokadex.png';
// import GraphicDesign from '../pages/GraphicDesign_Page/GraphicDesign_Page';
import { Link } from 'react-router-dom';

// Projects data array

const projects = [
  {
    title: 'Amazon Scraper',
    image: amazon,
    type: 'FastAPI Web App',
    description: 'A FastAPI web app that scrapes and displays item prices from multiple Amazon websites.',
  },
  {
    title: 'Navigation App',
    image: navigation,
    type: 'Ionic React Cross-Platform App',
    description: 'A cross-platform app helping users at Reichman University easily navigate to places.',
  },
  {
    title: 'Kitchef',
    image: kitchef,
    type: 'IoT Prototype & Reasearch',
    description: 'An IoT prototype developed for HCI research, integrating wearable tech and smart objects for collaborative cooking.',
  },
  {
    title: 'Pokémon Pokédex',
    image: caimbridge,
    type: 'React Web App',
    description: 'An Pokédex web app using the Pokémon API, displaying a list of all Pokémon with options to view details, catch, and save them.',
  },
  {
    title: 'Highlights Creator',
    image: gamehighlights,
    type: 'Speech To Text Python Web App',
    description: 'A sports highlights extractor, implementing speech recognition to analyze audio and key moments from sports game videos.',
    github: 'https://github.com/bar-efrima/Highlights-Creator/tree/main',
    youtube: 'https://youtu.be/dU6XqPEafqA',
  },
  {
    title: 'Royal Cats NFT',
    image: royalcats,
    type: 'Blockchain Project',
    description: 'Founder of "Royal Cats NFT" blockchain project, where I programmed an ERC-721 contract, created 10k NFTs, and built a community of 8K+',
  },
  {
    title: 'IoT Inventions',
    image: musical,
    type: 'Arduino C++ Projects',
    description: 'Developed Arduino-based projects such as interactive sound instrument, weather-based light display and fruits as game controllers. ',
  },
  {
    title: 'Mobile Apps',
    image: mobileApps,
    type: 'Mobile App Projects',
    description: 'Developed "Fruit Info App" for sorting fruit data and "Weather Wizard" for real-time weather with custom UI animations.',
  },
  {
    title: 'Graphic Designs',
    image: mobileApps,
    type: 'Graphic Design Projects',
    description: 'Designed various graphic projects such as logos, posters, cards, and digital art.',
  }
  
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
    <section className="projects" id = "projectsTag">

      <h2>MY PROJECTS</h2>
      <div className="projects-grid" ref={projectsRef}>
        {projects.map((project, index) => (
          <div className="project-item amazon-item" key={index}>
            <div className="project-content">
              <div className="project-image-wrapper">
                {project.title === 'Kitchef' ? (
                  <Link to="/Kitchef" className="project-img-link">
                    <img src={project.image} alt={project.title} className="project-image" />
                  </Link>
                ) : project.title === 'Amazon Scraper' ? (
                  <Link to="/amazon" className="project-img-link">
                    <img src={project.image} alt={project.title} className="project-image" />
                  </Link>
                ) : project.title === 'Navigation App'? (
                  <Link to="/Unavigate" className="project-img-link">
                    <img src={project.image} alt={project.title} className="project-image" />
                  </Link>
                ) : project.title === 'Pokémon Pokédex'? (
                <Link to="/Pokemon" className="project-img-link">
                  <img src={project.image} alt={project.title} className="project-image" />
                </Link>
              ) 
               : project.title === 'Highlights Creator'? (
                <Link to="/Highlights" className="project-img-link">
                  <img src={project.image} alt={project.title} className="project-image" />
                </Link>
              ) : project.title === 'Royal Cats NFT'? (
                <Link to="/NFT" className="project-img-link">
                  <img src={project.image} alt={project.title} className="project-image" />
                </Link>
              ) : project.title === 'IoT Inventions'? (
              <Link to="/IoT" className="project-img-link">
                <img src={project.image} alt={project.title} className="project-image" />
              </Link>
              ) : project.title === 'Mobile Apps'? (
                <Link to="/Applications" className="project-img-link">
                  <img src={project.image} alt={project.title} className="project-image" />
                </Link>
              ) : project.title === 'Graphic Designs'? (
                <Link to="/GraphicDesign" className="project-img-link">
                  <img src={project.image} alt={project.title} className="project-image" />
                </Link>
              ) 
               : (
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
