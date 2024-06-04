// import React from 'react'
// import './HomePage.css'
// import Navbar from '../Navbar/Navbar'

// const HomePage = () => {
//     return (
//         <div>
//             <Navbar page="home" />
//             Homepage
//         </div>
//     )
// }

// export default HomePage

import React from 'react';
import './HomePage.css';
import Navbar from '../Navbar/Navbar';
// import Footer from '../Footer/Footer';

const HomePage = () => {
  return (
    <div>
      <Navbar page="home" />
      <div className="hero-section">
        <div className='hero-inner'>
            <h1>Welcome to our website!</h1>
            <p>This is a sample homepage.</p>
            <button>Learn More</button>
        </div>
      </div>
      {/* <div className="features-section">
        <h2>Our Features</h2>
        <ul>
          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Feature 3</li>
        </ul>
      </div> */}
    </div>
  );
};

export default HomePage;