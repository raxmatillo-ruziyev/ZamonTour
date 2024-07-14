import React from 'react'
import './Herojon.scss'
import Button from '../Button/Button'
import { GlobalOutlined, HomeFilled, HomeOutlined, UserOutlined } from '@ant-design/icons'
import { useTranslation } from 'react-i18next'
const Herojon = ({ city, aholi, area, price }) => {
  const { t, i18n } = useTranslation();
  return (

    <div>
      <div className="herojon">
        <div className="container">
          <div className="herojon-box">
            <h2 className="herojon-subtitle">{t("hero")}</h2>
            <h1 className="herojon-title">{city}</h1>
            <Button name={t('button1')} />
             <br /><br /><br /><br />
            <ul className="herojon-list">
              <li className="herojon-item">
                <div className="herojon-img-box">

                  <UserOutlined />
                </div>
                <dir className="herojon-boxcha">
                  <p className="herojon-text">
                    {t("aholi")} <br />
                  </p><b>{aholi}</b>
                </dir>
              </li>
              <li className="herojon-item">
                <div className="herojon-img-box">
                  <GlobalOutlined />
                </div>
                <div className="herojon-boxcha">
                  <p className="herojon-text">
                    {t("area")} <br />
                  </p><b>{area}</b></div></li>
              <li className="herojon-item">

                <div className="herojon-img-box">
                <HomeFilled />
                </div>
                <div className="herojon-boxcha">
                  <p className="herojon-text">
                    {t("price")} <br />
                  </p><b>{price}</b></div>
              </li>
              <li className="herojon-item"><Button name={t("button3")} /></li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Herojon
