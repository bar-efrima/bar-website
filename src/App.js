import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

const Home = lazy(() => import('./components/Home'));
const Kitchef = lazy(() => import('./pages/Kitchef_Page/Kitchef'));
const Amazon = lazy(() => import('./pages/Amazon_Page/Amazon'));
const Unavigate = lazy(() => import('./pages/Unavigate_Page/Unavigate'));
const Pokemon = lazy(() => import('./pages/Pokemon_Page/Pokemon'));
const Highlights = lazy(() => import('./pages/GameHighlights_Page/Highlights'));
const NFT = lazy(() => import('./pages/NFT_Page/NFT'));
const IoT = lazy(() => import('./pages/IoT_Page/IoT'));
const Applications = lazy(() => import('./pages/Applications_Page/Applications'));
const GraphicDesign = lazy(() => import('./pages/GraphicDesign_Page/GraphicDesign'));
const UnrealEngine = lazy(() => import('./pages/UnrealEngine_Page/UnrealEngine'));
const DocksAIChat = lazy(() => import('./pages/DocsAIChat_Page/DocsAIChat'));
const TryOnStudio = lazy(() => import('./pages/TryOnStudio_Page/TryOnStudio'));

function App() {
  return (
    <Router>
      <Header />
      <Suspense fallback={<div style={{ minHeight: '60vh' }} />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kitchef" element={<Kitchef />} />
          <Route path="/AmazonScraper" element={<Amazon />} />
          <Route path="/NavigationApp" element={<Unavigate />} />
          <Route path="/PokémonPokédex" element={<Pokemon />} />
          <Route path="/HighlightsCreator" element={<Highlights />} />
          <Route path="/RoyalCatsNFT" element={<NFT />} />
          <Route path="/IoTInventions" element={<IoT />} />
          <Route path="/MobileApps" element={<Applications />} />
          <Route path="/GraphicDesign&UI/UX" element={<GraphicDesign />} />
          <Route path="/UnrealEngineSimulation" element={<UnrealEngine />} />
          <Route path="/DocsAIChat" element={<DocksAIChat />} />
          <Route path="/VirtualTry-OnStudio" element={<TryOnStudio />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;
