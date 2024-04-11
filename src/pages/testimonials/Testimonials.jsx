import React from 'react'
import { IoLayersOutline } from "react-icons/io5";
import { BsPeople } from "react-icons/bs";
import testimoninaimg from '../../assets/images/testimonial.png'
import { ImQuotesLeft } from "react-icons/im";
import { ImQuotesRight } from "react-icons/im";

import './Testimonials.css'

const Testimonials = () => {
  return (
    <>
        <div className='testimoninal-container'>
            <div className='testimonial-left'>
                <p className='testimonial-subhedding'>TESTIMONINALS</p>
                <h2 className='testimonial-hedding'>What They Say</h2>
                <p className='testimonial-text'>Transform your home, simplify your life with smart automation!</p>
                <div className='testimonial-left-card-container'>
                    <div className='testimonial-left-card'>
                        <div className='testimonial-icon'><IoLayersOutline className='testimonial-icon'/></div>
                        <h4 className='testiomonial-counter'>2+</h4>
                        <p className='testiomonial-undertext'>Projects in progress</p>
                    </div>

                    <div className='testimonial-left-card'>
                        <div className='testimonial-icon'><BsPeople className='testimonial-icon'/></div>
                        <h4 className="testiomonial-counter">100%</h4>
                        <p className='testiomonial-undertext'>Customer Satisfied</p>
                    </div>
                </div>


            </div>
            <div className='testimonial-right'>
                {/* <img src={testimoninaimg} className='testimonial-img'/> */}
                <span>
                <ImQuotesLeft className='quot'/>
                </span>
                <span>
                <h3>
                    Ak Technologies has truly revolutionized my home with their exceptional home automation solutions. Their attention to detail and commitment to quality are unparalleled. From seamlessly integrating smart lighting and climate control to providing intuitive security systems, Ak Technologies has turned my house into a modern marvel of convenience and efficiency. I highly recommend their services to anyone looking to elevate their living space to the next level. <b>-Hydrotribe</b>
                </h3>
                </span>

                <span>
                <ImQuotesRight className='quot quot-r' />
                </span>
                
            </div>
        </div>
      
    </>
  )
}

export default Testimonials
