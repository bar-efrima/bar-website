import {useEffect, React} from 'react';
import './IoT.css'; // CSS file for styling
import project_logo from './Images/IoT_logo.png'; // IoT logo
import projectScreenshot from './Images/projectScreenshot.jpg'; // Screenshot of the project
import SkillCard from '../components/Skills'; // SkillCard component
import TextCard from '../components/TextCardProject'; // AboutCard component
import linkIcon from '../General_Images/link.png';
import YearCreated from '../components/YearCreated';
import ProjectHeader from '../components/ProjectHeader';
import musical from './Images/Musical.jpg';
import bubbleTrouble from './Images/BubbleTrouble.jpg';
import weatherBox from './Images/Weather-box.jpg';
import ImageCard from '../components/ImageCard';


function IoT() {

   // Use useEffect to pop to the top when the component is mounted
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // Make sure the scroll happens instantly
    });
  }, []); 


  const ProjectInfo = {
    title: 'IoT Inventions',
    description: 'Arduino-based IoT with C++ programming',
    logo: project_logo,
    screenshot: projectScreenshot,
  }

  const ProjectSkills = [
    { name: 'C++', percent: 100.0 },
];

const ProjectSkillsList = [
  { name: 'Arduino IDE' },
  { name: 'Microcontroller Programming' },
    { name: 'Capacitive Sensing'},
    { name: 'Sensor Integration' },
    { name: 'Neopixel LED Control' },
    { name: 'Wi-Fi Connectivity' },
    {name: 'BLE'},
    { name :'API Integration'},
    { name: 'Keyboard Emulation' },
    { name: 'Sound Integration' },
    { name: 'JSON Parsing', },
    { name: 'Circuit Design' },
    { name: ' Prototyping' },
    { name: 'ESP8266' },
    { name: 'XIAO' },
    { name: 'Keyboard Emulation' },
    { name: 'JSON Parsing' },
];

  const yearCreated =  '2023-2024' ;

  const IoTDescription ={
    title: 'About the Projects', 
  };

  return (
   
    
  <div className="IoT">
    
    <ProjectHeader title={ProjectInfo.title} description={ProjectInfo.description} logo={ProjectInfo.logo} screenshot={ProjectInfo.screenshot} />
    
    <div class="video-co">
      <iframe src="https://www.youtube.com/embed/dU6XqPEafqA?si=1ZncLd-2cBOc1Ehs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

      <iframe src="https://www.youtube.com/embed/kTHfsLwlMJY?si=sgDaJnytJMaJ5aoI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

      <iframe src="https://www.youtube.com/embed/PVBT4ktRmHY?si=lZml9XB0MNvg8hIW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>

    <TextCard projectDescription={IoTDescription}> 
      <p> My IoT creations encompasses various innovative projects where I designed and developed 
        interactive systems using sensors, capacitive touch, Wi-Fi and BLE connectivity, and microcontroller programming. 
        </p><br/><p>
        These projects include musical instrument, weather-responsive light show, and interactive games using 
        fruits like bananas and orange as capacitive inputs. Leveraging platforms 
        like ESP8266 and CPX, the projects integrate real-time API data, Neopixel lighting, sound generation, 
        and keyboard emulation to create immersive and responsive IoT experiences. 
        </p>
    </TextCard>


    <div className="IoT-info">

      <div className="IoT-left">
        <SkillCard skills={ProjectSkills} skillsList={ProjectSkillsList} />
      </div>

      <div className="IoT-right">
        <YearCreated year={yearCreated} />
        <div class="links">
                <p><a href="https://github.com/bar-efrima/The-Musical-Spray"> Musical Spray <span><img src={linkIcon} alt="Link Icon" /></span></a></p>
                <p><a href="https://github.com/bar-efrima/The-Weather-Box">Weather Box <span><img src={linkIcon} alt="Link Icon"/></span></a></p>
                <p><a href="https://github.com/bar-efrima/Emulating-Bubble-Trouble-With-Fruits">Fruits Emulator <span><img src={linkIcon} alt={"Link Icon"}/></span></a></p>
            </div>
      </div>

    </div>
    
    <ImageCard image={musical} />
    <TextCard projectDescription={""}>
      <p> The Musical Spray is an IOT musical instrument with 4 metal touch buttons. 
        You can play this instrument by tauching each button with your fingers, Each 
        button generate different sound note. By trying to spray you can change between 4 modes who will 
        generate different notes. In the dark , the instrument starts to glow with red lights.
      </p> <br/> 
      <p>
         The circuit:
        <ul>
          <li>4 wires are connected to the pins A1,A2,A3,A4 respectevly</li>
          <li>the wires are connected to a coin which I wrapped with Aluminum foil,when touched,
            a circle is closed and the program outputs sound.</li>
          <li>Main button - 1 wire from A5 and 1 wire from Ground pin are connected to an external button. </li>
          <li>Light sensor - 3 neopixels light up corresponding to the light, when the area is dark 
            the neo pixels turn red.</li>
        </ul>
      </p>
    </TextCard>

    <ImageCard image={weatherBox} />
    <TextCard projectDescription={""}>
      <p> The Weather Box is a device that utilizes wifi connectivity to retrieve the current weather 
        conditions at a specified location, determined by the longitude and latitude entered. 
        The device then displays a customized light show corresponding to the current weather condition. 
        <ul> <br/>
          <li>Blue - for a rainy day </li>
          <li>Gray white - for cloudy days </li>
          <li>Yellow- for a sunny/clear day </li>
          <li>Pink - for a snowy day </li>
          <li> when is cloudy the box will preset white lights!</li>
        </ul>
        </p> <br/> <p>
      The program utilizes an ESP8266 modem to connect the CPX to wifi, and once connected, 
      it sends a request to the website https://openweathermap.org/ to obtain the requested API data based 
      on the specified longitude and latitude. The program then converts the weather data, in json format, 
      into a string by reading it letter by letter. It then extracts the main weather condition 
      from the string and subsequently displays a corresponding color light show based on the condition..
      </p> <br/> 
      <p>
         The circuit:
        <ul>
          <li>ESP8266 WiFi Module Interfacing with the cpx. </li>
          <li>One wire is connected to the pin A1 on one side, and to a conductive sticker on the other side. </li>
          <li>When the conductive sticker is touched, it completes a circuit and causes the light show to stop. </li>
          <li>The program also uses 10 neopixels to display the light show according to the weather conditions.</li>
        </ul>
      </p>
    </TextCard>

    <ImageCard image={bubbleTrouble} />
    
    <TextCard projectDescription={""}>
    <p> playing the game Bubble Trouble by emulating a PC keyboard with CPX (circuit playground express) </p>
    <br/> <ul>
          <li>Banana gun: When pressed, the character shoots and outputs a laser beam sound. </li>
          <li>Orange Controller: The character moves according to the orange movement. </li>
          <li>Cheat mode: by touching the sweet potato, an additional player emerges and helps the character shot. </li>
        </ul>
        <br/> <p>
      The program utilizes an ESP8266 modem to connect the CPX to wifi, and once connected, 
      it sends a request to the website https://openweathermap.org/ to obtain the requested API data based on the specified longitude and latitude. The program then converts the weather data, in json format, into a string by reading it letter by letter. It then extracts the main weather condition from the string and subsequently displays a corresponding color light show based on the condition..
      </p> <br/> 
      <p>
         The circuit:
        <ul>
          <li> The banana is connected to pin A1. 
               When touched, the program responds according to the capacity change. 
               It outputs a laser beam sound and emulates the "up arrow key,“ which leads to a gunshot. </li>
          <li> The sweet potato is connected to pin A2. When touched, the cheat mode is activated, 
                the program responds to the capacity change and as a result emulates commands on the keyboard, 
                which adds an additional shooter. </li>
          <li>Movement: motion sensor: The accelerometer measures the x and y 
              movements according to the orange movment , it emulate the keyboard's arrows corresponding to the 
              movement measured.</li>
        </ul>
      </p>
    </TextCard>

  </div>
  );
}

export default IoT;
