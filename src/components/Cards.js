import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import image1 from './R_fantasy.png'
import image2 from './wine_predictor.jpeg'
import image3 from './Weather.jpeg'
import image4 from './Me_and_my_dog.JPG'

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out some of my feats!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={image1}
              text='Fantasy Football'
              label='R-Projects'
              path='/Rprojects'
            />
            <CardItem
              src={image2}
              text='Machine Learning'
              label='Python Projects'
              path='/Python'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={image3}
              text='Weather and Calender Device'
              label='Raspberry Pi'
              path='/Raspberrypi'
            />
            <CardItem
              src={image4}
              text='Education and Accomplishments'
              label='Adventure'
              path='/about-me'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;