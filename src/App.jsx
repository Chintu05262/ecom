import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop'; // adjust path as needed
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Products from './components/Products/Products';
import Details from './components/Details/Details'; // Adjusted the case for consistency
import './App.css';
import './index.css';

const App = () => {
  return (
    <Router>
       <ScrollToTop /> {/* Add this just inside the Router */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/details" element={<Details />} />


      </Routes>

    </Router>
  );
};

export default App;
