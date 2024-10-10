import {useEffect, React} from 'react';
import './Applications.css'; // CSS file for styling
import wizard_logo from './Images/Wizard_logo.jpg'; // wizard logo
import fruits_logo from './Images/Fruitinfo_logo.jpg'; // wizard logo
import projectScreenshot1 from './Images/projectScreenshot1.jpg'; // Screenshot of Wizard app
import projectScreenshot2 from './Images/projectScreenshot2.jpg'; // Screenshot of Fruits app
import SkillCard from '../components/Skills'; // SkillCard component
import TextCard from '../components/TextCardProject'; // AboutCard component
import linkIcon from '../General_Images/link.png';
import YearCreated from '../components/YearCreated';
import ProjectHeader from '../components/ProjectHeader';
import GithubLink from '../components/Github';
import ProjectFeatures from '../components/ProjectFeatures';
import VideoCard from '../components/VideoCard';


function Applications() {

   // Use useEffect to pop to the top when the component is mounted
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // Make sure the scroll happens instantly
    });
  }, []); 


  const WizardInfo = {
    title: 'WeatherWizard App',
    description: 'Cross-platform weather app with React Ionic',
    logo: wizard_logo,
    screenshot: projectScreenshot1,
  }

  const FruitsInfo = {
    title: 'FruitInfo App',
    description: 'Android app fetching and sorting fruit data',
    logo: fruits_logo,
    screenshot: projectScreenshot2,
  }

  const WizardAppSkills = [
    { name: 'CSS', percent: 45.0 },
    { name: 'TypeScript', percent: 42.9 },
    { name: 'Java', percent: 6.0 },
    { name: 'HTML', percent: 4.5 },
    { name: 'JavaScript', percent: 1.6 },
];

const WizardAppSkillsList = [
    { name: 'React' },
    { name: 'Ionic Framework' },
    { name: 'API Integration' },
    { name: 'HTTP Requests' },
    { name: 'Android Studio' },
    { name: 'Frontend Design' },
];

const FruitAppSkills = [
  { name: 'Java', percent: 100.0 },
];

const FruitAppSkillsList = [
  { name: 'UI/UX Design'},
  { name: 'Android Development' },
  { name: 'API Integration' },
  { name: 'AppsFlyer SDK' },
  { name: 'Retrofit' },
];


  const wizardFeaturesList = [
      { description: 'Fetches current weather data from a free weather API for selected cities.' },
      { description: 'Displays weather in Celsius along with custom backgrounds and moving cloud effects.' },
      { description: 'Allows users to select cities from a dropdown menu to view updated weather information.' },
      { description: 'Features sunrise time and weather conditions for each city.' },
  ];

  const fruitsFeaturesList = [
    { description: 'Fetches fruit data from FruityVice API and displays it in a scrollable list.' },
    { description: 'Sorts fruit data by sugar, protein, or calories with a button click.' },
    { description: 'Includes a reset button to restore the initial list view.' },
    { description: 'Integrated with AppsFlyer SDK to track user interactions.' },
    { description: 'Provides an engaging, easy-to-use interface for viewing fruit data.' },
  ];
 
  
  const wizardYearCreated =  '2023' ;
  const fruitsYearCreated =  '2024' ;

  const wizardGithubLink = 'https://github.com/bar-efrima/WeatherWizard-App'
  const FruitsGithubLink = 'https://github.com/bar-efrima/FruitInfo-App/tree/master';

  const ApplicationsDescription ={
    title: 'About the Project', 
  };

  const wizardVideoLink = 'https://www.youtube.com/embed/PVBT4ktRmHY?si=53EJ87gxZd_YwBWN';

  return (
   
    
  <div className="Applications">
    
    <ProjectHeader title={FruitsInfo.title} description={FruitsInfo.description} logo={FruitsInfo.logo} screenshot={FruitsInfo.screenshot} />

    <TextCard projectDescription={ApplicationsDescription}> 
      <p> Fruit Info App is an Android application that fetches fruit data from the FruityVice API and displays it 
        in a scrollable list. Users can sort the fruits by sugar, protein, or calories, and reset the view with 
        a button. The app integrates with the AppsFlyer SDK to track button clicks as in-app events, 
        offering valuable user behavior insights. It provides a user-friendly interface for exploring
         nutritional information efficiently.
        </p> 
    </TextCard>
   
    <div className="Applications-info">

      <div className="Applications-left">
        <SkillCard skills={FruitAppSkills} skillsList={FruitAppSkillsList} />
      </div>

      <div className="Applications-right">
        <YearCreated year={fruitsYearCreated} />
        <GithubLink link={FruitsGithubLink} linkIcon={linkIcon}/>
      </div>

    </div>

    <ProjectFeatures features={fruitsFeaturesList} />

        {/* Second Project */}

    <ProjectHeader title={WizardInfo.title} description={WizardInfo.description} logo={WizardInfo.logo} screenshot={WizardInfo.screenshot} />

    <TextCard projectDescription={ApplicationsDescription}> 
      <p> Weather Wizard is a weather app developed using React Ionic. It allows users to select a city and fetches
         the current weather for that location via a weather API. The app includes custom backgrounds, 
         animated cloud effects, and displays data such as temperature, weather description, and sunrise.
        </p> 
    </TextCard>
   
    <div className="Applications-info">

      <div className="Applications-left">
        <SkillCard skills={WizardAppSkills} skillsList={WizardAppSkillsList} />
      </div>

      <div className="Applications-right">
        <YearCreated year={wizardYearCreated} />
        <GithubLink link={wizardGithubLink} linkIcon={linkIcon}/>
      </div>

    </div>

    <ProjectFeatures features={wizardFeaturesList} />
    <VideoCard videoLink={wizardVideoLink} />

  </div>
  );
}

export default Applications;
