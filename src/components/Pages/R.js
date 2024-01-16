import React from 'react';
import '../../App.js'
import Footer from '../Footer.js';
import MyDashboard from '../ShinyDashbaordComponent.js';


export default function Rproj() {
    return (
    <>
    <h1 className='Rproj'>R Projects</h1>
    < MyDashboard/>
    < Footer/>
    </>);
  }