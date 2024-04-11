import React from 'react'
import './Offers.css'

import offerImg from '../../assets/images/bg2.png'
const Offers = () => {
  return (
    <>
        <div className='offers-container' style={{backgroundImage:`url(${offerImg})`}}>
            <div className='offers-left'>
                <h1 className='offer-title'>Built Your Own Smart Habitation Now, and Get 20% Off</h1>
                <p className='offer-text'>Upgrade your living space with the latest smart home technology and enjoy the convenience and comfort it brings. With our range of smart devices, you can control your home's lighting, temperature, security, and entertainment systems with just a touch of a button or a simple voice command.</p>
                <button className='offer-btn'>Discover Me</button>
            </div>
        </div>
      
    </>
  )
}

export default Offers
