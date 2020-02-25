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
import Services from './components/Services';
import Pricing from './components/Pricing';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills.jsx';
import Contact from './components/Contact';

function App() {
  return (
    <div className=" container App">
      <Header />
      <div className={'wrapper'}>
        <LeftImage />
        <Bios />
        <AboutMe />
        <Services />
        <Pricing />
        <Experience/>
        <Education/>
        <Skills/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
