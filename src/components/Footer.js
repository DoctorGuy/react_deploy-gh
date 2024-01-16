import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
      <div className='footer-container'>
        <section className='footer-subscription'>
          <p className='footer-subscription-heading'>
            Message me on <a href="https://www.linkedin.com/in/elliott-wills/" target="_blank" rel="noopener noreferrer">LinkedIn</a> and let’s talk! Check me out on <a href="https://github.com/DoctorGuy" target="_blank" rel="noopener noreferrer">Github</a> and see my past and current projects in more detail.
          </p>
        </section>
        <section className='social-media'>
          <div className='social-media-wrap'>
            <div className='footer-logo'>
              <Link to='/' className='social-logo'>
                Elliott Wills
                <i className='fab fa-typo3' />
              </Link>
            </div>
            <small className='website-rights'>© Elliott Wills, All Rights Reserved 2024</small>
          </div>
        </section>
      </div>
    );
  }
  
  export default Footer;