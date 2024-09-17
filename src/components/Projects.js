import React from 'react';
// import './Projects.css';

const projects = [
  {
    title: 'Amazon Scraper',
    image: './assets/projects/Amazon.jpg',
    description: 'FastAPI web app that displays item prices from multiple Amazon websites...',
    github: 'https://github.com/bar-efrima/Amazon-Product-Search',
    youtube: 'https://youtu.be/kTHfsLwlMJY',
  },
  {
    title: 'Unavigate',
    image: './assets/projects/navigation.jpg',
    description: 'Created a cross-platform app for Reichman University using Ionic React...',
    github: 'https://github.com/bar-efrima/Unavigate',
    youtube: 'https://youtu.be/-sBSDOqAaPk',
  },
  // Add more projects here
];

function Projects() {
  return (
    <section className="projects">
      <a name="projectsTag"></a>
      <h2 className="projects-header">PROJECTS</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-item" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="overlay">
              <div className="text-projects">
                <h2 className="title">{project.title}</h2>
                <p className="description">{project.description}</p>
                <div className="logo-overlay">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <img src="./assets/logos/github.png" alt="GitHub" />
                  </a>
                  <a href={project.youtube} target="_blank" rel="noopener noreferrer">
                    <img src="./assets/logos/youtube.png" alt="YouTube" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
