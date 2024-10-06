import React from 'react';
import './kitchef.css'; // Import the CSS file
import milabLogo from './Images/milab_logo.jpg';
import projectScreenshot from './Images/projectScreenshot.jpg';
import image1 from './Images/image1.jpg';
import arduinoLogo from './Stack/Arduino.png';
import cppLogo from './Stack/c++.svg';
import adobeLogo from './Stack/Adobe.png';
import linkIcon from '../General_Images/link.png';
import image3 from './Images/image3.jpg';
import ProjectHeader from '../components/ProjectHeader';
import Projectcard from '../components/TextCardProject';
import VideoCard from '../components/VideoCard';
import ImageCard from '../components/ImageCard';
import YearCreated from '../components/YearCreated';
import ImageSlider from '../components/ImageSlider';

function kitchef() {

    const kitchefHeader = {
        title: 'Kitchef',
        description: 'A TUI for Parent-Child Cooking Together',
        logo: milabLogo,
        screenshot: projectScreenshot,
      }
    
    const kitchefMyRole = {
        title: 'My Role',
        description: `Design and conduct experiments:
        Softtware kitchefMyRoledevleoper and electronic operator: Led "Kitchef" project from concept
        through development, designed and programmed an IoT
        using Arduino, BLE, CAD, and 3D printing
        The child’s wristband contained a magnet, while the parent’s wristband
        is equipped with a XIAO BLE NRF52840 sense controller. This
        controller is powered by a compact portable battery with an activation
        switch and connected to a magnetism sensor. This sensor
        interacts with the magnet in the child’s band. When brought into
        close proximity, the XIAO controller detects the change in magnetism
        caused by the child’s wristband and communicates this data
        via Bluetooth to an ESP32 controller inside the recipe box. Processing
        the data in real-time, the RGB LED strip behind the recipe lights
        up to guide the cooking steps.
        reaserch: Helped in the research team: Conducting and managing the research and the team,
        including the definition of timetable, goals for every step, and supervision on the whole process
        Involvement in writing an academic paper: Including literature reviews and a deep
        understanding of the CyberBall paradigm. Writing specifically the Findings chapter
        and dividing the qualitative findings into themes.`,
    } ;

    const awards = 
    {
        title: 'Awards',
        description: 'CHI Hawaii Conference, tech12, Academic Paper',
    } ;

    const kitchefVideoLink = 'https://www.youtube.com/embed/idCBrHXxCg8?si=gDtIRs0fPgZ4DGyl';
    
    const aboutKitchef = {
        title: 'About the Project',
        description: `Kitchef is a wearable technology, designed to create physical closeness and an emotional 
        connection between children and their parents during a shared cooking experience. 
        The technology enables an interactive and playful experience that strengthens the 
        parent-child relationship and enhances the child’s sense of independence and security. 
        The Kitchef cooking kit includes two bracelets and a recipe box that accompanies the parent and 
        child in the cooking process.`,
    }

    const yearCreated =  {
        title: 'Created',
        description: '2023',
    }

  return(
<div class="kitchef">
<ProjectHeader title={kitchefHeader.title} description={kitchefHeader.description} logo={kitchefHeader.logo} screenshot={kitchefHeader.screenshot} />

    <div class="kitchef-info">
        <div class="kitchef-left">
          
            <div class ="about-kitchef">
                <h3>About the Project</h3>
                <hr />
                <p>Kitchef is a wearable technology, designed to create physical closeness and an emotional connection between children and their parents during a shared cooking experience. The technology enables an interactive and playful experience that strengthens the parent-child relationship and enhances the child’s sense of independence and security. The Kitchef cooking kit includes two bracelets and a recipe box that accompanies the parent and child in the cooking process.</p>
            </div>
            <div class="image1">
                <img src={image1} alt="Image 1"/>
            </div>
        </div>
        
        <div class="kitchef-right">
        {/* <div class="year-create">
                <h3>Year Created</h3>
                <hr />
                <p>{yearCreated}</p>
            </div> */}

        <Projectcard projectDescription={yearCreated}  style={{width:'100%' ,margin:'0', flexDirection: 'column'}}/>
            <div class="tech-stack">
                <h3>Tech Used</h3>
                <hr />
                <ul>
                    <div class="tech-item">
                        <img src={arduinoLogo} alt="Arduino Logo" />
                        <div class="tech-info">
                            <h4>Arduino</h4>
                        </div>
                    </div>
                    <div class="tech-item">
                        <img src={cppLogo} alt="C++ Logo" />
                        <div class="tech-info">
                            <h4>C++</h4>
                        </div>
                    </div>
                    <div class="tech-item">
                        <img src={adobeLogo} alt="C++ Logo" />
                        <div class="tech-info">
                            <h4>Adobe Suit</h4>
                    </div>
                    </div>

                    
                </ul>
            </div> 
           
            <div class="links">
                <p><a href="https://milabgroup42022.wixsite.com/kitchef">Website <span><img src={linkIcon} alt="Link Icon" /></span></a></p>
                <p><a href="https://dl.acm.org/doi/10.1145/3613905.3650970">Academic Paper <span><img src={linkIcon} alt="Link Icon"/></span></a></p>
                <p><a href= "https://programs.sigchi.org/chi/2024/program/content/150804"> CHI Hawaii Conference <span><img src={linkIcon} alt={"Link Icon"}/></span></a></p>
                <p><a href="https://www.tech12.co.il/index-technology_first/ai_revolution/Article-860576e73637981026.htm">tech12 <span><img src={linkIcon} alt="Link Icon"/></span></a></p>
            </div>

        </div>
    </div>
    
     <Projectcard projectDescription={kitchefMyRole} />   
     <ImageSlider />
    
    <Projectcard projectDescription={awards} style={{flexDirection: 'column'}} />
{/* <section class="project-description">
        <h3 id="c">Awards</h3>
        <hr />
        <ul class="awards">
            <li>CHI Hawaii Conference</li>
            <li>tech12</li>
            <li>Academic Paper</li>
        </ul>
        </section> */}


    <VideoCard videoLink={kitchefVideoLink} />
    
    </div>
  );
}

export default kitchef;

