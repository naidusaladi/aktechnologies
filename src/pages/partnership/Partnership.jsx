import React from 'react'
import './Partnership.css'
import aditya from '../../assets/images/aditya.png'
import biocraft from '../../assets/images/biocrafts.png'
// import reelux from '../../assets/images/reelux.PNG'
import inno3d from '../../assets/images/in3d.jpg'
import speedCopy from '../../assets/images/speed_copy2.png'
import hydrotribe from '../../assets/images/hydrotribe.png'

const Partnership = () => {
  return (
    <>
        <div className='partnership-container' id='page'>
            <h3 className='partnership-title'>Our Global Partnership</h3>
            {/* <p className='partnership-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi laborum voluptate quisquam eveniet ea libero!</p> */}
            <div className='company-container'>
                <div className='company'>
                    <img src={aditya}/>
                </div>

                <div className='company'>
                    <img src={biocraft}/>
                </div>

                {/* <div className='company'>
                    <img src='src\assets\images\reelux.PNG'/>
                </div> */}
                
                <div className='company'>
                    <img src={inno3d}/>
                </div>


                <div className='company'>
                    <img src={speedCopy}/>
                </div>

                <div className='company'>
                    <img src={hydrotribe}/>
                </div>

            </div>
        </div>
      
    </>
  )
}

export default Partnership
