import React from 'react'
import './Home.css'
import { FaAngleRight } from "react-icons/fa";
import backgroundImage from '../../assets/images/homepage.jpg'
import TypingEffect from '../../components/typeEffect/TypingEffect';

const Home = () => {
  const textArray = ['A system designed for your ease'];
  const typingSpeed = 90; // Speed of typing animation (in milliseconds)
  const deletingSpeed = 50; // Speed of deleting animation (in milliseconds)
  const pauseTime = 900; // Pause time between typing and deleting (in milliseconds)

  return (
    <>
        <div  style={{backgroundImage:`url(${backgroundImage})`}} className='home-container' id='home'>
            <h2 className='home-text-1'>It's Time <span>for</span> </h2>
            <h3 className='home-text-2'>Smart Living</h3>
            <h4 className='home-text-3'><TypingEffect 
              textArray={textArray}
              typingSpeed={typingSpeed}
              deletingSpeed={deletingSpeed}
              pauseTime={pauseTime}
            />
            </h4>
            <button className='home-btn'>Get Started <FaAngleRight /></button>
        </div>
      
    </>
  )
}

export default Home
