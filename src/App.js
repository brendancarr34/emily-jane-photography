import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage'; // Adjust the path if necessary
import HomePage from './pages/HomePage';
import Product from './pages/Product';
import { CartProvider } from './components/CartContext'; // Adjust the path if necessary
import Cart from './pages/Cart';
import Checkout from './pages/Checkout'; // Adjust the path if necessary
import Menu from './components/Menu';
import AboutMe from './pages/AboutMe';

function App() {
    return (
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/collection" element={<HomePage />} />
            <Route path="/product/:imageId" element={<Product />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/about' element={<AboutMe />} />
            <Route path='*' element={<div style={{ marginTop: '200px', textAlign: 'center' }}><Menu />404 Not Found</div>} />
          </Routes>
        </Router>
      </CartProvider>
    );
}

export default App;
