import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import Home from './components/Home';
import Kitchef from './pages/Kitchef_Page/Kitchef';
import Amazon from './pages/Amazon_Page/Amazon';
import Unavigate from './pages/Unavigate_Page/Unavigate';
import Pokemon from './pages/Pokemon_Page/Pokemon';
import Highlights from './pages/GameHighlights_Page/Highlights';
import NFT from './pages/NFT_Page/NFT';
import IoT from './pages/IoT_Page/IoT';
import Applications from './pages/Applications_Page/Applications';
import Header from './components/Header';
import Footer from './components/Footer';

// Custom hook to track page views on route changes
function usePageTracking() {
  const location = useLocation();

  useEffect(() => {
    if (typeof window.gtag === 'function') {
      window.gtag('config', 'G-RWY26598QH', {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);
}

function App() {
  usePageTracking(); // Use page tracking hook

  return (
    <Router basename="/">
      <Header />
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

export default App;
