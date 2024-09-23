import React from 'react';
import './kitchef.css'; // Import the CSS file
import milabLogo from './Images/milab_logo.jpg';
import projectScreenshot from './Images/projectScreenshot.jpg';
import image1 from './Images/image1.jpg';
import arduinoLogo from './Stack/Arduino.png';
import cppLogo from './Stack/c++.svg';
import adobeLogo from './Stack/Adobe.png';
import linkIcon from './Images/link.png';
import historyImage from './Images/history.jpg';
import image3 from './Images/image3.jpg';
import image4 from './Images/image4.jpg';


function kitchef() {
  return(
<div>
    <header>
        <div class="header-container">
            <img src={milabLogo} alt="Project Logo" />
            <div class="text-container">
                <h1>Kitchef</h1>
                <p>A TUI for Parent-Child Cooking Together</p>
            </div>
        </div>
    </header>
    
    <div class="project-showcase">
        <img src={projectScreenshot} alt="Project Screenshot" />
    </div>
    
    <div class="content-container">
        <div class="left-side">
            <div class="about">
            <h3>About the Project</h3>
            <hr />
            <p>
                Kitchef is a wearable technology, designed to create physical closeness and an emotional 
                connection between children and their parents during a shared cooking experience. 
                The technology enables an interactive and playful experience that strengthens the 
                parent-child relationship and enhances the child’s sense of independence and security. 
                The Kitchef cooking kit includes two bracelets and a recipe box that accompanies the parent and 
                child in the cooking process.</p>
            </div>
            <div class="image1">
                <img src={image1} alt="Image 1"/>
            </div>
        </div>
        
        <div class="right-side">
            <div class="tech-stack">
                <h3>Tech Used</h3>
                <hr />
                <ul>
                    <div class="tech-item">
                        <img src={arduinoLogo} alt="Arduino Logo" />
                        <div class="tech-info">
                            <h4>Arduino</h4>
                           {/* <p>Electronic prototyping board</p> */}
                        </div>
                    </div>
                    <div class="tech-item">
                        <img src={cppLogo} alt="C++ Logo" />
                        <div class="tech-info">
                            <h4>C++</h4>
                           {/* <p>JavaScript library for building UI</p> */}
                        </div>
                    </div>
                    <div class="tech-item">
                        <img src={adobeLogo} alt="C++ Logo" />
                        <div class="tech-info">
                            <h4>Adobe Suit</h4>
                            {/* <p>JavaScript library for building UI</p> */}
                    </div>
                    </div>

                    
                </ul>
            </div>
            <div class="created">
                <h3>Created</h3>
                <hr />
                <p>2022</p>
            </div>
            {/* <div class="full-article">
                <h3><a href="https://www.tech12.co.il/index-technology_first/ai_revolution/Article-860576e73637981026.htm">Academic Paper</a></h3>
            </div>
            <div class="full-article">
                <h3><a href="link_to_article">Kitchef in tech12</a></h3>
            </div>  */}
            <div class="links">
                {/* <p><a href="https://milabgroup42022.wixsite.com/kitchef">Website <span><img src="link.png" alt="Link Icon"></a></span></p>
                <p><a href="https://dl.acm.org/doi/10.1145/3613905.3650970">Academic Paper </a><span><img src="link.png" alt="Link Icon"></a></span></p>
                <p><a href= "https://programs.sigchi.org/chi/2024/program/content/150804"> CHI Hawaii Conference <span><img src="link.png" alt="Link Icon"></a></span></p>
                <p><a href="https://www.tech12.co.il/index-technology_first/ai_revolution/Article-860576e73637981026.htm">tech12 <span><img src="link.png" alt="Link Icon"></a></span></p> */}
            </div>
            <div class="image1">
                <img src={image4} alt="image4"/>
            </div>

        </div>
        </div>
    <section class="project-description">
        <h3>Process</h3>
        <hr />
        
        <p>
            <h4>My role - Research Project Manager</h4>
            <p> 
                I was the prgrammer and Project Manager of the project. 
                My team included one psychology student, one 2 comunication studdents,
                two computer science students including me, an industrial designer, and academic advisors.
                I managed the project from the beginning, 
                planning this project, through the design process of the system, 
                conducting experiments and interviews with participants, 
                and up to writing an academic paper for the HRI 2021 conference.
                </p>
                
            <h4>Main Responsibilities</h4>
                <p>
                *Design and conduct experiments: 
                My team develops and design the system, including 3 robots, the experiment settings, 
                and a simple UI control for the user. The research includes different methods as 
                semi-structured interviews, anonymous multi-choice questioners. Collecting data, 
                interview transcripts, and analyzing qualitative data using thematic coding method.
                i made the logo, helped desin the kit to for print, dyed it, worked with illustator to 
                desin the recpies and the box, and helped with the 3d printing of the box.
                </p>
                <p>
                Softtware devleoper and electronic operator: Led "Kitchef" project from concept 
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
                </p>
                <p>
                reaserch: Helped in the research team: Conducting and managing the research and the team, 
                including the definition of timetable, goals for every step, and supervision on the whole process
                </p>
                <p>
                Involvement in writing an academic paper: Including literature reviews and a deep 
                understanding of the CyberBall paradigm. Writing specifically the Findings chapter 
                and dividing the qualitative findings into themes.
                </p>
        </p>
    </section>
    <div class="youtube-video">
      
    <div class="image3">
        <img src={historyImage} alt="Image 3"/>
    
    </div>
    <section class="technologies-used">
        <h3>Interviews</h3>
        <hr />
        <ul>
            <li>Technology 1</li>
            <li>Technology 2</li>
        </ul>
    </section>
    <div class="image3">
        <img src={image3} alt="Image 3"/>
    
    </div>
    <section class="challenges">
        <h3>Challenges and Solutions</h3>
        <p>
            Discuss any significant challenges faced during the development process
            and the solutions implemented to overcome them.
        </p>
    </section>
    <section class="results">
        <h3>Results and Learnings</h3>
        <p>
            Summarize the outcomes of the project and any lessons learned during
            the project development.
        </p>
    </section>
    <div class="video-container">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/idCBrHXxCg8?si=gDtIRs0fPgZ4DGyl" 
            title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
            gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
        </iframe>
    </div>
</div>


    </div>
  );
}

export default kitchef;

