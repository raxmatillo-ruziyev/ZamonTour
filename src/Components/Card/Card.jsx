import React from 'react'
import './Card.scss'
import Button from '../Button/Button'
import { CarOutlined, HddOutlined, RightOutlined, SendOutlined } from '@ant-design/icons'
import { useTranslation } from 'react-i18next'

const Card = ({city,number,images}) => {
    const { t, i18n } = useTranslation();
  return (
    <>
    <div className="card">
    <img src={images} alt="" className='card-img'  />
        <div className="card-box">
            <h1 className='card-title'>{city}</h1>
            <p className='card-text'><i id='card-icon' className='fa fa-users'></i>{number}{t("card-title2")}<span className='cars-span'>{t("card-title1")}</span></p>
            <hr className='card-hr' />
            <h2 className="card-subtitle">{t("card-subtitle")}</h2>
            <ul className='card-list'>
                <li className="card-item">  
             <i id='card-icon' className='fa fa-taxi'></i>
                <p className='card-text'>{t( "card-text1")}</p> </li>
                <li className="card-item">
                <i id='card-icon' className='fa fa-plane'></i>
                    <p className='card-text'>{t( "card-text2")}</p>
                </li>
                <li className="card-item">
                <i id='card-icon' className='fa fa-building'></i>
                    <p className='card-text'> {t( "card-text3")}</p>
                </li>
            </ul>
          <div style={{marginLeft:'10px'}}>  <Button name={t("button3")}/></div>
         

        </div> 
    </div>
    </>
  )
}

export default Card
