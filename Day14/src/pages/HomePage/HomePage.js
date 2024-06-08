

import React from 'react';
import './HomePage.css';
import Navbar from '../Navbar/Navbar';

const HomePage = () => {
  return (
    <div>
      <Navbar page="home" />
      <div className="hero-section">
        <div className='hero-inner'>
            <h1>Welcome to our website!</h1>
            <p>This is a sample homepage.</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;