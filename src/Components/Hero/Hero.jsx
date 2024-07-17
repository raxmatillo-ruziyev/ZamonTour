import React from 'react';
import { Carousel } from 'antd';
import './Hero.scss'
import Herojon from '../Herojon/Herojon';
import { useTranslation } from 'react-i18next';
const Hero = () => {
  const {t,i18n}= useTranslation();
return(
  <Carousel autoplay
  autoplaySpeed={4000}
  dots={true}

>
   
      <div className='hero-box'>
   
        <Herojon city={t("city12")} aholi={'67.41 M'} area={'551.500 KM2'} price={'$425.600'}/>

      </div>
  


   
      <div className='hero-box1'>
      <Herojon city={t("city13")} aholi={'8.66 M'}area={'41.290 KM2'}price={'$1.100.200'}/>
      </div>
 


  
      <div className='hero-box2'>
      <Herojon city={t("city23")} aholi={'44.48 M'} area={'275.400 KM2'}price={'$946.000'}/>
      </div>

   
      <div className='hero-box3'>
      <Herojon city={t("city14")} aholi={'69.86 M'} area={'513.120 KM2'}price={'$165.450'}/>
      </div>
  </Carousel>
)};
export default Hero;
