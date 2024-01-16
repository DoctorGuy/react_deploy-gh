import React from 'react';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <image  src='/images/car-ski.jpg'/>
      <h1>The Data Nomad</h1>
      <p>Crafting The Next Data Adventure</p>
    </div>
  );
}

export default HeroSection;