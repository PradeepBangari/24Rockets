import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../src/components/Navbar.js';
import Header from '../src/components/Header.js';
import Home from '../src/components/Home';
import Solutions from '../src/components/Solutions';
import About from '../src/components/About';
import Contact from '../src/components/Contact';
import Footer from '../src/components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
        <Navbar />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;