import React from 'react'
import './Box.scss'

import Button from '../Button/Button'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
const Box = ({ textjon, shahar, davlat, imgg }) => {
    const { t, i18n } = useTranslation();
    return (
        <div >
            <div className="box">

                <div className='box-wrap'>
                    <img src={imgg} alt="" className='box-img' style={{
                        borderRadius: '8px',
                    }} />
                    <ul className="box-list">
                        <li className="box-item">
                            <div>
                                <h3 className="box-title">{shahar}</h3>
                                <p className='box-text'>{davlat}</p> <br />
                            </div>
                            <Button name={t("button2")} />

                        </li>
                        <li className="box-item">
                            <p className="box-text">{textjon}</p>
                        </li>
                        <hr className='box-hr' />
                        <li className="box-item">
                            <div className="content-box">
                                <ul className="content-list">
                                    <li className="content-item">
                                        <i style={{
                                            margin:"5px 0"
                                        }}  className='fa fa-user'> </i>
                                        <p className='content-text'>  8.66 M</p>
                                    </li>
                                    <li className="content-item">
                                        <i style={{
                                            margin:"5px 0"
                                        }} className='fa fa-globe'></i>
                                        <p className='content-text'> 4.114 km2</p>
                                    </li>
                                    <li className="content-item">
                                        <i style={{
                                            margin:"5px 0"
                                        }} className='fa fa-home'></i>
                                        <p className='content-text'> $1.100.200</p>
                                    </li>
                                </ul>

                            </div>
                        </li>
                        <hr className='box-hr' />
                        <li className="box-item">
                            <a href='#contact'> <button className='box-button'>{t("button4")} </button></a>
                        </li>
                    </ul>

                </div>


            </div>
        </div>

    )
}

export default Box
