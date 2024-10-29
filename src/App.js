import { HashRouter as Router, Route, Routes } from 'react-router-dom'; // Use HashRouter
import Home from './components/Home'; // Home contains all sections
import Kitchef from './pages/Kitchef_Page/Kitchef'; // Kitchef project page
import Amazon from './pages/Amazon_Page/Amazon'; // Amazon project page
import Unavigate from './pages/Unavigate_Page/Unavigate'; // Unavigate project page
import Pokemon from './pages/Pokemon_Page/Pokemon'; // Pokemon project page
import Highlights from './pages/GameHighlights_Page/Highlights'; // Highlights project page
import NFT from './pages/NFT_Page/NFT'; // NFT project page
import IoT from './pages/IoT_Page/IoT'; // IoT project page
import Applications from './pages/Applications_Page/Applications'; // Mobile applications project page
import GraphicDesign from './pages/GraphicDesign_Page/GraphicDesign';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router> 
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kitchef" element={<Kitchef />} />
        <Route path="/AmazonScraper" element={<Amazon />} />
        <Route path="/NavigationApp" element={<Unavigate />} />
        <Route path="/PokémonPokédex" element={<Pokemon />} />
        <Route path="/Highlights Creator" element={<Highlights />} />
        <Route path="/RoyalCatsNFT" element={<NFT />} />
        <Route path="/IoTInventions" element={<IoT />} />
        <Route path="/MobileApps" element={<Applications />} />
        <Route path="/GraphicDesign&UI/UX" element={<GraphicDesign />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
