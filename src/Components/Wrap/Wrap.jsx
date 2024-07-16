import React from 'react'
import './Wrap.scss'
import { useTranslation } from 'react-i18next'

const Wrap = ({imagess,h,data,wrapTitle}) => {
    const {t,i18n} =useTranslation();
  return (
    <>
    <div className="wrap">
      <i  className='wrap-icon'>{imagess}</i>

        <h1 className='wrap-title'>{    wrapTitle}</h1>
       <a className='wrap-link' href={h}>{data}</a>
      
    </div>
      
    </>
  )
}

export default Wrap
