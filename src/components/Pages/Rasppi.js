import React from 'react';
import '../../App.css';
import Footer from '../Footer.js';

export default function Rasppi() {
  return (
    <>
      <h1 className='rasppi'>Weather and Calendar Device</h1>
      <h2>How it Started</h2>
      <p className = 'p-pages'>I was voted “Most Likely to Join a Zoom Meeting Two Minutes Late After a Slack Reminder”.
         I have a tendency to get really into a project and not see the little calendar reminders.
          In an office, I have the luxury of seeing a coworker stand up so remind me that I need to 
          get going as well, but at home, it’s just me. I needed something bigger. I decided to create
           a reminder device that would flash bright warnings at me from under my monitor.
         Somewhere along the way, I decided that having a blank screen outside of a meeting was a 
         waste of space, so I decided to have it display the weather outside of my home office. </p>
         <br></br>
         <h2>Ingredient List:</h2>
         <ul className = 'ul-pages'>
          <li className = 'li-pages'>Raspberri Pi 3B+</li>
          <li className = 'li-pages'>Light panel</li>
          <li className = 'li-pages'>Google Calender API</li>
          <li className = 'li-pages'>Python</li>
          <li className = 'li-pages'>Weather API</li>
         </ul>
         <br></br>
         <h2>How it Went</h2>
         <br></br>
         <p className = 'p-pages'>After learning how to access the Google Developer suite, access their API, and get the Light Screen to display colors and
           images. I was left with a simple but effective reminder tool. Using a simple “While” Loop, the device searches for meetings
            once a minute and the weather, once an hour. In the first image (left), you can see the temperature displayed when there is no meeting
             within the next 15 minutes. The second image shows how the lights flashed when 
          I had a meeting coming up in 5 to 15 minutes. The last all white image flashes once a minute until the meeting starts, where it then sits blank until the meeting is over. 
         </p>
         <br></br>
         <div class="row">
          <div class="column">
            <img className = 'photo' src="Weather.jpeg" alt="Temperature-Display"></img>
          </div>
          <div class="column">
          <img className = 'photo' src="Greenlight.jpeg" alt="Green light"></img>
          </div>
          <div class="column">
          <img className = 'photo' src="Whitelight.jpeg" alt="White Light"></img>
          </div>
        </div>
         <h2>How it Ended</h2>
         <br></br>
         <p className = 'p-pages'>What a helpful little device! I learned just tons about working with sudo/bash terminal commands, 
          git pulls and merges, REST API's, and got to sharpen my python skills. I'm very happy with how it turned out and excited to see where it might go!</p>
          <br></br>
          <h2>Next Steps</h2>
          <br></br>
          <p className = 'p-pages'>As helpful as it is for meetings, I want to expand this into a device to track moisture levels in some of my houseplants and, ideally, automatically water them. Stay Tuned! </p>
      <Footer />
    </>
  );
}