import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage'; // Adjust the path if necessary
import HomePage from './pages/HomePage';
import Product from './pages/Product';

function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/collection" element={<HomePage />} />
          <Route path="/product/:imageName" element={<Product />} />
        </Routes>
      </Router>
    );
}

export default App;
