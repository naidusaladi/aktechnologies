import React from 'react'
import './Services.css'
import { FiDatabase } from "react-icons/fi";
import { IoDownloadOutline } from "react-icons/io5";
import { IoMicOutline } from "react-icons/io5";
import { FiBatteryCharging } from "react-icons/fi";
import { TbAccessPoint } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import servicesBackground from "../../assets/images/ak-img2.jpg"

const Services = () => {
  return (
    <>
      <div className='services-container' style={{backgroundImage: `url(${servicesBackground})`}} id='services'>
            <h1 className='services-title'>Making Lives easier than before</h1>
            <div className='services-cards-container'>
                <div className='services-card'>
                    <div className='card-icon'><FiDatabase className='icon'/></div>
                    <div className='card-data'>
                        <h2>Data Safety</h2>
                        <p> Ensure your physical safety by being aware of your surroundings, following safety guidelines, and taking precautions in potentially risky situations. For digital safety, use strong, unique passwords for your accounts and be cautious of phishing attempts and suspicious links.</p>
                    </div>
                </div>

                <div className='services-card'>
                    <div className='card-icon'><IoDownloadOutline className='icon'/></div>
                    <div className='card-data'>
                        <h2>Plug & Play</h2>
                        <p>Our easy-to-use devices are plug and play, allowing you to set up your smart home quickly and effortlessly. No technical expertise required!</p>
                    </div>
                </div>

                <div className='services-card'>
                    <div className='card-icon'><IoMicOutline className='icon'/></div>
                    <div className='card-data'>
                        <h2>Voice Control</h2>
                        <p>Control your smart home devices with simple voice commands. Enjoy hands-free convenience with our voice control integration.</p>
                    </div>
                </div>

                <div className='services-card'>
                    <div className='card-icon'><FiBatteryCharging className='icon'/></div>
                    <div className='card-data'>
                        <h2>Save Energy</h2>
                        <p>Reduce your energy consumption and lower your utility bills with our energy-efficient smart home solutions. Monitor and manage your energy usage with ease.</p>
                    </div>
                </div>


                <div className='services-card'>
                    <div className='card-icon'><TbAccessPoint className='icon'/></div>
                    <div className='card-data'>
                        <h2>Remote Access</h2>
                        <p>Access and control your smart home devices from anywhere in the world with our remote access feature. Stay connected and in control, no matter where you are.</p>
                    </div>
                </div>

                <div className='services-card'>
                    <div className='card-icon'><MdSecurity className='icon'/></div>
                    <div className='card-data'>
                        <h2>Safety Home</h2>
                        <p>Ensure the safety and security of your home with our smart home security systems. Receive instant alerts and monitor your home 24/7 for peace of mind.</p>
                    </div>
                </div>
            </div>
      </div>
    </>
  )
}

export default Services
