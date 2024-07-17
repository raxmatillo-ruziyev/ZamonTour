import React from 'react'
import './Contactjon.scss'
import { useTranslation } from 'react-i18next'
import Button from '../Button/Button';
import Wrap from '../Wrap/Wrap';
const Contactjon = () => {
    const {t,i18n} = useTranslation();
  return (
    <>
    <div className="contactjon" id='contact'>
        <div className="container">
            <div className="contactjon-box">
                <h3 className="contactjon-subtitle">{t("contactjon-title")}</h3>
                <h1 className="contactjon-title">{t("contactjon-title")}</h1> 
                <br /> <Button name={t("button2")}/>
            </div>

            <div className='conttactjon-content'>
            <ul className="contactjon-list">
                <li className="contactjon-item">
                    <Wrap wrapTitle={t("wrapTitle")} imagess={<i  style={{color:"#00CED1"}}  className='fa fa-phone'></i>} h={"tel:+998999999999"} data={"+998 99 999 99 99"}/>
                </li>
                <li className="contactjon-item">
                    <Wrap wrapTitle={t("wrapTitle2")} imagess={<i style={{color:"#00CED1"}} className='fa fa-envelope'></i>} h={"mailto:zamonbiznestour@mail.ru"} data={"zamonbiznestour@mail.ru"}/>
                </li>
                <li className="contactjon-item">
                    <Wrap wrapTitle={t("wrapTitle3")} imagess={<i style={{color:"#00CED1"}} className='fa fa-map-marker'></i>} h={"https://www.google.com/maps/place/15/25,+Chilanzar+-+9,+Tashkent+city"} data={"15/25, Chilanzar - 9 "}/>
                </li>
            </ul>
            </div>

        </div>
    </div>
    </>
  )
}

export default Contactjon
