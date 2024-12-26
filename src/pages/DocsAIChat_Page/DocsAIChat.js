import {useEffect, React} from 'react';
import './DocsAIChat.css'; // CSS file for styling
import project_logo from './Images/DocsAIChat_logo.jpg'; // DocsAIChat logo
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


function DocsAIChat() {

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
    title: 'Documents AI Chat',
    description: 'An AI app using OpenAI for document analysis and interactions',
    logo: project_logo, 
    screenshot: projectScreenshot, 
  };

  const ProjectSkills = [
    { name: 'HTML', percent: 16.2},
    { name: 'TypeScript', percent: 53.5 },
    { name: 'CSS', percent: 40.3 },
  ];
  
  const ProjectSkillsList = [
    { name: 'React.js' },
    { name: 'Node.js' },
    { name: 'Express.js' },
    { name: 'GenAI' },
    { name: 'openAI API' },
    { name: 'File Parsing' },
    { name: 'OpenAI Embedding' },
    { name: 'Interactive Chat' },
  ];

  const featuresList = [
    { description: 'Upload and process PDF or Word documents effortlessly.' },
    { description: 'Parse document content into semantically meaningful chunks.' },
    { description: 'Index the parsed content using OpenAI embeddings for efficient querying.' },
    { description: 'Interactive chat interface for asking questions based on document content.' },
    { description: 'Modern, responsive UI designed for seamless user experience.' },
  ];
  
  
  const yearCreated =  '2024' ;

  const githubLink = 'https://github.com/bar-efrima/IntelliChat-File-Assistant';

  const DocsAIChatDescription ={
    title: 'About the Project', 
  };



  return (
   
    
  <div className="DocsAIChat">
    
    <ProjectHeader title={ProjectInfo.title} description={ProjectInfo.description} logo={ProjectInfo.logo} screenshot={ProjectInfo.screenshot} />

    <TextCard projectDescription={DocsAIChatDescription}> 
      <p> This project is a Full Stack application built with React, Node.js, and TypeScript, 
        leveraging OpenAI's 'text-embedding-ada-002 model' for AI-driven document interaction. 
        Users can upload PDF or Word files, which are parsed using libraries like 'pdf-parse'
         and 'mammoth' to extract content and split it into semantically meaningful chunks. 
         The data is indexed using embeddings, enabling efficient semantic search. An interactive
          chat interface, styled with CSS, allows users to query the indexed content and retrieve 
          precise AI-powered responses. 
        </p> 
    </TextCard>
   
    <div className="DocsAIChat-info">

      <div className="DocsAIChat-left">
        <SkillCard skills={ProjectSkills} skillsList={ProjectSkillsList} />
      </div>

      <div className="DocsAIChat-right">
        <YearCreated year={yearCreated} />
        <GithubLink link={githubLink} linkIcon={linkIcon}/>
      </div>

    </div>

    <ProjectFeatures features={featuresList} />

    <Carousel images={carouselImages} />
  </div>
  );
}

export default DocsAIChat;
