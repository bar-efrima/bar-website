import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import ReactGA from 'react-ga';

import Home from './components/Home'; // Home contains all sections
import Kitchef from './pages/Kitchef_Page/Kitchef'; // Kitchef project page
import Amazon from './pages/Amazon_Page/Amazon'; // Kitchef project page
import Unavigate from './pages/Unavigate_Page/Unavigate'; // Unavigate project page
import Pokemon from './pages/Pokemon_Page/Pokemon'; // Pokemon project page
import Highlights from './pages/GameHighlights_Page/Highlights'; // Highlights project page
import NFT from './pages/NFT_Page/NFT'; // NFT project page
import IoT from './pages/IoT_Page/IoT'; // IoT project page
import Applications from './pages/Applications_Page/Applications'; // Mobile applications project page
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  // Initialize Google Analytics once when the app starts
  useEffect(() => {
    ReactGA.initialize('G-RWY26598QH', { debug: true });
 // Google Analytics Tracking ID
  }, []);

  // A custom hook to track page views on route changes
  function usePageTracking() {
    const location = useLocation();

    useEffect(() => {
      ReactGA.pageview(location.pathname + location.search);
    }, [location]);  // Track page view whenever the location changes
  }

  return (
    
    <Router basename="/">
      <Header />
      <PageTrackingWrapper /> {/* Enable page tracking */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kitchef" element={<Kitchef />} />
        <Route path="/Amazon" element={<Amazon />} />
        <Route path="/Unavigate" element={<Unavigate />} />
        <Route path="/Pokemon" element={<Pokemon />} />
        <Route path="/Highlights" element={<Highlights />} />
        <Route path="/NFT" element={<NFT />} />
        <Route path="/IoT" element={<IoT />} />
        <Route path="/Applications" element={<Applications />} />
      </Routes>
      <Footer />
    </Router>
  );
}

// A wrapper component to enable page tracking on route changes
function PageTrackingWrapper() {
  usePageTracking();
  return null;  // This component doesn't render anything visible
}

export default App;
