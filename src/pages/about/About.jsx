import React from 'react'
import { TiTick } from "react-icons/ti";
import './About.css'
import aboutImg from '../../assets/images/ak-img1.jpg'
import aboutVid from '../../assets/videos/automation.mp4'
const About = () => {
  return (
    <>
        <div className='about-container' id='about'>
            <div className='about-left'>
                <p className='about-tag'>About AK</p>
                <h2 className='about-title'>Have Access to Safe, Smart and Secure life</h2>
                <p className='about-para'>We believe in making homes smarter, safer, and more convenient. Our range of smart home products and services are designed to simplify your life and give you greater control over your home environment.</p>
                <ul className='about-list'>
                    <li><span><TiTick /></span> Smart Home Basics</li>
                    <li><span><TiTick /></span> Smart Fan</li>
                    <li><span><TiTick /></span> Smart Light</li>
                    <li><span><TiTick /></span> Smart AC</li>
                </ul>
                <div className='about-btn-container'>
                <button className='about-btn'>Discover Me</button> 
                </div>
              
            </div>
            <div className='about-right'>
                <div className='image-container'>
                    <img src={aboutImg}/>
                </div>
                <div className='video-container'>
                    <video src={aboutVid} controls/>
                </div>
            </div>
        </div>
      
    </>
  )
}

export default About
