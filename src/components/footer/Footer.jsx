import React from 'react'
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaYoutubeSquare } from "react-icons/fa";
import aklogo from "../../assets/images/lg.png"
import './Footer.css'
const Footer = () => {
  return (
    <>
     <div className='footer-container' id='contact'>
        <div className='footer-cover'>
            <div className='footer-company-icon'><img src={aklogo} className='footer-logo'/>Technologies</div>
            <p className='footer-para'>A system designed for your ease</p>
            <div className='footer-icons'>
               <FaSquareFacebook className='footer-icon f' />
               <FaSquareInstagram className='footer-icon i' />
               <FaYoutubeSquare className='footer-icon y' />
               
            </div>
        </div>
        <div className='footer-support'>
            <div>
                <h3 className='footer-underline'>Support</h3>
            </div>
            <p>Contact Support</p>
            <p>FAQ</p>
            <p>Pravicy Policy</p>
            <p>Terms & Conditions</p>
        </div>
        <div className='footer-links'>
            <div>
                    <h3 className='footer-underline'>Useful Link</h3>
                    {/* <div className='footer-underline'></div> */}
                </div>
                <p>About Us</p>
                <p>Services</p>
                <p>Portfolio</p>
                <p>Blog</p>

            </div>
     </div>
    
    </>
  )
}

export default Footer
