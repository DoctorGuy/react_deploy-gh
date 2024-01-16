import React from 'react';
import '../../App.js'
import Footer from '../Footer.js';


export default function aboutme() {
    return (
      <>
    <h1 className='aboutme'>About Me</h1>
    <div className="cards__container">
      <div className = "cares__wrapper">
    <div className="cards__item">
    <img  src="seattle.jpg" alt="Seattle Sunset" className="image"></img>
    <p className="text">I am a 29-year-old data professional living in the Greater Seattle Area. Currently I am working for Qualtrics as a Data analyst focusing on the CAHPS
       (Consumer Assessment of Healthcare Providers and Systems) programs. I have been fortunate enough to lead out the implementation of our OAS (Outpatient and Ambulatory Services)
        portion of our program for our internal teams. Meaning I have been critical in ensuring our programs quality through the establishment and tracking of KPI’s, automation
         of reports and ETL 
      functions, and so much more. There are some unique challenges to working in a program like this, and I am excited I get to build out so many cool solutions.</p>
      </div>
    <div className="cards__item">
    <img src="grad_photo.jpg" alt="Graduation Photo" className="image"></img>
    <p >I completed my Master of Public Health with a concentration in Social and Behavioral Sciences in 2022 from the University of Washington 
      and my Bachelor of Science in Psychology from Washington State University. Going to both state schools, I feel uniquely qualified to answer 
      which school is best. The answer is, of course, Washington State University! I worked hard to 
      ensure that I had a firm grasp on advanced statistical and research methodologies, as well as the ability to clearly articulate them to a wide variety of audiences. </p>
      
      </div>
    <div className="cards__item">
    <img src="kona_chain.jpg" alt="Pug wearing a chain" className="image"></img>
    <p className="text">As a rather large man, I just had to get a dog to compliment my stature so of course, I got a pug. You’ll often hear her snooting in the background or barking at,
       what I can only assume, must be ghosts. She loves to sit in bags, laps, or cat bed and has some drippy outfits. </p>
       </div>
    <div className="cards__item">
    <img src="skiing.jpeg" alt="View from the ski lift" className="image" ></img>
    <p className="text">In my free time, I love skiing, boxing, and building. Being active is a core component to who I am, as long as the activity is not distance running. I especially love learning new and weird skills.
       I’ve recently taken up learning how to brew mead, and despite not doing enough research on how long it takes to brew mead, I am excited to have my first aged bottle in May 2024! </p>
       
       </div>
    <br></br>
    <div className="cards__item">
    <img src="Me_and_my_dog.jpg" alt="View from the ski lift" className="image"></img>
    <p className="text" >I am always happy to chat, whether that is about what the future holds, talk about the projects in more detail, or networking, please feel free to hit me up on LinkedIn!
       A link can be found at the bottom of this page. </p>
    </div>
    </div>
    </div>
    <Footer />
    </>);
  }