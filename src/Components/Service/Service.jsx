import React from 'react'
import './Service.scss'
import { useTranslation } from 'react-i18next'
import Box from '../Box/Box'
import dubai from '../../assets/dubai2.jpg'
import antalya from '../../assets/country-02.jpg'
import sharm from '../../assets/sharm2.jpg'
import istanbul from '../../assets/istanbul3.jpg'

const Service = () => {
    const {t ,i18n} = useTranslation()
  return (
    <>
    <div className="service">
        <div className="container">
        <h1 className='service-title'>
                    {t("serviceTitle")}
                </h1>
                <p className="service-text">
                    {t("serviceText")}
                </p>

                <br />
                <Box imgg={dubai} textjon={t("textjon")} shahar={t("shahar")} davlat={t("davlat")}/>
                <Box imgg={antalya} textjon={t("textjon4")} shahar={t("shahar4")} davlat={t("davlat4")}/>
                <Box imgg={sharm} textjon={t("textjon5")} shahar={t("shahar5")} davlat={t("davlat5")}/>
                <Box imgg={istanbul} textjon={t("textjon6")} shahar={t("shahar6")} davlat={t("davlat6")}/>

        </div>
    </div>
      
    </>
  )
}

export default Service
