import React from 'react'
import './Footer.scss'
import Button from '../Button/Button'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
const Footer = () => {
    const {t,i18n} = useTranslation()
  return (
    <>
    <footer className="footer">
        <div className="container">
          <div className="footer-box">
           <div> <h1 className="footer-title">{t("footerTitle")}</h1>
            <p className="footer-text">{t("footerText")}</p></div>
            <div className="footer-btn">
                <Button name={t("button5")}/>
            </div>
          </div>
          <Link className='footer-link' to={"/"}>Copyright © 2024 Zamon Business Tour. All rights reserved.</Link>
        </div>
    </footer>

      
    </>
  )
}

export default Footer
