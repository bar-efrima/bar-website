import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home'; // Home contains all sections
import Kitchef from './pages/Kitchef/Kitchef'; // Kitchef project page
import Header from './components/Header';

function App() {
  return (
    
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kitchef" element={<Kitchef />} />
      </Routes>
    </Router>
  );
}

export default App;
