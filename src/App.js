import React from 'react';

import './css/animate.css';
import './css/basic.css';
import './css/fontawesome.css';
import './css/jarallax.css';
import './css/layout.css';
import './css/magnific-popup.css';
import './css/owl.carousel.css';
import './css/swiper.css';

import './App.css';

import Header from './components/Header';
import LeftImage from './components/LeftImage';
import Bios from './components/Bios';
import  AboutMe from './components/AboutMe';
import Services from './components/services';

function App() {
  return (
    <div className=" container App">
      <Header />
      <div className={'wrapper'}>
        <LeftImage />
        <Bios />
        <AboutMe />
        <Services />
      </div>
    </div>
  );
}

export default App;
