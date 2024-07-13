import React from 'react'
import './Herojon.scss'
import Button from '../Button/Button'
import { GlobalOutlined, HomeOutlined, UserOutlined } from '@ant-design/icons'
import { useTranslation } from 'react-i18next'
const Herojon = ({city,aholi,area,price}) => {
    const { t, i18n } = useTranslation();
  return (

    <div>
        <div className="herojon">
            <div className="container">
                <div className="herojon-box">
                    <h2 className="herojon-subtitle">{t("hero")}</h2>
                    <h1 className="herojon-title">{city}</h1>
                    <Button name={t('button1')}/>
                     
                  <ul className="herojon-list">
                    <li className="herojon-item">
                    <div className="herojon-img-box">
                
                   <UserOutlined />
                   </div>
                        <p className="herojon-text">
                       {t("aholi")} <br /><span>{aholi}</span>
                        </p>
                    </li>
                    <li className="herojon-item">
                    <div className="herojon-img-box">
                    <GlobalOutlined />
                   </div>
                        <p className="herojon-text">
                       {t("area")} <br /><span>{area}</span>
                        </p></li>
                    <li className="herojon-item">
                   
                    <div className="herojon-img-box">
                    <HomeOutlined />
                   </div>
                        <p className="herojon-text">
                        {t("price")} <br /><span>{price}</span>
                        </p></li>
                    <li className="herojon-item2"><Button name={t("button2")}/></li>
                  </ul>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Herojon
