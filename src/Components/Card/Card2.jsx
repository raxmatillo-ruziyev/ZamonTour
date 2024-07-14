import React from 'react'
import './Card.scss'
import Button from '../Button/Button'
import { CarOutlined, HddOutlined, RightOutlined, SendOutlined } from '@ant-design/icons'
import { useTranslation } from 'react-i18next'

const Card2 = ({city,number,images}) => {
    const { t, i18n } = useTranslation();
  return (
    <>
    <div className="card">
    <img src={images} alt="" className='card-img'  />
        <div className="card-box">
            <h1 className='card-title'>{city}</h1>
           
            <li className="card-item">  
             <p className='card-text'><i id='card-icon' className='fa fa-users'></i>    {number}    {t("card-title")}</p></li>
            <hr className='card-hr' />
            <h2 className="card-subtitle">{t( "card-subtitle2")}</h2>
            <ul className='card-list'>
                <li className="card-item">  
             <i id='card-icon' className='fa fa-tags'></i>
                <p className='card-text'>{t( "card-text6")}</p> </li>
                <li className="card-item">
                <i id='card-icon' className='fa fa-clock-o'></i>
                    <p className='card-text'>{t( "card-text7")}</p>
                </li>
                <li className="card-item">
                <i id='card-icon' className='	fa fa-check'></i>
                    <p className='card-text'> {t( "card-text8")}</p>
                </li>
            </ul>
          <div style={{marginLeft:'10px'}}>  <Button name={t("button3")}/></div>
         

        </div> 
    </div>
    </>
  )
}

export default Card2
