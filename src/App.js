import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home'; // Home contains all sections
import Kitchef from './pages/Kitchef_Page/Kitchef'; // Kitchef project page
import Amazon from './pages/Amazon_Page/Amazon'; // Kitchef project page
import Unavigate from './pages/Unavigate_Page/Unavigate'; // Unavigate project page
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kitchef" element={<Kitchef />} />
        <Route path="/Amazon" element={<Amazon />} />
        <Route path="/Unavigate" element={<Unavigate />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
