import {useEffect, React, Children} from 'react';
import './kitchef.css'; // Import the CSS file
import projectLogo from './Images/milab_logo.jpg';
import projectScreenshot from './Images/projectScreenshot.jpg';
import image1 from './Images/image1.jpg';
import arduinoLogo from './Stack/Arduino.png';
import cppLogo from './Stack/c++.svg';
import adobeLogo from './Stack/Adobe.png';
import linkIcon from '../General_Images/link.png';
import ProjectHeader from '../components/ProjectHeader';
import Projectcard from '../components/TextCardProject';
import VideoCard from '../components/VideoCard';
import ImageSlider from '../components/ImageSlider';
import bannerImage from './Images/CHI2024_e.jpg';
import Banner from '../components/Banner';

const sliderImages = [
    require('../Kitchef_Page/Images/Slider/1.jpg'),
    require('../Kitchef_Page/Images/Slider/2.jpg'),
    require('../Kitchef_Page/Images/Slider/3.jpg'),
    require('../Kitchef_Page/Images/Slider/4.jpg'),
    require('../Kitchef_Page/Images/Slider/5.jpg'),
    require('../Kitchef_Page/Images/Slider/6.jpg'),
    require('../Kitchef_Page/Images/Slider/7.jpg'),
    require('../Kitchef_Page/Images/Slider/8.jpg'),
    require('../Kitchef_Page/Images/Slider/9.jpg'),
    require('../Kitchef_Page/Images/Slider/10.jpg'),
    require('../Kitchef_Page/Images/Slider/11.jpg'),
    require('../Kitchef_Page/Images/Slider/12.jpg'),
  ];
  

function Kitchef() {

    // Use useEffect to pop to the top when the component is mounted
    useEffect(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'instant' // Make sure the scroll happens instantly
        });
      }, []); 

    const ProjectInfo = {
        title: 'Kitchef',
        description: 'A TUI for Parent-Child Cooking Together',
        logo: projectLogo,
        screenshot: projectScreenshot,
      }
    
    const kitchefMyRole = {
        title: 'My Role',
    } ;

    const awards = 
    {
        title: 'Achivements 🏆',
    };

    const kitchefVideoLink = 'https://www.youtube.com/embed/idCBrHXxCg8?si=gDtIRs0fPgZ4DGyl';
    

  return(

<div class="kitchef">
    <ProjectHeader title={ProjectInfo.title} description={ProjectInfo.description} logo={ProjectInfo.logo} screenshot={ProjectInfo.screenshot} />

    <div class="kitchef-info">
        
        <div class="kitchef-left">
            <div class ="about-kitchef">
                <h3>About the Project</h3>
                <hr />
                <p>Kitchef is a wearable technology, designed to create physical closeness and an emotional 
                    connection between children and their parents during a shared cooking experience. 
                    The technology enables an interactive and playful experience that strengthens the 
                    parent-child relationship and enhances the child’s sense of independence and security.
                    The Kitchef cooking kit includes two bracelets and a recipe box that accompanies
                    the parent and child in the cooking process.</p>
                </div>
            <div class="image1">
                <img src={image1} alt="Image 1"/>
            </div>
        </div>
        
    <div class="kitchef-right">
        <div class="about-kitchef">
                <h3>Created</h3>
                <hr />
                <p>2022</p>
            </div>
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
                <p><a href="https://milabgroup42022.wixsite.com/kitchef">🌐 Website <span><img src={linkIcon} alt="Link Icon" /></span></a></p>
                <p><a href="https://dl.acm.org/doi/10.1145/3613905.3650970">Academic Paper <span><img src={linkIcon} alt="Link Icon"/></span></a></p>
                <p><a href= "https://programs.sigchi.org/chi/2024/program/content/150804"> CHI Hawaii Conference <span><img src={linkIcon} alt={"Link Icon"}/></span></a></p>
                <p><a href="https://www.tech12.co.il/index-technology_first/ai_revolution/Article-860576e73637981026.htm">tech12 <span><img src={linkIcon} alt="Link Icon"/></span></a></p>
            </div>

        </div>
    </div>

    <ImageSlider images={sliderImages} />

    <Projectcard projectDescription={kitchefMyRole}> 
        <p>As the IoT Developer and Research Assistant for the Kitchef project, 
            I led the technical development and overall coordination of this Tangible User Interface 
            (TUI) aimed at encouraging collaborative cooking between parents and children. 
            I programmed the system primarily using C++ in Arduino, developing key features 
            such as magnet-based wristbands and a smart recipe box that allowed users to 
            interact through a step-based cooking process. I was responsible for all wiring, 
            electrical components, and integrating Bluetooth Low Energy (BLE) communication via ESP32 controllers 
            to ensure seamless functionality between hardware and software components.
        </p><br></br><p>
            In addition to my programming responsibilities, I acted as a product manager for the project, 
            overseeing all aspects of development and ensuring that each part of the system worked cohesively. 
            I collaborated with a multidisciplinary team, including a psychology and business student, two communication 
            students, and an additional programmer. With the guidance of external and internal mentors—including our lab
            professor, innovation lab mentors, and an industrial designer—I translated insights from various disciplines 
            into effective technical solutions, making sure the project aligned with the needs and goals of all stakeholders.
        </p><br></br><p>
            My role extended to product design, where I contributed to the 3D design and fabrication of the Kitchef 
            box using CNC machining and 3D printing, and I also designed the Kitchef logo. I conducted user research, 
            observations, and validations during testing to refine the system. Additionally, I presented Kitchef at 
            several showcases, where I interacted with audiences and demonstrated the project’s functionality, 
            gathering valuable feedback. My broad involvement ensured that I had a deep understanding of how everything
            worked and how it should work, allowing me to guide the project to success.</p>
    </Projectcard>  

<Banner image={bannerImage} />

<Projectcard projectDescription={awards} style={{
    marginTop: '40px', 
    marginBottom: '40px',
    flexDirection: 'column',
    filter: `drop-shadow(0 0 20px rgba(255, 171, 16, 0.8))
    drop-shadow(0 0 30px rgba(255, 0, 242, 0.1))`
    }}>
    <p>🔸 Published an Academic Paper</p>
    <p>🔸 Presented at CHI 2024 Hawaii Conference</p>
    <p>🔸 Participated in IsraHCI 2024 Research Conference</p>
    <p>🔸 Featured in an article on Tech12</p>
</Projectcard>


    <VideoCard videoLink={kitchefVideoLink} />
    
    </div>
  );
}

export default Kitchef;

