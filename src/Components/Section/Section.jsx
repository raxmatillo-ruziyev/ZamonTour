import React from 'react'
import './Section.scss'
import { useTranslation } from 'react-i18next'
import afr from '../../assets/afr.jpg'
import air from '../../assets/airplane.jpg'
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

const Section = ({ imgg, shahar, davlat, textjon }) => {
    const { t, i18n } = useTranslation();
    return (
        <div>
            <div className="section" id='about'>
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
                            <img src={afr} alt="" className='box-img' style={{
                                borderRadius: '8px',
                            }} />
                            <ul className="box-list">
                                <li className="box-item">
                                    <div>
                                        <h3 className="box-title">{t("shaharjon1")}</h3>
                                        <p className='box-text'>{t("davlatjon1")}</p> <br />
                                    </div>
                                    <Button name={t("button2")} />

                                </li>
                                <li className="box-item">
                                    <p className="box-text">{t("textjon1")}</p>
                                </li>

                            </ul>

                        </div>

                    </div>
                    <hr style={{
                        width: "100%",
                        marginTop: "60px",
                        marginBottom: "50px"
                    }} />

                    <div className="box">

                        <div className='box-wrap'>
                            <img src={air} alt="" className='box-img' style={{
                                borderRadius: '8px',
                            }} />
                            <ul className="box-list">
                                <li className="box-item">
                                    <div>
                                        <h3 className="box-title">{t("shaharjon")}</h3>
                                        <p className='box-text'>{t("davlatjon")}</p> <br />
                                    </div>
                                    <Button name={t("button2")} />

                                </li>
                                <li className="box-item">
                                    <p className="box-text">{t("textjon2")}</p>
                                </li>

                            </ul>

                        </div>

                    </div>
                    <hr style={{
                        width: "100%",
                        marginTop: "60px",
                        marginBottom: "50px"
                    }} />
                </div>
            </div>
        </div>
    )
}

export default Section;
