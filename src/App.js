import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage'; // Adjust the path if necessary
import HomePage from './pages/HomePage';

function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/collection" element={<HomePage />} />
        </Routes>
      </Router>
    );
}

export default App;
