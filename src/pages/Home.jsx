import React from 'react';
import About from '../components/About';
import Offer from '../components/Offer';
import Features from '../components/Features';
import Project from '../components/Project';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Blog from '../components/Blog';
const Home=()=>{
    return (
        <>
          <div><About/></div>
          <div><Offer/></div>
          <div><Features/></div>
          <div><Project/></div>
          <div><Services/></div>
          <div><Testimonials/></div>
          <div><Blog/></div>
        </>
        )
}
export default Home;