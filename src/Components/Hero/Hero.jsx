import React from 'react';
import { Carousel } from 'antd';
import './Hero.scss'
import Herojon from '../Herojon/Herojon';
const Hero = () => (
  <Carousel autoplay
  autoplaySpeed={4000}
  dots={true}

>
   
      <div className='hero-box'>
   
        <Herojon city={'Dubai'} aholi={'67.41 M'} area={'551.500 KM2'} price={'$425.600'}/>

      </div>
  


   
      <div className='hero-box1'>
      <Herojon city={'Antalya'} aholi={'8.66 M'}area={'41.290 KM2'}price={'$1.100.200'}/>
      </div>
 


  
      <div className='hero-box2'>
      <Herojon city={'Istanbul'} aholi={'44.48 M'} area={'275.400 KM2'}price={'$946.000'}/>
      </div>

   
      <div className='hero-box3'>
      <Herojon city={'Sharm El-Sheikh'} aholi={'69.86 M'} area={'513.120 KM2'}price={'$165.450'}/>
      </div>
  </Carousel>
);
export default Hero;
