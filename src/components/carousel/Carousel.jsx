// import Carousel from 'react-bootstrap/Carousel';
// import im1 from '../../../src/assets/images/c1.jpg'

// function Carouselin() {
//   return (
//     <div className='carousel-conatainer '>
//       <Carousel>
//         <Carousel.Item interval={1000}>
//           <image src={im1}/>
//           <Carousel.Caption>
//             <h3>First slide label</h3>
//             <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item interval={500}>
//         <image src={im1}/>
//           <Carousel.Caption>
//             <h3>Second slide label</h3>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//         <image src={im1}/>
//           <Carousel.Caption>
//             <h3>Third slide label</h3>
//             <p>
//               Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//             </p>
//           </Carousel.Caption>
//         </Carousel.Item>
//       </Carousel>
//     </div>
//   );
// }

// export default Carouselin;

import './Carousel.css'
import React from 'react'
import ourworkimg from '../../assets/images/c3.jpg'

const Carousel = () => {
  return (
    <div>
      <h1 className='carousel-title'>Our Works</h1>
      <div><img src={ourworkimg} className='carousel-img'/></div>
    </div>
  )
}

export default Carousel
