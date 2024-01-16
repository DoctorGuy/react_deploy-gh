import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out some of my feats!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='R_fantasy.png'
              text='Fantasy Football'
              label='R-Projects'
              path='/Rprojects'
            />
            <CardItem
              src='wine_predictor.jpeg'
              text='Machine Learning'
              label='Python Projects'
              path='/Python'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='Weather.jpeg'
              text='Weather and Calender Device'
              label='Raspberry Pi'
              path='/Raspberrypi'
            />
            <CardItem
              src='Me_and_my_dog.jpg'
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