import React from 'react'
import './Section.scss'
import { useTranslation } from 'react-i18next'
import afr from '../../assets/afr.jpg'
import air from '../../assets/airplane.jpg'
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
const Section = ({imgg,shahar,davlat,textjon}) => {
    const {t,i18n} = useTranslation();
  return (
    <div>
        <div className="section">
            <div className="container">
                <h1 className='section-title'>
                    {t("sectionTitle")}
                </h1>
                <p className="section-text">
                    {t("sectionText")}
                </p>
                <br />
                <div className="box">
      
      <div className='box-wrap'>
      <img src={afr} alt=""  className='box-img'  style={{
          borderRadius: '8px',
      }}/>
      <ul className="box-list">
          <li className="box-item">
             <div>
             <h3 className="box-title">{t("shaharjon1")}</h3>
              <p  className='box-text'>{t("davlatjon1")}</p> <br />
             </div>
             <Button  name={t("button2")}/>

          </li>
          <li className="box-item">
              <p className="box-text">{t("textjon1")}</p>
          </li>
        
           
          {/* <hr  className='box-hr'/> */}
        
      </ul>
      
    </div>
    <hr  style={{width:1000,margin:"40px 0",opacity:0.2}} />
    
    </div>


    <div className="box">
      
      <div className='box-wrap'>
      <img src={air} alt=""  className='box-img'  style={{
          borderRadius: '8px',
      }}/>
      <ul className="box-list">
          <li className="box-item">
             <div>
             <h3 className="box-title">{t("shaharjon")}</h3>
              <p  className='box-text'>{t("davlatjon")}</p> <br />
             </div>
             <Button  name={t("button2")}/>

          </li>
          <li className="box-item">
              <p className="box-text">{t("textjon2")}</p>
          </li>
          {/* <hr className='box-hr' /> */}
         
      
        
      </ul>
      
    </div>
    <hr  style={{width:1000,margin:"40px 0",opacity:0.2}} />
    
    </div>
            </div>
        </div>

      
    </div>
  )
}

export default Section
