import React from 'react'
import './Second.css'
import { FiPhoneCall } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { MdSupportAgent } from "react-icons/md";
import { FaBusinessTime } from "react-icons/fa6";




const Second = () => {
  return (
    <>
        <div className='Second-container'>
            <div className='firsthalf'>
              <div className='first-icon'>
                <FiPhoneCall className='cell-icon'/>
              </div>
              <div className='number'>
                <div>Hotline</div>
                <div>(+91)9985985831</div>
              </div>
            
            </div>
            
            <div className='cards-container'>
                <div className='card card1'>
                  <div className='card-icon'><IoSettingsOutline className='icon'/></div>
                  <div className='card-data'>
                    <h3>Setup & Installation</h3>
                    {/* <p>Lorem ipsum dolor sit amet.</p> */}
                  </div>
                </div>

                <div className='card card2'>
                  <div className='card-icon'><MdSupportAgent  className='icon'/></div>
                  <div className='card-data'>
                    <h3>Consultation</h3>
                    {/* <p>Lorem ipsum dolor sit amet.</p> */}
                  </div>
                </div>

                <div className='card card3'>
                  <div className='card-icon'><FaBusinessTime className='icon'/></div>
                  <div className='card-data'>
                    <h3>24/7 Support</h3>
                    {/* <p>Lorem ipsum dolor sit amet.</p> */}
                  </div>
                </div>

            </div>
        </div>
      
    </>
  )
}

export default Second
